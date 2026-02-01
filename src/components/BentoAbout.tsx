import './BentoAbout.css'

export function BentoAbout() {
  return (
    <section className="bento-about" id="sobre">
      <div className="bento-about__mesh" aria-hidden="true" />
      <div className="bento-about__inner">
        <div className="bento-about__text">
          <h2 className="bento-about__title reveal">Sobre a Empirius</h2>
          <p className="reveal reveal-delay-1">
            A <strong>Empirius</strong> nasceu da vontade de levar o melhor do mundo digital para quem mais precisa: micro e pequenos empreendedores, autônomos e negócios locais que querem crescer sem depender de orçamentos gigantes.
          </p>
          <p className="reveal reveal-delay-2">
            Trabalhamos com foco em <strong>credibilidade</strong> e <strong>confiança</strong>: cada site, cada rede social e cada estratégia é pensada para refletir a força do seu negócio e conectar você ao seu cliente ideal.
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
