export default function ProjectItem(props) {
  return (
    <div className='flex flex-col md:flex-row  mx-auto  justify-evenly  items-center py-10 sm:py-12 px-2 gap-5'>
      <div
        className={`justify-self-center ring-4 ring-[#98b6f6] ring-offset-2 p-1 order-last ${
          props.imageLeft ? 'md:order-first' : 'md:order-last'
        }`}
        data-aos='fade-right'
      >
        <img
          className='h-96'
          src={`../images/projects/${props.image}.png`}
          alt={props.title}
        />
      </div>
      <div className='flex flex-col  gap-4 text-center ' data-aos='fade-left'>
        {props.indicator ? (
          <div className='mx-auto indicator '>
            <div className='indicator-item badge badge-primary !-top-2'>
              {props.indicator}
            </div>
            <h1 className='text-light text-xl sm:text-3xl '>{props.title}</h1>
          </div>
        ) : (
          <h1 className='text-light text-xl sm:text-3xl '>{props.title}</h1>
        )}
        <hr className='hr' />
        <div className='max-w-md flex flex-col gap-4'>
          <h2 className='text-light text-md sm:text-lg'>{props.description}</h2>

          <h2 className='text-light text-lg sm:text-xl'>
            Features & Technologies
          </h2>
          <hr
            className=' border-double border-b-4 border-[#98b6f6] border-opacity-50 '
            style={{ width: '20%', margin: 'auto' }}
          />
          <div className='flex flex-wrap gap-4 justify-center'>
            {props.features.map((f) => (
              <div key={f} className='badge badge-lg text-light rounded-none'>
                {f}
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-4 justify-center'>
            {props.technologies.map((t) => (
              <div key={t} className='badge badge-lg text-light'>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-wrap justify-center'>
          <a
            target='_blank'
            href={props.github}
            className='btn btn-outline btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2 order-first'
            rel='noopener noreferrer'
          >
            <p>Github</p>
          </a>

          <a
            target='_blank'
            href={props.view}
            className='btn btn-outline btn-primary m-4 p-2 px-6  ring-4 ring-indigo-500 sm:text-lg gap-2 order-2 '
            rel='noopener noreferrer'
          >
            <p>Open</p>
          </a>
        </div>
      </div>
    </div>
  )
}
