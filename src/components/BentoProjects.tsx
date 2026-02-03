import { useState, useRef, useEffect } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import './BentoProjects.css'

function ProjectCard({
  project,
  index,
  isExpanded,
  isFullWidth,
  onToggle,
  scrollRef,
}: {
  project: Project
  index: number
  isExpanded: boolean
  isFullWidth: boolean
  onToggle: () => void
  scrollRef: React.RefObject<HTMLDivElement | null>
}) {
  const hasExpandido = Boolean(project.expandido)

  const handleCardClick = (e: React.MouseEvent) => {
    if (!hasExpandido) return
    const target = e.target as HTMLElement
    if (target.closest('a') || target.closest('button')) return
    onToggle()
  }

  const handleToggleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (hasExpandido) onToggle()
  }

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onToggle()
  }

  return (
    <article
      ref={isExpanded ? scrollRef : undefined}
      className={`project-card reveal reveal-delay-${Math.min(index + 2, 4)} ${isExpanded ? 'project-card--expanded' : ''} ${isFullWidth ? 'project-card--full-width' : ''} ${hasExpandido ? 'project-card--expandable' : ''}`}
      onClick={handleCardClick}
      role={hasExpandido ? 'button' : undefined}
      tabIndex={hasExpandido ? 0 : undefined}
      onKeyDown={
        hasExpandido
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onToggle()
              }
            }
          : undefined
      }
      aria-expanded={hasExpandido ? isExpanded : undefined}
    >
      <div className="project-card__image-wrap">
        <img src={project.image} alt="" className="project-card__image" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__service-type">{project.serviceType}</p>

        {/* Desktop: Problema → Resultado. Mobile: Resultado → Problema (via CSS order) */}
        <p className="project-card__problema project-card__problema--reorder-mobile">
          <span className="project-card__label">Problema:</span> {project.problema}
        </p>
        <p className="project-card__resultado project-card__resultado--reorder-mobile">
          <span className="project-card__label">Resultado:</span>{' '}
          <span className="project-card__resultado-value">{project.resultado}</span>
        </p>

        {hasExpandido ? (
          <button
            type="button"
            className="project-card__toggle"
            onClick={handleToggleClick}
            aria-label={isExpanded ? 'Fechar detalhes' : 'Ver como foi feito'}
          >
            {isExpanded ? (
              <>Fechar <span className="project-card__toggle-icon">↑</span></>
            ) : (
              <>Ver como foi feito <span className="project-card__toggle-icon">↓</span></>
            )}
          </button>
        ) : project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__cta-link"
            onClick={(e) => e.stopPropagation()}
          >
            Ver projeto →
          </a>
        ) : null}
      </div>

      {/* Conteúdo expandido — visível quando isExpanded; layout horizontal quando isFullWidth */}
      {hasExpandido && project.expandido && (
        <div
          className={`project-card__expandable ${isExpanded ? 'project-card__expandable--open' : ''}`}
          role="region"
          aria-label="Detalhes do projeto"
          aria-hidden={!isExpanded}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="project-card__expandable-inner">
            <hr className="project-card__divider" aria-hidden="true" />

            <div className="project-card__block">
              <h4 className="project-card__block-title">CONTEXTO</h4>
              <p className="project-card__block-text">{project.expandido.contexto}</p>
            </div>

            <div className="project-card__block">
              <h4 className="project-card__block-title">PROBLEMA</h4>
              <ul className="project-card__list">
                {project.expandido.problema.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-card__block">
              <h4 className="project-card__block-title">SOLUÇÃO</h4>
              <ul className="project-card__list">
                {project.expandido.solucao.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-card__block">
              <h4 className="project-card__block-title">RESULTADOS</h4>
              <ul className="project-card__list project-card__list--results">
                {project.expandido.resultados.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-card__block">
              <h4 className="project-card__block-title">FERRAMENTAS</h4>
              <p className="project-card__block-text project-card__block-text--tools">
                {project.expandido.ferramentas}
              </p>
            </div>

            <div className="project-card__expandable-cta">
              <a
                href="#contato"
                className="project-card__cta-btn-expand"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Desktop: "Falar sobre esse projeto" / Mobile: "Quero um projeto assim" — via CSS ou duas spans com classe .desktop-only / .mobile-only */}
                <span className="project-card__cta-desktop">Falar sobre esse projeto</span>
                <span className="project-card__cta-mobile">Quero um projeto assim</span>
              </a>
              <button
                type="button"
                className="project-card__close-btn"
                onClick={handleCloseClick}
                aria-label="Fechar"
              >
                Fechar <span className="project-card__toggle-icon">↑</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export function BentoProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (expandedId) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expandedId])

  const handleToggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <section className="bento-section bento-projects" id="projetos">
      <div className="bento-projects__inner">
        <h2 className="bento-projects__title reveal">Projetos</h2>
        <p className="bento-projects__subtitle reveal reveal-delay-1">
          Projetos que geraram resultado
        </p>
        <p className="bento-projects__intro reveal reveal-delay-1">
          Alguns exemplos de como ajudei negócios a crescer no digital.
        </p>

        <div className="projects-grid reveal reveal-delay-2">
          {expandedId
            ? (() => {
                const expandedProject = projects.find((p) => p.id === expandedId)
                const otherProjects = projects.filter((p) => p.id !== expandedId)
                return (
                  <>
                    {expandedProject && (
                      <ProjectCard
                        key={expandedProject.id}
                        project={expandedProject}
                        index={0}
                        isExpanded
                        isFullWidth
                        onToggle={() => handleToggle(expandedProject.id)}
                        scrollRef={scrollRef}
                      />
                    )}
                    {otherProjects.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={i + 1}
                        isExpanded={false}
                        isFullWidth={false}
                        onToggle={() => handleToggle(project.id)}
                        scrollRef={scrollRef}
                      />
                    ))}
                  </>
                )
              })()
            : projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isExpanded={false}
                  isFullWidth={false}
                  onToggle={() => handleToggle(project.id)}
                  scrollRef={scrollRef}
                />
              ))}
        </div>

        <div className="bento-projects__ver-todos reveal">
          <a href="#projetos" className="bento-projects__ver-todos-link">
            Ver todos os projetos →
          </a>
        </div>

        <div className="bento-projects__cta reveal">
          <p className="bento-projects__cta-text">Quer resultados parecidos no seu negócio?</p>
          <a href="#contato" className="bento-projects__cta-btn">
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  )
}
