import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Text, Box, SkeletonText, useColorModeValue, BoxProps } from '@chakra-ui/react'

interface WordRotationEffectProps extends BoxProps {
  staticText: string;
  rotatingWords: string[];
  speed?: number;
  showSkeleton?: boolean;
}

const WordRotationEffect: React.FC<WordRotationEffectProps> = ({ staticText, rotatingWords, speed = 3500, showSkeleton = false, ...props }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const skeletonStartColor = useColorModeValue('gray.100', 'gray.700')
  const skeletonEndColor = useColorModeValue('gray.300', 'gray.600')

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

  // Simulate initial loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, showSkeleton ? 800 : 0)
    
    return () => clearTimeout(timer)
  }, [showSkeleton])

  // Show skeleton loading state
  if (showSkeleton && !isLoaded) {
    return (
      <Box 
        {...props}
        minH={props.minH || "auto"}
        display="flex"
        alignItems="center"
        justifyContent={props.textAlign === "center" ? "center" : "flex-start"}
      >
        <SkeletonText 
          noOfLines={2} 
          spacing="4" 
          skeletonHeight="6"
          startColor={skeletonStartColor}
          endColor={skeletonEndColor}
          w="80%"
          maxW="600px"
        />
      </Box>
    )
  }

  return (
    <Box 
      {...props} 
      style={{ WebkitFontSmoothing: 'antialiased' }}
      whiteSpace="normal"
      overflow="visible"
      wordBreak="break-word"
      overflowWrap="break-word"
      maxW="100%"
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
        whiteSpace="normal"
        wordBreak="break-word"
        overflowWrap="break-word"
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