/**
 * Tipo de mockup usado para visualização de projetos
 * Mantido para compatibilidade futura com ProjectMockup component
 */
export type ProjectMockupType = 'macbook' | 'iphone' | 'iphones' | 'dashboard'

/**
 * Projeto/case de sucesso para exibição no portfólio
 * 
 * Estrutura:
 * - Informações básicas (nome, tipo, problema, resultado)
 * - Imagem de preview
 * - Conteúdo expandido opcional com detalhes completos do case
 */
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
    /** Métricas e resultados alcançados (bullets) */
    resultados: string[]
    /** Tecnologias e ferramentas utilizadas (separadas por " • ") */
    ferramentas: string
  }
}

/**
 * Lista de projetos/cases de sucesso
 * 
 * Ordem de exibição:
 * - Primeiro projeto: Card Hero (destaque maior)
 * - Projetos intermediários: Cards normais
 * - Último projeto: Card Wide (largura completa)
 */
export const projects: Project[] = [
  {
    id: 'lacqua-di-fiori-minas-shopping',
    name: 'Lacqua di Fiori • Minas Shopping',
    serviceType: 'E-commerce • UX/UI • Performance',
    problema: 'Levar a experiência da loja física para um e-commerce elegante, rápido e confiável.',
    resultado: 'E-commerce completo',
    image: '/images/lacqua-di-fiori.png',
    techTags: ['React', 'E-commerce', 'UX/UI', 'SEO'],
    expandido: {
      contexto:
        'Projeto desenvolvido para a loja Lacqua di Fiori do Minas Shopping, traduzindo a presença física da marca em uma experiência de compra digital completa, elegante e preparada para atender clientes em todo o Brasil.',
      problema: [
        'Conectar a confiança e o cuidado da loja física à experiência online.',
        'Organizar perfumes e produtos de beleza em uma navegação simples e intuitiva.',
        'Oferecer uma jornada de compra segura, clara e preparada para diferentes dispositivos.',
      ],
      solucao: [
        'Criação de uma vitrine digital com identidade visual alinhada à Lacqua di Fiori.',
        'Arquitetura de categorias para facilitar a descoberta de perfumes, kits, desodorantes e hidratantes.',
        'Construção de uma experiência responsiva com foco em velocidade, confiança e conversão.',
      ],
      resultados: [
        'E-commerce totalmente funcional',
        'Experiência de compra responsiva',
        'Presença digital integrada à loja física',
      ],
      ferramentas: 'React • E-commerce • UX/UI • SEO • Design Responsivo',
    },
  },
  {
    id: 'personal-marcela',
    name: 'Personal Marcela Magalhães',
    serviceType: 'Site • Automação',
    problema: 'Diferenciar-se em mercado saturado e automatizar atendimento.',
    resultado: '+38% conversão',
    image: '/images/personal-marcela.png',
    url: 'https://personalmarcela.com.br/',
    techTags: ['React', 'Node', 'SEO Local', 'Figma'],
    expandido: {
      contexto:
        'Personal Trainer buscando se diferenciar em um mercado saturado. O objetivo não era apenas "ter um site", mas construir uma autoridade digital premium que justificasse o valor da consultoria e automatizasse o primeiro atendimento.',
      problema: [
        'Mercado saturado com dificuldade de posicionamento premium.',
        'Tempo perdido com curiosos e atendimentos não qualificados.',
        'Ausência de autoridade digital para justificar valores premium.',
      ],
      solucao: [
        'Desenvolvimento de landing page de alta conversão para elevar percepção de profissionalismo.',
        'Implementação de Chatbot Inteligente para triagem automática de alunos.',
        'SEO Estratégico para captar alunos pesquisando ativamente na região.',
      ],
      resultados: ['+38% Taxa de Conversão', 'Atendimento Automático (Chatbot)', 'Posicionamento como Autoridade Premium'],
      ferramentas: 'React • Node • SEO Local • Google Search Console • Figma',
    },
  },
  {
    id: 'academia-corpo',
    name: 'Academia Corpo em Forma',
    serviceType: 'Redes Sociais • Branding • Automação',
    problema: 'Transformar academia em hub comunitário engajado e automatizar o atendimento.',
    resultado: '+40% alcance',
    image: '/images/academia-corpo.png',
    url: 'https://www.instagram.com/academia.corpo.emforma/',
    expandido: {
      contexto:
        'Transformar a academia em um hub comunitário e tornar o atendimento mais eficiente. O objetivo era aumentar o engajamento dos alunos atuais, atrair novas matrículas e automatizar as primeiras interações através de uma identidade visual forte, conteúdo estratégico e chatbot.',
      problema: [
        'Baixo engajamento e pouca retenção de alunos.',
        'Identidade visual fraca e sem diferencial nas redes.',
        'Dificuldade em atrair novos alunos organicamente.',
        'Atendimento manual e repetitivo para dúvidas e primeiros contatos.',
      ],
      solucao: [
        'Criação de identidade visual proprietária para posts e stories.',
        'Estratégia de conteúdo focada em retenção de alunos e atração de seguidores.',
        'Uso de templates escaláveis para manter constância sem perder qualidade.',
        'Desenvolvimento de chatbot para automatizar o atendimento inicial e direcionar os interessados.',
      ],
      resultados: ['Crescimento real da base de seguidores', '+40% Alcance nas publicações', 'Maior engajamento e retenção de alunos', 'Atendimento inicial automatizado com chatbot'],
      ferramentas: 'Instagram • Redes Sociais • Chatbot • Automação de Atendimento',
    },
  },
  {
    id: 'consultoria-digital',
    name: 'Portfólio Dev Sênior',
    serviceType: 'Site • Design Exclusivo',
    problema: 'Elevar valor/hora e diferenciar-se de programadores generalistas.',
    resultado: 'Posicionamento Premium',
    image: '/images/portfolio-dev.png',
    url: '#',
    techTags: ['React', 'Figma', 'UI Design', 'Personal Branding'],
    expandido: {
      contexto:
        'Desenvolvedor autônomo especialista, que precisava elevar seu valor/hora. O desafio era criar uma vitrine que não apenas listasse códigos, mas que embalasse seu conhecimento técnico em uma experiência visual premium, diferenciando-o de programadores generalistas.',
      problema: [
        'Dificuldade em cobrar valor premium sem identidade visual forte.',
        'Portfólio genérico que não transmitia senioridade.',
        'Perda de projetos de alto ticket para concorrentes com melhor apresentação.',
      ],
      solucao: [
        'Criação de Design System exclusivo no Figma, fugindo de templates genéricos para transmitir senioridade.',
        'Desenvolvimento de interface rápida e fluida (SPA) com React, garantindo que a própria navegação fosse prova de competência técnica.',
        'Arquitetura de Informação focada em destacar cases complexos e artigos técnicos, transformando visitantes em leads qualificados.',
      ],
      resultados: [
        'Posicionamento como Consultor Sênior',
        'Vitrine técnica de alta performance',
        'Aumento da percepção de valor pelo cliente final',
      ],
      ferramentas: 'React • Figma • UI Design • Personal Branding',
    },
  },
  {
    id: 'casa-vidro',
    name: 'Casa do Vidro Santa Luzia',
    serviceType: 'Presença Digital 360º',
    problema: 'Invisibilidade digital apesar de forte atuação física.',
    resultado: '+400% visualizações',
    image: '/images/casa-vidro.png',
    url: 'https://www.instagram.com/casadovidrosantaluzia/',
    expandido: {
      contexto:
        'Empresa tradicional com forte atuação física, mas invisível digitalmente. O desafio era criar um funil de vendas completo para captar clientes em todas as frentes: busca (Google) e desejo (Instagram).',
      problema: [
        'Zero presença digital apesar do reconhecimento local.',
        'Perda de vendas para concorrentes que aparecem no Google.',
        'Ausência de estratégia para captar clientes em diferentes estágios de compra.',
      ],
      solucao: [
        'Criação de site institucional moderno e gestão estratégica de Instagram.',
        'Otimização agressiva do Google Business para dominar pesquisas regionais.',
        'Integração dos canais para direcionar todo tráfego ao fechamento comercial.',
      ],
      resultados: ['+400% Visualizações no Perfil', 'Aumento expressivo de Faturamento', 'Liderança nas pesquisas locais do Google'],
      ferramentas: 'Google Business • Figma • React • SEO Local',
    },
  },
]
