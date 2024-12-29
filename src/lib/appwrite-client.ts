import { Client, Account } from 'node-appwrite'
import { cookies } from 'next/headers'

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

  const session = cookies().get('auth-session')
  if (!session?.value) {
    throw new Error('No session')
  }

  client.setSession(session.value)

  return {
    account: new Account(client)
  }
} 