import './ServiceIcon3D.css'

type ServiceId = 'sites' | 'redes' | 'google' | 'estrategia'

interface ServiceIcon3DProps {
  serviceId: ServiceId
  className?: string
}

export function ServiceIcon3D({ serviceId, className = '' }: ServiceIcon3DProps) {
  return (
    <div className={`service-icon-3d service-icon-3d--${serviceId} ${className}`} aria-hidden="true">
      {serviceId === 'sites' && <IconGlobe />}
      {serviceId === 'redes' && <IconSocial />}
      {serviceId === 'google' && <IconPin />}
      {serviceId === 'estrategia' && <IconTarget />}
    </div>
  )
}

/* Globo: esfera de aneis neon ciano + bordas brancas (vidro fosco) */
function IconGlobe() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="service-icon-3d__svg">
      <defs>
        <linearGradient id="globeEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="40%" stopColor="rgba(34, 211, 238, 0.8)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.4)" />
        </linearGradient>
        <filter id="globeGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="40" cy="40" r="36" fill="none" stroke="url(#globeEdge)" strokeWidth="2.5" opacity="0.95" filter="url(#globeGlow)" />
      <ellipse cx="40" cy="40" rx="36" ry="12" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.9" />
      <ellipse cx="40" cy="40" rx="12" ry="36" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.9" />
      <path d="M 4 40 Q 40 18, 76 40 Q 40 62, 4 40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1" opacity="0.85" />
      <path d="M 4 40 Q 40 62, 76 40" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" opacity="0.85" />
      <circle cx="26" cy="30" r="10" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" opacity="0.9" />
    </svg>
  )
}

/* Redes Sociais: icones de Facebook, Instagram e WhatsApp */
function IconSocial() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="service-icon-3d__svg">
      <defs>
        <linearGradient id="socialEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.9)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.5)" />
        </linearGradient>
        <filter id="socialGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Instagram - topo esquerda */}
      <g filter="url(#socialGlow)">
        <rect x="8" y="12" width="24" height="24" rx="6" fill="rgba(20,30,35,0.8)" stroke="url(#socialEdge)" strokeWidth="1.5" />
        <circle cx="20" cy="24" r="6" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="27" cy="17" r="2" fill="#22d3ee" />
      </g>
      
      {/* Facebook - topo direita */}
      <g filter="url(#socialGlow)">
        <rect x="40" y="8" width="28" height="28" rx="6" fill="rgba(20,30,35,0.8)" stroke="url(#socialEdge)" strokeWidth="1.5" />
        <path d="M58 16 L58 20 L55 20 C54 20 54 21 54 22 L54 25 L58 25 L57.5 29 L54 29 L54 40 L50 40 L50 29 L47 29 L47 25 L50 25 L50 21.5 C50 18 52 16 55 16 L58 16Z" fill="#22d3ee" />
      </g>
      
      {/* WhatsApp - embaixo centro */}
      <g filter="url(#socialGlow)">
        <rect x="20" y="44" width="32" height="32" rx="6" fill="rgba(20,30,35,0.8)" stroke="url(#socialEdge)" strokeWidth="1.5" />
        <path d="M36 50 C30 50 25 55 25 61 C25 63 25.5 65 26.5 66.5 L25 72 L30.5 70.5 C32 71.5 34 72 36 72 C42 72 47 67 47 61 C47 55 42 50 36 50Z" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M33 57 C33 57 34 57 34.5 58 C35 59 36 61 38 59.5 C40 58 41 57 41 57" fill="none" stroke="#22d3ee" strokeWidth="1.3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

/* Pin: vidro ciano com bordas brancas + "G" brilhante */
function IconPin() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="service-icon-3d__svg">
      <defs>
        <linearGradient id="pinEdge" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.6)" />
        </linearGradient>
        <filter id="pinGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 40 14 C 24 14 18 28 18 40 C 18 52 40 66 40 66 C 40 66 62 52 62 40 C 62 28 56 14 40 14 Z"
        fill="rgba(34, 211, 238, 0.2)"
        stroke="url(#pinEdge)"
        strokeWidth="2"
        filter="url(#pinGlow)"
      />
      <circle cx="40" cy="38" r="11" fill="rgba(34, 211, 238, 0.35)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" />
      <text x="40" y="43" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="system-ui, sans-serif">G</text>
    </svg>
  )
}

/* Alvo: circulos com bordas brancas/ciano + centro emissivo */
function IconTarget() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="service-icon-3d__svg">
      <defs>
        <linearGradient id="targetEdge" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.7)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.6)" />
        </linearGradient>
        <linearGradient id="arrowCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.7)" />
        </linearGradient>
        <filter id="targetGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#targetEdge)" strokeWidth="1.5" opacity="0.95" />
      <circle cx="40" cy="40" r="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="40" cy="40" r="18" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <circle cx="40" cy="40" r="10" fill="rgba(34, 211, 238, 0.3)" stroke="#22d3ee" strokeWidth="1.5" filter="url(#targetGlow)" />
      <circle cx="40" cy="40" r="4" fill="#22d3ee" filter="url(#targetGlow)" />
      <path d="M 56 24 L 64 32 L 56 40 L 52 36 L 58 30 L 56 24 Z" fill="url(#arrowCyan)" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
    </svg>
  )
}
