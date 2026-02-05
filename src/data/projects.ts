/** Tipo de mockup (usado por ProjectMockup, mantido para compatibilidade) */
export type ProjectMockupType = 'macbook' | 'iphone' | 'iphones' | 'dashboard'

/** Projeto/case para a seção Projetos — card expansível */
export interface Project {
  id: string
  /** Nome do projeto / cliente */
  name: string
  /** Tipo de serviço */
  serviceType: string
  /** Problema em 1 linha (resumo no card fechado) */
  problema: string
  /** Resultado (métrica) — destaque visual */
  resultado: string
  /** Imagem ou mockup do projeto */
  image: string
  /** Link externo (opcional) */
  url?: string
  /** Tags de tecnologias (opcional, exibido apenas no card Hero) */
  techTags?: string[]
  /** Conteúdo do estado expandido */
  expandido?: {
    /** Breve descrição do cliente e do cenário */
    contexto: string
    /** Dor principal / o que não funcionava (bullets) */
    problema: string[]
    /** Estratégia aplicada / ações realizadas (bullets) */
    solucao: string[]
    /** Métricas (bullets) */
    resultados: string[]
    /** Ex: "Figma • React • Node" */
    ferramentas: string
  }
}

export const projects: Project[] = [
  {
    id: 'personal-marcela',
    name: 'Personal Marcela Magalhães',
    serviceType: 'Site • Conversão',
    problema: 'Desafio de posicionamento digital.',
    resultado: '+38% conversão',
    image: '/images/personal-marcela.png',
    url: 'https://personalmarcela.com.br/',
    techTags: ['WordPress', 'Elementor', 'SEO Local', 'UX Design'],
    expandido: {
      contexto:
        'Personal trainer com foco em resultados e bem-estar, precisava de presença digital profissional para atrair alunos e divulgar serviços.',
      problema: [
        'Falta de credibilidade e visibilidade na região.',
      ],
      solucao: [
        'Site institucional com foco em conversão e SEO local.',
        'Formulário de contato e integração com WhatsApp.',
        'Conteúdo claro sobre metodologia e depoimentos.',
      ],
      resultados: ['+38% conversão', '+25% faturamento', 'Mais leads qualificados'],
      ferramentas: 'Figma • React • Vercel • SEO',
    },
  },
  {
    id: 'academia-corpo',
    name: 'Academia Corpo em Forma',
    serviceType: 'Redes Sociais • Instagram',
    problema: 'Processo manual e pouco alcance nas redes.',
    resultado: '-50% tempo operacional',
    image: 'https://picsum.photos/seed/empirius-academia/800/500',
    url: 'https://www.instagram.com/academia.corpo.emforma/',
    expandido: {
      contexto:
        'Academia com foco em resultados e comunidade, buscando mais alcance e engajamento no Instagram.',
      problema: [
        'Processo manual de divulgação e agendamento.',
        'Pouco alcance orgânico nas redes.',
      ],
      solucao: [
        'Gestão de redes com conteúdo planejado e stories.',
        'Padrão visual e tom de voz alinhados à marca.',
        'Uso de chamadas para ação e link na bio.',
      ],
      resultados: ['-50% tempo operacional', '+40% alcance', 'Mais engajamento'],
      ferramentas: 'Instagram • Canva • Métricas nativas',
    },
  },
  {
    id: 'consultoria-digital',
    name: 'Consultoria Empresarial Nexus',
    serviceType: 'Estratégia Digital Completa',
    problema: 'Empresa sem presença digital e perdendo mercado para concorrentes.',
    resultado: '+180% faturamento em 6 meses',
    image: 'https://picsum.photos/seed/empirius-nexus/1200/600',
    url: '#',
    expandido: {
      contexto:
        'Consultoria empresarial tradicional que precisava se reinventar no digital para não perder relevância no mercado.',
      problema: [
        'Zero presença online enquanto concorrentes dominavam.',
        'Processo de captação 100% offline e limitado.',
        'Marca desatualizada e sem identidade digital.',
      ],
      solucao: [
        'Diagnóstico completo e plano estratégico de 12 meses.',
        'Criação de site institucional otimizado para conversão.',
        'Gestão de redes sociais com conteúdo de autoridade.',
        'Campanhas de Google Ads segmentadas por região.',
      ],
      resultados: [
        '+180% faturamento em 6 meses',
        '+320% tráfego orgânico',
        '45 novos contratos fechados',
        'ROI de 8x sobre investimento em marketing',
      ],
      ferramentas: 'Estratégia • Site • Redes Sociais • Google Ads • Analytics',
    },
  },
  {
    id: 'casa-vidro',
    name: 'Casa do Vidro Santa Luzia',
    serviceType: 'Google Business • SEO Local',
    problema: 'Desafio de visibilidade local.',
    resultado: '+62% leads qualificados',
    image: 'https://picsum.photos/seed/empirius-casavidro/1200/600',
    url: 'https://www.instagram.com/casadovidrosantaluzia/',
    expandido: {
      contexto:
        'Loja de vidros e espelhos com forte atuação local, precisando aparecer para quem busca na região.',
      problema: [
        'Pouca visibilidade no Google para buscas locais.',
      ],
      solucao: [
        'Otimização do perfil no Google (horários, fotos, descrição).',
        'SEO local e palavras-chave regionais.',
        'Respostas a avaliações e presença ativa.',
      ],
      resultados: ['+62% leads qualificados', '+400% visualizações no perfil', 'Melhor posicionamento local'],
      ferramentas: 'Google Business • Google Search Console • SEO Local',
    },
  },
]
