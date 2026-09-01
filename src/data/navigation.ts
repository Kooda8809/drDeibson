export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Filosofia', href: '/filosofia' },
  { label: 'Lentes em Resina', href: '/lentes-em-resina' },
  { label: 'Casos', href: '/casos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Dúvidas', href: '/duvidas' },
  { label: 'Contato', href: '/contato' },
];

export const footerLinks = {
  navigation: [
    { label: 'Início', href: '/' },
    { label: 'Filosofia de Trabalho', href: '/filosofia' },
    { label: 'Lentes em Resina', href: '/lentes-em-resina' },
    { label: 'Galeria de Casos', href: '/casos' },
    { label: 'Sobre o Dr. Deibson', href: '/sobre' },
    { label: 'Perguntas Frequentes', href: '/duvidas' },
    { label: 'Agendamento / Contato', href: '/contato' },
  ],
  legal: [
    { label: 'Política de Privacidade (LGPD)', href: '/politica-de-privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Normas Éticas CFO', href: 'https://website.cfo.org.br/resolucao-cfo-196-2019/', isExternal: true },
  ],
};
