"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DottedSeparator } from "@/components/dotted-separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useLogin } from "../api/use-login"
import { loginSchema } from "../schemas"

export const SignInCard = () => {
  const { mutate } = useLogin()
  
  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values })
  }

  return (
    <Card className="w-full max-w-[486px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator className="mb-7" />
        
        <CardContent className="p-7 space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter email address"
                        type="email"
                        {...field}
                      />
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
                      <Input
                        placeholder="Enter password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button size="lg" className="w-full" type="submit">
                Log in
              </Button>
            </form>
          </Form>
        </CardContent>

        <DottedSeparator />

        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button variant="secondary" size="lg" className="w-full">
            <FcGoogle className="mr-2" size={20} />
            Login with Google
          </Button>

          <Button variant="secondary" size="lg" className="w-full">
            <FaGithub className="mr-2" size={20} />
            Login with GitHub
          </Button>
        </CardContent>

        <DottedSeparator />
        <CardContent className="p-7 flex items-center justify-center">
          <p>
            Don&apos;t have an account?&nbsp;
            <Link href="/sign-up" className="text-blue-700">
              Sign up
            </Link>
          </p>
        </CardContent>
      </div>
    </Card>
  )
} 