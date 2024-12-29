"use server"

import { cookies } from 'next/headers'
import { Client, Account } from 'node-appwrite'
import { AUTH_COOKIE } from './constants'

export async function getCurrent() {
  try {
    const cookieStore = cookies()
    const session = cookieStore.get(AUTH_COOKIE)

    if (!session?.value) {
      return null
    }

    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setSession(session.value)

    const account = new Account(client)
    return await account.get()
  } catch (error) {
    return null
  }
} 