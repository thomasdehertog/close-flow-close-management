"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isSignIn = pathname === "/sign-in"

  return (
    <main className="flex min-h-screen">
      {/* Left side - Colored background */}
      <div className="hidden lg:flex w-1/2 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-400 via-purple-400 to-indigo-400 opacity-90" />
        <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-yellow-100/50 via-pink-300/50 to-violet-500/50" />
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