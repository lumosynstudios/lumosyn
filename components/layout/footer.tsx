"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, ExternalLink, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "AI Automation", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Performance Optimization", href: "#services" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" }
  ]
}

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/lumosynstudios", icon: "linkedin" },
  { name: "Twitter", href: "https://twitter.com/lumosynstudios", icon: "twitter" },
  { name: "Facebook", href: "https://facebook.com/lumosynstudios", icon: "facebook" },
  { name: "GitHub", href: "https://github.com/lumosynstudios", icon: "github" }
]

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
      staggerChildren: 0.1
    }
  }
}

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [isSubscribing, setIsSubscribing] = React.useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setEmail("")
    setIsSubscribing(false)
    alert("Thank you for subscribing!")
  }

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                      Lumosyn
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Crafting digital experiences that drive business growth. 
                    Based in the Philippines, serving clients worldwide with 
                    modern web solutions and AI automation.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-brand-blue flex-shrink-0" />
                    <span className="text-muted-foreground">Philippines</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-brand-blue flex-shrink-0" />
                    <a href="mailto:hello@lumosyn.ph" className="text-muted-foreground hover:text-brand-blue transition-colors">
                      hello@lumosyn.ph
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-brand-blue flex-shrink-0" />
                    <span className="text-muted-foreground">+63 XXX XXX XXXX</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="grid sm:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the latest insights on web development, AI, and digital innovation.
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-muted/50"
                  />
                  <Button
                    type="submit"
                    variant="gradient"
                    size="sm"
                    disabled={isSubscribing}
                    className="w-full group"
                  >
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                {/* Social Links */}
                <div>
                  <h4 className="font-medium mb-3 text-sm">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-muted/50 rounded-lg border border-border/30 hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all duration-200 group"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue transition-colors" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-border/40"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lumosyn Studios. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Made with ❤️ in the Philippines</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}