import { NextRequest, NextResponse } from 'next/server';
import { deleteSession, getSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  // Verify user is actually authenticated before logout
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  await deleteSession();
  return NextResponse.redirect(new URL('/admin/login', request.url));
}
