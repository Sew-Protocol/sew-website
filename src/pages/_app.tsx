import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import SoftLaunchGate from '../components/SoftLaunchGate'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      // Force dark mode class and background to prevent white flash/bleed from Nextra
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.style.backgroundColor = '#0e1a1d'
      document.documentElement.style.colorScheme = 'dark'
    }

    // Run on mount
    handleRouteChange()

    // Run on every route change
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SoftLaunchGate>
      <Component {...pageProps} />
      <Footer />
    </SoftLaunchGate>
  )
}
