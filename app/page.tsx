import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Package, MapPin, Clock, Shield, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 beatrix-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Military-Grade Logistics & Delivery
                </h1>
                <p className="max-w-[600px] text-beatrix-light md:text-xl">
                  From tactical equipment to mission-critical supplies, Beatrix Military Delivery ensures your shipments
                  arrive safely and on time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/quote">
                  <Button size="lg" className="bg-white text-beatrix-primary hover:bg-beatrix-light">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/track">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="aspect-video overflow-hidden rounded-xl w-full max-w-[800px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full" style={{ position: "relative" }}>
                    <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                      {/* Military helicopter animation */}
                      <g className="helicopter" style={{ animation: "float 3s ease-in-out infinite alternate" }}>
                        <path
                          d="M400 150 L450 150 L470 170 L470 220 L450 240 L350 240 L330 220 L330 170 L350 150 Z"
                          fill="#3a3a3a"
                        />
                        <path d="M400 150 L420 130 L430 130 L450 150" fill="#3a3a3a" />
                        <path d="M400 240 L400 260 L410 260 L410 240" fill="#3a3a3a" />
                        <path d="M470 190 L520 190 L520 200 L470 200" fill="#3a3a3a" />
                        <path d="M330 190 L280 190 L280 200 L330 200" fill="#3a3a3a" />
                        <path d="M400 130 L400 110 L405 110 L405 130" fill="#3a3a3a" />
                        <ellipse cx="400" cy="110" rx="100" ry="5" fill="#3a3a3a" opacity="0.8">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 400 110"
                            to="360 400 110"
                            dur="0.2s"
                            repeatCount="indefinite"
                          />
                        </ellipse>
                      </g>

                      {/* Military truck animation */}
                      <g className="truck" style={{ animation: "drive 15s linear infinite" }}>
                        <rect x="100" y="300" width="150" height="60" rx="10" fill="#4b5320" />
                        <rect x="200" y="280" width="80" height="40" rx="5" fill="#4b5320" />
                        <circle cx="130" cy="360" r="20" fill="#333">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 130 360"
                            to="360 130 360"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle cx="220" cy="360" r="20" fill="#333">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 220 360"
                            to="360 220 360"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>

                      {/* Background elements */}
                      <rect x="0" y="380" width="800" height="70" fill="#5a5a5a" />
                      <path d="M0 380 L800 380 L800 385 L0 385 Z" fill="#444" />

                      {/* Mountains in background */}
                      <path d="M0 380 L200 200 L300 300 L500 150 L700 280 L800 200 L800 380 Z" fill="#6b7353" />

                      <style>
                        {`
                        @keyframes float {
                          0% { transform: translate(0, 0); }
                          100% { transform: translate(20px, -20px); }
                        }
                        @keyframes drive {
                          0% { transform: translateX(-200px); }
                          100% { transform: translateX(900px); }
                        }
                      `}
                      </style>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-beatrix-dark">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive military logistics solutions for defense and security operations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="beatrix-card">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beatrix-primary text-white">
                  <Truck className="h-6 w-6" />
                </div>
                <CardTitle>Tactical Delivery</CardTitle>
                <CardDescription>Rapid deployment of mission-critical supplies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our tactical delivery service ensures your urgent military supplies reach their destination within
                  hours, even in challenging environments.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services#tactical" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="beatrix-card">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beatrix-primary text-white">
                  <Package className="h-6 w-6" />
                </div>
                <CardTitle>Secure Transport</CardTitle>
                <CardDescription>Confidential and protected shipping</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our secure transport service provides encrypted tracking, armored vehicles, and specialized handling
                  for sensitive military equipment.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services#secure" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="beatrix-card">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beatrix-primary text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Global Operations</CardTitle>
                <CardDescription>Worldwide military logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy resources globally with our international military logistics service, including customs
                  clearance and regulatory compliance.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services#global" className="w-full">
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-beatrix-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-beatrix-dark">
                How It Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our secure 4-step process ensures reliable military logistics.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beatrix-primary text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-beatrix-dark">Request</h3>
              <p className="text-muted-foreground">
                Submit your secure logistics request through our encrypted portal.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beatrix-primary text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-beatrix-dark">Secure</h3>
              <p className="text-muted-foreground">Our tactical team secures your equipment for transport.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beatrix-primary text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-beatrix-dark">Monitor</h3>
              <p className="text-muted-foreground">
                Track your shipment in real-time with our encrypted monitoring system.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beatrix-primary text-white">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-beatrix-dark">Deploy</h3>
              <p className="text-muted-foreground">Your equipment is delivered securely to its destination.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/how-it-works">
              <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="aspect-video overflow-hidden rounded-xl w-full max-w-[800px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full" style={{ position: "relative" }}>
                    <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                      {/* 3D Warehouse Animation */}
                      <defs>
                        <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#444" />
                          <stop offset="100%" stopColor="#333" />
                        </linearGradient>
                      </defs>

                      {/* Floor */}
                      <rect x="100" y="300" width="600" height="150" fill="url(#floorGradient)" />

                      {/* Back wall */}
                      <rect x="100" y="100" width="600" height="200" fill="#555" />

                      {/* Side wall with perspective */}
                      <polygon points="700,100 800,50 800,350 700,300" fill="#4a4a4a" />

                      {/* Ceiling with perspective */}
                      <polygon points="100,100 700,100 800,50 200,50" fill="#666" />

                      {/* Shelves */}
                      <g>
                        <rect x="150" y="150" width="150" height="10" fill="#8b8000" />
                        <rect x="150" y="200" width="150" height="10" fill="#8b8000" />
                        <rect x="150" y="250" width="150" height="10" fill="#8b8000" />

                        <rect x="150" y="150" width="10" height="150" fill="#8b8000" />
                        <rect x="290" y="150" width="10" height="150" fill="#8b8000" />
                      </g>

                      <g>
                        <rect x="350" y="150" width="150" height="10" fill="#8b8000" />
                        <rect x="350" y="200" width="150" height="10" fill="#8b8000" />
                        <rect x="350" y="250" width="150" height="10" fill="#8b8000" />

                        <rect x="350" y="150" width="10" height="150" fill="#8b8000" />
                        <rect x="490" y="150" width="10" height="150" fill="#8b8000" />
                      </g>

                      {/* Animated forklift */}
                      <g className="forklift" style={{ animation: "forkliftMove 8s linear infinite" }}>
                        <rect x="550" y="260" width="80" height="40" fill="#4b5320" />
                        <rect x="570" y="230" width="40" height="30" fill="#4b5320" />
                        <rect x="530" y="260" width="20" height="60" fill="#666" />
                        <rect x="530" y="240" width="5" height="80" fill="#666">
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 0,-20; 0,0"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect x="535" y="240" width="30" height="5" fill="#666">
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 0,-20; 0,0"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect x="535" y="240" width="30" height="20" fill="#4b5320" opacity="0.8">
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 0,-20; 0,0"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <circle cx="560" cy="300" r="10" fill="#333" />
                        <circle cx="620" cy="300" r="10" fill="#333" />
                      </g>

                      {/* Animated boxes */}
                      <g>
                        <rect x="160" y="160" width="30" height="30" fill="#4b5320" />
                        <rect x="200" y="160" width="30" height="30" fill="#3a3a3a" />
                        <rect x="240" y="160" width="30" height="30" fill="#4b5320" />

                        <rect x="160" y="210" width="30" height="30" fill="#3a3a3a" />
                        <rect x="200" y="210" width="30" height="30" fill="#4b5320" />
                        <rect x="240" y="210" width="30" height="30" fill="#3a3a3a" />

                        <rect x="360" y="160" width="30" height="30" fill="#4b5320" />
                        <rect x="400" y="160" width="30" height="30" fill="#3a3a3a" />
                        <rect x="440" y="160" width="30" height="30" fill="#4b5320" />

                        <rect x="360" y="210" width="30" height="30" fill="#3a3a3a">
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 200,0; 200,0; 200,0; 0,0"
                            dur="8s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect x="400" y="210" width="30" height="30" fill="#4b5320" />
                        <rect x="440" y="210" width="30" height="30" fill="#3a3a3a" />
                      </g>

                      <style>
                        {`
                        @keyframes forkliftMove {
                          0% { transform: translateX(0); }
                          25% { transform: translateX(-200px); }
                          50% { transform: translateX(-200px); }
                          75% { transform: translateX(0); }
                          100% { transform: translateX(0); }
                        }
                      `}
                      </style>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-beatrix-dark">
                  Why Choose Us
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We offer premium military logistics services with unmatched security and reliability.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Encrypted real-time tracking with secure communications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Armored and secure transport vehicles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Vetted and security-cleared personnel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Specialized handling for sensitive equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Tactical deployment capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>24/7 secure operations center</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-beatrix-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-beatrix-dark">
                Military Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored logistics services for defense and security operations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
            <Card className="beatrix-card">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beatrix-primary text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Defense Logistics</CardTitle>
                <CardDescription>For military organizations and defense contractors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive logistics solutions with secure transport, dedicated security teams, and integration
                  with military systems.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business#defense" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beatrix-primary text-white">
                  <Package className="h-6 w-6" />
                </div>
                <CardTitle>Tactical Supply Chain</CardTitle>
                <CardDescription>Streamlined logistics for field operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Efficient supply chain management for military operations, including rapid deployment, field
                  logistics, and tactical resupply capabilities.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business#tactical-supply" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-beatrix-primary text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Emergency Response</CardTitle>
                <CardDescription>Rapid deployment for critical situations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 emergency logistics support with rapid response teams, air transport capabilities, and crisis
                  management protocols.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business#emergency" className="w-full">
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
          <div className="flex justify-center">
            <Link href="/business">
              <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">
                Explore Military Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-beatrix-dark">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trusted by defense organizations and military contractors worldwide.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
            <Card className="beatrix-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-beatrix-light p-2 w-12 h-12 overflow-hidden relative">
                    <div className="w-full h-full">
                      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="20" cy="15" r="8" fill="#3a3a3a" />
                        <rect x="10" y="25" width="20" height="15" rx="2" fill="#4b5320" />
                        <rect x="15" y="22" width="10" height="3" fill="#4b5320" />
                        <rect x="12" y="25" width="16" height="2" fill="#8b8000" />
                        <rect x="14" y="28" width="12" height="2" fill="#8b8000" />
                        <rect x="16" y="31" width="8" height="2" fill="#8b8000" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Col. M. Johnson</CardTitle>
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
                  "Beatrix Military Delivery provided exceptional service during our field exercise. Critical equipment
                  arrived precisely on schedule, and their secure tracking system gave us complete visibility throughout
                  the operation."
                </p>
              </CardContent>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-beatrix-light p-2 w-12 h-12 overflow-hidden relative">
                    <div className="w-full h-full">
                      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="20" cy="15" r="8" fill="#3a3a3a" />
                        <rect x="10" y="25" width="20" height="15" rx="2" fill="#4b5320" />
                        <rect x="15" y="22" width="10" height="3" fill="#4b5320" />
                        <rect x="12" y="25" width="16" height="2" fill="#8b8000" />
                        <rect x="14" y="28" width="12" height="2" fill="#8b8000" />
                        <rect x="16" y="31" width="8" height="2" fill="#8b8000" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Maj. T. Richards</CardTitle>
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
                  "As a defense contractor, secure and reliable logistics is essential to our operations. Beatrix has
                  been our trusted partner for over two years, consistently delivering mission-critical components with
                  the highest level of security."
                </p>
              </CardContent>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-beatrix-light p-2 w-12 h-12 overflow-hidden relative">
                    <div className="w-full h-full">
                      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="20" cy="15" r="8" fill="#3a3a3a" />
                        <rect x="10" y="25" width="20" height="15" rx="2" fill="#4b5320" />
                        <rect x="15" y="22" width="10" height="3" fill="#4b5320" />
                        <rect x="12" y="25" width="16" height="2" fill="#8b8000" />
                        <rect x="14" y="28" width="12" height="2" fill="#8b8000" />
                        <rect x="16" y="31" width="8" height="2" fill="#8b8000" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Capt. E. Rodriguez</CardTitle>
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
                  "During our emergency deployment, Beatrix Military Delivery's rapid response team was instrumental in
                  getting our specialized equipment to the field. Their tactical logistics expertise made a critical
                  difference in our mission success."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/testimonials">
              <Button variant="outline" className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 beatrix-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Deploy?
              </h2>
              <p className="mx-auto max-w-[700px] text-beatrix-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join defense organizations worldwide and experience the Beatrix Military advantage.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/quote">
                <Button size="lg" className="bg-white text-beatrix-primary hover:bg-beatrix-light">
                  Request Secure Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Secure Ops
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Command Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-beatrix-dark">
                  Mobile Command Center
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Access our secure military logistics platform from anywhere with our encrypted mobile command
                  application.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>End-to-end encrypted communications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Real-time secure tracking with military-grade encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Biometric authentication for maximum security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-beatrix-primary" />
                  <span>Offline capabilities for field operations</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="#" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5,12.5c0-0.91,0.55-1.73,1.4-2.08c-0.25-0.55-0.56-1.08-0.92-1.55c-0.21,0.07-0.43,0.1-0.63,0.1 c-0.51,0-1.02-0.19-1.41-0.58c-0.56-0.56-0.7-1.35-0.42-2.03c-0.47-0.37-0.99-0.68-1.55-0.92C13.73,6.45,12.91,7,12,7 s-1.73-0.55-2.08-1.4c-0.56,0.25-1.08,0.56-1.55,0.92c0.28,0.68,0.14,1.47-0.42,2.03c-0.39,0.39-0.9,0.58-1.41,0.58 c-0.2,0-0.42-0.03-0.63-0.1C5.56,9.47,5.25,10,5,10.55c0.85,0.35,1.4,1.17,1.4,2.08s-0.55,1.73-1.4,2.08 c0.25,0.55,0.56,1.08,0.92,1.55c0.21-0.07,0.43-0.1,0.63-0.1c0.51,0,1.02,0.19,1.41,0.58c0.56,0.56,0.7,1.35,0.42,2.03 c0.47,0.37,0.99,0.68,1.55,0.92c0.35-0.85,1.17-1.4,2.08-1.4s1.73,0.55,2.08,1.4c0.56-0.25,1.08-0.56,1.55-0.92 c-0.28-0.68-0.14-1.47,0.42-2.03c0.39-0.39,0.9-0.58,1.41-0.58c0.2,0,0.42,0.03,0.63,0.1c0.36-0.47,0.67-0.99,0.92-1.55 C18.05,14.23,17.5,13.41,17.5,12.5z M12,16c-1.93,0-3.5-1.57-3.5-3.5S10.07,9,12,9s3.5,1.57,3.5,3.5S13.93,16,12,16z" />
                    </svg>
                    Secure App Store
                  </Button>
                </Link>
                <Link href="#" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5z M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12z M20.16,10.81C20.5,11.08,20.75,11.5,20.75,12c0,0.5-0.25,0.92-0.59,1.19l-2.13,1.97l-2.37-2.37L18.3,10.2l1.86,0.61z M6.05,2.66l10.76,6.22l-2.37,2.37L6.05,2.66z" />
                    </svg>
                    Secure Play Store
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[36px] p-4 shadow-xl border-[8px] border-gray-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
                <div className="w-full h-full bg-beatrix-light rounded-[24px] overflow-hidden">
                  <div className="h-12 bg-beatrix-primary flex items-center justify-center text-white font-semibold">
                    Beatrix Military Command
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Track Shipment</span>
                        <Badge className="bg-beatrix-primary">Secure</Badge>
                      </div>
                      <div className="text-sm text-gray-600">BMD-SECOPS-1234</div>
                      <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-beatrix-primary h-full rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Base Alpha</span>
                        <span>Forward Ops</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Secure Alerts</span>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs p-2 bg-blue-50 rounded border-l-2 border-blue-500">
                          Shipment cleared checkpoint Bravo
                        </div>
                        <div className="text-xs p-2 bg-green-50 rounded border-l-2 border-green-500">
                          ETA to destination: 0600 hours
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Command Actions</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-gray-50 rounded text-xs">
                          <MapPin className="h-4 w-4 mx-auto mb-1" />
                          Tactical Map
                        </div>
                        <div className="p-2 bg-gray-50 rounded text-xs">
                          <Clock className="h-4 w-4 mx-auto mb-1" />
                          Reschedule
                        </div>
                        <div className="p-2 bg-gray-50 rounded text-xs">
                          <Shield className="h-4 w-4 mx-auto mb-1" />
                          Secure Comms
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

