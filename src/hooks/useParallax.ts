import { useEffect, useRef } from 'react'

/**
 * Aplica parallax suave ao elemento: move em velocidade reduzida com o scroll.
 * Uso: ref = useParallax(speed) — speed 0.5 = metade da velocidade do scroll.
 */
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const offset = (viewportCenter - centerY) * speed
      el.style.transform = `translate3d(0, ${offset * 0.1}px, 0)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
