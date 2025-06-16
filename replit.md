# Portfolio Application

## Overview

This is a modern, responsive portfolio website built for Prithwish Sarkar, a Full Stack Developer. The application showcases professional experience, skills, and contact information through a clean, developer-focused design. The architecture follows a full-stack approach with React frontend and Express backend, though currently functions primarily as a frontend-only application.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: Built-in React state (no external state management needed for this portfolio)
- **Routing**: Single-page application with smooth scrolling navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Database Schema
The application includes a basic user schema using Drizzle ORM with PostgreSQL:
- **Users Table**: Contains id (serial), username (text, unique), and password (text)
- **Storage**: Currently uses in-memory storage (MemStorage class) for development
- **Production**: Configured for PostgreSQL via DATABASE_URL environment variable

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **HeroSection**: Landing section with introduction and call-to-action
3. **AboutSection**: Personal information and background
4. **ExperienceSection**: Professional work history and projects
5. **SkillsSection**: Technical skills organized by categories
6. **ContactSection**: Contact information and social links
7. **Footer**: Simple footer with copyright information

### UI System
- **Design System**: Custom color palette with CSS variables for navy, mint, and slate colors
- **Typography**: Inter font family with Fira Code for monospace elements
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: CSS-based animations for smooth interactions

### Backend Services
- **Routes**: Minimal routing setup (currently no API endpoints implemented)
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Error Handling**: Global error middleware for API responses

## Data Flow

1. **Static Content**: All portfolio content is statically defined in React components
2. **Navigation**: Client-side routing using smooth scroll to sections
3. **Responsive Behavior**: CSS media queries and Tailwind responsive classes
4. **Development**: Vite dev server with HMR for rapid development
5. **Production**: Static assets served by Express server

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for future API integration
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Database**: Drizzle ORM with Neon Database serverless driver
- **Utilities**: date-fns, clsx, nanoid

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Linting/Formatting**: PostCSS with Tailwind and Autoprefixer
- **Development Server**: Vite dev server with runtime error overlay

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Command**: `npm run dev` runs the development server on port 5000
- **Hot Reload**: Vite HMR with runtime error modal integration

### Production Build
- **Build Process**: 
  1. `vite build` - Builds client-side assets
  2. `esbuild` - Bundles server code
- **Output**: 
  - Client assets in `dist/public`
  - Server bundle in `dist/index.js`
- **Deployment**: Autoscale deployment target with build and run commands

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Port**: Configurable port (default 5000) with external port 80 mapping
- **Static Files**: Express serves built client assets in production

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```