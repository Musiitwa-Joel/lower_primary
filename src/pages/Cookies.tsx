"use client";

import type React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Cookie, Settings, Shield, Eye, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface CookiesPageProps {
  theme: string;
}

const CookiesPage: React.FC<CookiesPageProps> = ({ theme }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthIndex = new Date().getMonth();
  const nextMonthIndex = (currentMonthIndex + 1) % months.length;
  const lastUpdated = `${months[nextMonthIndex]} 15, ${
    new Date().getFullYear() - 1
  }`;

  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always enabled
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const handleCookieToggle = (type: keyof typeof cookieSettings) => {
    if (type === "essential") return; // Essential cookies cannot be disabled
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

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
        <title>Cookie Policy | Tredumo Uganda</title>
        <meta
          name="description"
          content="Learn how Tredumo uses cookies to improve your experience on our education platform. Manage your cookie preferences and understand our data practices in Uganda."
        />
        <meta
          name="keywords"
          content="Uganda cookies policy, website cookies, data tracking, privacy settings, Tredumo preferences, education platform cookies"
        />
        <meta property="og:title" content="Cookie Policy | Tredumo Uganda" />
        <meta
          property="og:description"
          content="Learn how Tredumo uses cookies and manage your preferences for our education platform in Uganda."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/cookies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy | Tredumo Uganda" />
        <meta
          name="twitter:description"
          content="Learn how Tredumo uses cookies and manage your preferences for our education platform in Uganda."
        />
        <link rel="canonical" href="https://tredumo.com/cookies" />
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
        }

        .prose h3 {
          color: ${theme === "dark" ? "#ffffff" : "#000000"};
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
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
        }

        .prose li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .prose strong {
          color: #8a87d8;
          font-weight: 600;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${
            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
          };
          transition: 0.4s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #8a87d8;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        input:disabled + .slider {
          opacity: 0.5;
          cursor: not-allowed;
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
              Cookie Management
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Cookie Policy
              <br />
              <span className="text-[#8a87d8]">& Preferences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto leading-relaxed`}
            >
              Understand how we use cookies to enhance your experience on our
              education platform
              <br />
              <span className="text-sm mt-2 block">
                Last updated: {lastUpdated}
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Settings Panel */}
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
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              Manage Preferences
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Your cookie
              <br />
              <span className="text-[#8a87d8]">preferences</span>
            </h2>
          </motion.div>

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

            <div className="relative space-y-8">
              {[
                {
                  id: "essential",
                  title: "Essential Cookies",
                  description:
                    "Required for the website to function properly. These cannot be disabled.",
                  examples: "Login sessions, security tokens, form submissions",
                  enabled: cookieSettings.essential,
                  required: true,
                },
                {
                  id: "analytics",
                  title: "Analytics Cookies",
                  description:
                    "Help us understand how you use our platform to improve your experience.",
                  examples:
                    "Page views, user interactions, performance metrics",
                  enabled: cookieSettings.analytics,
                  required: false,
                },
                {
                  id: "preferences",
                  title: "Preference Cookies",
                  description:
                    "Remember your settings and preferences for a personalized experience.",
                  examples:
                    "Language settings, theme preferences, dashboard layout",
                  enabled: cookieSettings.preferences,
                  required: false,
                },
                {
                  id: "marketing",
                  title: "Marketing Cookies",
                  description:
                    "Used to show you relevant content and measure campaign effectiveness.",
                  examples:
                    "Social media integration, targeted content, campaign tracking",
                  enabled: cookieSettings.marketing,
                  required: false,
                },
              ].map((cookie, index) => (
                <motion.div
                  key={cookie.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`feature-card p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                      : "bg-black/5 border-black/5"
                  } backdrop-blur-xl border`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <Cookie className="h-5 w-5 text-[#8a87d8] mr-3" />
                        <h3
                          className={`text-xl font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {cookie.title}
                        </h3>
                        {cookie.required && (
                          <span className="ml-3 px-2 py-1 text-xs font-medium bg-[#8a87d8] text-white rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        } mb-3 leading-relaxed`}
                      >
                        {cookie.description}
                      </p>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-white/50" : "text-black/50"
                        }`}
                      >
                        <strong>Examples:</strong> {cookie.examples}
                      </p>
                    </div>
                    <div className="ml-6 flex-shrink-0">
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={cookie.enabled}
                          disabled={cookie.required}
                          onChange={() =>
                            handleCookieToggle(
                              cookie.id as keyof typeof cookieSettings
                            )
                          }
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                      : "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Save Preferences
                  <Settings className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Accept All Cookies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types Overview */}
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
              Cookie Information
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              How we use cookies
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
                icon: <Shield className="h-8 w-8 text-[#8a87d8]" />,
                title: "Security",
                description:
                  "Protect your account and prevent unauthorized access to your educational data.",
              },
              {
                icon: <Settings className="h-8 w-8 text-[#8a87d8]" />,
                title: "Functionality",
                description:
                  "Remember your preferences and settings across different sessions.",
              },
              {
                icon: <Eye className="h-8 w-8 text-[#8a87d8]" />,
                title: "Analytics",
                description:
                  "Understand how you use our platform to improve the learning experience.",
              },
              {
                icon: <Info className="h-8 w-8 text-[#8a87d8]" />,
                title: "Personalization",
                description:
                  "Customize content and features based on your educational needs and preferences.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card text-center p-6 rounded-2xl ${
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
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {item.title}
                </h3>
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

      {/* Cookie Policy Content */}
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
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              experience by remembering your preferences and understanding how
              you use our education platform.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <h3>2.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for our website to function properly.
              They enable core functionality such as security, network
              management, and accessibility. Without these cookies, services you
              have asked for cannot be provided.
            </p>
            <ul>
              <li>
                <strong>Session cookies:</strong> Keep you logged in during your
                visit
              </li>
              <li>
                <strong>Security cookies:</strong> Protect against cross-site
                request forgery
              </li>
              <li>
                <strong>Load balancing cookies:</strong> Ensure optimal
                performance
              </li>
            </ul>

            <h3>2.2 Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. This
              helps us improve our platform for Ugandan educational
              institutions.
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Tracks page views, user
                behavior, and site performance
              </li>
              <li>
                <strong>Hotjar:</strong> Records user sessions to improve user
                experience
              </li>
              <li>
                <strong>Custom analytics:</strong> Tracks feature usage specific
                to education workflows
              </li>
            </ul>

            <h3>2.3 Preference Cookies</h3>
            <p>
              These cookies allow our website to remember information that
              changes the way the website behaves or looks, such as your
              preferred language or the region you are in.
            </p>
            <ul>
              <li>
                <strong>Language preferences:</strong> Remember if you prefer
                English, Luganda, or other languages
              </li>
              <li>
                <strong>Theme settings:</strong> Save your light/dark mode
                preference
              </li>
              <li>
                <strong>Dashboard layout:</strong> Remember your customized
                dashboard configuration
              </li>
            </ul>

            <h3>2.4 Marketing Cookies</h3>
            <p>
              These cookies are used to track visitors across websites. The
              intention is to display ads that are relevant and engaging for
              individual users and thereby more valuable for publishers and
              third-party advertisers.
            </p>
            <ul>
              <li>
                <strong>Social media cookies:</strong> Enable sharing content on
                social platforms
              </li>
              <li>
                <strong>Advertising cookies:</strong> Show relevant educational
                content and services
              </li>
              <li>
                <strong>Campaign tracking:</strong> Measure the effectiveness of
                our outreach efforts
              </li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies on our site are set by third-party services. We use
              these services to enhance your experience and provide additional
              functionality:
            </p>
            <ul>
              <li>
                <strong>Google Services:</strong> Analytics, Maps, and
                authentication
              </li>
              <li>
                <strong>Social Media:</strong> Facebook, Twitter, and LinkedIn
                integration
              </li>
              <li>
                <strong>Payment Processors:</strong> Secure payment processing
                for subscriptions
              </li>
              <li>
                <strong>Support Tools:</strong> Live chat and customer support
                features
              </li>
            </ul>

            <h2>4. Cookie Duration</h2>
            <p>Cookies can be either session cookies or persistent cookies:</p>
            <ul>
              <li>
                <strong>Session cookies:</strong> Temporary cookies that are
                deleted when you close your browser
              </li>
              <li>
                <strong>Persistent cookies:</strong> Remain on your device for a
                set period or until you delete them
              </li>
            </ul>
            <p>
              Most of our cookies are set to expire after 1 year, though some
              essential cookies may last longer to maintain security and
              functionality.
            </p>

            <h2>5. Managing Your Cookie Preferences</h2>
            <p>You have several options for managing cookies:</p>
            <ul>
              <li>
                <strong>Cookie Settings:</strong> Use our cookie preference
                center above to enable or disable specific types of cookies
              </li>
              <li>
                <strong>Browser Settings:</strong> Configure your browser to
                block or delete cookies
              </li>
              <li>
                <strong>Opt-out Tools:</strong> Use industry opt-out tools for
                advertising cookies
              </li>
            </ul>
            <p>
              Please note that disabling certain cookies may affect the
              functionality of our website and your user experience.
            </p>

            <h2>6. Cookies and Uganda's Data Protection Laws</h2>
            <p>
              Our use of cookies complies with Uganda's Data Protection and
              Privacy Act of 2019. We ensure that:
            </p>
            <ul>
              <li>
                We obtain appropriate consent before setting non-essential
                cookies
              </li>
              <li>
                We provide clear information about what cookies we use and why
              </li>
              <li>We give you control over your cookie preferences</li>
              <li>We regularly review and update our cookie practices</li>
            </ul>

            <h2>7. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the new Cookie Policy on this page and updating the "Last
              Updated" date.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us:
            </p>
            <p>
              <strong>Tredumo Uganda</strong>
              <br />
              Innovation Village, Ntinda
              <br />
              Kampala, Uganda
              <br />
              Email: <strong>privacy@tredumo.ug</strong>
              <br />
              Phone: <strong>+256 700 123 456</strong>
            </p>
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
                Questions about cookies?
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                We're here to help
                <br />
                <span className="text-[#8a87d8]">clarify anything</span>
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                } text-xl max-w-2xl mx-auto mb-8 leading-relaxed`}
              >
                Our privacy team is available to answer any questions about how
                we use cookies and how you can manage your preferences on our
                platform.
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
                <Link
                  to="/privacy"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
