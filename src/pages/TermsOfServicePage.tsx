import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Users,
  Shield,
  BookOpen,
  Gavel,
  ArrowRight,
  Clock,
  Globe,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface TermsOfServicePageProps {
  theme: string;
  toggleTheme: () => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthIndex = new Date().getMonth();
  const nextMonthIndex = (currentMonthIndex + 1) % months.length;
  const lastUpdated = `${months[nextMonthIndex]} 15, ${new Date().getFullYear() - 1}`;

  const termsSections = [
    { id: "overview", name: "Overview", icon: <FileText className="h-4 w-4" /> },
    { id: "acceptance", name: "Acceptance", icon: <CheckCircle className="h-4 w-4" /> },
    { id: "services", name: "Our Services", icon: <BookOpen className="h-4 w-4" /> },
    { id: "responsibilities", name: "User Responsibilities", icon: <Users className="h-4 w-4" /> },
    { id: "conduct", name: "Code of Conduct", icon: <Shield className="h-4 w-4" /> },
    { id: "intellectual", name: "Intellectual Property", icon: <Scale className="h-4 w-4" /> },
    { id: "limitations", name: "Limitations", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "governing", name: "Governing Law", icon: <Gavel className="h-4 w-4" /> }
  ];

  const serviceCategories = [
    {
      title: "Educational Services",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      description: "Core academic programs and educational activities",
      includes: [
        "Classroom instruction and curriculum delivery",
        "Assessment and examination services",
        "Academic counseling and guidance",
        "Extracurricular activities and programs",
        "Digital learning platforms and resources"
      ]
    },
    {
      title: "Student Support Services",
      icon: <Users className="h-8 w-8 text-green-500" />,
      description: "Comprehensive support for student welfare and development",
      includes: [
        "Counseling and mental health support",
        "Health and medical services",
        "Boarding and accommodation services",
        "Transportation and logistics",
        "Career guidance and university preparation"
      ]
    },
    {
      title: "Digital Services",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      description: "Online platforms and digital tools for enhanced learning",
      includes: [
        "Student information management system",
        "Online learning platforms and resources",
        "Parent communication portals",
        "Digital library and research databases",
        "Mobile applications and web services"
      ]
    }
  ];

  const conductRules = [
    {
      category: "Academic Integrity",
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      rules: [
        "Students must complete their own work and avoid plagiarism",
        "Cheating in examinations or assessments is strictly prohibited",
        "Proper citation and referencing must be used for all sources",
        "Collaboration is encouraged only when explicitly permitted",
        "Academic dishonesty will result in disciplinary action"
      ]
    },
    {
      category: "Respectful Behavior",
      icon: <Users className="h-6 w-6 text-green-500" />,
      rules: [
        "Treat all community members with respect and dignity",
        "Bullying, harassment, or discrimination is not tolerated",
        "Use appropriate language in all communications",
        "Respect cultural and religious diversity",
        "Maintain professional relationships with staff and peers"
      ]
    },
    {
      category: "Digital Citizenship",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      rules: [
        "Use technology responsibly and ethically",
        "Respect intellectual property and copyright laws",
        "Maintain appropriate online behavior and digital footprint",
        "Protect personal and others' privacy online",
        "Report cyberbullying or inappropriate digital behavior"
      ]
    },
    {
      category: "Campus Safety",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      rules: [
        "Follow all safety protocols and emergency procedures",
        "Report safety concerns or incidents immediately",
        "Maintain a clean and safe learning environment",
        "Comply with health and safety regulations",
        "Participate in safety drills and training programs"
      ]
    }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Terms of Service | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Terms of service for ${schoolConfig.name}. Understand your rights and responsibilities as a member of our school community.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} terms of service, school policies, student responsibilities, code of conduct, educational services`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Legal Scales Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Legal Document Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="legal" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <rect x="10" y="10" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <line x1="20" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="1"/>
                  <line x1="20" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1"/>
                  <line x1="20" y1="70" x2="95" y2="70" stroke="currentColor" strokeWidth="1"/>
                  <line x1="20" y1="90" x2="85" y2="90" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#legal)" className={theme === "dark" ? "text-white" : "text-black"} />
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
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-3xl flex items-center justify-center transform -rotate-12">
                  <Scale className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Gavel className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Legal Framework
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Terms of <span className="text-primary-500">Service</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              These terms govern your relationship with {schoolConfig.name} and outline the rights and responsibilities of all community members.
            </p>
            <div className={`mt-6 inline-block px-6 py-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
              <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Last updated: {lastUpdated} • Effective immediately
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Navigation & Content */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sticky Navigation */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  Terms Sections
                </h3>
                <nav className="space-y-2">
                  {termsSections.map((section) => (
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

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Quick Actions
                  </h4>
                  <div className="space-y-2">
                    <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      Download PDF
                    </button>
                    <button className={`w-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-4 py-2 rounded-lg transition-colors text-sm font-medium`}>
                      Print Terms
                    </button>
                  </div>
                </div>
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
                        Terms of Service Overview
                      </h2>
                      <div className={`prose max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
                        <p className={`text-lg ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed mb-6`}>
                          Welcome to {schoolConfig.name}. These Terms of Service ("Terms") govern your use of our educational services, facilities, and digital platforms. By enrolling as a student, engaging as a parent/guardian, or using our services, you agree to be bound by these Terms.
                        </p>

                        <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-yellow-500/10 border-yellow-500/20" : "bg-yellow-500/10 border-yellow-500/20"} border mb-8`}>
                          <div className="flex items-center mb-3">
                            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
                            <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                              Important Notice
                            </h3>
                          </div>
                          <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you should not use our services or facilities.
                          </p>
                        </div>

                        <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                          Key Definitions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { term: "School/We/Us", definition: `${schoolConfig.name} and its staff, faculty, and authorized representatives` },
                            { term: "Student/You", definition: "Any individual enrolled in our educational programs" },
                            { term: "Parent/Guardian", definition: "Legal guardians or parents of enrolled students" },
                            { term: "Services", definition: "All educational, digital, and support services we provide" },
                            { term: "Community", definition: "Students, parents, staff, and all school stakeholders" },
                            { term: "Facilities", definition: "Physical and digital infrastructure and resources" }
                          ].map((item, index) => (
                            <div key={index} className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                              <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                {item.term}
                              </h4>
                              <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                {item.definition}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "services" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Our Educational Services
                    </h2>

                    <div className="space-y-8">
                      {serviceCategories.map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
                        >
                          <div className="flex items-center mb-6">
                            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-4`}>
                              {category.icon}
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                {category.title}
                              </h3>
                              <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                {category.description}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                              Services Include:
                            </h4>
                            <ul className="space-y-2">
                              {category.includes.map((service, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                    {service}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "conduct" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Code of Conduct
                    </h2>

                    <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-500/10 border-blue-500/20"} border mb-8`}>
                      <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                        Our Community Standards
                      </h3>
                      <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                        As a member of the {schoolConfig.name} community, you are expected to uphold our values of respect, integrity, excellence, and responsibility. These standards apply to all interactions within our school community, both on campus and online.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {conductRules.map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
                        >
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-3`}>
                              {category.icon}
                            </div>
                            <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                              {category.category}
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {category.rules.map((rule, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                  {rule}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "governing" && (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Governing Law & Jurisdiction
                    </h2>

                    <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                            Applicable Laws
                          </h3>
                          <ul className="space-y-3">
                            {[
                              "Uganda Constitution and Laws",
                              "Education Act of Uganda",
                              "Data Protection and Privacy Act 2019",
                              "Children Act (Amendment) 2016",
                              "Employment Act 2006"
                            ].map((law, index) => (
                              <li key={index} className="flex items-start">
                                <Gavel className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                  {law}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                            Dispute Resolution
                          </h3>
                          <div className="space-y-4">
                            <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                              <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                Step 1: Internal Resolution
                              </h4>
                              <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                Contact our administration for informal resolution
                              </p>
                            </div>
                            <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                              <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                Step 2: Mediation
                              </h4>
                              <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                Formal mediation through approved mediators
                              </p>
                            </div>
                            <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                              <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                                Step 3: Legal Action
                              </h4>
                              <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                Courts of Uganda have exclusive jurisdiction
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-green-500/10 border-green-500/20" : "bg-green-500/10 border-green-500/20"} border`}>
                      <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                        Contact Information for Legal Matters
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className={`font-medium ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                            School Administration
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-primary-500 mr-2" />
                              <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                {schoolConfig.phone.primary}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-primary-500 mr-2" />
                              <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                legal@{schoolConfig.email.primary.split('@')[1]}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className={`font-medium ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                            Physical Address
                          </h4>
                          <address className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} not-italic`}>
                            {schoolConfig.address.street}<br />
                            {schoolConfig.address.city}, {schoolConfig.address.state}<br />
                            {schoolConfig.address.country}
                          </address>
                        </div>
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

      {/* Terms Acceptance */}
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
                Questions About Our Terms?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Our administration team is available to clarify any aspects of our Terms of Service and answer your questions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group"
                >
                  Contact Administration
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/privacy"
                  className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  View Privacy Policy
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

export default TermsOfServicePage;