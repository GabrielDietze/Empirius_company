import type { ProjectMockupType } from '../data/projects'
import './ProjectMockup.css'

interface ProjectMockupProps {
  type: ProjectMockupType
  className?: string
  /** URL da imagem do projeto (tela do dispositivo). Vazio = placeholder em branco. */
  imageUrl?: string
}

export function ProjectMockup({ type, className = '', imageUrl }: ProjectMockupProps) {
  const screenContent = imageUrl ? (
    <img src={imageUrl} alt="" className="mockup__screen-img" />
  ) : (
    <div className="mockup__screen-content mockup__screen-site mockup__screen--placeholder" />
  )

  if (type === 'macbook') {
    return (
      <div className={`mockup mockup--macbook ${className}`} aria-hidden="true">
        <div className="mockup__macbook">
          <div className="mockup__screen">
            {screenContent}
          </div>
          <div className="mockup__base" />
        </div>
      </div>
    )
  }

  if (type === 'iphone') {
    return (
      <div className={`mockup mockup--iphone ${className}`} aria-hidden="true">
        <div className="mockup__iphone">
          <div className="mockup__notch" />
          <div className="mockup__screen mockup__screen-maps" />
        </div>
        <div className="mockup__badge mockup__badge--glass">
          <span className="mockup__badge-value">Visualizações +400%</span>
        </div>
      </div>
    )
  }

  if (type === 'iphones') {
    const feedContent = imageUrl ? (
      <img src={imageUrl} alt="" className="mockup__screen-img" />
    ) : (
      <div className="mockup__screen--placeholder" />
    )
    return (
      <div className={`mockup mockup--iphones ${className}`} aria-hidden="true">
        <div className="mockup__iphone mockup__iphone--back" />
        <div className="mockup__iphone mockup__iphone--mid" />
        <div className="mockup__iphone mockup__iphone--front">
          <div className="mockup__notch" />
          <div className="mockup__screen mockup__screen-feed">{feedContent}</div>
        </div>
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className={`mockup mockup--dashboard ${className}`} aria-hidden="true">
        <div className="mockup__dashboard">
          <div className="mockup__chart">
            <svg viewBox="0 0 200 80" fill="none" aria-hidden="true">
              <path
                d="M 0 60 Q 25 50, 50 45 T 100 35 T 150 25 T 200 15"
                stroke="var(--neon-lime)"
                strokeWidth="2"
                fill="none"
                opacity="0.9"
              />
              <path
                d="M 0 60 Q 25 50, 50 45 T 100 35 T 150 25 T 200 15 L 200 80 L 0 80 Z"
                fill="url(#chartGrad)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="var(--neon-lime)" stopOpacity="0.4" />
                  <stop stopColor="var(--neon-lime)" stopOpacity="0" offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mockup__kpi">ROAS 5.0</div>
        </div>
      </div>
    )
  }

  return null
}
