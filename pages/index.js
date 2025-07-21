import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  Text,
  VStack,
  HStack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Icon,
  useToast
} from '@chakra-ui/react'
import { ChevronRightIcon, CheckIcon } from '@chakra-ui/icons'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useCallback, useState } from 'react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import WordRotationEffect from '../components/typing-effect'
import AnimatedAvatar from '../components/animated-avatar'
import { IoLogoInstagram, IoLogoGithub, IoOpenOutline, IoCodeSlash } from 'react-icons/io5'
import dynamic from 'next/dynamic'

const VoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false
})



const Home = () => {
  const { scrollY } = useScroll()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProject, setSelectedProject] = useState(null)
  const toast = useToast()
  
  // Transform values for scroll animations
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100])
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3])
  
  // Color mode values for accordion buttons
  const tealExpandedBg = useColorModeValue('teal.50', 'teal.900')
  const pinkExpandedBg = useColorModeValue('pink.50', 'pink.900')
  
  // Color mode values for modal
  const modalBg = useColorModeValue('white', 'gray.800')
  const modalBorderColor = useColorModeValue('gray.200', 'gray.600')
  const modalHeaderBorderColor = useColorModeValue('gray.100', 'gray.700')
  const modalFooterBorderColor = useColorModeValue('gray.100', 'gray.700')
  const modalTextColor = useColorModeValue('gray.600', 'gray.300')

  // Project data with detailed information
  const projectsData = useMemo(() => [
    {
      id: 'portfolio',
      title: '🌟 This Portfolio Site',
      stack: ['Next.js', 'Chakra UI', 'Framer Motion', 'Three.js'],
      description: 'Modern portfolio with 3D elements, smooth animations, and responsive design.',
      features: [
        'Framer Motion scroll animations',
        'Three.js 3D dog model integration',
        'Responsive design with Chakra UI',
        'Performance optimized with lazy loading'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/portfolio',
      color: 'teal',
      result: '60% faster response time, used for support triage'
    },
    {
      id: 'ai-copilot',
      title: '🎥 Short-Form AI Co-Pilot',
      stack: ['ChatGPT API', 'JavaScript', 'Template Engine'],
      description: 'Prototype to help creators batch-edit & script TikTok/IG Reels using ChatGPT + templates.',
      features: [
        'ChatGPT API for automated script generation',
        'Reusable templates for content types',
        'Batch processing for multiple concepts'
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/yourusername/ai-copilot',
      color: 'pink',
      result: 'Content planning time from hours → minutes'
    },
    {
      id: 'prompt-tool',
      title: '📦 Mini Prompt Tool',
      stack: ['JavaScript', 'Browser APIs', 'Clipboard API'],
      description: 'Lightweight browser tool to organize, clean, and test GPT prompts.',
      features: [
        'Grouped reusable prompt templates',
        'Clipboard export and quick-copy buttons',
        'Team onboarding with prompt libraries'
      ],
      liveUrl: 'https://your-prompt-tool.com',
      githubUrl: 'https://github.com/yourusername/prompt-tool',
      color: 'orange',
      result: 'Standardize prompt testing and knowledge sharing'
    }
  ], [])

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project)
    onOpen()
  }, [onOpen])

  return (
    <Layout>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '120vh',
          background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.06) 0%, rgba(66, 153, 225, 0.04) 50%, rgba(159, 122, 234, 0.02) 100%)',
          zIndex: -10,
          y: backgroundY,
          opacity: backgroundOpacity,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      />
      <Container maxW="container.lg" position="relative">
      {/* Hero Section - Cinematic Enhanced */}
      <Section delay={0.1}>
        <Box 
          w="100vw"
          position="relative"
          left="50%"
          right="50%"
          ml="-50vw"
          mr="-50vw"
          textAlign="center" 
          py={{ base: 20, sm: 24, md: 24, lg: 32 }}
          px={{ base: 4, sm: 6, md: 8 }}
          overflow="hidden"
          minH={{ base: '90vh', md: '90vh' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          bg={useColorModeValue(
            'linear-gradient(135deg, #f7fafc 0%, rgba(56, 178, 172, 0.03) 50%, #edf2f7 100%)',
            'linear-gradient(135deg, #1a202c 0%, rgba(56, 178, 172, 0.08) 50%, #2d3748 100%)'
          )}
          boxShadow={useColorModeValue(
            '0 10px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          )}
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.12) 0%, rgba(66, 153, 225, 0.08) 50%, rgba(159, 122, 234, 0.04) 100%)',
            zIndex: -3,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse 100% 60% at 50% 30%, rgba(56, 178, 172, 0.08) 0%, rgba(66, 153, 225, 0.04) 50%, transparent 80%)',
            zIndex: -2,
            animation: 'pulse 8s ease-in-out infinite',
            willChange: 'opacity',
            backfaceVisibility: 'hidden'
          }}
          sx={{
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.6 },
              '50%': { opacity: 0.9 }
            },
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          }}
        >
          {/* Content Container */}
          <Box maxW="6xl" mx="auto" px={{ base: 6, sm: 8, md: 10 }} w="100%" position="relative">
            {/* Optimized Floating Particles */}
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                position="absolute"
                w={{ base: '3px', md: '5px' }}
                h={{ base: '3px', md: '5px' }}
                bg="rgba(56, 178, 172, 0.5)"
                borderRadius="full"
                top={`${25 + i * 20}%`}
                left={`${15 + i * 20}%`}
                animation={`float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`}
                zIndex={-1}
                display={{ base: 'none', lg: 'block' }}
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              />
            ))}
          <Box mb={{ base: 6, sm: 8, md: 10 }} position="relative">
            {/* Optimized Animated Avatar Component */}
            <AnimatedAvatar />
            
            <Box 
              mt={{ base: "35px", sm: "40px", md: "35px" }} 
              px={{ base: 6, sm: 8, md: 8 }}
              maxW="100%"
              overflow="visible"
            >
              <WordRotationEffect
                staticText="I help non-creatives build"
                rotatingWords={["smart websites", "clean sites", "useful tools"]}
                speed={4800}
                fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "4xl" }}
                fontWeight="800"
                bgGradient="linear(135deg, teal.400, blue.500, purple.500)"
                bgClip="text"
                minH={{ base: "60px", sm: "80px", md: "120px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                letterSpacing="-0.01em"
                lineHeight={{ base: 1.3, sm: 1.25, md: 1.2 }}
                textAlign="center"
                maxW={{ base: "95%", sm: "100%" }}
                mx="auto"
                wordBreak="keep-all"
                overflowWrap="normal"
                style={{ 
                  fontDisplay: 'swap',
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility'
                }}
              />
            </Box>
          </Box>
          <Text 
            fontSize={{ base: "lg", sm: "lg", md: "lg", lg: "xl" }}
            color={useColorModeValue('gray.400', 'gray.400')}
            mb={{ base: 10, sm: 10, md: 8 }}
            maxW={{ base: "95%", sm: "2xl", md: "3xl" }}
            mx="auto"
            lineHeight={{ base: "1.6", sm: "1.5", md: "relaxed" }}
            px={{ base: 8, sm: 8, md: 8 }}
            py={{ base: 3, sm: 3, md: 2 }}
            fontWeight="500"
            textAlign="center"
            wordBreak="normal"
            overflowWrap="break-word"
            tracking="normal"
          >
            No templates, no agencies, no headaches. Just fast, functional websites that actually work for your business.
          </Text>
          <VStack spacing={{ base: 10, sm: 10, md: 10 }} px={{ base: 8, sm: 8, md: 10 }}>
            <Flex 
              direction={{ base: "column", sm: "column", md: "row" }}
              gap={{ base: 5, sm: 5, md: 8 }}
              justify="center" 
              align="center"
              w="100%"
              maxW={{ base: "320px", sm: "400px", md: "100%" }}
              mx="auto"
            >
              <Button 
                as="a"
                href="#projects"
                size="hero"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", sm: "full", md: "auto" }}
                maxW={{ base: "100%", sm: "100%", md: "auto" }}
                minW={{ base: "full", sm: "full", md: "200px" }}
                minH={{ base: "52px", sm: "52px", md: "48px" }}
                px={{ base: 8, sm: 8, md: 6 }}
                py={{ base: 4, sm: 4, md: 3 }}
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 20px 40px rgba(56, 178, 172, 0.4), 0 0 0 1px rgba(56, 178, 172, 0.2)'
                }}
                _active={{
                  transform: 'translateY(-1px) scale(1.02)',
                  boxShadow: '0 8px 16px rgba(56, 178, 172, 0.3)'
                }}
                _focus={{
                  boxShadow: '0 0 0 3px rgba(56, 178, 172, 0.3)'
                }}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                🚀 View My Work
              </Button>
              <Button 
                as="a"
                href="#contact"
                size="hero"
                variant="glass"
                w={{ base: "full", sm: "full", md: "auto" }}
                maxW={{ base: "100%", sm: "100%", md: "auto" }}
                minW={{ base: "full", sm: "full", md: "220px" }}
                minH={{ base: "52px", sm: "52px", md: "48px" }}
                px={{ base: 8, sm: 8, md: 6 }}
                py={{ base: 4, sm: 4, md: 3 }}
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 20px 40px rgba(56, 178, 172, 0.2), 0 0 0 1px rgba(56, 178, 172, 0.15)'
                }}
                _active={{
                  transform: 'translateY(-1px) scale(1.02)',
                  boxShadow: '0 8px 16px rgba(56, 178, 172, 0.15)'
                }}
                _focus={{
                  boxShadow: '0 0 0 3px rgba(56, 178, 172, 0.3)'
                }}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                🤝 Let&apos;s Connect
              </Button>
            </Flex>
            <Text 
              fontSize={{ base: "xs", sm: "sm" }}
              color={useColorModeValue('gray.400', 'gray.400')}
              fontStyle="italic"
              textAlign="center"
              mt={{ base: 4, sm: 2, md: 0 }}
              sx={{
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.7 }
                },
                animation: 'pulse 2s ease-in-out infinite'
              }}
            >
              💡 Currently available for new projects
            </Text>
            
            {/* Mobile Scroll Hint */}
            <Box 
              display={{ base: "flex", md: "none" }}
              flexDirection="column"
              alignItems="center"
              mt={8}
              sx={{
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-10px)' },
                  '60%': { transform: 'translateY(-5px)' }
                },
                animation: 'bounce 2s infinite'
              }}
            >
              <Text 
                fontSize="xs"
                color={useColorModeValue('gray.400', 'gray.400')}
                mb={2}
                fontWeight="500"
              >
                Swipe to explore
              </Text>
              <Text fontSize="lg">↓</Text>
            </Box>
          </VStack>
          </Box>
        </Box>
      </Section>

      {/* About Section */}
      <Section delay={0.2}>
        <Box pt={{ base: 20, md: 16 }} pb={{ base: 24, md: 16 }} px={{ base: 8, sm: 10, md: 12 }}>
          <Heading 
            as="h2" 
            variant="section-title" 
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            A bit about me
          </Heading>
          
          {/* TLDR Section */}
          <Box 
            textAlign="center" 
            mb={{ base: 8, md: 12 }}
            p={6}
            bg={useColorModeValue('teal.50', 'teal.900')}
            borderRadius="xl"
            borderLeft="4px solid"
            borderColor="teal.400"
          >
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="600"
              color={useColorModeValue('teal.700', 'teal.300')}
              fontStyle="italic"
            >
              💡 TLDR: Empathy-driven builder with frontline support roots
            </Text>
          </Box>

          {/* Two-column layout: 3D Dog Model + Bio */}
          <Flex 
            direction={{ base: 'column', lg: 'row' }} 
            align="center" 
            justify="center" 
            gap={{ base: 8, lg: 12 }}
            mb={{ base: 10, md: 14 }}
            p={{ base: 6, sm: 8, md: 10 }}
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderRadius="3xl"
            boxShadow="lg"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'linear-gradient(135deg, teal.500, blue.500)',
              opacity: 0.05,
              zIndex: 0
            }}
          >
            {/* 3D Dog Model - Left Side */}
            <Box
              position="relative"
              zIndex={1}
              w={{ base: 200, sm: 240, lg: 280 }}
              h={{ base: 200, sm: 240, lg: 280 }}
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.4s ease"
              _hover={{
                transform: 'scale(1.05) translateY(-5px)',
                filter: 'drop-shadow(0 15px 35px rgba(56, 178, 172, 0.3))'
              }}
              sx={{
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' }
                },
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              <VoxelDog />
            </Box>
            
            {/* Bio Text - Right Side */}
            <VStack 
              align={{ base: 'center', lg: 'start' }} 
              spacing={6}
              textAlign={{ base: 'center', lg: 'left' }}
              position="relative"
              zIndex={1}
              flex={1}
              maxW={{ base: '100%', lg: '500px' }}
            >
              <Text fontWeight="800" fontSize="3xl" color={useColorModeValue('gray.800', 'white')}>Tony Yam</Text>
              <Text 
                color={useColorModeValue('teal.600', 'teal.300')} 
                fontSize="xl"
                fontWeight="600"
              >
                Freelance Web Developer
              </Text>
              <Text 
                color={useColorModeValue('gray.600', 'gray.300')}
                fontSize="lg"
                fontWeight="500"
              >
                📍 Kuala Lumpur, Malaysia
              </Text>
              <Text 
                color={useColorModeValue('gray.600', 'gray.300')}
                fontSize="md"
                lineHeight="relaxed"
                fontWeight="500"
                maxW={{ base: '100%', lg: '400px' }}
              >
                Building digital solutions that actually solve problems, not just look pretty. 
                I help solo creators and business owners launch fast, functional websites without 
                the agency overhead or template limitations.
              </Text>
              <Text 
                color={useColorModeValue('gray.400', 'gray.400')}
                fontSize="sm"
                fontStyle="italic"
                maxW={{ base: '100%', lg: '400px' }}
              >
                &ldquo;Every great website starts with understanding the human behind the screen.&rdquo;
              </Text>
            </VStack>
          </Flex>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, sm: 8, md: 10 }} mb={{ base: 10, md: 14 }} maxW={{ base: "90%", sm: "100%" }} mx="auto">
            <Box variant="hero-card" position="relative" overflow="hidden" borderRadius="xl" boxShadow="lg">
              <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="4px"
                bg="linear-gradient(90deg, blue.400, blue.500)"
              />
              <VStack align="start" spacing={3}>
                <Text fontSize="2xl" mb={2}>💳</Text>
                <Heading as="h3" size="md" mb={2} color="blue.500" fontWeight="700">
                  Customer Service + Fintech
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('blue.600', 'blue.300')} fontWeight="600" mb={3}>
                  Where empathy meets problem-solving
                </Text>
                <Text 
                  fontSize={{ base: "17px", md: "md" }} 
                  lineHeight="relaxed" 
                  color={useColorModeValue('gray.600', 'gray.300')}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  Spent years handling customer escalations in fintech. Learned that behind every &ldquo;bug report&rdquo; is a frustrated human who just wants things to work.
                </Text>
              </VStack>
            </Box>
            
            <Box variant="hero-card" position="relative" overflow="hidden" borderRadius="xl" boxShadow="lg">
              <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="4px"
                bg="linear-gradient(90deg, green.400, green.500)"
              />
              <VStack align="start" spacing={3}>
                <Text fontSize="2xl" mb={2}>🚚</Text>
                <Heading as="h3" size="md" mb={2} color="green.500" fontWeight="700">
                  Dropshipping + Self-starter
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('green.600', 'green.300')} fontWeight="600" mb={3}>
                  Building systems that scale
                </Text>
                <Text 
                  fontSize={{ base: "17px", md: "md" }} 
                  lineHeight="relaxed" 
                  color={useColorModeValue('gray.600', 'gray.300')}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  Ran my own dropshipping operations, built internal tools for tracking profits, managing suppliers, and automating workflows. Nothing teaches you efficiency like your own money on the line.
                </Text>
              </VStack>
            </Box>
            
            <Box variant="hero-card" position="relative" overflow="hidden" borderRadius="xl" boxShadow="lg">
              <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="4px"
                bg="linear-gradient(90deg, purple.400, purple.500)"
              />
              <VStack align="start" spacing={3}>
                <Text fontSize="2xl" mb={2}>🤖</Text>
                <Heading as="h3" size="md" mb={2} color="purple.500" fontWeight="700">
                  AI + Web3 Explorer
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('purple.600', 'purple.300')} fontWeight="600" mb={3}>
                  Experimenting with tomorrow&apos;s tools
                </Text>
                <Text 
                  fontSize={{ base: "17px", md: "md" }} 
                  lineHeight="relaxed" 
                  color={useColorModeValue('gray.600', 'gray.300')}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  Currently exploring GPT integrations, prompt engineering, and blockchain applications. Not chasing hype &mdash; genuinely curious about tools that could solve real problems.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>


        </Box>
      </Section>

      {/* Services Section */}
      <Section delay={0.3}>
        <Box variant="section-container" id="services">
          <Heading 
            as="h2" 
            variant="section-title"
          >
            💡 From 0 to Launch — Custom Website Building
          </Heading>
          
          <Text 
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            textAlign="center" 
            mb={12} 
            color={useColorModeValue('gray.400', 'gray.400')}
            maxW={{ base: "90%", sm: "85%", md: "4xl" }}
            mx="auto"
            lineHeight="relaxed"
            fontWeight="500"
            px={{ base: 4, sm: 6, md: 0 }}
            wordBreak="break-word"
            overflowWrap="break-word"
          >
            I help solo creators and business owners launch fast, functional, good-looking websites — without relying on expensive agencies or rigid templates.
          </Text>

          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            spacing={{ base: 6, md: 8, lg: 10 }} 
            mb={{ base: 8, md: 12 }}
          >
            <VStack align="start" spacing={4}>
              <HStack>
                <CheckIcon color="teal.500" />
                <Text>End-to-end site design (frontend + backend)</Text>
              </HStack>
              <HStack>
                <CheckIcon color="teal.500" />
                <Text>Booking forms / lead gen / membership systems</Text>
              </HStack>
              <HStack>
                <CheckIcon color="teal.500" />
                <Text>Payment integration (Stripe, FPX, ShopeePay, WeChat)</Text>
              </HStack>
            </VStack>
            
            <VStack align="start" spacing={4}>
              <HStack>
                <CheckIcon color="teal.500" />
                <Text>Responsive UI + SEO basics</Text>
              </HStack>
              <HStack>
                <CheckIcon color="teal.500" />
                <Text>AI-generated draft copy if needed</Text>
              </HStack>
              <HStack>
                <CheckIcon color="teal.500" />
                <Text>Self-manageable site structure</Text>
              </HStack>
            </VStack>
          </SimpleGrid>

          <Box 
            textAlign="center" 
            p={{ base: 6, md: 8, lg: 10 }} 
            variant="hero-card"
            position="relative"
            overflow="hidden"
            minHeight={{ base: '120px', md: '140px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'linear-gradient(135deg, teal.400, blue.400)',
              opacity: 0.15,
              zIndex: 0
            }}
          >
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              fontStyle="italic"
              fontWeight="600"
              color={useColorModeValue('gray.700', 'gray.200')}
              position="relative"
              zIndex={1}
            >
              ✨ If you have the idea, I&apos;ll help you shape it, ship it, and own it.
            </Text>
          </Box>
        </Box>
      </Section>

      {/* Projects Section */}
      <Section delay={0.4}>
        <Box variant="section-container" id="projects" pt={{ base: 16, md: 12 }} pb={{ base: 20, md: 16 }}>
          <Heading 
            as="h2" 
            variant="section-title"
          >
            💼 Projects
          </Heading>
          <Text 
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            textAlign="center" 
            mb={12} 
            color={useColorModeValue('gray.400', 'gray.400')}
            maxW={{ base: "90%", sm: "85%", md: "3xl" }}
            mx="auto"
            lineHeight="relaxed"
            fontWeight="500"
            px={{ base: 4, sm: 6, md: 0 }}
            wordBreak="break-word"
            overflowWrap="break-word"
          >
            A curated selection of things I&apos;ve built, broken, and learned from.
          </Text>
          
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={{ base: 8, md: 8, lg: 10 }} 
            mb={{ base: 12, md: 16 }}
            maxW={{ base: "md", md: "100%" }}
            mx="auto"
          >
            <Box 
              variant="project-card"
              cursor="pointer"
              onClick={() => handleProjectClick(projectsData[2])}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                bg: 'linear-gradient(90deg, blue.400, blue.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                bg: 'linear-gradient(135deg, blue.400, blue.600)',
                opacity: 0.15,
                borderRadius: '0 0 0 40px',
                transition: 'opacity 0.4s ease'
              }}
              _hover={{
                _before: {
                  height: '6px'
                },
                _after: {
                  opacity: 0.3
                }
              }}
            >
              <Heading as="h3" size="sm" mb={3} color="blue.400" fontWeight="700">
                📊 Profit Tracker Dashboard
              </Heading>
              <Text fontSize="xs" color="gray.400" mb={3} fontWeight="600">
                Internal tool | Dropshipping ops
              </Text>
              <Text 
                fontSize={{ base: "17px", md: "sm" }} 
                lineHeight="relaxed" 
                mb={3} 
                color="gray.300"
                wordBreak="break-word"
                overflowWrap="break-word"
              >
                Private dashboard for product ROI and campaign performance tracking.
              </Text>
              <VStack align="start" spacing={2} fontSize="xs">
                <Text color="gray.400">• Automated sales tracking via Google Sheets</Text>
                <Text color="gray.400">• COGS vs marketing spend visualization</Text>
                <Text color="gray.400">• 3x faster campaign optimization</Text>
              </VStack>
              <Box 
                mt={4}
                p={3} 
                bg="blue.900" 
                borderRadius="md" 
                borderLeft="3px solid"
                borderColor="blue.400"
              >
                <Text fontSize="xs" fontWeight="600" color="blue.300">
                  Impact: $50K+ tracked, 60% faster decisions
                </Text>
              </Box>

            </Box>
            
            <Box 
              variant="project-card"
              cursor="pointer"
              onClick={() => handleProjectClick(projectsData[0])}
              _hover={{
                _before: {
                  height: '6px'
                },
                _after: {
                  opacity: 0.3
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                bg: 'linear-gradient(90deg, teal.400, teal.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                bg: 'linear-gradient(135deg, teal.400, teal.600)',
                opacity: 0.15,
                borderRadius: '0 0 0 40px',
                transition: 'opacity 0.4s ease'
              }}
            >
              {/* Featured Tag */}
              <Box
                position="absolute"
                top="12px"
                right="12px"
                bg="linear-gradient(135deg, teal.400, teal.600)"
                color="white"
                px={2}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
                zIndex={2}
                boxShadow="0 4px 12px rgba(56, 178, 172, 0.3)"
              >
                ⭐ Featured
              </Box>
              <Heading as="h3" size="sm" mb={3} color="teal.400" fontWeight="700">
                🔧 Portfolio Site
              </Heading>
              <Text fontSize="xs" color="gray.400" mb={3} fontWeight="600">
                Next.js, React, Chakra UI, Three.js
              </Text>
              <Text fontSize={{ base: "17px", md: "sm" }} lineHeight="relaxed" mb={3} color="gray.300">
                This site — built as both a learning journey and proof of capability.
              </Text>
              <VStack align="start" spacing={2} fontSize="xs">
                <Text color="gray.400">• 3D dog model with Three.js</Text>
                <Text color="gray.400">• Performance-optimized animations</Text>
                <Text color="gray.400">• Responsive design patterns</Text>
              </VStack>
              <Box 
                mt={4}
                p={3} 
                bg="teal.900" 
                borderRadius="md" 
                borderLeft="3px solid"
                borderColor="teal.400"
              >
                <Text fontSize="xs" fontWeight="600" color="teal.300">
                  Lessons: version control, visual rhythm, when to stop tweaking 😅
                </Text>
              </Box>
              
              {/* Hover Info Overlay */}
              <Box
                className="hover-info"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(56, 178, 172, 0.95), rgba(56, 178, 172, 0.8))"
                color="white"
                p={4}
                opacity={0}
                transform="translateY(20px)"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                backdropFilter="blur(15px)"
                sx={{
                  '.hero-card:hover &': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }}
              >
                <Text fontSize="sm" fontWeight="bold" mb={2}>💡 Tech Used:</Text>
                <Text fontSize="xs" mb={2}>Next.js • React • Chakra UI • Three.js • Framer Motion</Text>
                <Button size="xs" variant="outline" colorScheme="whiteAlpha" mt={2}>
                  You&apos;re viewing it! 🎉
                </Button>
              </Box>
            </Box>
            
            <Box 
              variant="project-card"
              cursor="pointer"
              onClick={() => handleProjectClick(projectsData[1])}
              _hover={{
                _before: {
                  height: '6px'
                },
                _after: {
                  opacity: 0.3
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                bg: 'linear-gradient(90deg, purple.400, purple.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                bg: 'linear-gradient(135deg, purple.400, purple.600)',
                opacity: 0.15,
                borderRadius: '0 0 0 40px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="sm" mb={3} color="purple.400" fontWeight="700">
                🤖 GPT-Powered Support Flow
              </Heading>
              <Text fontSize="xs" color="gray.400" mb={3} fontWeight="600">
                GPT-4, Telegram Bot API, Python
              </Text>
              <Text fontSize={{ base: "17px", md: "sm" }} lineHeight="relaxed" mb={3} color="gray.300">
                Workflow experiment for Fintech — testing GPT prompts to streamline tier-1 support.
              </Text>
              <VStack align="start" spacing={2} fontSize="xs">
                <Text color="gray.400">• GPT-4 training for refund/OTP/KYC queries</Text>
                <Text color="gray.400">• Response time: 3min → &lt;1min</Text>
                <Text color="gray.400">• Sentiment-based prioritization</Text>
              </VStack>
              <Box 
                mt={4}
                p={3} 
                bg="purple.900" 
                borderRadius="md" 
                borderLeft="3px solid"
                borderColor="purple.400"
              >
                <Text fontSize="xs" fontWeight="600" color="purple.300">
                  Result: 60% faster response time, used for support triage
                </Text>
              </Box>

            </Box>
            
            <Box 
              variant="project-card"
              cursor="pointer"
              onClick={() => handleProjectClick(projectsData[1])}
              _hover={{
                _before: {
                  height: '6px'
                },
                _after: {
                  opacity: 0.3
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                bg: 'linear-gradient(90deg, pink.400, pink.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                bg: 'linear-gradient(135deg, pink.400, pink.600)',
                opacity: 0.15,
                borderRadius: '0 0 0 40px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="sm" mb={3} color="pink.400" fontWeight="700">
                🎥 Short-Form AI Co-Pilot
              </Heading>
              <Text fontSize="xs" color="gray.400" mb={3} fontWeight="600">
                ChatGPT API, JavaScript, Template Engine
              </Text>
              <Text fontSize={{ base: "17px", md: "sm" }} lineHeight="relaxed" mb={3} color="gray.300">
                Prototype to help creators batch-edit & script TikTok/IG Reels using ChatGPT + templates.
              </Text>
              <VStack align="start" spacing={2} fontSize="xs">
                <Text color="gray.400">• ChatGPT API for automated script generation</Text>
                <Text color="gray.400">• Reusable templates for content types</Text>
                <Text color="gray.400">• Batch processing for multiple concepts</Text>
              </VStack>
              <Box 
                mt={4}
                p={3} 
                bg="pink.900" 
                borderRadius="md" 
                borderLeft="3px solid"
                borderColor="pink.400"
              >
                <Text fontSize="xs" fontWeight="600" color="pink.300">
                  Result: Content planning time from hours → minutes
                </Text>
              </Box>

            </Box>
            
            <Box 
              variant="project-card"
              cursor="pointer"
              onClick={() => handleProjectClick(projectsData[2])}
              _hover={{
                _before: {
                  height: '6px'
                },
                _after: {
                  opacity: 0.3
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                bg: 'linear-gradient(90deg, orange.400, orange.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                bg: 'linear-gradient(135deg, orange.400, orange.600)',
                opacity: 0.15,
                borderRadius: '0 0 0 40px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="sm" mb={3} color="orange.400" fontWeight="700">
                📦 Mini Prompt Tool
              </Heading>
              <Text fontSize="xs" color="gray.400" mb={3} fontWeight="600">
                JavaScript, Browser APIs, Clipboard API
              </Text>
              <Text fontSize="sm" lineHeight="1.6" mb={3} color="gray.300">
                Lightweight browser tool to organize, clean, and test GPT prompts.
              </Text>
              <VStack align="start" spacing={2} fontSize="xs">
                <Text color="gray.400">• Grouped reusable prompt templates</Text>
                <Text color="gray.400">• Clipboard export and quick-copy buttons</Text>
                <Text color="gray.400">• Team onboarding with prompt libraries</Text>
              </VStack>
              <Box 
                mt={4}
                p={3} 
                bg="orange.900" 
                borderRadius="md" 
                borderLeft="3px solid"
                borderColor="orange.400"
              >
                <Text fontSize="xs" fontWeight="600" color="orange.300">
                  Why: Standardize prompt testing and knowledge sharing
                </Text>
              </Box>

            </Box>
          </SimpleGrid>
          
          <Box textAlign="center" mb={{ base: 6, md: 8 }}>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW="2xl"
              mx="auto"
              lineHeight="relaxed"
            >
              Want a walkthrough of any project? DM me — I&apos;d be happy to share a Loom or repo.
            </Text>
          </Box>
          
          <Box textAlign="center" mb={{ base: 12, md: 16 }}>
            <NextLink href="/works">
              <Button 
                variant="solid"
                size="hero"
                rightIcon={<ChevronRightIcon />}
                _hover={{ 
                  transform: 'translateY(-4px) scale(1.05)', 
                  boxShadow: '0 20px 40px rgba(56, 178, 172, 0.4)'
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                See More Details
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Section>

      {/* CTA Section */}
      <Section delay={0.5}>
        <Box variant="section-container" id="contact">
          <Box 
            textAlign="center" 
            p={{ base: 8, md: 12, lg: 16 }} 
            variant="hero-card"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'linear-gradient(135deg, teal.400, blue.500)',
              opacity: 0.1,
              zIndex: 0
            }}
          >
            <Box position="relative" zIndex={1}>
              <Heading 
                as="h2" 
                variant="section-title"
                bgGradient="linear(to-r, teal.400, blue.500)"
                bgClip="text"
                mb={{ base: 6, md: 8 }}
              >
                Want to connect?
              </Heading>
              
              <Text 
                fontSize="xl" 
                mb={8} 
                color={useColorModeValue('gray.600', 'gray.300')} 
                maxW="3xl" 
                mx="auto"
                lineHeight="relaxed"
                fontWeight="500"
              >
                If you&apos;re working on something interesting, need a second pair of eyes on a project, or just want to chat about building things — I&apos;m always up for a conversation.
              </Text>
              
              <VStack spacing={6} mb={8}>
                <Text 
                  fontSize="lg" 
                  color={useColorModeValue('gray.400', 'gray.400')}
                  fontWeight="600"
                >
                  Best ways to reach me:
                </Text>
                <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 4, sm: 6, md: 8 }} justify="center" align="center" flexWrap="wrap">
                  <Button 
                    as="a"
                    href="https://instagram.com/mrtonyyam"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="hero"
                    variant="solid"
                    leftIcon={<IoLogoInstagram />}
                    _hover={{
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: '0 20px 40px rgba(56, 178, 172, 0.4), 0 0 30px rgba(56, 178, 172, 0.3)'
                    }}
                    _active={{
                      transform: 'translateY(-2px) scale(1.02)'
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    Instagram DM
                  </Button>
                  <Button 
                    as="a"
                    href="https://github.com/mrtonymu"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="hero"
                    variant="glass"
                    leftIcon={<IoLogoGithub />}
                    _hover={{
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: '0 20px 40px rgba(56, 178, 172, 0.2), 0 0 25px rgba(56, 178, 172, 0.15)'
                    }}
                    _active={{
                      transform: 'translateY(-2px) scale(1.02)'
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    GitHub
                  </Button>
                </Flex>
              </VStack>
              
              <Text 
                fontSize="md" 
                color={useColorModeValue('gray.400', 'gray.400')} 
                fontStyle="italic"
                fontWeight="500"
              >
                ✨ Usually respond within a day or two.
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* What I'm Currently Exploring Section */}
      <Section delay={0.6}>
        <Box 
          bg="black" 
          variant="section-container"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'linear-gradient(135deg, purple.400, teal.400)',
            opacity: 0.1,
            zIndex: 0
          }}
        >
          <Box position="relative" zIndex={1} maxW="6xl" mx="auto">
            <Heading 
              as="h2" 
              variant="section-title"
            >
              🧠 What I&apos;m currently exploring
            </Heading>
            
            <Box 
              maxW="4xl" 
              mx="auto" 
              p={{ base: 10, md: 8 }}
              bg="gray.900"
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.700"
              position="relative"
              overflow="hidden"
              boxShadow="0 25px 50px rgba(0, 0, 0, 0.5)"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(56, 178, 172, 0.3)'
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box position="relative" zIndex={1}>
              <Text 
                fontSize={{ base: "lg", md: "lg", lg: "xl" }} 
                lineHeight={{ base: "1.7", md: "1.6" }}
                mb={{ base: 8, md: 6 }}
                color={useColorModeValue('gray.600', 'gray.300')}
                fontWeight="500"
                maxW={{ base: "100%", md: "90%" }}
                mx="auto"
              >
                Lately, I&apos;ve been diving into how AI tools like ChatGPT, Midjourney, and Groq are reshaping creative workflows — especially for non-devs. I&apos;m also experimenting with lightweight motion (Framer Motion, GSAP), mobile-first layout strategies, and emotion-driven microcopy in UIs.
              </Text>
              
              <Text 
                fontSize={{ base: "lg", md: "lg", lg: "xl" }} 
                lineHeight={{ base: "1.7", md: "1.6" }}
                mb={{ base: 8, md: 6 }}
                color={useColorModeValue('gray.600', 'gray.300')}
                fontWeight="500"
                maxW={{ base: "100%", md: "90%" }}
                mx="auto"
              >
                On the side, I&apos;ve been thinking about how to blend &ldquo;utility + play&rdquo; — particularly in creative or Web3 tool spaces.
              </Text>
              
                <Box textAlign="center" mt={4}>
                  <Button 
                    variant="ghost" 
                    size="lg"
                    fontStyle="italic"
                    color="teal.300"
                    fontWeight="600"
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 25px rgba(56, 178, 172, 0.25)',
                      bg: 'rgba(56, 178, 172, 0.1)'
                    }}
                    _active={{
                      transform: 'scale(0.98)'
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    Still rough, but if you&apos;re into that kind of thing — let&apos;s jam. ✨
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* FAQ Section */}
      <Section delay={0.7}>
        <Box variant="section-container" pt={{ base: 20, md: 16 }} pb={{ base: 24, md: 20 }} px={{ base: 4, sm: 6, md: 8 }}>
          <Heading 
            as="h2" 
            variant="section-title"
          >
            💬 Frequently Asked
          </Heading>
          
          <Box maxW="4xl" mx="auto" px={{ base: 4, sm: 6, md: 0 }}>
            <Accordion allowMultiple spacing={{ base: 6, md: 8 }}>
              <AccordionItem 
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius="xl"
                mb={{ base: 6, md: 8 }}
                bg={useColorModeValue('white', 'gray.800')}
                _hover={{
                  borderColor: 'purple.400',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 35px rgba(159, 122, 234, 0.2)'
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <AccordionButton 
                  p={{ base: 6, md: 6 }}
                  _hover={{ bg: 'transparent' }}
                  _expanded={{ 
                    bg: useColorModeValue('purple.50', 'purple.900'),
                    borderBottomRadius: 0
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <HStack spacing={3}>
                      <Text fontSize="2xl">❓</Text>
                      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('purple.600', 'purple.300')}>
                        Do you freelance?
                      </Text>
                    </HStack>
                  </Box>
                  <AccordionIcon color={useColorModeValue('purple.600', 'purple.300')} />
                </AccordionButton>
                <AccordionPanel 
                  pt={{ base: 6, md: 6 }}
                  pb={{ base: 8, md: 8 }} 
                  px={{ base: 6, md: 8 }}
                  bg={useColorModeValue('purple.50', 'purple.900')}
                  borderBottomRadius="xl"
                >
                  <Text 
                    fontSize={{ base: 'lg', md: 'lg' }} 
                    color={useColorModeValue('gray.700', 'gray.300')} 
                    lineHeight={{ base: '1.6', md: '1.5' }}
                    ml={{ base: 6, md: 10 }}
                  >
                    Yes — on select projects that excite me. I&apos;m particularly drawn to work that involves creative problem-solving, AI integration, or building tools that genuinely help people.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem 
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius="xl"
                mb={{ base: 6, md: 8 }}
                bg={useColorModeValue('white', 'gray.800')}
                _hover={{
                  borderColor: 'teal.400',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(56, 178, 172, 0.15)'
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <AccordionButton 
                  p={{ base: 6, md: 6 }}
                  _hover={{ bg: 'transparent' }}
                  _expanded={{ 
                    bg: tealExpandedBg,
                    borderBottomRadius: 0
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <HStack spacing={3}>
                      <Text fontSize="2xl">💡</Text>
                      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('teal.600', 'teal.300')}>
                        Can we collaborate?
                      </Text>
                    </HStack>
                  </Box>
                  <AccordionIcon color={useColorModeValue('teal.600', 'teal.300')} />
                </AccordionButton>
                <AccordionPanel 
                  pt={{ base: 6, md: 6 }}
                  pb={{ base: 8, md: 8 }} 
                  px={{ base: 6, md: 8 }}
                  bg={useColorModeValue('teal.50', 'teal.900')}
                  borderBottomRadius="xl"
                >
                  <Text fontSize={{ base: 'lg', md: 'lg' }} color={useColorModeValue('gray.700', 'gray.300')} lineHeight={{ base: '1.6', md: '1.5' }} ml={{ base: 6, md: 10 }}>
                    Absolutely! Especially if it&apos;s fun, weird, or meaningful. I love working on projects that push boundaries, solve real problems, or explore new ways of thinking about user experience.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem 
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius="xl"
                mb={{ base: 6, md: 8 }}
                bg={useColorModeValue('white', 'gray.800')}
                _hover={{
                  borderColor: 'pink.400',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(236, 72, 153, 0.15)'
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <AccordionButton 
                  p={{ base: 6, md: 6 }}
                  _hover={{ bg: 'transparent' }}
                  _expanded={{ 
                    bg: pinkExpandedBg,
                    borderBottomRadius: 0
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <HStack spacing={3}>
                      <Text fontSize="2xl">⚙️</Text>
                      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('pink.600', 'pink.300')}>
                        Tools I use daily?
                      </Text>
                    </HStack>
                  </Box>
                  <AccordionIcon color={useColorModeValue('pink.600', 'pink.300')} />
                </AccordionButton>
                <AccordionPanel 
                  pt={{ base: 6, md: 6 }}
                  pb={{ base: 8, md: 8 }} 
                  px={{ base: 6, md: 8 }}
                  bg={useColorModeValue('pink.50', 'pink.900')}
                  borderBottomRadius="xl"
                >
                  <Text fontSize={{ base: 'lg', md: 'lg' }} color={useColorModeValue('gray.700', 'gray.300')} lineHeight={{ base: '1.6', md: '1.5' }} ml={{ base: 6, md: 10 }}>
                    VS Code for development, Framer for prototyping, ChatGPT for brainstorming and problem-solving, Figma for design work, and lots of caffeine to fuel the creative process. ☕
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Section>
    </Container>

    {/* Project Details Modal */}
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
      <ModalContent 
        bg={modalBg}
        borderRadius="2xl"
        border="1px solid"
        borderColor={modalBorderColor}
        maxW="90vw"
        mx={4}
      >
        <ModalHeader 
          pb={2}
          borderBottom="1px solid"
          borderColor={modalHeaderBorderColor}
        >
          <Text fontSize="xl" fontWeight="bold">
            {selectedProject?.title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6}>
          {selectedProject && (
            <VStack align="start" spacing={4}>
              <Text fontSize="md" color={modalTextColor} lineHeight="relaxed">
                {selectedProject.description}
              </Text>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={2} color={`${selectedProject.color}.400`}>
                  Tech Stack:
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {selectedProject.stack.map((tech, index) => (
                    <Badge 
                      key={index}
                      colorScheme={selectedProject.color}
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb={2} color={`${selectedProject.color}.400`}>
                  Key Features:
                </Text>
                <VStack align="start" spacing={1}>
                  {selectedProject.features.map((feature, index) => (
                    <Text key={index} fontSize="sm" color={modalTextColor}>
                      • {feature}
                    </Text>
                  ))}
                </VStack>
              </Box>
              
              <Box 
                p={4} 
                bg={`${selectedProject.color}.900`} 
                borderRadius="md" 
                borderLeft="3px solid"
                borderColor={`${selectedProject.color}.400`}
                w="full"
              >
                <Text fontSize="sm" fontWeight="600" color={`${selectedProject.color}.300`}>
                  Result: {selectedProject.result}
                </Text>
              </Box>
            </VStack>
          )}
        </ModalBody>
        <ModalFooter borderTop="1px solid" borderColor={modalFooterBorderColor}>
          <HStack spacing={3}>
            {selectedProject?.liveUrl && (
              <Button 
                onClick={() => {
                  toast({
                    title: '🚧 In Development',
                    description: 'This project will be available soon.',
                    status: 'info',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
                }}
                leftIcon={<Icon as={IoOpenOutline} aria-hidden="true" />}
                colorScheme={selectedProject?.color}
                variant="solid"
                size="sm"
                aria-label={`View live demo of ${selectedProject?.title}`}
              >
                Live Demo
              </Button>
            )}
            {selectedProject?.githubUrl && (
              <Button 
                onClick={() => {
                  toast({
                    title: '🚧 In Development',
                    description: 'This project will be available soon.',
                    status: 'info',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
                }}
                leftIcon={<Icon as={IoCodeSlash} aria-hidden="true" />}
                variant="outline"
                colorScheme={selectedProject?.color}
                size="sm"
                aria-label={`View source code of ${selectedProject?.title}`}
              >
                View Code
              </Button>
            )}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
