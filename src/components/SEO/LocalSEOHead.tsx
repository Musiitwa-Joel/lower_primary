import React from 'react';
import { Helmet } from 'react-helmet';
import { SchoolConfig } from '../../config/schoolConfig';

interface LocalSEOHeadProps {
  schoolConfig: SchoolConfig;
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

const LocalSEOHead: React.FC<LocalSEOHeadProps> = ({
  schoolConfig,
  pageTitle,
  pageDescription,
  pageKeywords = [],
  canonicalUrl,
  ogImage
}) => {
  const fullTitle = pageTitle 
    ? `${pageTitle} | ${schoolConfig.name}`
    : `${schoolConfig.name} - ${schoolConfig.tagline}`;
  
  const description = pageDescription || schoolConfig.description;
  
  const keywords = [
    ...schoolConfig.keywords,
    ...schoolConfig.localKeywords,
    ...pageKeywords
  ].join(', ');

  const currentUrl = canonicalUrl || window.location.href;
  const imageUrl = ogImage || `${window.location.origin}${schoolConfig.logo}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={schoolConfig.name} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={schoolConfig.name} />
      <meta property="og:locale" content="en_UG" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schoolConfig.social.twitter && (
        <meta name="twitter:site" content={schoolConfig.social.twitter.replace('https://twitter.com/', '@')} />
      )}
      
      {/* Local Business Meta Tags */}
      <meta name="business:name" content={schoolConfig.name} />
      <meta name="business:type" content="Educational Institution" />
      <meta name="business:address" content={`${schoolConfig.address.street}, ${schoolConfig.address.city}, ${schoolConfig.address.country}`} />
      <meta name="business:phone" content={schoolConfig.phone.primary} />
      <meta name="business:email" content={schoolConfig.email.primary} />
      
      {/* Additional Local SEO Tags */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content={schoolConfig.address.city} />
      <meta name="geo.position" content={`${schoolConfig.address.coordinates.lat};${schoolConfig.address.coordinates.lng}`} />
      <meta name="ICBM" content={`${schoolConfig.address.coordinates.lat}, ${schoolConfig.address.coordinates.lng}`} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Favicon */}
      <link rel="icon" href={schoolConfig.favicon} />
      <link rel="apple-touch-icon" href={schoolConfig.logo} />
    </Helmet>
  );
};

export default LocalSEOHead;