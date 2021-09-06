import Image from 'next/image'
export default function ImageDiv(props){
 return (
   <div
     className={`flex items-center max-w-sm min-w-[15rem] min-h-[12rem] md:min-w-[20rem] md:min-h-[15rem] ring-4 ring-offset-1 p-1 relative unset-img ${props.parent}`}
      data-aos='zoom-in'
      data-aos-offset='0'
   >
     <Image
       src={props.src}
       alt={props.alt}
       layout='fill'
       className='custom-img'
       placeholder='blur'
       blurDataURL={`${props.src}&tr=bl-6`}
     />
   </div>
 )
}