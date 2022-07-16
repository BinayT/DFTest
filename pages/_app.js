import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import { store } from '../redux/store'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>

  )
}

export default MyApp
