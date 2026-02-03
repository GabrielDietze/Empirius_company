import personalMarcelaImage from '../assets/personal-marcela.png'

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

/** Posição/tamanho no Bento Grid (12 colunas, 3 linhas lógicas) */
export interface BentoSize {
  colSpan: number
  rowSpan: number
  /** Coluna inicial (1-based) */
  colStart: number
  /** Linha inicial (1-based) */
  rowStart: number
}

/** Vitrine de um serviço: lado fixo (título, descrição, nav) + carrossel de clientes */
export interface Showcase {
  id: string
  serviceTitle: string
  serviceDescription: DescriptionSegment[]
  mockupType: 'macbook' | 'iphones' | 'iphone' | 'dashboard'
  accent: 'cyan' | 'purple' | 'lime' | 'pink'
  projects: ShowcaseProject[]
  /** Posição no Bento Grid: col-span e row-span (grid de 12 colunas) */
  bentoSize: BentoSize
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
    bentoSize: { colSpan: 8, rowSpan: 2, colStart: 1, rowStart: 1 },
    projects: [
      { id: 'marcela', name: 'Personal Marcela Magalhães', niche: 'Personal / Saúde', image: personalMarcelaImage, url: 'https://personalmarcela.com.br/' },
      { id: 'portfolio-dev', name: 'Portfólio Dev', niche: 'Portfólio', image: 'https://picsum.photos/seed/empirius-portfolio/800/500', url: 'https://portifolio-pessoal-rosy.vercel.app/' },
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
    bentoSize: { colSpan: 4, rowSpan: 2, colStart: 9, rowStart: 1 },
    projects: [
      { id: 'academia', name: 'Academia Corpo em Forma', niche: 'Instagram', image: 'https://picsum.photos/seed/empirius-academia/800/500', url: 'https://www.instagram.com/academia.corpo.emforma/' },
      { id: 'casa-vidro', name: 'Casa do Vidro Santa Luzia', niche: 'Instagram', image: 'https://picsum.photos/seed/empirius-casavidro/800/500', url: 'https://www.instagram.com/casadovidrosantaluzia/' },
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
    bentoSize: { colSpan: 6, rowSpan: 1, colStart: 1, rowStart: 3 },
    projects: [
      { id: 'google-profile', name: 'Ver perfil no Google', niche: 'SEO Local', image: 'https://picsum.photos/seed/empirius-google/800/500', url: 'https://share.google/y40tADlL697QNxP2b' },
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
    bentoSize: { colSpan: 6, rowSpan: 1, colStart: 7, rowStart: 3 },
    projects: [
      { id: 'consultoria-ads', name: 'Consultoria em tráfego pago', niche: 'Meta Ads · Google Ads', image: 'https://picsum.photos/seed/empirius-ads/800/500', url: '' },
    ],
  },
]
