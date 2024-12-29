import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getLoggedInUser } from '@/lib/auth'

export async function authMiddleware(request: NextRequest) {
  try {
    const user = await getLoggedInUser()
    
    if (!user) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }
} 