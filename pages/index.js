import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
  VStack,
  HStack,
  Icon,
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

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      {/* Hero Section */}
      <Section delay={0.1}>
        <Box 
          textAlign="center" 
          py={{ base: 16, md: 24 }}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            bg: 'linear-gradient(90deg, teal.400, blue.400)',
            borderRadius: 'full',
            opacity: 0.6
          }}
        >
          <Box mb={12}>
            <WordRotationEffect
              staticText="I help non-tech creatives build"
              rotatingWords={["smart websites", "clean sites", "useful tools"]}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="800"
              bgGradient="linear(135deg, teal.400, blue.500, purple.500)"
              bgClip="text"
              minH={{ base: "120px", md: "140px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              letterSpacing="-0.02em"
              style={{ 
                fontDisplay: 'swap',
                WebkitFontSmoothing: 'antialiased',
                textRendering: 'optimizeLegibility'
              }}
            />
          </Box>
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue('gray.600', 'gray.300')}
            mb={12}
            maxW="3xl"
            mx="auto"
            lineHeight={1.8}
            px={6}
            fontWeight="500"
          >
            No templates, no agencies, no headaches. Just fast, functional websites that actually work for your business.
          </Text>
          <VStack spacing={6}>
            <HStack spacing={6} justify="center" flexWrap="wrap">
              <NextLink href="#projects" passHref>
                <Button 
                  size="lg" 
                  colorScheme="teal" 
                  rightIcon={<ChevronRightIcon />}
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="600"
                >
                  View My Work
                </Button>
              </NextLink>
              <NextLink href="#contact" passHref>
                <Button 
                  size="lg" 
                  variant="outline" 
                  colorScheme="teal"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="600"
                >
                  Let's Work Together
                </Button>
              </NextLink>
            </HStack>
            <Text 
              fontSize="sm" 
              color={useColorModeValue('gray.500', 'gray.400')}
              fontStyle="italic"
            >
              ✨ Currently available for new projects
            </Text>
          </VStack>
        </Box>
      </Section>

      {/* About Section */}
      <Section delay={0.2}>
        <Box py={{ base: 16, md: 20 }}>
          <Heading 
            as="h2" 
            variant="section-title" 
            textAlign="center"
            mb={12}
          >
            A bit about me
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
            <Box variant="card" position="relative" overflow="hidden">
              <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="4px"
                bg="linear-gradient(90deg, teal.400, teal.500)"
              />
              <Heading as="h3" size="md" mb={4} color="teal.500" fontWeight="700">
                Who I am
              </Heading>
              <Text fontSize="md" lineHeight="tall" color={useColorModeValue('gray.700', 'gray.300')}>
                I've spent years in customer support, dropshipping, and fintech. Now I build websites that solve real problems — because I've been on both sides of "this doesn't work."
              </Text>
            </Box>
            
            <Box variant="card" position="relative" overflow="hidden">
              <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="4px"
                bg="linear-gradient(90deg, blue.400, blue.500)"
              />
              <Heading as="h3" size="md" mb={4} color="blue.500" fontWeight="700">
                Why this site exists
              </Heading>
              <Text fontSize="md" lineHeight="tall" color={useColorModeValue('gray.700', 'gray.300')}>
                This isn't a client-hunting page. It's a way to show how I think about problems, build solutions, and communicate ideas. Consider it a working demo.
              </Text>
            </Box>
            
            <Box variant="card" position="relative" overflow="hidden">
              <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="4px"
                bg="linear-gradient(90deg, purple.400, purple.500)"
              />
              <Heading as="h3" size="md" mb={4} color="purple.500" fontWeight="700">
                What this means for you
              </Heading>
              <Text fontSize="md" lineHeight="tall" color={useColorModeValue('gray.700', 'gray.300')}>
                If you need something built, I probably understand your frustrations. I focus on making things work, not just look pretty.
              </Text>
            </Box>
          </SimpleGrid>

          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="center" 
            gap={10}
            p={8}
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
              borderColor={useColorModeValue('teal.200', 'teal.400')}
              borderWidth={3}
              borderStyle="solid"
              w={{ base: 140, md: 160 }}
              h={{ base: 140, md: 160 }}
              borderRadius="full"
              overflow="hidden"
              mx="auto"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="gray.100"
              boxShadow="0 8px 25px rgba(56, 178, 172, 0.2)"
              transition="all 0.3s ease"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 12px 35px rgba(56, 178, 172, 0.3)'
              }}
            >
              <Image
                src="/images/Tonymumu.jpg"
                alt="Tony's profile image"
                width={160}
                height={160}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
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
                maxW="300px"
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
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center" 
            mb={12} 
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="4xl"
            mx="auto"
            lineHeight={1.8}
            fontWeight="500"
          >
            I help solo creators and business owners launch fast, functional, good-looking websites — without relying on expensive agencies or rigid templates.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
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
            variant="glass"
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
              opacity: 0.1,
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
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center" 
            mb={12} 
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="3xl"
            mx="auto"
            lineHeight={1.8}
            fontWeight="500"
          >
            A curated selection of things I've built, broken, and learned from.
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
            <Box 
              variant="card"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, blue.400, blue.600)',
                zIndex: 1
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
                borderRadius: '0 0 0 60px'
              }}
            >
              <Heading as="h3" size="md" mb={4} color="blue.600" fontWeight="700">
                📊 Profit Tracker Dashboard
              </Heading>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4} fontWeight="600">
                Type: Internal tool | Built for: My dropshipping ops (2022–2024)
              </Text>
              <Text fontSize="md" lineHeight="tall" mb={4} color={useColorModeValue('gray.700', 'gray.300')}>
                A private dashboard to calculate product ROI and campaign performance across multiple suppliers.
              </Text>
              <VStack align="start" spacing={2} fontSize="sm">
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Automated daily sales tracking via Google Sheets + App Script</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Visualized COGS vs marketing spend, per SKU</Text>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>• Helped me spot underperforming campaigns 3x faster</Text>
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
            </Box>
            
            <Box 
              variant="card"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, teal.400, teal.600)',
                zIndex: 1
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
                borderRadius: '0 0 0 60px'
              }}
            >
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
            </Box>
            
            <Box 
              variant="card"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, purple.400, purple.600)',
                zIndex: 1
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
                borderRadius: '0 0 0 60px'
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
            </Box>
            
            <Box 
              variant="card"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, pink.400, pink.600)',
                zIndex: 1
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
                borderRadius: '0 0 0 60px'
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
            </Box>
            
            <Box 
              variant="card"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                bg: 'linear-gradient(90deg, orange.400, orange.600)',
                zIndex: 1
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
                borderRadius: '0 0 0 60px'
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
            </Box>
          </SimpleGrid>
          
          <Box textAlign="center" mb={4}>
            <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
              Want a walkthrough of any project? DM me — I'd be happy to share a Loom or repo.
            </Text>
          </Box>
          
          <Box textAlign="center" mb={12}>
            <NextLink href="/works" passHref>
              <Button 
                colorScheme="teal" 
                rightIcon={<ChevronRightIcon />}
                size="lg"
                _hover={{ 
                  transform: 'translateY(-2px)', 
                  boxShadow: 'xl'
                }}
                transition="all 0.3s ease"
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
            bg={useColorModeValue('blue.50', 'blue.900')} 
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
              bg: 'linear-gradient(135deg, teal.400, blue.500)',
              opacity: 0.05,
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
                <HStack spacing={8} justify="center" flexWrap="wrap">
                  <Link href="https://instagram.com/mrtonyyam" isExternal>
                    <Button 
                      size="lg" 
                      colorScheme="blue" 
                      leftIcon={<IoLogoInstagram />}
                      variant="solid"
                      px={8}
                      py={6}
                      fontSize="md"
                      fontWeight="600"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: 'xl'
                      }}
                      transition="all 0.3s ease"
                    >
                      Instagram DM
                    </Button>
                  </Link>
                  <Link href="https://github.com/mrtonymu" isExternal>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      colorScheme="blue"
                      leftIcon={<IoLogoGithub />}
                      px={8}
                      py={6}
                      fontSize="md"
                      fontWeight="600"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: 'xl',
                        bg: useColorModeValue('blue.500', 'blue.400'),
                        color: 'white'
                      }}
                      transition="all 0.3s ease"
                    >
                      GitHub
                    </Button>
                  </Link>
                </HStack>
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
          <HStack spacing={6} justify="center" flexWrap="wrap">
            <Link href="https://github.com/mrtonymu" isExternal>
              <Button 
                variant="ghost" 
                colorScheme="teal" 
                leftIcon={<IoLogoGithub />}
                size="lg"
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: useColorModeValue('teal.50', 'teal.900')
                }}
                transition="all 0.3s ease"
              >
                @MrTonyMu
              </Button>
            </Link>
            <Link href="https://instagram.com/mrtonyyam" isExternal>
              <Button 
                variant="ghost" 
                colorScheme="teal" 
                leftIcon={<IoLogoInstagram />}
                size="lg"
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: useColorModeValue('teal.50', 'teal.900')
                }}
                transition="all 0.3s ease"
              >
                @MrTonyYam
              </Button>
            </Link>
          </HStack>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
