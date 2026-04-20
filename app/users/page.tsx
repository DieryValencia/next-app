import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/dashboard/data-table"

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-3 pb-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Users Management
            </h1>
            <p className="text-muted-foreground mt-2 text-base">
              Manage, monitor and control all user accounts in your system.
            </p>
          </div>
        </div>

        {/* Users Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">All Users</h2>
            <p className="text-sm text-muted-foreground mt-1">View and manage all registered users in your system.</p>
          </div>
          <DataTable />
        </div>

        <Separator className="bg-border/40" />

        {/* User Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card/50 border border-border/40 rounded-lg p-6">
            <div className="text-sm font-medium text-muted-foreground">Total Users</div>
            <div className="text-3xl font-bold mt-2">1,234</div>
            <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
          </div>
          <div className="bg-card/50 border border-border/40 rounded-lg p-6">
            <div className="text-sm font-medium text-muted-foreground">Active Users</div>
            <div className="text-3xl font-bold mt-2">892</div>
            <p className="text-xs text-muted-foreground mt-2">72.4% of total users</p>
          </div>
          <div className="bg-card/50 border border-border/40 rounded-lg p-6">
            <div className="text-sm font-medium text-muted-foreground">New Users Today</div>
            <div className="text-3xl font-bold mt-2">24</div>
            <p className="text-xs text-muted-foreground mt-2">+8% increase</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
