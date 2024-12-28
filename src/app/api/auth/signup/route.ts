import { account } from '@/lib/appwrite-server'
import { NextResponse } from 'next/server'
import { ID } from 'node-appwrite'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Create user account
    const user = await account.create(
      ID.unique(),
      body.email,
      body.password,
      body.name
    )

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user
    })

  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        message: error?.message || 'Registration failed'
      },
      { status: 500 }
    )
  }
} 