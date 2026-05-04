# Chambey

> Build beyond your circumstances

A cross-border collaboration and innovation network connecting people, ideas, and markets across Africa, Brazil, Southeast Asia, and Emerging Domestic Markets. Hire talent, find partners, and execute deals with payments handled end-to-end.

## 🌟 About Chambey

Chambey operates across two layers:

- **Chambey Organization** — Where you build your network, clarify your direction, and connect with the broader ecosystem
- **Chambey Corridors** — The activation layer for hiring, trading, and partnering across borders with verified connections

Powered by an ecosystem of three layers:
- **Litany** — Clarity layer: helps define what you're building and where you're going
- **Chambey** — Execution layer: matches talent, creates deals, and coordinates partnerships
- **Mulacanoe** — Transaction layer: handles payments, escrow, and settlement

## 🌍 Active Corridors

Cross-border opportunities across emerging markets:

| From | To |
|------|-----|
| Nigeria | Indonesia |
| Ghana | Brazil |
| Indonesia | Nigeria |
| Kenya | Vietnam |
| Brazil | Senegal |
| Philippines | Ghana |

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
│   │   ├── Footer.tsx
│   │   ├── LitanyHandoff.tsx
│   │   ├── ModeSwitcher.tsx
│   │   ├── Navbar.tsx
│   │   └── SiteLayout.tsx
│   └── ui/               # Reusable UI components
│       ├── Button.tsx
│       ├── Logo.tsx
│       ├── Reveal.tsx
│       └── SectionIntro.tsx
├── pages/                # Page components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── FieldsPage.tsx
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   ├── ProjectsPage.tsx
│   ├── SupportPage.tsx
│   └── TeamPage.tsx
├── sections/             # Full-width section components
│   ├── AboutPreviewSection.tsx
│   ├── CommunityCtaSection.tsx
│   ├── FieldsOverviewSection.tsx
│   └── HeroSection.tsx
├── hooks/                # Custom React hooks
│   ├── useMode.ts        # Organization/Corridors mode toggle
│   └── useTheme.ts       # Theme management
├── data/
│   └── siteContent.ts    # Centralized content & configuration
├── utils/
│   ├── cn.ts             # Class name utilities
│   └── litany.ts         # Litany handoff integration
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
git clone https://github.com/august-web/chambey.git
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
npm run preview
```

## 📂 Pages & Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Main landing page with hero, corridors, and CTA |
| `/about` | AboutPage | Chambey story, ecosystem layers, and mission |
| `/teams` | TeamPage | Leadership and team structure |
| `/fields` | FieldsPage | Team domains and impact areas |
| `/projects` | ProjectsPage | Cross-border project opportunities |
| `/contact` | ContactPage | Contact form and engagement |
| `/support` | SupportPage | Support Chambey with donation tiers |
| `*` | NotFoundPage | 404 error page |

## 🎨 Design Features

- **Organization/Corridors Mode** — Dual mode switcher toggles between Organization and Corridors views
- **Smooth Animations** — Powered by Framer Motion with page transitions
- **Responsive Design** — Mobile-first approach with hamburger menu
- **Performance Optimized** — Single-file production build
- **Accessible Components** — Semantic HTML and ARIA attributes

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
- Custom theme in `styles/theme.css` with navy, cobalt, salmon, teal, and cream palette

## 📝 Environment Variables

No environment variables required for local development.

## 🤝 Contributing

Contributions are welcome. Please open issues or submit pull requests for bugs and feature requests.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contact

- **Website**: [chambey.org](https://chambey.org)
- **Contact Page**: [/contact](/contact)
- **LinkedIn**: [Chambey on LinkedIn](https://linkedin.com)
- **Instagram**: [Chambey on Instagram](https://instagram.com)
- **YouTube**: [Chambey on YouTube](https://youtube.com)
- **Bluesky**: [chambey.org](https://bsky.app/profile/chambey.org)

---

Built by the Chambey Community
