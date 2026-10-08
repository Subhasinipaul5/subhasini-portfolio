import { useCallback, useState } from 'react'
import Preloader from './components/Preloader'
import { shouldShowPreloader } from './hooks/introSeen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Training from './components/Training'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

// All text and links come from src/data/portfolioData.js.
// To change the ORDER of the sections, move the lines inside <main>.
function App() {
  const [showPreloader] = useState(shouldShowPreloader)
  const [ready, setReady] = useState(!showPreloader)
  const handleDone = useCallback(() => setReady(true), [])

  return (
    <div className={ready ? 'app app--ready' : 'app'}>
      <a className="skip-link" href="#main">Skip to content</a>
      {showPreloader && <Preloader onDone={handleDone} />}
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Training />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
