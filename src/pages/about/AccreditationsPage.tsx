import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Award,
  Shield,
  CheckCircle,
  Globe,
  Calendar,
  FileText,
  ExternalLink,
  Download,
  Star,
  Building,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Accreditation {
  id: string;
  name: string;
  organization: string;
  description: string;
  dateAwarded: string;
  validUntil: string;
  certificateUrl: string;
  logo: string;
  level: "international" | "national" | "regional";
  status: "active" | "pending" | "expired";
  benefits: string[];
}

interface AccreditationsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AccreditationsPage: React.FC<AccreditationsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedAccreditation, setSelectedAccreditation] = useState<Accreditation | null>(null);
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const schoolConfig = getCurrentSchoolConfig();

  const accreditations: Accreditation[] = [
    {
      id: "1",
      name: "Cambridge International School",
      organization: "Cambridge Assessment International Education",
      description: "Official recognition as a Cambridge International School, authorized to deliver Cambridge programmes and qualifications.",
      dateAwarded: "2018-09-15",
      validUntil: "2028-09-15",
      certificateUrl: "/certificates/cambridge-accreditation.pdf",
      logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      level: "international",
      status: "active",
      benefits: [
        "Internationally recognized qualifications",
        "Access to Cambridge resources and training",
        "Global university recognition",
        "Quality assurance standards"
      ]
    },
    {
      id: "2",
      name: "Ministry of Education Approval",
      organization: "Uganda Ministry of Education and Sports",
      description: "Official registration and approval to operate as a secondary school in Uganda, meeting all national education standards.",
      dateAwarded: "2015-03-20",
      validUntil: "2025-03-20",
      certificateUrl: "/certificates/ministry-approval.pdf",
      logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
      level: "national",
      status: "active",
      benefits: [
        "Legal authorization to operate",
        "National curriculum compliance",
        "Government recognition",
        "Student certification validity"
      ]
    },
    {
      id: "3",
      name: "ISO 9001:2015 Quality Management",
      organization: "International Organization for Standardization",
      description: "Certification for quality management systems, demonstrating our commitment to continuous improvement and customer satisfaction.",
      dateAwarded: "2020-11-10",
      validUntil: "2026-11-10",
      certificateUrl: "/certificates/iso-9001.pdf",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      level: "international",
      status: "active",
      benefits: [
        "Quality management systems",
        "Continuous improvement processes",
        "Customer satisfaction focus",
        "International recognition"
      ]
    },
    {
      id: "4",
      name: "Uganda National Examinations Board",
      organization: "UNEB",
      description: "Authorization to conduct national examinations and issue certificates recognized throughout Uganda and East Africa.",
      dateAwarded: "2015-06-01",
      validUntil: "2025-06-01",
      certificateUrl: "/certificates/uneb-authorization.pdf",
      logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      level: "national",
      status: "active",
      benefits: [
        "National examination authority",
        "Certificate issuance rights",
        "Regional recognition",
        "Academic credibility"
      ]
    },
    {
      id: "5",
      name: "East African Schools Association",
      organization: "EASA",
      description: "Membership in the prestigious East African Schools Association, promoting educational excellence across the region.",
      dateAwarded: "2019-04-12",
      validUntil: "2024-04-12",
      certificateUrl: "/certificates/easa-membership.pdf",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      level: "regional",
      status: "pending",
      benefits: [
        "Regional networking opportunities",
        "Best practice sharing",
        "Professional development",
        "Educational research access"
      ]
    },
    {
      id: "6",
      name: "Green Schools Alliance",
      organization: "Global Green Schools Alliance",
      description: "Recognition for environmental sustainability initiatives and commitment to eco-friendly education practices.",
      dateAwarded: "2021-08-30",
      validUntil: "2026-08-30",
      certificateUrl: "/certificates/green-schools.pdf",
      logo: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      level: "international",
      status: "active",
      benefits: [
        "Environmental sustainability recognition",
        "Green curriculum resources",
        "Sustainability best practices",
        "Global environmental network"
      ]
    }
  ];

  const levels = [
    { id: "all", name: "All Levels", color: "gray" },
    { id: "international", name: "International", color: "blue" },
    { id: "national", name: "National", color: "green" },
    { id: "regional", name: "Regional", color: "purple" }
  ];

  const filteredAccreditations = filterLevel === "all" 
    ? accreditations 
    : accreditations.filter(acc => acc.level === filterLevel);

  const getLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      international: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      national: "bg-green-500/20 text-green-500 border-green-500/30",
      regional: "bg-purple-500/20 text-purple-500 border-purple-500/30"
    };
    return colorMap[level] || "bg-gray-500/20 text-gray-500 border-gray-500/30";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-500";
      case "pending": return "text-yellow-500";
      case "expired": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Accreditations & Certifications | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`View ${schoolConfig.name}'s accreditations and certifications. Cambridge International, Ministry of Education approval, and quality management certifications.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} accreditations, Cambridge International School, Ministry of Education Uganda, ISO certification, quality education`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Hexagonal Pattern */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Hexagonal Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                  <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" className={theme === "dark" ? "text-white" : "text-black"} />
            </svg>
          </div>
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90" : "bg-gradient-to-br from-white/90 via-white/80 to-white/90"}`} />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center transform rotate-12">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-white fill-current" />
                </div>
              </div>
            </div>
            
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Quality Assurance
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Accreditations &<br />
              <span className="text-primary-500">Certifications</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Our commitment to excellence is validated by prestigious accreditations and certifications from leading educational organizations worldwide.
            </p>
          </motion.div>

          {/* Floating Achievement Badges */}
          <div className="relative h-32 mt-16">
            {[
              { icon: <Shield className="h-6 w-6" />, position: "top-4 left-8", color: "bg-blue-500" },
              { icon: <Globe className="h-6 w-6" />, position: "top-8 right-12", color: "bg-green-500" },
              { icon: <Award className="h-6 w-6" />, position: "bottom-4 left-16", color: "bg-purple-500" },
              { icon: <Star className="h-6 w-6" />, position: "bottom-8 right-8", color: "bg-orange-500" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`absolute ${badge.position} ${badge.color} p-3 rounded-xl text-white animate-float`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {badge.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setFilterLevel(level.id)}
                className={`px-8 py-4 rounded-2xl transition-all duration-300 ${
                  filterLevel === level.id
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    : "bg-black/10 hover:bg-black/20 text-black border border-black/20"
                }`}
              >
                <div className="font-semibold">{level.name}</div>
                <div className={`text-sm ${filterLevel === level.id ? "text-white/80" : theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                  {level.id === "all" ? accreditations.length : accreditations.filter(a => a.level === level.id).length} certifications
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccreditations.map((accreditation, index) => (
              <motion.div
                key={accreditation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40"
                    : "bg-gradient-to-br from-black/10 to-black/5 border border-black/20 hover:border-black/40"
                } backdrop-blur-xl`}
                onClick={() => setSelectedAccreditation(accreditation)}
              >
                {/* Geometric Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full transform translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-500 to-primary-500 rounded-full transform -translate-x-12 translate-y-12" />
                </div>

                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg">
                      <img
                        src={accreditation.logo}
                        alt={accreditation.organization}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(accreditation.level)}`}>
                        {accreditation.level}
                      </span>
                      <span className={`mt-2 text-xs font-medium ${getStatusColor(accreditation.status)}`}>
                        ● {accreditation.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-3 group-hover:text-primary-500 transition-colors`}>
                    {accreditation.name}
                  </h3>
                  
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 font-medium`}>
                    {accreditation.organization}
                  </p>

                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6 leading-relaxed line-clamp-3`}>
                    {accreditation.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Awarded
                      </span>
                      <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {new Date(accreditation.dateAwarded).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Valid Until
                      </span>
                      <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {new Date(accreditation.validUntil).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        View Certificate
                      </span>
                      <ExternalLink className="h-4 w-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Detail Modal */}
      {selectedAccreditation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAccreditation(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-3xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <img
                  src={selectedAccreditation.logo}
                  alt={selectedAccreditation.organization}
                  className="w-16 h-16 rounded-2xl object-cover mr-4"
                />
                <div>
                  <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {selectedAccreditation.name}
                  </h3>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    {selectedAccreditation.organization}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAccreditation(null)}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    About This Accreditation
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedAccreditation.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Benefits & Recognition
                  </h4>
                  <ul className="space-y-3">
                    {selectedAccreditation.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-primary-500/10 border-primary-500/20" : "bg-primary-500/10 border-primary-500/20"} border`}>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Certification Details
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Level</span>
                      <span className={`font-semibold capitalize ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {selectedAccreditation.level}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Status</span>
                      <span className={`font-semibold capitalize ${getStatusColor(selectedAccreditation.status)}`}>
                        {selectedAccreditation.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Date Awarded</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {new Date(selectedAccreditation.dateAwarded).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Valid Until</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {new Date(selectedAccreditation.validUntil).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(selectedAccreditation.certificateUrl, '_blank')}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-xl transition-colors font-medium flex items-center justify-center"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    View Certificate
                  </button>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = selectedAccreditation.certificateUrl;
                      link.download = `${selectedAccreditation.name}-Certificate.pdf`;
                      link.click();
                    }}
                    className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-4 rounded-xl transition-colors font-medium flex items-center justify-center`}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Impact Statistics */}
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
                <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  Quality Recognition Impact
                </h2>
                <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-2xl mx-auto`}>
                  Our accreditations translate into real benefits for our students and community
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    {accreditations.filter(a => a.status === "active").length}
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Active Certifications
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    {accreditations.filter(a => a.level === "international").length}
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    International Standards
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    {new Date().getFullYear() - 2015}+
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Compliance Rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default AccreditationsPage;