"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  Copy,
  Download,
  Edit,
  LogOut,
  Package,
  Plus,
  Search,
  Settings,
  Trash,
  Truck,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

// Mock data for tracking codes
const initialTrackingCodes = [
  {
    id: "TRK-001",
    orderNumber: "ORD-12345",
    customerName: "Sarah Johnson",
    status: "delivered",
    createdAt: "2023-03-10",
    updatedAt: "2023-03-15",
    items: [{ name: "Vintage Designer Handbag", price: "$249.99", quantity: 1 }],
  },
  {
    id: "TRK-002",
    orderNumber: "ORD-12346",
    customerName: "James Thompson",
    status: "shipped",
    createdAt: "2023-03-12",
    updatedAt: "2023-03-14",
    items: [
      { name: "Gold Bracelet", price: "$129.99", quantity: 1 },
      { name: "Silver Necklace", price: "$89.99", quantity: 1 },
    ],
  },
  {
    id: "TRK-003",
    orderNumber: "ORD-12347",
    customerName: "Emily Davis",
    status: "processing",
    createdAt: "2023-03-15",
    updatedAt: "2023-03-15",
    items: [{ name: "Designer Watch", price: "$450.00", quantity: 1 }],
  },
  {
    id: "TRK-004",
    orderNumber: "ORD-12348",
    customerName: "Michael Brown",
    status: "shipped",
    createdAt: "2023-03-14",
    updatedAt: "2023-03-16",
    items: [{ name: "Leather Jacket", price: "$199.99", quantity: 1 }],
  },
  {
    id: "TRK-005",
    orderNumber: "ORD-12349",
    customerName: "Jessica Wilson",
    status: "processing",
    createdAt: "2023-03-16",
    updatedAt: "2023-03-16",
    items: [{ name: "Antique Vase", price: "$350.00", quantity: 1 }],
  },
]

// Simple admin credentials - in a real app, these would be stored securely
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "password123",
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [trackingCodes, setTrackingCodes] = useState(initialTrackingCodes)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newTrackingCode, setNewTrackingCode] = useState({
    orderNumber: "",
    customerName: "",
    status: "processing",
    items: [{ name: "", price: "", quantity: 1 }],
  })

  // Check if user is already authenticated (e.g., from localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault()

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuthenticated", "true")
      setLoginError("")
    } else {
      setLoginError("Invalid username or password")
    }
  }

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuthenticated")
  }

  // Filter tracking codes based on search query and status filter
  const filteredTrackingCodes = trackingCodes.filter((code) => {
    const matchesSearch =
      code.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      code.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      code.customerName.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || code.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Handle creating a new tracking code
  const handleCreateTrackingCode = () => {
    // Default location based on status
    let defaultLocation = {
      lat: 34.0522,
      lng: -118.2437,
      address: "Los Angeles, CA",
    }

    // If shipped or delivered, use a different location
    if (newTrackingCode.status === "shipped") {
      defaultLocation = {
        lat: 37.7749,
        lng: -122.4194,
        address: "San Francisco, CA",
      }
    } else if (newTrackingCode.status === "delivered") {
      defaultLocation = {
        lat: 40.7128,
        lng: -74.006,
        address: "New York, NY",
      }
    }

    const newCode = {
      id: `TRK-${String(trackingCodes.length + 1).padStart(3, "0")}`,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
      ...newTrackingCode,
      currentLocation: defaultLocation,
      // Add a default timeline based on the status
      timeline: [
        {
          status: "Order Placed",
          date: new Date().toISOString().split("T")[0],
          description: "Order has been received and is being processed.",
          location: {
            lat: 34.0522,
            lng: -118.2437,
            address: "Los Angeles, CA",
          },
        },
        {
          status: "Payment Confirmed",
          date: new Date().toISOString().split("T")[0],
          description: "Payment has been confirmed.",
          location: {
            lat: 34.0522,
            lng: -118.2437,
            address: "Los Angeles, CA",
          },
        },
        ...(newTrackingCode.status === "processing"
          ? []
          : [
              {
                status: "Order Processed",
                date: new Date().toISOString().split("T")[0],
                description: "Order has been processed and is being prepared for shipping.",
                location: {
                  lat: 34.0522,
                  lng: -118.2437,
                  address: "Los Angeles, CA",
                },
              },
            ]),
        ...(newTrackingCode.status === "shipped" || newTrackingCode.status === "delivered"
          ? [
              {
                status: "Shipped",
                date: new Date().toISOString().split("T")[0],
                description: `Order has been shipped. Estimated delivery: ${
                  new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split("T")[0]
                }.`,
                location: {
                  lat: 37.7749,
                  lng: -122.4194,
                  address: "San Francisco, CA",
                },
              },
            ]
          : []),
        ...(newTrackingCode.status === "delivered"
          ? [
              {
                status: "Delivered",
                date: new Date().toISOString().split("T")[0],
                description: "Order has been delivered.",
                location: {
                  lat: 40.7128,
                  lng: -74.006,
                  address: "New York, NY",
                },
              },
            ]
          : []),
      ],
    }

    setTrackingCodes([...trackingCodes, newCode])
    setIsCreateDialogOpen(false)
    setNewTrackingCode({
      orderNumber: "",
      customerName: "",
      status: "processing",
      items: [{ name: "", price: "", quantity: 1 }],
    })

    toast({
      title: "Tracking Code Created",
      description: `Tracking code ${newCode.id} has been created successfully.`,
    })
  }

  // Handle deleting a tracking code
  const handleDeleteTrackingCode = (id) => {
    setTrackingCodes(trackingCodes.filter((code) => code.id !== id))

    toast({
      title: "Tracking Code Deleted",
      description: `Tracking code ${id} has been deleted successfully.`,
    })
  }

  // Handle copying tracking code to clipboard
  const handleCopyTrackingCode = (id) => {
    navigator.clipboard.writeText(id)

    toast({
      title: "Copied to Clipboard",
      description: `Tracking code ${id} has been copied to clipboard.`,
    })
  }

  // Update new tracking code form
  const handleNewTrackingCodeChange = (field, value) => {
    setNewTrackingCode({
      ...newTrackingCode,
      [field]: value,
    })
  }

  // Update item in new tracking code
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...newTrackingCode.items]
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    }

    setNewTrackingCode({
      ...newTrackingCode,
      items: updatedItems,
    })
  }

  // Add new item to tracking code
  const handleAddItem = () => {
    setNewTrackingCode({
      ...newTrackingCode,
      items: [...newTrackingCode.items, { name: "", price: "", quantity: 1 }],
    })
  }

  // Remove item from tracking code
  const handleRemoveItem = (index) => {
    if (newTrackingCode.items.length > 1) {
      const updatedItems = [...newTrackingCode.items]
      updatedItems.splice(index, 1)

      setNewTrackingCode({
        ...newTrackingCode,
        items: updatedItems,
      })
    }
  }

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">{loginError}</div>
              )}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">Default credentials: admin / password123</p>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>ConsignPro Admin</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              2
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span>Admin</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Tracking Code Management</h1>
              <p className="text-muted-foreground">Create and manage tracking codes for consignment orders</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Tracking Code
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Tracking Code</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new tracking code. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orderNumber">Order Number</Label>
                      <Input
                        id="orderNumber"
                        placeholder="e.g., ORD-12345"
                        value={newTrackingCode.orderNumber}
                        onChange={(e) => handleNewTrackingCodeChange("orderNumber", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Customer Name</Label>
                      <Input
                        id="customerName"
                        placeholder="e.g., John Smith"
                        value={newTrackingCode.customerName}
                        onChange={(e) => handleNewTrackingCodeChange("customerName", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newTrackingCode.status}
                      onValueChange={(value) => handleNewTrackingCodeChange("status", value)}
                    >
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Items</Label>
                      <Button type="button" variant="outline" size="sm" onClick={handleAddItem}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Item
                      </Button>
                    </div>
                    {newTrackingCode.items.map((item, index) => (
                      <div key={index} className="grid grid-cols-[1fr_120px_80px_40px] gap-2 items-end">
                        <div>
                          <Label htmlFor={`item-name-${index}`} className="sr-only">
                            Item Name
                          </Label>
                          <Input
                            id={`item-name-${index}`}
                            placeholder="Item name"
                            value={item.name}
                            onChange={(e) => handleItemChange(index, "name", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`item-price-${index}`} className="sr-only">
                            Price
                          </Label>
                          <Input
                            id={`item-price-${index}`}
                            placeholder="Price"
                            value={item.price}
                            onChange={(e) => handleItemChange(index, "price", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`item-quantity-${index}`} className="sr-only">
                            Qty
                          </Label>
                          <Input
                            id={`item-quantity-${index}`}
                            type="number"
                            min="1"
                            placeholder="Qty"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, "quantity", Number.parseInt(e.target.value) || 1)}
                          />
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(index)}
                          disabled={newTrackingCode.items.length <= 1}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateTrackingCode}>Create Tracking Code</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setStatusFilter("all")}>
                  All Codes
                </TabsTrigger>
                <TabsTrigger value="processing" onClick={() => setStatusFilter("processing")}>
                  Processing
                </TabsTrigger>
                <TabsTrigger value="shipped" onClick={() => setStatusFilter("shipped")}>
                  Shipped
                </TabsTrigger>
                <TabsTrigger value="delivered" onClick={() => setStatusFilter("delivered")}>
                  Delivered
                </TabsTrigger>
              </TabsList>
              <div className="flex w-full md:w-auto items-center gap-2">
                <div className="relative flex-1 md:w-[300px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tracking codes..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="m-0">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tracking ID</TableHead>
                        <TableHead>Order Number</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTrackingCodes.length > 0 ? (
                        filteredTrackingCodes.map((code) => (
                          <TableRow key={code.id}>
                            <TableCell className="font-medium">{code.id}</TableCell>
                            <TableCell>{code.orderNumber}</TableCell>
                            <TableCell>{code.customerName}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  code.status === "delivered"
                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                    : code.status === "shipped"
                                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                }
                              >
                                {code.status.charAt(0).toUpperCase() + code.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell>{code.createdAt}</TableCell>
                            <TableCell>{code.updatedAt}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" onClick={() => handleCopyTrackingCode(code.id)}>
                                  <Copy className="h-4 w-4" />
                                  <span className="sr-only">Copy</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                  <span className="sr-only">Edit</span>
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => handleDeleteTrackingCode(code.id)}>
                                  <Trash className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                            No tracking codes found. Try adjusting your search or filters.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredTrackingCodes.length} of {trackingCodes.length} tracking codes
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled={filteredTrackingCodes.length === 0}>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled={filteredTrackingCodes.length === 0}>
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="processing" className="m-0">
              {/* Content is handled by the filter */}
            </TabsContent>
            <TabsContent value="shipped" className="m-0">
              {/* Content is handled by the filter */}
            </TabsContent>
            <TabsContent value="delivered" className="m-0">
              {/* Content is handled by the filter */}
            </TabsContent>
          </Tabs>

          {/* Tracking Code Details */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tracking Code Statistics</CardTitle>
                <CardDescription>Overview of tracking code status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                      <span>Processing</span>
                    </div>
                    <span className="font-medium">
                      {trackingCodes.filter((code) => code.status === "processing").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <span>Shipped</span>
                    </div>
                    <span className="font-medium">
                      {trackingCodes.filter((code) => code.status === "shipped").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      <span>Delivered</span>
                    </div>
                    <span className="font-medium">
                      {trackingCodes.filter((code) => code.status === "delivered").length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest tracking code updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingCodes
                    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                    .slice(0, 3)
                    .map((code) => (
                      <div key={code.id} className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {code.id} - {code.status.charAt(0).toUpperCase() + code.status.slice(1)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {code.customerName} - {code.orderNumber}
                          </p>
                          <p className="text-xs text-muted-foreground">Updated: {code.updatedAt}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tracking code tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Tracking Code
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Tracking Codes
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Truck className="mr-2 h-4 w-4" />
                  Update Shipment Status
                </Button>
                <Link href="/track">
                  <Button className="w-full justify-start" variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    View Tracking Page
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

