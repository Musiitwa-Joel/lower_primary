import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  Award,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface MegaNavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const MegaNavbar: React.FC<MegaNavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const schoolConfig = getCurrentSchoolConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const megaMenuItems = {
    academics: {
      title: "Academics",
      sections: [
        {
          title: "Curriculum",
          links: [
            { name: "Primary School", path: "/academics/primary" },
            { name: "Secondary School", path: "/academics/secondary" },
            { name: "A-Level Programs", path: "/academics/a-level" },
            { name: "International Programs", path: "/academics/international" }
          ]
        },
        {
          title: "Subjects",
          links: [
            { name: "Sciences", path: "/academics/sciences" },
            { name: "Mathematics", path: "/academics/mathematics" },
            { name: "Languages", path: "/academics/languages" },
            { name: "Arts & Humanities", path: "/academics/arts" }
          ]
        },
        {
          title: "Resources",
          links: [
            { name: "Digital Library", path: "/academics/library" },
            { name: "Online Learning", path: "/academics/online" },
            { name: "Study Materials", path: "/academics/materials" },
            { name: "Exam Preparation", path: "/academics/exams" }
          ]
        }
      ],
      featured: {
        title: "Featured Program",
        description: "Cambridge International Curriculum",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
        link: "/academics/cambridge"
      }
    },
    admissions: {
      title: "Admissions",
      sections: [
        {
          title: "Apply",
          links: [
            { name: "Online Application", path: "/admissions/apply" },
            { name: "Requirements", path: "/admissions/requirements" },
            { name: "Entrance Exams", path: "/admissions/exams" },
            { name: "Transfer Students", path: "/admissions/transfer" }
          ]
        },
        {
          title: "Financial Aid",
          links: [
            { name: "Scholarships", path: "/admissions/scholarships" },
            { name: "Bursaries", path: "/admissions/bursaries" },
            { name: "Payment Plans", path: "/admissions/payment-plans" },
            { name: "Fee Structure", path: "/admissions/fees" }
          ]
        },
        {
          title: "Support",
          links: [
            { name: "Admissions FAQ", path: "/admissions/faq" },
            { name: "Campus Tours", path: "/admissions/tours" },
            { name: "Contact Admissions", path: "/admissions/contact" },
            { name: "Important Dates", path: "/admissions/dates" }
          ]
        }
      ],
      featured: {
        title: "Apply Now",
        description: "Start your journey with us today",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
        link: "/admissions/apply"
      }
    },
    student_life: {
      title: "Student Life",
      sections: [
        {
          title: "Activities",
          links: [
            { name: "Sports & Athletics", path: "/student-life/sports" },
            { name: "Clubs & Societies", path: "/student-life/clubs" },
            { name: "Arts & Culture", path: "/student-life/arts" },
            { name: "Community Service", path: "/student-life/community" }
          ]
        },
        {
          title: "Facilities",
          links: [
            { name: "Boarding Houses", path: "/student-life/boarding" },
            { name: "Dining Services", path: "/student-life/dining" },
            { name: "Health Center", path: "/student-life/health" },
            { name: "Transportation", path: "/student-life/transport" }
          ]
        },
        {
          title: "Support",
          links: [
            { name: "Counseling Services", path: "/student-life/counseling" },
            { name: "Academic Support", path: "/student-life/academic-support" },
            { name: "Career Guidance", path: "/student-life/career" },
            { name: "Mental Wellness", path: "/student-life/wellness" }
          ]
        }
      ],
      featured: {
        title: "Campus Life",
        description: "Experience our vibrant community",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
        link: "/student-life/overview"
      }
    },
    about: {
      title: "About",
      sections: [
        {
          title: "Our School",
          links: [
            { name: "Our Story", path: "/about/story" },
            { name: "Mission & Vision", path: "/about/mission" },
            { name: "Leadership Team", path: "/about/leadership" },
            { name: "School Values", path: "/about/values" }
          ]
        },
        {
          title: "Faculty",
          links: [
            { name: "Teaching Staff", path: "/about/teachers" },
            { name: "Administrative Staff", path: "/about/admin" },
            { name: "Support Staff", path: "/about/support" },
            { name: "Board of Directors", path: "/about/board" }
          ]
        },
        {
          title: "Recognition",
          links: [
            { name: "Awards & Achievements", path: "/about/awards" },
            { name: "Accreditations", path: "/about/accreditations" },
            { name: "Partnerships", path: "/about/partnerships" },
            { name: "Alumni Success", path: "/about/alumni" }
          ]
        }
      ],
      featured: {
        title: "Our Heritage",
        description: `Serving ${schoolConfig.address.city} since ${schoolConfig.established}`,
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400",
        link: "/about/heritage"
      }
    }
  };

  const quickLinks = [
    { name: "Student Portal", path: "/portal", icon: <Users className="h-4 w-4" /> },
    { name: "Events", path: "/events", icon: <Calendar className="h-4 w-4" /> },
    { name: "News", path: "/news", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="h-4 w-4" /> }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-black/90 backdrop-blur-xl shadow-lg"
            : "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b ${
        theme === 'dark' ? 'border-white/10' : 'border-black/10'
      } ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2 text-primary-500" />
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
                <Mail className="h-3 w-3 mr-2 text-primary-500" />
                <a 
                  href={`mailto:${schoolConfig.email.primary}`}
                  className={`hover:text-primary-500 transition-colors ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}
                >
                  {schoolConfig.email.primary}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center hover:text-primary-500 transition-colors ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}
                >
                  {link.icon}
                  <span className="ml-1 hidden sm:inline">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={schoolConfig.logo}
                alt={schoolConfig.name}
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <GraduationCap className="h-12 w-12 text-primary-500 hidden" />
              <div>
                <span className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}>
                  {schoolConfig.shortName}
                </span>
                <div className={`text-xs ${
                  theme === "dark" ? "text-white/60" : "text-black/60"
                }`}>
                  {schoolConfig.tagline}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(megaMenuItems).map(([key, item]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 py-2 transition-colors ${
                    theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-black/80 hover:text-black"
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    activeDropdown === key ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl ${
                        theme === 'dark' 
                          ? 'bg-black/95 border-white/10' 
                          : 'bg-white/95 border-black/10'
                      } backdrop-blur-xl border rounded-2xl shadow-2xl p-8`}
                    >
                      <div className="grid grid-cols-4 gap-8">
                        {/* Menu Sections */}
                        {item.sections.map((section, index) => (
                          <div key={index}>
                            <h3 className={`font-semibold mb-4 ${
                              theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.links.map((link) => (
                                <li key={link.path}>
                                  <Link
                                    to={link.path}
                                    className={`block hover:text-primary-500 transition-colors ${
                                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                                    }`}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Featured Section */}
                        <div className={`p-6 rounded-xl ${
                          theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                        }`}>
                          <img
                            src={item.featured.image}
                            alt={item.featured.title}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <h3 className={`font-semibold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                          }`}>
                            {item.featured.title}
                          </h3>
                          <p className={`text-sm mb-4 ${
                            theme === 'dark' ? 'text-white/70' : 'text-black/70'
                          }`}>
                            {item.featured.description}
                          </p>
                          <Link
                            to={item.featured.link}
                            className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/admissions/apply"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden ${
                theme === "dark"
                  ? "bg-black/95 border-white/10"
                  : "bg-white/95 border-black/10"
              } backdrop-blur-xl border-t rounded-b-2xl p-6 space-y-6`}
            >
              {/* Mobile Quick Contact */}
              <div className={`p-4 rounded-xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
              }`}>
                <h3 className={`font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Quick Contact
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary-500 mr-2" />
                    <a 
                      href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
                      className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}
                    >
                      {schoolConfig.phone.primary}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {schoolConfig.address.city}, {schoolConfig.address.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              {Object.entries(megaMenuItems).map(([key, item]) => (
                <div key={key}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                    className={`flex items-center justify-between w-full py-2 ${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium`}
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 space-y-4"
                      >
                        {item.sections.map((section, index) => (
                          <div key={index}>
                            <h4 className={`text-sm font-medium mb-2 ${
                              theme === 'dark' ? 'text-white/80' : 'text-black/80'
                            }`}>
                              {section.title}
                            </h4>
                            <ul className="space-y-2 ml-4">
                              {section.links.map((link) => (
                                <li key={link.path}>
                                  <Link
                                    to={link.path}
                                    className={`block text-sm hover:text-primary-500 transition-colors ${
                                      theme === 'dark' ? 'text-white/60' : 'text-black/60'
                                    }`}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/admissions/apply"
                className="block w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full text-center transition-all duration-300 font-medium"
              >
                Apply Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default MegaNavbar;