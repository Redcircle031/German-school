import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

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
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

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

    // Send welcome email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const subjects: Record<string, string> = {
          pl: 'Witamy w newsletterze WBS!',
          de: 'Willkommen beim WBS-Newsletter!',
          en: 'Welcome to the WBS Newsletter!',
        };
        const welcomeHtml: Record<string, string> = {
          pl: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
            <div style="background:#dc2626;padding:24px 32px"><img src="https://wbs.pl/images/logos/wbs-logo.webp" alt="WBS" style="height:48px;filter:brightness(0) invert(1)"></div>
            <div style="padding:32px">
              <h2 style="color:#dc2626;margin-top:0">Dziękujemy za zapis!</h2>
              <p>Dołączyłeś/aś do newslettera Willy-Brandt-Schule Warschau. Będziemy Cię informować o aktualnych wydarzeniach, ważnych komunikatach i życiu szkoły.</p>
              <p style="color:#666;font-size:14px">Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta<br>ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warszawa</p>
            </div>
          </div>`,
          de: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
            <div style="background:#dc2626;padding:24px 32px"><img src="https://wbs.pl/images/logos/wbs-logo.webp" alt="WBS" style="height:48px;filter:brightness(0) invert(1)"></div>
            <div style="padding:32px">
              <h2 style="color:#dc2626;margin-top:0">Vielen Dank für Ihre Anmeldung!</h2>
              <p>Sie haben den Newsletter der Willy-Brandt-Schule Warschau abonniert. Wir werden Sie über aktuelle Veranstaltungen und das Schulleben informieren.</p>
              <p style="color:#666;font-size:14px">Deutsch-Polnische Begegnungsschule<br>ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warschau</p>
            </div>
          </div>`,
          en: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
            <div style="background:#dc2626;padding:24px 32px"><img src="https://wbs.pl/images/logos/wbs-logo.webp" alt="WBS" style="height:48px;filter:brightness(0) invert(1)"></div>
            <div style="padding:32px">
              <h2 style="color:#dc2626;margin-top:0">Thank you for subscribing!</h2>
              <p>You have joined the Willy-Brandt-Schule Warsaw newsletter. We will keep you informed about upcoming events, announcements and school life.</p>
              <p style="color:#666;font-size:14px">Polish-German School of Meetings and Dialogue<br>ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warsaw</p>
            </div>
          </div>`,
        };
        await resend.emails.send({
          from: 'WBS Warschau <noreply@wbs.pl>',
          to: normalizedEmail,
          subject: subjects[locale] || subjects.pl,
          html: welcomeHtml[locale] || welcomeHtml.pl,
        });
      } catch (emailErr) {
        // Non-fatal — subscription already saved
        console.error('Newsletter welcome email failed:', emailErr instanceof Error ? emailErr.message : 'Unknown');
      }
    } else if (process.env.NODE_ENV === 'development') {
      console.log('Newsletter subscription (no RESEND_API_KEY):', { email: normalizedEmail, locale });
    }

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
