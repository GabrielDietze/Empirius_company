import { useParallax } from '../hooks/useParallax'
import './Hero.css'

/**
 * Seção Hero - Primeira impressão da landing page
 * 
 * Contém:
 * - Título principal com destaque visual
 * - Subtítulo descrevendo a proposta de valor
 * - CTAs primário e secundário
 * - Background com mesh gradient animado (parallax)
 * - Elementos visuais decorativos
 */
export function Hero() {
  // Aplica efeito parallax no primeiro elemento do mesh (movimenta a 20% da velocidade do scroll)
  const parallaxRef = useParallax(0.2)

  return (
    <section className="hero">
      {/* Mesh gradient background */}
      <div className="hero__mesh" aria-hidden="true">
        <div className="hero__mesh-1" ref={parallaxRef} />
        <div className="hero__mesh-2" />
        <div className="hero__mesh-3" />
      </div>

      <div className="hero__inner">
        <div className="hero__text">
          <h1 className="hero__title reveal reveal-delay-1">
            Seu negócio merece uma <span className="hero__highlight">presença digital que gera clientes</span>.
          </h1>
          <p className="hero__subtitle reveal reveal-delay-1">
            Criamos sites e estratégias digitais para atrair clientes todos os dias, mesmo enquanto você trabalha.
          </p>
          <div className="hero__cta reveal reveal-delay-2">
            <a href="#contato" className="btn btn--primary">Solicitar diagnóstico gratuito</a>
            <a href="#projetos" className="btn btn--glass">Ver projetos</a>
          </div>
          <p className="hero__commitment">Sem compromisso</p>
        </div>
        <div className="hero__visual reveal reveal-delay-2" aria-hidden="true">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
        </div>
      </div>
    </section>
  )
}
