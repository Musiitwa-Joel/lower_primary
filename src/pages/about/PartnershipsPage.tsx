import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Handshake,
  Globe,
  Building,
  Users,
  BookOpen,
  Zap,
  Heart,
  Target,
  ArrowRight,
  ExternalLink,
  Calendar,
  Award,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Partner {
  id: string;
  name: string;
  type: "university" | "corporate" | "ngo" | "government" | "international";
  description: string;
  partnership_since: string;
  logo: string;
  website: string;
  collaboration_areas: string[];
  impact: string;
  featured_programs: string[];
  contact_person?: string;
  location: string;
}

interface PartnershipsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const PartnershipsPage: React.FC<PartnershipsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const partners: Partner[] = [
    {
      id: "1",
      name: "Makerere University",
      type: "university",
      description: "Strategic partnership with Uganda's premier university for academic collaboration and student pathway programs.",
      partnership_since: "2018-03-15",
      logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      website: "https://www.mak.ac.ug",
      collaboration_areas: ["Student Pathways", "Teacher Training", "Research Projects", "Scholarship Programs"],
      impact: "150+ students successfully transitioned to Makerere University",
      featured_programs: ["Pre-University Preparation", "Research Mentorship", "Academic Excellence Awards"],
      contact_person: "Prof. Sarah Nakato",
      location: "Kampala, Uganda"
    },
    {
      id: "2",
      name: "Microsoft Education",
      type: "corporate",
      description: "Technology partnership providing cutting-edge educational tools and digital learning platforms for enhanced student experiences.",
      partnership_since: "2020-09-10",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      website: "https://education.microsoft.com",
      collaboration_areas: ["Digital Learning Tools", "Teacher Training", "Student Certification", "Technology Infrastructure"],
      impact: "100% of students have access to Microsoft Office 365 and digital learning tools",
      featured_programs: ["Microsoft Certified Educator Program", "Student Technology Certification", "Digital Literacy Initiative"],
      location: "Global Partnership"
    },
    {
      id: "3",
      name: "UNICEF Uganda",
      type: "international",
      description: "Collaboration focused on child welfare, education access, and community development initiatives across Uganda.",
      partnership_since: "2019-06-20",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      website: "https://www.unicef.org/uganda",
      collaboration_areas: ["Child Protection", "Education Access", "Health Programs", "Community Outreach"],
      impact: "50+ vulnerable children supported through scholarship programs",
      featured_programs: ["Back-to-School Initiative", "Child Protection Awareness", "Health and Nutrition Program"],
      contact_person: "Dr. Grace Namuli",
      location: "Kampala, Uganda"
    },
    {
      id: "4",
      name: "Uganda Ministry of Education",
      type: "government",
      description: "Official partnership with the Ministry of Education and Sports for curriculum development and educational policy implementation.",
      partnership_since: "2015-01-10",
      logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
      website: "https://www.education.go.ug",
      collaboration_areas: ["Curriculum Development", "Teacher Training", "Quality Assurance", "Policy Implementation"],
      impact: "Pilot school for new curriculum initiatives and educational innovations",
      featured_programs: ["Curriculum Pilot Program", "Teacher Professional Development", "Quality Assurance Framework"],
      location: "Kampala, Uganda"
    },
    {
      id: "5",
      name: "Stanbic Bank Uganda",
      type: "corporate",
      description: "Financial literacy partnership providing banking education and scholarship opportunities for students and families.",
      partnership_since: "2021-02-14",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
      website: "https://www.stanbicbank.co.ug",
      collaboration_areas: ["Financial Literacy", "Scholarship Programs", "Career Guidance", "Entrepreneurship Training"],
      impact: "200+ students trained in financial literacy and entrepreneurship skills",
      featured_programs: ["Young Entrepreneurs Program", "Financial Literacy Workshops", "Banking Scholarships"],
      contact_person: "Mr. David Mukasa",
      location: "Kampala, Uganda"
    },
    {
      id: "6",
      name: "World Vision Uganda",
      type: "ngo",
      description: "Community development partnership focusing on child welfare, education support, and family empowerment programs.",
      partnership_since: "2017-11-05",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      website: "https://www.worldvision.org.ug",
      collaboration_areas: ["Child Sponsorship", "Community Development", "Health Programs", "Family Support"],
      impact: "75+ children supported through sponsorship and development programs",
      featured_programs: ["Child Sponsorship Program", "Community Health Initiative", "Family Empowerment Project"],
      location: "Entebbe, Uganda"
    }
  ];

  const partnerTypes = [
    { id: "all", name: "All Partners", icon: <Handshake className="h-5 w-5" />, color: "gray" },
    { id: "university", name: "Universities", icon: <BookOpen className="h-5 w-5" />, color: "blue" },
    { id: "corporate", name: "Corporate", icon: <Building className="h-5 w-5" />, color: "green" },
    { id: "international", name: "International", icon: <Globe className="h-5 w-5" />, color: "purple" },
    { id: "government", name: "Government", icon: <Award className="h-5 w-5" />, color: "orange" },
    { id: "ngo", name: "NGOs", icon: <Heart className="h-5 w-5" />, color: "pink" }
  ];

  const filteredPartners = selectedType === "all" 
    ? partners 
    : partners.filter(partner => partner.type === selectedType);

  const getTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      university: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      corporate: "bg-green-500/20 text-green-500 border-green-500/30",
      international: "bg-purple-500/20 text-purple-500 border-purple-500/30",
      government: "bg-orange-500/20 text-orange-500 border-orange-500/30",
      ngo: "bg-pink-500/20 text-pink-500 border-pink-500/30"
    };
    return colorMap[type] || "bg-gray-500/20 text-gray-500 border-gray-500/30";
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Partnerships & Collaborations | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore ${schoolConfig.name}'s strategic partnerships with universities, corporations, and international organizations. Collaborative programs enhancing education quality.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} partnerships, university collaborations, corporate partnerships, international programs, educational alliances`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Network Visualization */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className={theme === "dark" ? "text-white" : "text-black"} />
                <line x1="50" y1="50" x2="100" y2="25" stroke="currentColor" strokeWidth="1" className={theme === "dark" ? "text-white" : "text-black"} />
                <line x1="50" y1="50" x2="100" y2="75" stroke="currentColor" strokeWidth="1" className={theme === "dark" ? "text-white" : "text-black"} />
                <line x1="50" y1="50" x2="0" y2="25" stroke="currentColor" strokeWidth="1" className={theme === "dark" ? "text-white" : "text-black"} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-br from-black/95 via-black/90 to-black/95" : "bg-gradient-to-br from-white/95 via-white/90 to-white/95"}`} />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                {/* Central Hub */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Handshake className="h-12 w-12 text-white" />
                </div>
                
                {/* Orbiting Partner Icons */}
                {[
                  { icon: <BookOpen className="h-6 w-6" />, angle: 0, color: "bg-blue-500" },
                  { icon: <Building className="h-6 w-6" />, angle: 72, color: "bg-green-500" },
                  { icon: <Globe className="h-6 w-6" />, angle: 144, color: "bg-purple-500" },
                  { icon: <Award className="h-6 w-6" />, angle: 216, color: "bg-orange-500" },
                  { icon: <Heart className="h-6 w-6" />, angle: 288, color: "bg-pink-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`absolute w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white`}
                    style={{
                      transform: `rotate(${item.angle}deg) translateX(60px) rotate(-${item.angle}deg)`,
                      top: "50%",
                      left: "50%",
                      marginTop: "-24px",
                      marginLeft: "-24px"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </div>

            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Strategic Alliances
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Partnerships &<br />
              <span className="text-primary-500">Collaborations</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Building bridges with leading institutions, organizations, and companies to create exceptional opportunities for our students and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {partnerTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
                  selectedType === type.id
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 text-white border border-white/20"
                    : "bg-black/5 hover:bg-black/10 text-black border border-black/20"
                }`}
              >
                <div className={`p-2 rounded-lg ${selectedType === type.id ? "bg-white/20" : theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {type.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{type.name}</div>
                  <div className={`text-sm ${selectedType === type.id ? "text-white/80" : theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                    {type.id === "all" ? partners.length : partners.filter(p => p.type === type.id).length} partners
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid with Masonry Layout */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`break-inside-avoid mb-8 group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 hover:border-white/40"
                    : "bg-gradient-to-br from-black/10 via-black/5 to-transparent border border-black/20 hover:border-black/40"
                } backdrop-blur-xl`}
                onClick={() => setSelectedPartner(partner)}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(partner.type)}`}>
                        {partner.type}
                      </span>
                      <div className={`text-xs mt-2 ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Since {new Date(partner.partnership_since).getFullYear()}
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-3 group-hover:text-primary-500 transition-colors`}>
                    {partner.name}
                  </h3>
                  
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 font-medium`}>
                    📍 {partner.location}
                  </p>

                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6 leading-relaxed`}>
                    {partner.description}
                  </p>

                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      Collaboration Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.collaboration_areas.slice(0, 3).map((area, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-xs font-medium"
                        >
                          {area}
                        </span>
                      ))}
                      {partner.collaboration_areas.length > 3 && (
                        <span className="px-3 py-1 bg-gray-500/20 text-gray-500 rounded-full text-xs font-medium">
                          +{partner.collaboration_areas.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"} mb-6`}>
                    <h5 className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                      Partnership Impact:
                    </h5>
                    <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                      {partner.impact}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      Learn More
                    </span>
                    <ExternalLink className="h-4 w-4 text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Detail Modal */}
      {selectedPartner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-5xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-3xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="w-20 h-20 rounded-2xl object-cover mr-6"
                />
                <div>
                  <h3 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {selectedPartner.name}
                  </h3>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Partnership since {new Date(selectedPartner.partnership_since).getFullYear()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Partnership Overview
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed text-lg`}>
                    {selectedPartner.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Collaboration Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPartner.collaboration_areas.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <Target className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Featured Programs
                  </h4>
                  <ul className="space-y-3">
                    {selectedPartner.featured_programs.map((program, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {program}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-primary-500/10 border-primary-500/20" : "bg-primary-500/10 border-primary-500/20"} border`}>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Partnership Impact
                  </h4>
                  <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    <TrendingUp className="h-8 w-8 text-primary-500 mb-3" />
                    <p className={`${theme === "dark" ? "text-white/90" : "text-black/90"} font-medium`}>
                      {selectedPartner.impact}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Partnership Type</span>
                    <span className={`font-semibold capitalize ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {selectedPartner.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Location</span>
                    <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {selectedPartner.location}
                    </span>
                  </div>
                  {selectedPartner.contact_person && (
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Contact Person</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {selectedPartner.contact_person}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(selectedPartner.website, '_blank')}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-xl transition-colors font-medium flex items-center justify-center"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Visit Website
                  </button>
                  <button
                    className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-4 rounded-xl transition-colors font-medium flex items-center justify-center`}
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Contact Partner
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Partnership Benefits */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 border border-black/20"
            }`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                  Partnership Benefits for Students
                </h2>
                <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto`}>
                  Our strategic partnerships create unique opportunities and advantages for our students
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                    title: "Enhanced Curriculum",
                    description: "Access to cutting-edge educational resources and international curricula",
                    stat: "15+ Programs"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-green-500" />,
                    title: "Career Opportunities",
                    description: "Direct pathways to universities and employment through partner networks",
                    stat: "95% Placement"
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-purple-500" />,
                    title: "Global Exposure",
                    description: "International exchange programs and global learning opportunities",
                    stat: "25+ Countries"
                  },
                  {
                    icon: <Award className="h-8 w-8 text-orange-500" />,
                    title: "Scholarships",
                    description: "Exclusive scholarship opportunities through partner organizations",
                    stat: "UGX 50M+ Annually"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}
                  >
                    <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                      {benefit.icon}
                    </div>
                    <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      {benefit.title}
                    </h3>
                    <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                      {benefit.description}
                    </p>
                    <div className="text-2xl font-bold text-primary-500">
                      {benefit.stat}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default PartnershipsPage;