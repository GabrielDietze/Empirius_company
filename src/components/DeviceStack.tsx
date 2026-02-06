import { ProjectMockup } from './ProjectMockup'
import './DeviceStack.css'

interface DeviceStackProps {
  imageUrl?: string
  className?: string
}

/**
 * DeviceStack - Composição de dispositivos empilhados
 * 
 * Combina MacBook (ao fundo, inclinado) + iPhone (na frente)
 * para criar uma apresentação visual impactante de projetos responsivos.
 * 
 * Inclui efeito de glow para dar profundidade e destaque.
 */
export function DeviceStack({ imageUrl, className = '' }: DeviceStackProps) {
  return (
    <div className={`device-stack ${className}`} aria-hidden="true">
      <div className="device-stack__glow" aria-hidden="true" />
      <div className="device-stack__back">
        <ProjectMockup type="macbook" imageUrl={imageUrl} />
      </div>
      <div className="device-stack__front">
        <ProjectMockup type="iphone" imageUrl={imageUrl} hideBadge />
      </div>
    </div>
  )
}
