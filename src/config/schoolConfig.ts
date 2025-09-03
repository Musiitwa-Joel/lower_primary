// School Configuration System
// This file allows easy customization for different schools

export interface SchoolConfig {
  // Basic Information
  name: string;
  shortName: string;
  tagline: string;
  description: string;

  // Contact Information (NAP)
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };

  phone: {
    primary: string;
    secondary?: string;
    whatsapp?: string;
  };

  email: {
    primary: string;
    admissions: string;
    support: string;
  };

  // Social Media
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };

  // Business Information
  established: number;
  type: "primary" | "secondary" | "university" | "vocational";
  curriculum: string[];
  grades: string[];

  // SEO & Marketing
  keywords: string[];
  localKeywords: string[];

  // Operating Hours
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday?: string;
    sunday?: string;
  };

  // Branding
  logo: string;
  favicon: string;

  // Features
  features: string[];

  // Tuition (for calculator)
  tuition: {
    grades: {
      [key: string]: {
        day: number;
        boarding: number;
      };
    };
    additionalFees: {
      [key: string]: number;
    };
  };
}

// Default configuration - can be overridden for each school
export const defaultSchoolConfig: SchoolConfig = {
  name: "Tredumo International School",
  shortName: "TIS",
  tagline: "Excellence in Education, Innovation in Learning",
  description:
    "Leading international school in Uganda providing world-class education with modern technology integration.",

  address: {
    street: "Plot 123, Education Avenue",
    city: "Kampala",
    state: "Central Region",
    country: "Uganda",
    postalCode: "P.O. Box 12345",
    coordinates: {
      lat: 0.3476,
      lng: 32.5825,
    },
  },

  phone: {
    primary: "+256 414 123 456",
    secondary: "+256 700 123 456",
    whatsapp: "+256 700 123 456",
  },

  email: {
    primary: "info@tredumoschool.ug",
    admissions: "admissions@tredumoschool.ug",
    support: "support@tredumoschool.ug",
  },

  social: {
    facebook: "https://facebook.com/tredumoschool",
    twitter: "https://twitter.com/tredumoschool",
    instagram: "https://instagram.com/tredumoschool",
    youtube: "https://youtube.com/@tredumoschool",
  },

  established: 2015,
  type: "secondary",
  curriculum: ["Cambridge IGCSE", "Uganda National Curriculum"],
  grades: ["S1", "S2", "S3", "S4", "S5", "S6"],

  keywords: [
    "international school Uganda",
    "best school Kampala",
    "Cambridge curriculum Uganda",
    "boarding school Uganda",
    "quality education Uganda",
  ],

  localKeywords: [
    "school in Kampala",
    "education Kampala",
    "international school near me",
    "best schools Central Region Uganda",
    "Cambridge school Uganda",
  ],

  hours: {
    monday: "7:00 AM - 5:00 PM",
    tuesday: "7:00 AM - 5:00 PM",
    wednesday: "7:00 AM - 5:00 PM",
    thursday: "7:00 AM - 5:00 PM",
    friday: "7:00 AM - 5:00 PM",
    saturday: "8:00 AM - 2:00 PM",
  },

  logo: "https://cdn.worldvectorlogo.com/logos/tredumo.svg",
  favicon: "/favicon.ico",

  features: [
    "Modern Computer Labs",
    "Science Laboratories",
    "Sports Facilities",
    "Library & Resource Center",
    "Boarding Facilities",
    "Transport Services",
    "Counseling Services",
    "Extracurricular Activities",
  ],

  tuition: {
    grades: {
      "S1-S2": { day: 800000, boarding: 1200000 },
      "S3-S4": { day: 900000, boarding: 1300000 },
      "S5-S6": { day: 1000000, boarding: 1400000 },
    },
    additionalFees: {
      Registration: 50000,
      Uniform: 150000,
      Books: 200000,
      Transport: 300000,
      Meals: 400000,
    },
  },
};

// Function to get current school config (can be dynamic based on subdomain, etc.)
export const getCurrentSchoolConfig = (): SchoolConfig => {
  // In a real implementation, this could check subdomain, environment variables, etc.
  return defaultSchoolConfig;
};
