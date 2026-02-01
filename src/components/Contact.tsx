import './Contact.css'

/** Número WhatsApp com DDI (ex.: 5511999999999). Substitua pelo número real. */
const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__inner">
        <h2 className="contact__title reveal">Contato</h2>
        <p className="contact__intro reveal reveal-delay-1">
          Pule a burocracia e fale com quem entende do assunto.
        </p>

        <div className="contact__grid reveal reveal-delay-2">
          {/* Coluna esquerda — A Promessa */}
          <div className="contact__promise">
            <h3 className="contact__promise-title">
              Sua empresa merece <span className="contact__highlight">destaque</span> no digital.
            </h3>
            <p className="contact__promise-subtitle">
              Pule a burocracia. Tenha <span className="contact__highlight">acesso direto</span> a uma <span className="contact__highlight">consultoria estratégica</span> para tirar suas dúvidas e criar um plano de ação para o seu negócio.
            </p>
            <ul className="contact__value-list" aria-label="Benefícios do atendimento">
              <li>
                <span className="contact__value-check" aria-hidden="true">✓</span>
                Diagnóstico rápido do seu perfil
              </li>
              <li>
                <span className="contact__value-check" aria-hidden="true">✓</span>
                Estratégias personalizadas
              </li>
              <li>
                <span className="contact__value-check" aria-hidden="true">✓</span>
                Orçamento sem compromisso
              </li>
            </ul>
          </div>

          {/* Coluna direita — O Cartão de Acesso (Glassmorphism) */}
          <div className="contact__action">
            <div className="contact-card contact-card--glass">
              {/* Cabeçalho: avatar + status online */}
              <div className="contact-card__header">
                <div className="contact-card__avatar" aria-hidden="true">
                  <span className="contact-card__avatar-inner">E</span>
                </div>
                <div className="contact-card__status">
                  <span className="contact-card__status-dot" aria-hidden="true" />
                  <span className="contact-card__status-text">Online agora</span>
                </div>
              </div>

              {/* Texto de convite */}
              <p className="contact-card__invite">
                Olá! Vamos analisar o seu negócio? Me chame para uma conversa rápida.
              </p>

              {/* Botão principal — Ciano/Azul + Glow */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card__cta"
              >
                <WhatsAppIcon className="contact-card__cta-icon" />
                <span>Iniciar conversa no WhatsApp</span>
              </a>

              {/* Rodapé */}
              <p className="contact-card__footer">
                Prefere e-mail?{' '}
                <a href="mailto:contato@empirius.com.br" className="contact-card__footer-link">
                  contato@empirius.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
