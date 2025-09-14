# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Sugamuga landing page** built with **Next.js 15** using React 19. It's a modern, animated marketing website for an AI consultancy business offering AI transformation, self-hosted infrastructure, and merchandising services.

## Key Technologies

- **Next.js 15** with App Router (TypeScript)
- **React 19** for UI components
- **Framer Motion** for animations and interactions
- **Tailwind CSS v4** for styling with PostCSS
- **Lucide React** for icons
- **TypeScript** with strict mode enabled

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with all sections (single-page application)
  - `layout.tsx` - Root layout with fonts and metadata
  - `globals.css` - Global Tailwind CSS styles
- **Configuration files:**
  - `next.config.ts` - Next.js configuration (basic setup)
  - `tsconfig.json` - TypeScript config with `@/*` path mapping to `src/`
  - `eslint.config.mjs` - ESLint with Next.js presets
  - `postcss.config.mjs` - PostCSS with Tailwind CSS plugin

## Code Architecture

The main page (`src/app/page.tsx`) is structured as a single-page application with the following architecture:

### Component Structure
- **Reusable UI Components**: `Button`, `Card` components defined inline
- **Section Components**: Each major section is its own component
  - `Navigation` - Fixed header with mobile menu
  - `HeroSection` - Animated hero with parallax effects
  - `ServicesSection` - AI, Infrastructure, and Merch services
  - `WhySection` - Benefits/reasons section
  - `PricingSection` - Three-tier pricing
  - `TestimonialsSection` - Customer testimonials
  - `Footer` - Footer with CTA section

### Animation Pattern
- Uses **Framer Motion** for scroll-triggered animations
- Common pattern: `whileInView` animations for section reveals
- Hero section uses `useScroll` and `useTransform` for parallax effects
- Hover animations on interactive elements

### Styling Approach
- **Tailwind CSS** with custom gradient backgrounds
- Consistent color scheme: purple-to-pink gradients on dark backgrounds
- Responsive design with mobile-first approach
- Custom backdrop-blur effects and glassmorphism

## Development Guidelines

### Component Pattern
All components are defined within the main file using inline definitions. When adding new sections:
1. Create a new component following the existing naming pattern (`SectionNameSection`)
2. Use consistent motion animation patterns from existing sections
3. Follow the established design system (colors, spacing, typography)

### Animation Guidelines
- Use `initial={{ opacity: 0, y: 30 }}` for fade-in animations
- Add `whileInView={{ opacity: 1, y: 0 }}` for scroll-triggered reveals
- Include `viewport={{ once: true }}` to prevent re-triggering
- Use staggered delays (`delay: index * 0.2`) for lists

### Styling Standards
- Use the established gradient: `from-purple-400 to-pink-400` for brand elements
- Background gradients: `from-purple-900 via-black to-pink-900` for sections
- Cards use: `bg-white/5 backdrop-blur-sm border border-white/10`
- Buttons follow the three variants: `primary`, `secondary`, `ghost`