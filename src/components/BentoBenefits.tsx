import { benefits } from '../data/benefits'
import type { BenefitItem } from '../data/benefits'
import './BentoBenefits.css'

// Ícones SVG minimalistas - todos na cor da marca
const icons: Record<string, JSX.Element> = {
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 9l-5 5-4-4-3 3" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
}

function BenefitCard({ benefit, index }: { benefit: BenefitItem; index: number }) {
  return (
    <article
      className={`benefit-card reveal reveal-delay-${Math.min(index + 2, 4)}`}
    >
      <div className="benefit-card__accent-line" />
      {benefit.icon && (
        <div className="benefit-card__icon">
          {icons[benefit.icon]}
        </div>
      )}
      <h3 className="benefit-card__title">{benefit.title}</h3>
      <p 
        className="benefit-card__impact" 
        dangerouslySetInnerHTML={{ __html: benefit.impact }}
      />
      <p 
        className="benefit-card__description" 
        dangerouslySetInnerHTML={{ __html: benefit.description }}
      />
    </article>
  )
}

export function BentoBenefits() {
  return (
    <section className="bento-section bento-benefits" id="beneficios">
      <div className="bento-benefits__bg" />
      <div className="bento-section__inner">
        <div className="bento-benefits__header">
          <h2 className="bento-section__title reveal">
            Por que empresas que querem crescer escolhem a Empirius
          </h2>
          <p className="bento-section__intro reveal reveal-delay-1">
            Estratégia clara, execução próxima e foco no que realmente gera resultado.
          </p>
        </div>
        
        <div className="bento-benefits__grid reveal reveal-delay-2">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={i} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bento-benefits__cta reveal reveal-delay-3">
          <a href="#contato" className="bento-benefits__cta-primary">
            Agendar diagnóstico gratuito
          </a>
          <a href="#projetos" className="bento-benefits__cta-secondary">
            Ver projetos
          </a>
        </div>

        {/* Prova Social */}
        <div className="bento-benefits__proof reveal reveal-delay-4">
          <span className="bento-benefits__proof-text">
            +20 projetos entregues • foco em crescimento real, não métricas de vaidade
          </span>
        </div>
      </div>
    </section>
  )
}
