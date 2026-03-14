/**
 * Simple Authentication for Admin Dashboard
 * Uses environment variables for credentials (for demo purposes)
 * In production, use a proper auth provider like NextAuth.js
 */

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHash } from 'crypto';

// Admin credentials (in production, use environment variables)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@wbs.pl';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || createHash('sha256').update('admin123').digest('hex');

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = 60 * 60 * 24 * 7; // 7 days

export interface AdminUser {
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

// Hash password
export function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex');
}

// Verify credentials
export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  const passwordHash = hashPassword(password);
  return email === ADMIN_EMAIL && passwordHash === ADMIN_PASSWORD_HASH;
}

// Create session
export async function createSession(email: string): Promise<void> {
  const cookieStore = await cookies();
  const sessionData = {
    email,
    createdAt: Date.now(),
  };
  
  // In production, use a proper session token
  const sessionToken = Buffer.from(JSON.stringify(sessionData)).toString('base64');
  
  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION,
    path: '/',
  });
}

// Delete session
export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

// Get current session
export async function getSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  
  if (!sessionToken) {
    return null;
  }
  
  try {
    const sessionData = JSON.parse(Buffer.from(sessionToken, 'base64').toString());
    
    // Check if session is expired
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

// Require authentication (use in pages)
export async function requireAuth(): Promise<AdminUser> {
  const session = await getSession();
  
  if (!session) {
    redirect('/admin/login');
  }
  
  return session;
}

// Check if user is authenticated (use in components)
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}
