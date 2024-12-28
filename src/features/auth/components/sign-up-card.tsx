"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DottedSeparator } from "@/components/dotted-separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { signUpSchema, type SignUpValues } from "../schemas"

export function SignUpCard() {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: SignUpValues) => {
    console.log(values)
  }

  return (
    <Card className="w-[486px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          By signing up you agree to our{" "}
          <Link href="/privacy" className="text-blue-700">Privacy Policy</Link>{" "}
          and{" "}
          <Link href="/terms" className="text-blue-700">Terms of Service</Link>
        </CardDescription>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email" 
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg">
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant="secondary" size="lg" className="w-full" disabled>
          <FcGoogle className="mr-2" size={20} />
          Sign up with Google
        </Button>
        <Button variant="secondary" size="lg" className="w-full" disabled>
          <FaGithub className="mr-2" size={20} />
          Sign up with GitHub
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-700">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  )
} 