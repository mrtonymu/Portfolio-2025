# Frequently Asked Questions (FAQ) ❓

> Quick answers to common questions about Tony's Portfolio project

## 🚀 Getting Started

### Q: What are the minimum system requirements?

**A:** You need:

- **Node.js 16+** (18+ recommended)
- **4GB RAM** minimum (8GB recommended)
- **Modern browser** with WebGL support
- **500MB free disk space**
- **Internet connection** for initial setup

### Q: Why won't the project start after `npm install`?

**A:** Try these steps:

1. **Check Node.js version**: `node --version` (should be 16+)
2. **Clear cache**: `npm cache clean --force`
3. **Delete and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
4. **Check for permission issues** (avoid using `sudo`)

### Q: The development server won't start on port 3000

**A:** This usually means the port is already in use:

- **Next.js will automatically** use the next available port (3001, 3002, etc.)
- **Manually specify a port**: `npm run dev -- -p 3001`
- **Kill existing processes**: `lsof -ti:3000 | xargs kill` (macOS/Linux)

## 🎮 3D Model & Graphics

### Q: The 3D dog model isn't loading or appears broken

**A:** Check these common issues:

1. **WebGL support**: Visit [webglreport.com](https://webglreport.com/) to verify
2. **Browser compatibility**: Try Chrome, Firefox, or Edge
3. **Graphics drivers**: Update your GPU drivers
4. **File location**: Ensure `dog.glb` is in the `public/` directory
5. **File size**: The model should be under 5MB

### Q: The 3D model is too slow or laggy

**A:** Performance optimization tips:

- **Close other browser tabs** to free up GPU memory
- **Lower browser zoom level** to reduce rendering load
- **Update graphics drivers**
- **Try a different browser** (Chrome usually has best WebGL performance)
- **Check CPU usage** - close unnecessary applications

### Q: Can I replace the dog model with my own 3D model?

**A:** Yes! Follow these steps:

1. **Export your model** as GLB or GLTF format
2. **Optimize the model** (keep under 5MB, reduce polygons)
3. **Replace** `public/dog.glb` with your model
4. **Update the model loader** in `lib/model.js` if needed
5. **Adjust scaling/positioning** in `components/voxel-dog.tsx`

## 🎨 Styling & Customization

### Q: How do I change the color scheme?

**A:** Modify the theme in `lib/theme.js`:

```javascript
const theme = extendTheme({
  colors: {
    brand: {
      50: '#your-light-color',
      500: '#your-main-color',
      900: '#your-dark-color',
    },
  },
});
```

### Q: How do I add my own projects to the showcase?

**A:** Update the `projectsData` array in `pages/index.tsx`:

```javascript
const projectsData = [
  {
    id: 'your-project',
    title: 'Your Project Name',
    stack: ['React', 'Node.js'],
    description: 'Project description',
    features: ['Feature 1', 'Feature 2'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    color: 'teal',
    result: 'Project outcome',
  },
  // ... other projects
];
```

### Q: How do I change the profile picture?

**A:** Replace `public/images/avatar.jpg` with your image:

1. **Use same filename** or update references in code
2. **Recommended size**: 400x400 pixels
3. **Format**: JPG, PNG, or WebP
4. **Optimize the image** for web (compress to reduce file size)

## 📱 Responsive Design & Mobile

### Q: The site doesn't look good on mobile

**A:** The site is designed to be responsive. If you're having issues:

1. **Clear browser cache** and reload
2. **Check viewport meta tag** in `pages/_document.js`
3. **Test in different browsers** on mobile
4. **Use browser dev tools** to simulate mobile devices

### Q: How do I test the mobile version?

**A:** Several options:

1. **Browser dev tools**: Press F12, click mobile icon
2. **Local network testing**: Access via your IP address on mobile
3. **Online tools**: Use BrowserStack or similar services
4. **Deploy and test**: Deploy to Vercel and test on actual devices

## 🚀 Deployment Issues

### Q: My Vercel deployment is failing

**A:** Common solutions:

1. **Check build logs** in Vercel dashboard
2. **Verify Node.js version** in Vercel settings (use 18.x)
3. **Environment variables**: Ensure all required variables are set
4. **Build locally first**: `npm run build` to catch errors
5. **Check file paths**: Ensure all imports use correct case

### Q: Images aren't loading after deployment

**A:** Image loading issues:

1. **Check file paths**: Use relative paths from `public/`
2. **Case sensitivity**: Ensure exact filename matches
3. **File formats**: Use web-optimized formats (JPG, PNG, WebP)
4. **Next.js Image component**: Use `next/image` for optimization

### Q: The contact form isn't working

**A:** Contact form troubleshooting:

1. **Check API route**: Ensure `pages/api/contact.js` exists
2. **Environment variables**: Set up email service credentials
3. **CORS issues**: Check browser console for errors
4. **Form validation**: Ensure all required fields are filled

## 🔧 Development Issues

### Q: TypeScript errors are showing up

**A:** TypeScript troubleshooting:

1. **Run type check**: `npm run type-check`
2. **Install type definitions**: `npm install @types/package-name`
3. **Check tsconfig.json**: Ensure proper configuration
4. **Restart TypeScript server** in your IDE

### Q: ESLint is showing errors

**A:** ESLint solutions:

1. **Auto-fix**: `npm run lint:fix`
2. **Check configuration**: Review `.eslintrc.json`
3. **Install missing dependencies**: Check error messages
4. **Disable specific rules**: Add `// eslint-disable-next-line`

### Q: Hot reload isn't working

**A:** Hot reload issues:

1. **Restart dev server**: Stop and run `npm run dev` again
2. **Check file watchers**: Increase system file watcher limits
3. **Clear cache**: Delete `.next` folder and restart
4. **Check file extensions**: Ensure files have correct extensions

## 🎯 Performance Questions

### Q: The site is loading slowly

**A:** Performance optimization:

1. **Check bundle size**: Run `npm run analyze`
2. **Optimize images**: Compress and use modern formats
3. **Enable caching**: Ensure proper cache headers
4. **Check network**: Test on different connections
5. **Use Lighthouse**: Audit performance in Chrome DevTools

### Q: How can I improve the Lighthouse score?

**A:** Lighthouse optimization tips:

1. **Image optimization**: Use Next.js Image component
2. **Code splitting**: Implement dynamic imports
3. **Remove unused code**: Clean up imports and dependencies
4. **Accessibility**: Add alt text and ARIA labels
5. **SEO**: Add meta tags and structured data

## 📦 Package & Dependencies

### Q: Should I update the dependencies?

**A:** Dependency update strategy:

1. **Check for updates**: `npm outdated`
2. **Update gradually**: Update one package at a time
3. **Test thoroughly**: Run full test suite after updates
4. **Check breaking changes**: Read package changelogs
5. **Use exact versions**: Consider using exact versions for stability

### Q: I'm getting peer dependency warnings

**A:** Peer dependency solutions:

1. **Install missing peers**: `npm install peer-dependency-name`
2. **Check compatibility**: Ensure version compatibility
3. **Use --legacy-peer-deps**: `npm install --legacy-peer-deps`
4. **Update package.json**: Add peer dependencies manually

## 🔒 Security & Privacy

### Q: Is it safe to deploy this portfolio publicly?

**A:** Security considerations:

1. **No sensitive data**: The code doesn't contain secrets
2. **Environment variables**: Keep sensitive data in `.env.local`
3. **Contact form**: Implement rate limiting and validation
4. **Dependencies**: Regularly update to patch security vulnerabilities
5. **HTTPS**: Always use HTTPS in production

### Q: How do I add Google Analytics?

**A:** Analytics setup:

1. **Get tracking ID** from Google Analytics
2. **Add to environment variables**: `NEXT_PUBLIC_GA_ID=your-id`
3. **Install analytics package**: `npm install @vercel/analytics`
4. **Add to \_app.js**: Import and use Analytics component

## 🎨 Customization Questions

### Q: Can I use this as a template for my own portfolio?

**A:** Absolutely! This project is MIT licensed:

1. **Fork the repository** or download the code
2. **Customize content**: Replace with your information
3. **Modify styling**: Update colors, fonts, and layout
4. **Add your projects**: Update the projects data
5. **Deploy**: Use any hosting platform you prefer

### Q: How do I add new pages?

**A:** Adding new pages in Next.js:

1. **Create file** in `pages/` directory (e.g., `pages/blog.js`)
2. **Export React component** as default export
3. **Add navigation**: Update navbar component
4. **Style the page**: Use Chakra UI components
5. **Test routing**: Navigate to `/blog` to test

### Q: How do I change the animations?

**A:** Animation customization:

1. **Framer Motion**: Modify `motion` components in JSX
2. **CSS animations**: Update styles in component files
3. **Timing**: Adjust `duration` and `delay` properties
4. **Easing**: Change `ease` functions for different feels
5. **Disable**: Set `animate={false}` to disable animations

## 🌐 Browser Compatibility

### Q: Which browsers are supported?

**A:** Browser support:

- **Chrome 90+** ✅ (Recommended)
- **Firefox 88+** ✅
- **Safari 14+** ✅
- **Edge 90+** ✅
- **Mobile browsers** ✅ (iOS Safari, Chrome Mobile)
- **Internet Explorer** ❌ (Not supported)

### Q: The site doesn't work in older browsers

**A:** Older browser issues:

1. **Check browser version**: Update to latest version
2. **JavaScript support**: Ensure ES6+ support
3. **WebGL requirement**: 3D model requires WebGL
4. **Polyfills**: Consider adding polyfills for older browsers
5. **Graceful degradation**: Implement fallbacks for unsupported features

## 🆘 Getting More Help

### Q: Where can I get additional support?

**A:** Support resources:

1. **GitHub Issues**: Create an issue for bugs or feature requests
2. **GitHub Discussions**: Ask questions and share ideas
3. **Documentation**: Check other wiki pages for detailed guides
4. **Community**: Join Next.js and React communities
5. **Stack Overflow**: Search for similar issues

### Q: How do I report a bug?

**A:** Bug reporting:

1. **Check existing issues** first
2. **Provide detailed description** of the problem
3. **Include steps to reproduce** the issue
4. **Add error messages** and console logs
5. **Specify environment**: OS, browser, Node.js version
6. **Create minimal reproduction** if possible

### Q: Can I contribute to this project?

**A:** Contributions are welcome!

1. **Read the contributing guide**: Check [Contributing](Contributing) page
2. **Fork the repository**: Create your own copy
3. **Create feature branch**: `git checkout -b feature/your-feature`
4. **Make changes**: Follow code style guidelines
5. **Submit pull request**: Describe your changes clearly

---

**Still have questions?** Check out our other documentation pages or create an issue on GitHub for personalized help!
