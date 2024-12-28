import { useMutation } from "@tanstack/react-query"
import { LoginValues } from "../schemas"

interface LoginOptions {
  json: LoginValues
}

const login = async ({ json }: LoginOptions) => {
  // TODO: Implement actual login logic
  console.log('Login attempt with:', json)
  return json
}

export const useLogin = () => {
  return useMutation({
    mutationFn: login
  })
} 