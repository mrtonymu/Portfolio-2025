# Tony's Homepage 🏠

> A modern, interactive portfolio website showcasing Tony Yam's journey from customer support to web development

**Live Site:** [https://tonymumu.vercel.app](https://tonymumu.vercel.app)

## ✨ Features

- **Interactive 3D Model**: Rotating dog model built with Three.js
- **Dynamic Typography**: Word rotation effects and gradient text animations
- **Responsive Design**: Mobile-first approach with Chakra UI components
- **Dark/Light Mode**: Theme switching with persistent preferences
- **Project Showcase**: Detailed case studies of real-world projects
- **Performance Optimized**: Fast loading with Next.js optimization

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at `http://localhost:3000` (or next available port).

## 🛠 Tech Stack

- **Framework**: [Next.js 12](https://nextjs.org/) - React framework with SSR and static generation
- **UI Library**: [Chakra UI](https://chakra-ui.com/) - Modular and accessible component library
- **3D Graphics**: [Three.js](https://threejs.org/) - WebGL 3D library for interactive models
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon libraries
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js applications

## 📁 Project Structure

```
├── pages/                 # Next.js pages and routing
│   ├── index.js          # Homepage with hero, about, projects
│   ├── works.js          # Projects showcase page
│   ├── works/            # Individual project pages
│   └── _app.js           # App configuration
├── components/           # Reusable React components
│   ├── layouts/          # Page layout components
│   ├── icons/            # Custom SVG icons
│   ├── voxel-dog.js      # 3D dog model component
│   ├── typing-effect.js  # Word rotation animation
│   └── theme-toggle-button.js
├── lib/                  # Utility functions
│   ├── model.js          # 3D model loader
│   └── theme.js          # Chakra UI theme config
├── public/               # Static assets
│   ├── images/           # Photos and thumbnails
│   └── dog.glb           # 3D model file
└── styles/               # Global styles
```

## 🎯 Key Components

### 3D Dog Model
- Interactive WebGL model with orbit controls
- Responsive sizing and mobile optimization
- Loading states with custom spinner

### Dynamic Typography
- Word rotation effects for engaging headlines
- Gradient text with CSS animations
- Responsive font sizing

### Project Showcase
- Real project case studies with metrics
- Technology stack highlights
- Impact and learning outcomes

## 🎨 Customization

### Theme Configuration
Modify `lib/theme.js` to customize:
- Color schemes and gradients
- Typography scales
- Component variants
- Dark/light mode settings

### Adding Projects
1. Create new page in `pages/works/`
2. Add thumbnail to `public/images/works/`
3. Update `pages/works.js` with project entry

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (480px), md (768px), lg (992px), xl (1280px)
- **Touch Friendly**: Appropriate touch targets and gestures
- **Performance**: Optimized images and lazy loading

## 🔧 Development

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run prettier   # Format code with Prettier
```

### Environment Setup
- Node.js 14+ required
- Modern browser with WebGL support
- Development tools: ESLint, Prettier

## 📄 License

MIT License - feel free to use this project as inspiration for your own portfolio!

---

**Built with ❤️ by Tony Yam** | [Portfolio](https://tonymumu.vercel.app) | [GitHub](https://github.com)

