import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Text,
  VStack,
  HStack,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon, CheckIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import WordRotationEffect from '../components/typing-effect'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const VoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      {/* Hero Section - Cinematic Enhanced */}
      <Section delay={0.1}>
        <Box 
          textAlign="center" 
          py={{ base: 16, sm: 20, md: 24, lg: 32 }}
          px={{ base: 6, sm: 8, md: 10 }}
          position="relative"
          overflow="hidden"
          minH={{ base: '85vh', md: '90vh' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(56, 178, 172, 0.15) 0%, rgba(56, 178, 172, 0.12) 15%, rgba(66, 153, 225, 0.1) 30%, rgba(66, 153, 225, 0.08) 45%, rgba(159, 122, 234, 0.06) 60%, rgba(159, 122, 234, 0.04) 75%, rgba(159, 122, 234, 0.02) 90%, transparent 100%)',
            zIndex: -3
          }}
          _after={{
            content: '""',
            position: 'absolute',
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: { base: '400px', md: '600px', lg: '800px' },
            height: { base: '400px', md: '600px', lg: '800px' },
            background: 'conic-gradient(from 0deg, rgba(56, 178, 172, 0.15), rgba(66, 153, 225, 0.1), rgba(159, 122, 234, 0.08), rgba(56, 178, 172, 0.15))',
            borderRadius: 'full',
            filter: 'blur(60px)',
            zIndex: -2,
            animation: 'float 8s ease-in-out infinite, spin 20s linear infinite'
          }}
          sx={{
            '@keyframes float': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0px) scale(1)' },
              '50%': { transform: 'translateX(-50%) translateY(-30px) scale(1.1)' }
            },
            '@keyframes spin': {
              '0%': { transform: 'translateX(-50%) rotate(0deg)' },
              '100%': { transform: 'translateX(-50%) rotate(360deg)' }
            }
          }}
        >
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              position="absolute"
              w={{ base: '4px', md: '6px' }}
              h={{ base: '4px', md: '6px' }}
              bg="rgba(56, 178, 172, 0.6)"
              borderRadius="full"
              top={`${20 + i * 15}%`}
              left={`${10 + i * 15}%`}
              animation={`float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`}
              zIndex={-1}
              display={{ base: 'none', md: 'block' }}
            />
          ))}
          <Box mb={{ base: 6, sm: 8, md: 10 }} position="relative">
            {/* Animated Stitch Avatar - Central Character Moment */}
            <Box
              position="absolute"
              top={{ base: "-40px", sm: "-60px", md: "-100px" }}
              left="0"
              right="0"
              zIndex={10}
              display="flex"
              justifyContent="center"
              px={{ base: 4, sm: 6, md: 8 }}
            >
              {/* Enhanced radial background gradient for depth - smoother transitions */}
              <Box
                position="absolute"
                top="50%"
                left="0"
                right="0"
                transform="translateY(-50%)"
                w={{ base: "400px", sm: "450px", md: "500px" }}
                h={{ base: "400px", sm: "450px", md: "500px" }}
                bg={{ 
                  base: "radial-gradient(ellipse 140% 120% at center, rgba(56, 178, 172, 0.12) 0%, rgba(56, 178, 172, 0.08) 25%, rgba(66, 153, 225, 0.06) 40%, rgba(66, 153, 225, 0.04) 55%, rgba(159, 122, 234, 0.03) 70%, rgba(159, 122, 234, 0.015) 85%, transparent 100%)",
                  md: "radial-gradient(ellipse 120% 100% at center, rgba(56, 178, 172, 0.2) 0%, rgba(56, 178, 172, 0.15) 20%, rgba(66, 153, 225, 0.12) 35%, rgba(66, 153, 225, 0.08) 50%, rgba(159, 122, 234, 0.05) 65%, rgba(159, 122, 234, 0.02) 80%, transparent 95%)"
                }}
                borderRadius="full"
                zIndex={-1}
                animation="pulse 4s ease-in-out infinite"
                mx="auto"
                filter={{ base: "blur(2px)", md: "blur(1px)" }}
              />
              <Box
                w={{ base: "90px", sm: "110px", md: "160px" }}
                h={{ base: "90px", sm: "110px", md: "160px" }}
                borderRadius="full"
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(15px)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="3px solid rgba(56, 178, 172, 0.4)"
                boxShadow="0 0 40px rgba(56, 178, 172, 0.6), 0 0 80px rgba(56, 178, 172, 0.3), inset 0 0 25px rgba(255, 255, 255, 0.1)"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '-3px',
                  left: '-3px',
                  right: '-3px',
                  bottom: '-3px',
                  background: 'conic-gradient(from 0deg, transparent, rgba(56, 178, 172, 0.8), transparent, rgba(66, 153, 225, 0.8), transparent)',
                  borderRadius: 'full',
                  zIndex: -1,
                  animation: 'spin 4s linear infinite'
                }}
                sx={{
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  },
                  '@keyframes scaleIn': {
                    '0%': { transform: 'scale(0)', opacity: 0 },
                    '50%': { transform: 'scale(1.15)', opacity: 0.8 },
                    '100%': { transform: 'scale(1)', opacity: 1 }
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'translateY(-50%) scale(1)', opacity: 0.6 },
                    '50%': { transform: 'translateY(-50%) scale(1.1)', opacity: 0.8 }
                  },
                  animation: 'scaleIn 1.5s ease-out 0.5s both'
                }}
              >
                <Box
                  as="img"
                  src="https://media.giphy.com/media/fRFK42AiiLDgs/giphy.gif"
                  alt="Stitch Avatar"
                  w={{ base: "65px", sm: "80px", md: "120px" }}
                  h={{ base: "65px", sm: "80px", md: "120px" }}
                  borderRadius="full"
                  objectFit="cover"
                  filter="brightness(1.2) contrast(1.15) saturate(1.1)"
                />
                {/* Sparkle effects - Reduced on mobile */}
                <Box
                  position="absolute"
                  top={{ base: "8px", md: "10px" }}
                  right={{ base: "8px", md: "10px" }}
                  w={{ base: "4px", md: "6px" }}
                  h={{ base: "4px", md: "6px" }}
                  bg="white"
                  borderRadius="full"
                  animation="sparkle 2s ease-in-out infinite"
                  sx={{
                    '@keyframes sparkle': {
                      '0%, 100%': { opacity: 0, transform: 'scale(0)' },
                      '50%': { opacity: 1, transform: 'scale(1)' }
                    }
                  }}
                />
                <Box
                  position="absolute"
                  bottom={{ base: "12px", md: "15px" }}
                  left={{ base: "12px", md: "15px" }}
                  w={{ base: "3px", md: "4px" }}
                  h={{ base: "3px", md: "4px" }}
                  bg="white"
                  borderRadius="full"
                  animation="sparkle 2s ease-in-out infinite 1s"
                  display={{ base: "none", sm: "block" }}
                />
              </Box>
            </Box>
            
            <Box 
              mt={{ base: "35px", sm: "40px", md: "35px" }} 
              px={{ base: 4, sm: 6, md: 8 }}
              maxW="100%"
              overflow="hidden"
            >
              <WordRotationEffect
                staticText="I help non-tech creatives build"
                rotatingWords={["smart websites", "clean sites", "useful tools"]}
                speed={4800}
                fontSize={{ base: "md", sm: "lg", md: "3xl", lg: "4xl" }}
                fontWeight="800"
                bgGradient="linear(135deg, teal.400, blue.500, purple.500)"
                bgClip="text"
                minH={{ base: "50px", sm: "70px", md: "120px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                letterSpacing="-0.01em"
                lineHeight={{ base: 1.4, sm: 1.3, md: 1.2 }}
                textAlign="center"
                maxW="100%"
                wordBreak="break-word"
                overflowWrap="break-word"
                style={{ 
                  fontDisplay: 'swap',
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility'
                }}
              />
            </Box>
          </Box>
          <Text 
            fontSize={{ base: "xs", sm: "sm", md: "lg", lg: "xl" }}
            color={useColorModeValue('gray.600', 'gray.300')}
            mb={{ base: 8, sm: 9, md: 8 }}
            maxW={{ base: "90%", sm: "2xl", md: "3xl" }}
            mx="auto"
            lineHeight={{ base: 1.6, sm: 1.7, md: 1.8 }}
            px={{ base: 4, sm: 6, md: 8 }}
            fontWeight="500"
            textAlign="center"
            wordBreak="break-word"
            overflowWrap="break-word"
          >
            No templates, no agencies, no headaches. Just fast, functional websites that actually work for your business.
          </Text>
          <VStack spacing={{ base: 8, sm: 10, md: 10 }} px={{ base: 6, sm: 8, md: 10 }}>
            <Flex 
              direction={{ base: "column", sm: "row" }}
              gap={{ base: 4, sm: 6, md: 8 }}
              justify="center" 
              align="center"
              w="100%"
              flexWrap="wrap"
            >
              <Button 
                as="a"
                href="#projects"
                size="hero"
                variant="solid"
                rightIcon={<ChevronRightIcon />}
                w={{ base: "full", sm: "auto" }}
                maxW={{ base: "280px", sm: "auto" }}
                minW={{ sm: "180px" }}
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 20px 40px rgba(56, 178, 172, 0.4)'
                }}
              >
                View My Work
              </Button>
              <Button 
                as="a"
                href="#contact"
                size="hero"
                variant="glass"
                w={{ base: "full", sm: "auto" }}
                maxW={{ base: "280px", sm: "auto" }}
                minW={{ sm: "200px" }}
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 20px 40px rgba(56, 178, 172, 0.2)'
                }}
              >
                Let's Work Together
              </Button>
            </Flex>
            <Text 
              fontSize={{ base: "xs", sm: "sm" }}
              color={useColorModeValue('gray.500', 'gray.400')}
              fontStyle="italic"
              textAlign="center"
              mt={{ base: 4, sm: 2, md: 0 }}
            >
              ✨ Currently available for new projects
            </Text>
          </VStack>
        </Box>
      </Section>

      {/* About Section */}
      <Section delay={0.2}>
        <Box py={{ base: 16, sm: 20, md: 24 }} px={{ base: 6, sm: 8, md: 10 }}>
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

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, sm: 8, md: 10 }} mb={{ base: 10, md: 14 }} maxW={{ base: "90%", sm: "100%" }} mx="auto">
            <Box variant="hero-card" position="relative" overflow="hidden">
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
                  fontSize={{ base: "sm", md: "md" }} 
                  lineHeight="tall" 
                  color={useColorModeValue('gray.700', 'gray.300')}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  Spent years handling customer escalations in fintech. Learned that behind every "bug report" is a frustrated human who just wants things to work.
                </Text>
              </VStack>
            </Box>
            
            <Box variant="hero-card" position="relative" overflow="hidden">
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
                  fontSize={{ base: "sm", md: "md" }} 
                  lineHeight="tall" 
                  color={useColorModeValue('gray.700', 'gray.300')}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  Ran my own dropshipping operations, built internal tools for tracking profits, managing suppliers, and automating workflows. Nothing teaches you efficiency like your own money on the line.
                </Text>
              </VStack>
            </Box>
            
            <Box variant="hero-card" position="relative" overflow="hidden">
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
                  Experimenting with tomorrow's tools
                </Text>
                <Text 
                  fontSize={{ base: "sm", md: "md" }} 
                  lineHeight="tall" 
                  color={useColorModeValue('gray.700', 'gray.300')}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  Currently exploring GPT integrations, prompt engineering, and blockchain applications. Not chasing hype — genuinely curious about tools that could solve real problems.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>

          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="center" 
            gap={{ base: 8, md: 12 }}
            p={{ base: 6, sm: 8, md: 10 }}
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderRadius="2xl"
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
            <Box
              position="relative"
              zIndex={1}
              w={{ base: 180, sm: 200, md: 240 }}
              h={{ base: 180, sm: 200, md: 240 }}
              mx="auto"
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
            
            <VStack 
              align={{ base: 'center', md: 'start' }} 
              spacing={4}
              textAlign={{ base: 'center', md: 'left' }}
              position="relative"
              zIndex={1}
            >
              <Text fontWeight="800" fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>Tony Yam</Text>
              <Text 
                color={useColorModeValue('teal.600', 'teal.300')} 
                fontSize="lg"
                fontWeight="600"
              >
                Freelance Web Developer
              </Text>
              <Text 
                color={useColorModeValue('gray.600', 'gray.300')}
                fontSize="md"
                fontWeight="500"
              >
                📍 Kuala Lumpur, Malaysia
              </Text>
              <Text 
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize="sm"
                fontStyle="italic"
                maxW={{ base: "280px", sm: "300px", md: "350px" }}
                px={{ base: 2, md: 0 }}
                wordBreak="break-word"
                overflowWrap="break-word"
              >
                "Building digital solutions that actually solve problems, not just look pretty."
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Section>

      {/* Services Section */}
      <Section delay={0.3}>
        <Box py={{ base: 16, md: 20 }} id="services">
          <Heading 
            as="h2" 
            variant="section-title" 
            textAlign="center"
            mb={8}
          >
            💡 From 0 to Launch — Custom Website Building
          </Heading>
          
          <Text 
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            textAlign="center" 
            mb={12} 
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW={{ base: "90%", sm: "85%", md: "4xl" }}
            mx="auto"
            lineHeight={1.8}
            fontWeight="500"
            px={{ base: 4, sm: 6, md: 0 }}
            wordBreak="break-word"
            overflowWrap="break-word"
          >
            I help solo creators and business owners launch fast, functional, good-looking websites — without relying on expensive agencies or rigid templates.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, sm: 5, md: 6 }} mb={{ base: 6, md: 8 }}>
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
            p={8} 
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
              ✨ If you have the idea, I'll help you shape it, ship it, and own it.
            </Text>
          </Box>
        </Box>
      </Section>

      {/* Projects Section */}
      <Section delay={0.4}>
        <Box py={{ base: 16, md: 20 }} id="projects">
          <Heading 
            as="h2" 
            variant="section-title" 
            textAlign="center"
            mb={8}
          >
            💼 Projects
          </Heading>
          <Text 
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            textAlign="center" 
            mb={12} 
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW={{ base: "90%", sm: "85%", md: "3xl" }}
            mx="auto"
            lineHeight={1.8}
            fontWeight="500"
            px={{ base: 4, sm: 6, md: 0 }}
            wordBreak="break-word"
            overflowWrap="break-word"
          >
            A curated selection of things I've built, broken, and learned from.
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, sm: 10, md: 8 }} mb={{ base: 12, sm: 14, md: 12 }}>
            <Box 
              variant="hero-card"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(66, 153, 225, 0.3)',
                _before: {
                  height: '8px'
                },
                _after: {
                  opacity: 0.25
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, blue.400, blue.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                bg: 'linear-gradient(135deg, blue.400, blue.600)',
                opacity: 0.1,
                borderRadius: '0 0 0 60px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="md" mb={4} color="blue.600" fontWeight="700">
                📊 Profit Tracker Dashboard
              </Heading>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4} fontWeight="600">
                Type: Internal tool | Built for: My dropshipping ops (2022–2024)
              </Text>
              <Text 
                fontSize={{ base: "sm", md: "md" }} 
                lineHeight={{ base: "1.7", md: "1.6" }} 
                mb={4} 
                color={useColorModeValue('gray.700', 'gray.300')}
                wordBreak="break-word"
                overflowWrap="break-word"
              >
                A private dashboard to calculate product ROI and campaign performance across multiple suppliers.
              </Text>
              <VStack align="start" spacing={3} fontSize={{ base: "xs", md: "sm" }}>
                <Text 
                  color={useColorModeValue('gray.600', 'gray.300')}
                  lineHeight={{ base: "1.6", md: "1.5" }}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  • Automated daily sales tracking via Google Sheets + App Script
                </Text>
                <Text 
                  color={useColorModeValue('gray.600', 'gray.300')}
                  lineHeight={{ base: "1.6", md: "1.5" }}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  • Visualized COGS vs marketing spend, per SKU
                </Text>
                <Text 
                  color={useColorModeValue('gray.600', 'gray.300')}
                  lineHeight={{ base: "1.6", md: "1.5" }}
                  wordBreak="break-word"
                  overflowWrap="break-word"
                >
                  • Helped me spot underperforming campaigns 3x faster
                </Text>
                <Box 
                  p={3} 
                  bg={useColorModeValue('blue.50', 'blue.900')} 
                  borderRadius="md" 
                  mt={2}
                  borderLeft="4px solid"
                  borderColor="blue.400"
                >
                  <Text fontWeight="700" color={useColorModeValue('blue.700', 'blue.300')}>
                    Impact: Tracked $50,000+ in total transactions and improved decision-making speed by 60%
                  </Text>
                </Box>
              </VStack>
              
              {/* Hover Info Overlay */}
              <Box
                className="hover-info"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(66, 153, 225, 0.95), rgba(66, 153, 225, 0.8))"
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
                <Text fontSize="xs" mb={2}>Google Sheets API • App Script • Data Visualization</Text>
                <Button size="xs" variant="outline" colorScheme="whiteAlpha" mt={2}>
                  View Project →
                </Button>
              </Box>
            </Box>
            
            <Box 
              variant="hero-card"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(56, 178, 172, 0.3)',
                _before: {
                  height: '8px'
                },
                _after: {
                  opacity: 0.25
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, teal.400, teal.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                bg: 'linear-gradient(135deg, teal.400, teal.600)',
                opacity: 0.1,
                borderRadius: '0 0 0 60px',
                transition: 'opacity 0.4s ease'
              }}
            >
              {/* Featured Tag */}
              <Box
                position="absolute"
                top="16px"
                right="16px"
                bg="linear-gradient(135deg, teal.400, teal.600)"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                zIndex={2}
                boxShadow="0 4px 12px rgba(56, 178, 172, 0.3)"
              >
                ⭐ Featured
              </Box>
              <Heading as="h3" size="md" mb={4} color="teal.600" fontWeight="700">
                🔧 Portfolio Site
              </Heading>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4} fontWeight="600">
                Tech stack: Next.js, React, Chakra UI, Three.js
              </Text>
              <Text fontSize="md" lineHeight="tall" mb={4} color={useColorModeValue('gray.700', 'gray.300')}>
                This site — built as both a learning journey and a proof of capability.
              </Text>
              <VStack align="start" spacing={2} fontSize="sm">
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Implemented rotating 3D dog using Three.js</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Refactored layout and animation logic for performance</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Broke the whole build once (twice actually), and fixed it from scratch</Text>
                <Box 
                  p={3} 
                  bg={useColorModeValue('teal.50', 'teal.900')} 
                  borderRadius="md" 
                  mt={2}
                  borderLeft="4px solid"
                  borderColor="teal.400"
                >
                  <Text fontStyle="italic" color={useColorModeValue('teal.700', 'teal.300')} fontWeight="600">
                    Lessons: version control, visual rhythm, responsive UI, and when to stop tweaking 😅
                  </Text>
                </Box>
              </VStack>
              
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
                  You're viewing it! 🎉
                </Button>
              </Box>
            </Box>
            
            <Box 
              variant="hero-card"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(159, 122, 234, 0.3)',
                _before: {
                  height: '8px'
                },
                _after: {
                  opacity: 0.25
                },
                '& .hover-info': {
                  opacity: 1,
                  transform: 'translateY(0)'
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, purple.400, purple.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                bg: 'linear-gradient(135deg, purple.400, purple.600)',
                opacity: 0.1,
                borderRadius: '0 0 0 60px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="md" mb={4} color="purple.600" fontWeight="700">
                🤖 GPT-Powered Support Flow
              </Heading>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4} fontWeight="600">
                Type: Workflow experiment | Built for: Fintech role @ DeCard (2025)
              </Text>
              <Text fontSize="md" lineHeight="tall" mb={4} color={useColorModeValue('gray.700', 'gray.300')}>
                Tested how GPT prompts can streamline tier-1 customer support tasks.
              </Text>
              <VStack align="start" spacing={2} fontSize="sm">
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Trained GPT-4 to handle refund, OTP, and KYC queries</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Reduced response time from 3 minutes to &lt;1 minute</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Simulated sentiment-based prioritization in Telegram Bot</Text>
                <Box 
                  p={3} 
                  bg={useColorModeValue('purple.50', 'purple.900')} 
                  borderRadius="md" 
                  mt={2}
                  borderLeft="4px solid"
                  borderColor="purple.400"
                >
                  <Text fontWeight="700" color={useColorModeValue('purple.700', 'purple.300')}>
                    Result: Helped cut first-response time by ~60%, used internally for support triage
                  </Text>
                </Box>
              </VStack>
              
              {/* Hover Info Overlay */}
              <Box
                className="hover-info"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(159, 122, 234, 0.95), rgba(159, 122, 234, 0.8))"
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
                <Text fontSize="xs" mb={2}>GPT-4 API • Telegram Bot • Python • Sentiment Analysis</Text>
                <Button size="xs" variant="outline" colorScheme="whiteAlpha" mt={2}>
                  View Workflow →
                </Button>
              </Box>
            </Box>
            
            <Box 
              variant="hero-card"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(236, 72, 153, 0.3)',
                _before: {
                  height: '8px'
                },
                _after: {
                  opacity: 0.25
                },
                '& .hover-info': {
                  opacity: 1,
                  transform: 'translateY(0)'
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, pink.400, pink.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                bg: 'linear-gradient(135deg, pink.400, pink.600)',
                opacity: 0.1,
                borderRadius: '0 0 0 60px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="md" mb={4} color="pink.600" fontWeight="700">
                🎥 Short-Form AI Co-Pilot
              </Heading>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4} fontWeight="600">
                Type: Side tool | Built for: Content creator friends (2024)
              </Text>
              <Text fontSize="md" lineHeight="tall" mb={4} color={useColorModeValue('gray.700', 'gray.300')}>
                Prototyped to help friends batch-edit & script TikTok/IG Reels faster using ChatGPT + templates.
              </Text>
              <VStack align="start" spacing={2} fontSize="sm">
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Integrated ChatGPT API for automated script generation</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Created reusable templates for different content types</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Added batch processing for multiple video concepts</Text>
                <Box 
                  p={3} 
                  bg={useColorModeValue('pink.50', 'pink.900')} 
                  borderRadius="md" 
                  mt={2}
                  borderLeft="4px solid"
                  borderColor="pink.400"
                >
                  <Text fontStyle="italic" color={useColorModeValue('pink.700', 'pink.300')} fontWeight="600">
                    Result: Reduced content planning time from hours to minutes for creator workflows
                  </Text>
                </Box>
              </VStack>
              
              {/* Hover Info Overlay */}
              <Box
                className="hover-info"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(236, 72, 153, 0.95), rgba(236, 72, 153, 0.8))"
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
                <Text fontSize="xs" mb={2}>ChatGPT API • JavaScript • Template Engine • Batch Processing</Text>
                <Button size="xs" variant="outline" colorScheme="whiteAlpha" mt={2}>
                  View Tool →
                </Button>
              </Box>
            </Box>
            
            <Box 
              variant="hero-card"
              position="relative"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(251, 146, 60, 0.3)',
                _before: {
                  height: '8px'
                },
                _after: {
                  opacity: 0.25
                },
                '& .hover-info': {
                  opacity: 1,
                  transform: 'translateY(0)'
                }
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, orange.400, orange.600)',
                zIndex: 1,
                transition: 'height 0.4s ease'
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                bg: 'linear-gradient(135deg, orange.400, orange.600)',
                opacity: 0.1,
                borderRadius: '0 0 0 60px',
                transition: 'opacity 0.4s ease'
              }}
            >
              <Heading as="h3" size="md" mb={4} color="orange.600" fontWeight="700">
                📦 Mini Prompt Tool
              </Heading>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4} fontWeight="600">
                Type: Side utility | Built for: Personal workflow improvement (2024)
              </Text>
              <Text fontSize="md" lineHeight="tall" mb={4} color={useColorModeValue('gray.700', 'gray.300')}>
                A lightweight browser tool to organize, clean, and test GPT prompts.
              </Text>
              <VStack align="start" spacing={2} fontSize="sm">
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Grouped reusable prompt templates for different support cases</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Added clipboard export and quick-copy buttons</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Used internally to onboard new team members with prompt libraries</Text>
                <Box 
                  p={3} 
                  bg={useColorModeValue('orange.50', 'orange.900')} 
                  borderRadius="md" 
                  mt={2}
                  borderLeft="4px solid"
                  borderColor="orange.400"
                >
                  <Text fontStyle="italic" color={useColorModeValue('orange.700', 'orange.300')} fontWeight="600">
                    Why: To standardize prompt testing and knowledge sharing across team
                  </Text>
                </Box>
              </VStack>
              
              {/* Hover Info Overlay */}
              <Box
                className="hover-info"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(251, 146, 60, 0.95), rgba(251, 146, 60, 0.8))"
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
                <Text fontSize="xs" mb={2}>JavaScript • Browser APIs • Clipboard API • Local Storage</Text>
                <Button size="xs" variant="outline" colorScheme="whiteAlpha" mt={2}>
                  View Utility →
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
          
          <Box textAlign="center" mb={4}>
            <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
              Want a walkthrough of any project? DM me — I'd be happy to share a Loom or repo.
            </Text>
          </Box>
          
          <Box textAlign="center" mb={12}>
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
        <Box py={16} id="contact">
          <Box 
            textAlign="center" 
            p={12} 
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
                size="2xl" 
                mb={6}
                bgGradient="linear(to-r, teal.400, blue.500)"
                bgClip="text"
                fontWeight="800"
              >
                Want to connect?
              </Heading>
              
              <Text 
                fontSize="xl" 
                mb={8} 
                color={useColorModeValue('gray.600', 'gray.300')} 
                maxW="3xl" 
                mx="auto"
                lineHeight="tall"
                fontWeight="500"
              >
                If you're working on something interesting, need a second pair of eyes on a project, or just want to chat about building things — I'm always up for a conversation.
              </Text>
              
              <VStack spacing={6} mb={8}>
                <Text 
                  fontSize="lg" 
                  color={useColorModeValue('gray.500', 'gray.400')}
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
                      boxShadow: '0 20px 40px rgba(56, 178, 172, 0.4)'
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
                      boxShadow: '0 20px 40px rgba(56, 178, 172, 0.2)'
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    GitHub
                  </Button>
                </Flex>
              </VStack>
              
              <Text 
                fontSize="md" 
                color={useColorModeValue('gray.500', 'gray.400')} 
                fontStyle="italic"
                fontWeight="500"
              >
                ✨ Usually respond within a day or two.
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Social Links */}
      <Section delay={0.6}>
        <Box py={12} textAlign="center">
          <Text 
            mb={6} 
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize="lg"
            fontWeight="600"
          >
            Connect with me
          </Text>
          <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 4, sm: 6 }} justify="center" align="center" flexWrap="wrap">
            <Button 
              as="a"
              href="https://github.com/mrtonymu"
              target="_blank"
              rel="noopener noreferrer"
              variant="glass"
              size="mobile"
              leftIcon={<IoLogoGithub />}
              _hover={{
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 15px 30px rgba(56, 178, 172, 0.2)'
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              @MrTonyMu
            </Button>
            <Button 
              as="a"
              href="https://instagram.com/mrtonyyam"
              target="_blank"
              rel="noopener noreferrer"
              variant="glass"
              size="mobile"
              leftIcon={<IoLogoInstagram />}
              _hover={{
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 15px 30px rgba(56, 178, 172, 0.2)'
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              @MrTonyYam
            </Button>
          </Flex>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
