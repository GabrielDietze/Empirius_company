import type { ProjectMockupType } from '../data/projects'
import './ProjectMockup.css'

interface ProjectMockupProps {
  type: ProjectMockupType
  className?: string
  /** URL da imagem do projeto (tela do dispositivo). Vazio = placeholder em branco. */
  imageUrl?: string
  /** Esconde o badge nativo do iPhone (ex.: no stack MacBook + iPhone). */
  hideBadge?: boolean
  /** Para type iphones: exibe simulação de perfil Instagram (modo escuro) em vez da imagem. */
  screenVariant?: 'instagram'
}

export function ProjectMockup({ type, className = '', imageUrl, hideBadge, screenVariant }: ProjectMockupProps) {
  const screenContent = imageUrl ? (
    <img src={imageUrl} alt="" className="mockup__screen-img" />
  ) : (
    <div className="mockup__screen--placeholder" />
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
    const iphoneScreenContent = imageUrl ? (
      <img src={imageUrl} alt="" className="mockup__screen-img" />
    ) : (
      <div className="mockup__screen--placeholder" />
    )
    return (
      <div className={`mockup mockup--iphone ${className}`} aria-hidden="true">
        <div className="mockup__iphone">
          <div className="mockup__notch" />
          <div className="mockup__screen mockup__screen-maps">{iphoneScreenContent}</div>
        </div>
        {!hideBadge && (
          <div className="mockup__badge mockup__badge--green">
            <span className="mockup__badge-value">+400% Visualizações</span>
          </div>
        )}
      </div>
    )
  }

  if (type === 'iphones') {
    const useInstagramSim = screenVariant === 'instagram'
    const feedContent = !useInstagramSim && imageUrl ? (
      <img src={imageUrl} alt="" className="mockup__screen-img" />
    ) : (
      <div className="mockup__screen--placeholder mockup__screen--instagram">
        <div className="mockup__instagram-header">
          <div className="mockup__instagram-avatar" />
          <div className="mockup__instagram-name">@perfil</div>
          <button type="button" className="mockup__instagram-follow" aria-hidden="true">Seguir</button>
        </div>
        <div className="mockup__instagram-bio">Biografia do perfil · Link</div>
        <div className="mockup__instagram-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="mockup__instagram-cell" />
          ))}
        </div>
      </div>
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
                stroke="#a3e635"
                strokeWidth="4"
                fill="none"
                opacity="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neonGlow)"
              />
              <path
                d="M 0 60 Q 25 50, 50 45 T 100 35 T 150 25 T 200 15 L 200 80 L 0 80 Z"
                fill="url(#chartGrad)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#a3e635" stopOpacity="0.3" />
                  <stop stopColor="#a3e635" stopOpacity="0" offset="1" />
                </linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
          <div className="mockup__kpi mockup__kpi--badge">ROAS 5.0</div>
        </div>
      </div>
    )
  }

  return null
}
