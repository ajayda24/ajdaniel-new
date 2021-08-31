import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import 'animate.css'
import Head from 'next/head'
import Script from 'next/script'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {AOS.init()}, [])
  // window.addEventListener('resize', () => {
  //   document.documentElement.style.setProperty(
  //     '--vh',
  //     window.innerHeight * 0.01 + 'px'
  //   )
  // })
  return (
    <>
      <Head>
        <link
          href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
          rel='stylesheet'
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.13.0/devicon.min.css"></link>
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01+'px');
                
          `,
        }}
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
