import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface MegaFooterProps {
  theme: string;
}

const MegaFooter: React.FC<MegaFooterProps> = ({ theme }) => {
  const schoolConfig = getCurrentSchoolConfig();
  const currentYear = new Date().getFullYear();

  const footerSections = {
    academics: {
      title: "Academics",
      icon: <BookOpen className="h-5 w-5" />,
      links: [
        { name: "Primary School", path: "/academics/primary" },
        { name: "Secondary School", path: "/academics/secondary" },
        { name: "A-Level Programs", path: "/academics/a-level" },
        { name: "International Programs", path: "/academics/international" },
        { name: "Digital Library", path: "/academics/library" },
        { name: "Online Learning", path: "/academics/online" }
      ]
    },
    admissions: {
      title: "Admissions",
      icon: <Users className="h-5 w-5" />,
      links: [
        { name: "Apply Online", path: "/admissions/apply" },
        { name: "Requirements", path: "/admissions/requirements" },
        { name: "Scholarships", path: "/admissions/scholarships" },
        { name: "Fee Structure", path: "/admissions/fees" },
        { name: "Campus Tours", path: "/admissions/tours" },
        { name: "Admissions FAQ", path: "/admissions/faq" }
      ]
    },
    student_life: {
      title: "Student Life",
      icon: <Award className="h-5 w-5" />,
      links: [
        { name: "Sports & Athletics", path: "/student-life/sports" },
        { name: "Clubs & Societies", path: "/student-life/clubs" },
        { name: "Boarding Houses", path: "/student-life/boarding" },
        { name: "Health Services", path: "/student-life/health" },
        { name: "Counseling", path: "/student-life/counseling" },
        { name: "Transportation", path: "/student-life/transport" }
      ]
    },
    about: {
      title: "About Us",
      icon: <GraduationCap className="h-5 w-5" />,
      links: [
        { name: "Our Story", path: "/about/story" },
        { name: "Mission & Vision", path: "/about/mission" },
        { name: "Leadership Team", path: "/about/leadership" },
        { name: "Teaching Staff", path: "/about/teachers" },
        { name: "Awards & Recognition", path: "/about/awards" },
        { name: "Alumni Success", path: "/about/alumni" }
      ]
    },
    resources: {
      title: "Resources",
      icon: <Calendar className="h-5 w-5" />,
      links: [
        { name: "Academic Calendar", path: "/resources/calendar" },
        { name: "School Policies", path: "/resources/policies" },
        { name: "Parent Resources", path: "/resources/parents" },
        { name: "Student Handbook", path: "/resources/handbook" },
        { name: "Forms & Documents", path: "/resources/forms" },
        { name: "News & Updates", path: "/resources/news" }
      ]
    }
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      url: schoolConfig.social.facebook, 
      icon: <Facebook className="h-5 w-5" /> 
    },
    { 
      name: "Twitter", 
      url: schoolConfig.social.twitter, 
      icon: <Twitter className="h-5 w-5" /> 
    },
    { 
      name: "Instagram", 
      url: schoolConfig.social.instagram, 
      icon: <Instagram className="h-5 w-5" /> 
    },
    { 
      name: "YouTube", 
      url: schoolConfig.social.youtube, 
      icon: <Youtube className="h-5 w-5" /> 
    },
    { 
      name: "LinkedIn", 
      url: schoolConfig.social.linkedin, 
      icon: <Linkedin className="h-5 w-5" /> 
    }
  ].filter(link => link.url);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className={`${
      theme === "dark" ? "bg-black" : "bg-white"
    } relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Newsletter Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 border-b ${
        theme === 'dark' ? 'border-white/10' : 'border-black/10'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 md:p-12 text-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-white/10' 
                : 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-black/10'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Stay Connected with {schoolConfig.shortName}
            </h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Get the latest updates on school events, academic achievements, and important announcements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`flex-1 px-4 py-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/20 text-white placeholder-white/50' 
                    : 'bg-black/5 border-black/20 text-black placeholder-black/50'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          >
            {/* School Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img
                  src={schoolConfig.logo}
                  alt={schoolConfig.name}
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <GraduationCap className="h-12 w-12 text-primary-500 hidden" />
                <div>
                  <span className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}>
                    {schoolConfig.name}
                  </span>
                  <div className={`text-sm ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
                  }`}>
                    {schoolConfig.tagline}
                  </div>
                </div>
              </Link>

              <p className={`mb-6 leading-relaxed ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              }`}>
                {schoolConfig.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary-500 mr-3" />
                  <a 
                    href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
                    className={`hover:text-primary-500 transition-colors ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}
                  >
                    {schoolConfig.phone.primary}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-primary-500 mr-3" />
                  <a 
                    href={`mailto:${schoolConfig.email.primary}`}
                    className={`hover:text-primary-500 transition-colors ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}
                  >
                    {schoolConfig.email.primary}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <address className={`not-italic ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}>
                    {schoolConfig.address.street}<br />
                    {schoolConfig.address.city}, {schoolConfig.address.state}<br />
                    {schoolConfig.address.country}
                  </address>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-black/10 hover:bg-black/20 text-black'
                    }`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <motion.div key={key} variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded-lg mr-3 ${
                    theme === 'dark' ? 'bg-primary-500/20' : 'bg-primary-500/20'
                  }`}>
                    {section.icon}
                  </div>
                  <h4 className={`font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}>
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`hover:text-primary-500 transition-colors ${
                          theme === "dark"
                            ? "text-white/70 hover:text-white"
                            : "text-black/70 hover:text-black"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* School Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mt-16 p-8 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-black/5 border-black/10'
            } border`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-primary-500 mr-2" />
                  <h4 className={`font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}>
                    School Hours
                  </h4>
                </div>
                <div className="space-y-2">
                  {Object.entries(schoolConfig.hours).map(([day, hours]) => (
                    hours && (
                      <div key={day} className="flex justify-between">
                        <span className={`capitalize ${
                          theme === 'dark' ? 'text-white/70' : 'text-black/70'
                        }`}>
                          {day}
                        </span>
                        <span className={`${
                          theme === 'dark' ? 'text-white/70' : 'text-black/70'
                        }`}>
                          {hours}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}>
                  Quick Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Established
                    </span>
                    <span className="text-primary-500 font-semibold">
                      {schoolConfig.established}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Students
                    </span>
                    <span className="text-primary-500 font-semibold">
                      1,200+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Teachers
                    </span>
                    <span className="text-primary-500 font-semibold">
                      85+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      Success Rate
                    </span>
                    <span className="text-primary-500 font-semibold">
                      98%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}>
                  Curriculum
                </h4>
                <div className="space-y-2">
                  {schoolConfig.curriculum.map((curr, index) => (
                    <div key={index} className={`text-sm ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      {curr}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}>
                  Recognition
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      Top School Award 2023
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      Excellence in Education
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      Cambridge Accredited
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className={`mt-16 pt-8 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-black/10'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className={`text-sm ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              }`}>
                © {currentYear} {schoolConfig.name}. All rights reserved.
                <span className="ml-4">
                  Reg. No: {schoolConfig.address.postalCode}
                </span>
              </div>

              <div className="flex space-x-6 text-sm">
                <Link
                  to="/privacy"
                  className={`hover:text-primary-500 transition-colors ${
                    theme === "dark"
                      ? "text-white/60 hover:text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className={`hover:text-primary-500 transition-colors ${
                    theme === "dark"
                      ? "text-white/60 hover:text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className={`hover:text-primary-500 transition-colors ${
                    theme === "dark"
                      ? "text-white/60 hover:text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* School Motto */}
            <div className="text-center mt-8">
              <p className={`text-lg font-medium italic ${
                theme === 'dark' ? 'text-white/80' : 'text-black/80'
              }`}>
                "{schoolConfig.tagline}"
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default MegaFooter;