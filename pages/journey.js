import {
  Container,
  Badge,
  ListItem,
  UnorderedList,
  Heading,
  Box,
  Text,
  Divider,
  Button,
  Link,
  useColorModeValue,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Title } from '../components/work';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

const Journey = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Layout title='Journey'>
      <NextSeo
        title='How I Built This Portfolio | Tony Yam'
        description='The story behind building this portfolio - from first idea to final launch. A reflection and case study on the development process.'
        canonical='https://tonymumu.vercel.app/journey'
        openGraph={{
          title: 'How I Built This Portfolio | Tony Yam',
          description:
            'The story behind building this portfolio - from first idea to final launch.',
          url: 'https://tonymumu.vercel.app/journey',
          type: 'article',
        }}
      />

      <Container maxW='container.md' pt={20} px={{ base: 4, md: 6 }}>
        <Box mb={6} scrollMarginTop='80px'>
          <Button
            as={NextLink}
            href='/'
            leftIcon={<ChevronLeftIcon />}
            variant='ghost'
            colorScheme='teal'
          >
            Back to Home
          </Button>
        </Box>

        <VStack spacing={{ base: 8, md: 12 }} align='stretch'>
          <Box textAlign='center'>
            <Title>
              🧭 My Journey <Badge>Career Story</Badge>
            </Title>
          </Box>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW='2xl'
            mx='auto'
            lineHeight='1.6'
            textAlign='center'
          >
            I didn&apos;t start out as a developer — I started out picking up
            phones. Here&apos;s how years of fragmented experience shaped who I
            am today.
          </Text>
        </VStack>

        <Section delay={0.1}>
          <Box
            bg={useColorModeValue(
              'rgba(56, 178, 172, 0.05)',
              'rgba(56, 178, 172, 0.1)'
            )}
            borderRadius='2xl'
            p={{ base: 6, md: 8 }}
            border='1px solid'
            borderColor={useColorModeValue(
              'rgba(56, 178, 172, 0.2)',
              'rgba(56, 178, 172, 0.3)'
            )}
            position='relative'
            overflow='hidden'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              bg: 'linear-gradient(90deg, #38b2ac, #4299e1)',
              borderTopRadius: '2xl',
            }}
          >
            <VStack spacing={{ base: 4, md: 6 }} align='stretch'>
              <Heading
                as='h3'
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight='700'
                color={useColorModeValue('gray.800', 'white')}
                letterSpacing='-0.01em'
                lineHeight='1.2'
              >
                📞 Phase 1: Support Floors (2017–2020)
              </Heading>

              <Stack spacing={{ base: 4, md: 5 }}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  In fast-paced teams at Grab, Agoda, and Microsoft, I fielded
                  100+ issues daily across three languages. No playbook. Just
                  instinct, caffeine, and a stubborn belief that things could —
                  and should — be done better.
                </Text>

                <Box
                  bg={useColorModeValue('blue.50', 'blue.900')}
                  p={{ base: 4, md: 6 }}
                  borderRadius='xl'
                  borderLeft='4px solid'
                  borderColor='blue.400'
                  position='relative'
                >
                  <Text
                    fontStyle='italic'
                    fontWeight='600'
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight='1.6'
                    color={useColorModeValue('blue.800', 'blue.200')}
                  >
                    Scripts can&apos;t save you. Structure and empathy can.
                  </Text>
                </Box>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  What I learned on those support floors wasn&apos;t just
                  endurance. It was listening. Pattern recognition. The skill of
                  clarifying chaos. And most importantly — the itch to fix
                  what&apos;s broken.
                </Text>
              </Stack>
            </VStack>
          </Box>
        </Section>

        <Divider my={6} />

        <Section delay={0.2}>
          <Box
            bg={useColorModeValue(
              'rgba(72, 187, 120, 0.05)',
              'rgba(72, 187, 120, 0.1)'
            )}
            borderRadius='2xl'
            p={{ base: 6, md: 8 }}
            border='1px solid'
            borderColor={useColorModeValue(
              'rgba(72, 187, 120, 0.2)',
              'rgba(72, 187, 120, 0.3)'
            )}
            position='relative'
            overflow='hidden'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              bg: 'linear-gradient(90deg, #48bb78, #38b2ac)',
              borderTopRadius: '2xl',
            }}
          >
            <VStack spacing={{ base: 4, md: 6 }} align='stretch'>
              <Heading
                as='h3'
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight='700'
                color={useColorModeValue('gray.800', 'white')}
                letterSpacing='-0.01em'
                lineHeight='1.2'
              >
                🚚 Phase 2: E-commerce Ops (2020–2025)
              </Heading>

              <Stack spacing={{ base: 4, md: 5 }}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  In 2020, I jumped into e-commerce — not as a store owner, but
                  as a partner, builder, and content strategist.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                  mb={2}
                >
                  I helped grow a brand from the inside:
                </Text>

                <Box pl={{ base: 4, md: 6 }}>
                  <UnorderedList spacing={2} styleType='none'>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'green.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Crafted scroll-stopping copy
                    </ListItem>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'green.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Mastered the golden 3 seconds of short video
                    </ListItem>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'green.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Understood the difference between 私域 and 公域
                    </ListItem>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'green.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Learned to run ads that convert instead of burn
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  Somewhere along the way, I fell in love with wine. Not just as
                  a product — but as a story. I explored new world vs old world,
                  oak vs stainless, and realized: selling well means
                  understanding deeply.
                </Text>

                <Box
                  bg={useColorModeValue('green.50', 'green.900')}
                  p={{ base: 4, md: 6 }}
                  borderRadius='xl'
                  borderLeft='4px solid'
                  borderColor='green.400'
                  position='relative'
                >
                  <Text
                    fontStyle='italic'
                    fontWeight='600'
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight='1.6'
                    color={useColorModeValue('green.800', 'green.200')}
                  >
                    E-commerce didn&apos;t just teach me marketing — it taught
                    me ownership.
                  </Text>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Section>

        <Box my={{ base: 8, md: 12 }}>
          <Divider borderColor={useColorModeValue('gray.200', 'gray.600')} />
        </Box>

        <Section delay={0.3}>
          <Box
            bg={useColorModeValue(
              'rgba(159, 122, 234, 0.05)',
              'rgba(159, 122, 234, 0.1)'
            )}
            borderRadius='2xl'
            p={{ base: 6, md: 8 }}
            border='1px solid'
            borderColor={useColorModeValue(
              'rgba(159, 122, 234, 0.2)',
              'rgba(159, 122, 234, 0.3)'
            )}
            position='relative'
            overflow='hidden'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              bg: 'linear-gradient(90deg, #9f7aea, #667eea)',
              borderTopRadius: '2xl',
            }}
          >
            <VStack spacing={{ base: 4, md: 6 }} align='stretch'>
              <Heading
                as='h3'
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight='700'
                color={useColorModeValue('gray.800', 'white')}
                letterSpacing='-0.01em'
                lineHeight='1.2'
              >
                🤖 Phase 3: Automation & HeroCraft (2025–Present)
              </Heading>

              <Stack spacing={{ base: 4, md: 5 }}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  That venture didn&apos;t scale. And I burned out — broke,
                  humbled, and hungry for clarity.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  So I went back to where I started: customer service. But this
                  time, at a fintech bank — and this time, with tools.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  I used ChatGPT to completely rewrite my workflow. Standardized
                  reply flows. Cleaned up SOPs. Cut repetitive replies by 60%. I
                  wasn&apos;t just handling tickets — I was quietly rebuilding
                  internal systems from the ground up.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  Still, I knew I didn&apos;t want to stay in maintenance mode.
                  I wanted to build. So I started sketching out an idea:
                </Text>

                <Box
                  bg={useColorModeValue('purple.50', 'purple.900')}
                  p={{ base: 4, md: 6 }}
                  borderRadius='xl'
                  border='2px solid'
                  borderColor={useColorModeValue('purple.200', 'purple.600')}
                  position='relative'
                >
                  <VStack spacing={3} align='stretch'>
                    <Text
                      fontWeight='700'
                      fontSize={{ base: 'lg', md: 'xl' }}
                      color={useColorModeValue('purple.800', 'purple.200')}
                    >
                      HeroCraft
                    </Text>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('purple.700', 'purple.300')}
                    >
                      An AI copilot for content creators who want to write
                      faster, brainstorm better, and ship without
                      second-guessing.
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      fontStyle='italic'
                      color={useColorModeValue('purple.600', 'purple.400')}
                    >
                      It&apos;s raw. It&apos;s early. But it&apos;s real.
                    </Text>
                    <Link
                      href='#'
                      color={useColorModeValue('purple.600', 'purple.400')}
                      fontWeight='600'
                      fontSize={{ base: 'md', md: 'lg' }}
                      _hover={{
                        color: useColorModeValue('purple.800', 'purple.200'),
                        textDecoration: 'none',
                      }}
                    >
                      👉 Explore the HeroCraft prototype — feedback always
                      welcome.
                    </Link>
                  </VStack>
                </Box>

                <Box
                  bg={useColorModeValue('purple.50', 'purple.900')}
                  p={{ base: 4, md: 6 }}
                  borderRadius='xl'
                  borderLeft='4px solid'
                  borderColor='purple.400'
                  position='relative'
                >
                  <Text
                    fontStyle='italic'
                    fontWeight='600'
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight='1.6'
                    color={useColorModeValue('purple.800', 'purple.200')}
                    textAlign='center'
                  >
                    A man can be destroyed but not defeated.
                  </Text>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Section>

        <Divider my={6} />

        <Box my={{ base: 8, md: 12 }}>
          <Divider borderColor={useColorModeValue('gray.200', 'gray.600')} />
        </Box>

        <Section delay={0.4}>
          <Box
            bg={useColorModeValue(
              'rgba(237, 137, 54, 0.05)',
              'rgba(237, 137, 54, 0.1)'
            )}
            borderRadius='2xl'
            p={{ base: 6, md: 8 }}
            border='1px solid'
            borderColor={useColorModeValue(
              'rgba(237, 137, 54, 0.2)',
              'rgba(237, 137, 54, 0.3)'
            )}
            position='relative'
            overflow='hidden'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              bg: 'linear-gradient(90deg, #ed8936, #f56500)',
              borderTopRadius: '2xl',
            }}
          >
            <VStack spacing={{ base: 4, md: 6 }} align='stretch'>
              <Heading
                as='h3'
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight='700'
                color={useColorModeValue('gray.800', 'white')}
                letterSpacing='-0.01em'
                lineHeight='1.2'
              >
                🎨 Phase 4: Building This Portfolio (2021–2025)
              </Heading>

              <Stack spacing={{ base: 4, md: 5 }}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  This site isn&apos;t a vanity project. It&apos;s a timestamp —
                  a checkpoint for who I&apos;ve been, what I&apos;ve tried, and
                  where I&apos;m going.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                  mb={2}
                >
                  I didn&apos;t want a flashy dev template. I wanted something
                  that reflected how I build:
                </Text>

                <Box pl={{ base: 4, md: 6 }}>
                  <UnorderedList spacing={2} styleType='none'>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'orange.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Clear layout
                    </ListItem>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'orange.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Honest content
                    </ListItem>
                    <ListItem
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight='1.6'
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _before={{
                        content: '"✓"',
                        color: 'orange.500',
                        fontWeight: 'bold',
                        mr: 3,
                      }}
                    >
                      Responsive across all devices
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box mt={{ base: 6, md: 8 }}>
                  <Heading
                    as='h4'
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight='600'
                    color={useColorModeValue('orange.700', 'orange.300')}
                    mb={{ base: 4, md: 5 }}
                    letterSpacing='-0.01em'
                  >
                    📱 Mobile First (Literally)
                  </Heading>

                  <Stack spacing={{ base: 4, md: 5 }}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight={{ base: '1.6', md: '1.7' }}
                      color={useColorModeValue('gray.700', 'gray.200')}
                    >
                      My first version looked decent on desktop… but mobile was
                      a mess.
                    </Text>

                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight={{ base: '1.6', md: '1.7' }}
                      color={useColorModeValue('gray.700', 'gray.200')}
                      mb={2}
                    >
                      Feedback rolled in:
                    </Text>

                    <Box
                      bg={useColorModeValue('red.50', 'red.900')}
                      p={{ base: 4, md: 5 }}
                      borderRadius='lg'
                      borderLeft='3px solid'
                      borderColor='red.400'
                    >
                      <UnorderedList spacing={2} styleType='none'>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('red.700', 'red.200')}
                          _before={{
                            content: '"❌"',
                            mr: 3,
                          }}
                        >
                          &quot;Text is overflowing&quot;
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('red.700', 'red.200')}
                          _before={{
                            content: '"❌"',
                            mr: 3,
                          }}
                        >
                          &quot;Images don&apos;t align&quot;
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('red.700', 'red.200')}
                          _before={{
                            content: '"❌"',
                            mr: 3,
                          }}
                        >
                          &quot;Tapping FAQ is painful&quot;
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight={{ base: '1.6', md: '1.7' }}
                      color={useColorModeValue('gray.700', 'gray.200')}
                      mb={2}
                    >
                      So I worked with VSCode & Claude AI and fixed it the right
                      way:
                    </Text>

                    <Box
                      bg={useColorModeValue('green.50', 'green.900')}
                      p={{ base: 4, md: 5 }}
                      borderRadius='lg'
                      borderLeft='3px solid'
                      borderColor='green.400'
                    >
                      <UnorderedList spacing={2} styleType='none'>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('green.700', 'green.200')}
                          _before={{
                            content: '"🔤"',
                            mr: 3,
                          }}
                        >
                          Responsive typography & spacing
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('green.700', 'green.200')}
                          _before={{
                            content: '"🤖"',
                            mr: 3,
                          }}
                        >
                          Framer Motion transitions
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('green.700', 'green.200')}
                          _before={{
                            content: '"🧩"',
                            mr: 3,
                          }}
                        >
                          FAQ redesign for smaller screens
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('green.700', 'green.200')}
                          _before={{
                            content: '"🧠"',
                            mr: 3,
                          }}
                        >
                          Simplified hierarchy and color control
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Box
                      bg={useColorModeValue('orange.50', 'orange.900')}
                      p={{ base: 4, md: 6 }}
                      borderRadius='xl'
                      borderLeft='4px solid'
                      borderColor='orange.400'
                      position='relative'
                    >
                      <Text
                        fontStyle='italic'
                        fontWeight='600'
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight='1.6'
                        color={useColorModeValue('orange.800', 'orange.200')}
                      >
                        Now it works like it should — not shrunk, but
                        thoughtful.
                      </Text>
                    </Box>
                  </Stack>
                </Box>

                <Box mt={{ base: 6, md: 8 }}>
                  <Heading
                    as='h4'
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight='600'
                    color={useColorModeValue('orange.700', 'orange.300')}
                    mb={{ base: 4, md: 5 }}
                    letterSpacing='-0.01em'
                  >
                    💻 Then the Desktop Broke
                  </Heading>

                  <Stack spacing={{ base: 4, md: 5 }}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight={{ base: '1.6', md: '1.7' }}
                      color={useColorModeValue('gray.700', 'gray.200')}
                      mb={2}
                    >
                      Fixing mobile broke the desktop layout:
                    </Text>

                    <Box
                      bg={useColorModeValue('red.50', 'red.900')}
                      p={{ base: 4, md: 5 }}
                      borderRadius='lg'
                      borderLeft='3px solid'
                      borderColor='red.400'
                    >
                      <UnorderedList spacing={2} styleType='none'>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('red.700', 'red.200')}
                          _before={{
                            content: '"🔧"',
                            mr: 3,
                          }}
                        >
                          Misaligned profile image
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('red.700', 'red.200')}
                          _before={{
                            content: '"🔧"',
                            mr: 3,
                          }}
                        >
                          Wonky tags
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('red.700', 'red.200')}
                          _before={{
                            content: '"🔧"',
                            mr: 3,
                          }}
                        >
                          Voxel Dog stuck in loading 🐶
                        </ListItem>
                      </UnorderedList>
                    </Box>

                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight={{ base: '1.6', md: '1.7' }}
                      color={useColorModeValue('gray.700', 'gray.200')}
                      mb={2}
                    >
                      Fixes included:
                    </Text>

                    <Box
                      bg={useColorModeValue('blue.50', 'blue.900')}
                      p={{ base: 4, md: 5 }}
                      borderRadius='lg'
                      borderLeft='3px solid'
                      borderColor='blue.400'
                    >
                      <UnorderedList spacing={2} styleType='none'>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('blue.700', 'blue.200')}
                          _before={{
                            content: '"⚡"',
                            mr: 3,
                          }}
                        >
                          Rebuilding maxW, mx=&quot;auto&quot;, and
                          objectPosition
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('blue.700', 'blue.200')}
                          _before={{
                            content: '"⚡"',
                            mr: 3,
                          }}
                        >
                          Using scrollMarginTop to correct jumps
                        </ListItem>
                        <ListItem
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight='1.6'
                          color={useColorModeValue('blue.700', 'blue.200')}
                          _before={{
                            content: '"⚡"',
                            mr: 3,
                          }}
                        >
                          Cleaning up useEffect dependency bugs
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Stack>
                </Box>

                <Box mt={{ base: 6, md: 8 }}>
                  <Heading
                    as='h4'
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight='600'
                    color={useColorModeValue('orange.700', 'orange.300')}
                    mb={{ base: 4, md: 5 }}
                    letterSpacing='-0.01em'
                  >
                    🔍 Final QA Pass
                  </Heading>

                  <Box
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={{ base: 4, md: 5 }}
                    borderRadius='lg'
                    borderLeft='3px solid'
                    borderColor='green.400'
                  >
                    <UnorderedList spacing={2} styleType='none'>
                      <ListItem
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight='1.6'
                        color={useColorModeValue('green.700', 'green.200')}
                        _before={{
                          content: '"✅"',
                          mr: 3,
                        }}
                      >
                        Typography & layout
                      </ListItem>
                      <ListItem
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight='1.6'
                        color={useColorModeValue('green.700', 'green.200')}
                        _before={{
                          content: '"✅"',
                          mr: 3,
                        }}
                      >
                        Scroll behavior
                      </ListItem>
                      <ListItem
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight='1.6'
                        color={useColorModeValue('green.700', 'green.200')}
                        _before={{
                          content: '"✅"',
                          mr: 3,
                        }}
                      >
                        Mobile ↔ Desktop balance
                      </ListItem>
                      <ListItem
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight='1.6'
                        color={useColorModeValue('green.700', 'green.200')}
                        _before={{
                          content: '"✅"',
                          mr: 3,
                        }}
                      >
                        Animations & states
                      </ListItem>
                      <ListItem
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight='1.6'
                        color={useColorModeValue('green.700', 'green.200')}
                        _before={{
                          content: '"✅"',
                          mr: 3,
                        }}
                      >
                        Real-user feedback loops
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Section>

        <Divider my={6} />

        <Section delay={0.5}>
          <VStack spacing={{ base: 6, md: 8 }} align='stretch'>
            <Box>
              <Heading
                as='h3'
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight='700'
                color={useColorModeValue('orange.600', 'orange.300')}
                mb={{ base: 6, md: 8 }}
                letterSpacing='-0.02em'
                lineHeight='1.2'
              >
                💡 Self-Reflection
              </Heading>

              <Box
                bg={useColorModeValue('orange.50', 'orange.900')}
                p={{ base: 6, md: 8 }}
                borderRadius='xl'
                borderLeft='4px solid'
                borderColor='orange.400'
                position='relative'
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  bgGradient: 'linear(to-r, orange.400, transparent)',
                }}
              >
                <VStack spacing={{ base: 4, md: 5 }} align='stretch'>
                  <Heading
                    as='h4'
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight='600'
                    color={useColorModeValue('orange.700', 'orange.200')}
                    letterSpacing='-0.01em'
                  >
                    Why Systems Matter to Me
                  </Heading>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    color={useColorModeValue('orange.800', 'orange.100')}
                  >
                    I&apos;ve seen what happens when operations are duct-taped
                    together. It breaks people, not just processes. So I care —
                    deeply — about clarity, flow, and documentation that holds
                    up under real stress.
                  </Text>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    color={useColorModeValue('orange.800', 'orange.100')}
                    fontWeight='500'
                  >
                    Structure isn&apos;t decoration. It&apos;s what lets
                    momentum scale.
                  </Text>
                </VStack>
              </Box>
            </Box>

            <Box>
              <Heading
                as='h4'
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight='600'
                color={useColorModeValue('blue.600', 'blue.300')}
                mb={{ base: 4, md: 5 }}
                letterSpacing='-0.01em'
                lineHeight='1.2'
              >
                Call to Collaborators
              </Heading>

              <Stack spacing={{ base: 4, md: 5 }}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  I&apos;m not here to trend-chase. I&apos;m here to build with
                  people who care — about traction, clarity, and doing the work
                  that actually ships.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  This site is the result of the last 5 years — and the
                  launchpad for the next 5.
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  If you&apos;ve made it this far, thank you.
                </Text>

                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  lineHeight={{ base: '1.6', md: '1.7' }}
                  color={useColorModeValue('blue.600', 'blue.300')}
                  fontWeight='600'
                >
                  Now let&apos;s build.
                </Text>

                <Box
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  p={{ base: 6, md: 8 }}
                  borderRadius='xl'
                  textAlign='center'
                  mt={{ base: 8, md: 10 }}
                  position='relative'
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    bg: useColorModeValue('gray.300', 'gray.500'),
                    borderRadius: 'full',
                  }}
                >
                  <Text
                    fontStyle='italic'
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight='500'
                    color={useColorModeValue('gray.700', 'gray.200')}
                    letterSpacing='0.01em'
                    lineHeight='1.5'
                  >
                    A man can be destroyed but not defeated.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </VStack>
        </Section>

        <Divider my={6} />

        <Section delay={0.6}>
          <Box
            p={6}
            bg={bgColor}
            border='1px solid'
            borderColor={borderColor}
            borderRadius='lg'
            textAlign='center'
            mt={6}
          >
            <Text fontSize='lg' fontStyle='italic'>
              If you&apos;re reading this and something resonates — drop me a
              message. Or check out the{' '}
              <Link href='/guestbook' color='teal.500'>
                Guestbook
              </Link>
              . I&apos;d love to hear from you.
            </Text>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Journey;
export { getServerSideProps } from '../components/chakra';
