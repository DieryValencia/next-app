"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-secondary/10 pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-card/95 backdrop-blur-md border-r border-border/40">
          <Sidebar collapsed={false} onToggle={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-auto">
          <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}