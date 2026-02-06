import { useEffect, useRef } from 'react'

/**
 * Hook customizado para aplicar efeito parallax em elementos
 * 
 * Move o elemento em velocidade reduzida em relação ao scroll,
 * criando uma sensação de profundidade e movimento.
 * 
 * @param speed - Velocidade do parallax (0 a 1). Ex: 0.5 = metade da velocidade do scroll
 * @returns ref - Referência para anexar ao elemento DOM que terá o efeito
 * 
 * @example
 * const parallaxRef = useParallax(0.3)
 * <div ref={parallaxRef}>Conteúdo com parallax</div>
 */
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      // Calcula a posição do elemento em relação ao centro da viewport
      const rect = el.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      
      // Aplica offset proporcional à distância do centro
      const offset = (viewportCenter - centerY) * speed
      el.style.transform = `translate3d(0, ${offset * 0.1}px, 0)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return ref
}
