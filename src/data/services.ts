/**
 * Segmento de texto com suporte a destaque
 * Usado para criar textos formatados com partes em negrito/highlight
 */
export interface DescriptionSegment {
  text: string
  highlight?: boolean
}

/**
 * Item de serviço para exibição em cards da seção de serviços
 */
export interface ServiceItem {
  id: string
  title: string
  description: DescriptionSegment[]
  benefits?: string[]
  size: 'large' | 'medium' | 'wide'
  actionLabel?: string
}

/**
 * Serviços principais - Foco em atração e conversão de clientes
 * 
 * Inclui:
 * - Sites profissionais
 * - Gestão de redes sociais
 * - Otimização de Google Business
 * - Estratégia digital
 */
export const services: ServiceItem[] = [
  {
    id: 'sites',
    title: 'Sites',
    description: [
      { text: 'Um site profissional que transmite ' },
      { text: 'confiança', highlight: true },
      { text: ' e transforma visitantes em ' },
      { text: 'clientes', highlight: true },
      { text: '.' },
    ],
    size: 'medium' as const,
    actionLabel: 'Ver sites entregues →',
  },
  {
    id: 'redes',
    title: 'Redes sociais',
    description: [
      { text: 'Sua ' },
      { text: 'marca ativa e profissional', highlight: true },
      { text: ', sem você se preocupar com o que postar.' },
    ],
    size: 'medium' as const,
    actionLabel: 'Ver estratégias →',
  },
  {
    id: 'google',
    title: 'Google Business',
    description: [
      { text: 'Seja ' },
      { text: 'encontrado', highlight: true },
      { text: ' por quem já está procurando seu ' },
      { text: 'serviço', highlight: true },
      { text: ' na sua região.' },
    ],
    size: 'medium' as const,
    actionLabel: 'Ver resultados →',
  },
  {
    id: 'estrategia',
    title: 'Estratégia digital',
    description: [
      { text: 'Um plano claro para transformar sua ' },
      { text: 'presença digital', highlight: true },
      { text: ' em ' },
      { text: 'resultados reais', highlight: true },
      { text: '.' },
    ],
    size: 'wide' as const,
    actionLabel: 'Conhecer o método →',
  },
]

/**
 * Serviços de automação - Foco em organização e escalabilidade
 * 
 * Inclui:
 * - Sistemas internos sob medida
 * - Chatbots inteligentes para atendimento
 */
export const automationServices: ServiceItem[] = [
  {
    id: 'sistemas',
    title: 'Sistemas Internos',
    description: [
      { text: 'Sistemas sob medida para ' },
      { text: 'organizar processos', highlight: true },
      { text: ', reduzir erros e ' },
      { text: 'escalar sua operação', highlight: true },
      { text: '.' },
    ],
    size: 'medium' as const,
    actionLabel: 'Solicitar solução →',
  },
  {
    id: 'chatbots',
    title: 'Chatbots Inteligentes',
    description: [
      { text: 'Atendimento automatizado que ' },
      { text: 'responde, qualifica e vende', highlight: true },
      { text: ' 24h por dia.' },
    ],
    size: 'medium' as const,
    actionLabel: 'Ver em ação →',
  },
]
