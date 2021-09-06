

import Image from 'next/image'
import profilePic from '../public/images/aj/ajay.png'
export default function About() {
  return (
    <div
      id='about'
      className='h_mobile-100 sm:min-h-screen overflow-hidden  flex flex-col justify-between'
    >
      <h1
        className='text-center font-black text-4xl p-2 sm:text-7xl text-light  mt-2'
        data-aos='fade-down'
      >
        About Me
      </h1>

      <div className='flex flex-col md:flex-row max-w-md md:max-w-[55rem] gap-5 md:gap-16 justify-between mx-auto items-center mt-5 mb-4 md:mt-10'>
        <div className='max-w-[15rem] ring-4 rounded-full ring-offset-1 p-1' data-aos='fade-left'>
          <div className='flex items-center'>
            <Image
              src={profilePic}
              alt='Picture of the author'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='flex flex-col min-w-min md:max-w-lg ' data-aos='fade-right'>
          <h1 className='text-light text-center font-black text-2xl p-2 sm:text-4xl'>
            Ajay Daniel Trevor
          </h1>
          <p className='text-light p-2 px-5 font-black text-lg sm:text-xl'>
            I had loved making websites since my 8th standard. I learned the
            basics of HTML and CSS from w3schools. After that I used javascript
            for making my website more interactive. I found so many online
            tutorials, youtube videos, and udemy courses for sharpening my
            development path and also improved my skills. When I was learning
            from these platforms I did so many projects to practice what
            I am learning. These all brought me to the programming world.
          </p>
        </div>
      </div>
      <img src='../background/3-crop1.png' alt='' width='100%' />
    </div>
  )
}
