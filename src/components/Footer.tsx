import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__logo">Empirius</p>
        <p className="footer__text">Presença digital para micro e pequenos empreendedores.</p>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Empirius. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
