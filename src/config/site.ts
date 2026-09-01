export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  profession: string;
  tagline: string;
  bioConcept: string;
  credentials: {
    sp: string;
    go: string;
    display: string;
  };
  metrics: {
    veneersCount: string;
    veneersLabel: string;
    veneersSubtext: string;
  };
  contact: {
    whatsappNumber: string; // international digits only for wa.me
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
    instagramHandle: string;
    instagramUrl: string;
    // Prepared slots for future additions without code modification
    address?: string;
    cityState?: string;
    email?: string;
  };
  ethics: {
    cfoDisclaimer: string;
    individualAssessmentNotice: string;
    resolution: string;
  };
  seo: {
    baseUrl: string;
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Dr. Deibson Fernandes',
  shortName: 'Deibson Fernandes',
  title: 'Dr. Deibson Fernandes | Lentes em Resina & Odontologia Cosmética',
  profession: 'Dentista Cosmético & Especialista em Lentes',
  tagline: 'Design de sorrisos exclusivos e personalizados',
  bioConcept: 'Esculpindo arte em sorrisos',
  credentials: {
    sp: 'CRO/SP 168.482',
    go: 'CRO/GO 24.676',
    display: 'CRO/SP 168.482 | CRO/GO 24.676',
  },
  metrics: {
    veneersCount: '+3.000',
    veneersLabel: 'LENTES REALIZADAS',
    veneersSubtext: 'Experiência, precisão milimétrica e personalização autoral aplicadas a cada sorriso.',
  },
  contact: {
    whatsappNumber: '5511992295622',
    whatsappDisplay: '+55 (11) 99229-5622',
    whatsappDefaultMessage: 'Olá, Dr. Deibson! Gostaria de agendar uma avaliação para lentes em resina.',
    instagramHandle: '@drdeibsonfernandes',
    instagramUrl: 'https://www.instagram.com/drdeibsonfernandes/',
    address: undefined, // Pronto para receber futuramente
    cityState: 'São Paulo • Goiânia',
    email: undefined,
  },
  ethics: {
    cfoDisclaimer:
      'Em conformidade com a Resolução CFO-196/2019 e Código de Ética Odontológica, ressaltamos que os resultados apresentados são individuais e dependem de criteriosa avaliação clínica presencial. Imagens autorizadas para fins de esclarecimento técnico.',
    individualAssessmentNotice:
      'A indicação de lentes em resina ou qualquer intervenção estética exige planejamento personalizado após diagnóstico clínico detalhado.',
    resolution: 'Resolução CFO-196/2019',
  },
  seo: {
    baseUrl: 'https://drdeibsonfernandes.com.br',
    defaultTitle: 'Dr. Deibson Fernandes | Lentes em Resina',
    titleTemplate: '%s | Dr. Deibson Fernandes',
    defaultDescription:
      'Design de sorrisos personalizados através de uma abordagem precisa, artesanal e orientada à harmonia facial. Especialista em Lentes em Resina. CRO/SP 168.482 | CRO/GO 24.676.',
    keywords: [
      'Dr Deibson Fernandes',
      'Lentes em Resina',
      'Facetas em Resina',
      'Dentista Cosmético',
      'Design de Sorrisos',
      'Odontologia Estética de Alto Padrão',
      'CRO SP 168482',
      'CRO GO 24676',
    ],
    ogImage: '/og-cover.png',
  },
};

/**
 * Helper to build an official WhatsApp link with custom encoded text
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.contact.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
