import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import './BentoProjects.css'

/* ==========================================================================
   ICONS
   ========================================================================== */

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function IconTrendingUp({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconStrategy() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function IconRocket() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* ==========================================================================
   CARD CONTENT - Conteúdo compartilhado entre card pequeno e expandido
   ========================================================================== */

interface CardContentProps {
  project: Project
  isExpanded: boolean
  isHero?: boolean
  isWide?: boolean
  onClose?: () => void
}

function CardContent({ project, isExpanded, isHero, isWide, onClose }: CardContentProps) {
  const whatsappNumber = '5531999999999'
  const whatsappMessage = encodeURIComponent(
    `Olá! Vi o case "${project.name}" no site da Empirius e quero um resultado similar para meu negócio.`
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <>
      {/* Botão Fechar - apenas no expandido */}
      {isExpanded && onClose && (
        <button
          className="expanded-card__close"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Fechar"
        >
          <IconClose />
        </button>
      )}

      {/* Imagem */}
      <div className={isExpanded ? 'expanded-card__header' : 'project-card__image-wrap'}>
        <img 
          src={project.image} 
          alt={project.name} 
          className={isExpanded ? 'expanded-card__image' : 'project-card__image'}
        />
        <div className={isExpanded ? 'expanded-card__image-overlay' : 'project-card__image-overlay'} />
        
        {/* Métrica sobre a imagem - apenas no expandido */}
        {isExpanded && (
          <div className="expanded-card__hero-metric">
            <IconTrendingUp />
            <span className="expanded-card__hero-metric-value">{project.resultado}</span>
          </div>
        )}
      </div>

      {/* Corpo do Card */}
      <div className={isExpanded ? 'expanded-card__body' : 'project-card__body'}>
        {/* Versão Compacta (Grid) */}
        {!isExpanded && (
          <>
            <div className="project-card__metric">
              <span className="project-card__metric-value">{project.resultado}</span>
            </div>
            <h3 className="project-card__name">{project.name}</h3>
            <p className="project-card__service-type">{project.serviceType}</p>
            
            {(isHero || isWide) && (
              <p className="project-card__problema">{project.problema}</p>
            )}
            
            {isHero && project.techTags && project.techTags.length > 0 && (
              <div className="project-card__tech-tags">
                {project.techTags.map((tag, i) => (
                  <span key={i} className="project-card__tech-tag">{tag}</span>
                ))}
              </div>
            )}
            
            {project.expandido && (
              <span className="project-card__toggle">
                Ver detalhes <span className="project-card__toggle-icon">→</span>
              </span>
            )}
          </>
        )}

        {/* Versão Expandida (Modal) */}
        {isExpanded && (
          <>
            <p className="expanded-card__service-type">{project.serviceType}</p>
            <h2 className="expanded-card__title">{project.name}</h2>

            {project.expandido && (
              <div className="expanded-card__sections">
                <section className="expanded-card__section">
                  <div className="expanded-card__section-header">
                    <IconTarget />
                    <h3 className="expanded-card__section-title">O Desafio</h3>
                  </div>
                  <p className="expanded-card__section-text">{project.expandido.contexto}</p>
                  <ul className="expanded-card__list">
                    {project.expandido.problema.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="expanded-card__section">
                  <div className="expanded-card__section-header">
                    <IconStrategy />
                    <h3 className="expanded-card__section-title">A Estratégia</h3>
                  </div>
                  <ul className="expanded-card__list expanded-card__list--solutions">
                    {project.expandido.solucao.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="expanded-card__tech-tags">
                    {project.expandido.ferramentas.split(' • ').map((tool, i) => (
                      <span key={i} className="expanded-card__tech-tag">{tool}</span>
                    ))}
                  </div>
                </section>

                <section className="expanded-card__section expanded-card__section--results">
                  <div className="expanded-card__section-header">
                    <IconRocket />
                    <h3 className="expanded-card__section-title">O Resultado Final</h3>
                  </div>
                  <div className="expanded-card__results-grid">
                    {project.expandido.resultados.map((result, i) => (
                      <div key={i} className="expanded-card__result-item">
                        <IconTrendingUp size={20} />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            <div className="expanded-card__cta">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="expanded-card__cta-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <IconWhatsApp />
                <span>Quero um resultado similar</span>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  )
}

/* ==========================================================================
   PROJECT CARD - Card no Grid
   ========================================================================== */

function ProjectCard({
  project,
  index,
  isHero = false,
  isWide = false,
  isSelected,
  onSelect,
}: {
  project: Project
  index: number
  isHero?: boolean
  isWide?: boolean
  isSelected: boolean
  onSelect: () => void
}) {
  const hasExpandido = Boolean(project.expandido)

  return (
    <motion.article
      className={`
        project-card 
        ${isHero ? 'project-card--hero' : ''} 
        ${isWide ? 'project-card--wide' : ''}
        ${hasExpandido ? 'project-card--expandable' : ''}
        ${isSelected ? 'project-card--selected' : ''}
        reveal reveal-delay-${Math.min(index + 2, 4)}
      `}
      onClick={hasExpandido && !isSelected ? onSelect : undefined}
      whileHover={hasExpandido && !isSelected ? { scale: 1.02 } : undefined}
      whileTap={hasExpandido && !isSelected ? { scale: 0.98 } : undefined}
      role={hasExpandido ? 'button' : undefined}
      tabIndex={hasExpandido && !isSelected ? 0 : -1}
      onKeyDown={
        hasExpandido && !isSelected
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect()
              }
            }
          : undefined
      }
    >
      <CardContent 
        project={project} 
        isExpanded={false} 
        isHero={isHero}
        isWide={isWide}
      />
    </motion.article>
  )
}

/* ==========================================================================
   EXPANDED OVERLAY - Modal com overlay fixo centralizado
   ========================================================================== */

function ExpandedOverlay({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  // Bloqueia scroll do body
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [])

  // Fecha ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    /* 
     * OVERLAY CONTAINER FIXO
     * - position: fixed + inset: 0 = cobre toda a tela
     * - display: flex + justify-center + align-center = centraliza o card
     * - z-index: 999 = acima de todo conteúdo
     */
    <motion.div
      className="expanded-overlay-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* 
       * CARD EXPANDIDO
       * Animação de scale + opacity para entrada/saída suave
       */}
      <motion.article
        className="expanded-card"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ 
          duration: 0.3, 
          ease: [0.4, 0, 0.2, 1]
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent 
          project={project} 
          isExpanded={true} 
          onClose={onClose}
        />
      </motion.article>
    </motion.div>
  )
}

/* ==========================================================================
   BENTO PROJECTS - Componente Principal
   ========================================================================== */

export function BentoProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.bento-projects .reveal')
    elements.forEach((el) => el.classList.add('is-visible'))
  }, [selectedId])

  const selectedProject = selectedId
    ? projects.find((p) => p.id === selectedId)
    : null

  const heroProject = projects[0]
  const secondaryProjects = projects.slice(1, -1)
  const wideProject = projects[projects.length - 1]

  return (
    <section className="bento-section bento-projects" id="projetos">
      <div className="bento-projects__bg" />
      <div className="bento-projects__inner">
        {/* Header da seção */}
        <div className="bento-projects__header">
          <span className="bento-projects__badge reveal">PORTFÓLIO</span>
          <h2 className="bento-projects__title reveal reveal-delay-1">
            Projetos que geraram resultado
          </h2>
          <p className="bento-projects__intro reveal reveal-delay-2">
            Casos reais de negócios que cresceram com estratégia digital bem executada.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="projects-bento-grid">
            <ProjectCard
              project={heroProject}
              index={0}
              isHero={true}
              isSelected={selectedId === heroProject.id}
              onSelect={() => setSelectedId(heroProject.id)}
            />

            {secondaryProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + 1}
                isSelected={selectedId === project.id}
                onSelect={() => setSelectedId(project.id)}
              />
            ))}

            <ProjectCard
              project={wideProject}
              index={projects.length - 1}
              isWide={true}
              isSelected={selectedId === wideProject.id}
              onSelect={() => setSelectedId(wideProject.id)}
            />
        </div>

        {/* CTA Final */}
        <div className="bento-projects__cta reveal">
          <div className="bento-projects__cta-content">
            <p className="bento-projects__cta-text">
              Quer resultados parecidos no seu negócio?
            </p>
            <a href="#contato" className="bento-projects__cta-btn">
              Agendar diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>

      {/* ANIMATEPRESENCE - Permite animações de saída (exit) */}
      <AnimatePresence>
        {selectedProject && (
          <ExpandedOverlay
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
