"use server"

import { getCookie } from "hono/cookie"
import { createMiddleware } from "hono/factory"
import { Client, Account, Databases, Storage, Models } from "node-appwrite"
import { AUTH_COOKIE } from "@/features/auth/constants"

// Define types for the middleware context
type AdditionalVariables = {
  account: Account
  databases: Databases
  storage: Storage
  user: Models.User<Models.Preferences>
}

export const sessionMiddleware = createMiddleware<{
  Variables: AdditionalVariables
}>(async (c, next) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

  const session = getCookie(c, AUTH_COOKIE)
  if (!session) {
    return c.json(
      { error: 'Unauthorized' },
      401
    )
  }

  client.setSession(session)

  const account = new Account(client)
  const databases = new Databases(client)
  const storage = new Storage(client)
  
  // Get current user
  const user = await account.get()

  // Add to context
  c.set('account', account)
  c.set('databases', databases)
  c.set('storage', storage)
  c.set('user', user)

  await next()
}) 