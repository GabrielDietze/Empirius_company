import { useParallax } from '../hooks/useParallax'
import './Hero.css'

export function Hero() {
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
            Seu negócio merece <span className="hero__highlight">presença digital</span> de verdade.
          </h1>
          <p className="hero__subtitle reveal reveal-delay-1">
            Apoiamos micro e pequenos empreendedores e autônomos a crescer no mundo digital: sites, redes sociais, Google Business e estratégias que geram resultados.
          </p>
          <div className="hero__cta reveal reveal-delay-2">
            <a href="#contato" className="btn btn--primary">Fale conosco</a>
            <a href="#projetos" className="btn btn--glass">Ver projetos</a>
          </div>
        </div>
        <div className="hero__visual reveal reveal-delay-2" aria-hidden="true">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
        </div>
      </div>
    </section>
  )
}
