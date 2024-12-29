import { sessionMiddleware } from '@/lib/session-middleware'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const response = await sessionMiddleware.handle(request)
    const user = response.get('user')
    
    return NextResponse.json({
      success: true,
      data: { user }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    )
  }
} 