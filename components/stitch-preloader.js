import { useState, useEffect, useRef, useMemo } from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

// GIF Preloader Helper with fallback support
const preloadImages = (stages, onGifError) => {
  stages.forEach(stage => {
    const img = new Image()
    img.onerror = () => {
      // Mark this GIF as failed and preload the fallback SVG
      onGifError(stage.gif)
      const fallbackImg = new Image()
      fallbackImg.src = stage.fallback
    }
    img.src = stage.gif
  })
}

const StitchPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [failedGifs, setFailedGifs] = useState(new Set())
  const containerRef = useRef(null)

  const messages = [
    ">> INITIALIZING NEURAL MATRIX...",
    ">> LOADING CREATIVE ALGORITHMS... 🧠",
    ">> SYNCING EMPATHY PROTOCOLS... 💫",
    ">> COMPILING SIDE PROJECT DATABASE...",
    ">> OPTIMIZING HUMAN CONNECTION... ⚡",
    ">> SYSTEM READY. WELCOME TO THE MATRIX! 🚀"
  ]

  const stages = useMemo(() => [
    {
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnJmazQyYWlpbGRncw/fRFK42AiiLDgs/giphy.gif", // Stitch calm/cute
      fallback: "/images/stitch-animated.svg",
      bgColor: "radial-gradient(ellipse at center, #4a5568 0%, #2d3748 30%, #1a202c 70%, #171923 100%)",
      range: [0, 10]
    },
    {
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXcwdWRxZGlheHhkcQ/MW0UdQdIaXXDq/giphy.gif", // Stitch movie scene
      fallback: "/images/stitch-animated.svg",
      bgColor: "radial-gradient(ellipse at center, #4299e1 0%, #3182ce 30%, #2c5282 70%, #1a202c 100%)",
      range: [10, 70]
    },
    {
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWdhd2xnNGYwaGpqZQ/QgawLg4F0hJJe/giphy.gif", // Stitch mad/focused
      fallback: "/images/stitch-animated.svg",
      bgColor: "radial-gradient(ellipse at center, #68d391 0%, #48bb78 30%, #38a169 70%, #1a202c 100%)",
      range: [70, 99]
    },
    {
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmJxcm5rMzJrZDA2NA/BbQrNk32kD064/giphy.gif", // Stitch angry/energetic
      fallback: "/images/stitch-animated.svg",
      bgColor: "radial-gradient(ellipse at center, #9f7aea 0%, #805ad5 30%, #6b46c1 70%, #1a202c 100%)",
      range: [99, 100]
    }
  ], [])

  // Get current stage based on progress with fallback support
  const getCurrentStage = () => {
    const stage = stages.find(stage => progress >= stage.range[0] && progress <= stage.range[1]) || stages[0]
    return {
      ...stage,
      gif: failedGifs.has(stage.gif) ? stage.fallback : stage.gif
    }
  }

  // Get current message based on progress
  const getCurrentMessage = () => {
    if (progress === 100) return messages[messages.length - 1]
    return messages[Math.floor(progress / 20)] || messages[0]
  }

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 20, y: y * 20 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Preload all GIF images for smooth transitions
    const handleGifError = (gifUrl) => {
      setFailedGifs(prev => new Set([...prev, gifUrl]))
    }
    
    preloadImages(stages, handleGifError)
    
    let current = 0
    const timer = setInterval(() => {
      if (current < 10) {
        // Stage 1: Slow start (1-10%) - ~1.8s (slower for better pacing)
        current += 1
      } else if (current < 70) {
        // Stage 2: Moderate surge (10-70%) - ~2.4s (slower for clarity)
        current += 3
      } else if (current < 99) {
        // Stage 3: Slow down (70-99%) - ~2.9s (much slower for dramatic effect)
        current += 1
      } else {
        // Stage 4: Complete (100%) - ~0.5s
        clearInterval(timer)
        setTimeout(() => {
          setProgress(100)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 1000)
          }, 700)
        }, 500)
        return
      }
      setProgress(current)
    }, 150)

    return () => clearInterval(timer)
  }, [onComplete, stages])

  const currentStageData = getCurrentStage()
  const currentMessage = getCurrentMessage()

  return (
    <AnimatePresence>
      {!isComplete && (
        <MotionBox
          ref={containerRef}
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={currentStageData.bgColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={9999}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          overflow="hidden"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Parallax Background Layer 1: Deep Space Grid */}
          <MotionBox
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={0.3}
            animate={{
              x: mousePosition.x * -0.5,
              y: mousePosition.y * -0.5,
              rotateX: mousePosition.y * 0.1,
              rotateY: mousePosition.x * 0.1
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 40px,
                  rgba(66, 153, 225, 0.08) 40px,
                  rgba(66, 153, 225, 0.08) 42px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 40px,
                  rgba(159, 122, 234, 0.08) 40px,
                  rgba(159, 122, 234, 0.08) 42px
                )
              `,
              pointerEvents: 'none'
            }}
          />

          {/* Parallax Background Layer 2: Floating Particles */}
          <MotionBox
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={0.6}
            animate={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3
            }}
            transition={{ type: "spring", stiffness: 150, damping: 40 }}
          >
            {/* Floating Binary Particles */}
            {[...Array(12)].map((_, i) => (
              <MotionBox
                key={i}
                position="absolute"
                color="rgba(66, 153, 225, 0.6)"
                fontSize={{ base: "xs", md: "sm" }}
                fontFamily="mono"
                left={`${(i * 83) % 100}%`}
                top={`${(i * 67) % 100}%`}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                {['01', '10', '11', '00'][i % 4]}
              </MotionBox>
            ))}

            {/* Floating Geometric Shapes */}
            {[...Array(8)].map((_, i) => (
              <MotionBox
                key={`geo-${i}`}
                position="absolute"
                w={{ base: "4px", md: "6px" }}
                h={{ base: "4px", md: "6px" }}
                bg={`rgba(${i % 2 ? '159, 122, 234' : '66, 153, 225'}, 0.4)`}
                left={`${(i * 127) % 100}%`}
                top={`${(i * 89) % 100}%`}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </MotionBox>

          {/* Parallax Background Layer 3: Scanlines */}
          <MotionBox
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={0.2}
            animate={{
              x: mousePosition.x * -0.1,
              y: mousePosition.y * -0.1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
              pointerEvents: 'none',
              animation: 'scan 2s linear infinite'
            }}
            sx={{
              '@keyframes scan': {
                '0%': { transform: 'translateY(-100%)' },
                '100%': { transform: 'translateY(100vh)' }
              }
            }}
          />
          {/* Foreground Content Layer */}
          <VStack 
            spacing={{ base: 4, sm: 6, md: 8 }} 
            maxW={{ base: "320px", sm: "380px", md: "400px" }} 
            w="full" 
            px={{ base: 4, sm: 6 }} 
            position="relative" 
            zIndex={10} 
            transform={{ base: "translateY(-5vh)", sm: "translateY(-8vh)", md: "translateY(-10vh)" }}
          >
            {/* Cyber Stitch Character - Interactive Matrix Entity */}
            <MotionBox
              animate={{
                rotate: [0, -2, 0],
                scale: [1, 1.05, 1],
                y: [0, -8, 0],
                x: mousePosition.x * 0.1,
                rotateY: mousePosition.x * 0.2,
                rotateX: mousePosition.y * -0.1
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                x: { type: "spring", stiffness: 100, damping: 30 },
                rotateY: { type: "spring", stiffness: 100, damping: 30 },
                rotateX: { type: "spring", stiffness: 100, damping: 30 }
              }}
              position="relative"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Cyber Holographic Outer Ring */}
              <MotionBox
                position="absolute"
                top={{ base: "-16px", sm: "-20px", md: "-24px" }}
                left={{ base: "-16px", sm: "-20px", md: "-24px" }}
                right={{ base: "-16px", sm: "-20px", md: "-24px" }}
                bottom={{ base: "-16px", sm: "-20px", md: "-24px" }}
                borderRadius="full"
                bg="radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(255, 0, 204, 0.1) 50%, transparent 70%)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [0, 360]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              />

              {/* Matrix Data Stream Ring */}
              <MotionBox
                position="absolute"
                top={{ base: "-8px", sm: "-12px", md: "-16px" }}
                left={{ base: "-8px", sm: "-12px", md: "-16px" }}
                right={{ base: "-8px", sm: "-12px", md: "-16px" }}
                bottom={{ base: "-8px", sm: "-12px", md: "-16px" }}
                borderRadius="full"
                border="2px solid"
                borderColor="transparent"
                background="conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.6), transparent, rgba(255, 0, 204, 0.6), transparent)"
                animate={{
                  rotate: [0, -360]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <Box
                w={{ base: "120px", sm: "150px", md: "176px" }}
                h={{ base: "120px", sm: "150px", md: "176px" }}
                borderRadius="full"
                bg="rgba(255, 255, 255, 0.15)"
                backdropFilter="blur(15px)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                filter={{
                  base: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.2))",
                  sm: "drop-shadow(0 0 45px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 90px rgba(255, 255, 255, 0.2))",
                  md: "drop-shadow(0 0 60px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.2))"
                }}
                position="relative"
                overflow="hidden"
                border={{ base: "2px solid rgba(255, 255, 255, 0.3)", md: "3px solid rgba(255, 255, 255, 0.3)" }}
                boxShadow={{
                  base: "0 0 40px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  sm: "0 0 60px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                  md: "0 0 80px rgba(255, 255, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)"
                }}
              >
                {/* Stitch GIF - Larger and more prominent */}
                <MotionBox
                  as="img"
                  src={currentStageData.gif}
                  alt={`Stitch Loading ${progress}%`}
                  w={{ base: "100px", sm: "120px", md: "160px", lg: "180px" }}
                  h={{ base: "100px", sm: "120px", md: "160px", lg: "180px" }}
                  borderRadius="full"
                  objectFit="cover"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                />
                
                {/* Animated pulse ring - Responsive */}
                <MotionBox
                  position="absolute"
                  top={{ base: "-4px", md: "-6px" }}
                  left={{ base: "-4px", md: "-6px" }}
                  right={{ base: "-4px", md: "-6px" }}
                  bottom={{ base: "-4px", md: "-6px" }}
                  borderRadius="full"
                  border={{ base: "3px solid", md: "4px solid" }}
                  borderColor="rgba(255, 255, 255, 0.5)"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Inner sparkle effect - Responsive */}
                <MotionBox
                  position="absolute"
                  top={{ base: "15px", sm: "18px", md: "20px" }}
                  right={{ base: "15px", sm: "18px", md: "20px" }}
                  w={{ base: "6px", md: "8px" }}
                  h={{ base: "6px", md: "8px" }}
                  bg="white"
                  borderRadius="full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
                <MotionBox
                  position="absolute"
                  bottom={{ base: "20px", sm: "25px", md: "30px" }}
                  left={{ base: "20px", sm: "25px", md: "30px" }}
                  w={{ base: "4px", md: "6px" }}
                  h={{ base: "4px", md: "6px" }}
                  bg="white"
                  borderRadius="full"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                />
              </Box>
            </MotionBox>

            {/* Cyber Laser Progress Beam */}
            <Box 
              w={{ base: "280px", sm: "300px", md: "320px" }}
              maxW="90vw" 
              bg="rgba(0, 0, 0, 0.3)" 
              borderRadius="full" 
              h={{ base: "8px", sm: "10px", md: "12px" }}
              overflow="hidden"
              border="1px solid rgba(66, 153, 225, 0.4)"
              boxShadow={{
                base: "0 0 15px rgba(66, 153, 225, 0.3), inset 0 0 8px rgba(0, 0, 0, 0.5)",
                md: "0 0 25px rgba(66, 153, 225, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.5)"
              }}
              position="relative"
            >
              {/* Matrix Grid Background */}
              <MotionBox
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="repeating-linear-gradient(90deg, transparent 0%, rgba(66, 153, 225, 0.1) 2px, transparent 4px)"
                animate={{
                  x: ["-20px", "0px"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Cyber Scan Line */}
              <MotionBox
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="linear-gradient(90deg, transparent 0%, rgba(159, 122, 234, 0.6) 50%, transparent 100%)"
                animate={{
                  x: ["-200%", "200%"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              
              <MotionBox
                h="full"
                bg="linear-gradient(90deg, rgba(66, 153, 225, 0.8) 0%, rgba(159, 122, 234, 0.6) 50%, rgba(66, 153, 225, 0.8) 100%)"
                borderRadius="full"
                initial={{ width: "0%" }}
                animate={{ 
                  width: `${progress}%`
                }}
                transition={{ 
                  width: { duration: 0.3, ease: "easeOut" }
                }}
                position="relative"
              >
                {/* Energy Core Pulse */}
                <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glitch Effect */}
                <MotionBox
                  position="absolute"
                  top="0"
                  right="0"
                  w="4px"
                  h="full"
                  bg="rgba(255, 255, 255, 0.9)"
                  animate={{
                    opacity: [0, 1, 0],
                  scaleX: [1, 1.5, 1]
                  }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
                />
              </MotionBox>
            </Box>

            {/* Cyber Glitch Progress Percentage */}
            <MotionBox
              fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
              fontFamily="'Orbitron', 'Courier New', monospace"
              fontWeight="bold"
              color="#ffffff"
              textShadow={{ 
                base: "0 0 12px rgba(66, 153, 225, 0.9), 0 0 24px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(0, 0, 0, 1)", 
                sm: "0 0 15px rgba(66, 153, 225, 0.9), 0 0 30px rgba(0, 0, 0, 0.9), 3px 3px 6px rgba(0, 0, 0, 1)", 
                md: "0 0 20px rgba(66, 153, 225, 0.9), 0 0 35px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 1)", 
                lg: "0 0 25px rgba(66, 153, 225, 0.9), 0 0 40px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(0, 0, 0, 1)" 
              }}
              position="relative"
              bg="rgba(0, 0, 0, 0.4)"
              px={{ base: 3, sm: 4, md: 5, lg: 6 }}
              py={{ base: 1, sm: 2, md: 3, lg: 4 }}
              borderRadius="lg"
              border="2px solid rgba(66, 153, 225, 0.4)"
              minW={{ base: "80px", sm: "90px", md: "100px" }}
              textAlign="center"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main Progress Text */}
              <MotionBox
                as="span"
                animate={{
                  x: [0, 1, 0],
                  opacity: [1, 0.9, 1]
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 1.5
                }}
              >
                {Math.round(progress)}%
              </MotionBox>
              
              {/* Glitch Overlay */}
              <MotionBox
                position="absolute"
                top="0"
                left="0"
                color="#9f7aea"
                as="span"
                animate={{
                  x: [0, -2, 0],
                  opacity: [0, 0.7, 0]
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {Math.round(progress)}%
              </MotionBox>
            </MotionBox>

            {/* Cyber Loading Message with Neural Network Vibes */}
            <MotionBox
              fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
              color="#ffffff"
              fontFamily="'Orbitron', 'Courier New', monospace"
              fontWeight="semibold"
              letterSpacing={{ base: "0.5px", sm: "1px", md: "1.5px", lg: "2px" }}
              textAlign="center"
              lineHeight={{ base: "1.3", sm: "1.4", md: "1.5", lg: "1.6" }}
              textShadow={{ 
                base: "0 0 8px rgba(66, 153, 225, 0.8), 0 0 16px rgba(0, 0, 0, 0.8), 1px 1px 3px rgba(0, 0, 0, 0.9)", 
                sm: "0 0 10px rgba(66, 153, 225, 0.8), 0 0 20px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.9)", 
                md: "0 0 12px rgba(66, 153, 225, 0.8), 0 0 24px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.9)", 
                lg: "0 0 15px rgba(66, 153, 225, 0.8), 0 0 30px rgba(0, 0, 0, 0.8), 3px 3px 6px rgba(0, 0, 0, 0.9)" 
              }}
              position="relative"
              bg="rgba(0, 0, 0, 0.3)"
              px={{ base: 2, sm: 3, md: 4, lg: 5 }}
              py={{ base: 1, sm: 2, md: 3, lg: 4 }}
              borderRadius="md"
              border="1px solid rgba(66, 153, 225, 0.3)"
              maxW={{ base: "90vw", sm: "80vw", md: "70vw" }}
              wordBreak="break-word"
              overflowWrap="break-word"
              animate={{
                opacity: [0.9, 1, 0.9]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main Message Text */}
              <MotionBox
                as="span"
                animate={{
                  x: [0, 0.5, 0]
                }}
                transition={{
                  duration: 0.08,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                {currentMessage}
              </MotionBox>
              
              {/* Subtle Glitch Overlay for Text */}
              <MotionBox
                position="absolute"
                top="0"
                left="0"
                w="full"
                color="rgba(159, 122, 234, 0.4)"
                as="span"
                animate={{
                  x: [0, -1, 0],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 0.12,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              >
                {currentMessage}
              </MotionBox>
              
              {/* Typing Cursor Effect */}
              <MotionBox
                as="span"
                color="#4299e1"
                ml="2px"
                animate={{
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                _
              </MotionBox>
            </MotionBox>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default StitchPreloader