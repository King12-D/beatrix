"use client"

import { useState } from "react"
import { Package, Search, Truck, Clock, CheckCircle, AlertCircle, Calendar, MapPin, Info } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

// Dynamically import the PackageMap component with SSR disabled
const PackageMap = dynamic(() => import("./package-map"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-beatrix-light flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-beatrix-primary border-t-transparent"></div>
        <p className="text-beatrix-dark">Loading map...</p>
      </div>
    </div>
  ),
})

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("details")
  const [error, setError] = useState("")

  // More realistic tracking data
  const sampleTrackingData = {
    trackingNumber: "BDC1234567890",
    status: "shipped",
    estimatedDelivery: "March 25, 2025",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    service: "Express Delivery",
    weight: "2.5 lbs",
    dimensions: "12 x 8 x 6 inches",
    carrier: "Beatrix Express",
    shipDate: "March 20, 2025",
    currentLocation: {
      lat: 39.7392,
      lng: -104.9903,
      address: "Denver, CO Distribution Center",
    },
    timeline: [
      {
        status: "order placed",
        date: "March 20, 2025 - 10:23 AM",
        description: "Order processed and ready for pickup",
        location: {
          lat: 40.7128,
          lng: -74.006,
          address: "New York, NY Sorting Facility",
        },
      },
      {
        status: "picked up",
        date: "March 21, 2025 - 9:45 AM",
        description: "Package picked up by courier",
        location: {
          lat: 40.7128,
          lng: -74.006,
          address: "New York, NY Sorting Facility",
        },
      },
      {
        status: "in transit",
        date: "March 22, 2025 - 2:30 PM",
        description: "Package departed from origin facility",
        location: {
          lat: 41.8781,
          lng: -87.6298,
          address: "Chicago, IL Distribution Center",
        },
      },
      {
        status: "shipped",
        date: "March 23, 2025 - 11:15 AM",
        description: "Package arrived at regional distribution center",
        location: {
          lat: 39.7392,
          lng: -104.9903,
          address: "Denver, CO Distribution Center",
        },
      },
    ],
    recipient: {
      name: "John Smith",
      address: "123 Main St, Los Angeles, CA 90001",
      phone: "(555) 123-4567",
    },
    sender: {
      name: "Jane Doe",
      address: "456 Park Ave, New York, NY 10022",
      phone: "(555) 987-6543",
    },
    additionalServices: ["Signature Required", "Insurance ($500)"],
    packageContents: "Electronics - Fragile",
    customsInfo: {
      required: true,
      declarationNumber: "CD78901234",
      value: "$450.00",
      contents: "Commercial Sample",
    },
  }

  const handleTrackingSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!trackingNumber.trim()) {
      toast({
        title: "Tracking number required",
        description: "Please enter a valid tracking number",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call with a timeout
    setTimeout(() => {
      // For demo purposes, check if tracking number matches our sample
      if (trackingNumber.toUpperCase() === "BDC1234567890") {
        setTrackingResult(sampleTrackingData)
        setError("")
      } else {
        setTrackingResult(null)
        setError("No tracking information found for this number. Please check and try again.")
      }
      setIsLoading(false)
    }, 1500)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "shipped":
        return <Truck className="h-5 w-5 text-beatrix-primary" />
      case "in transit":
        return <Truck className="h-5 w-5 text-blue-500" />
      case "picked up":
        return <Package className="h-5 w-5 text-purple-500" />
      case "order placed":
        return <Clock className="h-5 w-5 text-gray-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "in transit":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      case "picked up":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "order placed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
    }
  }

  const handlePrintTracking = () => {
    window.print()
  }

  const handleDownloadTracking = () => {
    // Create a text representation of the tracking info
    const trackingText = `
Beatrix Delivery Courier - Tracking Information
----------------------------------------------
Tracking Number: ${trackingResult.trackingNumber}
Status: ${trackingResult.status.toUpperCase()}
Estimated Delivery: ${trackingResult.estimatedDelivery}

Origin: ${trackingResult.origin}
Destination: ${trackingResult.destination}
Service Type: ${trackingResult.service}
Package Details: ${trackingResult.weight}, ${trackingResult.dimensions}

Current Location: ${trackingResult.currentLocation.address}
Coordinates: ${trackingResult.currentLocation.lat}, ${trackingResult.currentLocation.lng}

Tracking History:
${trackingResult.timeline
  .map(
    (event) =>
      `${event.date} - ${event.status.toUpperCase()}: ${event.description} (${event.location?.address || "N/A"})`,
  )
  .join("\n")}

Recipient Information:
Name: ${trackingResult.recipient.name}
Address: ${trackingResult.recipient.address}
Phone: ${trackingResult.recipient.phone}

Sender Information:
Name: ${trackingResult.sender.name}
Address: ${trackingResult.sender.address}
Phone: ${trackingResult.sender.phone}

Additional Services: ${trackingResult.additionalServices.join(", ")}
Package Contents: ${trackingResult.packageContents}

Thank you for choosing Beatrix Delivery Courier!
For assistance, contact: beatrixdeliverycourier@gmail.com
  `.trim()

    // Create a blob and download it
    const blob = new Blob([trackingText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `tracking-${trackingResult.trackingNumber}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Tracking Information Downloaded",
      description: `Saved as tracking-${trackingResult.trackingNumber}.txt`,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 beatrix-gradient text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Track Your Package
              </h1>
              <p className="mx-auto max-w-[700px] text-beatrix-light md:text-xl">
                Enter your tracking number to get real-time updates on your delivery.
              </p>
            </div>

            <div className="w-full max-w-md">
              <form onSubmit={handleTrackingSubmit} className="flex space-x-2">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter tracking number"
                    className="bg-white text-gray-900 border-0"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="bg-beatrix-dark hover:bg-beatrix-secondary">
                  {isLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Track
                    </>
                  )}
                </Button>
              </form>
              <p className="mt-2 text-sm text-beatrix-light">Example: BDC1234567890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-red-100 p-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-red-800">Tracking Error</h3>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Tracking Results Section */}
      {trackingResult && (
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Card className="beatrix-card border-beatrix-primary shadow-lg">
              <CardHeader className="bg-white border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-beatrix-primary">Tracking Details</CardTitle>
                    <CardDescription>
                      Tracking Number: <span className="font-mono font-medium">{trackingResult.trackingNumber}</span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                      onClick={handlePrintTracking}
                    >
                      Print
                    </Button>
                    <Button
                      variant="outline"
                      className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                      onClick={handleDownloadTracking}
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Status Banner */}
                <div className={`p-4 ${getStatusColor(trackingResult.status)} border-b`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(trackingResult.status)}
                      <span className="font-semibold text-lg capitalize">{trackingResult.status}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Estimated Delivery</p>
                      <p className="font-bold">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Shipment Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-beatrix-primary" />
                        Shipment Route
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                          <p className="text-sm font-medium text-gray-500">From</p>
                          <p className="font-medium">{trackingResult.origin}</p>
                          <p className="text-sm text-gray-500 mt-1">{trackingResult.sender.name}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                          <p className="text-sm font-medium text-gray-500">To</p>
                          <p className="font-medium">{trackingResult.destination}</p>
                          <p className="text-sm text-gray-500 mt-1">{trackingResult.recipient.name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Package className="h-5 w-5 text-beatrix-primary" />
                        Shipment Details
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Service</p>
                          <p className="font-medium">{trackingResult.service}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Ship Date</p>
                          <p className="font-medium">{trackingResult.shipDate}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Weight</p>
                          <p className="font-medium">{trackingResult.weight}</p>
                        </div>
                        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
                          <p className="text-sm font-medium text-gray-500">Dimensions</p>
                          <p className="font-medium">{trackingResult.dimensions}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Info className="h-5 w-5 text-beatrix-primary" />
                      Additional Information
                    </h3>
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Package Contents</p>
                          <p className="font-medium">{trackingResult.packageContents}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Additional Services</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {trackingResult.additionalServices.map((service, index) => (
                              <Badge key={index} variant="outline" className="bg-beatrix-light text-beatrix-dark">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {trackingResult.customsInfo.required && (
                          <>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Customs Declaration</p>
                              <p className="font-medium">{trackingResult.customsInfo.declarationNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Declared Value</p>
                              <p className="font-medium">{trackingResult.customsInfo.value}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tabs for Tracking History and Map */}
                  <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                      <TabsTrigger value="details" className="data-[state=active]:bg-white">
                        Tracking History
                      </TabsTrigger>
                      <TabsTrigger value="map" className="data-[state=active]:bg-white">
                        Live Map
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="details"
                      className="mt-4 bg-white p-4 rounded-md border border-gray-200 shadow-sm"
                    >
                      <div className="space-y-4">
                        {trackingResult.timeline.map((event, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 flex flex-col items-center">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-beatrix-primary">
                                {getStatusIcon(event.status)}
                              </div>
                              {index < trackingResult.timeline.length - 1 && (
                                <div className="h-full w-0.5 bg-beatrix-primary"></div>
                              )}
                            </div>
                            <div className="pb-8">
                              <div className="flex items-baseline justify-between">
                                <p className="font-medium capitalize text-beatrix-dark">{event.status}</p>
                                <p className="text-sm text-muted-foreground">{event.date}</p>
                              </div>
                              <p className="mt-1 text-gray-700">{event.description}</p>
                              {event.location && (
                                <p className="mt-1 text-sm flex items-center gap-1 text-gray-600">
                                  <MapPin className="h-3 w-3" />
                                  {event.location.address}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="map" className="mt-4">
                      <PackageMap
                        currentLocation={trackingResult.currentLocation}
                        timeline={trackingResult.timeline}
                        status={trackingResult.status}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50 border-t border-gray-200 p-6">
                <div>
                  <p className="text-sm font-medium">Need assistance with your delivery?</p>
                  <p className="text-sm text-muted-foreground">Contact our customer support team</p>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">Contact Support</Button>
                  <Button
                    variant="outline"
                    className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Schedule Redelivery
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      )}

      {/* Help Section */}
      {!trackingResult && !error && (
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-beatrix-dark">How to Track Your Package</h2>
                <p className="text-muted-foreground">
                  Tracking your Beatrix Delivery Courier package is simple. Just follow these steps:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-beatrix-primary text-white text-sm">
                      1
                    </div>
                    <p>Enter your tracking number in the field above</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-beatrix-primary text-white text-sm">
                      2
                    </div>
                    <p>Click the "Track" button to search for your package</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-beatrix-primary text-white text-sm">
                      3
                    </div>
                    <p>View detailed tracking information and package location</p>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Your tracking number can be found in your order confirmation email or receipt.
                </p>

                <div className="mt-6 p-4 bg-beatrix-light rounded-lg border border-beatrix-primary/20">
                  <h3 className="font-semibold text-beatrix-dark">Need to ship a package?</h3>
                  <p className="text-sm text-gray-600 mt-1">Get a quote for your next shipment in minutes.</p>
                  <div className="mt-3">
                    <Link href="/quote">
                      <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">Get a Shipping Quote</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-beatrix-dark">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border-b border-muted pb-4">
                    <h3 className="font-medium text-beatrix-primary">Where is my tracking number?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your tracking number is provided in your order confirmation email and receipt. It typically starts
                      with "BDC" followed by 10 digits.
                    </p>
                  </div>
                  <div className="border-b border-muted pb-4">
                    <h3 className="font-medium text-beatrix-primary">How often is tracking updated?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tracking information is updated in real-time as your package moves through our delivery network.
                      You can expect multiple updates per day.
                    </p>
                  </div>
                  <div className="border-b border-muted pb-4">
                    <h3 className="font-medium text-beatrix-primary">My tracking isn't updating. What should I do?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      If your tracking hasn't updated in 24 hours, please contact our customer support team for
                      assistance.
                    </p>
                  </div>
                  <div className="border-b border-muted pb-4">
                    <h3 className="font-medium text-beatrix-primary">Can I change my delivery address?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Yes, you can request a delivery address change by contacting our customer support team with your
                      tracking number.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-beatrix-primary">What if I miss my delivery?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      If you miss your delivery, we'll leave a delivery attempt notice with instructions on how to
                      reschedule or pick up your package. You can also use our online rescheduling tool.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link href="/faq">
                    <Button
                      variant="outline"
                      className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                    >
                      View All FAQs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Business Services Section */}
      <section className="w-full py-12 md:py-24 bg-beatrix-light">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-beatrix-dark">Business Shipping Solutions</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Streamline your business shipping with our comprehensive logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-beatrix-primary">E-Commerce Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamlessly integrate our shipping API with your e-commerce platform for automated label creation,
                  tracking updates, and customer notifications.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-beatrix-primary">Volume Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get competitive rates and dedicated support for your high-volume shipping needs with our business
                  account program.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-beatrix-primary">Customized Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance your customer experience with branded tracking pages, custom notifications, and detailed
                  delivery insights for your business shipments.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Link href="/business">
              <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">Explore Business Solutions</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-beatrix-dark">Track On The Go</h2>
              <p className="text-muted-foreground">
                Download the Beatrix Delivery mobile app for real-time tracking updates, instant notifications, and
                convenient shipping management from anywhere.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Real-time push notifications for delivery updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Schedule deliveries and manage preferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Scan QR codes for instant tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Manage multiple shipments in one place</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,12.5c0-0.91,0.55-1.73,1.4-2.08c-0.25-0.55-0.56-1.08-0.92-1.55c-0.21,0.07-0.43,0.1-0.63,0.1 c-0.51,0-1.02-0.19-1.41-0.58c-0.56-0.56-0.7-1.35-0.42-2.03c-0.47-0.37-0.99-0.68-1.55-0.92C13.73,6.45,12.91,7,12,7 s-1.73-0.55-2.08-1.4c-0.56,0.25-1.08,0.56-1.55,0.92c0.28,0.68,0.14,1.47-0.42,2.03c-0.39,0.39-0.9,0.58-1.41,0.58 c-0.2,0-0.42-0.03-0.63-0.1C5.56,9.47,5.25,10,5,10.55c0.85,0.35,1.4,1.17,1.4,2.08s-0.55,1.73-1.4,2.08 c0.25,0.55,0.56,1.08,0.92,1.55c0.21-0.07,0.43-0.1,0.63-0.1c0.51,0,1.02,0.19,1.41,0.58c0.56,0.56,0.7,1.35,0.42,2.03 c0.47,0.37,0.99,0.68,1.55,0.92c0.35-0.85,1.17-1.4,2.08-1.4s1.73,0.55,2.08,1.4c0.56-0.25,1.08-0.56,1.55-0.92 c-0.28-0.68-0.14-1.47,0.42-2.03c0.39-0.39,0.9-0.58,1.41-0.58c0.2,0,0.42,0.03,0.63,0.1c0.36-0.47,0.67-0.99,0.92-1.55 C18.05,14.23,17.5,13.41,17.5,12.5z M12,16c-1.93,0-3.5-1.57-3.5-3.5S10.07,9,12,9s3.5,1.57,3.5,3.5S13.93,16,12,16z" />
                  </svg>
                  App Store
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5z M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12z M20.16,10.81C20.5,11.08,20.75,11.5,20.75,12c0,0.5-0.25,0.92-0.59,1.19l-2.13,1.97l-2.37-2.37L18.3,10.2l1.86,0.61z M6.05,2.66l10.76,6.22l-2.37,2.37L6.05,2.66z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[36px] p-4 shadow-xl border-[8px] border-gray-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
                <div className="w-full h-full bg-beatrix-light rounded-[24px] overflow-hidden">
                  <div className="h-12 bg-beatrix-primary flex items-center justify-center text-white font-semibold">
                    Beatrix Delivery App
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Track Package</span>
                        <Badge className="bg-beatrix-primary">Active</Badge>
                      </div>
                      <div className="text-sm text-gray-600">BDC1234567890</div>
                      <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-beatrix-primary h-full rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>New York</span>
                        <span>Los Angeles</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Notifications</span>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs p-2 bg-blue-50 rounded border-l-2 border-blue-500">
                          Your package has departed from Chicago facility
                        </div>
                        <div className="text-xs p-2 bg-green-50 rounded border-l-2 border-green-500">
                          Estimated delivery: March 25, 2025
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Quick Actions</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-gray-50 rounded text-xs">
                          <MapPin className="h-4 w-4 mx-auto mb-1" />
                          Map View
                        </div>
                        <div className="p-2 bg-gray-50 rounded text-xs">
                          <Calendar className="h-4 w-4 mx-auto mb-1" />
                          Reschedule
                        </div>
                        <div className="p-2 bg-gray-50 rounded text-xs">
                          <Info className="h-4 w-4 mx-auto mb-1" />
                          Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

