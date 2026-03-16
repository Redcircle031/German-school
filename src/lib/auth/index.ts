import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHmac, randomBytes, timingSafeEqual } from 'crypto';
import bcrypt from 'bcryptjs';

// Require environment variables — fail loudly if not set
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Environment variable ${name} is required. See .env.local.example for setup instructions.`
    );
  }
  return value;
}

const ADMIN_EMAIL = requireEnv('ADMIN_EMAIL');
const ADMIN_PASSWORD_HASH = requireEnv('ADMIN_PASSWORD_HASH');
const SESSION_SECRET = requireEnv('SESSION_SECRET');

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = 60 * 60 * 24; // 24 hours (reduced from 7 days)
const CSRF_COOKIE_NAME = 'csrf_token';

export interface AdminUser {
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

// --- Password hashing (bcrypt) ---

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  if (email !== ADMIN_EMAIL) return false;
  return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

// --- Session management ---

function signToken(payload: string): string {
  return createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
}

export async function createSession(email: string): Promise<void> {
  const cookieStore = await cookies();
  const sessionData = {
    email,
    createdAt: Date.now(),
    nonce: randomBytes(16).toString('hex'),
  };

  const payload = Buffer.from(JSON.stringify(sessionData)).toString('base64');
  const signature = signToken(payload);
  const sessionToken = `${payload}.${signature}`;

  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_DURATION,
    path: '/admin',
  });

  // Also generate CSRF token for the session
  const csrfToken = randomBytes(32).toString('hex');
  cookieStore.set(CSRF_COOKIE_NAME, csrfToken, {
    httpOnly: false, // Must be readable by JS to include in requests
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_DURATION,
    path: '/',
  });
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  cookieStore.delete(CSRF_COOKIE_NAME);
}

export async function getSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken) {
    return null;
  }

  try {
    const [payload, signature] = sessionToken.split('.');
    if (!payload || !signature) return null;

    // Verify HMAC signature using timing-safe comparison
    const expectedSignature = signToken(payload);

    // DEBUG: Log signature lengths for debugging
    console.log('[Auth Debug] Input signature length:', signature.length, 'hex:', Buffer.from(signature, 'hex').length);
    console.log('[Auth Debug] Expected signature length:', expectedSignature.length, 'hex:', Buffer.from(expectedSignature, 'hex').length);
    console.log('[Auth Debug] Signatures match (string):', signature === expectedSignature);

    const sigBuffer = Buffer.from(signature, 'hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'hex');

    if (sigBuffer.length !== expectedBuffer.length || !timingSafeEqual(sigBuffer, expectedBuffer)) {
      await deleteSession();
      return null;
    }

    const sessionData = JSON.parse(Buffer.from(payload, 'base64').toString());

    // Check expiry
    const sessionAge = Date.now() - sessionData.createdAt;
    if (sessionAge > SESSION_DURATION * 1000) {
      await deleteSession();
      return null;
    }

    return {
      email: sessionData.email,
      name: 'Admin',
      role: 'admin',
    };
  } catch {
    await deleteSession();
    return null;
  }
}

// --- CSRF protection ---

export async function verifyCsrfToken(request: Request): Promise<boolean> {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  const headerToken = request.headers.get('x-csrf-token');

  if (!cookieToken || !headerToken) return false;

  try {
    const cookieBuffer = Buffer.from(cookieToken);
    const headerBuffer = Buffer.from(headerToken);
    if (cookieBuffer.length !== headerBuffer.length) return false;
    return timingSafeEqual(cookieBuffer, headerBuffer);
  } catch {
    return false;
  }
}

// --- Auth guards ---

export async function requireAuth(): Promise<AdminUser> {
  const session = await getSession();

  if (!session) {
    redirect('/admin/login');
  }

  return session;
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}

// --- Login rate limiting ---

const loginAttempts = new Map<string, { count: number; resetTime: number }>();

// Cleanup expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of loginAttempts.entries()) {
    if (now > value.resetTime) {
      loginAttempts.delete(key);
    }
  }
}, 60 * 1000);

export function checkLoginRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 5;

  const record = loginAttempts.get(ip);

  if (!record || now > record.resetTime) {
    loginAttempts.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= maxAttempts) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }

  record.count++;
  return { allowed: true };
}
