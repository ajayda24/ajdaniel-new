import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import 'animate.css'
import Head from 'next/head'
import Script from 'next/script'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import 'boxicons/css/boxicons.min.css'
import 'devicon/devicon.min.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])
  // window.addEventListener('resize', () => {
  //   document.documentElement.style.setProperty(
  //     '--vh',
  //     window.innerHeight * 0.01 + 'px'
  //   )
  // })
  return (
    <>
      <Head>
        <title>AJ Daniel</title>
        <link rel='manifest' href='/manifest.json' />
        {/* <link rel='manifest' href='/manifest.json' /> */}
        <meta name='application-name' content='AJ Daniel' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='AJ Daniel' />
        <meta
          name='description'
          content='I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc.'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta
          name='msapplication-config'
          content='/static/icons/browserconfig.xml'
        />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/logo.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/logo.png' />

        <link rel='mask-icon' href='/logo.png' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://ajdaniel.vercel.app' />
        <meta name='twitter:title' content='AJ Daniel' />
        <meta
          name='twitter:description'
          content='I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc.'
        />
        <meta
          name='twitter:image'
          content='https://ajdaniel.vercel.app/logo.png'
        />
        <meta name='twitter:creator' content='@ajayda24' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='AJ Daniel' />
        <meta
          property='og:description'
          content='I am a MERN Stack Developer. I have done so many projects with amazing web technologies such as Node.js, Next.js, React.js, MongoDB etc.'
        />
        <meta property='og:site_name' content='AJ Daniel' />
        <meta property='og:url' content='https://ajdaniel.vercel.app' />
        <meta
          property='og:image'
          content='https://ajdaniel.vercel.app/logo.png'
        />
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
