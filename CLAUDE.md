# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lumosyn AI** is a cutting-edge tech startup website built with Next.js 15, showcasing our web development, AI automation, UI/UX design, and chatbot services. The site features a professional, minimalistic, premium design with Gen-Z appeal and full dark/light mode support.

## Development Commands

```bash
# Development with Turbopack (faster)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Architecture & Tech Stack

### Core Stack

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS v4** with custom theme configuration
- **Framer Motion** for animations and scroll detection
- **ShadcnUI + Magic UI** for component library

### Performance & Analytics

- **Vercel Analytics & Speed Insights** integrated in layout
- **Next.js optimizations**: CSS optimization, scroll restoration, image optimization
- **Security headers** and caching strategies in `next.config.ts`
- **Dynamic imports** for code splitting

### Key Dependencies

- `@radix-ui/*` - Accessible UI primitives
- `cobe` - 3D globe component
- `framer-motion` - Animations and scroll interactions
- `next-themes` - Dark/light mode switching
- `react-intersection-observer` - Scroll-based animations

### Theme System

- **Custom Theme Context** at `context/theme-context.tsx`
- Replaces next-themes with custom implementation
- Includes `useTheme()` hook for theme management
- Includes `useThemeLogo()` hook for automatic logo switching
- Supports dark, light, and system themes
- localStorage persistence with 'lumosyn-theme' key

## Project Structure

```
app/
├── globals.css          # Tailwind config with custom brand theme
├── layout.tsx          # Root layout with theme provider & analytics
├── page.tsx           # Main page with all sections
├── robots.ts          # SEO robots configuration
└── sitemap.ts         # SEO sitemap generation

context/
└── theme-context.tsx   # Custom theme context with logo switching

components/
├── layout/
│   ├── navbar.tsx      # Pill-shaped navbar with logo, BorderBeam, transparent design
│   └── footer.tsx      # Site footer
├── sections/
│   ├── hero.tsx        # Particles, AnimatedGradientText, NumberTicker, ShimmerButton
│   ├── about.tsx       # TextAnimate, NumberTicker, Ripple, MagicCard
│   ├── services.tsx    # MagicCard with spotlight, BorderBeam on hover
│   └── contact.tsx     # MagicCard, ShimmerButton, Confetti, glassmorphism form
├── ui/                 # ShadcnUI + MagicUI components
└── providers/          # (Deprecated - use context/theme-context.tsx instead)
```

## Design System

### Brand Colors

```css
--color-brand-blue: #3B82F6
--color-brand-purple: #7C3AED
--color-brand-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Key Design Patterns

- **Glass morphism**: `bg-white/70 dark:bg-black/40 backdrop-blur-xl`
- **Gradient text**: `bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent`
- **Pill-shaped navbar**: Transparent with BorderBeam, theme-aware logo switching
- **Floating elements**: Used extensively in navbar and cards
- **Tab-style aesthetics**: Consistent rounded corners and hover states

## MagicUI Components Integration

### Installed Components

- **BorderBeam**: Animated border effect (navbar, cards)
- **Particles**: Background particle animation (hero)
- **ShimmerButton**: Premium shimmer effect button (hero, contact)
- **AnimatedGradientText**: Gradient text animation (hero)
- **NumberTicker**: Animated number counter (hero, about)
- **MagicCard**: Spotlight card effect (services, about, contact)
- **TextAnimate**: Text reveal animations (about)
- **Ripple**: Background ripple effect (about)
- **Confetti**: Success celebration animation (contact)

### Usage Patterns

```typescript
// MagicCard with hover effect
<MagicCard
  gradientSize={200}
  gradientFrom="#3B82F6"
  gradientTo="#7C3AED"
/>

// ShimmerButton with brand gradient
<ShimmerButton
  shimmerColor="#3B82F6"
  background="linear-gradient(to right, #3B82F6, #7C3AED)"
/>
```

## Critical Components

### Navbar (`components/layout/navbar.tsx`)

Premium pill-shaped navbar with:

- Transparent/translucent design with backdrop blur
- Lumosyn logo with automatic theme switching
- BorderBeam animated border effect
- Smooth scroll detection and animations
- Mobile-responsive with glassmorphism menu
- All navigation items visible on desktop

### Animation Patterns

- **Spring animations**: `type: "spring", stiffness: 100, damping: 15`
- **Easing**: `ease: [0.16, 1, 0.3, 1]` (common throughout)
- **Scroll-triggered**: Most sections use `react-intersection-observer`

## SEO Configuration

**Philippines market focus** with comprehensive metadata in `layout.tsx`:

- Geo-targeting: `geo.region: "PH"`
- Keywords optimized for Philippine tech market
- OpenGraph and Twitter card integration
- Canonical URLs and structured data

## Performance Optimizations

### Next.js Config (`next.config.ts`)

- Image optimization with WebP/AVIF formats
- Security headers (HSTS, X-Frame-Options, etc.)
- Static asset caching (1 year)
- CSS optimization enabled

### Code Splitting

- Dynamic imports used for heavy components
- Lazy loading implemented for non-critical sections
- Bundle optimization for Philippines market

## Development Notes

### Common Issues

- **Motion variants**: Use compatible easing values with framer-motion
- **Tailwind v4**: Some syntax differs from v3 (custom variant declarations)
- **TypeScript**: Strict mode enabled, proper typing required

### Testing Navbar

The floating navbar requires scrolling to test properly. Key behaviors:

1. Scroll >100px triggers floating state
2. All nav items remain visible on desktop
3. Mobile menu adapts to floating state position
4. Smooth transitions between states

### Theme Context

- Use `useTheme()` from `@/context/theme-context` instead of next-themes
- Use `useThemeLogo()` for automatic logo switching
- Theme stored in localStorage as 'lumosyn-theme'

### Brand Consistency

- Maintain blue/purple gradient theme throughout
- Use glass morphism effects sparingly but consistently
- Follow tab-style design patterns for new components
- Ensure dark/light mode compatibility

## Deployment

Optimized for **Vercel deployment** with:

- Analytics and Speed Insights integrated
- SEO configuration for Philippines market
- Performance headers and caching
- Image optimization enabled
