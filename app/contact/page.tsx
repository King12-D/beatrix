"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to beatrixdeliverycourier@gmail.com
    console.log("Form submitted to beatrixdeliverycourier@gmail.com:", formData)
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond shortly.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
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
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-beatrix-light md:text-xl">
                We're here to help with any questions about our delivery services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card className="beatrix-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Beatrix Military Delivery - Contact</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <RadioGroup
                        id="inquiryType"
                        value={formData.inquiryType}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <Label htmlFor="delivery">Delivery Question</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tracking" id="tracking" />
                          <Label htmlFor="tracking">Tracking Question</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support">Customer Support</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Your email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("subject", value)}
                          value={formData.subject}
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="delivery">Delivery Question</SelectItem>
                            <SelectItem value="tracking">Package Tracking</SelectItem>
                            <SelectItem value="returns">Returns & Refunds</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-beatrix-primary hover:bg-beatrix-secondary">
                      Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Your message will be sent to beatrixmilitarydelivery@secure.mil
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-beatrix-dark">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Reach out to us through any of the following methods.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="beatrix-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                      <Phone className="h-5 w-5" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Customer Service: (555) 123-4567</p>
                    <p>Delivery Support: (555) 123-4568</p>
                    <p className="text-sm text-muted-foreground mt-2">Hours: Mon-Fri, 9am-6pm EST</p>
                  </CardContent>
                </Card>
                <Card className="beatrix-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                      <Mail className="h-5 w-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>General Inquiries: beatrixdeliverycourier@gmail.com</p>
                    <p>Delivery Support: beatrixdeliverycourier@gmail.com</p>
                    <p>Customer Service: beatrixdeliverycourier@gmail.com</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="beatrix-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                    <MapPin className="h-5 w-5" />
                    Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">New York (Headquarters)</h3>
                      <p>123 Delivery Ave, Suite 101</p>
                      <p>New York, NY 10001</p>
                      <p className="text-sm text-muted-foreground mt-1">Hours: Mon-Sat 10am-7pm, Sun 12pm-5pm</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Los Angeles</h3>
                      <p>456 Courier Blvd</p>
                      <p>Los Angeles, CA 90028</p>
                      <p className="text-sm text-muted-foreground mt-1">Hours: Mon-Sat 10am-7pm, Sun 12pm-5pm</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Chicago</h3>
                      <p>789 Package Ave</p>
                      <p>Chicago, IL 60611</p>
                      <p className="text-sm text-muted-foreground mt-1">Hours: Mon-Sat 10am-7pm, Sun 12pm-5pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="beatrix-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-beatrix-primary">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Before contacting us, you might find your answer in our comprehensive FAQ section.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    View FAQs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-beatrix-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-beatrix-dark">Visit Our Locations</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stop by one of our physical locations to drop off or pick up packages.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden border h-[400px] bg-background beatrix-card">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

