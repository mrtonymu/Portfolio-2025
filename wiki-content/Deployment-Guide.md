# Deployment Guide 🚀

> Complete guide to deploying Tony's Portfolio to various hosting platforms

## 🎯 Overview

This guide covers multiple deployment options for the portfolio website, from the recommended Vercel deployment to alternative platforms like Netlify, GitHub Pages, and self-hosted solutions.

## ⭐ Recommended: Vercel Deployment

Vercel is the recommended platform as it's built by the Next.js team and offers optimal performance for Next.js applications.

### 🚀 Quick Deploy with Vercel

#### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub** (if not already done):

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Settings**:

   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site will be live at `https://your-project.vercel.app`

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# ? Set up and deploy "~/Portfolio-2025"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? portfolio-2025
# ? In which directory is your code located? ./

# Production deployment
vercel --prod
```

### ⚙️ Environment Variables on Vercel

1. **In Vercel Dashboard**:
   - Go to Project Settings
   - Navigate to "Environment Variables"
   - Add your variables:

   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   CONTACT_EMAIL=your-email@example.com
   ```

2. **Redeploy** after adding environment variables

### 🌐 Custom Domain on Vercel

1. **Add Domain**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**:
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

## 🔷 Alternative: Netlify Deployment

Netlify is another excellent option with great features for static sites.

### 📦 Deploy to Netlify

#### Method 1: Git Integration

1. **Connect Repository**:
   - Visit [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:

   ```
   Build command: npm run build && npm run export
   Publish directory: out
   ```

3. **Update next.config.js** for static export:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   };

   module.exports = nextConfig;
   ```

4. **Add export script** to package.json:
   ```json
   {
     "scripts": {
       "export": "next export"
     }
   }
   ```

#### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build for static export
npm run build
npm run export

# Deploy
netlify deploy --dir=out

# Production deploy
netlify deploy --prod --dir=out
```

### 🔧 Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build && npm run export"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

## 📄 GitHub Pages Deployment

Deploy as a static site to GitHub Pages (free hosting).

### 🔧 Setup for GitHub Pages

1. **Update next.config.js**:

   ```javascript
   const isProd = process.env.NODE_ENV === 'production';
   const nextConfig = {
     output: 'export',
     assetPrefix: isProd ? '/Portfolio-2025/' : '',
     basePath: isProd ? '/Portfolio-2025' : '',
     images: {
       unoptimized: true,
     },
   };
   module.exports = nextConfig;
   ```

2. **Create GitHub Action** (`.github/workflows/deploy.yml`):

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Export
           run: npm run export

         - name: Add .nojekyll
           run: touch ./out/.nojekyll

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"

## 🐳 Docker Deployment

For containerized deployment to any platform.

### 📦 Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set ownership
USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### 🔧 Docker Commands

```bash
# Build image
docker build -t portfolio-2025 .

# Run container
docker run -p 3000:3000 portfolio-2025

# Run with environment variables
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  portfolio-2025
```

### ☁️ Deploy to Cloud Platforms

#### **Railway**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway deploy
```

#### **Render**

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Deploy

#### **DigitalOcean App Platform**

1. Create new app from GitHub
2. Configure build settings
3. Set environment variables
4. Deploy

## 🔧 Build Optimization

### 📊 Production Build

```bash
# Clean build
rm -rf .next out
npm run build

# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Check build output
ls -la .next/static/chunks/
```

### ⚡ Performance Optimization

1. **Image Optimization**:

   ```javascript
   // next.config.js
   module.exports = {
     images: {
       formats: ['image/webp', 'image/avif'],
       deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
     },
   };
   ```

2. **Bundle Analysis**:

   ```bash
   # Install analyzer
   npm install --save-dev @next/bundle-analyzer

   # Add to package.json
   "analyze": "ANALYZE=true next build"

   # Run analysis
   npm run analyze
   ```

## 🌍 CDN & Performance

### 🚀 Vercel Edge Network

- **Global CDN**: Automatic edge caching
- **Image Optimization**: On-demand image processing
- **Edge Functions**: Server-side logic at the edge

### 📈 Performance Monitoring

1. **Core Web Vitals**:

   ```javascript
   // pages/_app.js
   export function reportWebVitals(metric) {
     console.log(metric);
     // Send to analytics
   }
   ```

2. **Analytics Integration**:

   ```javascript
   // Google Analytics
   import { Analytics } from '@vercel/analytics/react';

   export default function App({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     );
   }
   ```

## 🔒 Security Considerations

### 🛡️ Security Headers

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### 🔐 Environment Security

- **Never commit** `.env.local` files
- **Use platform-specific** environment variable management
- **Validate environment variables** at runtime
- **Separate** development and production configs

## 📋 Pre-Deployment Checklist

### ✅ Code Quality

- [ ] All TypeScript errors resolved
- [ ] ESLint passes without errors
- [ ] Prettier formatting applied
- [ ] No console.log statements in production
- [ ] All imports are used

### ✅ Performance

- [ ] Images optimized and compressed
- [ ] Bundle size analyzed
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passing
- [ ] 3D model loads efficiently

### ✅ Functionality

- [ ] All pages load correctly
- [ ] Contact form works
- [ ] 3D model renders
- [ ] Responsive design tested
- [ ] Dark/light mode works
- [ ] PWA features functional

### ✅ SEO & Accessibility

- [ ] Meta tags configured
- [ ] Sitemap generated
- [ ] robots.txt present
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works

## 🚨 Troubleshooting Deployment

### Common Issues

#### **Build Failures**

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

#### **Environment Variable Issues**

- Ensure `NEXT_PUBLIC_` prefix for client-side variables
- Check platform-specific environment variable syntax
- Verify variables are set in deployment platform

#### **Static Export Issues**

- Remove dynamic routes or implement `getStaticPaths`
- Disable image optimization for static export
- Check for server-side only code in components

#### **3D Model Loading Issues**

- Ensure GLB file is in public directory
- Check file size (should be < 5MB)
- Verify Three.js is loaded client-side only

### 🔍 Debugging Tools

```bash
# Check build output
npm run build 2>&1 | tee build.log

# Test production build locally
npm run build && npm start

# Check for unused dependencies
npx depcheck

# Analyze bundle
npm run analyze
```

## 📊 Monitoring & Maintenance

### 📈 Analytics Setup

1. **Google Analytics**:

   ```javascript
   // Add to _app.js
   import { Analytics } from '@vercel/analytics/react';
   ```

2. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Monitor Core Web Vitals
   - Track user interactions

### 🔄 Continuous Deployment

- **Automatic deployments** on git push
- **Preview deployments** for pull requests
- **Rollback capabilities** if issues arise
- **Environment-specific** deployments

---

**Next Steps**: After deployment, check out the [Performance Optimization](Performance-Optimization) guide to further improve your site's speed and user experience.
