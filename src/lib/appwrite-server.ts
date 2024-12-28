import { Client, Account, Databases } from 'node-appwrite'

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  // Use API key for server-side operations
  .setKey(process.env.APPWRITE_API_KEY!)

export const account = new Account(client)
export const databases = new Databases(client)

// Export the client for other uses
export { client } 