import Link from "next/link"
import { Package, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-beatrix-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6 text-beatrix-accent" />
              <span className="text-xl font-bold">Beatrix Military</span>
            </div>
            <p className="text-sm text-gray-300">
              Your trusted partner for reliable and efficient delivery services. We ensure your packages arrive safely
              and on time.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-beatrix-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-beatrix-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-beatrix-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-beatrix-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-beatrix-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-beatrix-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-300 hover:text-beatrix-accent">
                  Track Package
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-beatrix-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-beatrix-accent">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  Same-Day Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  Fragile Item Handling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  Scheduled Deliveries
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-beatrix-accent">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-beatrix-accent mt-0.5" />
                <span className="text-gray-300">beatrixdeliverycourier@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-beatrix-accent mt-0.5" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="text-gray-300 mt-4">
                <p>123 Delivery Street</p>
                <p>Suite 101</p>
                <p>New York, NY 10001</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Beatrix Military Delivery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-beatrix-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-beatrix-accent">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-beatrix-accent">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

