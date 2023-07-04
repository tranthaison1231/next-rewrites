import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.url.startsWith('/about')) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/about', request.url));
}
