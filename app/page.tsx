import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { DataTable } from "@/components/dashboard/data-table"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-3 pb-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Welcome back
            </h1>
            <p className="text-muted-foreground mt-2 text-base">
              Monitor your business performance and manage your users all in one place.
            </p>
          </div>
        </div>

        {/* KPI Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Key Metrics</h2>
            <p className="text-sm text-muted-foreground mt-1">Real-time insights into your system performance</p>
          </div>
          <KPICards />
        </div>

        <Separator className="bg-border/40" />

        {/* Data Table Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">User Management</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage and monitor all registered users in your system.</p>
          </div>
          <DataTable />
        </div>
      </div>
    </DashboardLayout>
  )
}
