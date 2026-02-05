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
      { text: 'Páginas profissionais, rápidas e adaptadas a celular ' },
      { text: 'para você ser encontrado e vender mais.', highlight: true },
    ],
    size: 'medium' as const,
  },
  {
    id: 'redes',
    title: 'Redes sociais',
    description: [
      { text: 'Gestão e criação de conteúdo para Instagram, Facebook e ' },
      { text: 'outras redes do seu público.', highlight: true },
    ],
    size: 'medium' as const,
  },
  {
    id: 'google',
    title: 'Google Business',
    description: [
      { text: 'Perfil otimizado, avaliações e ' },
      { text: 'visibilidade no Google para quem busca você na região.', highlight: true },
    ],
    size: 'medium' as const,
  },
  {
    id: 'estrategia',
    title: 'Estratégia digital',
    description: [
      { text: 'Planejamento e orientação para você ' },
      { text: 'usar o digital a favor do seu negócio.', highlight: true },
      { text: ' A base de tudo.' },
    ],
    size: 'wide' as const,
  },
]
