"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap
} from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: Users, label: "Users", href: "/users", active: false },
  { icon: BarChart3, label: "Analytics", href: "/analytics", active: false },
  { icon: Settings, label: "Settings", href: "/settings", active: false },
]

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeHover, setActiveHover] = useState<string | null>(null)

  return (
    <TooltipProvider delayDuration={200}>
      <div className={cn(
        "flex flex-col h-screen bg-gradient-to-b from-card to-card/95 border-r border-border/50 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-border/50">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <h2 className="font-bold text-lg">Admin</h2>
            </div>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className={cn("ml-auto hover:bg-secondary/50 transition-colors", collapsed && "ml-0")}
              >
                {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="ml-2">
              {collapsed ? "Expand" : "Collapse"}
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = item.active
            const isHovered = activeHover === item.label
            
            return (
              <Tooltip key={item.label} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start transition-all duration-200 relative overflow-hidden",
                      collapsed && "px-2 justify-center",
                      isActive && "bg-primary/10 text-primary hover:bg-primary/15",
                      !isActive && "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                    )}
                    onMouseEnter={() => setActiveHover(item.label)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    {isActive && !collapsed && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary/60" />
                    )}
                    <item.icon className={cn(
                      "h-5 w-5 flex-shrink-0 transition-all duration-200",
                      isHovered && "scale-110"
                    )} />
                    {!collapsed && (
                      <>
                        <span className="ml-3">{item.label}</span>
                        {isActive && <div className="absolute right-2 h-2 w-2 rounded-full bg-primary" />}
                      </>
                    )}
                  </Button>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" className="ml-2 font-medium">
                    {item.label}
                  </TooltipContent>
                )}
              </Tooltip>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border/50 p-4">
          {!collapsed && (
            <div className="text-xs text-muted-foreground text-center py-2">
              <p className="font-medium">Dashboard v1.0</p>
              <p>Premium Admin Panel</p>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}