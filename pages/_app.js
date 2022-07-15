import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
