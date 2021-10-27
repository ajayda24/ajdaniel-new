import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Head from 'next/head'
import Script from 'next/script'
import "@fontsource/comic-neue"

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      disable: () => {
        if (location.hash == '#skills') {
          return true
        } else if (location.hash == '#projects') {
          return true
        } else {
          return false
        }
      },
      debounceDelay: 0,
      throttleDelay: 0,
    })
    window.addEventListener('load', AOS.refresh)
  }, [])
  
  return (
    <>
      <Head>
        <script src='../cdn/aos/aos.js'></script>
        <link rel='stylesheet' href='../cdn/aos/aos-original.css' />
        <link rel='stylesheet' href='../cdn/animate/animate.css' />
        <link rel='stylesheet' href='../cdn/boxicons/boxicons.css' />
        <link rel='stylesheet' href='../cdn/devicon/devicon.css' />
        <title>Ajay Daniel Trevor</title>
        <link rel='manifest' href='/manifest.json' />
        <meta name='application-name' content='Ajay Daniel Trevor' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Ajay Daniel Trevor' />
        <meta
          name='description'
          content='I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc.  Hire me as a web developer.'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/logo1.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/logo1.png' />

        <link rel='mask-icon' href='/logo1.png' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon1.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://ajdaniel.gq' />
        <meta name='twitter:title' content='Ajay Daniel Trevor' />
        <meta
          name='twitter:description'
          content='I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc. Hire me as a web developer.'
        />
        <meta name='twitter:image' content='https://ajdaniel.gq/logo1.png' />
        <meta name='twitter:creator' content='@ajayda24' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ajay Daniel Trevor' />
        <meta
          property='og:description'
          content='I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc. Hire me as a web developer.'
        />
        <meta property='og:site_name' content='Ajay Daniel Trevor' />
        <meta property='og:url' content='https://ajdaniel.gq' />
        <meta property='og:image' content='https://ajdaniel.gq/logo1.png' />
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01+'px');
                document.documentElement.setAttribute('data-theme','my-theme');
                window.addEventListener('resize', () => {
                document.documentElement.style.setProperty('--vh',window.innerHeight * 0.01 + 'px')});
          `,
        }}
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
