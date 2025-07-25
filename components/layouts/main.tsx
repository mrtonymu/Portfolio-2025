import Head from 'next/head'
import { NextRouter } from 'next/router'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import FloatingParticles from '../floating-particles'
import PWAInstallButton from '../pwa-install-button'
import OfflineIndicator from '../offline-indicator'
import { ReactNode, useEffect } from 'react'
import { initializePWA, initializeOfflineDetection } from '../../utils/pwa'

// VoxelDog removed from global layout - now only rendered in About section

interface MainProps {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => {
  useEffect(() => {
    // Initialize PWA functionality
    initializePWA();
    initializeOfflineDetection();
  }, []);

  return (
    <Box as="main" pb={8} position="relative">
      <FloatingParticles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tony Yam - Freelance Web Developer helping solo creators and business owners build fast, functional websites without agency overhead or template limitations. Based in Kuala Lumpur, Malaysia." />
        <meta name="author" content="Tony Yam" />
        <meta name="keywords" content="freelance web developer, custom websites, React developer, Next.js developer, Kuala Lumpur developer, Malaysia web developer, business websites, solo creator websites, no-code alternatives, web development services" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#319795" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tony Portfolio" />
        <link rel="apple-touch-icon" href="/icon-192x192.svg" />
        <link rel="canonical" href="https://tonymumu.vercel.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tonymumu.vercel.app" />
        <meta property="og:title" content="Tony Yam - Freelance Web Developer | Custom Websites for Creators" />
        <meta property="og:description" content="I help solo creators and business owners build fast, functional websites without agency overhead. Specializing in custom web solutions, payment integration, and user-friendly designs." />
        <meta property="og:image" content="https://tonymumu.vercel.app/card.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Tony Yam - Freelance Web Developer Portfolio" />
        <meta property="og:site_name" content="Tony Yam Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tonymumu.vercel.app" />
        <meta name="twitter:title" content="Tony Yam - Freelance Web Developer | Custom Websites for Creators" />
        <meta name="twitter:description" content="I help solo creators and business owners build fast, functional websites without agency overhead. Specializing in custom web solutions, payment integration, and user-friendly designs." />
        <meta name="twitter:image" content="https://tonymumu.vercel.app/card.png" />
        <meta name="twitter:image:alt" content="Tony Yam - Freelance Web Developer Portfolio" />
        <meta name="twitter:creator" content="@mrtonyyam" />
        <meta name="twitter:site" content="@mrtonyyam" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#38B2AC" />
        <meta name="msapplication-TileColor" content="#38B2AC" />
        <meta name="application-name" content="Tony Yam Portfolio" />
        
        <title>Tony Yam - Freelance Web Developer | Custom Websites for Creators</title>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tony Yam",
              "jobTitle": "Freelance Web Developer",
              "description": "Freelance Web Developer helping solo creators and business owners build fast, functional websites without agency overhead or template limitations.",
              "url": "https://tonymumu.vercel.app",
              "sameAs": [
                "https://twitter.com/mrtonyyam",
                "https://github.com/tonymumu",
                "https://linkedin.com/in/tonyyam"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kuala Lumpur",
                "addressCountry": "Malaysia"
              },
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Custom Website Development",
                "E-commerce Solutions",
                "Payment Integration"
              ],
              "offers": {
                "@type": "Service",
                "name": "Custom Website Development",
                "description": "Professional web development services for solo creators and business owners",
                "provider": {
                  "@type": "Person",
                  "name": "Tony Yam"
                }
              }
            })
          }}
        />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      // Service worker registered successfully
                    })
                    .catch(function(registrationError) {
                      // Service worker registration failed
                    });
                });
              }
            `
          }}
        />
      </Head>

      <NavBar path={router.asPath} />

      <Container 
        maxW={{ base: "100%", sm: "container.sm", md: "container.md", lg: "container.lg" }}
        px={{ base: 4, sm: 6, md: 8 }}
        pt={{ base: 0, md: 0 }}
      >
        {children}

        <Footer />
      </Container>
      
      {/* PWA Components */}
      <PWAInstallButton position="fixed" showText={false} />
      <OfflineIndicator position="top" />
    </Box>
  )
}

export default Main
