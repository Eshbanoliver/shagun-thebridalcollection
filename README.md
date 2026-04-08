# Premium Bridal Collection - Boutique Web Experience

A high-end, modern boutique web application designed to showcase a luxury bridal collection with a "Liquid Luxury" aesthetic. This project transforms a traditional boutique experience into a dynamic, interactive, and visually stunning digital journey.

## ✨ Key Features

- **Liquid Luxury Aesthetic**: A premium design system based on glassmorphism, soft silk gradients, and champagne-to-rose color palettes.
- **High-Performance Animations**: Smooth, physics-based entrance and interaction animations using optimized CSS hardware acceleration.
- **Responsive Bubble Navigation**: An innovative "bubble style" mobile menu providing a focused, app-unlocked experience on smaller screens.
- **Interactive Exhibits**: Modernized "Why Choose Us," "Services," and "Contact" sections with hover-triggered state changes and floating decorative elements.
- **SEO Optimized**: Semantic HTML5 structure with proper heading hierarchies and meta-tag optimization for search engine visibility.

## 🛠️ Tech Stack

### Core
- **React 19**: Utilizing the latest React features for high-performance UI rendering.
- **TypeScript 6**: Ensuring 100% type safety and robust developer experience.
- **Vite 8**: Rapid development server and highly optimized production builds.

### UI & UX
- **Modern CSS3**: Handcrafted design tokens using CSS Custom Properties (Variables) for a unified design system.
- **Lucide React**: Clean, lightweight iconography for a professional aesthetic.
- **React Router Dom 7**: Smooth client-side navigation with scroll restoration.

### Development Tools
- **ESLint**: Strict code linting for maintaining high code quality.
- **Vite Plugin React**: For fast refresh and HMR during development.

## 🚀 Scalability & Architecture

This project is built with future growth in mind, adhering to modern software engineering principles:

- **Component-Driven Architecture**: Every UI element is modular and encapsulated in the `src/components` directory, making the application easy to extend or refactor.
- **Centralized Design System**: All colors, spacing, and glassmorphic tokens are defined in `src/index.css`. This allows for global theme adjustments or a complete brand overhaul within minutes.
- **Type-Safe Development**: With TypeScript at its core, adding new features, APIs, or complex state management is safe and self-documenting.
- **Optimized Build Process**: By leveraging Vite, the application is ready for advanced optimizations like code splitting and lazy loading of larger components.
- **Custom Page Scalability**: The project is designed for growth. Future custom pages can be easily developed by leveraging the reusable patterns and architecture established in the **Services** page (`src/pages/Services`). This template-driven approach ensures design consistency while allowing for rapid expansion of the boutique's offerings.

## 📦 Project Structure

```bash
shagun-bridal/
├── public/              # Static assets (logos, high-res images)
├── src/
│   ├── components/      # Reusable UI building blocks (Navbar, Footer, etc.)
│   ├── pages/           # Page-level components (Home, About, Contact, FAQ)
│   ├── hooks/           # Custom React hooks (useInView, useScroll)
│   ├── assets/          # Project images and global assets
│   ├── App.tsx          # Main application routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global CSS variables and base styles
├── index.html           # Main HTML template with SEO meta tags
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---
*Note: This project is private and focuses on delivering a high-end digital boutique experience.*
