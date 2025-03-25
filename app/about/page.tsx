import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Beatrix Military Delivery
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted partner in premium military logistics services since 2010.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="aspect-video overflow-hidden rounded-xl w-full max-w-[800px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full" style={{ position: "relative" }}>
                    <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                      {/* Military base animation */}
                      <defs>
                        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#87CEEB" />
                          <stop offset="100%" stopColor="#E0F7FA" />
                        </linearGradient>
                      </defs>
                      {/* Sky background */}
                      <rect x="0" y="0" width="800" height="300" fill="url(#skyGradient)" />
                      {/* Ground */}
                      <rect x="0" y="300" width="800" height="150" fill="#4b5320" />
                      {/* Mountains in background */}
                      <polygon
                        points="0,300 100,200 200,250 300,180 400,220 500,150 600,200 700,170 800,250 800,300"
                        fill="#2c3118"
                      />
                      {/* Main building */}
                      <rect x="300" y="220" width="200" height="80" fill="#3a3a3a" />
                      <rect x="340" y="260" width="40" height="40" fill="#222" /> {/* Door */}
                      <rect x="320" y="240" width="20" height="20" fill="#87CEEB" /> {/* Window */}
                      <rect x="360" y="240" width="20" height="20" fill="#87CEEB" /> {/* Window */}
                      <rect x="400" y="240" width="20" height="20" fill="#87CEEB" /> {/* Window */}
                      <rect x="440" y="240" width="20" height="20" fill="#87CEEB" /> {/* Window */}
                      <rect x="460" y="240" width="20" height="20" fill="#87CEEB" /> {/* Window */}
                      {/* Flag pole */}
                      <rect x="500" y="180" width="5" height="120" fill="#888" />
                      <rect x="505" y="180" width="30" height="20" fill="#4b5320">
                        <animate attributeName="y" values="180;182;180" dur="2s" repeatCount="indefinite" />
                      </rect>
                      {/* Warehouse */}
                      <rect x="100" y="250" width="150" height="50" fill="#555" />
                      <rect x="120" y="270" width="30" height="30" fill="#333" /> {/* Door */}
                      <rect x="170" y="260" width="20" height="15" fill="#87CEEB" /> {/* Window */}
                      <rect x="200" y="260" width="20" height="15" fill="#87CEEB" /> {/* Window */}
                      {/* Fence */}
                      <line x1="50" y1="300" x2="750" y2="300" stroke="#888" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="50" y1="310" x2="750" y2="310" stroke="#888" strokeWidth="2" />
                      {/* Animated helicopter */}
                      <g className="helicopter" style={{ animation: "flyAcross 15s linear infinite" }}>
                        <path
                          d="M600 100 L650 100 L670 120 L670 150 L650 170 L550 170 L530 150 L530 120 L550 100 Z"
                          fill="#4b5320"
                        />
                        <path d="M600 100 L620 80 L630 80 L650 100" fill="#4b5320" />
                        <path d="M600 170 L600 190 L610 190 L610 170" fill="#4b5320" />
                        <path d="M670 130 L700 130 L700 140 L670 140" fill="#4b5320" />
                        <path d="M530 130 L500 130 L500 140 L530 140" fill="#4b5320" />
                        <path d="M600 80 L600 60 L605 60 L605 80" fill="#4b5320" />
                        <ellipse cx="600" cy="60" rx="100" ry="5" fill="#4b5320" opacity="0.8">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 600 60"
                            to="360 600 60"
                            dur="0.2s"
                            repeatCount="indefinite"
                          />
                        </ellipse>
                      </g>
                      {/* Animated military truck */}
                      <g className="truck" style={{ animation: "driveIn 10s linear infinite" }}>
                        <rect x="200" y="320" width="80" height="30" rx="5" fill="#4b5320" />
                        <rect x="240" y="305" width="40" height="20" rx="3" fill="#4b5320" />
                        <circle cx="215" cy="350" r="10" fill="#333">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 215 350"
                            to="360 215 350"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle cx="265" cy="350" r="10" fill="#333">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 265 350"
                            type="rotate"
                            from="0 265 350"
                            to="360 265 350"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                      <style>
                        {`
                        @keyframes flyAcross {
                          0% { transform: translateX(200px); }
                          100% { transform: translateX(-800px); }
                        }
                        @keyframes driveIn {
                          0% { transform: translateX(-200px); }
                          100% { transform: translateX(800px); }
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground">
                  Beatrix Military Delivery was founded in 2010 by a team of military logistics experts and veterans who
                  recognized the need for a specialized, secure delivery service for defense organizations.
                </p>
                <p className="text-muted-foreground">
                  What started as a small operation serving local military bases has grown into a global military
                  logistics provider with secure facilities and a fleet of armored vehicles. Our mission has always been
                  to provide the highest level of security and reliability for military equipment and supplies.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to be a trusted partner for defense organizations worldwide, known for our security
                  protocols, tactical expertise, and unwavering commitment to mission success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide our military logistics operations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-muted-foreground">
                We maintain the highest level of security for all shipments, with encrypted tracking and secure
                transport protocols.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-muted-foreground">
                We deliver on time, every time, with contingency planning for all operations to ensure mission success.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain clear, honest communication with all our clients about operations, security protocols, and
                timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Meet the experts who make Beatrix Military Delivery the industry leader.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12">
            {[
              { name: "Col. Sarah Johnson (Ret.)", title: "Founder & CEO" },
              { name: "Maj. Michael Chen (Ret.)", title: "Head of Security" },
              { name: "Capt. Olivia Martinez", title: "Director of Operations" },
              { name: "Lt. David Kim (Ret.)", title: "Chief Logistics Officer" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <div className="w-full h-full">
                    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="80" cy="60" r="30" fill="#3a3a3a" />
                      <rect x="40" y="100" width="80" height="60" rx="5" fill="#4b5320" />
                      <rect x="60" y="90" width="40" height="10" fill="#4b5320" />
                      <rect x="50" y="100" width="60" height="10" fill="#8b8000" />
                      <rect x="55" y="115" width="50" height="8" fill="#8b8000" />
                      <rect x="60" y="130" width="40" height="8" fill="#8b8000" />
                      <text x="80" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        {member.name.split(" ")[0][0]}
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Secure Facilities</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Visit our secure operations centers or contact us for remote logistics support.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
            {[
              { city: "Fort Beatrix HQ", address: "123 Secure Ave, Arlington, VA 22201" },
              { city: "West Coast Operations", address: "456 Tactical Blvd, San Diego, CA 92101" },
              { city: "Central Command", address: "789 Strategic Way, Colorado Springs, CO 80911" },
            ].map((location, index) => (
              <div key={index} className="rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold">{location.city}</h3>
                <p className="mt-2 text-muted-foreground">{location.address}</p>
                <p className="mt-1 text-muted-foreground">Secure Access: 24/7 with clearance</p>
                <Button variant="outline" className="mt-4">
                  Request Access
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Network</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Whether you need secure logistics or are looking to partner with us, we're here to help.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Contact Secure Operations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

