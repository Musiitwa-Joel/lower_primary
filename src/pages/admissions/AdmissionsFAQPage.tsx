import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  FileText,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "requirements" | "fees" | "process" | "scholarships";
  popular: boolean;
}

interface AdmissionsFAQPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AdmissionsFAQPage: React.FC<AdmissionsFAQPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "What are the admission requirements for S1?",
      answer: `For S1 admission to ${schoolConfig.name}, students need: (1) Primary Leaving Examination (PLE) certificate with a minimum aggregate of 12 points, (2) Good performance in English and Mathematics, (3) Completed application form with all required documents, (4) Birth certificate and passport photos, (5) Medical certificate from a registered doctor, and (6) Character reference from previous school. Students will also need to attend an entrance interview and assessment test.`,
      category: "requirements",
      popular: true,
    },
    {
      id: "2",
      question: "How much are the school fees?",
      answer: `Our fee structure varies by grade level: S1-S2: UGX 800,000 (day) / UGX 1,200,000 (boarding) per term; S3-S4: UGX 900,000 (day) / UGX 1,300,000 (boarding) per term; S5-S6: UGX 1,000,000 (day) / UGX 1,400,000 (boarding) per term. Additional fees include registration (UGX 50,000), uniform (UGX 150,000), books (UGX 200,000), and optional services like transport and meals. We offer flexible payment plans and scholarship opportunities.`,
      category: "fees",
      popular: true,
    },
    {
      id: "3",
      question: "What scholarships are available?",
      answer: `We offer several scholarship programs: (1) Academic Excellence Scholarship - 100% tuition coverage for top performers, (2) Sports Excellence Bursary - 50% coverage for talented athletes, (3) Need-Based Financial Aid - up to 75% coverage for families with financial need, (4) Leadership Development Grant - 40% coverage for student leaders, and (5) Creative Arts Scholarship - 30% coverage for artistically talented students. Each has specific eligibility criteria and application requirements.`,
      category: "scholarships",
      popular: true,
    },
    {
      id: "4",
      question: "When do applications open and close?",
      answer: `Applications for the 2024-25 academic year opened on January 15, 2024. Key deadlines: Early Decision - March 15, 2024; Regular Decision - May 15, 2024; Scholarship Applications - varies by program (February 28 - April 1, 2024); Entrance Exams - June 1-15, 2024; Final Enrollment - July 15, 2024. We recommend applying early as spaces are limited.`,
      category: "process",
      popular: true,
    },
    {
      id: "5",
      question: "Can I transfer from another school?",
      answer: `Yes, we accept transfer students for grades S2-S6, subject to space availability. Transfer requirements include: (1) Academic transcripts from previous school, (2) Transfer certificate, (3) Good conduct record, (4) Placement test in core subjects, (5) Interview assessment, and (6) Previous school recommendation. Transfer students may need to complete bridging courses depending on curriculum differences.`,
      category: "requirements",
      popular: false,
    },
    {
      id: "6",
      question: "What payment methods do you accept?",
      answer: `We accept multiple payment methods for your convenience: (1) Mobile Money (MTN, Airtel) - 1.5% processing fee, (2) Bank Transfer - no processing fee, (3) Credit/Debit Cards (Visa, Mastercard) - 2.5% processing fee, (4) Cash payments at our accounts office. We also offer flexible payment plans: annual (5% discount), termly (most popular), and monthly installments.`,
      category: "fees",
      popular: false,
    },
    {
      id: "7",
      question: "Do you offer campus tours?",
      answer: `Yes! We offer multiple tour options: (1) Virtual Campus Tour - available 24/7 online with 360° views, (2) Personal Guided Tours - one-on-one with admissions counselor (Mon-Fri, 9AM-4PM), (3) Group Tours - for families and groups (Saturdays, 10AM & 2PM), and (4) Self-Guided Tours - explore at your own pace (Mon-Sat, 8AM-5PM). All tours are free and can be booked online or by calling our admissions office.`,
      category: "general",
      popular: false,
    },
    {
      id: "8",
      question: "What is the student-teacher ratio?",
      answer: `We maintain a low student-teacher ratio of 15:1 to ensure personalized attention and quality education. Our maximum class size is 25 students, and we have over 85 qualified teachers with advanced degrees. This allows for individualized instruction, better classroom management, and stronger teacher-student relationships that support academic success.`,
      category: "general",
      popular: false,
    },
    {
      id: "9",
      question: "Are there entrance exams?",
      answer: `Yes, entrance exams are required for most grade levels: (1) S1 applicants take assessment tests in English and Mathematics, (2) Transfer students (S2-S4) take placement tests in core subjects, (3) S5 applicants may need subject-specific assessments based on their chosen A-level combination. Exams are typically held in June, with specific dates communicated after application submission. Practice materials are available on our website.`,
      category: "process",
      popular: false,
    },
    {
      id: "10",
      question: "What curriculum do you follow?",
      answer: `We offer both Cambridge International Curriculum and Uganda National Curriculum. Students can choose: (1) Cambridge IGCSE (S1-S4) and A-Levels (S5-S6) for international recognition, or (2) Uganda National Curriculum aligned with UNEB examinations. Both curricula maintain high academic standards and prepare students for university admission locally and internationally.`,
      category: "general",
      popular: false,
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Questions",
      icon: <HelpCircle className="h-4 w-4" />,
    },
    { id: "general", name: "General", icon: <Users className="h-4 w-4" /> },
    {
      id: "requirements",
      name: "Requirements",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "fees",
      name: "Fees & Payment",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: "process",
      name: "Application Process",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      id: "scholarships",
      name: "Scholarships",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter((faq) => faq.popular);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Admissions FAQ | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Frequently asked questions about admissions to ${schoolConfig.name}. Get answers about requirements, fees, scholarships, and the application process.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
            alt="FAQ"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-r from-black/90 to-black/70"
                : "bg-gradient-to-r from-white/90 to-white/70"
            }`}
          />
        </div>

        <div
          className="max-w-7xl mx-auto relative"
          style={{ marginTop: "6rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Get Answers
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Admissions <span className="text-primary-500">FAQ</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Find answers to the most common questions about joining{" "}
              {schoolConfig.name}. Can't find what you're looking for? Contact
              our admissions team.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="relative">
              <Search className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl border ${
                  theme === "dark"
                    ? "bg-white/10 border-white/20 text-white placeholder-white/50"
                    : "bg-black/10 border-black/20 text-black placeholder-black/50"
                } focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-xl`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Most Popular Questions
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              }`}
            >
              Quick answers to the questions we hear most often
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border transition-all duration-300 hover:scale-105 cursor-pointer`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-3`}
                    >
                      {faq.question}
                    </h3>
                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p
                            className={`${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            } leading-relaxed`}
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button className="ml-4 p-1">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-500" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white scale-105"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* All FAQs */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border backdrop-blur-xl`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center flex-1">
                    <div
                      className={`p-2 rounded-lg mr-4 ${
                        theme === "dark" ? "bg-white/10" : "bg-black/10"
                      }`}
                    >
                      <HelpCircle className="h-5 w-5 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {faq.question}
                      </h3>
                      {faq.popular && (
                        <span className="inline-block mt-1 px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div
                        className={`pl-16 ${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        } leading-relaxed`}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle
                className={`h-16 w-16 mx-auto mb-4 ${
                  theme === "dark" ? "text-white/50" : "text-black/50"
                }`}
              />
              <h3
                className={`text-xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-2`}
              >
                No questions found
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                Try adjusting your search terms or browse different categories
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
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
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Still Have Questions?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Our admissions team is ready to help you with personalized
                answers and guidance through the application process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  } backdrop-blur-xl`}
                >
                  <Phone className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    Call Us
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-3`}
                  >
                    Speak directly with our admissions team
                  </p>
                  <a
                    href={`tel:${schoolConfig.phone.primary.replace(
                      /\D/g,
                      ""
                    )}`}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    {schoolConfig.phone.primary}
                  </a>
                </div>

                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  } backdrop-blur-xl`}
                >
                  <Mail className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    Email Us
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-3`}
                  >
                    Get detailed answers via email
                  </p>
                  <a
                    href={`mailto:${schoolConfig.email.admissions}`}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    {schoolConfig.email.admissions}
                  </a>
                </div>

                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  } backdrop-blur-xl`}
                >
                  <MessageCircle className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    Live Chat
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-3`}
                  >
                    Chat with our AI assistant
                  </p>
                  <button className="text-primary-500 hover:text-primary-600 font-medium">
                    Start Chat
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center">
                  Contact Admissions Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Campus Visit
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

export default AdmissionsFAQPage;
