/** Benefício da consultoria (por que trabalhar com a Empirius) */
export interface BenefitItem {
  id: string
  title: string
  description: string
  /** Accent opcional para ícone/borda (cyan, purple, lime, pink) */
  accent?: 'cyan' | 'purple' | 'lime' | 'pink'
}

export const benefits: BenefitItem[] = [
  {
    id: 'resultados',
    title: 'Resultados mensuráveis',
    description: 'Métricas claras e acompanhamento do que importa para o seu negócio.',
    accent: 'cyan',
  },
  {
    id: 'estrategia',
    title: 'Estratégia sob medida',
    description: 'Planejamento feito para o tamanho e o momento do seu negócio.',
    accent: 'purple',
  },
  {
    id: 'atendimento',
    title: 'Atendimento próximo',
    description: 'Comunicação direta, sem burocracia. Você fala com quem executa.',
    accent: 'lime',
  },
  {
    id: 'foco',
    title: 'Foco em quem está crescendo',
    description: 'Experiência com micro e pequenos negócios que querem dar o próximo passo.',
    accent: 'pink',
  },
]
