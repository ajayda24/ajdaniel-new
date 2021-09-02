import ProjectItem from './Item'

export default function Projects() {
  return (
    <div
      id='projects'
      className='h_mobile-100 sm:min-h-screen bg-no-repeat bg-cover sm:bg-bottom overflow-hidden'
    >
      <h1
        className='text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light'
        data-aos='fade-down'
      >
        Explore my Projects
      </h1>
      <ProjectItem
        title='Class Room Management'
        image='classathome1'
        description='Manage your time, make studies more advanced. Easy to Access, Easy to Manage your teachers and students.'
        github='https://github.com/ajayda24/nodejs-master-completed'
        view='https://classathome.gq/'
        features={['Assignments', 'Chat', 'Video Call', 'Paid Events']}
        technologies={['NodeJS', 'ExpressJS', 'MongoDB', 'SocketIO']}
        imageLeft
      />
      <ProjectItem
        title='Chain Reaction Multiplayer'
        image='chainreaction'
        description='Play Chain Reaction Online with your Friends. Developed by me and my classmate Thejus Manoj.'
        github='https://github.com/ajayda24/emojireaction'
        view='https://emojireaction.ajdaniel.gq/'
        features={['Play Online', 'Multiplayer', 'Fun with Friends', 'Chat']}
        technologies={['NodeJS', 'SocketIO', 'HTML', 'CSS']}
      />
      <ProjectItem
        title='AJ Movies Info'
        image='ajmoviesinfo1'
        description='Get latest movies and series details. Watch official trailer. Filter using date and genre.'
        github='https://github.com/ajayda24/movieinfo'
        view='https://aj-moviesinfo.vercel.app/'
        features={[
          'Latest Movies',
          'Latest Series',
          'Movies Details',
          'Official Trailer',
          'Filter',
        ]}
        technologies={['NextJS', 'ReactJS', 'TMDB API', 'CSS']}
        imageLeft
      />
      <ProjectItem
        title='AJ Whatsapp'
        image='ajwhatsapp'
        description='I made a Whatsapp clone with some features of official Whatsapp'
        github='https://github.com/ajayda24/aj-whatsapp-clone'
        view='https://aj-whatsapp-clone.vercel.app/'
        features={['Chat', 'Personal Chat', 'Group Chat']}
        technologies={['NextJS', 'ReactJS', 'Firebase', 'CSS']}
        indicator='coming soon...'
      />
      <ProjectItem
        title='Other Projects'
        image='otherprojects'
        description='When I am studying these technologies I made so many simple projects.'
        github='https://github.com/ajayda24/Personal-Website'
        view='https://ajdaniel.gq/#projects'
        features={['Maths Matrix', 'Picture Puzzle', 'Sharpen your Eyes']}
        technologies={['HTML', 'CSS', 'JavaScript', 'NodeJS']}
        imageLeft
      />
      <img src='../background/3-crop.png' alt='' width='100%' />
    </div>
  )
}
