# Installation Guide 🚀

> Complete guide to set up Tony's Portfolio project locally

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

| Software           | Version                   | Download Link                       | Purpose                |
| ------------------ | ------------------------- | ----------------------------------- | ---------------------- |
| **Node.js**        | 16.0+ (18+ recommended)   | [nodejs.org](https://nodejs.org/)   | JavaScript runtime     |
| **npm**            | 8.0+ (comes with Node.js) | Included with Node.js               | Package manager        |
| **Git**            | Latest                    | [git-scm.com](https://git-scm.com/) | Version control        |
| **Modern Browser** | Latest                    | Chrome, Firefox, Safari, Edge       | WebGL support required |

### Optional Tools

- **VS Code** - Recommended code editor with TypeScript support
- **GitHub Desktop** - GUI for Git operations
- **Vercel CLI** - For deployment (optional)

## 🔧 System Requirements

### Minimum Requirements

- **OS**: Windows 10, macOS 10.15, or Linux (Ubuntu 18.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space
- **Internet**: Required for initial setup and dependencies

### Recommended Specifications

- **OS**: Latest version of your operating system
- **RAM**: 8GB or more
- **Storage**: 1GB free space
- **GPU**: Dedicated graphics card for better 3D performance

## 📥 Installation Steps

### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/mrtonymu/Portfolio-2025.git

# Or using SSH (if you have SSH keys set up)
git clone git@github.com:mrtonymu/Portfolio-2025.git

# Navigate to the project directory
cd Portfolio-2025
```

### Step 2: Install Dependencies

```bash
# Install all project dependencies
npm install

# Alternative: Use npm ci for faster, reliable installs
npm ci
```

**Note**: The installation may take 2-5 minutes depending on your internet connection.

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed correctly
npm list --depth=0

# Run type checking to ensure TypeScript is working
npm run type-check
```

### Step 4: Start Development Server

```bash
# Start the development server
npm run dev
```

The development server will start at `http://localhost:3000` (or the next available port).

## 🎯 Quick Verification

After installation, verify everything is working:

1. **Open your browser** and navigate to `http://localhost:3000`
2. **Check the preloader** - You should see the cyberpunk loading animation
3. **Verify 3D model** - The dog model should load and be interactive
4. **Test responsiveness** - Resize your browser window
5. **Toggle theme** - Switch between light and dark modes

## 🐛 Troubleshooting Common Issues

### Node.js Version Issues

```bash
# Check your Node.js version
node --version

# If version is too old, update Node.js
# Visit https://nodejs.org/ for the latest version
```

### Port Already in Use

```bash
# If port 3000 is busy, Next.js will automatically use the next available port
# Or specify a custom port:
npm run dev -- -p 3001
```

### Permission Errors (macOS/Linux)

```bash
# If you get permission errors, avoid using sudo
# Instead, fix npm permissions:
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

### Windows-Specific Issues

```powershell
# If you encounter execution policy errors in PowerShell:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# For long path issues:
git config --system core.longpaths true
```

### Dependency Installation Failures

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### 3D Model Not Loading

- **Check WebGL support**: Visit [webglreport.com](https://webglreport.com/)
- **Update graphics drivers**: Ensure your GPU drivers are up to date
- **Try different browser**: Some browsers have better WebGL support

## 🔧 Development Environment Setup

### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Git Configuration

```bash
# Set up your Git identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set up line ending handling
git config --global core.autocrlf input  # macOS/Linux
git config --global core.autocrlf true   # Windows
```

## 📦 Available Scripts

After installation, you can use these npm scripts:

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run prettier     # Format code with Prettier
npm run type-check   # Run TypeScript type checking

# Testing
npm test             # Run tests (if available)
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory for local environment variables:

```bash
# Example .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Mobile Development

To test on mobile devices:

1. **Find your local IP address**:

   ```bash
   # macOS/Linux
   ifconfig | grep "inet "

   # Windows
   ipconfig
   ```

2. **Access from mobile device**:
   - Connect mobile device to same WiFi network
   - Navigate to `http://YOUR_IP_ADDRESS:3000`

## ✅ Next Steps

After successful installation:

1. **Explore the codebase** - Check out the [Project Structure](Project-Structure) guide
2. **Learn about features** - Read about [Key Components](Cyberpunk-Preloader)
3. **Start customizing** - Follow the [Customization Guide](Customization-Guide)
4. **Deploy your version** - See the [Deployment Guide](Deployment-Guide)

## 🆘 Getting Help

If you encounter issues:

1. **Check this troubleshooting section** first
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed error information
4. **Join the discussion** in GitHub Discussions

---

**Need more help?** Check out our [FAQ](FAQ) or [Common Issues](Common-Issues) pages.
