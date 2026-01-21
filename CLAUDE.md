# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sisnema Academy is a Next.js-based marketing and course catalog website for a Brazilian tech training company. The site presents courses, corporate training solutions, and company information with a dark-themed, glassmorphism UI design.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
```

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **UI Components:** shadcn/ui (Radix primitives + Tailwind)
- **Styling:** Tailwind CSS with CSS custom properties for theming
- **AI Integration:** Google Genkit with Gemini 2.5 Flash for course recommendations
- **Language:** TypeScript

## Architecture

### App Router Structure
Pages use the Next.js App Router pattern (`src/app/[route]/page.tsx`). Each page imports shared `Header` and `Footer` layout components.

**Routes:** `/` (home), `/cursos`, `/calendario`, `/empresa`, `/corporate`, `/contato`, `/politica-de-privacidade`

### Component Organization
- `src/components/ui/` - shadcn/ui primitives (Button, Card, Dialog, etc.)
- `src/components/layout/` - Header and Footer
- `src/components/sections/` - Homepage sections (Hero, About, Solutions, etc.)

### Data Layer
- `src/lib/data.ts` - Static course catalog, categories, and calendar data
- `src/lib/placeholder-images.ts` - Image placeholder configuration

### AI Flows
- `src/ai/genkit.ts` - Genkit AI instance configured with Google AI plugin
- `src/ai/flows/` - AI flow definitions (course recommendations)

AI flows use the `'use server'` directive and Zod schemas for input/output validation.

## Styling Conventions

- Dark theme by default (`html` has `dark` class)
- Custom `.glassmorphism` utility class for frosted-glass effect (`bg-white/10 backdrop-blur-lg`)
- HSL CSS variables defined in `globals.css` for consistent theming
- Use `cn()` utility from `src/lib/utils.ts` for conditional class merging
