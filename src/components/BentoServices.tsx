import { BentoCard } from './BentoCard'
import { services, automationServices } from '../data/services'
import './BentoServices.css'

export function BentoServices() {
  return (
    <section className="bento-section bento-services" id="servicos">
      <div className="bento-section__inner">
        {/* BLOCO 1: Para atrair e converter clientes */}
        <div className="bento-services__block">
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
                actionLabel={s.actionLabel || 'Ver exemplos →'}
                actionHref="#projetos"
                iconType={s.id as 'sites' | 'redes' | 'google' | 'estrategia' | 'sistemas' | 'chatbots'}
                size={s.size}
                className={`reveal reveal-delay-${Math.min(i + 3, 4)}`}
              />
            ))}
          </div>
        </div>

        {/* BLOCO 2: Automação e Sistemas Internos */}
        <div className="bento-services__block bento-services__block--automation">
          <h3 className="bento-services__block-title reveal">Automação e Sistemas Internos</h3>
          <p className="bento-services__block-intro reveal reveal-delay-1">
            Para quem quer organizar operações e escalar negociações com inteligência.
          </p>
          <div className="bento-grid bento-grid--automation reveal reveal-delay-2">
            {automationServices.map((s, i) => (
              <BentoCard
                key={s.id}
                title={s.title}
                description={s.description}
                benefits={s.benefits}
                actionLabel={s.actionLabel || 'Falar com especialista →'}
                actionHref="#contato"
                iconType={s.id as 'sites' | 'redes' | 'google' | 'estrategia' | 'sistemas' | 'chatbots'}
                size={s.size}
                className={`reveal reveal-delay-${Math.min(i + 3, 4)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
