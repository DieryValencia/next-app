"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  status: "active" | "inactive"
  role: string
  joinDate: string
}

const initialUsers: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", status: "active", role: "Admin", joinDate: "2023-01-01" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", status: "active", role: "User", joinDate: "2023-02-15" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", status: "inactive", role: "User", joinDate: "2023-03-01" },
  { id: "4", name: "Alice Williams", email: "alice@example.com", status: "active", role: "Manager", joinDate: "2023-01-15" },
  { id: "5", name: "Charlie Brown", email: "charlie@example.com", status: "active", role: "User", joinDate: "2023-04-01" },
  { id: "6", name: "Diana Prince", email: "diana@example.com", status: "inactive", role: "User", joinDate: "2023-05-01" },
  { id: "7", name: "Evan Davis", email: "evan@example.com", status: "active", role: "User", joinDate: "2023-06-01" },
  { id: "8", name: "Fiona Green", email: "fiona@example.com", status: "active", role: "User", joinDate: "2023-07-01" },
]

export function DataTable() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)
  const [showViewDialog, setShowViewDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    return matchesSearch && matchesStatus && matchesRole
  })

  const handleView = (user: User) => {
    setSelectedUser(user)
    setShowViewDialog(true)
  }

  const handleEdit = (user: User) => {
    setEditingUser({ ...user })
    setFormErrors({})
    setShowEditDialog(true)
  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}
    if (!editingUser) return false

    if (!editingUser.name.trim()) {
      errors.name = "Name is required"
    }
    if (!editingUser.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editingUser.email)) {
      errors.email = "Invalid email format"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSaveEdit = () => {
    if (!validateForm() || !editingUser) return

    setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
    setShowEditDialog(false)
    setEditingUser(null)
  }

  const handleDelete = (user: User) => {
    setUserToDelete(user)
    handleConfirmDelete()
  }

  const handleConfirmDelete = () => {
    if (!userToDelete) return
    if (confirm(`Are you sure you want to delete ${userToDelete.name}? This action cannot be undone.`)) {
      setUsers(users.filter(u => u.id !== userToDelete.id))
      setUserToDelete(null)
    }
  }

  const handleToggleStatus = (user: User) => {
    setUsers(users.map(u =>
      u.id === user.id
        ? { ...u, status: u.status === "active" ? "inactive" : "active" }
        : u
    ))
  }

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-card/50 to-card/30 border-border/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Users</CardTitle>
            <span className="text-xs text-muted-foreground">{filteredUsers.length} found</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-secondary/30 border-border/50 focus:bg-secondary/50"
            />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full bg-secondary/30 border-border/50 hover:bg-secondary/50">
                  <Filter className="h-4 w-4 mr-2" /> Status: {statusFilter === "all" ? "All" : statusFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("active")}>Active</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("inactive")}>Inactive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full bg-secondary/30 border-border/50 hover:bg-secondary/50">
                  <Filter className="h-4 w-4 mr-2" /> Role: {roleFilter === "all" ? "All" : roleFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setRoleFilter("all")}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRoleFilter("Admin")}>Admin</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRoleFilter("Manager")}>Manager</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRoleFilter("User")}>User</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-card/50 to-card/30 border-border/50 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50">
                <TableHead className="font-semibold">User</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Role</TableHead>
                <TableHead className="w-12 text-right font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-border/30 hover:bg-secondary/30 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary">{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.joinDate}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === "active" ? "default" : "secondary"}
                        className="cursor-pointer"
                        onClick={() => handleToggleStatus(user)}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{user.role}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-secondary/50">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem onClick={() => handleView(user)} className="flex items-center space-x-2">
                            <Eye className="h-4 w-4" />
                            <span>View Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(user)} className="flex items-center space-x-2">
                            <Edit className="h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(user)} className="flex items-center space-x-2 text-destructive">
                            <Trash2 className="h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <div className="flex flex-col items-center space-y-2">
                      <Search className="h-8 w-8 text-muted-foreground/30" />
                      <p className="text-muted-foreground">No users found matching your filters.</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* View User Dialog */}
      <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg">{selectedUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedUser.role}</p>
                </div>
              </div>
              <div className="grid gap-3">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">EMAIL</p>
                  <p className="text-sm">{selectedUser.email}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">STATUS</p>
                    <Badge variant={selectedUser.status === "active" ? "default" : "secondary"} className="w-fit mt-1">
                      {selectedUser.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">ROLE</p>
                    <p className="text-sm">{selectedUser.role}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">JOINED</p>
                  <p className="text-sm">{selectedUser.joinDate}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowViewDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          {editingUser && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  placeholder="User name"
                  className={cn(formErrors.name && "border-destructive")}
                />
                {formErrors.name && <p className="text-xs text-destructive mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  placeholder="user@example.com"
                  className={cn(formErrors.email && "border-destructive")}
                />
                {formErrors.email && <p className="text-xs text-destructive mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <div className="flex items-center space-x-2 mt-2">
                  <Button
                    variant={editingUser.status === "active" ? "default" : "outline"}
                    onClick={() => setEditingUser({ ...editingUser, status: "active" })}
                  >
                    Active
                  </Button>
                  <Button
                    variant={editingUser.status === "inactive" ? "default" : "outline"}
                    onClick={() => setEditingUser({ ...editingUser, status: "inactive" })}
                  >
                    Inactive
                  </Button>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
