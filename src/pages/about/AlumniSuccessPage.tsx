import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
  Users,
  Globe,
  Star,
  Calendar,
  MapPin,
  ExternalLink,
  Play,
  Quote,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface AlumniProfile {
  id: string;
  name: string;
  graduationYear: number;
  currentPosition: string;
  company: string;
  industry: string;
  location: string;
  achievements: string[];
  quote: string;
  image: string;
  linkedIn?: string;
  featured: boolean;
  mentorshipAvailable: boolean;
}

interface AlumniSuccessPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AlumniSuccessPage: React.FC<AlumniSuccessPageProps> = ({ theme, toggleTheme }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniProfile | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const schoolConfig = getCurrentSchoolConfig();

  const alumniProfiles: AlumniProfile[] = [
    {
      id: "1",
      name: "Dr. Sarah Nakato",
      graduationYear: 2010,
      currentPosition: "Chief Medical Officer",
      company: "Mulago National Referral Hospital",
      industry: "Healthcare",
      location: "Kampala, Uganda",
      achievements: [
        "Leading COVID-19 response team in Uganda",
        "Published 25+ medical research papers",
        "Recipient of Uganda Medical Excellence Award 2023",
        "Established free medical clinic in rural Uganda"
      ],
      quote: `${schoolConfig.shortName} gave me the foundation to pursue my dreams in medicine. The science programs and mentorship I received here shaped my career path and instilled the values of service that guide me today.`,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      linkedIn: "https://linkedin.com/in/sarah-nakato",
      featured: true,
      mentorshipAvailable: true
    },
    {
      id: "2",
      name: "David Mukasa",
      graduationYear: 2012,
      currentPosition: "Senior Software Engineer",
      company: "Google",
      industry: "Technology",
      location: "Mountain View, California, USA",
      achievements: [
        "Lead developer on Google Search algorithms",
        "Founded tech startup acquired by Google",
        "Mentor for 50+ African tech entrepreneurs",
        "Speaker at international tech conferences"
      ],
      quote: `The computer science program at ${schoolConfig.shortName} was ahead of its time. The problem-solving skills and logical thinking I developed here have been instrumental in my success in Silicon Valley.`,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      linkedIn: "https://linkedin.com/in/david-mukasa",
      featured: true,
      mentorshipAvailable: true
    },
    {
      id: "3",
      name: "Grace Namuli",
      graduationYear: 2008,
      currentPosition: "Ambassador",
      company: "Uganda Ministry of Foreign Affairs",
      industry: "Diplomacy",
      location: "Geneva, Switzerland",
      achievements: [
        "Uganda's youngest ambassador at age 32",
        "Negotiated 5 major international trade agreements",
        "Advocate for African education at UN",
        "Established scholarship fund for Ugandan students"
      ],
      quote: `The debate club and leadership opportunities at ${schoolConfig.shortName} prepared me for a career in diplomacy. The confidence and communication skills I gained here opened doors I never imagined.`,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      featured: true,
      mentorshipAvailable: false
    },
    {
      id: "4",
      name: "James Okello",
      graduationYear: 2015,
      currentPosition: "CEO & Founder",
      company: "EduTech Solutions Uganda",
      industry: "Education Technology",
      location: "Kampala, Uganda",
      achievements: [
        "Built Uganda's largest EdTech platform",
        "Serving 200+ schools across East Africa",
        "Raised $5M in funding for education initiatives",
        "Forbes 30 Under 30 Africa recipient"
      ],
      quote: `${schoolConfig.shortName} taught me to think big and act with purpose. The entrepreneurship program sparked my passion for using technology to solve educational challenges in Africa.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      linkedIn: "https://linkedin.com/in/james-okello",
      featured: false,
      mentorshipAvailable: true
    },
    {
      id: "5",
      name: "Mary Namusoke",
      graduationYear: 2011,
      currentPosition: "Environmental Scientist",
      company: "United Nations Environment Programme",
      industry: "Environmental Science",
      location: "Nairobi, Kenya",
      achievements: [
        "Leading climate change research in East Africa",
        "Developed sustainable agriculture programs",
        "Published environmental policy recommendations",
        "Winner of Young Environmental Leader Award"
      ],
      quote: `The environmental club and science programs at ${schoolConfig.shortName} ignited my passion for protecting our planet. The school's commitment to sustainability inspired my career choice.`,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      featured: false,
      mentorshipAvailable: true
    },
    {
      id: "6",
      name: "Robert Kiggundu",
      graduationYear: 2009,
      currentPosition: "Investment Banker",
      company: "Standard Bank Group",
      industry: "Finance",
      location: "Johannesburg, South Africa",
      achievements: [
        "Managed $500M+ in African infrastructure investments",
        "Established microfinance program for SMEs",
        "Board member of 3 African development organizations",
        "Chartered Financial Analyst (CFA) designation"
      ],
      quote: `The mathematics and economics programs at ${schoolConfig.shortName} provided the analytical foundation for my career in finance. The school's emphasis on ethical leadership guides my investment decisions.`,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      featured: false,
      mentorshipAvailable: false
    }
  ];

  const industries = [
    { id: "all", name: "All Industries", icon: <Globe className="h-4 w-4" /> },
    { id: "Healthcare", name: "Healthcare", icon: <Award className="h-4 w-4" /> },
    { id: "Technology", name: "Technology", icon: <Briefcase className="h-4 w-4" /> },
    { id: "Diplomacy", name: "Diplomacy", icon: <Users className="h-4 w-4" /> },
    { id: "Education Technology", name: "EdTech", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "Environmental Science", name: "Environment", icon: <Globe className="h-4 w-4" /> },
    { id: "Finance", name: "Finance", icon: <TrendingUp className="h-4 w-4" /> }
  ];

  const filteredAlumni = selectedIndustry === "all" 
    ? alumniProfiles 
    : alumniProfiles.filter(alumni => alumni.industry === selectedIndustry);

  const featuredAlumni = alumniProfiles.filter(alumni => alumni.featured);

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Alumni Success Stories | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Discover the success stories of ${schoolConfig.name} alumni. From healthcare leaders to tech entrepreneurs, our graduates are making impact worldwide.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} alumni, graduate success stories, career achievements, notable graduates, alumni network`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Constellation Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Constellation Background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 ${theme === "dark" ? "bg-white" : "bg-black"} rounded-full opacity-20 animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="1" className={theme === "dark" ? "text-white" : "text-black"} />
              <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="currentColor" strokeWidth="1" className={theme === "dark" ? "text-white" : "text-black"} />
              <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="1" className={theme === "dark" ? "text-white" : "text-black"} />
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
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
                {/* Orbiting Success Icons */}
                {[
                  { icon: <Award className="h-4 w-4" />, angle: 0 },
                  { icon: <Briefcase className="h-4 w-4" />, angle: 120 },
                  { icon: <Star className="h-4 w-4" />, angle: 240 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-500 shadow-lg"
                    style={{
                      transform: `rotate(${item.angle}deg) translateX(50px) rotate(-${item.angle}deg)`,
                      top: "50%",
                      left: "50%",
                      marginTop: "-16px",
                      marginLeft: "-16px"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </div>

            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Inspiring Journeys
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Alumni <span className="text-primary-500">Success Stories</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Our graduates are making remarkable impacts across the globe. From healthcare heroes to tech innovators, discover how {schoolConfig.shortName} shaped their journey to success.
            </p>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: "Alumni Worldwide", value: "2,500+", icon: <Globe className="h-6 w-6" /> },
              { label: "Countries Represented", value: "25+", icon: <MapPin className="h-6 w-6" /> },
              { label: "Industry Leaders", value: "150+", icon: <Award className="h-6 w-6" /> },
              { label: "Average Success Rate", value: "95%", icon: <TrendingUp className="h-6 w-6" /> }
            ].map((metric, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
                <div className={`p-3 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {metric.value}
                </div>
                <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Alumni Carousel */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Featured Success Stories
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Spotlight on our most inspiring alumni who are making significant impacts in their fields
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl overflow-hidden ${
                theme === "dark"
                  ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
                  : "bg-gradient-to-br from-black/10 to-black/5 border border-black/20"
              } backdrop-blur-xl`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={featuredAlumni[currentTestimonial]?.image}
                    alt={featuredAlumni[currentTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {featuredAlumni[currentTestimonial]?.name}
                      </h3>
                      <p className="text-lg opacity-90 mb-2">
                        {featuredAlumni[currentTestimonial]?.currentPosition}
                      </p>
                      <p className="text-sm opacity-80">
                        {featuredAlumni[currentTestimonial]?.company} • Class of {featuredAlumni[currentTestimonial]?.graduationYear}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-primary-500 mb-6" />
                  <blockquote className={`text-xl ${theme === "dark" ? "text-white/90" : "text-black/90"} leading-relaxed mb-8 italic`}>
                    "{featuredAlumni[currentTestimonial]?.quote}"
                  </blockquote>

                  <div className="space-y-4">
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {featuredAlumni[currentTestimonial]?.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {featuredAlumni[currentTestimonial]?.mentorshipAvailable && (
                    <div className="mt-6">
                      <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl transition-colors font-medium flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Connect for Mentorship
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
                disabled={currentTestimonial === 0}
                className={`p-3 rounded-full transition-colors ${
                  currentTestimonial === 0
                    ? "opacity-50 cursor-not-allowed"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                ←
              </button>

              <div className="flex space-x-2">
                {featuredAlumni.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? "bg-primary-500 w-8" 
                        : theme === "dark"
                        ? "bg-white/30 hover:bg-white/50"
                        : "bg-black/30 hover:bg-black/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial(Math.min(featuredAlumni.length - 1, currentTestimonial + 1))}
                disabled={currentTestimonial === featuredAlumni.length - 1}
                className={`p-3 rounded-full transition-colors ${
                  currentTestimonial === featuredAlumni.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {industry.icon}
                <span className="font-medium">{industry.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Grid with Staggered Layout */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumni, index) => (
              <motion.div
                key={alumni.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                  index % 3 === 1 ? "md:mt-8" : index % 3 === 2 ? "lg:mt-16" : ""
                } ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40"
                    : "bg-gradient-to-br from-black/10 to-black/5 border border-black/20 hover:border-black/40"
                } backdrop-blur-xl`}
                onClick={() => setSelectedAlumni(alumni)}
              >
                {/* Geometric Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-20 transform rotate-45 translate-x-10 -translate-y-10" />

                <div className="relative p-8">
                  <div className="relative mb-6">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-20 h-20 rounded-2xl object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    {alumni.featured && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-2 group-hover:text-primary-500 transition-colors`}>
                      {alumni.name}
                    </h3>
                    <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-1`}>
                      {alumni.currentPosition}
                    </p>
                    <p className={`text-sm font-medium ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {alumni.company}
                    </p>
                    <p className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"} mt-2`}>
                      Class of {alumni.graduationYear} • {alumni.location}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          Industry
                        </span>
                        <span className="text-sm text-primary-500 font-semibold">
                          {alumni.industry}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        {alumni.achievements.length} major achievements
                      </span>
                    </div>

                    {alumni.mentorshipAvailable && (
                      <div className="text-center">
                        <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-medium">
                          Available for Mentorship
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Detail Modal */}
      {selectedAlumni && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAlumni(null)}
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
                  src={selectedAlumni.image}
                  alt={selectedAlumni.name}
                  className="w-24 h-24 rounded-2xl object-cover mr-6"
                />
                <div>
                  <h3 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {selectedAlumni.name}
                  </h3>
                  <p className={`text-xl ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    {selectedAlumni.currentPosition}
                  </p>
                  <p className={`text-lg ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                    {selectedAlumni.company} • Class of {selectedAlumni.graduationYear}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAlumni(null)}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Career Journey
                  </h4>
                  <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"}`}>
                    <Quote className="h-8 w-8 text-primary-500 mb-4" />
                    <p className={`${theme === "dark" ? "text-white/90" : "text-black/90"} leading-relaxed italic text-lg`}>
                      {selectedAlumni.quote}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Professional Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Industry</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {selectedAlumni.industry}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Location</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {selectedAlumni.location}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Graduation Year</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {selectedAlumni.graduationYear}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Major Achievements
                  </h4>
                  <ul className="space-y-3">
                    {selectedAlumni.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  {selectedAlumni.linkedIn && (
                    <button
                      onClick={() => window.open(selectedAlumni.linkedIn, '_blank')}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-xl transition-colors font-medium flex items-center justify-center"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      LinkedIn Profile
                    </button>
                  )}
                  {selectedAlumni.mentorshipAvailable && (
                    <button
                      className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-4 rounded-xl transition-colors font-medium flex items-center justify-center`}
                    >
                      <Users className="h-5 w-5 mr-2" />
                      Request Mentorship
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Alumni Network CTA */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 border border-black/20"
            }`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Join Our Alumni Network
              </h2>
              <p className={`text-xl mb-8 max-w-3xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Connect with fellow graduates, access mentorship opportunities, and contribute to the next generation of {schoolConfig.shortName} students.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Users className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Network & Connect
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Build professional relationships with alumni worldwide
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Award className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Mentorship Programs
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Guide current students and share your expertise
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <TrendingUp className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Career Development
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Access exclusive job opportunities and career resources
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Join Alumni Network
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}>
                  <Users className="mr-2 h-5 w-5" />
                  Become a Mentor
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default AlumniSuccessPage;