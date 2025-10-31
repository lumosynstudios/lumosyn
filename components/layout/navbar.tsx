'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { BorderBeam } from '@/components/ui/border-beam';
import { useThemeLogo } from '@/context/theme-context';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('');
  const [scrolled, setScrolled] = React.useState(false);
  const logo = useThemeLogo();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      {/* Main Floating Navbar */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.7,
        }}
      >
        <nav className={cn(
          "relative flex items-center gap-2 rounded-full border border-white/10 dark:border-white/5",
          "bg-white/70 dark:bg-black/40 backdrop-blur-2xl px-4 py-3",
          "shadow-2xl shadow-black/10 dark:shadow-black/20 ring-1 ring-white/5",
          "transition-all duration-500",
          scrolled && "py-2 shadow-xl"
        )}>
          <BorderBeam
            size={100}
            duration={12}
            delay={0}
            colorFrom="#3B82F6"
            colorTo="#7C3AED"
          />

          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 px-2 py-1 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative h-8 w-8 transition-transform group-hover:scale-110">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight hidden sm:inline-block">
              Lumosyn
            </span>
          </Link>

          {/* Separator */}
          <div className="hidden md:block h-6 w-px bg-border/30 dark:bg-white/10 mx-1" />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem('')}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                  activeItem === item.name
                    ? 'text-foreground bg-white/20 dark:bg-white/10 shadow-sm'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/15 dark:hover:bg-white/5'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 -z-10"
                    layoutId="navbar-active"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 ml-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Button
              size="sm"
              className={cn(
                "h-9 bg-gradient-to-r from-brand-blue to-brand-purple text-white",
                "hover:opacity-90 hover:scale-105 text-sm px-6 font-medium",
                "shadow-lg hover:shadow-xl rounded-full group transition-all duration-300"
              )}
              asChild
            >
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Get Started
                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-9 w-9 text-foreground/70 hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 rounded-full"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100vw-2rem)] max-w-sm"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative rounded-2xl border border-white/10 dark:border-white/5 bg-white/70 dark:bg-black/40 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            <BorderBeam size={80} duration={10} delay={0} />
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/20 dark:hover:bg-white/10 hover:text-foreground transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 mt-3 border-t border-border/20 dark:border-white/10">
                <Button
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:opacity-90 hover:scale-105 font-medium shadow-lg rounded-xl h-11 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <Link href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
}
