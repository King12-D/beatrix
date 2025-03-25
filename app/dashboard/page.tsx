"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  Home,
  LineChart,
  LogOut,
  Package,
  Settings,
  ShoppingBag,
  User,
  Users,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mail } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package className="h-6 w-6" />
              <span>ConsignPro</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-2 text-sm font-medium">
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "overview"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
                onClick={() => setActiveTab("overview")}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "items"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
                onClick={() => setActiveTab("items")}
              >
                <ShoppingBag className="h-4 w-4" />
                My Items
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">8</Badge>
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "sales"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
                onClick={() => setActiveTab("sales")}
              >
                <DollarSign className="h-4 w-4" />
                Sales & Earnings
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "analytics"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
                onClick={() => setActiveTab("analytics")}
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "messages"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
                onClick={() => setActiveTab("messages")}
              >
                <Bell className="h-4 w-4" />
                Messages
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">3</Badge>
              </Link>
              <Separator className="my-2" />
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
              >
                <Users className="h-4 w-4" />
                Support
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardContent className="p-2">
                <div className="flex items-center gap-3 rounded-lg p-2">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Jane Doe</span>
                    <span className="text-xs text-muted-foreground">Premium Consignor</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
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
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="md:hidden">
            <Package className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-xl">Consignor Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
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
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center md:hidden">
              <TabsList className="w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab Content */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,350</div>
                    <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$840</div>
                    <p className="text-xs text-muted-foreground">For 3 recently sold items</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Sale Time</CardTitle>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18 days</div>
                    <p className="text-xs text-muted-foreground">-2.5 days from last month</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="relative mr-4 h-12 w-12 rounded-full bg-primary/10">
                          <ShoppingBag className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Vintage Designer Handbag sold for $249.99</p>
                          <p className="text-sm text-muted-foreground">Your commission: $149.99</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <Separator />
                      <div className="flex items-center">
                        <div className="relative mr-4 h-12 w-12 rounded-full bg-primary/10">
                          <DollarSign className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Payment of $320 processed</p>
                          <p className="text-sm text-muted-foreground">For 2 sold items</p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <Separator />
                      <div className="flex items-center">
                        <div className="relative mr-4 h-12 w-12 rounded-full bg-primary/10">
                          <Package className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">New item listed: Gold Bracelet</p>
                          <p className="text-sm text-muted-foreground">Listed price: $129.99</p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Sales Performance</CardTitle>
                    <CardDescription>Your sales performance over the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full rounded-md bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">Sales Chart Would Be Displayed Here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Items</CardTitle>
                    <CardDescription>Items with the fastest sales time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="mr-4 h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Product"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Designer Watch</p>
                          <p className="text-xs text-muted-foreground">Sold in 3 days</p>
                        </div>
                        <div className="text-sm font-medium">$450</div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Product"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Vintage Handbag</p>
                          <p className="text-xs text-muted-foreground">Sold in 5 days</p>
                        </div>
                        <div className="text-sm font-medium">$249</div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt="Product"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Gold Bracelet</p>
                          <p className="text-xs text-muted-foreground">Sold in 7 days</p>
                        </div>
                        <div className="text-sm font-medium">$129</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Payments</CardTitle>
                    <CardDescription>Payments scheduled for processing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">March 25, 2023</p>
                          <p className="text-xs text-muted-foreground">For 2 items</p>
                        </div>
                        <div className="text-sm font-medium">$320</div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">April 2, 2023</p>
                          <p className="text-xs text-muted-foreground">For 1 item</p>
                        </div>
                        <div className="text-sm font-medium">$150</div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">April 10, 2023</p>
                          <p className="text-xs text-muted-foreground">For 3 items</p>
                        </div>
                        <div className="text-sm font-medium">$370</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks and actions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <Package className="mr-2 h-4 w-4" />
                      Submit New Item
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <LineChart className="mr-2 h-4 w-4" />
                      View Sales Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Update Account Settings
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Items Tab Content */}
            <TabsContent value="items" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">My Items</h2>
                  <p className="text-muted-foreground">Manage your consigned items and track their status</p>
                </div>
                <Button>
                  <Package className="mr-2 h-4 w-4" />
                  Submit New Item
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-1 items-center space-x-2">
                  <Input placeholder="Search items..." className="max-w-[300px]" />
                  <Button variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="active">Active Listings</SelectItem>
                    <SelectItem value="pending">Pending Review</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>List Price</TableHead>
                        <TableHead>Date Listed</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-md">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                width={40}
                                height={40}
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span>Vintage Designer Handbag</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>$249.99</TableCell>
                        <TableCell>Mar 10, 2023</TableCell>
                        <TableCell>124</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-md">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                width={40}
                                height={40}
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span>Gold Bracelet</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>$129.99</TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell>87</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-md">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                width={40}
                                height={40}
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span>Designer Watch</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            Sold
                          </Badge>
                        </TableCell>
                        <TableCell>$450.00</TableCell>
                        <TableCell>Feb 28, 2023</TableCell>
                        <TableCell>203</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-md">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                width={40}
                                height={40}
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span>Leather Jacket</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                            Pending
                          </Badge>
                        </TableCell>
                        <TableCell>$199.99</TableCell>
                        <TableCell>Mar 20, 2023</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-xs text-muted-foreground">Showing 4 of 8 items</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Sales Tab Content */}
            <TabsContent value="sales" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Sales & Earnings</h2>
                  <p className="text-muted-foreground">Track your sales performance and commission earnings</p>
                </div>
                <Button variant="outline">
                  <LineChart className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Sales (YTD)</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$4,890</div>
                    <p className="text-xs text-muted-foreground">+22% from last year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,934</div>
                    <p className="text-xs text-muted-foreground">60% average commission rate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Items Sold</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Out of 20 total items</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$840</div>
                    <p className="text-xs text-muted-foreground">Processing within 3 days</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Sales History</CardTitle>
                  <CardDescription>Complete history of your sold items and earnings</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Sale Price</TableHead>
                        <TableHead>Commission</TableHead>
                        <TableHead>Date Sold</TableHead>
                        <TableHead>Payment Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Designer Watch</TableCell>
                        <TableCell>$450.00</TableCell>
                        <TableCell>$270.00 (60%)</TableCell>
                        <TableCell>Mar 5, 2023</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Vintage Handbag</TableCell>
                        <TableCell>$249.99</TableCell>
                        <TableCell>$149.99 (60%)</TableCell>
                        <TableCell>Mar 18, 2023</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                            Pending
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Gold Bracelet</TableCell>
                        <TableCell>$129.99</TableCell>
                        <TableCell>$77.99 (60%)</TableCell>
                        <TableCell>Mar 20, 2023</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                            Pending
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab Content */}
            <TabsContent value="analytics" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
                  <p className="text-muted-foreground">Insights and statistics about your consignment performance</p>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="30days">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                      <SelectItem value="year">Last year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <LineChart className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Sales Performance</CardTitle>
                    <CardDescription>Your sales and earnings over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full rounded-md bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">Sales Chart Would Be Displayed Here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Item Category Performance</CardTitle>
                    <CardDescription>Sales by item category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full rounded-md bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">Category Chart Would Be Displayed Here</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-primary mr-2"></div>
                        <div className="flex-1">Jewelry & Watches</div>
                        <div className="font-medium">45%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                        <div className="flex-1">Designer Bags</div>
                        <div className="font-medium">30%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                        <div className="flex-1">Clothing</div>
                        <div className="font-medium">15%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="flex-1">Other</div>
                        <div className="font-medium">10%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Listing Performance</CardTitle>
                    <CardDescription>Views to sales conversion</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Average Views per Item</div>
                        <div className="text-sm font-medium">87</div>
                      </div>
                      <Progress value={87} max={100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Average Days to Sell</div>
                        <div className="text-sm font-medium">18 days</div>
                      </div>
                      <Progress value={60} max={100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">View to Sale Conversion</div>
                        <div className="text-sm font-medium">2.3%</div>
                      </div>
                      <Progress value={23} max={100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Average Commission Rate</div>
                        <div className="text-sm font-medium">60%</div>
                      </div>
                      <Progress value={60} max={100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Messages Tab Content */}
            <TabsContent value="messages" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Messages</h2>
                  <p className="text-muted-foreground">Communications about your consigned items</p>
                </div>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  New Message
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Related Item</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Your item has been listed</TableCell>
                        <TableCell>Leather Jacket</TableCell>
                        <TableCell>Mar 20, 2023</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            New
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Payment processed for your sold items</TableCell>
                        <TableCell>Multiple Items</TableCell>
                        <TableCell>Mar 18, 2023</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            New
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Your item has sold</TableCell>
                        <TableCell>Gold Bracelet</TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                            Read
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

