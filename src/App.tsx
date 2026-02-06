import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BentoServices } from './components/BentoServices'
import { BentoBenefits } from './components/BentoBenefits'
import { BentoProjects } from './components/BentoProjects'
import { BentoAbout } from './components/BentoAbout'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

/**
 * Componente raiz da aplicação Empirius
 * 
 * Estrutura uma landing page completa com:
 * - Header fixo com navegação
 * - Seções de hero, serviços, benefícios, projetos, sobre e contato
 * - Footer com informações da empresa
 * - Sistema de reveal automático para animações de entrada
 */
function App() {
  // Ativa animações de reveal em todos os elementos com classe .reveal quando entram no viewport
  useScrollReveal('.reveal', { threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoServices />
        <BentoBenefits />
        <BentoProjects />
        <BentoAbout />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
