import { useState, useCallback } from 'react'
import { showcases } from '../data/projects'
import type { Showcase } from '../data/projects'
import { ProjectMockup } from './ProjectMockup'
import { DeviceStack } from './DeviceStack'
import './BentoProjects.css'

const PARALLAX_DURATION_MS = 420

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
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [nextIndex, setNextIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)

  const total = showcase.projects.length
  const project = showcase.projects[currentIndex]
  const useStack = showcase.mockupType === 'macbook'

  const goPrev = useCallback(() => {
    if (total <= 1 || isTransitioning) return
    const prev = currentIndex === 0 ? total - 1 : currentIndex - 1
    setNextIndex(prev)
    setDirection('prev')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(prev)
      setIsTransitioning(false)
      setDirection(null)
    }, PARALLAX_DURATION_MS)
  }, [currentIndex, total, isTransitioning])

  const goNext = useCallback(() => {
    if (total <= 1 || isTransitioning) return
    const next = currentIndex === total - 1 ? 0 : currentIndex + 1
    setNextIndex(next)
    setDirection('next')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(next)
      setIsTransitioning(false)
      setDirection(null)
    }, PARALLAX_DURATION_MS)
  }, [currentIndex, total, isTransitioning])

  const goTo = useCallback(
    (i: number) => {
      if (i === currentIndex || isTransitioning) return
      setNextIndex(i)
      setDirection(i > currentIndex ? 'next' : 'prev')
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(i)
        setIsTransitioning(false)
        setDirection(null)
      }, PARALLAX_DURATION_MS)
    },
    [currentIndex, isTransitioning]
  )

  const renderStageContent = (proj: (typeof showcase.projects)[0], slideClass: string) => {
    if (useStack) {
      return (
        <div className={`showcase-card__slide ${slideClass}`}>
          <div className="showcase-card__stack-wrap">
            <DeviceStack imageUrl={proj.image || undefined} />
            <div className="showcase-card__badge-below-stack">
              <ClientBadge
                name={proj.name}
                niche={proj.niche}
                accent={showcase.accent}
                url={proj.url}
              />
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className={`showcase-card__slide ${slideClass}`}>
        <div className="showcase-card__mockup-wrap">
          <ProjectMockup
            type={showcase.mockupType}
            imageUrl={proj.image || undefined}
          />
        </div>
        <ClientBadge
          name={proj.name}
          niche={proj.niche}
          accent={showcase.accent}
          url={proj.url}
        />
      </div>
    )
  }

  const { colSpan, rowSpan, colStart, rowStart } = showcase.bentoSize
  const gridStyle = {
    gridColumn: `${colStart} / span ${colSpan}`,
    gridRow: `${rowStart} / span ${rowSpan}`,
  }

  return (
    <article
      className={`showcase-card showcase-card--${showcase.accent} showcase-card--${showcase.id} reveal reveal-delay-${Math.min(sectionIndex + 3, 4)}`}
      style={gridStyle}
    >
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
          <div className="showcase-card__nav-pill" role="group" aria-label="Navegação do carrossel">
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
                  onClick={() => goTo(i)}
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

      <div className="showcase-card__stage">
        <div className={`showcase-card__carousel ${useStack ? 'showcase-card__carousel--stack' : ''}`}>
          {useStack && isTransitioning && direction ? (
            <>
              {renderStageContent(showcase.projects[currentIndex], `showcase-card__slide--exit showcase-card__slide--exit-${direction === 'next' ? 'left' : 'right'}`)}
              {renderStageContent(showcase.projects[nextIndex], `showcase-card__slide--enter showcase-card__slide--enter-from-${direction === 'next' ? 'right' : 'left'}`)}
            </>
          ) : (
            renderStageContent(project, '')
          )}
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
        <div className="bento-projects-grid reveal reveal-delay-2">
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
