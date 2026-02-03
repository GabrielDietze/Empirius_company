import { useState, useEffect } from 'react'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__logo">Empirius</a>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Menu principal">
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="header__toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
