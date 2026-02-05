export interface DescriptionSegment {
  text: string
  highlight?: boolean
}

export interface ServiceItem {
  id: string
  title: string
  description: DescriptionSegment[]
  benefits?: string[]
  size: 'large' | 'medium' | 'wide'
}

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
  },
]
