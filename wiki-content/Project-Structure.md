# Project Structure 📁

> Comprehensive guide to understanding the codebase organization

## 🏗️ Overview

This project follows Next.js conventions with additional organization for components, utilities, and assets. The structure is designed for scalability, maintainability, and developer experience.

## 📂 Root Directory Structure

```
Portfolio-2025/
├── 📁 pages/                 # Next.js pages and routing
├── 📁 components/           # Reusable React components
├── 📁 lib/                  # Core utilities and configurations
├── 📁 types/                # TypeScript type definitions
├── 📁 utils/                # Helper functions and utilities
├── 📁 public/               # Static assets and files
├── 📁 wiki-content/         # GitHub Wiki documentation
├── 📄 next.config.js        # Next.js configuration
├── 📄 package.json          # Project dependencies and scripts
├── 📄 tsconfig.json         # TypeScript configuration
├── 📄 .eslintrc.json        # ESLint configuration
├── 📄 .prettierrc           # Prettier configuration
└── 📄 README.md             # Project documentation
```

## 📄 Pages Directory (`/pages`)

Next.js uses file-based routing. Each file in this directory becomes a route.

```
pages/
├── 📄 _app.js               # App wrapper component
├── 📄 _document.js          # Custom document structure
├── 📄 index.tsx             # Homepage (/) - Main portfolio page
├── 📄 works.js              # Projects showcase (/works)
├── 📄 journey.js            # Career journey (/journey)
├── 📁 works/                # Individual project pages
│   ├── 📄 project1.js       # /works/project1
│   ├── 📄 project2.js       # /works/project2
│   └── 📄 [slug].js         # Dynamic project routes
└── 📁 api/                  # API routes (if any)
    └── 📄 contact.js        # Contact form handler
```

### Key Pages

| File         | Route      | Purpose          | Key Features                           |
| ------------ | ---------- | ---------------- | -------------------------------------- |
| `index.tsx`  | `/`        | Homepage         | Hero section, about, projects, contact |
| `works.js`   | `/works`   | Project showcase | Grid of all projects                   |
| `journey.js` | `/journey` | Career story     | Timeline and experiences               |
| `_app.js`    | All pages  | App wrapper      | Theme provider, global styles          |

## 🧩 Components Directory (`/components`)

Reusable React components organized by functionality.

```
components/
├── 📁 layouts/              # Layout components
│   ├── 📄 main.js           # Main layout wrapper
│   ├── 📄 article.js        # Article/page layout
│   └── 📄 navbar.js         # Navigation component
├── 📁 icons/                # Custom SVG icons
│   ├── 📄 logo.js           # Site logo
│   └── 📄 social-icons.js   # Social media icons
├── 📄 voxel-dog.tsx         # 3D dog model component
├── 📄 voxel-dog-loader.tsx  # 3D model loader
├── 📄 typing-effect.tsx     # Word rotation animation
├── 📄 animated-avatar.tsx   # Animated profile picture
├── 📄 contact-form.tsx      # Contact form component
├── 📄 timeline.tsx          # Career timeline
├── 📄 section.js            # Reusable section wrapper
├── 📄 theme-toggle-button.js # Dark/light mode toggle
├── 📄 pwa-install-button.tsx # PWA installation prompt
└── 📄 preloader.tsx         # Cyberpunk loading screen
```

### Component Categories

#### 🎨 UI Components

- **Section**: Reusable content sections with consistent spacing
- **Theme Toggle**: Dark/light mode switcher with persistence
- **Preloader**: Cyberpunk-themed loading animation

#### 🎮 Interactive Components

- **Voxel Dog**: Three.js 3D model with orbit controls
- **Typing Effect**: Dynamic word rotation animations
- **Animated Avatar**: Profile picture with hover effects
- **Contact Form**: Form with validation and submission

#### 📱 Layout Components

- **Main Layout**: Primary page wrapper with navigation
- **Article Layout**: Content-focused layout for pages
- **Navbar**: Responsive navigation with mobile menu

## 🛠️ Lib Directory (`/lib`)

Core utilities and configurations.

```
lib/
├── 📄 theme.js              # Chakra UI theme configuration
├── 📄 model.js              # 3D model loading utilities
├── 📄 constants.js          # App-wide constants
└── 📄 analytics.js          # Analytics configuration
```

### Key Files

| File           | Purpose       | Contains                          |
| -------------- | ------------- | --------------------------------- |
| `theme.js`     | UI theming    | Colors, fonts, component styles   |
| `model.js`     | 3D graphics   | Three.js model loading logic      |
| `constants.js` | App constants | URLs, text content, configuration |

## 🏷️ Types Directory (`/types`)

TypeScript type definitions for better development experience.

```
types/
├── 📄 index.ts              # Main type definitions
├── 📄 projects.ts           # Project-related types
├── 📄 components.ts         # Component prop types
└── 📄 api.ts                # API response types
```

### Type Categories

```typescript
// Project types
interface ProjectData {
  id: string;
  title: string;
  stack: string[];
  description: string;
  features: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  color: string;
  result: string;
}

// Component prop types
interface SectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
```

## 🔧 Utils Directory (`/utils`)

Helper functions and utilities.

```
utils/
├── 📄 pwa.ts                # PWA utilities
├── 📄 animations.ts         # Animation helpers
├── 📄 validation.ts         # Form validation
└── 📄 helpers.ts            # General utilities
```

## 🌐 Public Directory (`/public`)

Static assets served directly by the web server.

```
public/
├── 📁 images/               # Image assets
│   ├── 📁 works/            # Project screenshots
│   ├── 📁 icons/            # App icons and favicons
│   └── 📄 avatar.jpg        # Profile picture
├── 📁 models/               # 3D model files
│   └── 📄 dog.glb           # 3D dog model
├── 📄 manifest.json         # PWA manifest
├── 📄 favicon.ico           # Site favicon
├── 📄 robots.txt            # SEO robots file
└── 📄 sitemap.xml           # SEO sitemap
```

### Asset Organization

| Directory       | Purpose             | File Types              |
| --------------- | ------------------- | ----------------------- |
| `images/works/` | Project screenshots | `.jpg`, `.png`, `.webp` |
| `images/icons/` | App icons           | `.png`, `.svg`, `.ico`  |
| `models/`       | 3D assets           | `.glb`, `.gltf`         |

## ⚙️ Configuration Files

### Next.js Configuration (`next.config.js`)

```javascript
module.exports = {
  // Image optimization
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // PWA configuration
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
};
```

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## 🎯 Code Organization Principles

### 1. **Separation of Concerns**

- **Pages**: Routing and page-level logic
- **Components**: Reusable UI elements
- **Utils**: Pure functions and helpers
- **Types**: Type definitions and interfaces

### 2. **Feature-Based Organization**

- Related components are grouped together
- Each feature has its own directory when complex
- Shared utilities are centralized

### 3. **Import Conventions**

```typescript
// External libraries first
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

// Internal components
import Layout from '../components/layouts/main';
import Section from '../components/section';

// Utilities and types
import { ProjectData } from '../types';
import { formatDate } from '../utils/helpers';
```

### 4. **File Naming Conventions**

| Type       | Convention | Example            |
| ---------- | ---------- | ------------------ |
| Components | PascalCase | `ContactForm.tsx`  |
| Pages      | kebab-case | `about-us.js`      |
| Utilities  | camelCase  | `formatDate.ts`    |
| Types      | PascalCase | `ProjectData.ts`   |
| Constants  | UPPER_CASE | `API_ENDPOINTS.ts` |

## 🔍 Finding Code

### Common Patterns

| Looking for...     | Check these files                                     |
| ------------------ | ----------------------------------------------------- |
| **Page content**   | `pages/index.tsx`, `pages/works.js`                   |
| **Styling/Theme**  | `lib/theme.js`, component files                       |
| **3D Model logic** | `components/voxel-dog.tsx`, `lib/model.js`            |
| **Form handling**  | `components/contact-form.tsx`                         |
| **Animations**     | `components/typing-effect.tsx`, `utils/animations.ts` |
| **PWA features**   | `utils/pwa.ts`, `public/manifest.json`                |

### Search Tips

```bash
# Find component usage
grep -r "ContactForm" components/

# Find all TypeScript files
find . -name "*.tsx" -o -name "*.ts"

# Search for specific functionality
grep -r "Three.js\|three" .
```

## 📈 Scalability Considerations

### Adding New Features

1. **New Page**: Add file to `pages/` directory
2. **New Component**: Create in appropriate `components/` subdirectory
3. **New Utility**: Add to `utils/` with proper typing
4. **New Types**: Define in `types/` directory

### Performance Optimization

- **Dynamic Imports**: Used for heavy components (3D model, contact form)
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic with Next.js routing
- **Bundle Analysis**: Use `npm run analyze` to check bundle size

---

**Next Steps**: Explore the [Tech Stack](Tech-Stack) guide to understand the technologies used, or check out the [Customization Guide](Customization-Guide) to start modifying the project.
