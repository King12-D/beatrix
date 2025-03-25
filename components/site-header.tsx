"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/track", label: "Track" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-beatrix-primary text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <span className="text-xl font-bold">Beatrix Military Delivery</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-beatrix-accent ${
                pathname === route.href ? "text-beatrix-accent" : "text-white"
              }`}
            >
              {route.label}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="bg-white text-beatrix-primary hover:bg-beatrix-light hover:text-beatrix-dark"
          >
            <Link href="/dashboard">Client Portal</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-beatrix-primary border-t border-beatrix-dark">
          <div className="container py-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-beatrix-accent py-2 ${
                  pathname === route.href ? "text-beatrix-accent" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="bg-white text-beatrix-primary hover:bg-beatrix-light hover:text-beatrix-dark"
            >
              <Link href="/dashboard">Client Portal</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

