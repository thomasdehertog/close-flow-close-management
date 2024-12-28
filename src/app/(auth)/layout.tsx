"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { QueryProvider } from "@/components/query-provider"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname()
  const isSignIn = pathname === "/sign-in"

  return (
    <QueryProvider>
      <main className="min-h-screen bg-neutral-100">
        <div className="mx-auto max-w-screen-2xl p-4">
          <nav className="flex justify-between items-center">
            <Image 
              src="/logo.svg" 
              alt="logo" 
              width={220}
              height={40}
              priority
            />
            <Button variant="secondary" asChild>
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Sign up" : "Log in"}
              </Link>
            </Button>
          </nav>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
            {children}
          </div>
        </div>
      </main>
    </QueryProvider>
  )
} 