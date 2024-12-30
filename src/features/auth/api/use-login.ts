// Path: src/features/auth/api/use-login.ts
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import { client } from '@/lib/api-client'
import { LoginValues } from '../schemas'

export function useLogin() {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: LoginValues) => {
      const response = await client.api.auth.login.post({
        json: values
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['current'] })
      router.refresh()
      router.push('/')
    }
  })
} 