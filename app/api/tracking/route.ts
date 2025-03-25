import { NextResponse } from "next/server"

// Update the tracking data to include location coordinates
const trackingCodes = [
  {
    id: "TRK-001",
    orderNumber: "ORD-12345",
    customerName: "Sarah Johnson",
    status: "delivered",
    date: "March 10, 2023",
    items: [{ name: "Vintage Designer Handbag", price: "$249.99", quantity: 1 }],
    currentLocation: {
      lat: 40.7128,
      lng: -74.006,
      address: "New York, NY",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "March 10, 2023",
        description: "Your order has been received and is being processed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Payment Confirmed",
        date: "March 11, 2023",
        description: "Your payment has been confirmed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Order Processed",
        date: "March 12, 2023",
        description: "Your order has been processed and is being prepared for shipping.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Shipped",
        date: "March 13, 2023",
        description: "Your order has been shipped. Estimated delivery: March 15, 2023.",
        location: {
          lat: 39.7392,
          lng: -104.9903,
          address: "Denver, CO",
        },
      },
      {
        status: "Delivered",
        date: "March 15, 2023",
        description: "Your order has been delivered.",
        location: {
          lat: 40.7128,
          lng: -74.006,
          address: "New York, NY",
        },
      },
    ],
  },
  {
    id: "TRK-002",
    orderNumber: "ORD-12346",
    customerName: "James Thompson",
    status: "shipped",
    date: "March 12, 2023",
    items: [
      { name: "Gold Bracelet", price: "$129.99", quantity: 1 },
      { name: "Silver Necklace", price: "$89.99", quantity: 1 },
    ],
    currentLocation: {
      lat: 41.8781,
      lng: -87.6298,
      address: "Chicago, IL",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "March 12, 2023",
        description: "Your order has been received and is being processed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Payment Confirmed",
        date: "March 13, 2023",
        description: "Your payment has been confirmed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Order Processed",
        date: "March 14, 2023",
        description: "Your order has been processed and is being prepared for shipping.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Shipped",
        date: "March 15, 2023",
        description: "Your order has been shipped. Estimated delivery: March 20, 2023.",
        location: {
          lat: 41.8781,
          lng: -87.6298,
          address: "Chicago, IL",
        },
      },
    ],
  },
  {
    id: "TRK-003",
    orderNumber: "ORD-12347",
    customerName: "Emily Davis",
    status: "processing",
    date: "March 15, 2023",
    items: [{ name: "Designer Watch", price: "$450.00", quantity: 1 }],
    currentLocation: {
      lat: 34.0522,
      lng: -118.2437,
      address: "Los Angeles, CA",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "March 15, 2023",
        description: "Your order has been received and is being processed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Payment Confirmed",
        date: "March 15, 2023",
        description: "Your payment has been confirmed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Order Processed",
        date: "March 15, 2023",
        description: "Your order is being processed and will be prepared for shipping soon.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
    ],
  },
  {
    id: "TRK-004",
    orderNumber: "ORD-12348",
    customerName: "Michael Brown",
    status: "shipped",
    date: "March 14, 2023",
    items: [{ name: "Leather Jacket", price: "$199.99", quantity: 1 }],
    currentLocation: {
      lat: 37.7749,
      lng: -122.4194,
      address: "San Francisco, CA",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "March 14, 2023",
        description: "Your order has been received and is being processed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Payment Confirmed",
        date: "March 14, 2023",
        description: "Your payment has been confirmed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Order Processed",
        date: "March 15, 2023",
        description: "Your order has been processed and is being prepared for shipping.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Shipped",
        date: "March 16, 2023",
        description: "Your order has been shipped. Estimated delivery: March 21, 2023.",
        location: {
          lat: 37.7749,
          lng: -122.4194,
          address: "San Francisco, CA",
        },
      },
    ],
  },
  {
    id: "TRK-005",
    orderNumber: "ORD-12349",
    customerName: "Jessica Wilson",
    status: "processing",
    date: "March 16, 2023",
    items: [{ name: "Antique Vase", price: "$350.00", quantity: 1 }],
    currentLocation: {
      lat: 34.0522,
      lng: -118.2437,
      address: "Los Angeles, CA",
    },
    timeline: [
      {
        status: "Order Placed",
        date: "March 16, 2023",
        description: "Your order has been received and is being processed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
      {
        status: "Payment Confirmed",
        date: "March 16, 2023",
        description: "Your payment has been confirmed.",
        location: {
          lat: 34.0522,
          lng: -118.2437,
          address: "Los Angeles, CA",
        },
      },
    ],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const trackingCode = searchParams.get("code")

  // Validate input
  if (!trackingCode) {
    return NextResponse.json({ error: "Tracking code is required" }, { status: 400 })
  }

  // Find the tracking information
  const trackingInfo = trackingCodes.find((code) => code.id.toLowerCase() === trackingCode.toLowerCase())

  if (!trackingInfo) {
    return NextResponse.json({ error: "Invalid tracking code. Please check and try again." }, { status: 404 })
  }

  // Add a small delay to simulate a real API call (remove in actual production)
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({ data: trackingInfo })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { consignmentId } = body

    if (!consignmentId) {
      return NextResponse.json({ error: "Consignment ID is required" }, { status: 400 })
    }

    // In a real app, you would query your database for the consignment
    // For now, we'll just return an error since we don't have consignment tracking implemented
    return NextResponse.json(
      { error: "Consignment tracking requires authentication. Please log in to your consignor account." },
      { status: 403 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Invalid request format" }, { status: 400 })
  }
}

