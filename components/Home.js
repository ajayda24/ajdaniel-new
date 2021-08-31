
export default function Home() {
  return (
    <div
      className='h_mobile-100 sm:min-h-screen bg-no-repeat bg-cover sm:bg-bottom overflow-hidden'
      style={{ backgroundImage: `url(../background/1.svg)` }}
    >
      <div className='flex justify-between text-light  text-2xl p-5 sm:px-10'>
        <div>Aj</div>
        <div className='flex gap-7'>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <h1 className='text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light animate__animated animate__backInDown'>
        Welcome to AJ's World
      </h1>
      <div className='grid grid-cols-3 grid-rows-2 sm:grid-rows-none sm:grid-cols-5 mx-auto max-w-4xl  items-center py-10 sm:py-12 px-2'>
        <div className='justify-self-center col-span-1 animate__animated animate__backInLeft row-span-2'>
          <img src='../images/aj/1.png' alt='aj.png' width='160' />
        </div>
        <div className='flex flex-col items-center gap-4 text-center col-span-2 animate__animated animate__backInRight row-span-2'>
          <h1 className='text-light text-xl sm:text-3xl'>Hi I am,</h1>
          <h1 className='text-light text-2xl sm:text-5xl'>
            Ajay Daniel Trevor{' '}
          </h1>
          <h1 className='text-light text-lg sm:text-3xl'>
            MERN Stack Developer
          </h1>
          <a href='#projects' className='btn btn-outline btn-primary m-4 p-2 min-h-16 ring-4 ring-indigo-500 sm:text-lg '>
            Explore my Projects
          </a>
        </div>
        <div className='flex sm:flex-col social-icons  sm:col-auto sm:row-span-1 sm:row-start-1 mt-5 col-span-3 sm:col-span-1 justify-self-center sm:justify-self-start gap-3'>
          <h1 className='text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s'>
            <i className='bx bxl-linkedin-square '></i>
          </h1>
          <h1 className='text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s'>
            <i className='bx bxl-facebook-square'></i>
          </h1>
          <h1 className='text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s'>
            <i className='bx bxl-twitter'></i>
          </h1>
        </div>
        <div className='flex sm:flex-col social-icons row-span-1 sm:justify-self-end mt-5 col-span-3 sm:col-span-1 justify-self-center gap-3'>
          <h1 className='text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s'>
            <i className='bx bxl-github'></i>
          </h1>
          <h1 className='text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s'>
            <i className='bx bxl-instagram'></i>
          </h1>
          <h1 className='text-light text-2xl sm:text-5xl animate__animated animate__zoomIn animate__delay-1s'>
            <i className='bx bxl-youtube'></i>
          </h1>
        </div>
      </div>
    </div>
  )
}
