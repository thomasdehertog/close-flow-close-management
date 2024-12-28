import { useMutation } from "@tanstack/react-query"
import { LoginValues } from "../schemas"

interface LoginResponse {
  success: boolean
  message: string
  token?: string
}

interface LoginOptions {
  json: LoginValues
}

const login = async ({ json }: LoginOptions): Promise<LoginResponse> => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json()
}

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginOptions>({
    mutationFn: login
  })
} 