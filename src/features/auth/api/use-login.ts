import { useMutation } from '@tanstack/react-query'
import { client } from '@/lib/api-client'
import { LoginValues } from '../schemas'

export function useLogin() {
  return useMutation({
    mutationFn: async (values: LoginValues) => {
      const response = await client.api.auth.login.post({
        json: values
      })

      if (!response.success) {
        throw new Error(response.message || 'Login failed')
      }

      return response
    }
  })
} 