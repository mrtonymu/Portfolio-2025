import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="description" content="Full-stack developer and designer creating innovative digital experiences. Specializing in React, Next.js, and modern web technologies." />
          <meta name="keywords" content="developer, designer, full-stack, React, Next.js, portfolio, web development, UI/UX" />
          <meta name="author" content="Tony Yam" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Tony Yam - Portfolio" />
          <meta property="og:title" content="Tony Yam - Full-Stack Developer & Designer" />
          <meta property="og:description" content="Full-stack developer and designer creating innovative digital experiences. Specializing in React, Next.js, and modern web technologies." />
          <meta property="og:image" content="/card.png" />
          <meta property="og:url" content="https://your-domain.com" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Tony Yam - Full-Stack Developer & Designer" />
          <meta name="twitter:description" content="Full-stack developer and designer creating innovative digital experiences. Specializing in React, Next.js, and modern web technologies." />
          <meta name="twitter:image" content="/card.png" />
          
          {/* Favicon and Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          
          {/* Schema.org Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Tony Yam",
                "jobTitle": "Full-Stack Developer & Designer",
                "description": "Full-stack developer and designer creating innovative digital experiences. Specializing in React, Next.js, and modern web technologies.",
                "url": "https://your-domain.com",
                "sameAs": [
                  "https://www.instagram.com/mrtonyyam/",
                  "https://github.com/mrtonymu"
                ],
                "knowsAbout": [
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "UI/UX Design",
                  "Web Development"
                ]
              })
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
