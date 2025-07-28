import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import React from 'react';

interface StructuredDataProps {
  title?: string;
  description?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const StructuredData: React.FC<StructuredDataProps> = ({
  title = 'Tony Yam - Freelance Web Developer | Custom Websites for Creators',
  description = 'Freelance Web Developer helping solo creators and business owners build fast, functional websites without agency overhead or template limitations.',
  url = 'https://tonymumu.vercel.app',
}) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tony Yam',
    jobTitle: 'Freelance Web Developer',
    description: description,
    url: url,
    image: 'https://tonymumu.vercel.app/card.png',
    sameAs: [
      'https://twitter.com/mrtonyyam',
      'https://github.com/tonymumu',
      'https://linkedin.com/in/tonyyam',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'Malaysia',
    },
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Custom Website Development',
      'E-commerce Solutions',
      'Payment Integration',
      'Progressive Web Apps',
      'SEO Optimization',
      'Mobile-First Design',
    ],
    offers: {
      '@type': 'Service',
      name: 'Custom Website Development',
      description:
        'Professional web development services for solo creators and business owners',
      provider: {
        '@type': 'Person',
        name: 'Tony Yam',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Website Development',
              description: 'Fully custom websites built from scratch',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Solutions',
              description: 'Online stores with payment integration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Progressive Web Apps',
              description: 'Fast, app-like web experiences',
            },
          },
        ],
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Malay', 'Chinese'],
    },
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: 'https://tonymumu.vercel.app/card.png',
              width: 1200,
              height: 630,
              alt: 'Tony Yam - Freelance Web Developer Portfolio',
            },
          ],
          site_name: 'Tony Yam Portfolio',
        }}
        twitter={{
          handle: '@mrtonyyam',
          site: '@mrtonyyam',
          cardType: 'summary_large_image',
        }}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(baseStructuredData),
        }}
      />

      <SocialProfileJsonLd
        type='Person'
        name='Tony Yam'
        url='https://tonymumu.vercel.app'
        sameAs={[
          'https://twitter.com/mrtonyyam',
          'https://github.com/tonymumu',
          'https://linkedin.com/in/tonyyam',
        ]}
      />
    </>
  );
};

export default StructuredData;
