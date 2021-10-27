
import ImageDiv from './Image'
import NodeJSCert from '../../public/images/certificates/nodejs-cert.webp'
import NextJSCert from '../../public/images/certificates/nextjs-cert.webp'
import ReactJSCert from '../../public/images/certificates/reactjs-cert.webp'
import CrossroadsNodeJSCert from '../../public/images/certificates/crossroads-nodejs-cert.webp'
import WebDevelopmentCert from '../../public/images/certificates/webdevelopment-cert.webp'
import GCICert from '../../public/images/certificates/gci.webp'


export default function Certificates() {
  return (
    <div
      id='certificates'
      className='h_mobile-100 sm:min-h-screen overflow-hidden  flex flex-col justify-between'
    >
      <h1
        className='text-center font-black text-4xl p-2 sm:text-7xl text-light  mt-2'
        data-aos='lzoom-in'
      >
        My Certificates
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-5 justify-center my-8 px-5'>
        <ImageDiv src={NextJSCert} alt='NextJS Certificate' />
        <ImageDiv src={ReactJSCert} alt='ReactJS Certificate' />
        <ImageDiv
          src={CrossroadsNodeJSCert}
          parent='row-span-2'
          alt='Crossroads NodeJS Certificate'
        />
        <ImageDiv src={NodeJSCert} alt='NodeJS Certificate' />
        <ImageDiv
          src={WebDevelopmentCert}
          alt='Web Development Bootcamp Certificate'
        />
        <ImageDiv
          src={GCICert}
          alt='Google Code-in Certificate'
        />
        {/* <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/nextjs-cert_9wkUB3UTt.webp?updatedAt=1631619460115'
          alt='NextJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/reactjs-cert_mGwNjyyAgd.webp?updatedAt=1631619462315'
          alt='ReactJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/crossroads-nodejs-cert_RspcAXsbbY.webp?updatedAt=1631619457115'
          alt='Crossroads NodeJS Certificate'
          parent='row-span-2'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/nodejs-cert_8b00HE3pq.webp?updatedAt=1631619461315'
          alt='NodeJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/webdevelopment-cert_wncqMjEiB.webp?updatedAt=1631619462527'
          alt='Web Development Bootcamp Certificate'
        /> */}
      </div>
      <img src='../background/3-crop1.png' alt='' width='100%' />
    </div>
  )
}
