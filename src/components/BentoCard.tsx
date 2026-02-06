import { ReactNode } from 'react'
import { ServiceIcon3D } from './ServiceIcon3D'
import './BentoCard.css'

type Size = 'small' | 'medium' | 'large' | 'wide'
type ServiceId = 'sites' | 'redes' | 'google' | 'estrategia' | 'sistemas' | 'chatbots'

export interface DescriptionSegment {
  text: string
  highlight?: boolean
}

interface BentoCardProps {
  title: string
  description?: string | DescriptionSegment[]
  benefits?: string[]
  actionLabel?: string
  actionHref?: string
  iconType?: ServiceId
  icon?: string
  children?: ReactNode
  size?: Size
  className?: string
}

function DescriptionContent({
  description,
  isSegments,
}: {
  description: string | DescriptionSegment[]
  isSegments: boolean
}) {
  return (
    <p className="bento-card__description">
      {isSegments
        ? (description as DescriptionSegment[]).map((seg, i) =>
            seg.highlight ? (
              <strong key={i} className="bento-card__highlight">
                {seg.text}
              </strong>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )
        : (description as string)}
    </p>
  )
}

export function BentoCard({
  title,
  description,
  benefits,
  actionLabel,
  actionHref,
  iconType,
  icon,
  children,
  size = 'medium',
  className = '',
}: BentoCardProps) {
  const isSegments = Array.isArray(description) && description.length > 0
  const isWide = size === 'wide'

  const iconEl = iconType ? (
    <ServiceIcon3D serviceId={iconType} className="bento-card__icon" />
  ) : icon ? (
    <div className="bento-card__icon bento-card__icon-emoji" aria-hidden="true">{icon}</div>
  ) : null

  const contentBlock = (
    <>
      <h3 className="bento-card__title">{title}</h3>
      {description && (
        <DescriptionContent description={description} isSegments={isSegments} />
      )}
      {benefits && benefits.length > 0 && (
        <ul className="bento-card__benefits" aria-label="Benefícios">
          {benefits.map((item, i) => (
            <li key={i}>
              <span className="bento-card__check" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </>
  )

  const actionLink =
    actionLabel && actionHref ? (
      <a href={actionHref} className="bento-card__action">
        {actionLabel}
      </a>
    ) : null

  if (isWide) {
    return (
      <article
        className={`bento-card bento-card--wide ${className}`}
      >
        <div className="bento-card__wide-inner">
          <div className="bento-card__wide-icon" aria-hidden="true">
            {iconEl}
          </div>
          <div className="bento-card__wide-content">
            {contentBlock}
            {actionLink}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={`bento-card bento-card--${size} ${className}`}
    >
      <div className="bento-card__content">
        {iconEl}
        {contentBlock}
      </div>
      {actionLink}
    </article>
  )
}
