import { useState, useEffect } from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionDiv = motion.div

// GIF Preloader Helper
const preloadImages = (urls) => {
  urls.forEach(url => {
    const img = new Image()
    img.src = url
  })
}

const StitchPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const messages = [
    "Launching Tony's mind...",
    "Fetching dropshipping memories...",
    "Waking up support bot... 💤",
    "Cleaning up unfinished side projects...",
    "Optimizing for maximum empathy...",
    "All done, let's goooo~!"
  ]

  const stages = [
    {
      gif: "https://media.giphy.com/media/fRFK42AiiLDgs/giphy.gif", // Stitch calm/cute
      bgColor: "radial-gradient(ellipse at center, #667eea 0%, #764ba2 50%, #2a1845 100%)",
      range: [0, 10]
    },
    {
      gif: "https://media.giphy.com/media/MW0UdQdIaXXDq/giphy.gif", // Stitch movie scene
      bgColor: "radial-gradient(ellipse at center, #f093fb 0%, #f5576c 50%, #8b1538 100%)",
      range: [10, 70]
    },
    {
      gif: "https://media.giphy.com/media/QgawLg4F0hJJe/giphy.gif", // Stitch mad/focused
      bgColor: "radial-gradient(ellipse at center, #4facfe 0%, #00f2fe 50%, #003d4a 100%)",
      range: [70, 99]
    },
    {
      gif: "https://media.giphy.com/media/BbQrNk32kD064/giphy.gif", // Stitch angry/energetic
      bgColor: "radial-gradient(ellipse at center, #fa709a 0%, #fee140 50%, #8b4513 100%)",
      range: [99, 100]
    }
  ]

  // Get current stage based on progress
  const getCurrentStage = () => {
    return stages.find(stage => progress >= stage.range[0] && progress <= stage.range[1]) || stages[0]
  }

  // Get current message based on progress
  const getCurrentMessage = () => {
    if (progress === 100) return messages[messages.length - 1]
    return messages[Math.floor(progress / 20)] || messages[0]
  }

  useEffect(() => {
    // Preload all GIF images for smooth transitions
    const gifUrls = stages.map(stage => stage.gif)
    preloadImages(gifUrls)
    
    let current = 0
    const timer = setInterval(() => {
      if (current < 10) {
        // Stage 1: Slow start (1-10%) - ~1.2s
        current += 1
      } else if (current < 70) {
        // Stage 2: Fast surge (10-70%) - ~1.5s
        current += 5
      } else if (current < 99) {
        // Stage 3: Slow down (70-99%) - ~1.8s
        current += 1
      } else {
        // Stage 4: Complete (100%) - ~0.3s
        clearInterval(timer)
        setTimeout(() => {
          setProgress(100)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 800)
          }, 500)
        }, 300)
        return
      }
      setProgress(current)
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  const currentStageData = getCurrentStage()
  const currentMessage = getCurrentMessage()

  return (
    <AnimatePresence>
      {!isComplete && (
        <MotionBox
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
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <VStack 
            spacing={{ base: 4, sm: 6, md: 8 }} 
            maxW={{ base: "320px", sm: "380px", md: "400px" }} 
            w="full" 
            px={{ base: 4, sm: 6 }} 
            position="relative" 
            zIndex={2} 
            transform={{ base: "translateY(-5vh)", sm: "translateY(-8vh)", md: "translateY(-10vh)" }}
          >
            {/* Stitch Character - Enhanced Hero Moment */}
            <MotionBox
              animate={{
                rotate: progress < 10 ? [0, -2, 2, -2, 0] : progress < 70 ? [0, -5, 5, -5, 0] : [0, -1, 1, -1, 0],
                scale: progress < 10 ? [1, 1.05, 0.95, 1.05, 1] : progress < 70 ? [1, 1.15, 0.85, 1.15, 1] : [1, 1.03, 0.97, 1.03, 1],
                y: progress < 10 ? [0, -5, 5, -5, 0] : progress < 70 ? [0, -12, 12, -12, 0] : [0, -3, 3, -3, 0]
              }}
              transition={{
                duration: progress < 10 ? 3 : progress < 70 ? 1 : 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              position="relative"
            >
              {/* Outer glow ring - Responsive */}
              <MotionBox
                position="absolute"
                top={{ base: "-12px", sm: "-16px", md: "-20px" }}
                left={{ base: "-12px", sm: "-16px", md: "-20px" }}
                right={{ base: "-12px", sm: "-16px", md: "-20px" }}
                bottom={{ base: "-12px", sm: "-16px", md: "-20px" }}
                borderRadius="full"
                bg="radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
                  w={{ base: "90px", sm: "115px", md: "140px" }}
                  h={{ base: "90px", sm: "115px", md: "140px" }}
                  borderRadius="full"
                  objectFit="cover"
                  animate={{
                    scale: progress === 100 ? [1, 1.1, 1] : 1
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

            {/* Enhanced Progress Bar - Responsive */}
            <Box 
              w={{ base: "280px", sm: "300px", md: "320px" }}
              maxW="90vw" 
              bg="rgba(255, 255, 255, 0.15)" 
              borderRadius="full" 
              h={{ base: "8px", sm: "10px", md: "12px" }}
              overflow="hidden"
              border="1px solid rgba(255, 255, 255, 0.2)"
              boxShadow={{
                base: "0 0 15px rgba(255, 255, 255, 0.1), inset 0 0 8px rgba(0, 0, 0, 0.2)",
                md: "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.2)"
              }}
              position="relative"
            >
              {/* Background glow */}
              <MotionBox
                position="absolute"
                top="-2px"
                left="-2px"
                right="-2px"
                bottom="-2px"
                borderRadius="full"
                bg="radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%)"
                animate={{
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <MotionBox
                h="full"
                bg="linear-gradient(90deg, #ffffff 0%, #f0f8ff 50%, #ffffff 100%)"
                borderRadius="full"
                initial={{ width: "0%" }}
                animate={{ 
                  width: `${progress}%`,
                  boxShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ 
                  width: { duration: 0.3, ease: "easeOut" },
                  boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                position="relative"
              >
                {/* Enhanced shine effect */}
                <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Progress pulse */}
                <MotionBox
                  position="absolute"
                  top="-1px"
                  left="-1px"
                  right="-1px"
                  bottom="-1px"
                  borderRadius="full"
                  border="1px solid rgba(255,255,255,0.6)"
                  animate={{
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              </MotionBox>
            </Box>

            {/* Enhanced Progress Percentage - Responsive */}
            <MotionText
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              color="rgba(255, 255, 255, 0.9)"
              fontWeight="bold"
              fontFamily="mono"
              textShadow={{
                base: "0 0 8px rgba(255, 255, 255, 0.5)",
                md: "0 0 10px rgba(255, 255, 255, 0.5)"
              }}
              animate={{ 
                scale: progress === 100 ? [1, 1.3, 1] : [1, 1.05, 1],
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 10px rgba(255, 255, 255, 0.5)"
                ]
              }}
              transition={{ 
                scale: { duration: progress === 100 ? 0.5 : 2, repeat: progress === 100 ? 0 : Infinity },
                textShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {progress}%
            </MotionText>

            {/* Enhanced Loading Message - Responsive */}
            <MotionText
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              color="white"
              textAlign="center"
              fontWeight="bold"
              fontFamily="mono"
              textShadow={{
                base: "0 2px 8px rgba(0, 0, 0, 0.5)",
                md: "0 2px 10px rgba(0, 0, 0, 0.5)"
              }}
              letterSpacing={{ base: "0.3px", md: "0.5px" }}
              px={{ base: 2, sm: 4 }}
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0.7, 1, 0.7],
                y: 0,
                textShadow: [
                  "0 2px 10px rgba(0, 0, 0, 0.5)",
                  "0 2px 15px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.3)",
                  "0 2px 10px rgba(0, 0, 0, 0.5)"
                ]
              }}
              transition={{ 
                y: { duration: 0.4, ease: "backOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              minH={{ base: "24px", md: "30px" }}
              lineHeight="1.2"
            >
              {currentMessage}
            </MotionText>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default StitchPreloader