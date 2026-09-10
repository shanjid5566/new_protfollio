import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { defaultSEO, getJsonLd } from '../../data/seoConfig';
import { siteConfig } from '../../data/portfolioData';
import { useDynamicSEO } from '../../hooks/useDynamicSEO';

export default function SEO() {
  const [seo, setSeo] = useState(defaultSEO);
  const [activeSection, setActiveSection] = useState('hero');

  const handleSectionChange = useCallback((sectionId, sectionSeo) => {
    setActiveSection(sectionId);
    setSeo((prev) => ({
      ...prev,
      title: sectionSeo.title,
      description: sectionSeo.description,
      keywords: sectionSeo.keywords,
    }));
  }, []);

  useDynamicSEO(handleSectionChange);

  const jsonLd = getJsonLd();
  const canonical = `${siteConfig.siteUrl}/`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={siteConfig.name} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={defaultSEO.ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={defaultSEO.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteConfig.name} — ${siteConfig.title}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={`${siteConfig.shortName} Portfolio`} />

      <meta name="twitter:card" content={defaultSEO.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={defaultSEO.ogImage} />

      <meta name="geo.region" content="BD-13" />
      <meta name="geo.placename" content="Dhaka" />

      <meta name="active-section" content={activeSection} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
