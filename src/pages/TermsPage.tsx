import type React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Download,
  FileText,
  Shield,
  AlertTriangle,
  HelpCircle,
  Scale,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

interface TermsPageProps {
  theme: string;
}

const TermsPage: React.FC<TermsPageProps> = ({ theme }) => {
  const lastUpdated = "December 15, 2024";

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
        <title>Terms of Service | Tredumo Uganda</title>
        <meta
          name="description"
          content="Review Tredumo's Terms of Service for Uganda. Learn about your rights and responsibilities when using our education management platform in compliance with Ugandan law."
        />
        <meta
          name="keywords"
          content="Uganda terms of service, education platform terms, Tredumo legal agreement, Uganda education technology, user agreement"
        />
        <meta property="og:title" content="Terms of Service | Tredumo Uganda" />
        <meta
          property="og:description"
          content="Review Tredumo's Terms of Service for Uganda. Learn about your rights and responsibilities when using our education management platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/terms" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terms of Service | Tredumo Uganda"
        />
        <meta
          name="twitter:description"
          content="Review Tredumo's Terms of Service for Uganda. Learn about your rights and responsibilities when using our education management platform."
        />
        <link rel="canonical" href="https://tredumo.com/terms" />
      </Helmet>

      <style>{`
        .feature-card {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(138, 135, 216, 0.3),
            rgba(165, 163, 224, 0.2),
            rgba(193, 191, 234, 0.1)
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .prose h2 {
          color: #8a87d8;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.75rem;
        }

        .prose h3 {
          color: ${theme === "dark" ? "#ffffff" : "#000000"};
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.35rem;
        }

        .prose h4 {
          color: ${theme === "dark" ? "#ffffff" : "#000000"};
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 1.15rem;
        }

        .prose p {
          color: ${
            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"
          };
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .prose ul {
          color: ${
            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"
          };
          margin-bottom: 1rem;
          list-style-type: disc;
          padding-left: 1.5rem;
        }

        .prose ol {
          color: ${
            theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"
          };
          margin-bottom: 1rem;
          list-style-type: decimal;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .prose strong {
          color: #8a87d8;
          font-weight: 600;
        }

        .prose a {
          color: #8a87d8;
          text-decoration: underline;
          transition: all 0.2s ease;
        }

        .prose a:hover {
          opacity: 0.8;
        }

        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }

        .prose table th {
          background: ${
            theme === "dark"
              ? "rgba(138, 135, 216, 0.2)"
              : "rgba(138, 135, 216, 0.1)"
          };
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          color: ${theme === "dark" ? "#ffffff" : "#000000"};
        }

        .prose table td {
          padding: 0.75rem;
          border-bottom: 1px solid
            ${
              theme === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)"
            };
        }

        .prose blockquote {
          border-left: 4px solid #8a87d8;
          padding-left: 1rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: ${
            theme === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"
          };
        }
      `}</style>

      {/* Hero Section */}
      <section
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              Legal Agreement
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Terms of Service
              <br />
              <span className="text-[#8a87d8]">and User Agreement</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto leading-relaxed`}
            >
              Effective for all Tredumo services in Uganda and East Africa
              <br />
              <span className="text-sm mt-2 block">
                Last updated: {lastUpdated}
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
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
            } backdrop-blur-xl border p-12 md:p-16 relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span
                  className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase mb-4 block`}
                >
                  Introduction
                </span>
                <h3
                  className={`text-4xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-6 tracking-tight`}
                >
                  Please read these terms carefully
                </h3>

                <div
                  className={`space-y-6 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-lg leading-relaxed`}
                >
                  <p>
                    These Terms of Service ("Terms") govern your access to and
                    use of Tredumo's website, mobile applications, and other
                    online products and services (collectively, the "Services")
                    in Uganda and East Africa.
                  </p>
                  <p>
                    By accessing or using our Services, you agree to be bound by
                    these Terms. If you do not agree to these Terms, you may not
                    access or use the Services.
                  </p>
                  <p>
                    If you have any questions about these Terms, please contact
                    us at{" "}
                    <span className="text-[#8a87d8] font-medium">
                      legal@tredumo.ug
                    </span>
                    .
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: <FileText className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Legal Agreement",
                    description:
                      "These Terms form a legally binding agreement between you and Tredumo Uganda.",
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Data Protection",
                    description:
                      "We protect your data in accordance with Uganda's Data Protection and Privacy Act.",
                  },
                  {
                    icon: <AlertTriangle className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Compliance",
                    description:
                      "Using our Services requires compliance with these Terms and Ugandan laws.",
                  },
                  {
                    icon: <HelpCircle className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Support",
                    description:
                      "Our Kampala-based support team is available to help with any questions.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`feature-card p-6 rounded-2xl ${
                      theme === "dark"
                        ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                        : "bg-black/5 border-black/5"
                    } backdrop-blur-xl border`}
                  >
                    <div
                      className={`p-3 rounded-xl inline-block ${
                        theme === "dark" ? "bg-[#8a87d8]/10" : "bg-[#8a87d8]/10"
                      } mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } text-sm leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              Key Points
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Important highlights
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Scale className="h-8 w-8 text-[#8a87d8]" />,
                title: "Ugandan Law",
                description:
                  "These Terms are governed by the laws of Uganda, including the Electronic Transactions Act and the Data Protection and Privacy Act.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-[#8a87d8]" />,
                title: "Educational Context",
                description:
                  "Our Services are designed for educational institutions in Uganda and comply with the Education Act and relevant Ministry of Education guidelines.",
              },
              {
                icon: <FileText className="h-8 w-8 text-[#8a87d8]" />,
                title: "Local Dispute Resolution",
                description:
                  "Any disputes will be resolved through mediation in Kampala before proceeding to the Commercial Division of the High Court of Uganda.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card p-8 rounded-2xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border`}
              >
                <div
                  className={`p-4 rounded-xl inline-block ${
                    theme === "dark" ? "bg-[#8a87d8]/10" : "bg-[#8a87d8]/10"
                  } mb-6`}
                >
                  {item.icon}
                </div>
                <div
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {item.title}
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } leading-relaxed`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-8 md:p-12 relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <h2
                className={`text-2xl md:text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Table of Contents
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ol
                  className={`list-decimal pl-5 space-y-2 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  }`}
                >
                  <li>
                    <a
                      href="#acceptance"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Acceptance of Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#changes"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Changes to Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#accounts"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Account Registration and Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subscription"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Subscription and Payment Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#user-content"
                      className="text-[#8a87d8] hover:underline"
                    >
                      User Content
                    </a>
                  </li>
                  <li>
                    <a
                      href="#prohibited"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Prohibited Conduct
                    </a>
                  </li>
                  <li>
                    <a
                      href="#intellectual"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Intellectual Property Rights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#third-party"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Third-Party Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#availability"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Service Availability
                    </a>
                  </li>
                  <li>
                    <a
                      href="#termination"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Termination
                    </a>
                  </li>
                </ol>
                <ol
                  start={12}
                  className={`list-decimal pl-5 space-y-2 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  }`}
                >
                  <li>
                    <a
                      href="#disclaimers"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Disclaimer of Warranties
                    </a>
                  </li>
                  <li>
                    <a
                      href="#limitation"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Limitation of Liability
                    </a>
                  </li>
                  <li>
                    <a
                      href="#indemnification"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Indemnification
                    </a>
                  </li>
                  <li>
                    <a
                      href="#governing-law"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Governing Law and Jurisdiction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dispute-resolution"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Dispute Resolution
                    </a>
                  </li>
                  <li>
                    <a
                      href="#force-majeure"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Force Majeure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#uganda-specific"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Uganda-Specific Provisions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#miscellaneous"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Miscellaneous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-[#8a87d8] hover:underline"
                    >
                      Contact Information
                    </a>
                  </li>
                </ol>
              </div>

              <div
                className={`mt-8 p-4 rounded-xl ${
                  theme === "dark" ? "bg-[#8a87d8]/10" : "bg-[#8a87d8]/10"
                } text-center`}
              >
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-sm`}
                >
                  These Terms of Service were last updated on{" "}
                  <strong>{lastUpdated}</strong> and apply to all users of
                  Tredumo services in Uganda and East Africa.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`prose max-w-none ${
              theme === "dark" ? "prose-invert" : ""
            }`}
          >
            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding
              agreement between you ("User," "you," or "your") and Tredumo
              Uganda Limited ("Tredumo," "we," "us," or "our") regarding your
              access to and use of our education management platform, website,
              mobile applications, and related services (collectively, the
              "Services").
            </p>

            <p>
              By accessing, browsing, or using our Services in any manner, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and our{" "}
              <Link to="/privacy" className="text-[#8a87d8] hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated herein by reference. If you do not agree
              to these Terms, you must not access or use our Services.
            </p>

            <h3>1.1 Eligibility</h3>
            <p>You may use our Services only if you:</p>
            <ul>
              <li>
                Are at least 18 years old and have the legal capacity to enter
                into these Terms under Ugandan law
              </li>
              <li>
                Are using the Services on behalf of an educational institution
                and have the authority to bind that organization to these Terms
              </li>
              <li>
                Are a student whose educational institution has authorized your
                use of the Services
              </li>
              <li>
                Are not prohibited from using the Services under applicable laws
                or regulations
              </li>
            </ul>

            <h3>1.2 Institutional Users</h3>
            <p>
              If you are using our Services on behalf of an educational
              institution, you represent and warrant that you have the authority
              to bind that institution to these Terms. In such cases, "you" and
              "your" will refer to both you as an individual and the institution
              you represent.
            </p>

            <h3>1.3 Student Users</h3>
            <p>
              If you are a student under 18 years of age, your use of the
              Services must be authorized by your educational institution and,
              where required by law, by your parent or guardian. Your
              institution is responsible for obtaining any necessary consents
              for your use of the Services.
            </p>

            <h2 id="changes">2. Changes to Terms</h2>
            <p>
              We reserve the right to modify, update, or replace these Terms at
              any time at our sole discretion. We will provide notice of
              material changes to these Terms by:
            </p>
            <ul>
              <li>Posting the updated Terms on our website</li>
              <li>
                Updating the "Last Updated" date at the beginning of these Terms
              </li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying prominent notices within our Services</li>
              <li>
                Publishing announcements on our official communication channels
              </li>
            </ul>

            <p>
              Your continued use of the Services following the posting of
              revised Terms constitutes your acceptance of the changes. If you
              do not agree to the modified Terms, you must discontinue your use
              of the Services.
            </p>

            <h3>2.1 Notice Period</h3>
            <p>
              For material changes that may adversely affect your rights or
              obligations, we will provide at least 30 days' advance notice
              before the changes take effect, unless immediate changes are
              required for legal, security, or safety reasons.
            </p>

            <h2 id="privacy">3. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our{" "}
              <Link to="/privacy" className="text-[#8a87d8] hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect information
              about you when you use our Services. Our privacy practices comply
              with Uganda's Data Protection and Privacy Act of 2019 and other
              applicable data protection laws.
            </p>

            <p>
              By using our Services, you consent to the collection, use, and
              disclosure of information as described in our Privacy Policy. If
              you do not agree with our privacy practices, you should not use
              our Services.
            </p>

            <h2 id="accounts">4. Account Registration and Security</h2>
            <h3>4.1 Account Creation</h3>
            <p>
              To access certain features of our Services, you may be required to
              create an account. When registering for an account, you agree to:
            </p>
            <ul>
              <li>
                Provide accurate, current, and complete information about
                yourself
              </li>
              <li>
                Maintain and promptly update your account information to keep it
                accurate and complete
              </li>
              <li>Choose a strong password and keep it confidential</li>
              <li>
                Accept responsibility for all activities that occur under your
                account
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
            </ul>

            <h3>4.2 Account Security</h3>
            <p>
              You are responsible for maintaining the security of your account
              credentials. We recommend that you:
            </p>
            <ul>
              <li>
                Use a unique, strong password that you don't use for other
                services
              </li>
              <li>Enable two-factor authentication when available</li>
              <li>
                Log out of your account when using shared or public computers
              </li>
              <li>
                Regularly review your account activity for any suspicious
                behavior
              </li>
            </ul>

            <h3>4.3 Account Suspension and Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account if you
              violate these Terms or engage in conduct that we determine, in our
              sole discretion, to be harmful to other users, our Services, or
              our business interests.
            </p>

            <h2 id="subscription">5. Subscription and Payment Terms</h2>
            <h3>5.1 Subscription Plans</h3>
            <p>
              Tredumo offers various subscription plans with different features,
              limitations, and pricing for Ugandan educational institutions. The
              specific features, limitations, and pricing for each plan are
              described on our website and may be updated from time to time.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Plan Type</th>
                  <th>Student Limit</th>
                  <th>Key Features</th>
                  <th>Price Range (UGX)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Starter</td>
                  <td>Up to 500</td>
                  <td>Basic management, reporting</td>
                  <td>500,000 - 1,000,000/year</td>
                </tr>
                <tr>
                  <td>Professional</td>
                  <td>Up to 2,000</td>
                  <td>Advanced features, integrations</td>
                  <td>1,500,000 - 3,000,000/year</td>
                </tr>
                <tr>
                  <td>Enterprise</td>
                  <td>Unlimited</td>
                  <td>Full platform, custom features</td>
                  <td>Custom pricing</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 Payment Terms</h3>
            <p>
              All fees are stated in Ugandan Shillings (UGX) unless otherwise
              specified. You agree to pay all fees associated with your
              subscription plan. Payment methods accepted include:
            </p>
            <ul>
              <li>
                <strong>Mobile Money:</strong> MTN Mobile Money and Airtel Money
                (preferred for Ugandan institutions)
              </li>
              <li>
                <strong>Bank Transfers:</strong> Direct transfers to our
                accounts with Stanbic Bank Uganda and Equity Bank Uganda
              </li>
              <li>
                <strong>Credit/Debit Cards:</strong> Visa and Mastercard through
                our secure payment processors
              </li>
              <li>
                <strong>Institutional Invoicing:</strong> For enterprise
                customers with approved credit terms
              </li>
            </ul>

            <h3>5.3 Billing and Renewal</h3>
            <p>
              Subscription fees are billed in advance on an annual basis unless
              otherwise agreed. Your subscription will automatically renew for
              successive periods of the same duration unless you cancel before
              the end of the current billing period.
            </p>

            <h3>5.4 Price Changes</h3>
            <p>
              We reserve the right to change our pricing at any time. Price
              changes will not affect your current subscription period but will
              apply to subsequent renewals. We will provide at least 60 days'
              notice of any price increases.
            </p>

            <h3>5.5 Refunds and Cancellations</h3>
            <p>
              Subscription fees are generally non-refundable. However, we may
              provide refunds in the following circumstances:
            </p>
            <ul>
              <li>
                Technical issues that prevent you from using the Services for an
                extended period
              </li>
              <li>Billing errors or unauthorized charges</li>
              <li>
                Cancellation within 30 days of initial subscription (pro-rated
                refund)
              </li>
              <li>Other circumstances at our sole discretion</li>
            </ul>

            <h3>5.6 Free Trials</h3>
            <p>
              We may offer free trials of our Services to eligible educational
              institutions. Free trials are subject to additional terms and
              conditions, which will be provided at the time of trial
              registration.
            </p>

            <h2 id="user-content">6. User Content</h2>
            <h3>6.1 Definition of User Content</h3>
            <p>
              "User Content" means any content, data, information, text,
              graphics, photos, audio, video, documents, or other materials that
              you or other users submit, upload, post, or otherwise make
              available through the Services. This includes but is not limited
              to:
            </p>
            <ul>
              <li>Student records and academic information</li>
              <li>Educational materials and assignments</li>
              <li>Communications and messages</li>
              <li>Profile information and photos</li>
              <li>Comments, feedback, and reviews</li>
            </ul>

            <h3>6.2 Ownership and License</h3>
            <p>
              You retain ownership of your User Content. However, by submitting
              User Content to our Services, you grant us a worldwide,
              non-exclusive, royalty-free, transferable license (with the right
              to sublicense) to use, copy, modify, create derivative works based
              on, distribute, publicly display, publicly perform, and otherwise
              exploit your User Content in connection with operating and
              providing the Services.
            </p>

            <h3>6.3 User Content Responsibilities</h3>
            <p>
              You are solely responsible for your User Content and represent and
              warrant that:
            </p>
            <ul>
              <li>
                You own or have the necessary rights to use and authorize us to
                use your User Content
              </li>
              <li>
                Your User Content does not violate any third party's
                intellectual property rights, privacy rights, or other rights
              </li>
              <li>
                Your User Content complies with these Terms and all applicable
                laws
              </li>
              <li>Your User Content is accurate and not misleading</li>
              <li>
                Your User Content does not contain viruses, malware, or other
                harmful code
              </li>
            </ul>

            <h3>6.4 Content Moderation</h3>
            <p>
              We reserve the right, but have no obligation, to monitor, review,
              and remove User Content that violates these Terms or is otherwise
              objectionable. We may also take action against users who
              repeatedly violate our content policies.
            </p>

            <h3>6.5 Educational Records</h3>
            <p>
              For User Content that constitutes educational records, we will
              handle such content in accordance with applicable educational
              privacy laws, including Uganda's Education Act and our agreements
              with educational institutions.
            </p>

            <h2 id="prohibited">7. Prohibited Conduct</h2>
            <p>
              You agree not to engage in any of the following prohibited
              activities while using our Services:
            </p>

            <h3>7.1 Illegal Activities</h3>
            <ul>
              <li>
                Use the Services for any illegal purpose or in violation of any
                applicable laws or regulations
              </li>
              <li>
                Engage in any activity that promotes or facilitates illegal
                activities
              </li>
              <li>Violate any intellectual property rights of others</li>
              <li>
                Engage in fraud, money laundering, or other financial crimes
              </li>
            </ul>

            <h3>7.2 Harmful Conduct</h3>
            <ul>
              <li>Harass, threaten, intimidate, or harm other users</li>
              <li>
                Post or transmit content that is defamatory, obscene, or
                offensive
              </li>
              <li>
                Engage in cyberbullying or other forms of online harassment
              </li>
              <li>
                Discriminate against others based on race, religion, gender, or
                other protected characteristics
              </li>
            </ul>

            <h3>7.3 Security Violations</h3>
            <ul>
              <li>
                Attempt to gain unauthorized access to our Services or other
                users' accounts
              </li>
              <li>
                Use automated tools to access or interact with our Services
                without permission
              </li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble our
                Services
              </li>
            </ul>

            <h3>7.4 Misuse of Services</h3>
            <ul>
              <li>
                Use the Services for commercial purposes without our written
                consent
              </li>
              <li>Create multiple accounts to evade restrictions or bans</li>
              <li>Share your account credentials with unauthorized persons</li>
              <li>
                Use the Services to spam or send unsolicited communications
              </li>
            </ul>

            <h3>7.5 Academic Integrity</h3>
            <ul>
              <li>
                Use the Services to facilitate academic dishonesty or cheating
              </li>
              <li>Share answers or solutions to assignments inappropriately</li>
              <li>Misrepresent your academic achievements or qualifications</li>
              <li>Violate your institution's academic integrity policies</li>
            </ul>

            <h2 id="intellectual">8. Intellectual Property Rights</h2>
            <h3>8.1 Tredumo's Intellectual Property</h3>
            <p>
              The Services and all content, features, and functionality thereof,
              including but not limited to all information, software, text,
              displays, images, video, audio, and the design, selection, and
              arrangement thereof (excluding User Content), are owned by
              Tredumo, its licensors, or other providers and are protected by
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>

            <h3>8.2 Trademarks</h3>
            <p>
              "Tredumo," our logo, and other marks used by us are trademarks of
              Tredumo Uganda Limited. You may not use our trademarks without our
              prior written consent, except as permitted by applicable law.
            </p>

            <h3>8.3 Limited License to Use Services</h3>
            <p>
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable, non-sublicensable
              license to access and use the Services for your educational or
              institutional purposes. This license does not include any right
              to:
            </p>
            <ul>
              <li>Resell or make commercial use of the Services</li>
              <li>
                Distribute, publicly perform, or publicly display any part of
                the Services
              </li>
              <li>Modify or create derivative works based on the Services</li>
              <li>
                Use any data mining, robots, or similar data gathering tools
              </li>
              <li>
                Download any portion of the Services except as expressly
                permitted
              </li>
            </ul>

            <h3>8.4 Copyright Infringement</h3>
            <p>
              We respect the intellectual property rights of others and expect
              our users to do the same. If you believe that content on our
              Services infringes your copyright, please contact us with the
              following information:
            </p>
            <ul>
              <li>
                A description of the copyrighted work that you claim has been
                infringed
              </li>
              <li>
                A description of where the allegedly infringing material is
                located on our Services
              </li>
              <li>Your contact information</li>
              <li>
                A statement that you have a good faith belief that the use is
                not authorized
              </li>
              <li>
                A statement that the information in your notice is accurate
              </li>
              <li>Your physical or electronic signature</li>
            </ul>

            <h2 id="third-party">9. Third-Party Services and Content</h2>
            <h3>9.1 Third-Party Integrations</h3>
            <p>
              Our Services may integrate with or provide access to third-party
              services, websites, applications, or content ("Third-Party
              Services"). These integrations are provided for your convenience,
              and we do not control or endorse Third-Party Services.
            </p>

            <h3>9.2 Third-Party Terms</h3>
            <p>
              Your use of Third-Party Services is subject to the terms and
              conditions of those services. We are not responsible for the
              availability, content, or practices of Third-Party Services.
            </p>

            <h3>9.3 Data Sharing with Third Parties</h3>
            <p>
              When you choose to integrate Third-Party Services with our
              platform, you may be sharing data with those services. Please
              review the privacy policies of Third-Party Services to understand
              how they handle your data.
            </p>

            <h2 id="availability">10. Service Availability and Performance</h2>
            <h3>10.1 Service Availability</h3>
            <p>
              We strive to provide reliable and consistent access to our
              Services. However, we do not guarantee that the Services will be
              available at all times or that they will be free from
              interruptions, delays, or errors.
            </p>

            <h3>10.2 Maintenance and Updates</h3>
            <p>
              We may perform scheduled maintenance on our Services, which may
              result in temporary unavailability. We will provide advance notice
              of scheduled maintenance when possible.
            </p>

            <h3>10.3 Performance Standards</h3>
            <p>
              We aim to maintain the following performance standards for our
              Services:
            </p>
            <ul>
              <li>
                99.5% uptime availability (excluding scheduled maintenance)
              </li>
              <li>
                Response times of less than 2 seconds for standard operations
              </li>
              <li>
                Data backup and recovery procedures to protect against data loss
              </li>
              <li>24/7 monitoring and support for critical issues</li>
            </ul>

            <h2 id="termination">11. Termination</h2>
            <h3>11.1 Termination by You</h3>
            <p>
              You may terminate your account and stop using our Services at any
              time by contacting us or using the account closure features in
              your account settings. Upon termination, your right to use the
              Services will immediately cease.
            </p>

            <h3>11.2 Termination by Us</h3>
            <p>
              We may terminate or suspend your access to the Services
              immediately, without prior notice or liability, for any reason,
              including but not limited to:
            </p>
            <ul>
              <li>Breach of these Terms</li>
              <li>Violation of applicable laws or regulations</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Prolonged inactivity</li>
              <li>Conduct that harms other users or our business</li>
            </ul>

            <h3>11.3 Effect of Termination</h3>
            <p>Upon termination of your account:</p>
            <ul>
              <li>
                Your right to access and use the Services will immediately cease
              </li>
              <li>
                We may delete your account and User Content, subject to
                applicable law and our data retention policies
              </li>
              <li>
                You will remain liable for any outstanding fees or charges
              </li>
              <li>
                Provisions of these Terms that by their nature should survive
                termination will continue to apply
              </li>
            </ul>

            <h3>11.4 Data Export</h3>
            <p>
              Before terminating your account, you may request an export of your
              data. We will provide your data in a commonly used format, subject
              to technical limitations and applicable law.
            </p>

            <h2 id="disclaimers">12. Disclaimer of Warranties</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES
              ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT
              WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR
              OTHERWISE.
            </p>

            <p>
              WE SPECIFICALLY DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING BUT NOT
              LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT:
            </p>
            <ul>
              <li>
                The Services will meet your specific requirements or
                expectations
              </li>
              <li>
                The Services will be uninterrupted, timely, secure, or
                error-free
              </li>
              <li>
                The results obtained from using the Services will be accurate or
                reliable
              </li>
              <li>The quality of the Services will meet your expectations</li>
              <li>Any errors in the Services will be corrected</li>
            </ul>

            <h3>12.1 Educational Outcomes</h3>
            <p>
              We do not guarantee any specific educational outcomes or
              improvements in academic performance as a result of using our
              Services. Educational success depends on many factors beyond our
              control.
            </p>

            <h2 id="limitation">13. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY UGANDAN LAW, IN NO EVENT SHALL
              TREDUMO, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, OR
              SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
            </p>
            <ul>
              <li>
                Loss of profits, data, use, goodwill, or other intangible losses
              </li>
              <li>
                Damages resulting from your access to or use of or inability to
                access or use the Services
              </li>
              <li>
                Damages resulting from any conduct or content of any third party
                on the Services
              </li>
              <li>
                Damages resulting from any content obtained from the Services
              </li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
            </ul>

            <h3>13.1 Cap on Liability</h3>
            <p>
              Our total liability to you for all damages, losses, and causes of
              action arising out of or relating to these Terms or your use of
              the Services shall not exceed the amount you paid to us in the
              twelve (12) months preceding the event giving rise to the
              liability.
            </p>

            <h3>13.2 Essential Purpose</h3>
            <p>
              The limitations of liability set forth in this section are
              fundamental elements of the basis of the bargain between you and
              us. The Services would not be provided without such limitations.
            </p>

            <h2 id="indemnification">14. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Tredumo and its
              officers, directors, employees, agents, partners, and suppliers
              from and against any and all claims, liabilities, damages, losses,
              costs, expenses, or fees (including reasonable attorneys' fees)
              arising from or relating to:
            </p>
            <ul>
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>
                Your violation of any rights of another party, including any
                users
              </li>
              <li>Your User Content</li>
              <li>Your conduct in connection with the Services</li>
            </ul>

            <h3>14.1 Defense of Claims</h3>
            <p>
              We reserve the right to assume the exclusive defense and control
              of any matter subject to indemnification by you, and you agree to
              cooperate with our defense of such claims.
            </p>

            <h2 id="governing-law">15. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and your use of the Services shall be governed by and
              construed in accordance with the laws of the Republic of Uganda,
              without giving effect to any choice or conflict of law provision
              or rule.
            </p>

            <h3>15.1 Jurisdiction</h3>
            <p>
              Any legal suit, action, or proceeding arising out of or related to
              these Terms or the Services shall be instituted exclusively in the
              courts of Uganda, specifically the Commercial Division of the High
              Court of Uganda in Kampala. You waive any objection to the
              exercise of jurisdiction over you by such courts and to venue in
              such courts.
            </p>

            <h3>15.2 Applicable Laws</h3>
            <p>
              Our Services and these Terms are subject to the following Ugandan
              laws:
            </p>
            <ul>
              <li>The Electronic Transactions Act, 2011</li>
              <li>The Data Protection and Privacy Act, 2019</li>
              <li>The Computer Misuse Act, 2011</li>
              <li>The Education Act (as amended)</li>
              <li>The Consumer Protection Act, 2014</li>
            </ul>

            <h2 id="dispute-resolution">16. Dispute Resolution</h2>
            <h3>16.1 Informal Resolution</h3>
            <p>
              Before initiating any formal dispute resolution proceedings, you
              agree to first contact us to attempt to resolve the dispute
              informally. Please send a detailed description of your dispute to
              legal@tredumo.ug.
            </p>

            <h3>16.2 Mediation</h3>
            <p>
              If we cannot resolve a dispute informally within 30 days, any
              dispute arising from or relating to these Terms or the Services
              shall first be resolved through mediation administered by the
              Centre for Arbitration and Dispute Resolution (CADER) in Kampala,
              Uganda.
            </p>

            <h3>16.3 Arbitration</h3>
            <p>
              If mediation fails to resolve the dispute within 60 days, the
              dispute shall be resolved by final and binding arbitration
              administered by CADER in accordance with its Commercial
              Arbitration Rules. The arbitration shall be conducted in English
              in Kampala, Uganda.
            </p>

            <h3>16.4 Class Action Waiver</h3>
            <p>
              You agree that any dispute resolution proceedings will be
              conducted only on an individual basis and not in a class,
              consolidated, or representative action.
            </p>

            <h2 id="force-majeure">17. Force Majeure</h2>
            <p>
              We shall not be liable for any failure or delay in performance
              under these Terms that is due to causes beyond our reasonable
              control, including but not limited to:
            </p>
            <ul>
              <li>
                Acts of God, natural disasters, or extreme weather conditions
              </li>
              <li>War, terrorism, civil unrest, or government actions</li>
              <li>Internet or telecommunications failures</li>
              <li>Power outages or infrastructure failures</li>
              <li>Pandemics or public health emergencies</li>
              <li>Labor strikes or disputes</li>
            </ul>

            <h3>17.1 Notification and Mitigation</h3>
            <p>
              In the event of a force majeure situation, we will notify affected
              users as soon as reasonably possible and will use commercially
              reasonable efforts to minimize the impact on our Services.
            </p>

            <h2 id="uganda-specific">18. Uganda-Specific Provisions</h2>
            <h3>18.1 Local Data Requirements</h3>
            <p>
              In compliance with Ugandan data localization requirements, we
              maintain primary copies of critical data within Uganda, including
              student records, financial data, and institutional information.
            </p>

            <h3>18.2 Educational Compliance</h3>
            <p>
              Our Services are designed to comply with Uganda's educational
              regulations, including requirements from the Ministry of Education
              and Sports and the National Council for Higher Education.
            </p>

            <h3>18.3 Mobile Money Integration</h3>
            <p>
              We support payments through Uganda's mobile money systems (MTN
              Mobile Money and Airtel Money) in compliance with Bank of Uganda
              regulations and guidelines.
            </p>

            <h3>18.4 Language Support</h3>
            <p>
              While our primary language of service is English, we provide
              support for local languages including Luganda, Runyankole, and
              others as requested by educational institutions.
            </p>

            <h2 id="miscellaneous">19. Miscellaneous</h2>
            <h3>19.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy and any other legal
              notices published by us on the Services, constitute the entire
              agreement between you and us concerning the Services.
            </p>

            <h3>19.2 Waiver and Severability</h3>
            <p>
              Our failure to exercise or enforce any right or provision of these
              Terms shall not operate as a waiver of such right or provision. If
              any provision of these Terms is held to be invalid or
              unenforceable, such provision shall be struck and the remaining
              provisions shall remain in full force and effect.
            </p>

            <h3>19.3 Assignment</h3>
            <p>
              You may not assign or transfer these Terms, by operation of law or
              otherwise, without our prior written consent. We may assign these
              Terms without restriction. Any attempted assignment in violation
              of this section shall be void.
            </p>

            <h3>19.4 Headings</h3>
            <p>
              The headings in these Terms are for convenience only and shall not
              affect the interpretation of these Terms.
            </p>

            <h3>19.5 Survival</h3>
            <p>
              The following sections shall survive termination of these Terms:
              User Content, Intellectual Property Rights, Disclaimer of
              Warranties, Limitation of Liability, Indemnification, Governing
              Law and Jurisdiction, and Miscellaneous.
            </p>

            <h3>19.6 Electronic Communications</h3>
            <p>
              By using our Services, you consent to receive electronic
              communications from us. These communications may include notices
              about your account, changes to the Services, and promotional
              messages.
            </p>

            <h2 id="contact">20. Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding these
              Terms or our Services, please contact us using the following
              information:
            </p>

            <p>
              <strong>Tredumo Uganda Limited</strong>
              <br />
              Attention: Legal Department
              <br />
              Innovation Village, Ntinda
              <br />
              Kampala, Uganda
              <br />
              <br />
              <strong>Email:</strong> legal@tredumo.ug
              <br />
              <strong>Phone:</strong> +256 700 123 456
              <br />
              <strong>WhatsApp:</strong> +256 700 123 456
              <br />
              <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00
              PM EAT
            </p>

            <h3>20.1 Legal Notices</h3>
            <p>
              For formal legal notices, please send correspondence to our
              registered address or email legal@tredumo.ug. All legal notices
              must be in writing and will be deemed delivered when received.
            </p>

            <h3>20.2 Customer Support</h3>
            <p>
              For general customer support inquiries, please contact
              support@tredumo.ug or use the support features within our
              Services.
            </p>

            <div
              className={`mt-12 p-6 rounded-xl ${
                theme === "dark" ? "bg-[#8a87d8]/10" : "bg-[#8a87d8]/10"
              } text-center`}
            >
              <h3
                className={`text-xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-3`}
              >
                Thank You for Using Tredumo
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                These Terms of Service help ensure a safe, productive, and
                legally compliant environment for all users of our educational
                platform. We appreciate your commitment to following these
                guidelines as we work together to transform education in Uganda
                and East Africa.
              </p>
            </div>
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
                Need clarification?
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Our legal team is
                <br />
                <span className="text-[#8a87d8]">here to help</span>
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                } text-xl max-w-2xl mx-auto mb-8 leading-relaxed`}
              >
                If you have questions about our Terms of Service or need
                assistance understanding your rights and responsibilities, our
                Uganda-based legal team is ready to assist you.
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
                  Contact Legal Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:legal@tredumo.ug"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Email Legal Department
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Terms */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center">
              <a
                href="/downloads/tredumo-terms-of-service.pdf"
                className={`inline-flex items-center ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                    : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                } backdrop-blur-xl px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Terms of Service PDF
              </a>
              <p
                className={`mt-4 text-sm ${
                  theme === "dark" ? "text-white/50" : "text-black/50"
                }`}
              >
                Last updated: {lastUpdated} • Version 3.1
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
