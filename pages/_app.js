import { useState, useEffect } from 'react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import StitchPreloader from '../components/stitch-preloader'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    // Always show preloader on page load/refresh
    // The preloader will handle its own timing and completion
  }, [])

  const handlePreloaderComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowPreloader(false)
    }, 300)
  }

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      {showPreloader && (
        <StitchPreloader onComplete={handlePreloaderComplete} />
      )}
      {!isLoading && (
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      )}
    </Chakra>
  )
}

export default Website
