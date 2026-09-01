export interface FAQItem {
  id: string;
  category: 'Naturalidade & Estética' | 'Indicação & Preservação' | 'Durabilidade & Cuidados';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'resultado-natural',
    category: 'Naturalidade & Estética',
    question: 'O resultado fica com aspecto natural ou artificial?',
    answer:
      'A premissa central do Dr. Deibson Fernandes é que o sorriso não deve parecer feito, mas autêntico. Utilizando técnicas avançadas de estratificação em resinas nano-híbridas (reproduzindo nuances reais de esmalte, dentina e translucidez) aliadas a microtexturas de superfície, o resultado mimetiza com máxima fidelidade o brilho e a luminosidade dos dentes naturais.',
  },
  {
    id: 'indicacao-e-desgaste',
    category: 'Indicação & Preservação',
    question: 'As lentes em resina desgastam os dentes e são indicadas para qualquer pessoa?',
    answer:
      'O principal benefício das lentes em resina direta é a conservação biológica: na grande maioria dos casos, o procedimento não exige desgastes invasivos da estrutura dental saudável. A indicação exata é sempre confirmada em uma consulta de avaliação individualizada, respeitando a oclusão, a saúde gengival e a harmonia facial de cada paciente.',
  },
  {
    id: 'durabilidade-e-manutencao',
    category: 'Durabilidade & Cuidados',
    question: 'Quanto tempo duram as lentes em resina e como funciona a manutenção?',
    answer:
      'Com uma boa rotina de higiene bucal e visitas periódicas de acompanhamento (a cada 6 a 12 meses para repolimento de rotina e controle oclusal), as lentes preservam sua integridade e brilho acetinado por muitos anos. Além disso, a resina oferece a flexibilidade de manutenções pontuais e reparos simples, sem necessidade de trocar todo o trabalho.',
  },
];

