import { ProjectMockup } from './ProjectMockup'
import './DeviceStack.css'

interface DeviceStackProps {
  imageUrl?: string
  className?: string
}

/** Stack MacBook (trás, inclinado) + iPhone (frente) para vitrine de projeto */
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
