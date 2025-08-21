import dynamic from 'next/dynamic';
import Script from 'next/script';

import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';

// Dynamic imports for performance optimization
const Services = dynamic(
  () =>
    import('@/components/sections/services').then((mod) => ({
      default: mod.Services,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
  }
);

const About = dynamic(
  () =>
    import('@/components/sections/about').then((mod) => ({
      default: mod.About,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
  }
);

const Contact = dynamic(
  () =>
    import('@/components/sections/contact').then((mod) => ({
      default: mod.Contact,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
  }
);

const Footer = dynamic(
  () =>
    import('@/components/layout/footer').then((mod) => ({
      default: mod.Footer,
    })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted/20" />,
  }
);

// JSON-LD structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumosyn Studios',
  description:
    'Premier web development and AI solutions company in the Philippines',
  url: 'https://lumosyn.ph',
  logo: 'https://lumosyn.ph/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    areaServed: 'PH',
    availableLanguage: ['English', 'Filipino'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Philippines',
  },
  sameAs: [
    'https://facebook.com/lumosynstudios',
    'https://twitter.com/lumosynstudios',
    'https://linkedin.com/company/lumosynstudios',
  ],
  services: [
    {
      '@type': 'Service',
      name: 'Web Development',
      description: 'Modern responsive websites with React and Next.js',
    },
    {
      '@type': 'Service',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile apps with React Native',
    },
    {
      '@type': 'Service',
      name: 'AI Business Automation',
      description: 'Intelligent automation solutions for business processes',
    },
    {
      '@type': 'Service',
      name: 'UI/UX Design',
      description: 'Beautiful, conversion-focused user interface design',
    },
    {
      '@type': 'Service',
      name: 'Chatbot Development',
      description: 'AI-powered chatbots and LLM integrations',
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Preload critical resources */}
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Preload critical fonts
            if ('fonts' in document) {
              document.fonts.load('400 16px Geist');
              document.fonts.load('600 16px Geist');
            }
          `,
        }}
      />

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
