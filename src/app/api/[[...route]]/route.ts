import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { validate } from '@/features/auth/middleware/validate'
import { signUpSchema, signInSchema } from '@/features/auth/schemas/api'

// Create Hono app
const app = new Hono().basePath('/api')

// Auth routes
const auth = app.route('/auth')

// Sign up
auth.post('/sign-up', validate(signUpSchema), async (c) => {
  const body = c.get('validated-body')
  
  // TODO: Implement actual sign up logic
  console.log('Sign up attempt:', body)
  
  return c.json({
    success: true,
    message: 'Account created successfully'
  })
})

// Sign in
auth.post('/sign-in', validate(signInSchema), async (c) => {
  const body = c.get('validated-body')
  
  // TODO: Implement actual sign in logic
  console.log('Sign in attempt:', body)
  
  return c.json({
    success: true,
    message: 'Signed in successfully',
    token: 'dummy_token'
  })
})

// Health check
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  })
})

// Export for Next.js API routes
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app) 