export default function Skills() {
  return (
    <div
      id='skills'
      className='h_mobile-100 sm:min-h-screen bg-no-repeat bg-cover sm:bg-bottom overflow-hidden'
      style={{ backgroundImage: `url(../background/3.svg)` }}
    >
      <h1
        className='text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light'
        data-aos='fade-down'
      >
        Skills
      </h1>
      <div className='max-w-screen-lg mx-auto my-5'>
        <div
          className='flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between px-10 py-5 gap-3'
          data-aos='zoom-in'
        >
          <h2 className='text-light text-xl sm:text-3xl'>Frontend</h2>
          <hr className='hr sm:hidden' />
          <div className='flex flex-wrap justify-center gap-10 text-6xl sm:text-7xl text-light'>
            <div className='flex flex-col items-center'>
              <i className='devicon-nextjs-plain '></i>
              <p className=' text-lg sm:text-xl '>NextJS</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-react-original '></i>
              <p className=' text-lg sm:text-xl '>ReactJS</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-javascript-plain'></i>
              <p className=' text-lg sm:text-xl '>Javascript</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-css3-plain'></i>
              <p className=' text-lg sm:text-xl '>CSS</p>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between px-10 py-5 gap-10'
          data-aos='zoom-in'
        >
          <h2 className='text-light text-xl sm:text-3xl'>Backend</h2>
          <hr className='hr sm:hidden' />

          <div className='flex gap-5 text-6xl sm:text-7xl text-light'>
            <div className='flex flex-col items-center'>
              <i className='devicon-nodejs-plain'></i>
              <p className=' text-lg sm:text-xl '>NodeJS</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-express-original'></i>
              <p className=' text-lg sm:text-xl '>ExpressJS</p>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between px-10 py-5 gap-5'
          data-aos='zoom-in'
        >
          <h2 className='text-light text-xl sm:text-3xl'>Database & Tools</h2>
          <hr className='hr sm:hidden' />

          <div className='flex  flex-wrap justify-center gap-10 text-6xl sm:text-7xl text-light mb-5'>
            <div className='flex flex-col items-center'>
              <i className='devicon-mongodb-plain'></i>
              <p className=' text-lg sm:text-xl '>MongoDB</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-tailwindcss-plain'></i>
              <p className=' text-lg sm:text-xl '>Tailwind CSS</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-git-plain'></i>
              <p className=' text-lg sm:text-xl '>Git</p>
            </div>
            <div className='flex flex-col items-center'>
              <i className='devicon-redux-original'></i>
              <p className=' text-lg sm:text-xl '>Redux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
