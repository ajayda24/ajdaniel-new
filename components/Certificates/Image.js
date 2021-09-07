import Image from 'next/image'
import {toBase64,shimmer} from '../Utils/ImageBlur'


export default function ImageDiv(props) {
  return (
    <div
      className={`flex items-center max-w-sm min-w-[15rem] min-h-[12rem] md:min-w-[20rem] md:min-h-[15rem] ring-4 ring-offset-1 p-1 relative unset-img ${props.parent}`}
      data-aos='zoom-in'
      data-aos-offset='0'
    >
      <Image
        //  src={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src={props.src}
        alt={props.alt}
        layout='fill'
        className='custom-img'
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        priority
      />
    </div>
  )
}
