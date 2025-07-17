import { useState, useEffect } from 'react'
import { Text, Box } from '@chakra-ui/react'

const WordRotationEffect = ({ staticText, rotatingWords, speed = 3500, ...props }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 200)
    }, speed)

    return () => clearInterval(interval)
  }, [rotatingWords.length, speed])

  return (
    <Box 
      {...props} 
      style={{ fontDisplay: 'swap', WebkitFontSmoothing: 'antialiased' }}
      whiteSpace="nowrap"
      overflow="visible"
    >
      <Text as="span" {...props}>
        {staticText}{' '}
      </Text>
      <Box as="span" position="relative" display="inline-block" minW="160px" ml={2}>
        {/* Visible rotating text */}
        <Text 
          as="span" 
          position="absolute"
          top={0}
          left={0}
          width="160px"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? 'translateX(0)' : 'translateX(10px)'}
          transition="all 0.3s ease-in-out"
          color="teal.300"
          fontWeight="inherit"
          textAlign="left"
          whiteSpace="nowrap"
        >
          {rotatingWords[currentWordIndex]}
        </Text>
        {/* Invisible spacer for the longest word */}
        <Text 
          as="span" 
          visibility="hidden"
          fontWeight="inherit"
          fontSize="inherit"
          whiteSpace="nowrap"
        >
          in motion
        </Text>
      </Box>
    </Box>
  )
}

export default WordRotationEffect