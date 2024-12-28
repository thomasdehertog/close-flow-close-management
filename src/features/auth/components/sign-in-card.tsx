"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DottedSeparator } from "@/components/dotted-separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

export function SignInCard() {
  return (
    <Card className="w-[486px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 space-y-4">
        <form className="space-y-4">
          <Input 
            type="email"
            placeholder="Enter email address"
            disabled={false}
          />
          <Input 
            type="password"
            placeholder="Enter password"
            disabled={false}
          />
          <Button className="w-full" size="lg">
            Log in
          </Button>
        </form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant="secondary" size="lg" className="w-full" disabled>
          <FcGoogle className="mr-2" size={20} />
          Login with Google
        </Button>
        <Button variant="secondary" size="lg" className="w-full" disabled>
          <FaGithub className="mr-2" size={20} />
          Login with GitHub
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-700">
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  )
} 