# Contributing Guide 🤝

> Welcome! We're excited that you're interested in contributing to Tony's Portfolio project.

## 🎯 Overview

This guide will help you understand how to contribute to the project, whether you're fixing bugs, adding features, improving documentation, or helping with design. We welcome contributions from developers of all skill levels!

## 🚀 Quick Start for Contributors

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/Portfolio-2025.git
cd Portfolio-2025

# Add the original repository as upstream
git remote add upstream https://github.com/mrtonymu/Portfolio-2025.git
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Verify everything works
open http://localhost:3000
```

### 3. Create a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

## 📋 Types of Contributions

### 🐛 Bug Fixes

- **Report bugs** through GitHub Issues
- **Fix existing bugs** from the issue tracker
- **Improve error handling** and user experience
- **Add missing type definitions**

### ✨ New Features

- **UI/UX improvements** and new components
- **Performance optimizations**
- **Accessibility enhancements**
- **New animations** and interactions
- **Additional project showcase features**

### 📚 Documentation

- **Improve existing documentation**
- **Add code comments** and JSDoc
- **Create tutorials** and guides
- **Update README** and wiki pages
- **Add inline documentation**

### 🎨 Design & Assets

- **UI/UX design improvements**
- **Icon and graphic design**
- **Color scheme enhancements**
- **Mobile responsiveness**
- **Accessibility improvements**

## 🔧 Development Guidelines

### Code Style

We use automated tools to maintain consistent code style:

```bash
# Check code formatting
npm run prettier

# Fix formatting issues
npm run prettier:fix

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

### Code Standards

#### **TypeScript**

- Use **TypeScript** for all new code
- Define **proper interfaces** and types
- Avoid `any` type - use specific types
- Add **JSDoc comments** for complex functions

```typescript
// ✅ Good
interface ProjectData {
  id: string;
  title: string;
  stack: string[];
  liveUrl: string | null;
}

// ❌ Avoid
const project: any = {
  /* ... */
};
```

#### **React Components**

- Use **functional components** with hooks
- Implement **proper prop types**
- Use **memo()** for performance when needed
- Follow **single responsibility principle**

```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = memo(({ children, onClick, variant = 'primary' }) => {
  return (
    <ChakraButton variant={variant} onClick={onClick}>
      {children}
    </ChakraButton>
  );
});
```

#### **File Organization**

- Keep components **small and focused**
- Use **descriptive file names**
- Group related files together
- Follow the existing **directory structure**

#### **Styling**

- Use **Chakra UI** components when possible
- Follow **responsive design** principles
- Maintain **consistent spacing** and colors
- Test in both **light and dark modes**

```javascript
// ✅ Good - Using Chakra UI
<Box
  p={4}
  bg={useColorModeValue('white', 'gray.800')}
  borderRadius="md"
  shadow="sm"
>
  Content
</Box>

// ❌ Avoid - Custom CSS when Chakra UI can handle it
<div className="custom-box">
  Content
</div>
```

### Performance Guidelines

- **Optimize images** before adding them
- Use **dynamic imports** for heavy components
- Implement **proper loading states**
- **Minimize bundle size** - check with `npm run analyze`

```javascript
// ✅ Good - Dynamic import for heavy component
const VoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <Skeleton height='400px' />,
});
```

## 🧪 Testing Guidelines

### Before Submitting

Run these checks before creating a pull request:

```bash
# 1. Type checking
npm run type-check

# 2. Linting
npm run lint

# 3. Code formatting
npm run prettier

# 4. Build test
npm run build

# 5. Manual testing
npm run dev
```

### Testing Checklist

- [ ] **Desktop browsers**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile devices**: iOS Safari, Chrome Mobile
- [ ] **Responsive design**: Test different screen sizes
- [ ] **Dark/Light mode**: Both themes work correctly
- [ ] **3D model**: Loads and renders properly
- [ ] **Animations**: Smooth and performant
- [ ] **Contact form**: Validation and submission work
- [ ] **Navigation**: All links and routes work
- [ ] **Performance**: No significant performance regression

## 📝 Commit Guidelines

### Commit Message Format

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

#### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

#### Examples

```bash
# ✅ Good commit messages
git commit -m "feat(3d): add orbit controls to dog model"
git commit -m "fix(contact): resolve form validation issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(theme): improve dark mode colors"
git commit -m "perf(images): optimize project screenshots"

# ❌ Avoid
git commit -m "fix stuff"
git commit -m "update"
git commit -m "changes"
```

### Commit Best Practices

- **Make atomic commits** - one logical change per commit
- **Write descriptive messages** - explain what and why
- **Keep commits small** - easier to review and revert
- **Test before committing** - ensure code works

## 🔄 Pull Request Process

### 1. Prepare Your Pull Request

```bash
# Update your fork with latest changes
git fetch upstream
git checkout main
git merge upstream/main

# Rebase your feature branch
git checkout feature/your-feature
git rebase main

# Push to your fork
git push origin feature/your-feature
```

### 2. Create Pull Request

1. **Go to GitHub** and create a pull request
2. **Use the PR template** (if available)
3. **Write clear description** of changes
4. **Link related issues** using keywords
5. **Add screenshots** for UI changes
6. **Request review** from maintainers

### 3. Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing

- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Tested dark/light modes
- [ ] All checks pass

## Screenshots (if applicable)

[Add screenshots here]

## Related Issues

Closes #123
```

### 4. Review Process

- **Be responsive** to feedback
- **Make requested changes** promptly
- **Ask questions** if feedback is unclear
- **Keep discussions professional** and constructive
- **Update your branch** as needed

## 🐛 Bug Reports

### Before Reporting

1. **Search existing issues** to avoid duplicates
2. **Try latest version** to see if bug is fixed
3. **Check browser compatibility**
4. **Clear cache and cookies**

### Bug Report Template

```markdown
## Bug Description

Clear description of the bug

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- OS: [e.g., macOS 12.0]
- Browser: [e.g., Chrome 95.0]
- Node.js: [e.g., 18.0.0]
- Device: [e.g., iPhone 13, Desktop]

## Additional Context

- Error messages
- Console logs
- Screenshots
```

## 💡 Feature Requests

### Feature Request Template

```markdown
## Feature Description

Clear description of the feature

## Problem Statement

What problem does this solve?

## Proposed Solution

How should this feature work?

## Alternatives Considered

Other solutions you've considered

## Additional Context

- Mockups or designs
- Similar features in other projects
- Technical considerations
```

## 🎨 Design Contributions

### Design Guidelines

- **Follow existing design system**
- **Maintain consistency** with current UI
- **Consider accessibility** (contrast, font sizes)
- **Test on multiple devices**
- **Provide design rationale**

### Design Assets

- **Use vector formats** (SVG) when possible
- **Optimize images** for web
- **Provide multiple sizes** if needed
- **Include source files** (Figma, Sketch, etc.)

## 📚 Documentation Contributions

### Documentation Standards

- **Use clear, simple language**
- **Include code examples**
- **Add screenshots** for visual features
- **Keep content up-to-date**
- **Follow markdown conventions**

### Types of Documentation

- **API documentation** - JSDoc comments
- **User guides** - How to use features
- **Developer guides** - How to extend/modify
- **Troubleshooting** - Common issues and solutions

## 🏆 Recognition

### Contributors

All contributors will be:

- **Listed in README** contributors section
- **Mentioned in release notes** for significant contributions
- **Credited in commit history**
- **Thanked publicly** on social media (if desired)

### Types of Recognition

- 🐛 **Bug fixes** - Help improve stability
- ✨ **Features** - Add new functionality
- 📚 **Documentation** - Help others understand the project
- 🎨 **Design** - Improve user experience
- 🔧 **Maintenance** - Keep the project healthy

## 📞 Getting Help

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Pull Request Comments** - Code review discussions
- **Email** - For sensitive issues (security, etc.)

### Response Times

- **Issues**: Usually within 2-3 days
- **Pull Requests**: Usually within 1-2 days
- **Security Issues**: Within 24 hours

### Getting Started Help

If you're new to contributing:

1. **Start with documentation** improvements
2. **Look for "good first issue"** labels
3. **Ask questions** in discussions
4. **Read existing code** to understand patterns
5. **Start small** and gradually take on bigger tasks

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**Thank you for contributing!** 🎉 Your help makes this project better for everyone. If you have any questions about contributing, don't hesitate to ask in GitHub Discussions or create an issue.
