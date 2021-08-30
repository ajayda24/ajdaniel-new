import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
          rel='stylesheet'
        />
      </Head>{' '}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
