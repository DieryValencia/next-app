import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react"

const kpiData = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Active Sessions",
    value: "1,234",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: Activity,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+5.7%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
]

export function KPICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi) => (
        <Card key={kpi.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {kpi.title}
            </CardTitle>
            <kpi.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge
                variant={kpi.changeType === "positive" ? "default" : "destructive"}
                className="text-xs"
              >
                {kpi.change}
              </Badge>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}