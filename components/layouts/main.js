import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import FloatingParticles from '../floating-particles'

// VoxelDog removed from global layout - now only rendered in About section

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} position="relative">
      <FloatingParticles count={15} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tonymumu's homepage - Web developer helping non-tech creatives build smart websites" />
        <meta name="author" content="Tonymumu" />
        <meta name="keywords" content="web developer, website design, dropshipping, fintech, customer support, portfolio" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tonymumu - Web Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mrtonyyam" />
        <meta name="twitter:creator" content="@mrtonyyam" />
        <meta name="twitter:image" content="https://tonymumu.vercel.app/card.png" />
        <meta property="og:site_name" content="Tonymumu" />
        <meta name="og:title" content="Tonymumu - Web Developer Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tonymumu.vercel.app/card.png" />
        <title>TonyMuMu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container 
        maxW={{ base: "100%", sm: "container.sm", md: "container.md", lg: "container.lg" }}
        px={{ base: 4, sm: 6, md: 8 }}
        pt={{ base: 16, md: 20 }}
      >
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
