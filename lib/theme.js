import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode(
        'linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%)',
        'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
      )(props),
      color: mode('#2d3748', '#f7fafc')(props),
      lineHeight: 1.7,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      // 移动端文本可读性优化
      '@media (max-width: 768px)': {
        fontSize: '16px', // 防止iOS自动缩放
        WebkitTextSizeAdjust: '100%', // 防止文本缩放
        textSizeAdjust: '100%'
      }
    },
    // 全局移动端字体优化
    'p, span, div': {
      '@media (max-width: 768px)': {
        fontSize: '16px !important',
        lineHeight: '1.6'
      }
    },
    '*': {
      scrollBehavior: 'smooth'
    },
    '::selection': {
      bg: mode('rgba(56, 178, 172, 0.15)', 'rgba(56, 178, 172, 0.4)')(props),
      color: mode('#2d3748', '#f7fafc')(props)
    },
    '@keyframes blink': {
      '0%, 50%': { opacity: 1 },
      '51%, 100%': { opacity: 0 }
    },
    '@keyframes fadeInUp': {
      '0%': { opacity: 0, transform: 'translateY(30px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    },

    '@keyframes glow': {
      '0%, 100%': { boxShadow: '0 0 30px rgba(56, 178, 172, 0.15)' },
      '50%': { boxShadow: '0 0 50px rgba(56, 178, 172, 0.3)' }
    },
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)', opacity: 1 },
      '50%': { transform: 'scale(1.05)', opacity: 0.8 }
    },
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' }
    },
    '@keyframes shimmer': {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' }
    },
    '@keyframes gradientShift': {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' }
    },
    '@keyframes scaleIn': {
      '0%': { transform: 'scale(0)', opacity: 0 },
      '50%': { transform: 'scale(1.1)', opacity: 0.8 },
      '100%': { transform: 'scale(1)', opacity: 1 }
    },
    '@keyframes sparkle': {
      '0%, 100%': { opacity: 0, transform: 'scale(0.8) rotate(0deg)' },
      '50%': { opacity: 0.7, transform: 'scale(1.1) rotate(180deg)' }
    },

  })
}

const components = {
  Heading: {
    baseStyle: {
      fontWeight: '700',
      letterSpacing: '-0.025em',
      lineHeight: '1.2'
    },
    variants: {
      'section-title': {
        position: 'relative',
        fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
        fontWeight: '800',
        marginTop: { base: 12, md: 16 },
        marginBottom: { base: 8, md: 12 },
        textAlign: 'center',
        letterSpacing: '-0.02em',
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '4px',
          bg: 'linear-gradient(90deg, teal.400, blue.500)',
          borderRadius: 'full'
        }
      },
      'hero': {
        fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
        fontWeight: '800',
        lineHeight: '1.1',
        letterSpacing: '-0.05em'
      },
      'subsection': {
        fontSize: { base: 'lg', md: 'xl' },
        fontWeight: '600',
        marginBottom: { base: 4, md: 6 },
        letterSpacing: '-0.01em'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#2b6cb0', '#63b3ed')(props),
      textUnderlineOffset: 3,
      transition: 'all 0.2s ease',
      _hover: {
        color: mode('#2c5282', '#90cdf4')(props),
        textDecoration: 'none',
        transform: 'translateY(-1px)'
      }
    })
  },
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: '2xl',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      minH: { base: '48px', md: '44px' },
      minW: { base: '48px', md: 'auto' },
      px: { base: 8, md: 6 },
      position: 'relative',
      overflow: 'hidden',
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transition: 'left 0.5s ease'
      },
      _hover: {
        transform: 'translateY(-3px) scale(1.02)',
        _before: {
          left: '100%'
        }
      },
      _active: {
        transform: 'translateY(-1px) scale(0.98)'
      },
      _focus: {
        boxShadow: '0 0 0 3px rgba(56, 178, 172, 0.4)'
      }
    },
    sizes: {
      'mobile': {
        h: '52px',
        minW: '52px',
        minH: '44px',
        fontSize: 'md',
        px: 8,
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      },
      'hero': {
        h: { base: '56px', md: '52px' },
        minH: '44px',
        fontSize: { base: 'lg', md: 'md' },
        px: { base: 10, md: 8 },
        fontWeight: '700',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }
    },
    variants: {
      solid: _props => ({
        bg: 'linear-gradient(135deg, #38b2ac 0%, #4299e1 50%, #9f7aea 100%)',
        backgroundSize: '200% 200%',
        color: 'white',
        boxShadow: '0 8px 25px rgba(56, 178, 172, 0.3)',
        minH: '44px',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        _hover: {
          backgroundPosition: '100% 0%',
          boxShadow: '0 15px 35px rgba(56, 178, 172, 0.4), 0 5px 15px rgba(0,0,0,0.1)',
          transform: 'translateY(-3px) scale(1.02)'
        },
        _active: {
          boxShadow: '0 5px 15px rgba(56, 178, 172, 0.3)'
        }
      }),
      outline: props => ({
        borderColor: mode('teal.500', 'teal.400')(props),
        color: mode('teal.600', 'teal.300')(props),
        borderWidth: '2px',
        bg: mode('rgba(255,255,255,0.8)', 'rgba(26,32,44,0.8)')(props),
        backdropFilter: 'blur(10px)',
        minH: '44px',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        _hover: {
          bg: mode('rgba(56, 178, 172, 0.1)', 'rgba(56, 178, 172, 0.2)')(props),
          borderColor: mode('teal.600', 'teal.300')(props),
          color: mode('teal.700', 'teal.200')(props),
          boxShadow: '0 10px 25px rgba(56, 178, 172, 0.2)',
          transform: 'translateY(-3px) scale(1.02)'
        }
      }),
      'glass': props => ({
        bg: mode('rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)')(props),
        backdropFilter: 'blur(20px)',
        border: '1px solid',
        borderColor: mode('rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)')(props),
        color: mode('gray.700', 'gray.200')(props),
        minH: '44px',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        _hover: {
          bg: mode('rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)')(props),
          borderColor: mode('rgba(255,255,255,0.3)', 'rgba(255,255,255,0.2)')(props),
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          transform: 'translateY(-3px) scale(1.02)'
        }
      })
    }
  },
  Box: {
    variants: {
      'glass': props => ({
        bg: mode('rgba(255, 255, 255, 0.1)', 'rgba(26, 32, 44, 0.1)')(props),
        backdropFilter: 'blur(25px)',
        borderRadius: '2xl',
        border: '1px solid',
        borderColor: mode('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)')(props),
        boxShadow: mode(
          '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        )(props),
        position: 'relative',
        overflow: 'hidden',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
          pointerEvents: 'none'
        }
      }),
      'card': props => ({
        bg: mode(
          'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
          'linear-gradient(135deg, rgba(45,55,72,0.9) 0%, rgba(26,32,44,0.8) 100%)'
        )(props),
        borderRadius: '2xl',
        p: { base: 6, md: 8 },
        boxShadow: mode(
          '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
          '0 10px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)'
        )(props),
        border: '1px solid',
        borderColor: mode('rgba(226, 232, 240, 0.8)', 'rgba(74, 85, 104, 0.8)')(props),
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(56, 178, 172, 0.1), transparent)',
          transition: 'left 0.6s ease',
          pointerEvents: 'none'
        },
        _hover: {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: mode(
            '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(56, 178, 172, 0.1)',
            '0 20px 60px rgba(0, 0, 0, 0.5), 0 8px 20px rgba(56, 178, 172, 0.2)'
          )(props),
          borderColor: mode('rgba(56, 178, 172, 0.3)', 'rgba(56, 178, 172, 0.4)')(props),
          _before: {
            left: '100%'
          }
        }
      }),
      'hero-card': (_props) => ({
        bg: mode(
          'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
          'linear-gradient(135deg, rgba(26,32,44,0.95) 0%, rgba(45,55,72,0.9) 100%)'
        )(_props),
        backdropFilter: 'blur(20px)',
        borderRadius: '3xl',
        p: { base: 8, md: 12 },
        border: '2px solid',
        borderColor: mode('rgba(56, 178, 172, 0.2)', 'rgba(56, 178, 172, 0.3)')(_props),
        boxShadow: mode(
          '0 25px 80px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255,255,255,0.05)',
          '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.1)'
        )(_props),
        position: 'relative',
        overflow: 'hidden',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #38b2ac, #4299e1, #9f7aea)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 3s ease-in-out infinite'
        }
      }),
      'avatar-container': _props => ({
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'scale(1.05)'
        }
      }),

      'project-card': props => ({
        bg: mode(
          'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
          'linear-gradient(135deg, rgba(26,32,44,0.95) 0%, rgba(45,55,72,0.9) 100%)'
        )(props),
        borderRadius: '2xl',
        p: { base: 6, md: 8 },
        border: '1px solid',
        borderColor: mode('gray.200', 'gray.700')(props),
        boxShadow: mode(
          '0 10px 40px rgba(0, 0, 0, 0.1)',
          '0 25px 50px rgba(0, 0, 0, 0.5)'
        )(props),
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        height: 'auto',
        minHeight: { base: '280px', md: '320px' },
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        willChange: 'transform', // 性能优化
        backfaceVisibility: 'hidden',
        // 移动端优化的触摸区域
        '@media (max-width: 768px)': {
          minHeight: '300px', // 增加移动端最小高度
          p: 8, // 增加内边距提升触摸体验
        },
        _hover: {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: mode(
            '0 25px 70px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(56, 178, 172, 0.3)',
            '0 35px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(56, 178, 172, 0.3)'
          )(props)
        }
      }),
      'section-container': _props => ({
        maxW: '7xl',
        mx: 'auto',
        px: { base: 6, sm: 8, md: 10, lg: 12 },
        py: { base: 16, sm: 18, md: 20, lg: 24 }
      }),
      'content-spacing': {
        mb: { base: 10, sm: 12, md: 16, lg: 20 }
      },

    }
  }
}

const fonts = {
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Segoe UI Symbol'",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Segoe UI Symbol'"
}

const colors = {
  grassTeal: '#38b2ac',
  brand: {
    50: '#e6fffa',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c7',
    400: '#38b2ac',
    500: '#319795',
    600: '#2c7a7b',
    700: '#285e61',
    800: '#234e52',
    900: '#1d4044'
  }
}

const shadows = {
  outline: '0 0 0 3px rgba(56, 178, 172, 0.6)',
  'soft-lg': '0 10px 25px rgba(0, 0, 0, 0.1)',
  'soft-xl': '0 20px 40px rgba(0, 0, 0, 0.1)',
  'glow': '0 0 20px rgba(56, 178, 172, 0.3)'
}

const space = {
  18: '4.5rem',
  22: '5.5rem',
  26: '6.5rem',
  30: '7.5rem'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ 
  config, 
  styles, 
  components, 
  fonts, 
  colors, 
  shadows, 
  space 
})
export default theme
