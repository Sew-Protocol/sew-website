import '../src/styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../src/components/footer'
import SoftLaunchGate from '../src/components/SoftLaunchGate'

export default function MyApp({ Component, pageProps }) {
  return (
    <SoftLaunchGate>
      <Component {...pageProps} />
      <Footer />
    </SoftLaunchGate>
  )
}
