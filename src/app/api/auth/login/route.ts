import { account } from '@/lib/appwrite-server'
import { NextResponse } from 'next/server'
import { ID } from 'node-appwrite'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Create email session
    const session = await account.createEmailSession(
      body.email,
      body.password
    )

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      session
    })

  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        message: error?.message || 'Login failed'
      },
      { status: 500 }
    )
  }
} 