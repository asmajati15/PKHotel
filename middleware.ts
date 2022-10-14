// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { parseCookies } from 'nookies';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.cookies.get('user'));
  if (request.cookies.get('user') === undefined) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST_URL}/api/login`);
  }
  return NextResponse.next();
}
