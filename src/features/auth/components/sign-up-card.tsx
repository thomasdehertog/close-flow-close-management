"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card className="w-full max-w-[486px] border-none shadow-none">
      <CardHeader className="flex flex-col items-start p-7 gap-2">
        <CardTitle className="text-[32px] font-medium text-[#333333]">
          Create an account
        </CardTitle>
        <p className="text-[16px] text-[#333333]">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[#111111] underline">
            Log in
          </Link>
        </p>
      </CardHeader>

      <CardContent className="p-7 space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <div className="text-[16px] text-[#666666] font-normal">
                    User name
                  </div>
                  <FormControl>
                    <Input 
                      {...field}
                      className="h-[56px] rounded-[12px] border-[#666666]/35"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <div className="text-[16px] text-[#666666] font-normal">
                    Email address
                  </div>
                  <FormControl>
                    <Input 
                      type="email"
                      {...field}
                      className="h-[56px] rounded-[12px] border-[#666666]/35"
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
                <FormItem className="space-y-1">
                  <div className="text-[16px] text-[#666666] font-normal">
                    Password
                  </div>
                  <FormControl>
                    <Input 
                      type="password"
                      {...field}
                      className="h-[56px] rounded-[12px] border-[#666666]/35"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full h-[56px] rounded-[12px] text-[16px]"
            >
              Sign up
            </Button>
          </form>
        </Form>

        <div className="flex items-center gap-6">
          <div className="h-[2px] flex-1 bg-[#666666]/25" />
          <div className="text-[24px] text-[#666666] font-normal">OR</div>
          <div className="h-[2px] flex-1 bg-[#666666]/25" />
        </div>

        <div className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="w-full h-[80px] rounded-[40px] border-[#333333] border-[1px] text-[24px] text-[#333333] font-normal hover:bg-white"
            disabled={false}
          >
            <div className="flex items-center gap-4">
              <FcGoogle size={24} />
              <span>Sign up with Google</span>
            </div>
          </Button>
          <Button 
            variant="outline"
            className="w-full h-[80px] rounded-[40px] border-[#333333] border-[1px] text-[24px] text-[#333333] font-normal hover:bg-white"
            disabled={false}
          >
            <div className="flex items-center gap-4">
              <FaGithub size={24} />
              <span>Sign up with GitHub</span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 