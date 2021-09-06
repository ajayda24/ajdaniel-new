import Image from 'next/image'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function ImageDiv(props){
 return (
   <div
     className={`flex items-center max-w-sm min-w-[15rem] min-h-[12rem] md:min-w-[20rem] md:min-h-[15rem] ring-4 ring-offset-1 p-1 relative unset-img ${props.parent}`}
    //  data-aos='zoom-in'
    //  data-aos-offset='0'
   >
     <Image
      //  src={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
       src={props.src}
       alt={props.alt}
       layout='fill'
       className='custom-img'
       placeholder='blur'
       blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
     />
   </div>
 )
}