/**
 * Benefício/diferencial da empresa
 * Usado na seção de "Por que escolher a Empirius"
 */
export interface BenefitItem {
  id: string
  title: string
  /** Linha de impacto antes da descrição (suporta HTML para destaque) */
  impact: string
  /** Texto explicativo (suporta HTML para destaque) */
  description: string
  /** Ícone SVG do card */
  icon?: string
}

/**
 * Lista de benefícios/diferenciais da Empirius
 * 
 * Demonstra:
 * - Resultados mensuráveis (ROI)
 * - Estratégia personalizada
 * - Atendimento próximo
 * - Foco em crescimento escalável
 */
export const benefits: BenefitItem[] = [
  {
    id: 'resultados',
    title: 'Resultados mensuráveis',
    impact: 'Decisões baseadas em <em>dados</em>, não achismo.',
    description: 'Acompanhamos métricas que impactam <em>faturamento</em> e <em>crescimento real</em>.',
    icon: 'chart',
  },
  {
    id: 'estrategia',
    title: 'Estratégia sob medida',
    impact: 'Nada de <em>fórmulas prontas</em>.',
    description: 'Criamos estratégias específicas para o <em>tamanho</em> e <em>momento</em> do seu negócio.',
    icon: 'target',
  },
  {
    id: 'atendimento',
    title: 'Atendimento próximo',
    impact: 'Você fala com <em>quem executa</em>.',
    description: 'Comunicação direta, sem <em>burocracia</em>, com respostas rápidas.',
    icon: 'chat',
  },
  {
    id: 'foco',
    title: 'Foco em crescimento',
    impact: 'Parceiros de quem quer <em>escalar</em>.',
    description: 'Atuamos com negócios prontos para dar o <em>próximo passo</em>.',
    icon: 'rocket',
  },
]
