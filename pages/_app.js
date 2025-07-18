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
  const [showPreloader, setShowPreloader] = useState(false)

  useEffect(() => {
    // Check if user should see preloader (new users or users who haven't visited in 3+ days)
    const checkPreloaderVisibility = () => {
      try {
        const lastVisit = localStorage.getItem('lastVisit')
        const now = new Date().getTime()
        const threeDaysInMs = 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        
        if (!lastVisit) {
          // New user - show preloader
          setShowPreloader(true)
          localStorage.setItem('lastVisit', now.toString())
        } else {
          const lastVisitTime = parseInt(lastVisit)
          const timeDifference = now - lastVisitTime
          
          if (timeDifference >= threeDaysInMs) {
            // User hasn't visited in 3+ days - show preloader
            setShowPreloader(true)
            localStorage.setItem('lastVisit', now.toString())
          } else {
            // User visited recently - skip preloader
            setShowPreloader(false)
            setIsLoading(false)
          }
        }
      } catch (error) {
        // If localStorage is not available, show preloader as fallback
        console.warn('localStorage not available:', error)
        setShowPreloader(true)
      }
    }
    
    checkPreloaderVisibility()
  }, [])

  const handlePreloaderComplete = () => {
    setIsLoading(false)
    // Update last visit time when preloader completes
    try {
      const now = new Date().getTime()
      localStorage.setItem('lastVisit', now.toString())
    } catch (error) {
      console.warn('Could not update lastVisit in localStorage:', error)
    }
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
