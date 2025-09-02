import React from 'react';
import { Helmet } from 'react-helmet';
import { SchoolConfig } from '../../config/schoolConfig';

interface StructuredDataProps {
  schoolConfig: SchoolConfig;
  pageType?: 'home' | 'about' | 'admissions' | 'contact' | 'academics';
  pageTitle?: string;
  pageDescription?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  schoolConfig,
  pageType = 'home',
  pageTitle,
  pageDescription
}) => {
  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": schoolConfig.name,
    "alternateName": schoolConfig.shortName,
    "description": schoolConfig.description,
    "url": window.location.origin,
    "logo": `${window.location.origin}${schoolConfig.logo}`,
    "image": `${window.location.origin}${schoolConfig.logo}`,
    "telephone": schoolConfig.phone.primary,
    "email": schoolConfig.email.primary,
    "foundingDate": schoolConfig.established.toString(),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolConfig.address.street,
      "addressLocality": schoolConfig.address.city,
      "addressRegion": schoolConfig.address.state,
      "postalCode": schoolConfig.address.postalCode,
      "addressCountry": schoolConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": schoolConfig.address.coordinates.lat,
      "longitude": schoolConfig.address.coordinates.lng
    },
    "openingHoursSpecification": Object.entries(schoolConfig.hours)
      .filter(([_, hours]) => hours)
      .map(([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": `https://schema.org/${day.charAt(0).toUpperCase() + day.slice(1)}`,
        "opens": hours?.split(' - ')[0] || '',
        "closes": hours?.split(' - ')[1] || ''
      })),
    "sameAs": Object.values(schoolConfig.social).filter(Boolean),
    "priceRange": "$$",
    "currenciesAccepted": "UGX, USD",
    "paymentAccepted": "Cash, Mobile Money, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": schoolConfig.address.coordinates.lat,
        "longitude": schoolConfig.address.coordinates.lng
      },
      "geoRadius": "50000" // 50km radius
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": schoolConfig.name,
    "url": window.location.origin,
    "logo": `${window.location.origin}${schoolConfig.logo}`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": schoolConfig.phone.primary,
        "contactType": "customer service",
        "areaServed": "UG",
        "availableLanguage": ["English", "Luganda"]
      },
      {
        "@type": "ContactPoint",
        "telephone": schoolConfig.phone.secondary || schoolConfig.phone.primary,
        "contactType": "admissions",
        "areaServed": "UG",
        "availableLanguage": ["English", "Luganda"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolConfig.address.street,
      "addressLocality": schoolConfig.address.city,
      "addressRegion": schoolConfig.address.state,
      "postalCode": schoolConfig.address.postalCode,
      "addressCountry": schoolConfig.address.country
    },
    "sameAs": Object.values(schoolConfig.social).filter(Boolean)
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": schoolConfig.name,
    "url": window.location.origin,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${window.location.origin}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema (if not home page)
  const breadcrumbSchema = pageType !== 'home' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle || pageType,
        "item": window.location.href
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content={schoolConfig.address.city} />
      <meta name="geo.position" content={`${schoolConfig.address.coordinates.lat};${schoolConfig.address.coordinates.lng}`} />
      <meta name="ICBM" content={`${schoolConfig.address.coordinates.lat}, ${schoolConfig.address.coordinates.lng}`} />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content={schoolConfig.address.street} />
      <meta name="business:contact_data:locality" content={schoolConfig.address.city} />
      <meta name="business:contact_data:region" content={schoolConfig.address.state} />
      <meta name="business:contact_data:postal_code" content={schoolConfig.address.postalCode} />
      <meta name="business:contact_data:country_name" content={schoolConfig.address.country} />
      <meta name="business:contact_data:phone_number" content={schoolConfig.phone.primary} />
      <meta name="business:contact_data:email" content={schoolConfig.email.primary} />
    </Helmet>
  );
};

export default StructuredData;