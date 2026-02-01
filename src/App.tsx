import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BentoServices } from './components/BentoServices'
import { BentoProjects } from './components/BentoProjects'
import { BentoAbout } from './components/BentoAbout'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal('.reveal', { threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoServices />
        <BentoProjects />
        <BentoAbout />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
