import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Lock, User, Palette, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-3 pb-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-muted-foreground mt-2 text-base">
              Manage your preferences and system configuration.
            </p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Settings */}
          <Card className="border border-border/40 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Account Settings</h3>
                <p className="text-sm text-muted-foreground mt-1">Update your profile information and preferences</p>
                <Button className="mt-4" variant="outline">Edit Profile</Button>
              </div>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="border border-border/40 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-red-500/10">
                <Lock className="h-6 w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Security & Privacy</h3>
                <p className="text-sm text-muted-foreground mt-1">Manage your security settings and privacy options</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Two-Factor Authentication</span>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/10">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Session Security</span>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/10">Enabled</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="border border-border/40 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Bell className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <p className="text-sm text-muted-foreground mt-1">Manage how you receive notifications</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email Notifications</span>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/10">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Push Notifications</span>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/10">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Weekly Digest</span>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/10">Enabled</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Appearance Settings */}
          <Card className="border border-border/40 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Palette className="h-6 w-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Appearance</h3>
                <p className="text-sm text-muted-foreground mt-1">Customize the look and feel of your dashboard</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Dark Mode</span>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/10">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Compact Layout</span>
                    <Badge className="bg-gray-500/10 text-gray-600 hover:bg-gray-500/10">Disabled</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Data & Storage */}
          <Card className="border border-border/40 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-amber-500/10">
                <Database className="h-6 w-6 text-amber-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Data & Storage</h3>
                <p className="text-sm text-muted-foreground mt-1">Manage your data and export options</p>
                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full">Export Data</Button>
                  <Button variant="outline" className="w-full">Download Backup</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Separator className="bg-border/40" />

        {/* Save Changes */}
        <div className="flex justify-end space-x-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
