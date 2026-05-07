import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Orbs from './components/Orbs'

function Divider() {
  return <div className="relative z-10 max-w-5xl mx-auto px-14"><div className="h-px bg-border" /></div>
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Orbs />
      <Nav />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <Footer />
    </div>
  )
}
