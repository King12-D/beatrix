import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConsignorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Sell With Confidence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Turn your quality items into cash with our premium consignment service. We handle everything from
                  photography to shipping.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#get-started">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#learn-more">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Consignor with items"
                className="aspect-video overflow-hidden rounded-xl object-cover"
                height="500"
                src="/placeholder.svg?height=500&width=800"
                width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="learn-more" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Consign With Us</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We offer industry-leading commission rates and a hassle-free selling experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Higher Commissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn up to 70% commission on your items, significantly higher than industry standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expert Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional photography, detailed descriptions, and targeted marketing to help your items sell
                  quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transparent Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time tracking of your items through our consignor dashboard, with detailed sales reports.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Authentication Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert authentication for luxury and designer items, ensuring maximum value and buyer confidence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from in-store drop-off, mail-in service, or home pickup for your convenience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fast Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive payment within 3 business days of your item selling, via direct deposit or check.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Accept Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                alt="Luxury items"
                className="aspect-video overflow-hidden rounded-xl object-cover"
                height="500"
                src="/placeholder.svg?height=500&width=800"
                width="800"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Accept</h2>
                <p className="text-muted-foreground">
                  We specialize in high-quality items across various categories. Our focus is on items that maintain
                  their value and appeal to our discerning customer base.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Fashion</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Designer clothing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Luxury handbags</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Fine jewelry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Watches</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Home</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Fine art</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Antique furniture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Collectibles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Luxury decor</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="outline">Contact us about specific items</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our simple 4-step process makes consigning your items easy and rewarding.
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

      {/* Get Started Section */}
      <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Consign?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the option that works best for you to get started.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-12">
            <Card>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Upload className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Online Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fill out our online form with details and photos of your items. We'll review and contact you within 48
                  hours.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Submit Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Upload className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">In-Store Drop-Off</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bring your items to any of our locations for immediate evaluation by our expert team.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Find Locations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Upload className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Home Pickup Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schedule a pickup at your home for larger items or collections. Available in select areas.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Schedule Pickup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Consignor Success Stories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our satisfied consignors about their experiences.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rebecca T.</CardTitle>
                    <CardDescription>Consignor since 2020</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I've consigned with several services, but ConsignPro offers the best commission rates and fastest
                  sales. I've earned over $15,000 selling my designer handbags and clothing."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Marcus J.</CardTitle>
                    <CardDescription>Consignor since 2021</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The authentication service for my watch collection was exceptional. Their expertise helped me get top
                  dollar for my pieces, and the dashboard made tracking everything simple."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sophia L.</CardTitle>
                    <CardDescription>Consignor since 2019</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "When I downsized my home, ConsignPro handled my entire estate. Their team was professional, thorough,
                  and I received much more than I expected from the sales."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Common questions about our consignment process.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            <Card>
              <CardHeader>
                <CardTitle>How long does it take to sell my items?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Selling time varies based on the item, condition, and current market demand. On average, items sell
                  within 30-60 days, with premium and luxury items often selling faster.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens if my item doesn't sell?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If an item doesn't sell within the consignment period, you can choose to have it returned to you,
                  donate it, or extend the consignment period with a potential price adjustment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do I get paid?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer payment via direct deposit, check, or store credit (with a bonus percentage). Payments are
                  processed within 3 business days after your item sells.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I check the status of my items?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, our consignor dashboard provides real-time updates on your items, including listing status,
                  views, offers, and sales information.
                </p>
              </CardContent>
            </Card>
            <div className="text-center">
              <Link href="/faq">
                <Button variant="outline">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Turn Your Items into Cash?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of satisfied consignors and start earning today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#get-started">
                <Button size="lg">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

