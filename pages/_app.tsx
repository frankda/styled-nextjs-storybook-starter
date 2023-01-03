import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteConfigProvider from 'styles/Theme/SiteConfigProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteConfigProvider>
      <Component {...pageProps} />
    </SiteConfigProvider>
  )
}
