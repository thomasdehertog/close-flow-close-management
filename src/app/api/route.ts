import { auth } from '@/features/auth/server/route'
import { handle } from '@/lib/hono-handler'

export const GET = handle(auth)
export const POST = handle(auth) 