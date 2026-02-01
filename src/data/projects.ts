export type ProjectMockupType = 'macbook' | 'iphone' | 'iphones' | 'dashboard'

/** Segmento de descrição com opção de destaque em gradiente */
export interface DescriptionSegment {
  text: string
  highlight?: boolean
}

/** Um cliente/projeto dentro de um showcase (carrossel) */
export interface ShowcaseProject {
  id: string
  name: string
  niche: string
  image: string
  /** Link do site ou perfil (ex.: site, Instagram) */
  url?: string
}

/** Vitrine de um serviço: lado fixo (título, descrição, nav) + carrossel de clientes */
export interface Showcase {
  id: string
  serviceTitle: string
  serviceDescription: DescriptionSegment[]
  mockupType: 'macbook' | 'iphones' | 'iphone' | 'dashboard'
  accent: 'cyan' | 'purple' | 'lime' | 'pink'
  projects: ShowcaseProject[]
}

export const showcases: Showcase[] = [
  {
    id: 'sites',
    serviceTitle: 'Sites',
    serviceDescription: [
      { text: 'Páginas profissionais que ' },
      { text: 'apresentam seu negócio e convertem visitantes em clientes.', highlight: true },
    ],
    mockupType: 'macbook',
    accent: 'cyan',
    projects: [
      { id: 'marcela', name: 'Personal Marcela Magalhães', niche: 'Personal / Saúde', image: '', url: 'https://personalmarcela.com.br/' },
      { id: 'portfolio-dev', name: 'Portfólio Dev', niche: 'Portfólio', image: '', url: 'https://portifolio-pessoal-rosy.vercel.app/' },
    ],
  },
  {
    id: 'redes',
    serviceTitle: 'Redes Sociais',
    serviceDescription: [
      { text: 'Gestão e criação de conteúdo para você ' },
      { text: 'conectar com seu público no Instagram e outras redes.', highlight: true },
    ],
    mockupType: 'iphones',
    accent: 'purple',
    projects: [
      { id: 'academia', name: 'Academia Corpo em Forma', niche: 'Instagram', image: '', url: 'https://www.instagram.com/academia.corpo.emforma/' },
      { id: 'casa-vidro', name: 'Casa do Vidro Santa Luzia', niche: 'Instagram', image: '', url: 'https://www.instagram.com/casadovidrosantaluzia/' },
    ],
  },
  {
    id: 'google-business',
    serviceTitle: 'Google Business Profile & SEO Local',
    serviceDescription: [
      { text: 'Perfil otimizado, avaliações e ' },
      { text: 'visibilidade no Google para quem busca você na região.', highlight: true },
    ],
    mockupType: 'iphone',
    accent: 'lime',
    projects: [
      { id: 'google-profile', name: 'Ver perfil no Google', niche: 'SEO Local', image: '', url: 'https://share.google/y40tADlL697QNxP2b' },
    ],
  },
  {
    id: 'trafego-pago',
    serviceTitle: 'Tráfego pago e consultoria',
    serviceDescription: [
      { text: 'Campanhas estruturadas para ' },
      { text: 'mais leads qualificados e menos desperdício.', highlight: true },
    ],
    mockupType: 'dashboard',
    accent: 'pink',
    projects: [
      { id: 'consultoria-ads', name: 'Consultoria em tráfego pago', niche: 'Meta Ads · Google Ads', image: '', url: '' },
    ],
  },
]
