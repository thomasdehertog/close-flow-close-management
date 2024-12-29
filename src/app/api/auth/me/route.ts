import { getLoggedInUser } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const user = await getLoggedInUser()
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      data: { user }
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Failed to get user' },
      { status: 500 }
    )
  }
} 