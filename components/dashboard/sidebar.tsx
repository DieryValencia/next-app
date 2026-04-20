import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col bg-card border-r transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="font-semibold">Admin Panel</h2>}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <Separator />
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              collapsed && "px-2"
            )}
          >
            <item.icon className="h-4 w-4" />
            {!collapsed && <span className="ml-2">{item.label}</span>}
          </Button>
        ))}
      </nav>
    </div>
  )
}