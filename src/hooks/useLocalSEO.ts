import { useEffect } from "react";
import { SchoolConfig } from "../config/schoolConfig";
import { getCurrentTheme } from "../config/themeConfig";

interface UseLocalSEOProps {
  schoolConfig: SchoolConfig;
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
}

export const useLocalSEO = ({
  schoolConfig,
  pageTitle,
  pageDescription,
  pageKeywords = [],
}: UseLocalSEOProps) => {
  useEffect(() => {
    // Get theme configuration for consistent styling
    const themeConfig = getCurrentTheme(schoolConfig.themeId);

    // Update document title
    const fullTitle = pageTitle
      ? `${pageTitle} | ${schoolConfig.name}`
      : `${schoolConfig.name} - ${schoolConfig.tagline}`;

    document.title = fullTitle;

    // Update meta description
    const description = pageDescription || schoolConfig.description;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update keywords
    const keywords = [
      ...schoolConfig.keywords,
      ...schoolConfig.localKeywords,
      ...pageKeywords,
    ].join(", ");

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", window.location.href);
    }

    // Update theme color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", themeConfig.colors.primary[500]);
    }

    // Add local business structured data if not already present
    if (!document.querySelector("script[data-local-business]")) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-local-business", "true");
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: schoolConfig.name,
        description: schoolConfig.description,
        url: window.location.origin,
        telephone: schoolConfig.phone.primary,
        email: schoolConfig.email.primary,
        address: {
          "@type": "PostalAddress",
          streetAddress: schoolConfig.address.street,
          addressLocality: schoolConfig.address.city,
          addressRegion: schoolConfig.address.state,
          postalCode: schoolConfig.address.postalCode,
          addressCountry: schoolConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: schoolConfig.address.coordinates.lat,
          longitude: schoolConfig.address.coordinates.lng,
        },
        sameAs: Object.values(schoolConfig.social).filter(Boolean),
      });
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, [schoolConfig, pageTitle, pageDescription, pageKeywords]);

  // Return utility functions for local SEO
  return {
    generateLocalTitle: (title: string) =>
      `${title} | ${schoolConfig.name} - ${schoolConfig.address.city}, ${schoolConfig.address.country}`,
    generateLocalDescription: (description: string) =>
      `${description} Located in ${schoolConfig.address.city}, ${schoolConfig.address.country}. Contact us at ${schoolConfig.phone.primary}.`,
    generateLocalKeywords: (keywords: string[]) => [
      ...keywords,
      ...schoolConfig.localKeywords,
      `${schoolConfig.name} ${schoolConfig.address.city}`,
      `education ${schoolConfig.address.city}`,
      `school near me ${schoolConfig.address.city}`,
    ],
  };
};
