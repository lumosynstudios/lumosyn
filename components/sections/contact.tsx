"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MessageSquare, Phone, Send, MapPin, Clock, CheckCircle2, Sparkles } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MagicCard } from "@/components/ui/magic-card"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { useConfetti } from "@/components/ui/confetti"

// Animation variants for smooth entrance effects
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Contact methods with icons and details
const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    value: "hello@lumosyn.ph",
    action: "mailto:hello@lumosyn.ph",
    gradientFrom: "#3B82F6",
    gradientTo: "#7C3AED"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Available Monday to Friday, 9 AM to 6 PM (PHT)",
    value: "+63 XXX XXX XXXX",
    action: "tel:+63XXXXXXXXX",
    gradientFrom: "#7C3AED",
    gradientTo: "#EC4899"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    value: "Start Chat",
    action: "#",
    gradientFrom: "#EC4899",
    gradientTo: "#F59E0B"
  }
]

// Company information
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

  const { fireRealistic } = useConfetti()

  // Form state management
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  // Handle form submission with success state and confetti
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Trigger success state
    setIsSuccess(true)
    setIsSubmitting(false)

    // Fire confetti celebration
    fireRealistic()

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" })
      setIsSuccess(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-black/40 border border-white/10 dark:border-white/5 rounded-full backdrop-blur-xl mb-6">
              <Mail className="h-4 w-4 text-brand-blue" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="block">Ready to Start Your</span>
            <span className="block bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s discuss your project and see how we can help bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Premium Glassmorphism Design */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 shadow-2xl">
              {/* Success state overlay */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="bg-green-500 rounded-full p-4 mb-4"
                  >
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Name and Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-brand-blue">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-white/50 dark:bg-black/30 backdrop-blur-sm border-white/20 dark:border-white/10 focus:border-brand-blue/50 transition-all duration-300 hover:border-brand-blue/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-brand-blue">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-white/50 dark:bg-black/30 backdrop-blur-sm border-white/20 dark:border-white/10 focus:border-brand-blue/50 transition-all duration-300 hover:border-brand-blue/30"
                      />
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                      className="bg-white/50 dark:bg-black/30 backdrop-blur-sm border-white/20 dark:border-white/10 focus:border-brand-blue/50 transition-all duration-300 hover:border-brand-blue/30"
                    />
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Project Details <span className="text-brand-blue">*</span>
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      required
                      rows={5}
                      className="flex w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-black/30 backdrop-blur-sm px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-brand-blue/30 focus:border-brand-blue/50 resize-none"
                    />
                  </div>
                </div>

                {/* Submit button with ShimmerButton */}
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full text-base font-semibold py-6 rounded-xl"
                  background="linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)"
                  shimmerColor="#ffffff"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Sent Successfully!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </span>
                </ShimmerButton>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - MagicCard Components */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Contact Methods */}
            {contactMethods.map((method) => (
              <motion.div key={method.title} variants={fadeInUp}>
                <MagicCard
                  className="cursor-pointer rounded-2xl overflow-hidden"
                  gradientFrom={method.gradientFrom}
                  gradientTo={method.gradientTo}
                  gradientSize={300}
                >
                  <div className="p-6 bg-white/70 dark:bg-black/40 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-xl border border-white/10 dark:border-white/5 group-hover:border-brand-blue/30 transition-all duration-300">
                        <method.icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {method.description}
                        </p>
                        <a
                          href={method.action}
                          className="text-sm font-semibold text-brand-blue hover:text-brand-purple transition-colors duration-300 inline-flex items-center gap-1 group/link"
                        >
                          {method.value}
                          <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}

            {/* Company Information Card */}
            <motion.div variants={fadeInUp}>
              <MagicCard
                className="rounded-2xl overflow-hidden"
                gradientFrom="#10B981"
                gradientTo="#3B82F6"
                gradientSize={250}
              >
                <div className="p-6 bg-white/70 dark:bg-black/40 backdrop-blur-xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    Company Information
                  </h3>
                  <div className="space-y-3">
                    {companyInfo.map((info) => (
                      <div key={info.title} className="flex items-start gap-3">
                        <info.icon className="h-4 w-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-sm text-muted-foreground">{info.title}</span>
                          <span className="text-sm font-medium">{info.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>

            {/* Quick Response Guarantee Card */}
            <motion.div variants={fadeInUp}>
              <MagicCard
                className="rounded-2xl overflow-hidden"
                gradientFrom="#10B981"
                gradientTo="#34D399"
                gradientSize={200}
              >
                <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute h-3 w-3 bg-green-500 rounded-full animate-ping" />
                      <span className="relative h-2 w-2 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="font-bold text-green-700 dark:text-green-400 text-lg">
                        Quick Response Guarantee
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We respond to all inquiries within <span className="font-semibold text-green-700 dark:text-green-400">24 hours</span> during business days.
                    For urgent matters, we&apos;re available for immediate consultation.
                  </p>
                </div>
              </MagicCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
