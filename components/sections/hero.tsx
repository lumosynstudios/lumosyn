"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronDown, Play, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Globe } from "@/components/magicui/globe"

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border/40 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Modern Web Solutions</span>
              <span className="block text-gradient bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Built for Tomorrow
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We craft high-performance web applications, AI automations, and digital experiences 
              that drive business growth. Based in the Philippines, serving clients worldwide.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="gradient" className="group" asChild>
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="#portfolio">
                <Play className="mr-2 h-4 w-4" />
                View Case Studies
              </Link>
            </Button>
          </motion.div>

          {/* Performance metrics */}
          <motion.div variants={fadeInUp} className="pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#services" className="flex flex-col items-center space-y-2 group">
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Explore Services
            </span>
            <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-foreground animate-bounce transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}