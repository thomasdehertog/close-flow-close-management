import { Hono } from 'hono'
import { handle as honoHandle } from 'hono/vercel'
import { NextRequest } from 'next/server'

export const handle = (app: Hono) => {
  return async (request: NextRequest) => {
    return honoHandle(app, request)
  }
} 