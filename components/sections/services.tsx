"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  MessageSquare,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web applications built with modern frameworks and optimized for speed.",
    features: ["Next.js & React", "TypeScript", "Performance Optimized", "SEO Ready"],
    metrics: "99% Uptime"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications with native performance and seamless user experience.",
    features: ["React Native", "Expo Development", "App Store Ready", "Real-time Features"],
    metrics: "4.8★ Rating"
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline workflows and boost productivity.",
    features: ["Process Automation", "AI Integration", "Custom Workflows", "Analytics Dashboard"],
    metrics: "80% Time Saved"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers through intuitive interfaces.",
    features: ["User Research", "Design Systems", "Prototyping", "Usability Testing"],
    metrics: "2.5x Conversion"
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Smart conversational AI powered by the latest language models for 24/7 customer support.",
    features: ["Natural Language", "Multi-language", "Custom Training", "Analytics"],
    metrics: "24/7 Support"
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Performance tuning and optimization services to make your applications lightning fast.",
    features: ["Core Web Vitals", "Load Time Optimization", "Database Tuning", "CDN Setup"],
    metrics: "300% Faster"
  }
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
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

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="py-24">
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
              <Zap className="h-4 w-4 text-brand-blue" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="block">Comprehensive Digital</span>
            <span className="block text-gradient bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From web development to AI-powered automation, we deliver end-to-end solutions
            that drive measurable business results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card className="h-full group relative border border-border/50 bg-card/50 backdrop-blur-sm hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-muted/50 rounded-lg border border-border/30">
                      <service.icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full">
                      {service.metrics}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-xs h-8 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-auto h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-16">
          <div className="space-y-4">
            <p className="text-muted-foreground">Ready to transform your business?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
