import { Container, Heading, SimpleGrid, Text, Box, VStack, Button, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import NextLink from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'

import thumbTikTik from '../public/images/works/TikTik.png'
import thumbHitzLyrics from '../public/images/works/HitzLyrics.jpg'


const Works = () => (
  <Layout title="Projects">
    <Container maxW="container.lg" pt={20}>
      <Box mb={6} scrollMarginTop="80px">
        <Button as={NextLink} href="/" leftIcon={<ChevronLeftIcon />} variant="ghost" colorScheme="teal">
          Back to Home
        </Button>
      </Box>
      
      <Heading as="h1" fontSize={32} mb={4} scrollMarginTop="80px">
        Projects
      </Heading>
      
      <Text fontSize="lg" mb={8} color={useColorModeValue('gray.600', 'gray.300')}>
        Here are some projects I&apos;ve built while learning and experimenting with different technologies. 
        Each one taught me something new about development, problem-solving, and staying resilient when things break.
      </Text>

      {/* Featured Project - Portfolio */}
      <Section delay={0.1}>
        <Box 
          p={6} 
          bg={useColorModeValue('teal.50', 'teal.900')} 
          borderRadius="lg"
          mb={8}
        >
          <Heading as="h2" size="lg" mb={4}>
            Portfolio Website (This Site)
          </Heading>
          
          <VStack align="start" spacing={3} mb={4}>
            <Text>
              <strong>Tech Stack:</strong> Next.js, Three.js, Chakra UI, React
            </Text>
            <Text>
              <strong>What I Built:</strong> A personal landing page that showcases my journey from customer support to dropshipping to web development. Features a 3D rotating dog, smooth animations, and responsive design.
            </Text>
            <Text>
              <strong>Challenges:</strong> Added WebP optimization, restructured the build process, experimented with A/B testing, then accidentally broke Fast Refresh and had to rebuild the entire repo 💀
            </Text>
            <Text>
              <strong>What I Learned:</strong> Version control is crucial, debugging requires patience, and sometimes starting fresh is the fastest solution (even if it hurts your ego 😂)
            </Text>
          </VStack>
          
          <Text fontStyle="italic" color={useColorModeValue('teal.700', 'teal.200')}>
            &ldquo;The best way to learn is to break things and fix them again.&rdquo;
          </Text>
        </Box>
      </Section>

      <Heading as="h2" fontSize={24} mb={6}>
        Learning Projects
      </Heading>
      
      <Text fontSize="md" mb={6} color={useColorModeValue('gray.600', 'gray.400')}>
        These are clone projects I built to understand how popular applications work under the hood.
      </Text>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="TikTik" title="TikTik" thumbnail={thumbTikTik}>
            TikTok Clone - Video sharing app with Google Auth, file uploads, and social features. 
            Built to understand video streaming and user authentication.
          </WorkGridItem>
        </Section>
        
        <Section delay={0.3}>
          <WorkGridItem
            id="HitzLyrics"
            title="HitzLyrics"
            thumbnail={thumbHitzLyrics}
          >
            Spotify Clone - Music streaming interface with playlists, search, and audio controls. 
            Focused on learning API integration and media handling.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
      <Box mt={12} p={6} bg={useColorModeValue('blue.50', 'blue.900')} borderRadius="lg" textAlign="center">
        <Heading as="h3" size="md" mb={4}>
          Want to work together?
        </Heading>
        <Text mb={4}>
          I&apos;m always interested in new projects and collaborations. Let&apos;s build something useful together.
        </Text>
        <Button as={NextLink} href="/#contact" colorScheme="blue" size="lg">
          Get In Touch
        </Button>
      </Box>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
