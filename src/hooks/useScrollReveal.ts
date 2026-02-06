import { useEffect } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
}

/**
 * Hook customizado para animações de reveal ao fazer scroll
 * 
 * Usa Intersection Observer para detectar quando elementos entram no viewport
 * e adiciona a classe 'is-visible' para acionar animações CSS.
 * 
 * @param selector - Seletor CSS dos elementos a serem observados (ex: '.reveal')
 * @param options - Opções do IntersectionObserver
 * @param options.threshold - Porcentagem do elemento visível para disparar (0 a 1)
 * @param options.rootMargin - Margem adicional do viewport para detecção precoce
 * 
 * @example
 * useScrollReveal('.reveal', { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
 */
export function useScrollReveal(selector: string, options: Options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 0) return

    // Cria observer que adiciona classe 'is-visible' quando elemento entra no viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))
    return () => elements.forEach((el) => observer.unobserve(el))
  }, [selector, threshold, rootMargin])
}
