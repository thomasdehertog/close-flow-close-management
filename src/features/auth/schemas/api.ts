import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
})

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required")
})

export type SignUpBody = z.infer<typeof signUpSchema>
export type SignInBody = z.infer<typeof signInSchema> 