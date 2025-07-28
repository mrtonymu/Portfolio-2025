// Global type definitions for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description: string;
  icon: string;
  type?: 'work' | 'education' | 'achievement';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  readTime: number;
}

// Component Props Types
export interface LayoutProps {
  children: React.ReactNode;
  router: any; // Next.js router type
}

export interface NavBarProps {
  path: string;
}

export interface FooterProps {
  minimal?: boolean;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
}

// Theme and UI Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface AnimationVariants {
  hidden: any;
  visible: any;
  exit?: any;
}

// PWA Types
export interface PWAInstallPrompt {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Analytics Types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Form Validation Types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (_value: string) => boolean | string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Performance Types
export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

// Search Types
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'project' | 'blog' | 'page';
}

export interface SearchFilters {
  type?: string[];
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}
