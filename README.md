# Chambey

> Building the Next Generation of Innovators

A modern, responsive web platform for Chambey - a thriving community of young builders, creators, and thinkers exploring the future through technology.

## 🌟 About Chambey

Chambey is a community dedicated to:
- **Learning** what it means to be part of the Swarm Economy
- **Driving** purpose by gaining real-world skills
- **Contributing** to a change-making movement
- **Enjoying** the journey to economic prosperity
- **Bridging** skill gaps for opportunities
- **Breaking** generational cycles

## 🎯 Our Approach

We operate across three core fields:

### 1. **Resource Management & Personal Finance**
Your financial knowledge, community wealth

### 2. **Skill Building & Career Capital**
Hands-on co-learning experience

### 3. **Community Building & Communication**
Open communication, shared ownership, and shared interests

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.3 - Modern UI library
- **TypeScript** 5.9.3 - Type-safe JavaScript
- **Vite** 7.2.4 - Lightning-fast build tool
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework

### Animations & Effects
- **Framer Motion** 12.38.0 - Fluid animations
- **Lucide React** 1.8.0 - Beautiful icon library

### Routing & Utilities
- **React Router DOM** 7.14.0 - Client-side routing
- **clsx** / **tailwind-merge** - Dynamic className utilities

### Development
- **@vitejs/plugin-react** 5.1.1 - Fast HMR
- **@tailwindcss/vite** 4.1.17 - Tailwind CSS integration
- **vite-plugin-singlefile** 2.3.0 - Single-file build output

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Main layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SiteLayout.tsx
│   └── ui/               # Reusable UI components
│       ├── Button.tsx
│       ├── Logo.tsx
│       ├── Reveal.tsx
│       └── SectionIntro.tsx
├── pages/                # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── TeamPage.tsx
│   ├── FieldsPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── sections/             # Full-width section components
│   ├── HeroSection.tsx
│   ├── AboutPreviewSection.tsx
│   ├── FieldsOverviewSection.tsx
│   └── CommunityCtaSection.tsx
├── hooks/                # Custom React hooks
│   └── useTheme.ts       # Dark/light theme management
├── data/
│   └── siteContent.ts    # Centralized content & configuration
├── utils/
│   └── cn.ts             # Class name utilities
├── styles/
│   └── theme.css         # Theme and global styles
├── App.tsx               # Main app with routing
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/chambey.git
cd chambey

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start local dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## 📂 Pages & Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Main landing page with hero and highlights |
| `/about` | AboutPage | Chambey story and mission |
| `/teams` | TeamPage | Leadership and team structure |
| `/fields` | FieldsPage | Our three core fields of focus |
| `/contact` | ContactPage | Contact and community engagement |
| `*` | NotFoundPage | 404 error page |

## Team Content Editing

The Teams page is content-driven from `src/data/siteContent.ts`.

- `leadershipTeam`: Founder and Director spotlight cards
- `teamClusters`: related/supporting positions grouped by function
- `collaborationPrinciples`: team operating model
- `teamRoleHighlights`: image-backed role cards for "Team in Action"

Rendering is handled in `src/pages/TeamPage.tsx`.

## 🎨 Design Features

- **Dark/Light Mode** - Seamless theme switching via custom hook
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Single-file production build
- **Accessible Components** - Semantic HTML and ARIA attributes

## 📊 Project Stats

- **20** TypeScript React Components (.tsx)
- **~740** Lines of Code (TypeScript/TSX)
- **6** Core Pages (Home, About, Team, Fields, Contact, NotFound)
- **0** Build Errors / Type Errors
- **0** Dependency Vulnerabilities

## ✅ Build Status

- ✓ **TypeScript Compilation** - Passes strict mode checks
- ✓ **Production Build** - 432.67 kB (135.00 kB gzipped)
- ✓ **2167** Modules Transformed
- ✓ **Single-File Build** - Optimized bundle output

## 🔧 Configuration

### TypeScript (`tsconfig.json`)
- Target: ES2020
- JSX: react-jsx
- Strict mode enabled
- Path aliases (@/* → src/*)

### Vite (`vite.config.ts`)
- React plugin for HMR
- Tailwind CSS plugin
- Single-file output plugin
- Path alias configuration

### Tailwind CSS
- Version 4.1.17
- Dark mode support
- Custom theme configuration in `styles/theme.css`

## 📝 Environment Variables

Currently, no environment variables are required for local development.

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contact

- **Website**: [chambey.example.com](https://chambey.example.com)
- **Contact Page**: [/contact](/contact)

---

Built by the Chambey Community
