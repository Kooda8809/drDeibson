export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tag: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Avaliação Individual',
    subtitle: 'Escuta atenta e diagnóstico preciso',
    description:
      'Compreensão aprofundada das características faciais, dinâmica do sorriso, saúde bucal e expectativas estéticas individuais.',
    details: [
      'Análise fotográfica de alta definição e registro oclusal',
      'Compreensão do desejo e estilo de vida do paciente',
      'Diagnóstico da saúde periodontal e estrutura dental',
    ],
    tag: 'Diagnóstico',
  },
  {
    number: '02',
    title: 'Planejamento Estético',
    subtitle: 'Harmonia facial e proporções áureas',
    description:
      'Estudo minucioso das proporções entre largura, altura, curvatura dos lábios e tom de pele para definir a diretriz visual.',
    details: [
      'Mapeamento da proporção dentofacial',
      'Definição da translucidez, opalescência e textura',
      'Simulação e previsibilidade do resultado planejado',
    ],
    tag: 'Arquitetura',
  },
  {
    number: '03',
    title: 'Design Autoral',
    subtitle: 'Escultura personalizada',
    description:
      'Criação de uma proposta exclusiva para cada elemento dentário, respeitando a anatomia natural e o contorno gengival.',
    details: [
      'Seleção de resinas compostas nano-híbridas de alta performance',
      'Estratificação cromática personalizada em camadas',
      'Alinhamento com o arco do sorriso e linha média',
    ],
    tag: 'Escultura',
  },
  {
    number: '04',
    title: 'Execução Precisa',
    subtitle: 'Técnica artesanal e domínio clínico',
    description:
      'Aplicação da técnica planejada com isolamento e precisão micrométrica, preservando ao máximo a estrutura dental original.',
    details: [
      'Aplicação criteriosa com foco na integridade do esmalte',
      'Construção anatômica dente a dente com espátulas especiais',
      'Polimerização controlada para máxima resistência e estabilidade',
    ],
    tag: 'Precisão',
  },
  {
    number: '05',
    title: 'Acabamento & Texturização',
    subtitle: 'O toque final de arte e polimento',
    description:
      'Refinamento minucioso dos detalhes, microtexturas de esmalte e polimento de alto brilho para conferir naturalidade absoluta.',
    details: [
      'Texturização superficial para reflexão óptica natural de luz',
      'Ajuste oclusal e funcional milimétrico',
      'Protocolo de polimento multi-etapas com brilho duradouro',
    ],
    tag: 'Naturalidade',
  },
];
