import '@/styles/globals.css'
import Layout from 'components/Layout'
import TransitionEffect1 from 'components/TransitionEffect1'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TransitionEffect1>
      <Component {...pageProps} />
      </TransitionEffect1>
    </Layout>
  )
}
