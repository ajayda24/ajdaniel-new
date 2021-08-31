import ProjectItem from './Item'

export default function Projects() {
  return (
    <div
      id='projects'
      className='h_mobile-100 sm:min-h-screen bg-no-repeat bg-cover sm:bg-bottom overflow-hidden'
      // style={{ backgroundImage: `url(../background/2.svg)` }}
    >
      <h1
        className='text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light'
        data-aos='fade-down'
      >
        Explore my Projects
      </h1>
      <ProjectItem
        title='Class Room Management'
        image='classathome'
        description='Manage your time, make studies more advanced. Easy to Access, Easy to Manage your teachers and students.'
        github=''
        view=''
        imageLeft
      />
      <ProjectItem
        title='AJ Movies Info'
        image='ajmoviesinfo1'
        description='Get latest movies and series details. Watch official trailer. Developed using TMDB API.'
        github=''
        view=''
      />
    </div>
  )
}
