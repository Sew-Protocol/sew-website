import '../src/styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../src/components/footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
