import { BentoCard } from './BentoCard'
import { services } from '../data/services'
import './BentoServices.css'

export function BentoServices() {
  return (
    <section className="bento-section bento-services" id="servicos">
      <div className="bento-section__inner">
        <h2 className="bento-section__title reveal">Soluções digitais para fazer seu negócio crescer</h2>
        <p className="bento-section__intro reveal reveal-delay-1">
          Soluções digitais práticas para atrair clientes, gerar confiança e aumentar suas vendas.
        </p>
        <div className="bento-grid bento-grid--services reveal reveal-delay-2">
          {services.map((s, i) => (
            <BentoCard
              key={s.id}
              title={s.title}
              description={s.description}
              benefits={s.benefits}
              actionLabel="Ver exemplos →"
              actionHref="#projetos"
              iconType={s.id as 'sites' | 'redes' | 'google' | 'estrategia'}
              size={s.size}
              className={`reveal reveal-delay-${Math.min(i + 3, 4)}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
