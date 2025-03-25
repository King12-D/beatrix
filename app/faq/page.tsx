import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our consignment services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="general" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="consignors">For Consignors</TabsTrigger>
              <TabsTrigger value="consignees">For Consignees</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What is consignment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Consignment is a business arrangement where a seller (consignor) provides items to a retailer (us)
                    who then sells the items on behalf of the consignor. The consignor retains ownership until the item
                    sells, at which point they receive a percentage of the sale price as commission.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How does ConsignPro work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ConsignPro connects sellers (consignors) with buyers (consignees) through our premium consignment
                    service. Consignors submit items to us, we authenticate, photograph, and list them, and when they
                    sell, the consignor receives a commission. Consignees can shop our curated selection of
                    authenticated items at great prices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What types of items do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We specialize in high-quality items across various categories, including designer clothing, luxury
                    handbags, fine jewelry, watches, antique furniture, collectibles, and luxury home decor. We focus on
                    items that maintain their value and appeal to our discerning customer base.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To get started as a consignor, you can submit your items through our online form, bring them to one
                    of our locations, or schedule a home pickup for larger collections. To shop as a consignee, simply
                    browse our online store or visit one of our physical locations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Where are your physical locations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We have physical locations in New York, Los Angeles, and Chicago. Each location offers the full
                    range of our consignment services and showcases a selection of our inventory. Visit our About page
                    for specific addresses and hours of operation.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="consignors" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What commission rates do you offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our commission rates range from 50% to 70% for consignors, depending on the item category, value,
                    and the service package you choose. Luxury and high-value items typically earn higher commission
                    rates. See our Services page for detailed commission information.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How long does it take to sell my items?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Selling time varies based on the item, condition, and current market demand. On average, items sell
                    within 30-60 days, with premium and luxury items often selling faster. Our consignment periods range
                    from 90 to 180 days, depending on your service package.
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
                    processed within 3 business days after your item sells. You can track all your sales and payments
                    through your consignor dashboard.
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
                    donate it, or extend the consignment period with a potential price adjustment. We'll notify you
                    before the consignment period ends to discuss your options.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do you determine pricing for my items?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our pricing experts research current market values, considering factors like brand, condition, age,
                    rarity, and demand. We aim to set prices that maximize your return while ensuring items sell within
                    a reasonable timeframe. You'll have the opportunity to review and approve suggested prices before
                    listing.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="consignees" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How do you ensure items are authentic?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team of authentication experts examines each luxury item using a multi-point inspection process.
                    We verify materials, craftsmanship, serial numbers, and more. All authenticated items come with a
                    certificate of authenticity, and we offer a 100% money-back guarantee if an item is proven to be
                    inauthentic.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What is your return policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer a 14-day return policy for most items. Items must be returned in the same condition as
                    received, with all original packaging and authentication certificates. Some final sale items may not
                    be eligible for return, which will be clearly marked on the product page.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do you determine item condition?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use a standardized condition scale: New with Tags, Excellent, Very Good, and Good. Each listing
                    includes detailed condition notes and close-up photos of any wear or imperfections. Our condition
                    ratings are conservative to ensure you're never disappointed with your purchase.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer layaway or financing options?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer layaway plans for purchases over $500, allowing you to pay in installments over 30,
                    60, or 90 days. We also partner with Affirm to provide financing options at checkout. See our
                    payment page for more details on these options.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I make an offer on an item?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, many of our items accept offers. If an item is eligible, you'll see a "Make an Offer" button on
                    the product page. We review all reasonable offers and typically respond within 24 hours. Some items
                    may be fixed price only, which will be indicated on the listing.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What shipping methods do you offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer standard shipping (3-5 business days), expedited shipping (2 business days), and overnight
                    shipping options. All items are shipped with tracking and insurance. International shipping is
                    available to select countries with additional customs fees and duties that may apply.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I track my order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can track your order through our Order Tracking page using your order number, which is provided
                    in your order confirmation email. You'll receive shipping notifications with tracking information
                    once your order ships. You can also view order status in your account dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I return an item?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To return an item, log into your account and navigate to your orders. Select the item you wish to
                    return and follow the return instructions. You'll receive a prepaid return shipping label for
                    domestic returns. Items must be returned within 14 days of delivery in their original condition with
                    all tags and packaging.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you ship internationally?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we ship to select countries internationally. International shipping rates vary by destination
                    and package weight. Please note that international buyers are responsible for any customs fees,
                    duties, or taxes imposed by their country. Delivery times for international orders typically range
                    from 7-14 business days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What if my item arrives damaged?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If your item arrives damaged, please contact our customer service team within 48 hours of delivery
                    with photos of the damage. All shipments are insured, and we'll work quickly to resolve the issue
                    with either a replacement (if available) or a full refund, including shipping costs.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our customer support team is here to help with any questions not covered in our FAQ.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

