import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest) {
//@ts-ignore
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token && req.nextUrl.pathname === '/api/auth/signin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
