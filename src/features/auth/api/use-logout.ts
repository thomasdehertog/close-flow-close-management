import { useMutation } from '@tanstack/react-query'
import { client } from '@/lib/api-client'

export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      const response = await client.api.auth.logout.post()
      
      if (!response.ok) {
        throw new Error('Failed to logout')
      }

      return response.json()
    }
  })
} 