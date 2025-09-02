"use client";

import type React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Download,
  Shield,
  Lock,
  Eye,
  FileText,
  Heart,
  Coffee,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

interface PrivacyPageProps {
  theme: string;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ theme }) => {
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
        <title>Privacy Policy | Tredumo Uganda</title>
        <meta
          name="description"
          content="Learn how Tredumo protects your privacy and handles data in compliance with Uganda's Data Protection and Privacy Act. Transparent, secure, and respectful of your rights."
        />
        <meta
          name="keywords"
          content="Uganda data protection, privacy policy, GDPR compliance, student data security, education privacy, Uganda Data Protection Act"
        />
        <meta property="og:title" content="Privacy Policy | Tredumo Uganda" />
        <meta
          property="og:description"
          content="Learn how Tredumo protects your privacy and handles data in compliance with Uganda's data protection laws."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Tredumo Uganda" />
        <meta
          name="twitter:description"
          content="Learn how Tredumo protects your privacy and handles data in compliance with Uganda's data protection laws."
        />
        <link rel="canonical" href="https://tredumo.com/privacy" />
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
              Your Privacy Matters
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Privacy Policy
              <br />
              <span className="text-[#8a87d8]">Made Simple</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto leading-relaxed`}
            >
              We protect your data like we protect our grandmother's secret
              recipe for the best matooke in Kampala.
              <br />
              <span className="text-sm mt-2 block">
                Last updated: {lastUpdated}
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
                  Our Privacy Promise
                </span>
                <h3
                  className={`text-4xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-6 tracking-tight`}
                >
                  We take your privacy as seriously as a Ugandan takes their tea
                  time
                </h3>

                <div
                  className={`space-y-6 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-lg leading-relaxed`}
                >
                  <p>
                    At Tredumo Uganda, we believe your privacy is more sacred
                    than the source of the Nile. We're committed to being as
                    transparent as Lake Victoria on a clear morning about our
                    data practices.
                  </p>
                  <p>
                    Our privacy policy is written in plain English (and a bit of
                    Ugandan humor) because legal jargon is more confusing than
                    Kampala traffic during rush hour.
                  </p>
                  <p>
                    Questions about our privacy practices? Reach out to us at{" "}
                    <span className="text-[#8a87d8] font-medium">
                      privacy@tredumo.ug
                    </span>{" "}
                    - we respond faster than a boda boda driver spotting a fare!
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
                    icon: <Shield className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Fort Knox Security",
                    description:
                      "Your data is protected better than the Crown Jewels at Mengo Palace.",
                  },
                  {
                    icon: <Lock className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Bank-Level Encryption",
                    description:
                      "We encrypt everything like it's the secret to making perfect posho.",
                  },
                  {
                    icon: <Eye className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Crystal Clear Transparency",
                    description:
                      "We're more transparent than the waters of Lake Bunyonyi.",
                  },
                  {
                    icon: <FileText className="h-8 w-8 text-[#8a87d8]" />,
                    title: "Uganda Law Compliant",
                    description:
                      "We follow Uganda's Data Protection Act and international standards.",
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

      {/* Fun Facts Section */}
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
              Privacy Fun Facts
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Privacy by the numbers
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
                icon: <Coffee className="h-8 w-8 text-[#8a87d8]" />,
                stat: "< 15 minutes",
                label: "Time to read this policy",
                description:
                  "Shorter than brewing a perfect cup of Ugandan coffee",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-[#8a87d8]" />,
                stat: "256-bit",
                label: "Encryption strength",
                description:
                  "Stronger than the signal on your MTN line in the village",
              },
              {
                icon: <Heart className="h-8 w-8 text-[#8a87d8]" />,
                stat: "100%",
                label: "Commitment to your privacy",
                description: "As reliable as a Ugandan's love for matooke",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card text-center p-8 rounded-2xl ${
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
                <div className="text-4xl font-bold text-[#8a87d8] mb-2">
                  {item.stat}
                </div>
                <div
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {item.label}
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
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

              <ol
                className={`list-decimal pl-5 space-y-2 ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                <li>
                  <a
                    href="#introduction"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#information-collection"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Information We Collect
                  </a>
                </li>
                <li>
                  <a
                    href="#information-use"
                    className="text-[#8a87d8] hover:underline"
                  >
                    How We Use Your Information
                  </a>
                </li>
                <li>
                  <a
                    href="#information-sharing"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Information Sharing and Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="#data-retention"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Data Retention and Security
                  </a>
                </li>
                <li>
                  <a
                    href="#user-rights"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Your Rights and Choices
                  </a>
                </li>
                <li>
                  <a
                    href="#children"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Children's Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#international"
                    className="text-[#8a87d8] hover:underline"
                  >
                    International Data Transfers
                  </a>
                </li>
                <li>
                  <a href="#updates" className="text-[#8a87d8] hover:underline">
                    Updates to This Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#specific-provisions"
                    className="text-[#8a87d8] hover:underline"
                  >
                    Specific Provisions for Ugandan Users
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#8a87d8] hover:underline">
                    Contact Us
                  </a>
                </li>
              </ol>

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
                  This Privacy Policy was last updated on{" "}
                  <strong>{lastUpdated}</strong> and applies to all users of
                  Tredumo services in Uganda and East Africa.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
            <h2 id="introduction">1. Introduction</h2>
            <p>
              This Privacy Policy explains how Tredumo Uganda Limited
              ("Tredumo," "we," "us," or "our") collects, uses, discloses, and
              safeguards information about you when you use our education
              management platform, website, mobile applications, and other
              online products and services (collectively, the "Services"), or
              when you otherwise interact with us.
            </p>

            <p>
              We are committed to protecting your personal information and your
              right to privacy in accordance with Uganda's Data Protection and
              Privacy Act of 2019, the General Data Protection Regulation (GDPR)
              where applicable, and other relevant data protection laws. This
              Privacy Policy applies to all information collected through our
              Services, as well as any related services, sales, marketing, or
              events.
            </p>

            <p>
              By accessing or using our Services, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree with
              our policies and practices, please do not use our Services. If you
              have any questions or concerns about our privacy practices, please
              contact us using the details provided at the end of this Privacy
              Policy.
            </p>

            <h3>1.1 Key Definitions</h3>
            <p>
              To help you better understand this Privacy Policy, here are some
              key terms we use:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Any information relating to an
                identified or identifiable natural person ('data subject').
              </li>
              <li>
                <strong>Processing:</strong> Any operation performed on personal
                data, such as collection, recording, organization, structuring,
                storage, adaptation, retrieval, consultation, use, disclosure,
                or erasure.
              </li>
              <li>
                <strong>Data Controller:</strong> The entity that determines the
                purposes and means of processing personal data (in this case,
                Tredumo).
              </li>
              <li>
                <strong>Data Processor:</strong> A third party that processes
                personal data on behalf of the data controller.
              </li>
              <li>
                <strong>Data Subject:</strong> An individual who is the subject
                of personal data (in this case, you as a user of our Services).
              </li>
            </ul>

            <h3>1.2 About Tredumo</h3>
            <p>
              Tredumo is a comprehensive education management platform designed
              specifically for African educational institutions. We provide
              solutions that streamline administrative processes, enhance
              learning experiences, and drive educational innovation across
              Uganda and the broader East African region.
            </p>

            <p>
              Our registered office is located at Innovation Village, Ntinda,
              Kampala, Uganda. We are registered with the National Information
              Technology Authority Uganda (NITA-U) and comply with all
              applicable Ugandan laws and regulations regarding data protection
              and privacy.
            </p>

            <h2 id="information-collection">2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of
              our Services, including information that personally identifies
              you. The types of information we collect depend on how you
              interact with our Services.
            </p>

            <h3>2.1 Information You Provide to Us</h3>
            <p>We collect information you provide directly to us when you:</p>
            <ul>
              <li>Create an account or register for our Services</li>
              <li>Complete forms or surveys</li>
              <li>Upload or submit content through our Services</li>
              <li>Communicate with us via email, phone, or otherwise</li>
              <li>Request customer support</li>
              <li>Subscribe to our newsletters or marketing communications</li>
              <li>Apply for a job with us</li>
              <li>Participate in promotions, contests, or surveys</li>
              <li>Post comments or provide feedback</li>
            </ul>

            <p>The personal information we collect may include:</p>
            <ul>
              <li>
                <strong>Identity Information:</strong> Your name, username,
                password, date of birth, gender, profile picture, and other
                identifiers you may use on our Services.
              </li>
              <li>
                <strong>Contact Information:</strong> Your email address, phone
                number, postal address, and other contact details.
              </li>
              <li>
                <strong>Educational Information:</strong> Your educational
                institution, student ID, academic records, grades, attendance
                records, and other education-related information.
              </li>
              <li>
                <strong>Professional Information:</strong> For educators and
                administrators, your job title, department, professional
                qualifications, and employment history.
              </li>
              <li>
                <strong>Financial Information:</strong> Your payment
                information, billing address, and transaction history when you
                make purchases through our Services.
              </li>
              <li>
                <strong>Communications:</strong> The content of messages you
                send to us or other users through our Services, including
                emails, chat messages, and feedback.
              </li>
              <li>
                <strong>User-Generated Content:</strong> Any content you upload,
                post, or create through our Services, such as documents,
                assignments, comments, and other materials.
              </li>
            </ul>

            <h3>2.2 Information We Collect Automatically</h3>
            <p>
              When you use our Services, we automatically collect certain
              information about your device and how you interact with our
              Services. This information includes:
            </p>
            <ul>
              <li>
                <strong>Device Information:</strong> Information about the
                device you use to access our Services, including the hardware
                model, operating system and version, unique device identifiers,
                mobile network information, and general location information
                (such as city or country).
              </li>
              <li>
                <strong>Log Information:</strong> Information that is
                automatically recorded by our servers when you access or use our
                Services, including your IP address, browser type and settings,
                access times, pages viewed, links clicked, and the page you
                visited before navigating to our Services.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about your
                interactions with our Services, such as the features you use,
                the actions you take, the time, frequency, and duration of your
                activities, and other information about how you use our
                Services.
              </li>
              <li>
                <strong>Location Information:</strong> Information about your
                location, which can be precise (such as latitude/longitude
                coordinates) if you grant us permission through your device
                settings, or general (such as city or country) based on your IP
                address.
              </li>
              <li>
                <strong>
                  Information Collected by Cookies and Similar Technologies:
                </strong>{" "}
                We use cookies, web beacons, and similar technologies to collect
                information about your interactions with our Services and other
                websites. For more information about our use of these
                technologies, please see our{" "}
                <Link to="/cookies" className="text-[#8a87d8] hover:underline">
                  Cookie Policy
                </Link>
                .
              </li>
            </ul>

            <h3>2.3 Information We Collect from Third Parties</h3>
            <p>
              We may collect information about you from third parties,
              including:
            </p>
            <ul>
              <li>
                <strong>Educational Institutions:</strong> If you are a student,
                teacher, or administrator, we may receive information about you
                from your educational institution, such as your enrollment
                status, course registrations, and academic records.
              </li>
              <li>
                <strong>Integration Partners:</strong> If you connect our
                Services with third-party services (such as Google Classroom,
                Microsoft Teams, or other learning management systems), we may
                receive information about you from those services.
              </li>
              <li>
                <strong>Payment Processors:</strong> When you make payments
                through our Services, we may receive information from our
                payment processors, such as Mobile Money providers (MTN, Airtel)
                or banks.
              </li>
              <li>
                <strong>Public Sources:</strong> We may collect information
                about you from publicly available sources, such as public social
                media profiles or professional directories.
              </li>
              <li>
                <strong>Referrals:</strong> If someone refers you to our
                Services, they may provide us with your contact information.
              </li>
            </ul>

            <h3>2.4 Special Categories of Personal Data</h3>
            <p>
              In some cases, we may collect special categories of personal data
              (also known as sensitive personal data) about you, such as:
            </p>
            <ul>
              <li>
                Health information (e.g., for accessibility accommodations or
                medical absences)
              </li>
              <li>Biometric data (e.g., for secure authentication)</li>
              <li>
                Information about your race or ethnicity (e.g., for diversity
                reporting or scholarship programs)
              </li>
              <li>Religious beliefs (e.g., for religious accommodations)</li>
            </ul>
            <p>
              We only collect and process this information with your explicit
              consent or when necessary for specific purposes permitted by law.
              We implement additional safeguards to protect this sensitive
              information.
            </p>

            <h2 id="information-use">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes related to
              providing, maintaining, and improving our Services. The specific
              ways we use your information depend on how you interact with our
              Services and what Services you use.
            </p>

            <h3>3.1 Providing and Improving Our Services</h3>
            <p>We use your information to:</p>
            <ul>
              <li>Create and maintain your account</li>
              <li>Provide, operate, and maintain our Services</li>
              <li>Improve and personalize your experience with our Services</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>Process and complete transactions</li>
              <li>
                Provide customer support and respond to your requests, comments,
                and inquiries
              </li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our Services
              </li>
              <li>Debug to identify and repair errors in our Services</li>
              <li>Ensure the security and integrity of our Services</li>
            </ul>

            <h3>3.2 Communications</h3>
            <p>We use your information to:</p>
            <ul>
              <li>
                Send you technical notices, updates, security alerts, and
                administrative messages related to your use of our Services
              </li>
              <li>
                Communicate with you about products, services, offers,
                promotions, and events, and provide other news or information
                about us and our partners
              </li>
              <li>
                Process and deliver contest or promotion entries and rewards
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>
                Facilitate communication between users of our Services, where
                applicable
              </li>
            </ul>

            <h3>3.3 Research and Analytics</h3>
            <p>We use your information to:</p>
            <ul>
              <li>Conduct research and analytics to improve our Services</li>
              <li>
                Generate aggregated, non-identifying analytics and statistics
              </li>
              <li>Measure the effectiveness of our marketing campaigns</li>
              <li>Understand how users interact with our Services</li>
              <li>
                Develop data models and algorithms to improve educational
                outcomes (using anonymized or pseudonymized data)
              </li>
            </ul>

            <h3>3.4 Legal and Safety Purposes</h3>
            <p>We use your information to:</p>
            <ul>
              <li>
                Comply with applicable laws, regulations, and legal processes
              </li>
              <li>
                Protect the safety, rights, property, or security of Tredumo,
                our users, and the public
              </li>
              <li>
                Detect, prevent, and address fraud, security breaches, and
                technical issues
              </li>
              <li>Enforce our Terms of Service and other agreements</li>
              <li>Defend against legal claims and liability</li>
            </ul>

            <h3>3.5 With Your Consent</h3>
            <p>
              We may use your information for any other purpose disclosed to you
              at the time we collect the information or with your consent.
            </p>

            <h3>3.6 Legal Bases for Processing (For GDPR and Similar Laws)</h3>
            <p>
              For users in jurisdictions where the GDPR or similar laws apply,
              we process your personal data based on the following legal bases:
            </p>
            <ul>
              <li>
                <strong>Contractual Necessity:</strong> To perform our
                contractual obligations to you, including providing our
                Services.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To pursue our legitimate
                interests, such as improving our Services, conducting research,
                and ensuring security, provided that these interests are not
                overridden by your rights and freedoms.
              </li>
              <li>
                <strong>Compliance with Legal Obligations:</strong> To comply
                with laws, regulations, and other legal requirements.
              </li>
              <li>
                <strong>Consent:</strong> With your consent, which you may
                withdraw at any time.
              </li>
              <li>
                <strong>Vital Interests:</strong> To protect your vital
                interests or those of another person.
              </li>
              <li>
                <strong>Public Interest:</strong> To perform a task carried out
                in the public interest or in the exercise of official authority.
              </li>
            </ul>

            <h2 id="information-sharing">
              4. Information Sharing and Disclosure
            </h2>
            <p>
              We take your privacy seriously and are selective about how we
              share your information. We may share your information in the
              following circumstances:
            </p>

            <h3>4.1 With Educational Institutions</h3>
            <p>
              If you are a student, teacher, or administrator, we may share your
              information with your educational institution as necessary to
              provide our Services. This may include:
            </p>
            <ul>
              <li>Academic records and performance data</li>
              <li>Attendance and participation information</li>
              <li>Communication records related to educational activities</li>
              <li>Administrative and billing information</li>
            </ul>
            <p>
              The specific information shared depends on the Services your
              institution has subscribed to and your role within the
              institution.
            </p>

            <h3>4.2 With Service Providers</h3>
            <p>
              We may share your information with third-party service providers
              who perform services on our behalf, such as:
            </p>
            <ul>
              <li>
                Cloud hosting and infrastructure providers (e.g., Amazon Web
                Services, Microsoft Azure)
              </li>
              <li>
                Payment processors (e.g., MTN Mobile Money, Airtel Money,
                Flutterwave)
              </li>
              <li>Customer support and help desk services</li>
              <li>Email and communication service providers</li>
              <li>Analytics and research companies</li>
              <li>Security and fraud prevention services</li>
              <li>Marketing and advertising partners</li>
            </ul>
            <p>
              We require these service providers to use your information only as
              necessary to provide services to us and to implement appropriate
              data security measures.
            </p>

            <h3>4.3 For Legal Reasons</h3>
            <p>We may share your information if we believe it is required:</p>
            <ul>
              <li>
                To comply with applicable laws, regulations, legal processes, or
                governmental requests, including from law enforcement
              </li>
              <li>
                To enforce our Terms of Service and other agreements, including
                investigation of potential violations
              </li>
              <li>
                To detect, prevent, or address fraud, security breaches, or
                technical issues affecting our Services
              </li>
              <li>
                To protect the rights, property, or safety of Tredumo, our
                users, or the public, as required or permitted by law
              </li>
            </ul>

            <h3>4.4 In Connection with Business Transfers</h3>
            <p>
              If Tredumo is involved in a merger, acquisition, financing,
              reorganization, bankruptcy, or sale of all or a portion of our
              assets, your information may be transferred or disclosed as part
              of that transaction. We will notify you of any change in ownership
              or uses of your personal information, as well as any choices you
              may have regarding your information.
            </p>

            <h3>4.5 With Your Consent</h3>
            <p>
              We may share your information with third parties when you direct
              us to do so or otherwise provide your consent.
            </p>

            <h3>4.6 Aggregated or De-identified Information</h3>
            <p>
              We may share aggregated or de-identified information that cannot
              reasonably be used to identify you with third parties for various
              purposes, including:
            </p>
            <ul>
              <li>Industry analysis and research</li>
              <li>Educational trend reporting</li>
              <li>Marketing and promotional materials</li>
              <li>Improving educational outcomes and practices</li>
            </ul>

            <h2 id="data-retention">5. Data Retention and Security</h2>
            <h3>5.1 Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes for which we collected it, including:
            </p>
            <ul>
              <li>Providing our Services to you</li>
              <li>Complying with legal obligations</li>
              <li>Resolving disputes</li>
              <li>Enforcing our agreements</li>
            </ul>
            <p>The specific retention periods depend on:</p>
            <ul>
              <li>The type of information</li>
              <li>The purpose for which it was collected</li>
              <li>
                Legal requirements (e.g., tax, accounting, or other legal
                obligations)
              </li>
              <li>Industry standards</li>
            </ul>
            <p>
              For educational records, we typically retain information for the
              duration of a student's enrollment plus a period afterward as
              required by educational regulations or institutional policies. For
              users with accounts, we generally retain information for as long
              as your account is active or as needed to provide you with our
              Services.
            </p>
            <p>
              When we no longer need to retain your personal information, we
              will securely delete or anonymize it. If we cannot delete certain
              information (for technical reasons or because we are required to
              retain it), we will securely store it and isolate it from further
              processing until deletion is possible.
            </p>

            <h3>5.2 Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing, accidental loss, destruction, or damage. These
              measures include:
            </p>
            <ul>
              <li>
                <strong>Encryption:</strong> We use industry-standard encryption
                (256-bit SSL/TLS) to protect data in transit and at rest.
              </li>
              <li>
                <strong>Access Controls:</strong> We restrict access to personal
                information to authorized employees, contractors, and agents who
                need access to perform their job functions.
              </li>
              <li>
                <strong>Authentication:</strong> We implement multi-factor
                authentication for administrative access to our systems.
              </li>
              <li>
                <strong>Regular Security Assessments:</strong> We conduct
                regular security assessments, penetration testing, and
                vulnerability scanning.
              </li>
              <li>
                <strong>Employee Training:</strong> We train our employees on
                privacy and security best practices.
              </li>
              <li>
                <strong>Incident Response:</strong> We have procedures in place
                to respond to potential data security incidents.
              </li>
              <li>
                <strong>Physical Security:</strong> We maintain physical
                security measures at our facilities and data centers.
              </li>
            </ul>
            <p>
              While we strive to protect your personal information, no method of
              transmission over the Internet or electronic storage is 100%
              secure. We cannot guarantee absolute security, but we continuously
              work to improve our security practices.
            </p>

            <h3>5.3 Data Breach Notification</h3>
            <p>
              In the event of a data breach that affects your personal
              information, we will notify you and the relevant authorities as
              required by applicable law. Our notification will include:
            </p>
            <ul>
              <li>The nature of the breach</li>
              <li>
                The categories and approximate number of individuals affected
              </li>
              <li>
                The categories and approximate number of records concerned
              </li>
              <li>The likely consequences of the breach</li>
              <li>The measures taken or proposed to address the breach</li>
              <li>Contact information for questions or concerns</li>
            </ul>
            <p>
              In Uganda, we will notify the National Information Technology
              Authority Uganda (NITA-U) and the Personal Data Protection Office
              as required by the Data Protection and Privacy Act.
            </p>

            <h2 id="user-rights">6. Your Rights and Choices</h2>
            <p>
              You have certain rights regarding your personal information. These
              rights may vary depending on your location and applicable laws.
            </p>

            <h3>6.1 Access and Information</h3>
            <p>
              You have the right to access the personal information we hold
              about you and to receive information about how we use it. You can
              request a copy of your personal information by contacting us using
              the details provided at the end of this Privacy Policy.
            </p>

            <h3>6.2 Correction and Update</h3>
            <p>
              You have the right to correct or update your personal information
              if it is inaccurate or incomplete. You can update much of your
              information directly through your account settings, or you can
              contact us to request corrections.
            </p>

            <h3>6.3 Deletion and Erasure</h3>
            <p>
              You have the right to request the deletion of your personal
              information in certain circumstances, such as when it is no longer
              necessary for the purposes for which it was collected. However, we
              may retain certain information as required by law or for
              legitimate business purposes.
            </p>

            <h3>6.4 Restriction of Processing</h3>
            <p>
              You have the right to request that we restrict the processing of
              your personal information in certain circumstances, such as when
              you contest the accuracy of the information or object to our
              processing.
            </p>

            <h3>6.5 Data Portability</h3>
            <p>
              You have the right to receive your personal information in a
              structured, commonly used, and machine-readable format, and to
              transmit that information to another controller without hindrance
              from us, where technically feasible.
            </p>

            <h3>6.6 Objection to Processing</h3>
            <p>
              You have the right to object to our processing of your personal
              information in certain circumstances, such as when we process your
              information for direct marketing purposes or when we process your
              information based on our legitimate interests.
            </p>

            <h3>6.7 Withdrawal of Consent</h3>
            <p>
              Where we process your personal information based on your consent,
              you have the right to withdraw that consent at any time. This will
              not affect the lawfulness of processing based on your consent
              before its withdrawal.
            </p>

            <h3>6.8 Complaint to a Supervisory Authority</h3>
            <p>
              You have the right to lodge a complaint with a data protection
              supervisory authority if you believe that our processing of your
              personal information violates applicable data protection laws. In
              Uganda, this is the Personal Data Protection Office under the
              National Information Technology Authority Uganda (NITA-U).
            </p>

            <h3>6.9 Marketing Choices</h3>
            <p>
              You can opt out of receiving marketing communications from us by
              following the unsubscribe instructions included in our marketing
              communications or by contacting us directly. Please note that even
              if you opt out of receiving marketing communications, we may still
              send you non-promotional communications related to your use of our
              Services.
            </p>

            <h3>6.10 Cookie Preferences</h3>
            <p>
              You can manage your cookie preferences through your browser
              settings or our cookie preference center. For more information,
              please see our{" "}
              <Link to="/cookies" className="text-[#8a87d8] hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <h3>6.11 How to Exercise Your Rights</h3>
            <p>
              To exercise any of these rights, please contact us using the
              details provided at the end of this Privacy Policy. We will
              respond to your request within the timeframe required by
              applicable law (generally within 30 days for requests under the
              GDPR or Uganda's Data Protection and Privacy Act).
            </p>
            <p>
              We may need to verify your identity before responding to your
              request. In some cases, we may charge a reasonable fee based on
              administrative costs for providing copies of your personal
              information, as permitted by applicable law.
            </p>

            <h2 id="children">7. Children's Privacy</h2>
            <p>
              Our Services are designed for educational institutions and may be
              used by students of all ages, including children under 18. We are
              committed to protecting the privacy of children and complying with
              applicable laws regarding the collection and use of children's
              personal information.
            </p>

            <h3>7.1 Information Collection from Children</h3>
            <p>
              We only collect personal information from children under 18 with
              appropriate consent from parents, guardians, or educational
              institutions acting in loco parentis, and only for educational
              purposes. The information we collect is limited to what is
              reasonably necessary for participation in our educational
              Services.
            </p>

            <h3>7.2 Parental Rights and Controls</h3>
            <p>
              Parents and guardians have the right to review, correct, and
              request deletion of their child's personal information. They can
              also refuse to permit further collection or use of their child's
              information. To exercise these rights, parents or guardians should
              contact us using the details provided at the end of this Privacy
              Policy.
            </p>

            <h3>7.3 Educational Institution's Role</h3>
            <p>
              When we provide Services to educational institutions, we may
              collect personal information from students under the direction of
              the institution. In these cases, the educational institution is
              responsible for obtaining appropriate consent from parents or
              guardians, and we process the information as a service provider to
              the institution.
            </p>

            <h3>7.4 Special Safeguards</h3>
            <p>
              We implement additional safeguards for children's data, including:
            </p>
            <ul>
              <li>
                Limiting the collection of personal information to what is
                necessary for educational purposes
              </li>
              <li>
                Restricting access to children's personal information to
                authorized personnel only
              </li>
              <li>
                Implementing enhanced security measures for systems that store
                children's data
              </li>
              <li>
                Providing clear privacy notices in age-appropriate language
              </li>
              <li>
                Obtaining verifiable parental consent before collecting personal
                information from children
              </li>
            </ul>

            <h2 id="international">8. International Data Transfers</h2>
            <p>
              Tredumo is based in Uganda, and we primarily store and process
              your information within Uganda and East Africa. However, we may
              transfer your information to other countries for processing,
              storage, or to service providers who operate in other countries.
            </p>

            <h3>8.1 Data Transfer Mechanisms</h3>
            <p>
              When we transfer personal information outside of Uganda or to
              countries that may not provide the same level of data protection,
              we ensure appropriate safeguards are in place, such as:
            </p>
            <ul>
              <li>
                Standard Contractual Clauses approved by relevant data
                protection authorities
              </li>
              <li>
                Binding Corporate Rules for transfers within a corporate group
              </li>
              <li>
                Adequacy decisions for countries recognized as providing
                adequate protection
              </li>
              <li>
                Derogations for specific situations, such as with your explicit
                consent
              </li>
              <li>
                Data Processing Agreements with service providers that include
                appropriate data protection clauses
              </li>
            </ul>

            <h3>8.2 International Service Providers</h3>
            <p>
              We may use service providers located in various countries to help
              us provide our Services. These service providers may access your
              information to perform services on our behalf, and we require them
              to protect your information in accordance with this Privacy Policy
              and applicable data protection laws.
            </p>

            <h3>8.3 Your Rights Regarding International Transfers</h3>
            <p>
              If you are located in a jurisdiction with data protection laws
              that restrict international data transfers, you have the right to
              request information about the countries where your personal
              information is processed and the safeguards we have implemented
              for such transfers.
            </p>

            <h2 id="updates">9. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technologies, legal requirements, or
              other factors. When we make material changes to this Privacy
              Policy, we will notify you by:
            </p>
            <ul>
              <li>Posting the updated Privacy Policy on our website</li>
              <li>
                Updating the "Last Updated" date at the top of this Privacy
                Policy
              </li>
              <li>
                Sending an email notification to users with registered email
                addresses
              </li>
              <li>Displaying a notice within our Services</li>
            </ul>
            <p>
              We encourage you to review this Privacy Policy periodically to
              stay informed about our privacy practices. Your continued use of
              our Services after the effective date of the updated Privacy
              Policy constitutes your acceptance of the changes. If you do not
              agree to the updated Privacy Policy, you should stop using our
              Services.
            </p>

            <h2 id="specific-provisions">
              10. Specific Provisions for Ugandan Users
            </h2>
            <p>
              As a company based in Uganda, we are committed to complying with
              Uganda's Data Protection and Privacy Act of 2019 and other
              applicable Ugandan laws. This section provides additional
              information for users in Uganda.
            </p>

            <h3>10.1 Data Protection Registration</h3>
            <p>
              Tredumo is registered as a data controller with the Personal Data
              Protection Office under the National Information Technology
              Authority Uganda (NITA-U). Our registration number is
              [PDPO-2023-12345].
            </p>

            <h3>10.2 Local Data Storage</h3>
            <p>
              In accordance with Ugandan data localization requirements, we
              maintain primary copies of critical data within Uganda. This
              includes:
            </p>
            <ul>
              <li>Student academic records</li>
              <li>Financial transaction data</li>
              <li>Institutional administrative records</li>
              <li>Other data as required by Ugandan law</li>
            </ul>

            <h3>10.3 Data Protection Officer</h3>
            <p>
              We have appointed a Data Protection Officer (DPO) who is
              responsible for overseeing our compliance with data protection
              laws and this Privacy Policy. You can contact our DPO at
              dpo@tredumo.ug or through our postal address with "Attention: Data
              Protection Officer" in the address line.
            </p>

            <h3>10.4 Consent Requirements</h3>
            <p>
              Under Ugandan law, we obtain explicit consent for the collection
              and processing of personal information where required. For
              children under 18, we obtain consent from parents, guardians, or
              educational institutions acting in loco parentis.
            </p>

            <h3>10.5 Data Breach Notification</h3>
            <p>
              In the event of a data breach affecting Ugandan users, we will
              notify affected individuals and the Personal Data Protection
              Office within 72 hours of becoming aware of the breach, as
              required by Ugandan law.
            </p>

            <h2 id="contact">11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us using
              the following information:
            </p>

            <p>
              <strong>Tredumo Uganda Limited</strong>
              <br />
              Attention: Privacy Team
              <br />
              Innovation Village, Ntinda
              <br />
              Kampala, Uganda
              <br />
              <br />
              <strong>Email:</strong> privacy@tredumo.ug
              <br />
              <strong>Phone:</strong> +256 700 123 456
              <br />
              <strong>WhatsApp:</strong> +256 700 123 456
            </p>

            <p>
              For data protection matters specifically, you can contact our Data
              Protection Officer at dpo@tredumo.ug.
            </p>

            <p>
              We will respond to your request within 30 days or as required by
              applicable law. If we require additional time to respond, we will
              inform you of the reason for the delay and when you can expect a
              response.
            </p>

            <h3>11.1 Complaints</h3>
            <p>
              If you have a complaint about how we handle your personal
              information, please contact us first, and we will do our best to
              resolve your concern. If you are not satisfied with our response,
              you have the right to lodge a complaint with the Personal Data
              Protection Office under the National Information Technology
              Authority Uganda (NITA-U) or another relevant data protection
              authority.
            </p>

            <h3>11.2 Changes to Your Information</h3>
            <p>
              If your personal information changes, please update it through
              your account settings or contact us to make the necessary changes.
              This helps us maintain accurate records and provide you with the
              best service.
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
                Thank You for Trusting Tredumo
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                We are committed to protecting your privacy and providing
                transparent information about our data practices. Your trust is
                important to us, and we strive to earn it every day through our
                actions and policies.
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
                Still have questions?
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                We're here to help
                <br />
                <span className="text-[#8a87d8]">anytime</span>
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                } text-xl max-w-2xl mx-auto mb-8 leading-relaxed`}
              >
                Our privacy team is ready to answer your questions faster than
                you can say "matooke". Reach out anytime - we're here to help!
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
                  Contact Privacy Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:privacy@tredumo.ug"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Privacy Policy */}
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
                href="/downloads/tredumo-privacy-policy.pdf"
                className={`inline-flex items-center ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                    : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                } backdrop-blur-xl px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Privacy Policy PDF
              </a>
              <p
                className={`mt-4 text-sm ${
                  theme === "dark" ? "text-white/50" : "text-black/50"
                }`}
              >
                Last updated: {lastUpdated} • Version 2.3
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
