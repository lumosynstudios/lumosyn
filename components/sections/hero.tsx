'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TextAnimate } from '@/components/ui/text-animate';
import { Particles } from '@/components/ui/particles';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

// Clean, minimal animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  // Responsive particle count - optimized for mobile performance
  const [particleCount, setParticleCount] = React.useState(80);

  React.useEffect(() => {
    const updateParticleCount = () => {
      if (window.innerWidth < 640) {
        setParticleCount(30); // Mobile
      } else if (window.innerWidth < 1024) {
        setParticleCount(50); // Tablet
      } else {
        setParticleCount(80); // Desktop
      }
    };

    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/95 py-20 sm:py-0">
      {/* Premium Particles Background - Mobile Optimized */}
      <Particles
        className="absolute inset-0"
        quantity={particleCount}
        ease={80}
        color="#3B82F6"
        refresh
      />

      {/* Centered Content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Clean Modern Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue dark:text-brand-purple" />
              <AnimatedGradientText
                speed={1.5}
                colorFrom="#3B82F6"
                colorTo="#7C3AED"
                className="text-xs sm:text-sm font-semibold">
                Crafting Digital Excellence
              </AnimatedGradientText>
            </div>
          </motion.div>

          {/* Main Heading with Text Animation - Mobile Responsive */}
          <div className="space-y-4 sm:space-y-6">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight px-2 sm:px-0">
              Transform Your Digital Presence
            </TextAnimate>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 font-light">
              <span className="font-semibold text-foreground">Lumosyn AI</span>{' '}
              delivers cutting-edge software development, AI automation, and
              digital solutions for Filipino businesses.
            </motion.p>
          </div>

          {/* Single Primary CTA - Refined & Sleek */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-2 sm:pt-4">
            <Link href="#contact" className="inline-block group">
              <ShimmerButton
                shimmerColor="#3B82F6"
                shimmerSize="0.08em"
                shimmerDuration="2.5s"
                borderRadius="0.5rem"
                background="linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)"
                className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span className="flex items-center gap-1.5">
                  Start Your Project
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Premium gradient orbs for depth - Mobile Responsive */}
      <div className="absolute top-1/4 -left-10 sm:-left-20 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-brand-blue/30 dark:bg-brand-blue/20 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-brand-purple/30 dark:bg-brand-purple/20 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
    </section>
  );
}
