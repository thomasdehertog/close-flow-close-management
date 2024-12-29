import { Hono } from 'hono'
import type { Schema } from 'hono/types'
import { auth } from '@/features/auth/server/route'

const app = new Hono<{ Variables: {}; Schema: Schema }>()

// Mount auth routes
app.route('/', auth)

export const GET = app.fetch
export const POST = app.fetch
export const PUT = app.fetch
export const DELETE = app.fetch 