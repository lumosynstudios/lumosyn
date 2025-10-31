"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Target, Lightbulb, Award, Sparkles } from "lucide-react"

import { TextAnimate } from "@/components/ui/text-animate"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Ripple } from "@/components/ui/ripple"
import { MagicCard } from "@/components/ui/magic-card"

const stats = [
  { number: 2, suffix: "+", label: "Years in Business", description: "Building digital solutions" },
  { number: 50, suffix: "+", label: "Projects Completed", description: "Successful deliveries" },
  { number: 100, suffix: "%", label: "Client Satisfaction", description: "Happy customers" },
  { number: 24, suffix: "/7", label: "Support Available", description: "Always here for you" }
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

const founders = [
  {
    name: "Josh Fermano",
    role: "Co-Founder & Lead Developer",
    description: "Passionate about creating innovative web solutions and AI automation that transform how businesses operate in the digital age.",
    expertise: ["Full-Stack Development", "AI Integration", "Cloud Architecture"]
  },
  {
    name: "Co-Founder",
    role: "Co-Founder & Design Lead",
    description: "Expert in UI/UX design and mobile development, dedicated to creating beautiful, user-friendly experiences that drive results.",
    expertise: ["UI/UX Design", "Mobile Development", "Brand Strategy"]
  }
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ripple Background Effect */}
      <Ripple
        mainCircleSize={300}
        mainCircleOpacity={0.15}
        numCircles={8}
        className="opacity-50"
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

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
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-brand-blue animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              About Lumosyn
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Pioneers of Digital Innovation
            </TextAnimate>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={0.3}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-8"
            >
              in the Philippines
            </TextAnimate>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Founded by two passionate developers in the Philippines, Lumosyn Studios combines
            local expertise with global standards to deliver exceptional digital experiences.
            We&apos;re not just building websites and apps – we&apos;re crafting the future of Filipino businesses
            in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Stats Grid with NumberTicker */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-2 flex items-center justify-center gap-1">
                {stat.suffix === "/7" ? (
                  <>
                    <NumberTicker value={stat.number} />
                    <span>/7</span>
                  </>
                ) : (
                  <>
                    <NumberTicker value={stat.number} />
                    <span>{stat.suffix}</span>
                  </>
                )}
              </div>
              <div className="text-base sm:text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid with MagicCard */}
        <motion.div
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <MagicCard
                className="h-full cursor-pointer group rounded-2xl p-px"
                gradientSize={hoveredCard === index ? 250 : 0}
                gradientColor="transparent"
                gradientOpacity={0.6}
                gradientFrom="#3B82F6"
                gradientTo="#7C3AED"
              >
                <div className="relative h-full text-center bg-card/50 backdrop-blur-xl rounded-2xl p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-brand-blue" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {value.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders Section with Glassmorphism */}
        <motion.div
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <TextAnimate
              animation="fadeIn"
              by="word"
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Meet the Founders
            </TextAnimate>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Two passionate developers building the future of digital innovation in the Philippines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MagicCard
                  className="cursor-pointer group rounded-2xl p-px"
                  gradientSize={200}
                  gradientColor="transparent"
                  gradientOpacity={0.5}
                  gradientFrom="#3B82F6"
                  gradientTo="#7C3AED"
                >
                  <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-8 space-y-6">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 flex items-center justify-center border-2 border-brand-blue/30 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-12 w-12 text-brand-blue" />
                    </div>

                    {/* Info */}
                    <div className="text-center space-y-2">
                      <h4 className="text-xl font-bold">{founder.name}</h4>
                      <p className="text-sm text-brand-blue font-medium">{founder.role}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {founder.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-border/50">
                      {founder.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
