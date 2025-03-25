import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive consignment solutions for sellers and buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Consignment Services</h2>
                <p className="text-muted-foreground">
                  At ConsignPro, we offer a full range of consignment services designed to make selling and buying
                  pre-owned items simple, secure, and rewarding.
                </p>
                <p className="text-muted-foreground">
                  Whether you're looking to declutter your closet, sell luxury items, or find unique pieces at great
                  prices, our expert team is here to help every step of the way.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Professional item evaluation and pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>High-quality photography and detailed listings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Authentication for luxury and designer items</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Secure payment processing and item tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Comprehensive sales reporting and analytics</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Consignment Services"
                className="aspect-video overflow-hidden rounded-xl object-cover"
                height="500"
                src="/placeholder.svg?height=500&width=800"
                width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Service Packages</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the service level that best fits your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Standard Consignment</CardTitle>
                <CardDescription>Perfect for casual sellers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">50%</div>
                <p className="text-sm text-muted-foreground">Commission for you</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Professional item evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Basic photography and listing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>90-day selling period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Monthly sales reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Premium Consignment</CardTitle>
                <CardDescription>Our most popular option</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">60%</div>
                <p className="text-sm text-muted-foreground">Commission for you</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Expert item evaluation and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Professional photography and detailed listing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>120-day selling period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Weekly sales reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Featured placement on website</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Luxury Consignment</CardTitle>
                <CardDescription>For high-value designer items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">70%</div>
                <p className="text-sm text-muted-foreground">Commission for you</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Expert authentication and valuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Premium photography and storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>180-day selling period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Real-time sales tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>VIP marketing and promotion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                How our consignment service works from start to finish.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-4">
            {[
              { step: 1, title: "Submit", description: "Complete our online form or bring items to our location." },
              { step: 2, title: "Evaluate", description: "Our experts assess, authenticate, and price your items." },
              { step: 3, title: "List", description: "We photograph and create compelling listings for your items." },
              { step: 4, title: "Sell & Pay", description: "We handle the sale and transfer your commission." },
            ].map((step) => (
              <div key={step.step} className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Specialty Services</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Additional services to enhance your consignment experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Estate Consignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive services for handling entire estates, including appraisal, cataloging, and selling of
                  all items.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Authentication Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert authentication for luxury items, designer goods, collectibles, and more, with detailed
                  documentation.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Closet Clean-Out</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team will come to your home, help you select items for consignment, and handle all the logistics.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Contact us today to learn more about our services or to schedule a consultation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/consignors">
                <Button size="lg" variant="outline">
                  Become a Consignor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

