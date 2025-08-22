"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MessageSquare, Phone, Send, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    value: "hello@lumosyn.ph",
    action: "mailto:hello@lumosyn.ph"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Available Monday to Friday, 9 AM to 6 PM (PHT)",
    value: "+63 XXX XXX XXXX",
    action: "tel:+63XXXXXXXXX"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    value: "Start Chat",
    action: "#"
  }
]

const companyInfo = [
  {
    icon: MapPin,
    title: "Location",
    value: "Philippines"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon-Fri 9AM-6PM PHT"
  }
]

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)

    // Show success message (you can implement toast notification here)
    alert("Thank you! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border/40 rounded-full backdrop-blur-sm mb-6">
              <Mail className="h-4 w-4 text-brand-blue" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="block">Ready to Start Your</span>
            <span className="block text-gradient bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s discuss your project and see how we can help bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        required
                        rows={5}
                        className="flex w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-brand-blue/50 focus:border-brand-blue resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={staggerContainer} className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <motion.div key={method.title} variants={fadeInUp}>
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-brand-blue/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-muted/50 rounded-lg border border-border/30 group-hover:border-brand-blue/30 transition-colors">
                          <method.icon className="h-5 w-5 text-brand-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {method.description}
                          </p>
                          <a
                            href={method.action}
                            className="text-sm font-medium text-brand-blue hover:underline"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Company Info */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="font-semibold text-lg">Company Information</h3>
              <div className="space-y-3">
                {companyInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-3">
                    <info.icon className="h-4 w-4 text-brand-blue" />
                    <div>
                      <span className="text-sm text-muted-foreground">{info.title}:</span>
                      <span className="text-sm font-medium ml-2">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-green-500/20 bg-green-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-green-700 dark:text-green-400">
                      Quick Response Guarantee
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days.
                    For urgent matters, we&apos;re available for immediate consultation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
