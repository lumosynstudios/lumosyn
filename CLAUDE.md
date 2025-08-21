# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lumosyn Studios** is a modern Next.js 15 website for a Philippines-based tech startup offering web development, AI automation, UI/UX design, and chatbot services. The site emphasizes modern design with Gen-Z appeal, performance optimization, and a distinctive floating navbar.

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

## Project Structure

```
app/
├── globals.css          # Tailwind config with custom brand theme
├── layout.tsx          # Root layout with theme provider & analytics
├── page.tsx           # Main page with all sections
├── robots.ts          # SEO robots configuration
└── sitemap.ts         # SEO sitemap generation

components/
├── layout/
│   ├── navbar.tsx     # Dual-state floating navbar (key component)
│   └── footer.tsx     # Site footer with newsletter
├── sections/
│   ├── hero.tsx       # Hero with animated 3D globe
│   ├── about.tsx      # Founder profiles section
│   ├── services.tsx   # Interactive service cards
│   └── contact.tsx    # Contact form with animations
├── ui/                # ShadcnUI components with custom variants
├── providers/         # Theme provider wrapper
└── magicui/          # Custom Magic UI components (globe)
```

## Design System

### Brand Colors

```css
--color-brand-blue: #3B82F6
--color-brand-purple: #7C3AED
--color-brand-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Key Design Patterns

- **Glass morphism**: `backdrop-blur-2xl bg-background/70`
- **Gradient text**: `bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent`
- **Floating elements**: Used extensively in navbar and cards
- **Tab-style aesthetics**: Consistent rounded corners and hover states

## Critical Components

### Navbar (`components/layout/navbar.tsx`)

**Most complex component** - implements dual-state floating behavior:

- **Regular state**: Full-width navbar with backdrop blur
- **Floating state**: Compact pill that appears when scrolled >100px
- **Key features**:
  - Scroll detection with `useScroll` and `useMotionValueEvent`
  - `AnimatePresence` for smooth state transitions
  - All navigation items remain visible (no hamburger menu on desktop)
  - Mobile-responsive with separate mobile menu

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
