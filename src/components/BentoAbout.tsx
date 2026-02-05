import './BentoAbout.css'

export function BentoAbout() {
  return (
    <section className="bento-about" id="sobre">
      <div className="bento-about__mesh" aria-hidden="true" />
      <div className="bento-about__inner">
        <div className="bento-about__text">
          <h2 className="bento-about__title reveal">Sobre a Empirius</h2>
          <p className="reveal reveal-delay-1">
            A <span className="bento-about__highlight">Empirius</span> nasceu da vontade de levar o melhor do <span className="bento-about__highlight">mundo digital</span> para quem mais precisa: <span className="bento-about__highlight">micro e pequenos empreendedores</span>, autônomos e negócios locais que querem <span className="bento-about__highlight">crescer</span> sem depender de orçamentos gigantes.
          </p>
          <p className="reveal reveal-delay-2">
            Trabalhamos com foco em <span className="bento-about__highlight">credibilidade</span> e <span className="bento-about__highlight">confiança</span>: cada site, cada rede social e cada estratégia é pensada para refletir a força do seu negócio e conectar você ao seu <span className="bento-about__highlight">cliente ideal</span>.
          </p>
          <a href="#contato" className="btn btn--primary reveal reveal-delay-3">Vamos conversar</a>
        </div>
        <div className="bento-about__visual reveal reveal-delay-2" aria-hidden="true">
          <div className="bento-about__shape" />
        </div>
      </div>
    </section>
  )
}
