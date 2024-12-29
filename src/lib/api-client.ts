import { hc } from 'hono/client'
import type { AppType } from '@/app/api/auth/[...route]/route'

export const client = hc<AppType>('/api/auth') 