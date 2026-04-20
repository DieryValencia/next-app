import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { DataTable } from "@/components/dashboard/data-table"

export default function Page() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <KPICards />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Users Management</h2>
          <DataTable />
        </div>
      </div>
    </DashboardLayout>
  )
}
