import { createSessionClient } from './appwrite-client'

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient()
    return await account.get()
  } catch (error) {
    return null
  }
} 