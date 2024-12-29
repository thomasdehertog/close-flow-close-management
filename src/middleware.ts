import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_COOKIE } from '@/features/auth/constants'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(AUTH_COOKIE)

  // Auth pages - redirect to home if logged in
  if (request.nextUrl.pathname.startsWith('/sign-in') || request.nextUrl.pathname.startsWith('/sign-up')) {
    if (cookie) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  // Protected pages - redirect to login if not logged in
  if (!cookie) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 