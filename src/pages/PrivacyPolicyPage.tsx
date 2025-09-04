import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Database,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  FileText,
  Globe,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface PrivacyPolicyPageProps {
  theme: string;
  toggleTheme: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const schoolConfig = getCurrentSchoolConfig();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthIndex = new Date().getMonth();
  const nextMonthIndex = (currentMonthIndex + 1) % months.length;
  const lastUpdated = `${months[nextMonthIndex]} 15, ${new Date().getFullYear() - 1}`;

  const privacySections = [
    { id: "overview", name: "Overview", icon: <Eye className="h-4 w-4" /> },
    { id: "collection", name: "Data Collection", icon: <Database className="h-4 w-4" /> },
    { id: "usage", name: "How We Use Data", icon: <Settings className="h-4 w-4" /> },
    { id: "sharing", name: "Data Sharing", icon: <Users className="h-4 w-4" /> },
    { id: "security", name: "Security", icon: <Lock className="h-4 w-4" /> },
    { id: "rights", name: "Your Rights", icon: <Shield className="h-4 w-4" /> },
    { id: "contact", name: "Contact Us", icon: <Phone className="h-4 w-4" /> }
  ];

  const dataTypes = [
    {
      category: "Student Information",
      icon: <Users className="h-8 w-8 text-blue-500" />,
      description: "Personal and academic data necessary for education services",
      examples: [
        "Name, date of birth, and contact information",
        "Academic records and assessment results",
        "Attendance and behavioral records",
        "Health and medical information (with consent)",
        "Emergency contact details"
      ],
      retention: "Maintained during enrollment + 7 years after graduation",
      purpose: "Educational services, academic tracking, safety, and alumni relations"
    },
    {
      category: "Parent/Guardian Data",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      description: "Information about parents and guardians for communication and legal purposes",
      examples: [
        "Names and contact information",
        "Employment and financial information (for fee purposes)",
        "Emergency contact details",
        "Communication preferences",
        "Consent and authorization records"
      ],
      retention: "Maintained during student enrollment + 3 years",
      purpose: "Communication, billing, emergency contacts, and legal compliance"
    },
    {
      category: "Website & Digital Data",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      description: "Information collected through our website and digital platforms",
      examples: [
        "IP addresses and browser information",
        "Website usage patterns and preferences",
        "Online application and inquiry data",
        "Email communication records",
        "Social media interactions"
      ],
      retention: "Varies by data type (30 days to 2 years)",
      purpose: "Website improvement, communication, marketing, and user experience"
    }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Privacy Policy | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Privacy policy for ${schoolConfig.name}. Learn how we collect, use, and protect your personal information in compliance with Uganda's data protection laws.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} privacy policy, data protection, student privacy, Uganda data protection act, personal information security`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Shield Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M50 50h100v100h-100z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="5" fill="currentColor"/>
                  <circle cx="150" cy="50" r="5" fill="currentColor"/>
                  <circle cx="150" cy="150" r="5" fill="currentColor"/>
                  <circle cx="50" cy="150" r="5" fill="currentColor"/>
                  <path d="M50 50L25 25M150 50L175 25M150 150L175 175M50 150L25 175" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" className={theme === "dark" ? "text-white" : "text-black"} />
            </svg>
          </div>
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
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-3xl flex items-center justify-center transform rotate-12">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Lock className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Data Protection & Privacy
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Privacy <span className="text-primary-500">Policy</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Your privacy is our priority. Learn how we collect, use, and protect your personal information in compliance with Uganda's Data Protection and Privacy Act.
            </p>
            <div className={`mt-6 inline-block px-6 py-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
              <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Last updated: {lastUpdated}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Sidebar */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sticky Navigation */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {privacySections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                        activeSection === section.id
                          ? "bg-primary-500 text-white scale-105"
                          : theme === "dark"
                          ? "hover:bg-white/10 text-white"
                          : "hover:bg-black/10 text-black"
                      }`}
                    >
                      {section.icon}
                      <span className="font-medium">{section.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-3xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
              >
                {activeSection === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                        Privacy Policy Overview
                      </h2>
                      <div className={`prose max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
                        <p className={`text-lg ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed mb-6`}>
                          At {schoolConfig.name}, we are committed to protecting the privacy and security of our students, parents, staff, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                          {[
                            {
                              icon: <Shield className="h-8 w-8 text-blue-500" />,
                              title: "Data Protection",
                              description: "We comply with Uganda's Data Protection and Privacy Act 2019"
                            },
                            {
                              icon: <Lock className="h-8 w-8 text-green-500" />,
                              title: "Secure Storage",
                              description: "Your data is encrypted and stored securely with restricted access"
                            },
                            {
                              icon: <Users className="h-8 w-8 text-purple-500" />,
                              title: "Your Rights",
                              description: "You have full control over your personal information and privacy settings"
                            }
                          ].map((item, index) => (
                            <div key={index} className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                              <div className={`p-3 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                                {item.icon}
                              </div>
                              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                {item.title}
                              </h3>
                              <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                          Key Principles
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "We only collect information necessary for educational purposes",
                            "Your data is never sold or shared with third parties for marketing",
                            "We implement strong security measures to protect your information",
                            "You have the right to access, correct, or delete your personal data",
                            "We are transparent about our data practices and policies"
                          ].map((principle, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                {principle}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "collection" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Information We Collect
                    </h2>
                    
                    <div className="space-y-8">
                      {dataTypes.map((dataType, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
                        >
                          <div className="flex items-center mb-6">
                            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-4`}>
                              {dataType.icon}
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                {dataType.category}
                              </h3>
                              <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                {dataType.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                                Examples Include:
                              </h4>
                              <ul className="space-y-2">
                                {dataType.examples.map((example, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                      {example}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h5 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                  Retention Period:
                                </h5>
                                <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                  {dataType.retention}
                                </p>
                              </div>
                              <div>
                                <h5 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                  Purpose:
                                </h5>
                                <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                  {dataType.purpose}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "security" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Data Security Measures
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        {
                          title: "Technical Safeguards",
                          icon: <Lock className="h-8 w-8 text-blue-500" />,
                          measures: [
                            "256-bit SSL encryption for all data transmission",
                            "Encrypted database storage with AES-256",
                            "Multi-factor authentication for staff access",
                            "Regular security audits and penetration testing",
                            "Automated backup systems with encryption"
                          ]
                        },
                        {
                          title: "Administrative Controls",
                          icon: <Users className="h-8 w-8 text-green-500" />,
                          measures: [
                            "Role-based access control systems",
                            "Regular staff training on data protection",
                            "Strict data handling policies and procedures",
                            "Background checks for all staff with data access",
                            "Incident response and breach notification procedures"
                          ]
                        },
                        {
                          title: "Physical Security",
                          icon: <Shield className="h-8 w-8 text-purple-500" />,
                          measures: [
                            "Secure server rooms with restricted access",
                            "24/7 surveillance and monitoring systems",
                            "Biometric access controls for sensitive areas",
                            "Secure disposal of physical documents",
                            "Environmental controls and fire suppression"
                          ]
                        },
                        {
                          title: "Compliance & Monitoring",
                          icon: <Eye className="h-8 w-8 text-orange-500" />,
                          measures: [
                            "Regular compliance audits and assessments",
                            "Continuous monitoring of data access and usage",
                            "Privacy impact assessments for new systems",
                            "Third-party security certifications",
                            "Annual privacy policy reviews and updates"
                          ]
                        }
                      ].map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
                        >
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-4`}>
                              {category.icon}
                            </div>
                            <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                              {category.title}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {category.measures.map((measure, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                  {measure}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "rights" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Your Privacy Rights
                    </h2>

                    <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-primary-500/10 border-primary-500/20" : "bg-primary-500/10 border-primary-500/20"} border`}>
                      <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                        Under Uganda's Data Protection and Privacy Act 2019, you have the following rights:
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            right: "Right to Access",
                            description: "Request copies of your personal data we hold",
                            action: "Submit a data access request form"
                          },
                          {
                            right: "Right to Rectification",
                            description: "Request correction of inaccurate or incomplete data",
                            action: "Contact our data protection officer"
                          },
                          {
                            right: "Right to Erasure",
                            description: "Request deletion of your personal data (with limitations)",
                            action: "Submit a data deletion request"
                          },
                          {
                            right: "Right to Portability",
                            description: "Receive your data in a structured, machine-readable format",
                            action: "Request data export through our portal"
                          },
                          {
                            right: "Right to Object",
                            description: "Object to processing of your data for specific purposes",
                            action: "Submit an objection notice"
                          },
                          {
                            right: "Right to Withdraw Consent",
                            description: "Withdraw consent for data processing at any time",
                            action: "Update your privacy preferences"
                          }
                        ].map((item, index) => (
                          <div key={index} className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                            <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                              {item.right}
                            </h4>
                            <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-3`}>
                              {item.description}
                            </p>
                            <p className={`text-xs text-primary-500 font-medium`}>
                              How to exercise: {item.action}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "contact" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Privacy Contact Information
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                        <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                          Data Protection Officer
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-primary-500 mr-3" />
                            <div>
                              <div className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                                Ms. Grace Nakato
                              </div>
                              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                Data Protection Officer
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-primary-500 mr-3" />
                            <a
                              href="tel:+256414123456"
                              className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                            >
                              +256 414 123 456
                            </a>
                          </div>
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-primary-500 mr-3" />
                            <a
                              href="mailto:privacy@tredumoschool.ug"
                              className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                            >
                              privacy@tredumoschool.ug
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                        <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                          Submit Privacy Request
                        </h3>
                        <form className="space-y-4">
                          <input
                            type="text"
                            placeholder="Your Name"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              theme === "dark"
                                ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                                : "bg-black/5 border-black/20 text-black placeholder-black/50"
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              theme === "dark"
                                ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                                : "bg-black/5 border-black/20 text-black placeholder-black/50"
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                          <select className={`w-full px-4 py-3 rounded-lg border ${
                            theme === "dark"
                              ? "bg-white/5 border-white/20 text-white"
                              : "bg-black/5 border-black/20 text-black"
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}>
                            <option value="">Request Type</option>
                            <option value="access">Data Access Request</option>
                            <option value="correction">Data Correction</option>
                            <option value="deletion">Data Deletion</option>
                            <option value="portability">Data Portability</option>
                            <option value="objection">Object to Processing</option>
                          </select>
                          <textarea
                            placeholder="Describe your request..."
                            rows={4}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              theme === "dark"
                                ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                                : "bg-black/5 border-black/20 text-black placeholder-black/50"
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                          <button
                            type="submit"
                            className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                          >
                            Submit Request
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {/* Add other sections as needed */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"
            }`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Questions About Privacy?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Our privacy team is here to help you understand how we protect your information and exercise your rights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group"
                >
                  Contact Privacy Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/cookies"
                  className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Cookie Preferences
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default PrivacyPolicyPage;