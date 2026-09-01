export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  technicalHighlights: string[];
  beforeImage: string;
  afterImage: string;
  isPlaceholder?: boolean;
  cfoTag: string;
}

export const casesData: CaseStudy[] = [
  {
    id: 'caso-1',
    title: 'Harmonização de Proporções & Fechamento de Diastemas',
    category: 'Lentes em Resina Composta',
    description:
      'Planejamento orientado à recuperação do arco do sorriso e reanatomização dos incisivos centrais e laterais com estratificação nano-híbrida de esmalte e dentina.',
    technicalHighlights: [
      'Estratificação anatômica em resina nano-híbrida',
      'Preservação máxima do esmalte dentário original',
      'Texturização e microrelevo para reflexão óptica natural',
    ],
    beforeImage: '/assets/cases/case-1-before.avif',
    afterImage: '/assets/cases/case-1-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019. Casos clínicos reais e individualizados.',
  },
  {
    id: 'caso-2',
    title: 'Reanatomização Dentofacial & Correção de Margem',
    category: 'Design de Sorriso Superior',
    description:
      'Restabelecimento do alinhamento estético e curvatura harmônica dos dentes anteriores em relação ao contorno do lábio inferior com acabamento vítreo.',
    technicalHighlights: [
      'Equilíbrio entre proporção largura-comprimento (proporção áurea)',
      'Camadas de efeito opalescente na borda incisal',
      'Polimento de alto brilho e ajuste oclusal refinado',
    ],
    beforeImage: '/assets/cases/case-2-before.avif',
    afterImage: '/assets/cases/case-2-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-3',
    title: 'Reanatomização de Bordo Incisal & Textura Natural',
    category: 'Lentes em Resina Direta',
    description:
      'Transformação sutil com foco em luminosidade, bordas incisais translúcidas e individualidade anatômica das cúspides e vertentes.',
    technicalHighlights: [
      'Mimetismo óptico fiel à dentição natural',
      'Transição invisível entre estrutura dental e resina',
      'Personalização conforme dinamismo da mímica facial',
    ],
    beforeImage: '/assets/cases/case-3-before.avif',
    afterImage: '/assets/cases/case-3-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-4',
    title: 'Alinhamento Óptico & Correção de Forma e Cor',
    category: 'Transformação Estética do Sorriso',
    description:
      'Uniformização da matiz cromática e redesenho anatômico dos dentes anterossuperiores, devolvendo volume, simetria e presença ao sorriso.',
    technicalHighlights: [
      'Correção sutil de assimetrias anatômicas',
      'Estratificação de dentina e esmalte de alta resistência',
      'Preservação integral da vitalidade e estrutura dental',
    ],
    beforeImage: '/assets/cases/case-4-before.avif',
    afterImage: '/assets/cases/case-4-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-5',
    title: 'Escultura Anatômica & Devolução de Volume Dental',
    category: 'Harmonização do Arco Dental',
    description:
      'Reconstrução da morfologia dental anterior com resinas de alta densidade óptica, corrigindo desgastes funcionais e restabelecendo o suporte labial.',
    technicalHighlights: [
      'Restabelecimento da guia anterior e harmonia oclusal',
      'Camadas translúcidas com alta reflexão de luz natural',
      'Texturização superficial individualizada à mão livre',
    ],
    beforeImage: '/assets/cases/case-5-before.avif',
    afterImage: '/assets/cases/case-5-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-6',
    title: 'Recuperação Estético-Funcional de Incisivos',
    category: 'Lentes em Resina Nano-Híbrida',
    description:
      'Planejamento biomimético com foco na naturalidade das cúspides e bordas incisais, conferindo um aspecto jovem, limpo e sofisticado.',
    technicalHighlights: [
      'Escultura artesanal direta sem desgastes desnecessários',
      'Refinamento oclusal e funcional de alta precisão',
      'Estabilidade cromática prolongada com selamento superficial',
    ],
    beforeImage: '/assets/cases/case-6-before.avif',
    afterImage: '/assets/cases/case-6-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-7',
    title: 'Design de Sorriso & Otimização do Corredor Bucal',
    category: 'Estética do Sorriso',
    description:
      'Ampliação da amplitude do sorriso e preenchimento harmônico dos corredores bucais, promovendo equilíbrio facial e luminosidade marcante.',
    technicalHighlights: [
      'Melhoria da proporção dentofacial e amplitude estética',
      'Pigmentos de alta fidelidade e brilho perolado',
      'Procedimento minimamente invasivo de alta durabilidade',
    ],
    beforeImage: '/assets/cases/case-7-before.avif',
    afterImage: '/assets/cases/case-7-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-8',
    title: 'Reanatomização de Textura & Polimento Vítreo',
    category: 'Lentes em Resina Composta',
    description:
      'Aplicação de microestrias e áreas de reflexão de luz para eliminar qualquer aspecto artificial, recriando as nuances de um esmalte natural.',
    technicalHighlights: [
      'Textura de reflexão difusa de luz anti-reflexo plano',
      'Bordas suaves com transição anatômica orgânica',
      'Alto polimento sequencial com pastas diamantadas',
    ],
    beforeImage: '/assets/cases/case-8-before.avif',
    afterImage: '/assets/cases/case-8-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
  {
    id: 'caso-9',
    title: 'Transformação Integral do Sorriso Anterior',
    category: 'Harmonização de Alta Precisão',
    description:
      'Reestruturação completa do setor anterior com técnica de escultura direta, entregando simetria, proporção ideal e brilho incomparável.',
    technicalHighlights: [
      'Escultura anatômica direta dente a dente',
      'Acabamento microscópico das margens cervicais',
      'Integração estética absoluta com os traços faciais do paciente',
    ],
    beforeImage: '/assets/cases/case-9-before.avif',
    afterImage: '/assets/cases/case-9-after.avif',
    isPlaceholder: false,
    cfoTag: 'Divulgação em conformidade com a Resolução CFO-196/2019.',
  },
];
