"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, Users, DollarSign, Activity, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPIItem {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative"
  icon: React.ComponentType<any>
  color: "blue" | "green" | "purple" | "orange"
}

const kpiData: KPIItem[] = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    color: "blue",
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8.2%",
    changeType: "positive",
    icon: DollarSign,
    color: "green",
  },
  {
    title: "Active Sessions",
    value: "1,234",
    change: "-2.1%",
    changeType: "negative",
    icon: Activity,
    color: "purple",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+5.7%",
    changeType: "positive",
    icon: TrendingUp,
    color: "orange",
  },
]

const colorConfigs = {
  blue: "from-blue-500/25 to-blue-500/10 border-blue-200/60 dark:border-blue-500/30 dark:from-blue-500/15 dark:to-blue-500/5",
  green: "from-green-500/25 to-green-500/10 border-green-200/60 dark:border-green-500/30 dark:from-green-500/15 dark:to-green-500/5",
  purple: "from-purple-500/25 to-purple-500/10 border-purple-200/60 dark:border-purple-500/30 dark:from-purple-500/15 dark:to-purple-500/5",
  orange: "from-orange-500/25 to-orange-500/10 border-orange-200/60 dark:border-orange-500/30 dark:from-orange-500/15 dark:to-orange-500/5",
}

const iconColors = {
  blue: "bg-blue-100/50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  green: "bg-green-100/50 text-green-600 dark:bg-green-500/10 dark:text-green-400",
  purple: "bg-purple-100/50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
  orange: "bg-orange-100/50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
}

export function KPICards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 w-full">
      {kpiData.map((kpi) => {
        const Icon = kpi.icon
        const isPositive = kpi.changeType === "positive"
        const TrendIcon = isPositive ? ArrowUp : ArrowDown

        return (
          <Card
            key={kpi.title}
            className={cn(
              "bg-gradient-to-br overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border cursor-pointer group",
              colorConfigs[kpi.color]
            )}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {kpi.title}
                  </p>
                </div>
                <div className={cn("rounded-lg p-2.5", iconColors[kpi.color])}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-3xl font-bold tracking-tight">{kpi.value}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={isPositive ? "default" : "destructive"}
                  className="gap-1 font-semibold"
                >
                  <TrendIcon className="h-3.5 w-3.5" />
                  {kpi.change}
                </Badge>
                <span className="text-xs text-muted-foreground font-medium">from last month</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}