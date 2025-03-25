"use client"

import { useState } from "react"
import { Truck, Info, CheckCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Sender details
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    senderAddress: "",
    senderCity: "",
    senderState: "",
    senderZip: "",

    // Recipient details
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    recipientState: "",
    recipientZip: "",

    // Package details
    packageType: "parcel",
    weight: "",
    dimensions: "",
    fragile: false,
    insurance: false,

    // Service details
    serviceType: "standard",
    deliveryDate: "",
    specialInstructions: "",
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Quote request submitted:", formData)

    // Show success message
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you with a quote shortly.",
    })

    // Move to confirmation step
    setStep(5)
  }

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between mb-8 w-full max-w-3xl mx-auto">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                stepNumber === step
                  ? "bg-beatrix-primary text-white"
                  : stepNumber < step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {stepNumber < step ? <CheckCircle className="h-5 w-5" /> : stepNumber}
            </div>
            <span className="text-xs mt-1 text-muted-foreground">
              {stepNumber === 1 ? "Sender" : stepNumber === 2 ? "Recipient" : stepNumber === 3 ? "Package" : "Service"}
            </span>
          </div>
        ))}
      </div>
    )
  }

  const renderSenderForm = () => {
    return (
      <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="senderName">Full Name</Label>
            <Input
              id="senderName"
              name="senderName"
              placeholder="Your full name"
              required
              value={formData.senderName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senderEmail">Email</Label>
            <Input
              id="senderEmail"
              name="senderEmail"
              type="email"
              placeholder="Your email address"
              required
              value={formData.senderEmail}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="senderPhone">Phone Number</Label>
          <Input
            id="senderPhone"
            name="senderPhone"
            placeholder="Your phone number"
            required
            value={formData.senderPhone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="senderAddress">Address</Label>
          <Input
            id="senderAddress"
            name="senderAddress"
            placeholder="Street address"
            required
            value={formData.senderAddress}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="senderCity">City</Label>
            <Input
              id="senderCity"
              name="senderCity"
              placeholder="City"
              required
              value={formData.senderCity}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senderState">State</Label>
            <Input
              id="senderState"
              name="senderState"
              placeholder="State"
              required
              value={formData.senderState}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senderZip">ZIP Code</Label>
            <Input
              id="senderZip"
              name="senderZip"
              placeholder="ZIP code"
              required
              value={formData.senderZip}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    )
  }

  const renderRecipientForm = () => {
    return (
      <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="recipientName">Recipient's Full Name</Label>
            <Input
              id="recipientName"
              name="recipientName"
              placeholder="Recipient's full name"
              required
              value={formData.recipientName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recipientEmail">Recipient's Email</Label>
            <Input
              id="recipientEmail"
              name="recipientEmail"
              type="email"
              placeholder="Recipient's email address"
              value={formData.recipientEmail}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="recipientPhone">Recipient's Phone Number</Label>
          <Input
            id="recipientPhone"
            name="recipientPhone"
            placeholder="Recipient's phone number"
            required
            value={formData.recipientPhone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recipientAddress">Recipient's Address</Label>
          <Input
            id="recipientAddress"
            name="recipientAddress"
            placeholder="Street address"
            required
            value={formData.recipientAddress}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="recipientCity">City</Label>
            <Input
              id="recipientCity"
              name="recipientCity"
              placeholder="City"
              required
              value={formData.recipientCity}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recipientState">State</Label>
            <Input
              id="recipientState"
              name="recipientState"
              placeholder="State"
              required
              value={formData.recipientState}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recipientZip">ZIP Code</Label>
            <Input
              id="recipientZip"
              name="recipientZip"
              placeholder="ZIP code"
              required
              value={formData.recipientZip}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    )
  }

  const renderPackageForm = () => {
    return (
      <>
        <div className="space-y-2">
          <Label htmlFor="packageType">Package Type</Label>
          <Select value={formData.packageType} onValueChange={(value) => handleSelectChange("packageType", value)}>
            <SelectTrigger id="packageType">
              <SelectValue placeholder="Select package type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="envelope">Envelope</SelectItem>
              <SelectItem value="parcel">Parcel</SelectItem>
              <SelectItem value="box">Box</SelectItem>
              <SelectItem value="pallet">Pallet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (lbs)</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              placeholder="Package weight"
              required
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dimensions">Dimensions (L x W x H inches)</Label>
            <Input
              id="dimensions"
              name="dimensions"
              placeholder="e.g., 12 x 8 x 6"
              value={formData.dimensions}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="fragile"
              name="fragile"
              checked={formData.fragile}
              onCheckedChange={(checked) => setFormData({ ...formData, fragile: checked })}
            />
            <Label htmlFor="fragile">This package contains fragile items</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="insurance"
              name="insurance"
              checked={formData.insurance}
              onCheckedChange={(checked) => setFormData({ ...formData, insurance: checked })}
            />
            <Label htmlFor="insurance">Add shipping insurance</Label>
          </div>
        </div>
      </>
    )
  }

  const renderServiceForm = () => {
    return (
      <>
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <RadioGroup
            value={formData.serviceType}
            onValueChange={(value) => handleSelectChange("serviceType", value)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 hover:bg-muted">
              <RadioGroupItem value="standard" id="standard" className="sr-only" />
              <Label
                htmlFor="standard"
                className="flex cursor-pointer flex-col items-center justify-between rounded-md p-4 hover:bg-muted"
              >
                <Truck className="mb-3 h-6 w-6 text-beatrix-primary" />
                <span className="text-sm font-medium">Standard Delivery</span>
                <span className="text-xs text-muted-foreground">3-5 business days</span>
              </Label>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 hover:bg-muted">
              <RadioGroupItem value="express" id="express" className="sr-only" />
              <Label
                htmlFor="express"
                className="flex cursor-pointer flex-col items-center justify-between rounded-md p-4 hover:bg-muted"
              >
                <Truck className="mb-3 h-6 w-6 text-beatrix-primary" />
                <span className="text-sm font-medium">Express Delivery</span>
                <span className="text-xs text-muted-foreground">1-2 business days</span>
              </Label>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 hover:bg-muted">
              <RadioGroupItem value="same-day" id="same-day" className="sr-only" />
              <Label
                htmlFor="same-day"
                className="flex cursor-pointer flex-col items-center justify-between rounded-md p-4 hover:bg-muted"
              >
                <Truck className="mb-3 h-6 w-6 text-beatrix-primary" />
                <span className="text-sm font-medium">Same-Day Delivery</span>
                <span className="text-xs text-muted-foreground">Within hours</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
          <Input
            id="deliveryDate"
            name="deliveryDate"
            type="date"
            value={formData.deliveryDate}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
          <Textarea
            id="specialInstructions"
            name="specialInstructions"
            placeholder="Any special handling instructions or delivery notes"
            rows={3}
            value={formData.specialInstructions}
            onChange={handleChange}
          />
        </div>
      </>
    )
  }

  const renderConfirmation = () => {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-beatrix-dark">Quote Request Submitted!</h2>
        <p className="text-muted-foreground">
          Thank you for requesting a quote from Beatrix Delivery Courier. We've received your information and will
          process your quote shortly.
        </p>
        <div className="bg-beatrix-light p-4 rounded-lg text-left mt-6">
          <p className="font-medium text-beatrix-dark">What happens next?</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-beatrix-primary mt-0.5" />
              <span>Our team will review your request and calculate your quote</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-beatrix-primary mt-0.5" />
              <span>You'll receive an email with your quote details within 2 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-beatrix-primary mt-0.5" />
              <span>Once you approve the quote, we'll schedule your pickup</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link href="/">
            <Button className="bg-beatrix-primary hover:bg-beatrix-secondary">Return to Home</Button>
          </Link>
          <Link href="/track">
            <Button variant="outline" className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light">
              Track a Package
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 beatrix-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get a Shipping Quote
              </h1>
              <p className="mx-auto max-w-[700px] text-beatrix-light md:text-xl">
                Fill out the form below to receive a customized shipping quote for your package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Card className="mx-auto max-w-3xl beatrix-card">
            <CardHeader>
              <CardTitle className="text-center text-beatrix-primary">
                {step < 5 ? "Shipping Quote Request" : "Quote Request Confirmation"}
              </CardTitle>
              <CardDescription className="text-center">
                {step < 5 ? `Step ${step} of 4` : "Your request has been submitted"}
              </CardDescription>
              {step < 5 && renderStepIndicator()}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && renderSenderForm()}
                {step === 2 && renderRecipientForm()}
                {step === 3 && renderPackageForm()}
                {step === 4 && renderServiceForm()}
                {step === 5 && renderConfirmation()}
              </form>
            </CardContent>
            {step < 5 && (
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-beatrix-primary text-beatrix-primary hover:bg-beatrix-light"
                  >
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                {step < 4 ? (
                  <Button type="button" onClick={nextStep} className="bg-beatrix-primary hover:bg-beatrix-secondary">
                    Next
                  </Button>
                ) : step === 4 ? (
                  <Button type="submit" className="bg-beatrix-primary hover:bg-beatrix-secondary">
                    Submit Quote Request
                  </Button>
                ) : null}
              </CardFooter>
            )}
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-beatrix-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-beatrix-dark">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Common questions about our shipping quotes and services.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <Card className="beatrix-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                  <Info className="h-5 w-5" />
                  How long does it take to receive a quote?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most quotes are processed within 2 hours during business hours. For complex shipping requirements or
                  international deliveries, it may take up to 24 hours.
                </p>
              </CardContent>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                  <Info className="h-5 w-5" />
                  What factors affect the shipping cost?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shipping costs are determined by package weight, dimensions, distance, service type (standard,
                  express, same-day), and any additional services like insurance or special handling.
                </p>
              </CardContent>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                  <Info className="h-5 w-5" />
                  How do I pay for my shipping?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After you approve your quote, you can pay securely online using credit/debit cards, PayPal, or bank
                  transfer. For business accounts, we also offer invoicing options.
                </p>
              </CardContent>
            </Card>
            <Card className="beatrix-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-beatrix-primary">
                  <Info className="h-5 w-5" />
                  Can I cancel after receiving a quote?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, quotes are non-binding and there's no obligation to proceed. You can cancel at any time before
                  confirming and paying for your shipping service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

