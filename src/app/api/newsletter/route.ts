import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'src', 'data', 'newsletter-subscribers.json');

// --- Zod schema ---
const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address').max(254),
  locale: z.enum(['pl', 'de', 'en']).default('pl'),
});

interface Subscriber {
  email: string;
  subscribedAt: string;
  locale: string;
  confirmed: boolean;
}

function getSubscribers(): Subscriber[] {
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      return JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8'));
    }
  } catch {
    // ignore
  }
  return [];
}

function saveSubscribers(subscribers: Subscriber[]) {
  const dir = path.dirname(SUBSCRIBERS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

// --- Rate limiting ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 1000);

function checkRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const windowMs = 24 * 60 * 60 * 1000; // 24 hours
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }
  if (record.count >= maxRequests) return { allowed: false };
  record.count++;
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (!checkRateLimit(ip).allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many subscription attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = NewsletterSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0]?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    const { email, locale } = result.data;
    const normalizedEmail = email.toLowerCase();
    const subscribers = getSubscribers();

    if (subscribers.some(s => s.email === normalizedEmail)) {
      return NextResponse.json({
        success: true,
        data: { message: 'You are already subscribed!' },
      });
    }

    subscribers.push({
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      locale,
      confirmed: true,
    });

    saveSubscribers(subscribers);

    return NextResponse.json({
      success: true,
      data: { message: 'Successfully subscribed to the newsletter!' },
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
