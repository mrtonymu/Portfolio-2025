import { Box, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'

const AnimatedAvatar = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showGif, setShowGif] = useState(false)
  
  // 响应式尺寸 - 优化后更大更统一
  const avatarSize = useBreakpointValue({ 
    base: "100px", 
    sm: "120px", 
    md: "160px",
    lg: "180px" 
  })

  // Animated GIF for hover state
  const animatedGif = "https://media.giphy.com/media/fRFK42AiiLDgs/giphy.gif"

  return (
    <Box
      position="absolute"
      top={{ base: "-70px", sm: "-90px", md: "-140px", lg: "-160px" }}
      left="0"
      right="0"
      zIndex={10}
      display="flex"
      justifyContent="center"
      px={{ base: 4, sm: 6, md: 8 }}
    >
      <Box
        position="relative"
        cursor="pointer"
        onMouseEnter={() => setShowGif(true)}
        onMouseLeave={() => setShowGif(false)}
        sx={{
          '@keyframes scaleIn': {
            '0%': { transform: 'scale(0)', opacity: 0 },
            '50%': { transform: 'scale(1.1)', opacity: 0.8 },
            '100%': { transform: 'scale(1)', opacity: 1 }
          },
          animation: 'scaleIn 1.5s ease-out 0.5s both'
        }}
      >
        {/* Skeleton Loading Effect */}
        {!imageLoaded && (
          <Box
            w={avatarSize}
            h={avatarSize}
            borderRadius="full"
            bg="linear-gradient(90deg, rgba(56, 178, 172, 0.3) 0%, rgba(66, 153, 225, 0.3) 50%, rgba(56, 178, 172, 0.3) 100%)"
            backgroundSize="200% 100%"
            animation="shimmer 1.5s infinite"
            sx={{
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' }
              }
            }}
          />
        )}
        
        {/* Optimized Avatar Image */}
        <Box
          as="img"
          src={showGif ? animatedGif : animatedGif}
          alt="Stitch Avatar"
          w={avatarSize}
          h={avatarSize}
          borderRadius="full"
          border="3px solid"
          borderColor="teal.400"
          boxShadow="0 0 20px rgba(56, 178, 172, 0.4), 0 0 40px rgba(56, 178, 172, 0.2)"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          _hover={{
            transform: 'scale(1.03)',
            boxShadow: '0 0 25px rgba(56, 178, 172, 0.6), 0 0 50px rgba(56, 178, 172, 0.3)'
          }}
          style={{
            display: imageLoaded ? 'block' : 'none',
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
        
        {/* Optimized Sparkle Effects - Reduced for performance */}
        <Box
          position="absolute"
          top="-3px"
          right="-3px"
          w={{ base: "6px", md: "8px" }}
          h={{ base: "6px", md: "8px" }}
          bg="white"
          borderRadius="full"
          animation="sparkle 3s ease-in-out infinite 1s"
          display={{ base: "none", md: "block" }}
          style={{
            willChange: 'opacity, transform',
            backfaceVisibility: 'hidden'
          }}
          sx={{
            '@keyframes sparkle': {
              '0%, 100%': { opacity: 0, transform: 'scale(0)' },
              '50%': { opacity: 0.8, transform: 'scale(1)' }
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default AnimatedAvatar