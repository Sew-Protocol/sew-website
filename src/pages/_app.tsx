import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import SoftLaunchGate from '../components/SoftLaunchGate'

export default function MyApp({ Component, pageProps }) {
  return (
    <SoftLaunchGate>
      <Component {...pageProps} />
      <Footer />
    </SoftLaunchGate>
  )
}
