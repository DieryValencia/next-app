import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Separator } from "@/components/ui/separator"
import { Shield, Users, Lock, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AdminPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-3 pb-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-2 text-base">
              Manage system configuration, permissions, and administrative settings.
            </p>
          </div>
        </div>

        {/* Admin Options Grid */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Administration</h2>
            <p className="text-sm text-muted-foreground mt-1">System management and configuration options</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* User Management Card */}
            <Card className="p-6 border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">User Management</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manage user accounts, roles, and permissions across the system.
                  </p>
                </div>
              </div>
            </Card>

            {/* Security Settings Card */}
            <Card className="p-6 border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                  <Lock className="h-6 w-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">Security Settings</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Configure security policies, authentication methods, and access control.
                  </p>
                </div>
              </div>
            </Card>

            {/* System Configuration Card */}
            <Card className="p-6 border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Settings className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">System Configuration</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Configure system-wide settings, API keys, and integrations.
                  </p>
                </div>
              </div>
            </Card>

            {/* Audit Logs Card */}
            <Card className="p-6 border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Shield className="h-6 w-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">Audit Logs</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    View system audit logs and monitoring events.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Separator className="bg-border/40" />

        {/* Admin Info */}
        <div className="bg-card/50 border border-border/40 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Administrative Controls</h3>
          <p className="text-sm text-muted-foreground">
            This panel provides access to system-wide administrative features. Only authorized administrators can access these settings. All actions performed here are logged for security and compliance purposes.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
