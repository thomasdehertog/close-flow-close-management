import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
  children: React.ReactNode
  params: {
    pathname: string
  }
}

export function AuthLayoutBase({ children, params }: AuthLayoutProps) {
  const isSignIn = params.pathname === "/sign-in"

  return (
    <main className="flex min-h-screen">
      {/* Left side - Colored background */}
      <div className="hidden lg:flex w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-pink-300 to-violet-500" />
        <Image
          src="/placeholder.jpg"
          alt="Background"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-white">
        <div className="mx-auto w-full max-w-[720px] p-4">
          <nav className="flex justify-end items-center mb-8">
            <Button variant="secondary" asChild>
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Sign up" : "Sign in"}
              </Link>
            </Button>
          </nav>
          <div className="flex-1 flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
} 