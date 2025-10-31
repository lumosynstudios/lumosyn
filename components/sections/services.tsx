'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  MessageSquare,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { MagicCard } from '@/components/ui/magic-card';
import { BorderBeam } from '@/components/ui/border-beam';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'High-performance web apps built with modern frameworks and optimized for speed.',
    features: [
      'Next.js & React',
      'TypeScript',
      'Performance Optimized',
      'SEO Ready',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile apps with native performance and seamless user experience.',
    features: [
      'React Native',
      'Expo Development',
      'App Store Ready',
      'Real-time Features',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Intelligent automation solutions that streamline workflows and boost productivity.',
    features: [
      'Process Automation',
      'AI Integration',
      'Custom Workflows',
      'Analytics Dashboard',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that converts visitors into customers through intuitive interfaces.',
    features: [
      'User Research',
      'Design Systems',
      'Prototyping',
      'Usability Testing',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: MessageSquare,
    title: 'LLM Integration',
    description:
      'Integrate advanced LLMs (Claude, OpenAI, local) into your products and workflows.',
    features: [
      'RAG & Tools',
      'Secure Prompt Flows',
      'Observability',
      'Eval & Guardrails',
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Optimization',
    description:
      'Performance tuning and optimization services to make your applications lightning fast.',
    features: [
      'Core Web Vitals',
      'Load Time Optimization',
      'Database Tuning',
      'CDN Setup',
    ],
    gradient: 'from-yellow-500 to-orange-500',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 rounded-full backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-brand-blue animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground">Comprehensive Digital</span>
            <span className="block bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From web development to AI-powered automation, we deliver end-to-end
            solutions that drive measurable business results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}>
              <MagicCard
                className="h-full cursor-pointer group relative overflow-hidden rounded-2xl p-px"
                gradientSize={hoveredIndex === index ? 220 : 0}
                gradientColor="transparent"
                gradientOpacity={0.7}
                gradientFrom="#3B82F6"
                gradientTo="#7C3AED">
                {/* BorderBeam appears on hover */}
                {hoveredIndex === index && (
                  <BorderBeam
                    size={80}
                    duration={10}
                    delay={0}
                    colorFrom="#3B82F6"
                    colorTo="#7C3AED"
                    borderWidth={1}
                  />
                )}

                <div className="relative h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6 transition-all duration-300 group-hover:-translate-y-0.5">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-xl border border-brand-blue/20">
                      <service.icon className="h-6 w-6 text-brand-blue" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-brand-blue flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-xs h-9 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">
              Ready to transform your business?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 transition-opacity group shadow-lg shadow-brand-blue/25">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-brand-blue/5">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
