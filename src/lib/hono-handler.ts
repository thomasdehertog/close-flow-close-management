import { Hono } from 'hono'
import { NextRequest } from 'next/server'
import { handle as honoHandle } from 'hono/vercel'

export const handle = (app: Hono) => {
  return async (req: NextRequest) => {
    return honoHandle(app, req)
  }
} 