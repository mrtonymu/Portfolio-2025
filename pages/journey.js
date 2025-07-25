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
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Title } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'

const Journey = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  
  return (
    <Layout title="Journey">
      <NextSeo
        title="How I Built This Portfolio | Tony Yam"
        description="The story behind building this portfolio - from first idea to final launch. A reflection and case study on the development process."
        canonical="https://tonymumu.vercel.app/journey"
        openGraph={{
          title: 'How I Built This Portfolio | Tony Yam',
          description: 'The story behind building this portfolio - from first idea to final launch.',
          url: 'https://tonymumu.vercel.app/journey',
          type: 'article'
        }}
      />
      
      <Container maxW="container.md" pt={20}>
        <Box mb={6} scrollMarginTop="80px">
          <Button as={NextLink} href="/" leftIcon={<ChevronLeftIcon />} variant="ghost" colorScheme="teal">
            Back to Home
          </Button>
        </Box>
        
        <Title>
          🧱 Behind the Build: How I Built This Portfolio <Badge>Case Study</Badge>
        </Title>
        
        <P>
          Building this portfolio wasn&apos;t just about shipping a website — it was about 
          turning years of fragmented experience into a cohesive story.
        </P>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            📍 Where It Started
          </Heading>
          <P>
            I wanted something more than a resume. Something that felt alive. A space 
            that reflects the way I think, work, and build — especially across customer 
            support, AI, and my own e-commerce journey.
          </P>
          <P>
            My only rule? <strong>No faking it.</strong> Every section had to be real, 
            lived, and earned — but also accessible and well-structured.
          </P>
        </Section>

        <Divider my={6} />

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            📱 Mobile First (Literally)
          </Heading>
          <P>
            Ironically, the first version looked okay on desktop… but mobile was a mess.
          </P>
          <P>
            I kept getting feedback like:
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>&quot;Text is overflowing&quot;</ListItem>
            <ListItem>&quot;Image is cropped weird&quot;</ListItem>
            <ListItem>&quot;Tapping FAQ is painful&quot;</ListItem>
          </UnorderedList>
          <P>
            So I worked with Trae AI and tackled the mobile UX seriously. Over multiple 
            iterations, we did:
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>🔤 Responsive typography and layout rebalancing</ListItem>
            <ListItem>🤖 Framer Motion animations to soften transitions</ListItem>
            <ListItem>🧩 Restructured FAQ to fit better in small screens</ListItem>
            <ListItem>🧠 Clean visual hierarchy with less color noise</ListItem>
          </UnorderedList>
          <Box 
            p={4} 
            bg={bgColor} 
            borderLeft="4px solid" 
            borderColor="teal.500" 
            borderRadius="md"
          >
            <Text fontWeight="bold">
              Now, the mobile site feels intentional, not just &quot;shrunk.&quot;
            </Text>
          </Box>
        </Section>

        <Divider my={6} />

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            💻 Then the Desktop Broke
          </Heading>
          <P>
            After fixing mobile, we found desktop spacing went weird again:
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>Profile image was off-center</ListItem>
            <ListItem>Featured tag misaligned</ListItem>
            <ListItem>Voxel Dog stuck in a forever loading state 🐶</ListItem>
          </UnorderedList>
          <P>
            After some digging, we:
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>
              Adjusted container logic with <code>maxW</code>, <code>mx=&quot;auto&quot;</code> and <code>objectPosition</code>
            </ListItem>
            <ListItem>
              Fixed anchor scroll overlaps using <code>scrollMarginTop</code>
            </ListItem>
            <ListItem>
              Debugged the dog model — turns out it wasn&apos;t reacting to <code>isInView</code> properly 
              due to missing dependencies in the <code>useEffect</code> array. A tiny fix, huge difference.
            </ListItem>
          </UnorderedList>
        </Section>

        <Divider my={6} />

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            🔍 Final QA Pass (and Checklists)
          </Heading>
          <P>
            We went through multiple rounds of testing:
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>✅ Typography</ListItem>
            <ListItem>✅ Hero layout</ListItem>
            <ListItem>✅ Mobile + Desktop scroll behavior</ListItem>
            <ListItem>✅ Animations and loading state</ListItem>
            <ListItem>✅ Profile image cropping</ListItem>
          </UnorderedList>
          <P>
            I also got feedback from others to validate user-perceived improvements, 
            not just technical ones.
          </P>
        </Section>

        <Divider my={6} />

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            ✨ Why This Matters
          </Heading>
          <P>
            This portfolio isn&apos;t a &quot;project&quot; — it&apos;s the product of who I&apos;ve been 
            across jobs, experiments, restarts, and missteps.
          </P>
          <P>
            I&apos;ve worked in call centers, launched a dropshipping business, failed and 
            restarted, explored AI and Web3 tools… and now I finally have a space that 
            brings all of that together.
          </P>
        </Section>

        <Divider my={6} />

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            🚀 What&apos;s Next
          </Heading>
          <P>
            I&apos;ll probably keep refining it. But for now, this site is:
          </P>
          <UnorderedList ml={4} my={4}>
            <ListItem>💬 Honest</ListItem>
            <ListItem>🧠 Structured</ListItem>
            <ListItem>📱 Fully responsive</ListItem>
            <ListItem>🤝 Open for new connections</ListItem>
          </UnorderedList>
          
          <Box 
            p={6} 
            bg={bgColor} 
            border="1px solid" 
            borderColor={borderColor}
            borderRadius="lg"
            textAlign="center"
            mt={6}
          >
            <Text fontSize="lg" fontStyle="italic">
              If you&apos;re reading this and something resonates — drop me a message. 
              Or check out the{' '}
              <Link href="/guestbook" color="teal.500">
                Guestbook
              </Link>
              . I&apos;d love to hear from you.
            </Text>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Journey
export { getServerSideProps } from '../components/chakra'