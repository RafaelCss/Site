import '../styles/globals.css'
import "antd/dist/antd.css";
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

