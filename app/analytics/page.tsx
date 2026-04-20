import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-3 pb-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground mt-2 text-base">
              Real-time insights into system performance and user activity metrics.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Performance Metrics</h2>
            <p className="text-sm text-muted-foreground mt-1">Monitor key performance indicators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric Card 1 */}
            <Card className="p-6 border border-border/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                  <p className="text-2xl font-bold mt-2">45.2K</p>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+12% from last week</p>
            </Card>

            {/* Metric Card 2 */}
            <Card className="p-6 border border-border/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conversions</p>
                  <p className="text-2xl font-bold mt-2">3.2K</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Activity className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-2">+8% from last week</p>
            </Card>

            {/* Metric Card 3 */}
            <Card className="p-6 border border-border/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Bounce Rate</p>
                  <p className="text-2xl font-bold mt-2">32.4%</p>
                </div>
                <div className="p-3 rounded-lg bg-red-500/10">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <p className="text-xs text-red-600 mt-2">-2.3% from last week</p>
            </Card>

            {/* Metric Card 4 */}
            <Card className="p-6 border border-border/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Duration</p>
                  <p className="text-2xl font-bold mt-2">4:32</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Activity className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <p className="text-xs text-purple-600 mt-2">+0.45s from last week</p>
            </Card>
          </div>
        </div>

        <Separator className="bg-border/40" />

        {/* Traffic Sources */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Traffic Sources</h2>
            <p className="text-sm text-muted-foreground mt-1">Where your users are coming from</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card/50 border border-border/40 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Organic Search</span>
                  <span className="text-lg font-bold">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border/40 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Direct Traffic</span>
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border/40 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Social Media</span>
                  <span className="text-lg font-bold">15%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border/40 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Referral Links</span>
                  <span className="text-lg font-bold">10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
