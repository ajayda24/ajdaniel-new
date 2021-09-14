import dynamic from 'next/dynamic'

import Home from '../components/Home'
// import Projects from '../components/Projects'
// import Skills from '../components/Skills'
// import Contact from '../components/Contact'
// import About from '../components/About'
// import Certificates from '../components/Certificates'

const DynamicProject = dynamic(() => import('../components/Projects'))
const DynamicAbout = dynamic(() => import('../components/About'))
const DynamicSkills = dynamic(() => import('../components/Skills'))
const DynamicCertificates = dynamic(() => import('../components/Certificates'))
const DynamicContact = dynamic(() => import('../components/Contact'))


export default function Index() {
  return (
    <>
      <Home />
      <DynamicProject />
      <DynamicAbout />
      <DynamicSkills />
      <DynamicCertificates />
      <DynamicContact />
    </>
  )
}
