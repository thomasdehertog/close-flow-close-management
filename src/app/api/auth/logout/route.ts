import { sessionMiddleware } from '@/lib/session-middleware'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const response = await sessionMiddleware.handle(request)
    const account = response.get('account')
    await account.deleteSession('current')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    )
  }
} 