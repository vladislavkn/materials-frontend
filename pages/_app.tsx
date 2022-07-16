import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import '../styles/globals.css'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default CustomApp
