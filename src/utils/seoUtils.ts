import { SchoolConfig } from '../config/schoolConfig';

// Utility functions for SEO optimization

export const generatePageTitle = (
  pageTitle: string,
  schoolConfig: SchoolConfig,
  includeLocation: boolean = true
): string => {
  const baseTitle = `${pageTitle} | ${schoolConfig.name}`;
  
  if (includeLocation) {
    return `${baseTitle} - ${schoolConfig.address.city}, ${schoolConfig.address.country}`;
  }
  
  return baseTitle;
};

export const generateMetaDescription = (
  description: string,
  schoolConfig: SchoolConfig,
  includeContact: boolean = true
): string => {
  let metaDescription = description;
  
  if (includeContact) {
    metaDescription += ` Located in ${schoolConfig.address.city}, ${schoolConfig.address.country}. Contact us at ${schoolConfig.phone.primary} or ${schoolConfig.email.primary}.`;
  }
  
  return metaDescription.length > 160 
    ? description.substring(0, 157) + '...'
    : metaDescription;
};

export const generateLocalKeywords = (
  baseKeywords: string[],
  schoolConfig: SchoolConfig
): string[] => {
  const localVariations = [
    // Location-based keywords
    `${schoolConfig.name} ${schoolConfig.address.city}`,
    `school in ${schoolConfig.address.city}`,
    `education ${schoolConfig.address.city}`,
    `${schoolConfig.type} school ${schoolConfig.address.city}`,
    `best school ${schoolConfig.address.city}`,
    `private school ${schoolConfig.address.city}`,
    `international school ${schoolConfig.address.city}`,
    
    // Regional keywords
    `school ${schoolConfig.address.state}`,
    `education ${schoolConfig.address.state}`,
    `${schoolConfig.address.city} schools`,
    
    // Near me variations
    `school near me ${schoolConfig.address.city}`,
    `education near me ${schoolConfig.address.city}`,
    `${schoolConfig.type} school near me`,
    
    // Curriculum-specific
    ...schoolConfig.curriculum.map(curr => `${curr} ${schoolConfig.address.city}`),
    ...schoolConfig.curriculum.map(curr => `${curr} school ${schoolConfig.address.country}`),
  ];

  return [
    ...baseKeywords,
    ...schoolConfig.keywords,
    ...schoolConfig.localKeywords,
    ...localVariations
  ].filter((keyword, index, array) => array.indexOf(keyword) === index); // Remove duplicates
};

export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateLocalBusinessSchema = (schoolConfig: SchoolConfig) => {
  return {
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
      "name": schoolConfig.address.country
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": schoolConfig.address.coordinates.lat,
        "longitude": schoolConfig.address.coordinates.lng
      },
      "geoRadius": "50000"
    }
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateEventSchema = (events: Array<{
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
}>, schoolConfig: SchoolConfig) => {
  return events.map(event => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate || event.startDate,
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": schoolConfig.address.street,
        "addressLocality": schoolConfig.address.city,
        "addressRegion": schoolConfig.address.state,
        "addressCountry": schoolConfig.address.country
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": schoolConfig.name,
      "url": window.location.origin
    }
  }));
};

// Google Business Profile optimization utilities
export const generateGoogleBusinessActions = (schoolConfig: SchoolConfig) => {
  return {
    // Generate Google My Business URL
    getGoogleBusinessUrl: () => {
      const query = encodeURIComponent(`${schoolConfig.name} ${schoolConfig.address.city} ${schoolConfig.address.country}`);
      return `https://www.google.com/maps/search/${query}`;
    },
    
    // Generate directions URL
    getDirectionsUrl: () => {
      const { lat, lng } = schoolConfig.address.coordinates;
      return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    },
    
    // Generate review URL
    getReviewUrl: () => {
      const { lat, lng } = schoolConfig.address.coordinates;
      return `https://search.google.com/local/writereview?placeid=ChIJ${btoa(`${lat},${lng}`).substring(0, 20)}`;
    },
    
    // Generate call action
    getCallAction: () => `tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`,
    
    // Generate email action
    getEmailAction: () => `mailto:${schoolConfig.email.primary}`,
    
    // Generate WhatsApp action
    getWhatsAppAction: () => schoolConfig.phone.whatsapp 
      ? `https://wa.me/${schoolConfig.phone.whatsapp.replace(/\D/g, '')}`
      : null
  };
};

// NAP consistency checker
export const validateNAPConsistency = (schoolConfig: SchoolConfig) => {
  const issues: string[] = [];
  
  // Check if all required NAP fields are present
  if (!schoolConfig.name) issues.push('Business name is missing');
  if (!schoolConfig.address.street) issues.push('Street address is missing');
  if (!schoolConfig.address.city) issues.push('City is missing');
  if (!schoolConfig.phone.primary) issues.push('Primary phone number is missing');
  
  // Check phone number format consistency
  const phoneRegex = /^\+256\s?\d{3}\s?\d{3}\s?\d{3}$/;
  if (schoolConfig.phone.primary && !phoneRegex.test(schoolConfig.phone.primary.replace(/\s/g, ' '))) {
    issues.push('Primary phone number format should be +256 XXX XXX XXX');
  }
  
  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (schoolConfig.email.primary && !emailRegex.test(schoolConfig.email.primary)) {
    issues.push('Primary email format is invalid');
  }
  
  // Check coordinates
  if (!schoolConfig.address.coordinates.lat || !schoolConfig.address.coordinates.lng) {
    issues.push('GPS coordinates are missing');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

// Generate sitemap data
export const generateSitemapData = (schoolConfig: SchoolConfig) => {
  const baseUrl = window.location.origin;
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.9, changefreq: 'monthly' },
    { url: '/admissions', priority: 0.9, changefreq: 'weekly' },
    { url: '/academics', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/facilities', priority: 0.7, changefreq: 'monthly' },
    { url: '/news', priority: 0.6, changefreq: 'weekly' },
    { url: '/events', priority: 0.6, changefreq: 'weekly' },
  ];

  return pages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
    lastmod: new Date().toISOString()
  }));
};