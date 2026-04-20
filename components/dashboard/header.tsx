"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Bell, Search, Sparkles, LogOut } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("")
  const [hasNotifications, setHasNotifications] = useState(true)

  const handleNotificationClick = () => {
    setHasNotifications(false)
    setTimeout(() => setHasNotifications(true), 3000)
  }

  const handleProfileClick = () => {
    alert("Opening profile page... (Demo)")
  }

  const handleSettingsClick = () => {
    alert("Opening settings page... (Demo)")
  }

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      alert("Logged out successfully! (Demo)")
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/30 bg-card/50 backdrop-blur-lg supports-[backdrop-filter]:bg-card/40 shadow-sm">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-4 flex-1">
          <Button variant="ghost" size="sm" onClick={onMenuClick} className="md:hidden hover:bg-secondary/50">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-col space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Diery Valencia</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground/60" />
            <Input
              placeholder="Search users, reports..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 pr-4 w-72 bg-secondary/30 border-border/50 hover:border-border/80 focus:bg-secondary/50 transition-colors"
            />
          </div>

          <Separator orientation="vertical" className="h-6" />
          
          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleNotificationClick}
            className="relative hover:bg-secondary/50 transition-colors"
          >
            <Bell className="h-5 w-5" />
            {hasNotifications && (
              <span className="absolute top-0 right-0 h-2 w-2 bg-destructive rounded-full animate-pulse"></span>
            )}
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative h-9 w-9 rounded-full p-0 hover:bg-secondary/50 transition-colors"
              >
                <Avatar className="h-9 w-9 border-2 border-primary/20">
                  <AvatarImage src="/avatars/01.png" alt="@admin" />
                  <AvatarFallback className="bg-primary/10">AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" sideOffset={8}>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold leading-none">Diery Valencia</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    dieryvale.01@gmail.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfileClick} className="cursor-pointer">
                <span className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Profile</span>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettingsClick} className="cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer">
                <span className="flex items-center space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
