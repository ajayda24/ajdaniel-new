
import ImageDiv from './Image'
import NodeJSCert from '../../public/images/certificates/NodeJS-c.jpg'
import NextJSCert from '../../public/images/certificates/NextJS-c.jpg'
import ReactJSCert from '../../public/images/certificates/ReactJS-c.jpg'
import CrossroadsNodeJSCert from '../../public/images/certificates/crossroads-master-project-c.jpg'
import WebDevelopmentCert from '../../public/images/certificates/Web-development-c.jpg'


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
        <ImageDiv src={NextJSCert} />
        <ImageDiv src={ReactJSCert} />
        <ImageDiv src={CrossroadsNodeJSCert} parent='row-span-2' />
        <ImageDiv src={NodeJSCert} />
        <ImageDiv src={WebDevelopmentCert} />
        {/* <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/NextJS-c_eMC0NZVCg.jpg?updatedAt=1630944685705'
          alt='NextJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/ReactJS-c_Qehs1SX0Y.jpg?updatedAt=1630944688180'
          alt='ReactJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/crossroads_master_project-c_8huHfapSR.jpg?updatedAt=1630944681414'
          alt='Crossroads NodeJS Certificate'
          parent='row-span-2'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/NodeJS-c_WDWT74oQV.jpg?updatedAt=1630944687158'
          alt='NodeJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/Web_development-c_XmGKdjHou.jpg?updatedAt=1630944688204'
          alt='Web Development Bootcamp Certificate'
        /> */}
      </div>
      <img src='../background/3-crop1.png' alt='' width='100%' />
    </div>
  )
}
