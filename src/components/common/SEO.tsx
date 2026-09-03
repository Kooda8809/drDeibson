import React, { useEffect } from 'react';
import { siteConfig } from '../../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  schemaType?: 'Dentist' | 'MedicalProcedure' | 'AboutPage' | 'ContactPage' | 'WebSite';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.seo.defaultDescription,
  canonicalPath = '',
  ogImage = siteConfig.seo.ogImage,
}) => {
  const fullTitle = title
    ? siteConfig.seo.titleTemplate.replace('%s', title)
    : siteConfig.seo.defaultTitle;

  const currentUrl = `${siteConfig.seo.baseUrl}${canonicalPath}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    updateMeta('description', description);
    updateMeta('og:title', fullTitle);
    updateMeta('og:description', description);
    updateMeta('og:url', currentUrl);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);

    const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.seo.baseUrl}${ogImage}`;
    updateMeta('og:image', fullOgImageUrl);
    updateMeta('twitter:image', fullOgImageUrl);

    // Update or create canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Schema.org Structured Data
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: siteConfig.name,
      alternateName: 'Dr. Deibson Fernandes Odontologia',
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.seo.baseUrl,
      telephone: siteConfig.contact.whatsappDisplay,
      medicalSpecialty: 'Dentistry',
      priceRange: '$$$$',
      identifier: [
        {
          '@type': 'PropertyValue',
          name: 'CRO/SP',
          value: '168.482',
        },
        {
          '@type': 'PropertyValue',
          name: 'CRO/GO',
          value: '24.676',
        },
      ],
      sameAs: [siteConfig.contact.instagramUrl],
    };

    let scriptTag = document.getElementById('structured-data-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLdData);
  }, [fullTitle, description, currentUrl, ogImage]);

  return null;
};
