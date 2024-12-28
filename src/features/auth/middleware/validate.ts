import { Context, Next } from 'hono'
import { z } from 'zod'

export const validate = (schema: z.ZodSchema) => {
  return async (c: Context, next: Next) => {
    try {
      const body = await c.req.json()
      const result = schema.parse(body)
      c.set('validated-body', result)
      await next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return c.json({
          success: false,
          errors: error.errors
        }, 400)
      }
      return c.json({
        success: false,
        message: 'Invalid request body'
      }, 400)
    }
  }
} 