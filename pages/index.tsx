import NextLink from 'next/link';
import Image from 'next/image';
import React, { memo } from 'react';
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
  useToast,
  Skeleton,
  SkeletonText,
  Link,
} from '@chakra-ui/react';
import { ChevronRightIcon, CheckIcon } from '@chakra-ui/icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useCallback, useState, useEffect } from 'react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import WordRotationEffect from '../components/typing-effect';
import AnimatedAvatar from '../components/animated-avatar';
import Timeline from '../components/timeline';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoOpenOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import dynamic from 'next/dynamic';

// 懒加载组件优化
const VoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <Box h='400px' w='100%' bg='transparent' />,
});

// FloatingParticles component removed as it was unused

const ContactForm = dynamic(() => import('../components/contact-form'), {
  ssr: false,
  loading: () => <Skeleton height='300px' />,
});

// TypeScript interfaces
interface ProjectData {
  id: string;
  title: string;
  stack: string[];
  description: string;
  features: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  color: string;
  result: string;
}

const Home: React.FC = memo(() => {
  const { scrollY } = useScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    let contentLoaded = false;

    const checkContentLoaded = () => {
      const images = document.querySelectorAll('img');
      const loadedImages = Array.from(images).filter(img => img.complete);

      if (images.length > 0 && loadedImages.length === images.length) {
        contentLoaded = true;
        return true;
      }
      return false;
    };

    const minTimer = setTimeout(() => {
      if (checkContentLoaded() || contentLoaded) {
        setIsLoading(false);
      }
    }, 800);

    const maxTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleLoad = () => {
      if (checkContentLoaded()) {
        contentLoaded = true;
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    document.addEventListener('load', handleLoad, true);

    const handleVisibilityChange = () => {
      if (!document.hidden && checkContentLoaded()) {
        setIsLoading(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      document.removeEventListener('load', handleLoad, true);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const tealExpandedBg = useColorModeValue('teal.50', 'teal.900');
  const pinkExpandedBg = useColorModeValue('pink.50', 'pink.900');
  const purpleExpandedBg = useColorModeValue('purple.50', 'purple.900');
  const modalBg = useColorModeValue('white', 'gray.800');
  const modalBorderColor = useColorModeValue('gray.200', 'gray.600');
  const modalHeaderBorderColor = useColorModeValue('gray.100', 'gray.700');
  const modalFooterBorderColor = useColorModeValue('gray.100', 'gray.700');
  const modalTextColor = useColorModeValue('gray.600', 'gray.300');
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #f7fafc 0%, rgba(56, 178, 172, 0.03) 50%, #edf2f7 100%)',
    'linear-gradient(135deg, #1a202c 0%, rgba(56, 178, 172, 0.08) 50%, #2d3748 100%)'
  );
  const heroBoxShadow = useColorModeValue(
    '0 10px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
  );
  const grayTextColor = useColorModeValue('gray.400', 'gray.400');
  const tealTextColor = useColorModeValue('teal.600', 'teal.300');
  const grayMediumColor = useColorModeValue('gray.600', 'gray.400');
  const grayDarkColor = useColorModeValue('gray.600', 'gray.300');
  const grayLightColor = useColorModeValue('gray.700', 'gray.200');
  const whiteTextColor = useColorModeValue('gray.800', 'white');

  const purpleTextColor = useColorModeValue('purple.600', 'purple.300');
  const pinkTextColor = useColorModeValue('pink.600', 'pink.300');
  const mobileBg = useColorModeValue(
    'linear-gradient(135deg, #f7fafc 0%, rgba(56, 178, 172, 0.03) 50%, #edf2f7 100%)',
    'linear-gradient(135deg, #1a202c 0%, rgba(56, 178, 172, 0.08) 50%, #2d3748 100%)'
  );
  const aboutBg = useColorModeValue('teal.50', 'teal.900');
  const grayBg = useColorModeValue('gray.50', 'gray.900');
  const whiteBg = useColorModeValue('white', 'gray.800');
  const skeletonStartColor = useColorModeValue('gray.100', 'gray.700');
  const skeletonEndColor = useColorModeValue('gray.300', 'gray.600');
  const grayBorderColor = useColorModeValue('gray.200', 'gray.700');
  const purpleBorderColor = useColorModeValue('purple.300', 'purple.500');
  const tealBorderColor = useColorModeValue('teal.300', 'teal.500');
  const pinkBorderColor = useColorModeValue('pink.300', 'pink.500');
  const scrollIndicatorColor = useColorModeValue('gray.400', 'gray.500');
  const heroGradient = useColorModeValue(
    'linear(135deg, teal.600, blue.600, purple.600)',
    'linear(135deg, teal.300, blue.300, purple.300)'
  );

  // 使用useMemo缓存项目数据
  const projectsData = useMemo(
    (): ProjectData[] => [
      {
        id: 'profit-tracker',
        title: '📊 Profit Tracker Dashboard',
        stack: ['Internal tool', 'Dropshipping ops'],
        description:
          'Private dashboard for product ROI and campaign performance tracking.',
        features: [
          'Automated sales tracking via Google Sheets',
          'COGS vs marketing spend visualization',
          '3x faster campaign optimization',
        ],
        liveUrl: '#',
        githubUrl: '#',
        color: 'blue',
        result: '$50K+ tracked, 60% faster decisions',
      },
      {
        id: 'portfolio',
        title: '🌟 This Portfolio Site',
        stack: ['Next.js', 'Chakra UI', 'Framer Motion', 'Three.js'],
        description:
          "This site isn't a vanity project — it's a timestamp of who I've been, what I've tried, and where I'm going.",
        features: [
          'Clear layout, honest content',
          'Mobile-first responsive design',
          'Framer Motion transitions',
        ],
        liveUrl: '#',
        githubUrl: 'https://github.com/yourusername/portfolio',
        color: 'teal',
        result:
          'Built with VSCode & Claude AI — now it works like it should, thoughtful not shrunk',
      },
      {
        id: 'gpt-support',
        title: '🤖 GPT-Powered Support Flow',
        stack: ['GPT-4', 'Telegram Bot API', 'Python'],
        description:
          'Workflow experiment for Fintech — testing GPT prompts to streamline tier-1 support.',
        features: [
          'GPT-4 training for refund/OTP/KYC queries',
          'Response time: 3min → <1min',
          'Sentiment-based prioritization',
        ],
        liveUrl: '#',
        githubUrl: '#',
        color: 'purple',
        result: '60% faster response time, used for support triage',
      },
      {
        id: 'herocraft',
        title: '🎨 HeroCraft',
        stack: ['AI Copilot', 'Content Creation'],
        description:
          'An AI copilot for content creators who want to write faster, brainstorm better, and ship without second-guessing.',
        features: [
          'AI-powered content brainstorming',
          'Faster writing workflows',
          'Ship without second-guessing',
        ],
        liveUrl:
          'https://chatgpt.com/g/g-686b68d950988191bd83b1308125c780-herocraft',
        githubUrl: null,
        color: 'purple',
        result: 'Raw, early, but real — feedback always welcome',
      },
      {
        id: 'prompt-tool',
        title: '📦 Mini Prompt Tool',
        stack: ['JavaScript', 'Browser APIs', 'Clipboard API'],
        description:
          'Lightweight browser tool to organize, clean, and test GPT prompts.',
        features: [
          'Grouped reusable prompt templates',
          'Clipboard export and quick-copy buttons',
          'Team onboarding with prompt libraries',
        ],
        liveUrl: '#',
        githubUrl: '#',
        color: 'orange',
        result: 'Standardize prompt testing and knowledge sharing',
      },
    ],
    []
  );

  const handleProjectClick = useCallback(
    (project: ProjectData) => {
      setSelectedProject(project);
      onOpen();
    },
    [onOpen]
  );

  // Scroll handling is already implemented in useEffect above

  return (
    <Layout title='Tony Yam - Full-Stack Developer & Designer'>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '120vh',
          background:
            'linear-gradient(135deg, rgba(56, 178, 172, 0.06) 0%, rgba(66, 153, 225, 0.04) 50%, rgba(159, 122, 234, 0.02) 100%)',
          zIndex: -10,
          y: backgroundY,
          opacity: backgroundOpacity,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
      />
      <Container maxW='container.lg' position='relative'>
        <Section delay={0.1}>
          <Box
            display={{ base: 'none', lg: 'flex' }}
            w='100vw'
            position='relative'
            left='50%'
            right='50%'
            ml='-50vw'
            mr='-50vw'
            textAlign='center'
            pt={{ lg: 20 }}
            pb={{ lg: 32 }}
            overflow='hidden'
            minH='100vh'
            flexDirection='column'
            justifyContent='center'
            bg={heroBg}
            boxShadow={heroBoxShadow}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(135deg, rgba(56, 178, 172, 0.12) 0%, rgba(66, 153, 225, 0.08) 50%, rgba(159, 122, 234, 0.04) 100%)',
              zIndex: -3,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
            }}
            _after={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'radial-gradient(ellipse 100% 60% at 50% 30%, rgba(56, 178, 172, 0.08) 0%, rgba(66, 153, 225, 0.04) 50%, transparent 80%)',
              zIndex: -2,
              animation: 'pulse 12s ease-in-out infinite',
              willChange: 'opacity',
              backfaceVisibility: 'hidden',
            }}
            sx={{
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.6 },
                '50%': { opacity: 0.8 },
              },
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-6px)' },
              },
            }}
          >
            <Box
              maxW='6xl'
              mx='auto'
              px={{ md: 10 }}
              w='100%'
              position='relative'
            >
              {[...Array(2)].map((_, i) => (
                <Box
                  key={i}
                  position='absolute'
                  w='4px'
                  h='4px'
                  bg='rgba(56, 178, 172, 0.4)'
                  borderRadius='full'
                  top={`${30 + i * 30}%`}
                  left={`${20 + i * 40}%`}
                  animation={`float ${4 + i * 1}s ease-in-out infinite ${i * 0.5}s`}
                  zIndex={-1}
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  }}
                />
              ))}
              <Box mb={10} position='relative'>
                <AnimatedAvatar />

                <Box mt='35px' px={8} maxW='100%' overflow='visible'>
                  <WordRotationEffect
                    staticText='I help non-tech creatives build'
                    rotatingWords={[
                      'smart websites',
                      'clean sites',
                      'useful tools',
                    ]}
                    speed={4800}
                    showSkeleton={isLoading}
                    fontSize='4xl'
                    fontWeight='800'
                    bgGradient='linear(135deg, teal.400, blue.500, purple.500)'
                    bgClip='text'
                    minH='120px'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    letterSpacing='-0.01em'
                    lineHeight={1.2}
                    textAlign='center'
                    maxW='100%'
                    wordBreak='break-word'
                    overflowWrap='break-word'
                    style={{
                      WebkitFontSmoothing: 'antialiased',
                      textRendering: 'optimizeLegibility',
                    }}
                  />
                </Box>
              </Box>
              <Text
                fontSize='xl'
                color={grayTextColor}
                mb={8}
                maxW='3xl'
                mx='auto'
                lineHeight='relaxed'
                px={8}
                py={2}
                fontWeight='500'
                textAlign='center'
                wordBreak='break-word'
                overflowWrap='break-word'
              >
                No templates, no agencies, no headaches. Just fast, functional
                websites that actually work for your business.
              </Text>
              <VStack spacing={10} px={10}>
                <Flex
                  direction='row'
                  gap={8}
                  justify='center'
                  align='center'
                  w='100%'
                  flexWrap='wrap'
                >
                  <Button
                    as='a'
                    href='#projects'
                    size='hero'
                    variant='solid'
                    rightIcon={<ChevronRightIcon />}
                    minW='180px'
                    minH='48px'
                    px={6}
                    py={3}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 24px rgba(56, 178, 172, 0.3)',
                    }}
                    _active={{
                      transform: 'translateY(0px)',
                      boxShadow: '0 4px 8px rgba(56, 178, 172, 0.2)',
                    }}
                    _focus={{
                      boxShadow: '0 0 0 3px rgba(56, 178, 172, 0.3)',
                    }}
                    transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  >
                    🚀 View My Work
                  </Button>
                  <Button
                    as='a'
                    href='#contact'
                    size='hero'
                    variant='glass'
                    minW='200px'
                    minH='48px'
                    px={6}
                    py={3}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 24px rgba(56, 178, 172, 0.15)',
                    }}
                    _active={{
                      transform: 'translateY(0px)',
                      boxShadow: '0 4px 8px rgba(56, 178, 172, 0.1)',
                    }}
                    _focus={{
                      boxShadow: '0 0 0 3px rgba(56, 178, 172, 0.3)',
                    }}
                    transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  >
                    🤝 Let&apos;s Connect
                  </Button>
                  <Button
                    onClick={() => {
                      alert(
                        '🚧 In Development\n\nThis Resume will available soon.'
                      );
                    }}
                    size='hero'
                    variant='outline'
                    minW='180px'
                    minH='48px'
                    px={6}
                    py={3}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 24px rgba(56, 178, 172, 0.15)',
                    }}
                    _active={{
                      transform: 'translateY(0px)',
                      boxShadow: '0 4px 8px rgba(56, 178, 172, 0.1)',
                    }}
                    _focus={{
                      boxShadow: '0 0 0 3px rgba(56, 178, 172, 0.3)',
                    }}
                    transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  >
                    📄 Download Resume
                  </Button>
                </Flex>
                <Text
                  fontSize='sm'
                  color={grayTextColor}
                  fontStyle='italic'
                  textAlign='center'
                  sx={{
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.8 },
                    },
                    animation: 'pulse 4s ease-in-out infinite',
                  }}
                >
                  💡 Currently available for new projects
                </Text>
              </VStack>
            </Box>
          </Box>

          <Box
            display={{ base: 'flex', lg: 'none' }}
            w='100vw'
            position='relative'
            left='50%'
            right='50%'
            ml='-50vw'
            mr='-50vw'
            textAlign='center'
            pt={20}
            pb={20}
            px={6}
            overflow='hidden'
            minH='100vh'
            flexDirection='column'
            justifyContent='center'
            bg={mobileBg}
          >
            <Box maxW='sm' mx='auto' w='100%' position='relative'>
              <Box maxW='280px' mx='auto' mb={6}>
                <Text
                  fontSize={{ base: 'base', md: 'xl' }}
                  color={tealTextColor}
                  fontWeight='600'
                  lineHeight='relaxed'
                  textAlign='center'
                  sx={{
                    '@keyframes typewriter': {
                      '0%': { width: '0' },
                      '100%': { width: '100%' },
                    },
                    '@keyframes blink': {
                      '0%, 50%': { borderColor: 'transparent' },
                      '51%, 100%': { borderColor: 'currentColor' },
                    },
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    borderRight: '2px solid',
                    animation:
                      'typewriter 1.8s steps(15) 0.5s both, blink 1s infinite 2.3s',
                    maxWidth: '100%',
                  }}
                >
                  Hey! I&apos;m{' '}
                  <Box
                    as='strong'
                    bgGradient='linear(135deg, teal.500, blue.500, purple.500)'
                    bgClip='text'
                    fontWeight='800'
                  >
                    Tonymumu
                  </Box>
                </Text>
              </Box>

              <Box
                mb={8}
                position='relative'
                display='flex'
                justifyContent='center'
              >
                {isLoading ? (
                  <Skeleton
                    w='120px'
                    h='120px'
                    borderRadius='full'
                    startColor={skeletonStartColor}
                    endColor={skeletonEndColor}
                  />
                ) : (
                  <Box
                    position='relative'
                    cursor='pointer'
                    sx={{
                      '@keyframes scaleIn': {
                        '0%': { transform: 'scale(0)', opacity: 0 },
                        '50%': { transform: 'scale(1.1)', opacity: 0.8 },
                        '100%': { transform: 'scale(1)', opacity: 1 },
                      },
                      animation: 'scaleIn 1.5s ease-out 0.5s both',
                    }}
                  >
                    <Box
                      as='img'
                      src='https://media.giphy.com/media/fRFK42AiiLDgs/giphy.gif'
                      alt='Tony Yam Avatar'
                      w='120px'
                      h='120px'
                      borderRadius='full'
                      border='3px solid'
                      borderColor='teal.400'
                      boxShadow='0 0 20px rgba(56, 178, 172, 0.4), 0 0 40px rgba(56, 178, 172, 0.2)'
                      transition='transform 0.2s ease, box-shadow 0.2s ease'
                      loading='lazy'
                      objectFit='cover'
                      objectPosition='center top'
                      _hover={{
                        transform: 'scale(1.02)',
                        boxShadow: '0 0 20px rgba(56, 178, 172, 0.5)',
                      }}
                      style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  </Box>
                )}
              </Box>

              <Box mb={8} px={4} maxW='320px' mx='auto'>
                <Text
                  fontSize={{ base: 'xl', sm: '2xl' }}
                  fontWeight='800'
                  bgGradient='linear(135deg, teal.400, blue.500, purple.500)'
                  bgClip='text'
                  letterSpacing='-0.01em'
                  lineHeight={1.3}
                  textAlign='center'
                  mb={2}
                  style={{
                    WebkitFontSmoothing: 'antialiased',
                    textRendering: 'optimizeLegibility',
                  }}
                >
                  I help non-tech creatives build
                </Text>
                <Box display='flex' justifyContent='center' w='full'>
                  <WordRotationEffect
                    staticText=''
                    rotatingWords={[
                      'smart websites',
                      'clean sites',
                      'useful tools',
                    ]}
                    speed={4800}
                    fontSize={{ base: 'lg', sm: 'xl' }}
                    fontWeight='800'
                    bgGradient={heroGradient}
                    bgClip='text'
                    minH='40px'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    letterSpacing='-0.01em'
                    lineHeight={1.3}
                    textAlign='center'
                    maxW='280px'
                    whiteSpace='normal'
                    wordBreak='break-word'
                    overflowWrap='break-word'
                    style={{
                      WebkitFontSmoothing: 'antialiased',
                      textRendering: 'optimizeLegibility',
                    }}
                  />
                </Box>
              </Box>

              <Text
                fontSize='lg'
                color={grayMediumColor}
                mb={10}
                lineHeight='relaxed'
                fontWeight='500'
                px={4}
              >
                No templates, no agencies, no headaches. Just fast, functional
                websites that actually work for your business.
              </Text>

              <VStack spacing={4} mb={8}>
                {isLoading ? (
                  <>
                    <Skeleton
                      w='full'
                      maxW='280px'
                      h='56px'
                      borderRadius='xl'
                      startColor={skeletonStartColor}
                      endColor={skeletonEndColor}
                    />
                    <Skeleton
                      w='full'
                      maxW='280px'
                      h='56px'
                      borderRadius='xl'
                      startColor={skeletonStartColor}
                      endColor={skeletonEndColor}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      as='a'
                      href='#projects'
                      size='lg'
                      variant='solid'
                      rightIcon={<ChevronRightIcon />}
                      w='full'
                      maxW='280px'
                      h='56px'
                      fontSize='lg'
                      fontWeight='600'
                      borderRadius='xl'
                      boxShadow='0 8px 25px rgba(56, 178, 172, 0.25)'
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(56, 178, 172, 0.35)',
                      }}
                      _active={{
                        transform: 'translateY(0px)',
                        boxShadow: '0 4px 15px rgba(56, 178, 172, 0.25)',
                      }}
                      transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                    >
                      🚀 View My Work
                    </Button>
                    <Button
                      as='a'
                      href='#contact'
                      size='lg'
                      variant='glass'
                      w='full'
                      maxW='280px'
                      h='56px'
                      fontSize='lg'
                      fontWeight='600'
                      borderRadius='xl'
                      boxShadow='0 8px 25px rgba(56, 178, 172, 0.15)'
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(56, 178, 172, 0.25)',
                      }}
                      _active={{
                        transform: 'translateY(0px)',
                        boxShadow: '0 4px 15px rgba(56, 178, 172, 0.15)',
                      }}
                      transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                    >
                      🤝 Let&apos;s Connect
                    </Button>
                    <Button
                      onClick={() => {
                        alert(
                          '🚧 In Development\n\nThis Resume will available soon.'
                        );
                      }}
                      size='lg'
                      variant='outline'
                      w='full'
                      maxW='280px'
                      h='56px'
                      fontSize='lg'
                      fontWeight='600'
                      borderRadius='xl'
                      boxShadow='0 8px 25px rgba(56, 178, 172, 0.15)'
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(56, 178, 172, 0.25)',
                      }}
                      _active={{
                        transform: 'translateY(0px)',
                        boxShadow: '0 4px 15px rgba(56, 178, 172, 0.15)',
                      }}
                      transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                    >
                      📄 Download Resume
                    </Button>
                  </>
                )}
              </VStack>

              <Button
                variant='outline'
                colorScheme='teal'
                w='full'
                maxW='280px'
                h='48px'
                fontSize='md'
                fontWeight='600'
                borderRadius='xl'
                isDisabled
                cursor='default'
                _disabled={{
                  opacity: 1,
                  bg: aboutBg,
                  borderColor: 'teal.300',
                  color: tealTextColor,
                }}
              >
                💡 Currently available for new projects
              </Button>

              <Box
                mt={12}
                sx={{
                  '@keyframes fadeUpDown': {
                    '0%, 100%': { opacity: 0.4, transform: 'translateY(0px)' },
                    '50%': { opacity: 1, transform: 'translateY(-8px)' },
                  },
                  animation: 'fadeUpDown 2s ease-in-out infinite',
                }}
              >
                <Text fontSize='2xl' color={scrollIndicatorColor}>
                  ↓
                </Text>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Box
            pt={{ base: 16, md: 10 }}
            pb={{ base: 20, md: 12 }}
            px={{ base: 6, sm: 8, md: 10 }}
          >
            <Heading
              as='h2'
              variant='section-title'
              textAlign='center'
              mb={{ base: 8, md: 12 }}
              fontSize={{ base: '2xl', md: '3xl' }}
            >
              A bit about me
            </Heading>

            <Box
              textAlign='center'
              mb={{ base: 8, md: 12 }}
              p={6}
              bg={aboutBg}
              borderRadius='xl'
              borderLeft='4px solid'
              borderColor='teal.400'
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight='600'
                color={tealTextColor}
                fontStyle='italic'
              >
                💡 TLDR: From support floors to e-commerce ops to building
                websites that actually solve problems
              </Text>
            </Box>

            <Flex
              direction={{ base: 'column', lg: 'row' }}
              align='center'
              justify='center'
              gap={{ base: 8, lg: 12 }}
              mb={{ base: 10, md: 14 }}
              p={{ base: 6, sm: 8, md: 10 }}
              bg={grayBg}
              borderRadius='3xl'
              boxShadow='lg'
              position='relative'
              overflow='hidden'
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'linear-gradient(135deg, teal.500, blue.500)',
                opacity: 0.05,
                zIndex: 0,
              }}
            >
              <Box
                position='relative'
                zIndex={1}
                w={{ base: 200, sm: 240, lg: 280 }}
                h={{ base: 200, sm: 240, lg: 280 }}
                flexShrink={0}
                display='flex'
                alignItems='center'
                justifyContent='center'
                transition='all 0.4s ease'
                _hover={{
                  transform: 'scale(1.05) translateY(-5px)',
                  filter: 'drop-shadow(0 15px 35px rgba(56, 178, 172, 0.3))',
                }}
                sx={{
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <Box display={{ base: 'block', md: 'none' }}>
                  <Box
                    borderRadius='full'
                    overflow='hidden'
                    w='200px'
                    h='200px'
                    position='relative'
                  >
                    <Image
                      src='/images/tony.jpeg'
                      alt='Tony Yam'
                      width={200}
                      height={200}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                      priority
                      placeholder='blur'
                      blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                    />
                  </Box>
                </Box>
                <Box display={{ base: 'none', md: 'block' }}>
                  <VoxelDog />
                </Box>
              </Box>

              <VStack
                align={{ base: 'center', lg: 'start' }}
                spacing={6}
                textAlign={{ base: 'center', lg: 'left' }}
                position='relative'
                zIndex={1}
                flex={1}
                maxW={{ base: '100%', lg: '500px' }}
              >
                <Text fontWeight='800' fontSize='3xl' color={whiteTextColor}>
                  Tony Yam
                </Text>
                <Text color={tealTextColor} fontSize='xl' fontWeight='600'>
                  Freelance Web Developer
                </Text>
                <Text color={grayDarkColor} fontSize='lg' fontWeight='500'>
                  📍 Kuala Lumpur, Malaysia
                </Text>
                <Text
                  color={grayDarkColor}
                  fontSize='md'
                  lineHeight='relaxed'
                  fontWeight='500'
                  maxW={{ base: '100%', lg: '400px' }}
                >
                  I didn&apos;t start out as a developer — I started out picking
                  up phones. Years of frontline support at Grab, Agoda, and
                  Microsoft taught me that the best solutions come from
                  understanding real problems, not just writing clean code.
                </Text>
                <Text
                  color={grayDarkColor}
                  fontSize='md'
                  lineHeight='relaxed'
                  fontWeight='500'
                  maxW={{ base: '100%', lg: '400px' }}
                >
                  Now I build websites that actually work for solo creators and
                  business owners — without the agency overhead or template
                  limitations.
                </Text>
                <Text
                  color={grayTextColor}
                  fontSize='sm'
                  fontStyle='italic'
                  maxW={{ base: '100%', lg: '400px' }}
                >
                  &ldquo;Structure isn&apos;t decoration. It&apos;s what lets
                  momentum scale.&rdquo;
                </Text>
              </VStack>
            </Flex>

            <Timeline />
          </Box>
        </Section>

        <Section delay={0.3}>
          <Box id='services' scrollMarginTop='80px'>
            <Heading as='h2' variant='section-title'>
              💡 From 0 to Launch — Custom Website Building
            </Heading>

            <Text
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              textAlign='center'
              mb={12}
              color={grayTextColor}
              maxW={{ base: '90%', sm: '85%', md: '4xl' }}
              mx='auto'
              lineHeight='relaxed'
              fontWeight='500'
              px={{ base: 4, sm: 6, md: 0 }}
              wordBreak='break-word'
              overflowWrap='break-word'
            >
              Years of frontline experience taught me what actually matters:
              websites that work for real people with real problems. No agency
              overhead, no template limitations.
            </Text>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 6, md: 8, lg: 10 }}
              mb={{ base: 8, md: 12 }}
            >
              <VStack align='start' spacing={4}>
                <HStack>
                  <CheckIcon color='teal.500' />
                  <Text>End-to-end site design (frontend + backend)</Text>
                </HStack>
                <HStack>
                  <CheckIcon color='teal.500' />
                  <Text>Booking forms / lead gen / membership systems</Text>
                </HStack>
                <HStack>
                  <CheckIcon color='teal.500' />
                  <Text>
                    Payment integration (Stripe, FPX, ShopeePay, WeChat)
                  </Text>
                </HStack>
              </VStack>

              <VStack align='start' spacing={4}>
                <HStack>
                  <CheckIcon color='teal.500' />
                  <Text>Responsive UI + SEO basics</Text>
                </HStack>
                <HStack>
                  <CheckIcon color='teal.500' />
                  <Text>AI-generated draft copy if needed</Text>
                </HStack>
                <HStack>
                  <CheckIcon color='teal.500' />
                  <Text>Self-manageable site structure</Text>
                </HStack>
              </VStack>
            </SimpleGrid>

            <Box
              textAlign='center'
              p={{ base: 6, md: 8, lg: 10 }}
              position='relative'
              overflow='hidden'
              minHeight={{ base: '120px', md: '140px' }}
              display='flex'
              alignItems='center'
              justifyContent='center'
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'linear-gradient(135deg, teal.400, blue.400)',
                opacity: 0.15,
                zIndex: 0,
              }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontStyle='italic'
                fontWeight='600'
                color={grayLightColor}
                position='relative'
                zIndex={1}
              >
                ✨ If you have the idea, I&apos;ll help you shape it, ship it,
                and own it.
              </Text>
            </Box>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Box
            id='projects'
            pt={{ base: 16, md: 12 }}
            pb={{ base: 20, md: 16 }}
            scrollMarginTop='80px'
          >
            <Heading as='h2' variant='section-title'>
              💼 Projects
            </Heading>
            <Text
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              textAlign='center'
              mb={12}
              color={grayTextColor}
              maxW={{ base: '90%', sm: '85%', md: '3xl' }}
              mx='auto'
              lineHeight='relaxed'
              fontWeight='500'
              px={{ base: 4, sm: 6, md: 0 }}
              wordBreak='break-word'
              overflowWrap='break-word'
            >
              A curated selection of things I&apos;ve built, broken, and learned
              from.
            </Text>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 8, md: 8, lg: 10 }}
              mb={{ base: 12, md: 16 }}
              maxW={{ base: 'md', md: '100%' }}
              mx='auto'
            >
              <Box
                cursor='pointer'
                onClick={() => handleProjectClick(projectsData[0])}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  bg: 'linear-gradient(90deg, blue.400, blue.600)',
                  zIndex: 1,
                  transition: 'height 0.4s ease',
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
                  transition: 'opacity 0.4s ease',
                }}
                _hover={{
                  _before: {
                    height: '6px',
                  },
                  _after: {
                    opacity: 0.3,
                  },
                }}
              >
                <Heading
                  as='h3'
                  size='sm'
                  mb={3}
                  color='blue.400'
                  fontWeight='700'
                >
                  📊 Profit Tracker Dashboard
                </Heading>
                <Text fontSize='xs' color='gray.400' mb={3} fontWeight='600'>
                  Internal tool | Dropshipping ops
                </Text>
                <Text
                  fontSize={{ base: '17px', md: 'sm' }}
                  lineHeight='relaxed'
                  mb={3}
                  color='gray.300'
                  wordBreak='break-word'
                  overflowWrap='break-word'
                >
                  Private dashboard for product ROI and campaign performance
                  tracking.
                </Text>
                <VStack align='start' spacing={2} fontSize='xs'>
                  <Text color='gray.400'>
                    • Automated sales tracking via Google Sheets
                  </Text>
                  <Text color='gray.400'>
                    • COGS vs marketing spend visualization
                  </Text>
                  <Text color='gray.400'>
                    • 3x faster campaign optimization
                  </Text>
                </VStack>
                <Box
                  mt={4}
                  p={3}
                  bg='blue.900'
                  borderRadius='md'
                  borderLeft='3px solid'
                  borderColor='blue.400'
                >
                  <Text fontSize='xs' fontWeight='600' color='blue.300'>
                    Impact: $50K+ tracked, 60% faster decisions
                  </Text>
                </Box>
              </Box>

              <Box
                cursor='pointer'
                onClick={() => handleProjectClick(projectsData[1])}
                _hover={{
                  _before: {
                    height: '6px',
                  },
                  _after: {
                    opacity: 0.3,
                  },
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
                  transition: 'height 0.4s ease',
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
                  transition: 'opacity 0.4s ease',
                }}
              >
                <Box
                  position='absolute'
                  top='12px'
                  right='12px'
                  bg='linear-gradient(135deg, teal.400, teal.600)'
                  color='white'
                  px={2}
                  py={1}
                  borderRadius='full'
                  fontSize='xs'
                  fontWeight='bold'
                  zIndex={2}
                  boxShadow='0 4px 12px rgba(56, 178, 172, 0.3)'
                  display={{ base: 'none', md: 'block' }}
                >
                  ⭐ Featured
                </Box>
                <Heading
                  as='h3'
                  size='sm'
                  mb={3}
                  color='teal.400'
                  fontWeight='700'
                >
                  🔧 Portfolio Site
                </Heading>
                <Text fontSize='xs' color='gray.400' mb={3} fontWeight='600'>
                  Next.js, React, Chakra UI, Three.js
                </Text>
                <Text
                  fontSize={{ base: '17px', md: 'sm' }}
                  lineHeight='relaxed'
                  mb={3}
                  color='gray.300'
                >
                  This site isn&apos;t a vanity project — it&apos;s a timestamp
                  of who I&apos;ve been, what I&apos;ve tried, and where
                  I&apos;m going.
                </Text>
                <VStack align='start' spacing={2} fontSize='xs'>
                  <Text color='gray.400'>• Clear layout, honest content</Text>
                  <Text color='gray.400'>• Mobile-first responsive design</Text>
                  <Text color='gray.400'>• Framer Motion transitions</Text>
                </VStack>
                <Box
                  mt={4}
                  p={3}
                  bg='teal.900'
                  borderRadius='md'
                  borderLeft='3px solid'
                  borderColor='teal.400'
                >
                  <Text fontSize='xs' fontWeight='600' color='teal.300'>
                    Built with VSCode & Claude AI — now it works like it should,
                    thoughtful not shrunk
                  </Text>
                </Box>

                <Box
                  className='hover-info'
                  position='absolute'
                  bottom='0'
                  left='0'
                  right='0'
                  bg='linear-gradient(to top, rgba(56, 178, 172, 0.95), rgba(56, 178, 172, 0.8))'
                  color='white'
                  p={4}
                  opacity={0}
                  transform='translateY(20px)'
                  transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  backdropFilter='blur(15px)'
                  sx={{
                    '.hero-card:hover &': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  }}
                >
                  <Text fontSize='sm' fontWeight='bold' mb={2}>
                    💡 Tech Used:
                  </Text>
                  <Text fontSize='xs' mb={2}>
                    Next.js • React • Chakra UI • Three.js • Framer Motion
                  </Text>
                  <Button
                    size='xs'
                    variant='outline'
                    colorScheme='whiteAlpha'
                    mt={2}
                  >
                    You&apos;re viewing it! 🎉
                  </Button>
                </Box>
              </Box>

              <Box
                cursor='pointer'
                onClick={() => handleProjectClick(projectsData[2])}
                _hover={{
                  _before: {
                    height: '6px',
                  },
                  _after: {
                    opacity: 0.3,
                  },
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
                  transition: 'height 0.4s ease',
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
                  transition: 'opacity 0.4s ease',
                }}
              >
                <Heading
                  as='h3'
                  size='sm'
                  mb={3}
                  color='purple.400'
                  fontWeight='700'
                >
                  🤖 GPT-Powered Support Flow
                </Heading>
                <Text fontSize='xs' color='gray.400' mb={3} fontWeight='600'>
                  GPT-4, Telegram Bot API, Python
                </Text>
                <Text
                  fontSize={{ base: '17px', md: 'sm' }}
                  lineHeight='relaxed'
                  mb={3}
                  color='gray.300'
                >
                  Workflow experiment for Fintech — testing GPT prompts to
                  streamline tier-1 support.
                </Text>
                <VStack align='start' spacing={2} fontSize='xs'>
                  <Text color='gray.400'>
                    • GPT-4 training for refund/OTP/KYC queries
                  </Text>
                  <Text color='gray.400'>• Response time: 3min → &lt;1min</Text>
                  <Text color='gray.400'>• Sentiment-based prioritization</Text>
                </VStack>
                <Box
                  mt={4}
                  p={3}
                  bg='purple.900'
                  borderRadius='md'
                  borderLeft='3px solid'
                  borderColor='purple.400'
                >
                  <Text fontSize='xs' fontWeight='600' color='purple.300'>
                    Result: 60% faster response time, used for support triage
                  </Text>
                </Box>
              </Box>

              <Box
                cursor='pointer'
                onClick={() => handleProjectClick(projectsData[3])}
                _hover={{
                  _before: {
                    height: '6px',
                  },
                  _after: {
                    opacity: 0.3,
                  },
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
                  transition: 'height 0.4s ease',
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
                  transition: 'opacity 0.4s ease',
                }}
              >
                <Heading
                  as='h3'
                  size='sm'
                  mb={3}
                  color='purple.400'
                  fontWeight='700'
                >
                  🎨 HeroCraft
                </Heading>
                <Text fontSize='xs' color='gray.400' mb={3} fontWeight='600'>
                  AI Copilot | Content Creation
                </Text>
                <Text
                  fontSize={{ base: '17px', md: 'sm' }}
                  lineHeight='relaxed'
                  mb={3}
                  color='gray.300'
                >
                  An AI copilot for content creators who want to write faster,
                  brainstorm better, and ship without second-guessing.
                </Text>
                <VStack align='start' spacing={2} fontSize='xs'>
                  <Text color='gray.400'>
                    • AI-powered content brainstorming
                  </Text>
                  <Text color='gray.400'>• Faster writing workflows</Text>
                  <Text color='gray.400'>• Ship without second-guessing</Text>
                </VStack>
                <Box
                  mt={4}
                  p={3}
                  bg='purple.900'
                  borderRadius='md'
                  borderLeft='3px solid'
                  borderColor='purple.400'
                >
                  <Text fontSize='xs' fontWeight='600' color='purple.300'>
                    Status: Raw, early, but real — feedback always welcome
                  </Text>
                </Box>
              </Box>

              <Box
                cursor='pointer'
                onClick={() => handleProjectClick(projectsData[4])}
                _hover={{
                  _before: {
                    height: '6px',
                  },
                  _after: {
                    opacity: 0.3,
                  },
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
                  transition: 'height 0.4s ease',
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
                  transition: 'opacity 0.4s ease',
                }}
              >
                <Heading
                  as='h3'
                  size='sm'
                  mb={3}
                  color='orange.400'
                  fontWeight='700'
                >
                  📦 Mini Prompt Tool
                </Heading>
                <Text fontSize='xs' color='gray.400' mb={3} fontWeight='600'>
                  JavaScript, Browser APIs, Clipboard API
                </Text>
                <Text fontSize='sm' lineHeight='1.6' mb={3} color='gray.300'>
                  Lightweight browser tool to organize, clean, and test GPT
                  prompts.
                </Text>
                <VStack align='start' spacing={2} fontSize='xs'>
                  <Text color='gray.400'>
                    • Grouped reusable prompt templates
                  </Text>
                  <Text color='gray.400'>
                    • Clipboard export and quick-copy buttons
                  </Text>
                  <Text color='gray.400'>
                    • Team onboarding with prompt libraries
                  </Text>
                </VStack>
                <Box
                  mt={4}
                  p={3}
                  bg='orange.900'
                  borderRadius='md'
                  borderLeft='3px solid'
                  borderColor='orange.400'
                >
                  <Text fontSize='xs' fontWeight='600' color='orange.300'>
                    Why: Standardize prompt testing and knowledge sharing
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>

            <Box textAlign='center' mb={{ base: 6, md: 8 }}>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={grayDarkColor}
                maxW='2xl'
                mx='auto'
                lineHeight='relaxed'
              >
                Want a walkthrough of any project? DM me — I&apos;d be happy to
                share a Loom or repo.
              </Text>
            </Box>

            <Box textAlign='center' mb={{ base: 12, md: 16 }}>
              <NextLink href='/works'>
                <Button
                  variant='solid'
                  size='hero'
                  rightIcon={<ChevronRightIcon />}
                  _hover={{
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 20px 40px rgba(56, 178, 172, 0.4)',
                  }}
                  transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  See More Details
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Section>

        <Section delay={0.5}>
          <Box id='contact' scrollMarginTop='80px'>
            <Box
              textAlign='center'
              p={{ base: 8, md: 12, lg: 16 }}
              position='relative'
              overflow='hidden'
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'linear-gradient(135deg, teal.400, blue.500)',
                opacity: 0.1,
                zIndex: 0,
              }}
            >
              <Box position='relative' zIndex={1}>
                <Heading
                  as='h2'
                  variant='section-title'
                  bgGradient='linear(to-r, teal.400, blue.500)'
                  bgClip='text'
                  mb={{ base: 6, md: 8 }}
                >
                  Want to connect?
                </Heading>

                <Text
                  fontSize='xl'
                  mb={8}
                  color={grayDarkColor}
                  maxW='3xl'
                  mx='auto'
                  lineHeight='relaxed'
                  fontWeight='500'
                >
                  If you&apos;re working on something interesting, need a second
                  pair of eyes on a project, or just want to chat about building
                  things — I&apos;m always up for a conversation.
                </Text>

                <VStack spacing={6} mb={8}>
                  <Text fontSize='lg' color={grayTextColor} fontWeight='600'>
                    Best ways to reach me:
                  </Text>
                  <Flex
                    direction={{ base: 'column', sm: 'row' }}
                    gap={{ base: 4, sm: 6, md: 8 }}
                    justify='center'
                    align='center'
                    flexWrap='wrap'
                  >
                    <Button
                      as='a'
                      href='https://instagram.com/mrtonyyam'
                      target='_blank'
                      rel='noopener noreferrer'
                      size='hero'
                      variant='solid'
                      leftIcon={<IoLogoInstagram />}
                      _hover={{
                        transform: 'translateY(-4px) scale(1.05)',
                        boxShadow:
                          '0 20px 40px rgba(56, 178, 172, 0.4), 0 0 30px rgba(56, 178, 172, 0.3)',
                      }}
                      _active={{
                        transform: 'translateY(-2px) scale(1.02)',
                      }}
                      transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    >
                      Instagram DM
                    </Button>
                    <Button
                      as='a'
                      href='https://github.com/mrtonymu'
                      target='_blank'
                      rel='noopener noreferrer'
                      size='hero'
                      variant='glass'
                      leftIcon={<IoLogoGithub />}
                      _hover={{
                        transform: 'translateY(-4px) scale(1.05)',
                        boxShadow:
                          '0 20px 40px rgba(56, 178, 172, 0.2), 0 0 25px rgba(56, 178, 172, 0.15)',
                      }}
                      _active={{
                        transform: 'translateY(-2px) scale(1.02)',
                      }}
                      transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    >
                      GitHub
                    </Button>
                  </Flex>
                </VStack>

                <Text
                  fontSize='md'
                  color={grayTextColor}
                  fontStyle='italic'
                  fontWeight='500'
                  mb={8}
                >
                  ✨ Usually respond within a day or two.
                </Text>

                <Box mt={12}>
                  <Text
                    fontSize='lg'
                    color={grayTextColor}
                    fontWeight='600'
                    mb={6}
                    textAlign='center'
                  >
                    Or send me a message directly:
                  </Text>
                  <ContactForm />
                </Box>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section delay={0.6}>
          <Box
            display={{ base: 'none', lg: 'block' }}
            bg='black'
            position='relative'
            overflow='hidden'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'linear-gradient(135deg, purple.400, teal.400)',
              opacity: 0.1,
              zIndex: 0,
            }}
          >
            <Box position='relative' zIndex={1} maxW='6xl' mx='auto'>
              <Heading as='h2' variant='section-title'>
                🧠 What I&apos;m currently exploring
              </Heading>

              <Box
                maxW='4xl'
                mx='auto'
                p={8}
                bg='gray.900'
                borderRadius='2xl'
                border='1px solid'
                borderColor='gray.700'
                position='relative'
                overflow='hidden'
                boxShadow='0 25px 50px rgba(0, 0, 0, 0.5)'
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow:
                    '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(56, 178, 172, 0.3)',
                }}
                transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              >
                <Box position='relative' zIndex={1}>
                  <Text
                    fontSize='lg'
                    lineHeight='relaxed'
                    mb={6}
                    color={grayDarkColor}
                    fontWeight='500'
                  >
                    Lately, I&apos;ve been diving into how AI tools like
                    ChatGPT, Midjourney, and Groq are reshaping creative
                    workflows — especially for non-devs. I&apos;m also
                    experimenting with lightweight motion (Framer Motion, GSAP),
                    mobile-first layout strategies, and emotion-driven microcopy
                    in UIs.
                  </Text>

                  <Text
                    fontSize='lg'
                    lineHeight='relaxed'
                    mb={6}
                    color={grayDarkColor}
                    fontWeight='500'
                  >
                    On the side, I&apos;ve been thinking about how to blend
                    &ldquo;utility + play&rdquo; — particularly in creative or
                    Web3 tool spaces.
                  </Text>

                  <Box textAlign='center' mt={4}>
                    <Button
                      variant='ghost'
                      size='lg'
                      fontStyle='italic'
                      color='teal.300'
                      fontWeight='600'
                      _hover={{
                        transform: 'scale(1.02)',
                        boxShadow: '0 8px 25px rgba(56, 178, 172, 0.25)',
                        bg: 'rgba(56, 178, 172, 0.1)',
                      }}
                      _active={{
                        transform: 'scale(0.98)',
                      }}
                      transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    >
                      Still rough, but if you&apos;re into that kind of thing —
                      let&apos;s jam. ✨
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box display={{ base: 'block', lg: 'none' }} pt={8} pb={10} px={6}>
            <Heading
              as='h2'
              fontSize='2xl'
              textAlign='center'
              mb={8}
              fontWeight='800'
              display='flex'
              alignItems='center'
              justifyContent='center'
              gap={3}
            >
              <Text fontSize='2xl'>🧠</Text>
              <Text
                bgGradient='linear(to-r, purple.400, teal.400)'
                bgClip='text'
              >
                What I&apos;m currently exploring
              </Text>
            </Heading>

            <Box maxW='md' mx='auto'>
              <Text
                fontSize={{ base: 'xl', sm: '2xl' }}
                lineHeight='relaxed'
                mb={6}
                color={grayDarkColor}
                fontWeight='600'
                textAlign='center'
                letterSpacing='tight'
              >
                Currently diving into AI tools like ChatGPT and how they&apos;re
                reshaping creative workflows for non-devs.
              </Text>

              <VStack spacing={5} mb={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ width: '100%' }}
                >
                  <Box
                    w='full'
                    p={4}
                    bg={whiteBg}
                    borderRadius='lg'
                    border='1px solid'
                    borderColor={grayBorderColor}
                    boxShadow='sm'
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    }}
                    transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  >
                    <HStack spacing={4} align='center'>
                      <Text fontSize='2xl' flexShrink={0}>
                        🤖
                      </Text>
                      <Text
                        fontSize={{ base: 'lg', sm: 'xl' }}
                        color={grayDarkColor}
                        fontWeight='600'
                        flex={1}
                      >
                        AI integration for creative workflows
                      </Text>
                    </HStack>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ width: '100%' }}
                >
                  <Box
                    w='full'
                    p={4}
                    bg={whiteBg}
                    borderRadius='lg'
                    border='1px solid'
                    borderColor={grayBorderColor}
                    boxShadow='sm'
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    }}
                    transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  >
                    <HStack spacing={4} align='center'>
                      <Text fontSize='2xl' flexShrink={0}>
                        📱
                      </Text>
                      <Text
                        fontSize={{ base: 'lg', sm: 'xl' }}
                        color={grayDarkColor}
                        fontWeight='600'
                        flex={1}
                      >
                        Mobile-first design principles
                      </Text>
                    </HStack>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ width: '100%' }}
                >
                  <Box
                    w='full'
                    p={4}
                    bg={whiteBg}
                    borderRadius='lg'
                    border='1px solid'
                    borderColor={grayBorderColor}
                    boxShadow='sm'
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    }}
                    transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  >
                    <HStack spacing={4} align='center'>
                      <Text fontSize='2xl' flexShrink={0}>
                        ✨
                      </Text>
                      <Text
                        fontSize={{ base: 'lg', sm: 'xl' }}
                        color={grayDarkColor}
                        fontWeight='600'
                        flex={1}
                      >
                        UI microcopy that converts
                      </Text>
                    </HStack>
                  </Box>
                </motion.div>
              </VStack>

              <Box textAlign='center'>
                <Button
                  variant='ghost'
                  size='md'
                  fontStyle='italic'
                  color={tealTextColor}
                  fontWeight='600'
                  fontSize='md'
                  _hover={{
                    bg: aboutBg,
                    transform: 'scale(1.02)',
                  }}
                  _active={{
                    transform: 'scale(0.98)',
                  }}
                  transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  Let&apos;s chat about these! ✨
                </Button>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section delay={0.7}>
          <Box display={{ base: 'none', lg: 'block' }} pt={12} pb={16}>
            <Heading as='h2' variant='section-title'>
              💬 Frequently Asked
            </Heading>

            <Box maxW='4xl' mx='auto'>
              {isLoading ? (
                <VStack spacing={6}>
                  <SkeletonText
                    noOfLines={3}
                    spacing={4}
                    skeletonHeight={16}
                    borderRadius='xl'
                    startColor={skeletonStartColor}
                    endColor={skeletonEndColor}
                  />
                  <SkeletonText
                    noOfLines={3}
                    spacing={4}
                    skeletonHeight={16}
                    borderRadius='xl'
                    startColor={skeletonStartColor}
                    endColor={skeletonEndColor}
                  />
                  <SkeletonText
                    noOfLines={3}
                    spacing={4}
                    skeletonHeight={16}
                    borderRadius='xl'
                    startColor={skeletonStartColor}
                    endColor={skeletonEndColor}
                  />
                </VStack>
              ) : (
                <Accordion allowMultiple>
                  <AccordionItem
                    border='1px solid'
                    borderColor={grayBorderColor}
                    borderRadius='xl'
                    mb={6}
                    bg={whiteBg}
                    _hover={{
                      borderColor: 'purple.400',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 35px rgba(159, 122, 234, 0.2)',
                    }}
                    transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <AccordionButton
                      p={{ base: 8, md: 6 }}
                      minH='60px'
                      _hover={{ bg: 'transparent' }}
                      _expanded={{
                        bg: purpleExpandedBg,
                        borderBottomRadius: 0,
                      }}
                      style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <Box flex='1' textAlign='left'>
                        <HStack spacing={3}>
                          <Text fontSize='2xl'>💼</Text>
                          <Text
                            fontSize='lg'
                            fontWeight='bold'
                            color={purpleTextColor}
                          >
                            Do you freelance?
                          </Text>
                        </HStack>
                      </Box>
                      <AccordionIcon color={purpleTextColor} />
                    </AccordionButton>
                    <AccordionPanel
                      pt={4}
                      pb={6}
                      px={6}
                      bg={purpleExpandedBg}
                      borderBottomRadius='xl'
                    >
                      <Text
                        fontSize='md'
                        color={whiteTextColor}
                        lineHeight='relaxed'
                        ml={12}
                      >
                        Yes — on select projects that excite me. I&apos;m
                        particularly drawn to work that involves creative
                        problem-solving, AI integration, or building tools that
                        genuinely help people.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                    border='1px solid'
                    borderColor={grayBorderColor}
                    borderRadius='xl'
                    mb={4}
                    bg={whiteBg}
                    _hover={{
                      borderColor: 'teal.400',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(56, 178, 172, 0.15)',
                    }}
                    transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <AccordionButton
                      p={{ base: 8, md: 6 }}
                      minH='60px'
                      _hover={{ bg: 'transparent' }}
                      _expanded={{
                        bg: tealExpandedBg,
                        borderBottomRadius: 0,
                      }}
                      style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <Box flex='1' textAlign='left'>
                        <HStack spacing={3}>
                          <Text fontSize='2xl'>💡</Text>
                          <Text
                            fontSize='lg'
                            fontWeight='bold'
                            color={tealTextColor}
                          >
                            Can we collaborate?
                          </Text>
                        </HStack>
                      </Box>
                      <AccordionIcon color={tealTextColor} />
                    </AccordionButton>
                    <AccordionPanel
                      pt={4}
                      pb={6}
                      px={6}
                      bg={tealExpandedBg}
                      borderBottomRadius='xl'
                    >
                      <Text
                        fontSize='md'
                        color={whiteTextColor}
                        lineHeight='relaxed'
                        ml={12}
                      >
                        Absolutely! Especially if it&apos;s fun, weird, or
                        meaningful. I love working on projects that push
                        boundaries, solve real problems, or explore new ways of
                        thinking about user experience.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                    border='1px solid'
                    borderColor={grayBorderColor}
                    borderRadius='xl'
                    mb={4}
                    bg={whiteBg}
                    _hover={{
                      borderColor: 'pink.400',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(236, 72, 153, 0.15)',
                    }}
                    transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <AccordionButton
                      p={{ base: 8, md: 6 }}
                      minH='60px'
                      _hover={{ bg: 'transparent' }}
                      _expanded={{
                        bg: pinkExpandedBg,
                        borderBottomRadius: 0,
                      }}
                      style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <Box flex='1' textAlign='left'>
                        <HStack spacing={3}>
                          <Text fontSize='2xl'>⚙️</Text>
                          <Text
                            fontSize='lg'
                            fontWeight='bold'
                            color={pinkTextColor}
                          >
                            Tools I use daily?
                          </Text>
                        </HStack>
                      </Box>
                      <AccordionIcon color={pinkTextColor} />
                    </AccordionButton>
                    <AccordionPanel
                      pt={4}
                      pb={6}
                      px={6}
                      bg={pinkExpandedBg}
                      borderBottomRadius='xl'
                    >
                      <Text
                        fontSize='md'
                        color={whiteTextColor}
                        lineHeight='relaxed'
                        ml={12}
                      >
                        VS Code for development, Framer for prototyping, ChatGPT
                        for brainstorming and problem-solving, Figma for design
                        work, and lots of caffeine to fuel the creative process.
                        ☕
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </Box>
          </Box>

          <Box
            display={{ base: 'block', lg: 'none' }}
            pt={20}
            pb={24}
            px={6}
            mt={4}
          >
            <Heading
              as='h2'
              fontSize='3xl'
              textAlign='center'
              mb={10}
              fontWeight='800'
              display='flex'
              alignItems='center'
              justifyContent='center'
              gap={3}
            >
              <Text fontSize='3xl'>💬</Text>
              <Text
                bgGradient='linear(to-r, purple.400, teal.400)'
                bgClip='text'
              >
                Frequently Asked
              </Text>
            </Heading>

            <VStack spacing={6} maxW='lg' mx='auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ width: '100%' }}
              >
                <Box
                  w='full'
                  bg={whiteBg}
                  borderRadius='2xl'
                  border='2px solid'
                  borderColor={grayBorderColor}
                  boxShadow='lg'
                  overflow='hidden'
                  _hover={{
                    borderColor: purpleBorderColor,
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(159, 122, 234, 0.15)',
                  }}
                  transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  <Accordion allowToggle>
                    <AccordionItem border='none'>
                      <AccordionButton
                        p={6}
                        minH='80px'
                        _hover={{ bg: 'transparent' }}
                        _expanded={{
                          bg: purpleExpandedBg,
                        }}
                      >
                        <Box flex='1' textAlign='left'>
                          <HStack spacing={4}>
                            <Text fontSize='3xl'>💼</Text>
                            <Text
                              fontSize='xl'
                              fontWeight='700'
                              color={purpleTextColor}
                            >
                              Do you freelance?
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon fontSize='2xl' color={purpleTextColor} />
                      </AccordionButton>
                      <AccordionPanel
                        pt={2}
                        pb={6}
                        px={6}
                        bg={purpleExpandedBg}
                      >
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Text
                            fontSize='lg'
                            color={grayDarkColor}
                            lineHeight='relaxed'
                            fontWeight='500'
                          >
                            Yes — on select projects that excite me. I&apos;m
                            particularly drawn to creative problem-solving, AI
                            integration, and building tools that help people.
                          </Text>
                        </motion.div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '100%' }}
              >
                <Box
                  w='full'
                  bg={whiteBg}
                  borderRadius='2xl'
                  border='2px solid'
                  borderColor={grayBorderColor}
                  boxShadow='lg'
                  overflow='hidden'
                  _hover={{
                    borderColor: tealBorderColor,
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(56, 178, 172, 0.15)',
                  }}
                  transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  <Accordion allowToggle>
                    <AccordionItem border='none'>
                      <AccordionButton
                        p={6}
                        minH='80px'
                        _hover={{ bg: 'transparent' }}
                        _expanded={{
                          bg: tealExpandedBg,
                        }}
                      >
                        <Box flex='1' textAlign='left'>
                          <HStack spacing={4}>
                            <Text fontSize='3xl'>💡</Text>
                            <Text
                              fontSize='xl'
                              fontWeight='700'
                              color={tealTextColor}
                            >
                              Can we collaborate?
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon fontSize='2xl' color={tealTextColor} />
                      </AccordionButton>
                      <AccordionPanel pt={2} pb={6} px={6} bg={tealExpandedBg}>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Text
                            fontSize='lg'
                            color={grayDarkColor}
                            lineHeight='relaxed'
                            fontWeight='500'
                          >
                            Absolutely! Especially if it&apos;s fun, weird, or
                            meaningful. I love projects that push boundaries and
                            solve real problems.
                          </Text>
                        </motion.div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ width: '100%' }}
              >
                <Box
                  w='full'
                  bg={whiteBg}
                  borderRadius='2xl'
                  border='2px solid'
                  borderColor={grayBorderColor}
                  boxShadow='lg'
                  overflow='hidden'
                  _hover={{
                    borderColor: pinkBorderColor,
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(236, 72, 153, 0.15)',
                  }}
                  transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  <Accordion allowToggle>
                    <AccordionItem border='none'>
                      <AccordionButton
                        p={6}
                        minH='80px'
                        _hover={{ bg: 'transparent' }}
                        _expanded={{
                          bg: pinkExpandedBg,
                        }}
                      >
                        <Box flex='1' textAlign='left'>
                          <HStack spacing={4}>
                            <Text fontSize='3xl'>⚙️</Text>
                            <Text
                              fontSize='xl'
                              fontWeight='700'
                              color={pinkTextColor}
                            >
                              Tools I use daily?
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon fontSize='2xl' color={pinkTextColor} />
                      </AccordionButton>
                      <AccordionPanel pt={2} pb={6} px={6} bg={pinkExpandedBg}>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Text
                            fontSize='lg'
                            color={grayDarkColor}
                            lineHeight='relaxed'
                            fontWeight='500'
                          >
                            VS Code, Framer, ChatGPT, Figma, and lots of
                            caffeine to fuel the creative process. ☕
                          </Text>
                        </motion.div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </motion.div>
            </VStack>
          </Box>
        </Section>
      </Container>

      {/* Footer CTA Section */}
      <Section delay={0.8}>
        <Box
          bg={useColorModeValue(
            'linear-gradient(135deg, rgba(56, 178, 172, 0.05) 0%, rgba(66, 153, 225, 0.05) 50%, rgba(159, 122, 234, 0.05) 100%)',
            'linear-gradient(135deg, rgba(56, 178, 172, 0.1) 0%, rgba(66, 153, 225, 0.1) 50%, rgba(159, 122, 234, 0.1) 100%)'
          )}
          py={{ base: 16, md: 20 }}
          px={{ base: 6, md: 8 }}
          textAlign='center'
          position='relative'
          overflow='hidden'
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'linear-gradient(45deg, transparent 30%, rgba(56, 178, 172, 0.1) 50%, transparent 70%)',
            animation: 'shimmer 3s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        >
          <Container maxW='4xl' position='relative' zIndex={1}>
            <VStack spacing={8}>
              <Box>
                <Text
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight='800'
                  bgGradient='linear(135deg, teal.400, blue.500, purple.500)'
                  bgClip='text'
                  letterSpacing='-0.02em'
                  lineHeight='1.1'
                  mb={4}
                >
                  Enjoyed this? Let&apos;s connect! ✨
                </Text>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={useColorModeValue('gray.600', 'gray.300')}
                  maxW='2xl'
                  mx='auto'
                  lineHeight='relaxed'
                  fontWeight='500'
                >
                  Ready to bring your ideas to life? I&apos;d love to hear about
                  your project and explore how we can create something amazing
                  together.
                </Text>
              </Box>

              <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={4}
                justify='center'
                align='center'
                w='100%'
              >
                <Button
                  as='a'
                  href='#contact'
                  size='lg'
                  variant='solid'
                  bg='linear-gradient(135deg, #38b2ac 0%, #4299e1 50%, #9f7aea 100%)'
                  backgroundSize='200% 200%'
                  color='white'
                  minW={{ base: '280px', sm: '200px' }}
                  h='56px'
                  fontSize='lg'
                  fontWeight='700'
                  borderRadius='xl'
                  boxShadow='0 8px 25px rgba(56, 178, 172, 0.3)'
                  _hover={{
                    backgroundPosition: '100% 0%',
                    transform: 'translateY(-3px) scale(1.02)',
                    boxShadow: '0 15px 35px rgba(56, 178, 172, 0.4)',
                  }}
                  _active={{
                    transform: 'translateY(-1px) scale(1.01)',
                    boxShadow: '0 8px 20px rgba(56, 178, 172, 0.3)',
                  }}
                  transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  🚀 Start a Project
                </Button>

                <Button
                  as='a'
                  href='/resume.pdf'
                  download='Tony_Yam_Resume.pdf'
                  size='lg'
                  variant='outline'
                  borderColor='teal.400'
                  color={useColorModeValue('teal.600', 'teal.300')}
                  minW={{ base: '280px', sm: '180px' }}
                  h='56px'
                  fontSize='lg'
                  fontWeight='600'
                  borderRadius='xl'
                  _hover={{
                    bg: 'teal.50',
                    borderColor: 'teal.500',
                    transform: 'translateY(-3px) scale(1.02)',
                    boxShadow: '0 15px 35px rgba(56, 178, 172, 0.2)',
                  }}
                  _active={{
                    transform: 'translateY(-1px) scale(1.01)',
                  }}
                  transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                >
                  📄 View Resume
                </Button>
              </Flex>

              <VStack spacing={3}>
                <Text
                  fontSize='sm'
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontStyle='italic'
                  opacity={0.8}
                >
                  💡 Usually respond within 24 hours
                </Text>

                <Text
                  fontSize='sm'
                  color={useColorModeValue('gray.600', 'gray.400')}
                  textAlign='center'
                >
                  Want to know how I built this? →{' '}
                  <Link
                    as={NextLink}
                    href='/journey'
                    color='teal.400'
                    fontWeight='600'
                    textDecoration='underline'
                    _hover={{
                      color: 'teal.300',
                      textDecoration: 'none',
                    }}
                  >
                    Read my journey
                  </Link>
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Section>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
        <ModalOverlay bg='blackAlpha.600' backdropFilter='blur(10px)' />
        <ModalContent
          bg={modalBg}
          borderRadius='2xl'
          border='1px solid'
          borderColor={modalBorderColor}
          maxW='90vw'
          mx={4}
        >
          <ModalHeader
            pb={2}
            borderBottom='1px solid'
            borderColor={modalHeaderBorderColor}
          >
            <Text fontSize='xl' fontWeight='bold'>
              {selectedProject?.title}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={6}>
            {selectedProject && (
              <VStack align='start' spacing={4}>
                <Text fontSize='md' color={modalTextColor} lineHeight='relaxed'>
                  {selectedProject.description}
                </Text>

                <Box>
                  <Text
                    fontSize='sm'
                    fontWeight='bold'
                    mb={2}
                    color={`${selectedProject.color}.400`}
                  >
                    Tech Stack:
                  </Text>
                  <Flex wrap='wrap' gap={2}>
                    {selectedProject.stack.map((tech, index) => (
                      <Badge
                        key={index}
                        colorScheme={selectedProject.color}
                        variant='subtle'
                        px={3}
                        py={1}
                        borderRadius='full'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                <Box>
                  <Text
                    fontSize='sm'
                    fontWeight='bold'
                    mb={2}
                    color={`${selectedProject.color}.400`}
                  >
                    Key Features:
                  </Text>
                  <VStack align='start' spacing={1}>
                    {selectedProject.features.map((feature, index) => (
                      <Text key={index} fontSize='sm' color={modalTextColor}>
                        • {feature}
                      </Text>
                    ))}
                  </VStack>
                </Box>

                <Box
                  p={4}
                  bg={`${selectedProject.color}.900`}
                  borderRadius='md'
                  borderLeft='3px solid'
                  borderColor={`${selectedProject.color}.400`}
                  w='full'
                >
                  <Text
                    fontSize='sm'
                    fontWeight='600'
                    color={`${selectedProject.color}.300`}
                  >
                    Result: {selectedProject.result}
                  </Text>
                </Box>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter
            borderTop='1px solid'
            borderColor={modalFooterBorderColor}
          >
            <HStack spacing={3}>
              {selectedProject?.liveUrl && (
                <Button
                  onClick={() => {
                    if (
                      selectedProject.id === 'herocraft' &&
                      selectedProject.liveUrl
                    ) {
                      window.open(selectedProject.liveUrl, '_blank');
                    } else {
                      toast({
                        title: '🚧 In Development',
                        description: 'This project will be available soon.',
                        status: 'info',
                        duration: 3000,
                        isClosable: true,
                        position: 'top',
                      });
                    }
                  }}
                  leftIcon={<Icon as={IoOpenOutline} aria-hidden='true' />}
                  colorScheme={selectedProject?.color}
                  variant='solid'
                  size='sm'
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
                      position: 'top',
                    });
                  }}
                  leftIcon={<Icon as={IoCodeSlash} aria-hidden='true' />}
                  variant='outline'
                  colorScheme={selectedProject?.color}
                  size='sm'
                  aria-label={`View source code of ${selectedProject?.title}`}
                >
                  View Code
                </Button>
              )}
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showScrollTop && (
        <Button
          position='fixed'
          bottom={{ base: 6, md: 8 }}
          right={{ base: 6, md: 8 }}
          size='lg'
          colorScheme='teal'
          borderRadius='full'
          w='56px'
          h='56px'
          minH='44px'
          boxShadow='0 8px 25px rgba(56, 178, 172, 0.3)'
          zIndex={1000}
          onClick={scrollToTop}
          aria-label='回到顶部'
          _hover={{
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 12px 35px rgba(56, 178, 172, 0.4)',
          }}
          _active={{
            transform: 'translateY(0px) scale(1.02)',
          }}
          transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
          sx={{
            '@keyframes fadeInUp': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0px)' },
            },
            animation: 'fadeInUp 0.3s ease-out',
          }}
        >
          <Text fontSize='xl' lineHeight='1'>
            ↑
          </Text>
        </Button>
      )}
    </Layout>
  );
});

export default Home;
export { getServerSideProps } from '../components/chakra';
