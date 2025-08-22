"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Target, Lightbulb, Award } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "2+", label: "Years in Business", description: "Building digital solutions" },
  { number: "50+", label: "Projects Completed", description: "Successful deliveries" },
  { number: "100%", label: "Client Satisfaction", description: "Happy customers" },
  { number: "24/7", label: "Support Available", description: "Always here for you" }
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering Philippine businesses with world-class digital solutions that drive growth and innovation."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "We put our clients at the center of everything we do, ensuring their success is our priority."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Staying ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge."
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality control ensure every project meets the highest standards."
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-brand/10 border border-brand-blue/20 mb-6"
          >
            <Users className="h-4 w-4 text-brand-blue" />
            <span className="text-sm font-medium text-brand-blue">
              About Lumosyn
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Pioneers of Digital Innovation
            <span className="block text-gradient">in the Philippines</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Founded by two passionate developers in the Philippines, Lumosyn Studios combines
            local expertise with global standards to deliver exceptional digital experiences.
            We&apos;re not just building websites and apps – we&apos;re crafting the future of Filipino businesses
            in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-brand/10 mb-6">
                    <value.icon className="h-8 w-8 text-brand-blue" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders Section */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Meet the Founders</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-brand/20 flex items-center justify-center mb-6">
                <Users className="h-16 w-16 text-brand-blue" />
              </div>
              <h4 className="text-xl font-semibold">Co-Founder 1</h4>
              <p className="text-muted-foreground">
                Passionate about creating innovative web solutions and AI automation
                that transform how businesses operate in the digital age.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-brand/20 flex items-center justify-center mb-6">
                <Users className="h-16 w-16 text-brand-blue" />
              </div>
              <h4 className="text-xl font-semibold">Co-Founder 2</h4>
              <p className="text-muted-foreground">
                Expert in UI/UX design and mobile development, dedicated to creating
                beautiful, user-friendly experiences that drive results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
