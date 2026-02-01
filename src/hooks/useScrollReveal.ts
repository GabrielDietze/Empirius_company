import { useEffect } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(selector: string, options: Options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 0) return

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
