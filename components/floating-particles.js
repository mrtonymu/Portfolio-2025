import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const FloatingParticles = ({ count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }))

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      pointerEvents="none"
      zIndex={-1}
      overflow="hidden"
    >
      {particles.map((particle) => (
        <MotionBox
          key={particle.id}
          position="absolute"
          left={`${particle.x}%`}
          top={`${particle.y}%`}
          width={`${particle.size}px`}
          height={`${particle.size}px`}
          borderRadius="full"
          bg="linear-gradient(45deg, rgba(56, 178, 172, 0.3), rgba(66, 153, 225, 0.3))"
          boxShadow="0 0 20px rgba(56, 178, 172, 0.5)"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </Box>
  )
}

export default FloatingParticles