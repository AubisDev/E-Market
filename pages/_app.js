import { CartProvider } from '../context/cart'
import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
          <meta charSet='utf-8' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>E-Store: my new E-commerce</title>
      </Head>
      <Layout>
        <Component {...pageProps} />    
      </Layout>  
    </CartProvider>
  )
}

export default MyApp
