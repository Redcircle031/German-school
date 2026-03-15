import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// --- Zod schema for contact form ---
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100).trim(),
  email: z.string().email('Invalid email address').max(254),
  phone: z.string().max(20).optional().nullable(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200).trim(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000).trim(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
});

// --- In-memory rate limiting ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Cleanup expired entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 1000);

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 10;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }

  record.count++;
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  try {
    // Check request body size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json(
        { success: false, error: { code: 'PAYLOAD_TOO_LARGE', message: 'Request body too large' } },
        { status: 413 }
      );
    }

    const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: `Too many submissions. Please try again in ${Math.floor(rateLimit.retryAfter! / 60)} minutes.`,
          },
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = ContactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid form data',
            details: result.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    const sanitizedData = {
      name,
      email,
      phone: phone || null,
      subject,
      message,
      consent: true,
      submittedAt: new Date().toISOString(),
      ip,
    };

    // TODO: Integrate email service (Nodemailer, Resend, SendGrid) when ready
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', { email: sanitizedData.email, subject: sanitizedData.subject });
    }

    return NextResponse.json({
      success: true,
      data: {
        message: 'Thank you for your message. We will get back to you soon.',
        submissionId: Date.now().toString(),
      },
    });
  } catch (error) {
    console.error('Contact form error:', error instanceof Error ? error.message : 'Unknown error');

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to submit form. Please try again later.',
        },
      },
      { status: 500 }
    );
  }
}
