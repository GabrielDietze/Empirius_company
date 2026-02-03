import { benefits } from '../data/benefits'
import type { BenefitItem } from '../data/benefits'
import './BentoBenefits.css'

function BenefitCard({ benefit, index }: { benefit: BenefitItem; index: number }) {
  const accent = benefit.accent ?? 'cyan'
  return (
    <article
      className={`benefit-card benefit-card--${accent} reveal reveal-delay-${Math.min(index + 2, 4)}`}
    >
      <h3 className="benefit-card__title">{benefit.title}</h3>
      <p className="benefit-card__description">{benefit.description}</p>
    </article>
  )
}

export function BentoBenefits() {
  return (
    <section className="bento-section bento-benefits" id="beneficios">
      <div className="bento-section__inner">
        <h2 className="bento-section__title reveal">Por que trabalhar com a Empirius</h2>
        <p className="bento-section__intro reveal reveal-delay-1">
          Consultoria digital com foco em resultados reais e atendimento próximo.
        </p>
        <div className="bento-benefits__grid reveal reveal-delay-2">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
