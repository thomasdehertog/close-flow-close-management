import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { loginSchema } from '../schemas'
import { AUTH_COOKIE } from '../constants'
import { createAdminClient } from '@/lib/create-admin-client'
import { setCookie } from 'hono/cookie'
import { AppwriteException } from 'node-appwrite'

const auth = new Hono()

auth.post('/login', zValidator('json', loginSchema), async (c) => {
  try {
    const { email, password } = c.req.valid('json')
    console.log('Login attempt with:', { email })
    
    try {
      const account = await createAdminClient()
      console.log('Admin client created')

      const session = await account.createEmailSession(email, password)
      console.log('Session created:', session.$id)

      setCookie(c, AUTH_COOKIE, session.secret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      })

      return c.json({
        success: true,
        message: 'Login successful'
      })
    } catch (error) {
      console.error('Appwrite error:', error)
      
      if (error instanceof AppwriteException) {
        return c.json({
          success: false,
          message: 'Invalid email or password'
        }, {
          status: 401
        })
      }

      throw error
    }
  } catch (error: any) {
    console.error('Login error:', error)
    return c.json({
      success: false,
      message: error?.message || 'Login failed'
    }, {
      status: 500
    })
  }
})

auth.post('/register', zValidator('json', registerSchema), async (c) => {
  const { email, password, name } = c.req.valid('json')
  // ... register logic
})

// Protected routes
auth.use('/logout', sessionMiddleware)
auth.post('/logout', async (c) => {
  const account = c.get('account')
  await account.deleteSession('current')
  return c.json({ success: true })
})

auth.use('/current', sessionMiddleware)
auth.get('/current', async (c) => {
  const user = c.get('user')
  return c.json({ data: { user } })
})

export { auth } 