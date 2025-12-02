// App.jsx - UPDATED
import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import Services from './components/Services'

// Lazy load components
const Process = lazy(() => import('./components/Process'))
const TechStack = lazy(() => import('./components/TechStack'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Team = lazy(() => import('./components/Team'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const CTA = lazy(() => import('./components/CTA'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
      >
        <div className="w-16 h-16 border-4 border-[#3234a2] border-t-transparent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          ⚡
        </div>
      </motion.div>
    </div>
  )
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.pageYOffset
      setVisible(scrolled > 300)
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center bg-gradient-to-r from-[#32a162] to-[#3234a2] text-white"
          style={{
            boxShadow: '0 0 20px rgba(50, 52, 162, 0.3)'
          }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

const InitialLoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#3234a2] via-gray-500 to-[#32a162] rounded-2xl flex items-center justify-center shadow-2xl"
          style={{
            boxShadow: '0 0 60px rgba(50, 52, 162, 0.6), 0 0 100px rgba(80, 200, 120, 0.4)'
          }}
        >
          <span className="text-5xl">🚀</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-2 font-display"
        >
          Lifeboat Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-400 mb-8"
        >
          Loading amazing content...
        </motion.p>

        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#3234a2] via-[#32a162] to-gray-500"
          />
        </div>

        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#3234a2] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50
    })

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#ffffff'
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  if (loading) {
    return <InitialLoadingScreen />
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-50" id="cursor-trail" />

      <Navbar />
      <Hero />
      <StatsBanner />
      <Services />

      <Suspense fallback={<LoadingSpinner />}>
        <Process />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Team />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>

      <ScrollToTop />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3234a2] rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#32a162] rounded-full opacity-10 blur-3xl"
        />
      </div>
    </div>
  )
}

export default App