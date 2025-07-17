import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fafafa', '#0f0f0f')(props),
      color: mode('#2d3748', '#e2e8f0')(props),
      lineHeight: 1.7
    },
    '*': {
      scrollBehavior: 'smooth'
    },
    '@keyframes blink': {
      '0%, 50%': { opacity: 1 },
      '51%, 100%': { opacity: 0 }
    },
    '@keyframes fadeInUp': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    },
    '@keyframes glow': {
      '0%, 100%': { boxShadow: '0 0 20px rgba(56, 178, 172, 0.1)' },
      '50%': { boxShadow: '0 0 30px rgba(56, 178, 172, 0.2)' }
    }
  })
}

const components = {
  Heading: {
    baseStyle: {
      fontWeight: '700',
      letterSpacing: '-0.025em'
    },
    variants: {
      'section-title': {
        position: 'relative',
        fontSize: { base: 'xl', md: '2xl' },
        fontWeight: '700',
        marginTop: 6,
        marginBottom: 8,
        _after: {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '3px',
          bg: 'teal.400',
          borderRadius: 'full'
        }
      },
      'hero': {
        fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
        fontWeight: '800',
        lineHeight: '1.1',
        letterSpacing: '-0.05em'
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
      borderRadius: 'xl',
      transition: 'all 0.3s ease',
      minH: { base: '44px', md: '40px' },
      minW: { base: '44px', md: 'auto' },
      px: { base: 6, md: 4 },
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: 'lg'
      },
      _active: {
        transform: 'translateY(0)'
      },
      _focus: {
        boxShadow: 'outline'
      }
    },
    sizes: {
      'mobile': {
        h: '48px',
        minW: '48px',
        fontSize: 'md',
        px: 6
      }
    },
    variants: {
      solid: props => ({
        bg: mode('teal.500', 'teal.400')(props),
        color: 'white',
        _hover: {
          bg: mode('teal.600', 'teal.500')(props),
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(56, 178, 172, 0.3)'
        }
      }),
      outline: props => ({
        borderColor: mode('teal.500', 'teal.400')(props),
        color: mode('teal.500', 'teal.400')(props),
        borderWidth: '2px',
        _hover: {
          bg: mode('teal.50', 'teal.900')(props),
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(56, 178, 172, 0.15)'
        }
      })
    }
  },
  Box: {
    variants: {
      'glass': props => ({
        bg: mode('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')(props),
        backdropFilter: 'blur(20px)',
        borderRadius: 'xl',
        border: '1px solid',
        borderColor: mode('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)')(props),
        boxShadow: mode(
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.3)'
        )(props)
      }),
      'card': props => ({
        bg: mode('white', 'gray.800')(props),
        borderRadius: 'xl',
        p: 6,
        boxShadow: mode(
          '0 4px 20px rgba(0, 0, 0, 0.08)',
          '0 4px 20px rgba(0, 0, 0, 0.3)'
        )(props),
        border: '1px solid',
        borderColor: mode('gray.100', 'gray.700')(props),
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-4px)',
          boxShadow: mode(
            '0 12px 40px rgba(0, 0, 0, 0.15)',
            '0 12px 40px rgba(0, 0, 0, 0.4)'
          )(props)
        }
      })
    }
  }
}

const fonts = {
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
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
