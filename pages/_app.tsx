import type { AppProps } from 'next/app'
import '../styles/globals.css'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default CustomApp
