import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { DataTable } from "@/components/dashboard/data-table"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </div>

        {/* KPI Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Key Metrics</h2>
          </div>
          <KPICards />
        </div>

        <Separator className="bg-border/30" />

        {/* Data Table Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">User Management</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage and monitor all registered users in your system.</p>
            </div>
          </div>
          <DataTable />
        </div>
      </div>
    </DashboardLayout>
  )
}
