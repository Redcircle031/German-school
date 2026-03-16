import { NextRequest, NextResponse } from 'next/server';
import { verifyCredentials, createSession, checkLoginRateLimit } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    // Rate limiting: 5 attempts per 15 minutes
    const rateLimit = checkLoginRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: `Too many login attempts. Please try again in ${Math.ceil(rateLimit.retryAfter! / 60)} minutes.` },
        { status: 429 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isValid = await verifyCredentials(email, password);

    if (!isValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    await createSession(email);

    return NextResponse.json(
      { message: 'Login successful', redirect: '/admin/dashboard' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
