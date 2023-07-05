import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.url.includes('/about') || request.url.includes('_next')) {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL('/about', request.url));
}
