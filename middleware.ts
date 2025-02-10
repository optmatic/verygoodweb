import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Vercel provides country info in the headers under "x-vercel-ip-country"
  const country = request.headers.get('x-vercel-ip-country') || ''; // Default to empty string if not available
  const url = request.nextUrl.clone();

  // Redirect only if the user is in Australia and is on the homepage
  if (country.toLowerCase() === 'au' && url.pathname === '/') {
    url.pathname = '/au';
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow normal behavior
}

// Apply middleware only to the homepage (`/`)
export const config = {
  matcher: '/',
};
