import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter, Search, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ConsigneesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Shop Unique Treasures
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover authenticated luxury items, vintage finds, and one-of-a-kind pieces at a fraction of retail
                  prices.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#shop-now">
                  <Button size="lg">
                    Shop Now
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
                alt="Luxury consignment items"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Shop With Us</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We offer a curated selection of authenticated items with a seamless shopping experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-12">
            <Card>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Authenticated Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every luxury and designer item undergoes rigorous authentication by our team of experts, ensuring you
                  only receive genuine products.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Exceptional Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shop premium and luxury items at 30-70% off retail prices, with new arrivals added daily from our
                  network of trusted consignors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Secure Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy a 100% secure shopping experience with our satisfaction guarantee, secure payment processing,
                  and detailed item descriptions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop-now" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Shop Our Collection</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse our curated selection of premium consignment items.
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row my-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search items..." className="w-full pl-8" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="jewelry">Jewelry & Watches</SelectItem>
                  <SelectItem value="home">Home & Art</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Filter Sidebar and Products */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block space-y-6">
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-1" />
                    <Label htmlFor="price-1">Under $100</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-2" />
                    <Label htmlFor="price-2">$100 - $500</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-3" />
                    <Label htmlFor="price-3">$500 - $1,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-4" />
                    <Label htmlFor="price-4">$1,000 - $5,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-5" />
                    <Label htmlFor="price-5">$5,000+</Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Brands</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="brand-1" />
                    <Label htmlFor="brand-1">Louis Vuitton</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="brand-2" />
                    <Label htmlFor="brand-2">Chanel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="brand-3" />
                    <Label htmlFor="brand-3">Gucci</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="brand-4" />
                    <Label htmlFor="brand-4">Hermès</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="brand-5" />
                    <Label htmlFor="brand-5">Rolex</Label>
                  </div>
                </div>
                <Button variant="link" className="p-0 h-auto mt-2">
                  View more
                </Button>
              </div>

              <div>
                <h3 className="font-medium mb-4">Condition</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="condition-1" />
                    <Label htmlFor="condition-1">New with tags</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="condition-2" />
                    <Label htmlFor="condition-2">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="condition-3" />
                    <Label htmlFor="condition-3">Very good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="condition-4" />
                    <Label htmlFor="condition-4">Good</Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        alt={`Product ${item}`}
                        className="object-cover"
                        fill
                        src={`/placeholder.svg?height=300&width=300&text=Item+${item}`}
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">Luxury Designer Handbag</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex justify-between">
                        <div className="text-lg font-bold">$1,249.99</div>
                        <div className="text-sm text-muted-foreground line-through">$2,500</div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Excellent condition</div>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="sm">
                    12
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Collections</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our curated collections of exceptional items.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    alt="Luxury Watches"
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                    fill
                    src="/placeholder.svg?height=400&width=600&text=Luxury+Watches"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">Luxury Watches</h3>
                      <p className="text-white/80">Authenticated timepieces from top brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    alt="Designer Handbags"
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                    fill
                    src="/placeholder.svg?height=400&width=600&text=Designer+Handbags"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">Designer Handbags</h3>
                      <p className="text-white/80">Iconic styles at exceptional prices</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    alt="Fine Jewelry"
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                    fill
                    src="/placeholder.svg?height=400&width=600&text=Fine+Jewelry"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">Fine Jewelry</h3>
                      <p className="text-white/80">Timeless pieces for every occasion</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline">
              View All Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Shopping with us is simple, secure, and satisfying.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Browse & Shop</h3>
              <p className="text-muted-foreground">
                Explore our curated selection of authenticated luxury items across various categories.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Secure Checkout</h3>
              <p className="text-muted-foreground">
                Complete your purchase with our secure payment system, offering multiple payment options.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Receive & Enjoy</h3>
              <p className="text-muted-foreground">
                Your authenticated items are carefully packaged and shipped to you with tracking information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our satisfied customers about their shopping experiences.
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
                    <CardTitle className="text-lg">Jennifer K.</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I found a vintage Chanel bag I'd been searching for at 40% off retail. The authentication certificate
                  gave me complete confidence in my purchase. Shipping was fast and the packaging was beautiful."
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
                    <CardTitle className="text-lg">Robert T.</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The Rolex I purchased was exactly as described, and the authentication process was thorough. Customer
                  service was exceptional when I had questions about the watch's history."
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
                    <CardTitle className="text-lg">Michelle P.</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I've been shopping with ConsignPro for years and have never been disappointed. The detailed photos
                  and condition descriptions are always accurate, and I love the thrill of finding unique pieces."
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
                Common questions about shopping with us.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            <Card>
              <CardHeader>
                <CardTitle>How do you ensure items are authentic?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team of authentication experts examines each luxury item using a multi-point inspection process.
                  We verify materials, craftsmanship, serial numbers, and more. All authenticated items come with a
                  certificate of authenticity.
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
                  received. Some final sale items may not be eligible for return, which will be clearly marked on the
                  product page.
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
                  includes detailed condition notes and close-up photos of any wear or imperfections.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Shopping Today</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of satisfied customers and discover unique treasures at exceptional prices.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#shop-now">
                <Button size="lg">
                  Shop Now
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

