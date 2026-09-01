export interface PhilosophyPillar {
  number: string;
  title: string;
  description: string;
  quote?: string;
}

export const philosophyPillars: PhilosophyPillar[] = [
  {
    number: 'I',
    title: 'Naturalidade & Autenticidade',
    description:
      'O sorriso não deve chamar atenção pelo excesso, mas sim pela harmonia. Texturas orgânicas, nuances de cor e bordas levemente translúcidas constroem uma estética viva e elegante.',
    quote: 'Seu sorriso não precisa parecer feito. Precisa parecer seu.',
  },
  {
    number: 'II',
    title: 'Design Visagista & Proporção',
    description:
      'Cada rosto possui geometria e dinâmica únicas. O design do sorriso considera a linha dos lábios, o arco do sorriso, a cor da pele e a personalidade do paciente.',
  },
  {
    number: 'III',
    title: 'Preservação da Estrutura Biológica',
    description:
      'A odontologia estética contemporânea é minimamente invasiva. A técnica de lentes em resina direta preserva ao máximo o esmalte natural e a integridade dental.',
  },
  {
    number: 'IV',
    title: 'Artesanato de Alta Precisão',
    description:
      'Cada faceta é esculpida meticulosamente à mão livre, camada por camada, com espátulas de precisão e materiais nano-híbridos de padrão internacional.',
    quote: 'Esculpir sorrisos como uma obra de arte.',
  },
];
