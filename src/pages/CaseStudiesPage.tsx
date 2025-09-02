import type React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  BookOpen,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

interface CaseStudiesPageProps {
  theme: string;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ theme }) => {
  const caseStudies = [
    {
      title: "Nkumba University",
      category: "Private University",
      description:
        "How Nkumba University revolutionized their student management system and increased enrollment efficiency by 85% using Tredumo's comprehensive platform.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      results: [
        "85% increase in enrollment processing efficiency",
        "52% reduction in administrative workload",
        "94% student satisfaction rating",
        "UGX 2.8B in operational cost savings over 2 years",
      ],
      illustration: (
        <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
          <Users className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Makerere University",
      category: "Public University",
      description:
        "Uganda's premier university implemented Tredumo to manage 40,000+ students across multiple campuses and improve academic excellence.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
      results: [
        "Unified management for 40,000+ students",
        "38% improvement in course registration efficiency",
        "45% increase in research collaboration",
        "25% improvement in graduation rates",
      ],
      illustration: (
        <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Uganda Christian University",
      category: "Private Christian University",
      description:
        "UCU leveraged Tredumo's analytics to personalize learning paths and improve student spiritual and academic development.",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80",
      results: [
        "Personalized learning paths for 8,000+ students",
        "42% improvement in course completion rates",
        "55% increase in student engagement",
        "4.7/5 average course satisfaction rating",
      ],
      illustration: (
        <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
          <Award className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Kyambogo University",
      category: "Public University",
      description:
        "Kyambogo University implemented Tredumo to streamline technical and vocational education programs across multiple disciplines.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d2b11a0c07d?auto=format&fit=crop&q=80",
      results: [
        "Managed 200+ technical programs efficiently",
        "67% improvement in practical skills tracking",
        "48% reduction in administrative overhead",
        "3.2x increase in industry partnerships",
      ],
      illustration: (
        <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Mbarara University of Science & Technology",
      category: "Public University",
      description:
        "MUST used Tredumo to enhance medical education programs and improve healthcare training outcomes across East Africa.",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80",
      results: [
        "Enhanced medical training for 5,000+ students",
        "99.8% clinical rotation scheduling accuracy",
        "72% improvement in practical assessment tracking",
        "4.8/5 medical program satisfaction rating",
      ],
      illustration: (
        <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
          <Users className="h-6 w-6 text-white" />
        </div>
      ),
    },
    {
      title: "Kisubi Brothers University",
      category: "Private Catholic University",
      description:
        "Kisubi Brothers University scaled their operations while maintaining their commitment to holistic education using Tredumo's integrated platform.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      results: [
        "Scaled to 12,000+ students across multiple programs",
        "99.5% platform uptime during peak periods",
        "63% improvement in student retention rates",
        "4.6/5 overall institutional satisfaction rating",
      ],
      illustration: (
        <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={`${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
      <Helmet>
        <title>Case Studies | Real Impact Stories from Tredumo</title>
        <meta
          name="description"
          content="Explore real-world case studies showcasing how Tredumo is transforming education across Uganda. See how schools are using Tredumo to improve management, payments, and learning outcomes."
        />
        <meta
          name="keywords"
          content="Tredumo case studies, EdTech success stories, school transformation Uganda, education technology results, digital learning impact, Uganda school solutions"
        />
        <meta
          property="og:title"
          content="Case Studies | Real Impact Stories from Tredumo"
        />
        <meta
          property="og:description"
          content="Discover how schools in Uganda are benefiting from Tredumo’s innovative education technology solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/case-studies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Case Studies | Real Impact Stories from Tredumo"
        />
        <meta
          name="twitter:description"
          content="Discover how schools in Uganda are benefiting from Tredumo’s innovative education technology solutions."
        />
        <link rel="canonical" href="https://tredumo.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Success stories from
              <br />
              <span className="text-[#8a87d8]">
                leading Ugandan institutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Discover how Uganda's top universities are transforming education
              with Tredumo's innovative platform.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Featured Case Study */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span
                    className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
                  >
                    Featured Case Study
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    Nkumba University
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } mb-6 text-lg leading-relaxed`}
                  >
                    Nkumba University implemented Tredumo to revolutionize their
                    student management system, resulting in an 85% increase in
                    enrollment processing efficiency and significant operational
                    cost savings.
                  </p>

                  <div className="mb-8">
                    <h4
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } uppercase mb-3`}
                    >
                      Key Results
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "85% increase in enrollment processing efficiency",
                        "52% reduction in administrative workload",
                        "94% student satisfaction rating",
                        "UGX 2.8B in operational cost savings over 2 years",
                      ].map((result, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight
                            className={`h-5 w-5 text-[#8a87d8] mr-3 flex-shrink-0 mt-0.5`}
                          />
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center text-[#8a87d8] font-medium group`}
                  >
                    Read the full case study
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>

                <div className="h-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                    alt="Nkumba University Case Study"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#8a87d8] rounded-lg p-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              More Success Stories
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Transforming education
              <br />
              <span className="text-[#8a87d8]">across Uganda</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.slice(1).map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-3xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 hover:bg-[#8a87d8]/10 border-[#8a87d8]/10 hover:border-[#8a87d8]/20"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] overflow-hidden group`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  {caseStudy.illustration}
                </div>
                <div className="p-8">
                  <span
                    className={`text-xs font-medium tracking-widest ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase`}
                  >
                    {caseStudy.category}
                  </span>
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-2 mb-3`}
                  >
                    {caseStudy.title}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } text-sm mb-4 leading-relaxed`}
                  >
                    {caseStudy.description}
                  </p>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center text-sm text-[#8a87d8] font-medium group`}
                  >
                    Read case study
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              The Impact
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Real results from
              <br />
              <span className="text-[#8a87d8]">real institutions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                metric: "50+",
                description: "Ugandan educational institutions using Tredumo",
              },
              {
                metric: "75%",
                description: "Average increase in administrative efficiency",
              },
              {
                metric: "180K+",
                description: "Students managed through our platform in Uganda",
              },
              {
                metric: "94%",
                description:
                  "Customer satisfaction rating from Ugandan institutions",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                    : "bg-black/5 border-black/10"
                } backdrop-blur-xl border text-center transition-all duration-300 hover:scale-[1.02]`}
              >
                <p className={`text-4xl font-bold text-[#8a87d8] mb-3`}>
                  {stat.metric}
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } leading-relaxed`}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <span
                className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
              >
                Ready to join them?
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Become our next success story
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8 text-lg leading-relaxed`}
              >
                Join Uganda's leading educational institutions that have
                transformed their operations with Tredumo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                      : "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Schedule a Demo
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
