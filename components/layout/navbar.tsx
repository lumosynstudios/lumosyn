'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
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

  return (
    <>
      {/* Main Floating Navbar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-700">
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-background/40 backdrop-blur-2xl px-4 py-3 shadow-2xl shadow-black/10 ring-1 ring-white/5">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 px-2 py-1 rounded-full hover:bg-white/10 transition-all duration-300 group"
            onClick={() => setIsOpen(false)}>
            <div className="relative h-8 w-8">
              <Image
                src="/favicon-light.svg"
                alt="Lumosyn Studios"
                className="block dark:hidden"
                width={32}
                height={32}
              />
              <Image
                src="/favicon-dark.svg"
                alt="Lumosyn Studios"
                className="hidden dark:block"
                width={32}
                height={32}
              />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">
              Lumosyn Studios
            </span>
          </Link>

          {/* Separator */}
          <div className="hidden md:block h-6 w-px bg-border/30 mx-1" />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem('')}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                  activeItem === item.name
                    ? 'text-foreground bg-white/15'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                )}
                onClick={() => setIsOpen(false)}>
                {item.name}
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
              className="h-9 bg-foreground text-background hover:bg-foreground/90 text-sm px-6 font-medium shadow-lg rounded-full group"
              asChild>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Get Started
                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-9 w-9 text-foreground/70 hover:text-foreground hover:bg-white/10 rounded-full">
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100vw-2rem)] max-w-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="rounded-2xl border border-white/10 bg-background/30 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/10 hover:text-foreground transition-all duration-200"
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 mt-3 border-t border-border/20">
                <Button
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium shadow-lg rounded-xl h-11"
                  onClick={() => setIsOpen(false)}
                  asChild>
                  <Link href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
