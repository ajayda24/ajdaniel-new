
import ImageDiv from './Image'

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
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/NextJS_CmRhOIgPk.jpg?updatedAt=1630924525178'
          alt='NodeJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/ReactJS_ulXW9Obfp.jpg?updatedAt=1630924527144'
          alt='NodeJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/crossroads_master_project_page-0001_5v4nUzfhF.jpg?updatedAt=1630924512290'
          alt='NodeJS Certificate'
          parent='row-span-2'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/NodeJS_9nLg9lbVE.jpg?updatedAt=1630924526661'
          alt='NodeJS Certificate'
        />
        <ImageDiv
          src='https://ik.imagekit.io/ajayda24/Certificates/Web_development_zKrBoGlxf.jpg?updatedAt=1630935407670'
          alt='NodeJS Certificate'
        />
      </div>
      <img src='../background/3-crop1.png' alt='' width='100%' />
    </div>
  )
}
