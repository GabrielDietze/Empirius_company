import { useState } from 'react'
import { showcases } from '../data/projects'
import type { Showcase } from '../data/projects'
import { ProjectMockup } from './ProjectMockup'
import './BentoProjects.css'

function ClientBadge({
  name,
  niche,
  accent,
  url,
}: {
  name: string
  niche: string
  accent: Showcase['accent']
  url?: string
}) {
  const content = (
    <>
      <span className="showcase-badge__name">{name}</span>
      <span className="showcase-badge__niche">{niche}</span>
      {url && <span className="showcase-badge__link">Ver projeto →</span>}
    </>
  )
  const className = `showcase-badge showcase-badge--${accent}`
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} showcase-badge--clickable`}
        aria-label={`Ver projeto: ${name}`}
      >
        {content}
      </a>
    )
  }
  return (
    <div className={className} aria-hidden="true">
      {content}
    </div>
  )
}

function ShowcaseCard({ showcase, index: sectionIndex }: { showcase: Showcase; index: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = showcase.projects.length
  const project = showcase.projects[currentIndex]

  const goPrev = () => setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <article
      className={`showcase-card showcase-card--${showcase.accent} reveal reveal-delay-${Math.min(sectionIndex + 3, 4)}`}
    >
      {/* Lado esquerdo: base fixa — não muda com o carrossel */}
      <div className="showcase-card__anchor">
        <h3 className="showcase-card__title">{showcase.serviceTitle}</h3>
        <p className="showcase-card__description">
          {showcase.serviceDescription.map((seg, i) =>
            seg.highlight ? (
              <strong key={i} className="showcase-card__highlight">
                {seg.text}
              </strong>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>
        {total > 1 && (
          <div className="showcase-card__nav">
            <button
              type="button"
              className="showcase-card__arrow"
              onClick={goPrev}
              aria-label="Projeto anterior"
            >
              ‹
            </button>
            <div className="showcase-card__progress" role="tablist" aria-label="Projetos">
              {showcase.projects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Projeto ${i + 1}`}
                  className={`showcase-card__dot ${i === currentIndex ? 'showcase-card__dot--active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="showcase-card__arrow"
              onClick={goNext}
              aria-label="Próximo projeto"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Lado direito: palco dinâmico — mockup + etiqueta que deslizam juntos */}
      <div className="showcase-card__stage">
        <div className="showcase-card__carousel">
          <div key={currentIndex} className="showcase-card__slide">
            <div className="showcase-card__mockup-wrap">
              <ProjectMockup
                type={showcase.mockupType}
                imageUrl={project.image || undefined}
              />
            </div>
            <ClientBadge
              name={project.name}
              niche={project.niche}
              accent={showcase.accent}
              url={project.url}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export function BentoProjects() {
  return (
    <section className="bento-section bento-projects" id="projetos">
      <div className="bento-section__inner">
        <h2 className="bento-section__title reveal">Projetos realizados</h2>
        <p className="bento-section__intro reveal reveal-delay-1">
          Alguns dos negócios que já apoiamos no caminho digital. Resultados reais, números que importam.
        </p>
        <div className="showcase-grid reveal reveal-delay-2">
          {showcases.map((showcase, i) => (
            <ShowcaseCard key={showcase.id} showcase={showcase} index={i} />
          ))}
        </div>

        <p className="bento-section__note reveal">
          Você pode ser o próximo. Adicione screenshots reais nos projetos para impacto máximo.
        </p>
      </div>
    </section>
  )
}
