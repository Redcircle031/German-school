import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

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

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

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

    // HTML encode to prevent XSS
    const encodeHtml = (str: string) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const sanitizedData = {
      name: encodeHtml(name),
      email,
      phone: phone || null,
      subject: encodeHtml(subject),
      message: encodeHtml(message),
      consent: true,
      submittedAt: new Date().toISOString(),
      ip,
    };

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const toEmail = process.env.CONTACT_FORM_EMAIL || 'kontakt@wbs.pl';
      await resend.emails.send({
        from: 'WBS Formularz <noreply@wbs.pl>',
        to: toEmail,
        replyTo: sanitizedData.email,
        subject: `[Formularz WBS] ${sanitizedData.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">Nowa wiadomość z formularza WBS</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Imię i nazwisko:</td><td style="padding: 8px 0;">${sanitizedData.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;">${sanitizedData.email}</td></tr>
              ${sanitizedData.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Telefon:</td><td style="padding: 8px 0;">${sanitizedData.phone}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Temat:</td><td style="padding: 8px 0;">${sanitizedData.subject}</td></tr>
            </table>
            <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
            <p style="white-space: pre-wrap; color: #333;">${sanitizedData.message}</p>
            <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #999;">Wysłano: ${sanitizedData.submittedAt} | IP: ${sanitizedData.ip}</p>
          </div>
        `,
      });
    } else if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission (no RESEND_API_KEY):', { email: sanitizedData.email, subject: sanitizedData.subject });
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
