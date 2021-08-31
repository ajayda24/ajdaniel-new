export default function ProjectItem(props) {
  return (
    <div className='flex flex-col md:flex-row  mx-auto  justify-evenly  items-center py-10 sm:py-12 px-2 gap-5'>
      <div
        className={`justify-self-center col-span-1 ring-4 ring-[#98b6f6] ring-offset-2 p-1 order-last ${
          props.imageLeft ? 'md:order-first' : 'md:order-last'
        }`}
        data-aos='fade-right'
      >
        <img src={`../images/projects/${props.image}.png`} alt={props.title} />
      </div>
      <div className='flex flex-col  gap-4 text-center ' data-aos='fade-left'>
        <h1 className='text-light text-xl sm:text-3xl '>{props.title}</h1>
        <hr
          className=' border-double border-b-4 border-[#98b6f6] border-opacity-50 '
          style={{ width: '40%', margin: 'auto' }}
        />
        <div className='md:max-w-md'>
          <h2 className='text-light text-md sm:text-lg'>{props.description}</h2>
        </div>
        <h2 className='text-light text-lg sm:text-xl'>
          Features & Technologies
        </h2>
        <hr
          className=' border-double border-b-4 border-[#98b6f6] border-opacity-50 '
          style={{ width: '20%', margin: 'auto' }}
        />
        <div className='flex flex-wrap gap-4 justify-center'>
          <div className='badge badge-lg text-light rounded-none'>
            Assignments
          </div>
          <div className='badge badge-lg text-light rounded-none'>Chat</div>
          <div className='badge badge-lg text-light rounded-none'>
            Video Call
          </div>
          <div className='badge badge-lg text-light rounded-none'>
            Paid Events
          </div>
        </div>
        {/* <h2 className='text-light'>Technologies</h2>
        <hr
          className=' border-double border-b-4 border-[#98b6f6] border-opacity-50 '
          style={{ width: '20%', margin: 'auto' }}
        /> */}
        <div className='flex flex-wrap gap-4 justify-center'>
          <div className='badge badge-lg text-light'>NodeJS</div>
          <div className='badge badge-lg text-light'>ExpressJS</div>
          <div className='badge badge-lg text-light'>MongoDB</div>
          <div className='badge badge-lg text-light'>SocketIO</div>
        </div>

        <div className='flex flex-wrap justify-center'>
          <a
            href={props.github}
            className='btn btn-outline btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2 order-first'
          >
            <p>Github</p>
          </a>

          <a
            href={props.view}
            className='btn btn-outline btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2 order-2 xs:order-last'
          >
            <p>Open</p>
          </a>
          {/* <div className='dropdown dropdown-top dropdown-center order-last xs:order-2'>
            <div
              tabIndex='0'
              className='btn  btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2'
            >
              Features
            </div>
            <div
              tabIndex='0'
              className='p-2 shadow menu dropdown-content bg-light rounded-md w-[20rem] h-[15rem] '
            >
              <h1>hello world</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
