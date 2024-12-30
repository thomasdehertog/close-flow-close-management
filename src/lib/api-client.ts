import { hc } from 'hono/client'
import type { AppType } from '@/app/api/[[...route]]/route'

// Create type-safe client
export const client = hc<AppType>('/api') 