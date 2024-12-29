"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DottedSeparator } from "@/components/dotted-separator"
import { Loader, LogOut } from "lucide-react"
import { useLogout } from "../api/use-logout"
import { useCurrent } from "../api/use-current"

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent()
  const { mutate: logout } = useLogout()

  if (isLoading) {
    return (
      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-neutral-200 border border-neutral-300">
        <Loader className="h-4 w-4 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!user) return null

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="h-10 w-10 hover:opacity-75 transition border border-neutral-300">
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
            {user.name?.[0].toUpperCase() || user.email?.[0].toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="bottom" className="w-60" sideOffset={10}>
        <div className="flex flex-col items-center justify-center gap-2 p-2.5 py-4">
          <Avatar className="h-[52px] w-[52px] text-xl">
            <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
              {user.name?.[0].toUpperCase() || user.email?.[0].toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">{user.name || 'User'}</p>
            <p className="text-xs text-neutral-500">{user.email}</p>
          </div>
        </div>

        <DottedSeparator className="mb-1" />

        <DropdownMenuItem 
          className="h-10 flex items-center justify-center text-amber-700 font-medium cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 