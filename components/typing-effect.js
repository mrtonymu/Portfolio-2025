import { useState, useEffect, useMemo, useCallback } from 'react'
import { Text, Box } from '@chakra-ui/react'

const WordRotationEffect = ({ staticText, rotatingWords, speed = 3500, ...props }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Memoize the current word for performance
  const currentWord = useMemo(() => 
    rotatingWords[currentWordIndex], 
    [rotatingWords, currentWordIndex]
  )

  // Memoize the rotation logic
  const rotateWord = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
      setIsVisible(true)
    }, 200)
  }, [rotatingWords.length])

  useEffect(() => {
    const interval = setInterval(rotateWord, speed)
    return () => clearInterval(interval)
  }, [rotateWord, speed])

  return (
    <Box 
      {...props} 
      style={{ fontDisplay: 'swap', WebkitFontSmoothing: 'antialiased' }}
      whiteSpace={{ base: "normal", md: "nowrap" }}
      overflow="visible"
      wordBreak="break-word"
      overflowWrap="break-word"
    >
      <Text as="span" {...props}>
        {staticText}{' '}
      </Text>
      <Text 
        as="span" 
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateX(0)' : 'translateX(8px)'}
        transition="opacity 0.2s ease-in-out, transform 0.2s ease-in-out"
        color="teal.300"
        fontWeight="inherit"
        whiteSpace={{ base: "normal", md: "nowrap" }}
        wordBreak={{ base: "break-word", md: "normal" }}
        overflowWrap={{ base: "break-word", md: "normal" }}
        display="inline"
        ml={{ base: 1, md: 2 }}
        style={{
          willChange: 'opacity, transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {currentWord}
      </Text>
    </Box>
  )
}

export default WordRotationEffect