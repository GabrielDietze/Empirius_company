import { useState, useEffect } from 'react'
import './Header.css'

/**
 * Componente Header - Navegação fixa no topo da página
 * 
 * Funcionalidades:
 * - Menu hambúrguer responsivo para mobile
 * - Altera estilo ao fazer scroll (adiciona background/sombra)
 * - Links de navegação com scroll suave para âncoras
 * - Acessibilidade com aria-labels adequados
 */
export function Header() {
  // Estado do menu mobile (aberto/fechado)
  const [menuOpen, setMenuOpen] = useState(false)
  // Estado que indica se o usuário fez scroll na página
  const [scrolled, setScrolled] = useState(false)

  // Detecta scroll para alterar o estilo do header
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
