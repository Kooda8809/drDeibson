export interface FAQItem {
  id: string;
  category: 'Tratamento' | 'Indicação' | 'Manutenção & Durabilidade' | 'Agendamento';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'o-que-sao-lentes-em-resina',
    category: 'Tratamento',
    question: 'O que são lentes em resina?',
    answer:
      'As lentes em resina composta são finas camadas de material odontológico estético de alta tecnologia aplicadas e esculpidas diretamente sobre a superfície dental. Elas permitem modificar forma, tamanho, proporção, textura e alinhamento visual dos dentes com alto grau de fidelidade à anatomia natural.',
  },
  {
    id: 'indicadas-qualquer-pessoa',
    category: 'Indicação',
    question: 'As lentes em resina são indicadas para qualquer pessoa?',
    answer:
      'Não. Cada sorriso possui particularidades anatômicas, oclusais e biológicas. A indicação depende exclusivamente de uma avaliação clínica presencial, em que são analisadas a saúde das gengivas, a posição dos dentes, a mordida e os hábitos funcionais. O tratamento é indicado somente quando seguro e benéfico para a saúde e estética bucal.',
  },
  {
    id: 'como-funciona-avaliacao',
    category: 'Tratamento',
    question: 'Como funciona a primeira avaliação?',
    answer:
      'A consulta inicial é um momento de escuta e diagnóstico minucioso. O Dr. Deibson analisa as proporções faciais, o arco do sorriso, registros fotográficos e a saúde bucal geral. A partir dessa conversa, são apresentadas as possibilidades reais de tratamento, esclarecendo etapas e alinhando expectativas.',
  },
  {
    id: 'como-e-feito-planejamento',
    category: 'Tratamento',
    question: 'Como é feito o planejamento estético?',
    answer:
      'O planejamento segue princípios de visagismo odontológico e proporção áurea facial. Em vez de padrões pré-fabricados, cada elemento é desenhado para harmonizar com os traços do seu rosto, tom de pele, curvatura dos lábios e sua personalidade.',
  },
  {
    id: 'resultado-natural',
    category: 'Tratamento',
    question: 'O resultado fica com aspecto natural ou artificial?',
    answer:
      'A premissa central do Dr. Deibson Fernandes é que o sorriso não deve parecer feito, mas sim autêntico. Utilizando técnicas de estratificação em resinas nano-híbridas (reproduzindo as nuances de esmalte, dentina e translucidez) aliadas a microtexturas de superfície, o resultado mimetiza perfeitamente a luminosidade de dentes naturais.',
  },
  {
    id: 'quanto-tempo-dura-procedimento',
    category: 'Tratamento',
    question: 'Quanto tempo dura o procedimento clínico?',
    answer:
      'Por ser uma técnica direta e altamente artesanal, a execução é realizada em poucas sessões clínicas dedicadas, após a etapa de diagnóstico e planejamento prévio. O tempo exato varia de acordo com o número de elementos e a complexidade do caso.',
  },
  {
    id: 'manutencao-e-durabilidade',
    category: 'Manutenção & Durabilidade',
    question: 'As lentes em resina necessitam de manutenção periódica?',
    answer:
      'Sim. Assim como os dentes naturais, as lentes em resina exigem boa higiene oral e consultas periódicas para revisão oclusal e polimento de rotina. Essas visitas mantêm o brilho acetinado, a integridade marginal e a longevidade do trabalho.',
  },
  {
    id: 'como-agendar-avaliacao',
    category: 'Agendamento',
    question: 'Como posso solicitar meu agendamento?',
    answer:
      'O agendamento pode ser solicitado diretamente pelo botão de WhatsApp oficial do consultório ou pelo formulário no site. A equipe entrará em contato para verificar disponibilidades de agenda e orientar sobre a consulta de avaliação inicial.',
  },
];
