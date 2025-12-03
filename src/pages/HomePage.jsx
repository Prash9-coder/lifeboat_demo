import Hero from '../components/Hero'
import StatsBanner from '../components/StatsBanner'
import Services from '../components/Services'
import Process from '../components/Process'
import TechStack from '../components/TechStack'
import About from '../components/About'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsBanner />
      <Services />
      <Process />
      <TechStack />
      <About />
      <Projects />
      <Team />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}

export default HomePage