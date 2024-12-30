import { Hono } from 'hono'
import { setCookie, deleteCookie } from 'hono/cookie'
import { zValidator } from '@hono/zod-validator'
import { loginSchema, registerSchema } from '../schemas'
import { AUTH_COOKIE } from '../constants'
import { createAdminClient } from '@/lib/appwrite-server'

const auth = new Hono()

// Login route
auth.post('/login', zValidator('json', loginSchema), async (c) => {
  try {
    const { email, password } = c.req.valid('json')
    const account = await createAdminClient()
    
    const session = await account.createSession(email, password)
    
    setCookie(c, AUTH_COOKIE, session.secret, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    })

    return c.json({ success: true })
  } catch (error: any) {
    return c.json({ 
      success: false, 
      message: error?.message || 'Login failed' 
    }, 401)
  }
})

// Register route
auth.post('/register', zValidator('json', registerSchema), async (c) => {
  try {
    const { email, password, name } = c.req.valid('json')
    const account = await createAdminClient()
    
    await account.create('unique()', email, password, name)
    const session = await account.createSession(email, password)
    
    setCookie(c, AUTH_COOKIE, session.secret, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    })

    return c.json({ success: true })
  } catch (error: any) {
    return c.json({
      success: false,
      message: error?.message || 'Registration failed'
    }, 401)
  }
})

// Logout route
auth.post('/logout', async (c) => {
  deleteCookie(c, AUTH_COOKIE)
  return c.json({ success: true })
})

export { auth } 