import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", path: "/features" },
      { name: "Modules", path: "/modules" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Pricing", path: "/pricing" },
      { name: "Mobile App", path: "/mobile" },
      { name: "Product Updates", path: "/updates" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
      { name: "Corporate Responsibility", path: "/corporate-responsibility" },
      { name: "ESG", path: "/esg" },
      { name: "Diversity & Inclusion", path: "/diversity" },
      { name: "Events", path: "/events" },
    ],
    developers: [
      { name: "API & Documentation", path: "/developers" },
      { name: "Bug Bounty", path: "/security/bug-bounty" },
      { name: "Hackathons", path: "/hackathons" },
      { name: "Feature Requests", path: "/features/requests" },
    ],
    partners: [
      { name: "Partner Portal", path: "/partners/portal" },

      { name: "Startup Program", path: "/startup-program" },
      { name: "Affiliate Program", path: "/affiliate" },
    ],
    resources: [
      { name: "Trust Center", path: "/trust" },
      { name: "Compliance Hub", path: "/compliance" },
      { name: "Media Kit", path: "/media-kit" },
      { name: "Whitepapers", path: "/whitepapers" },
    ],
    community: [
      { name: "Merch Store", path: "/store" },
      // { name: "VIP Access", path: "/vip" },
      // { name: "Leaderboard", path: "/leaderboard" },
    ],
    legal: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" },
      { name: "Cookies", path: "/cookies" },
    ],
  };

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-[var(--dark-bg)] text-white"
          : "bg-white text-black"
      } relative`}
    >
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 mb-12"
        >
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-semibold">
              Tredumo
            </Link>
            <p
              className={`mt-4 ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              }`}
            >
              Transforming education management for the modern era.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-[var(--primary-transparent-10)] hover:bg-[var(--primary-transparent-20)] transition-colors text-[var(--primary)]`}
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-[var(--primary-transparent-10)] hover:bg-[var(--primary-transparent-20)] transition-colors text-[var(--primary)]`}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-[var(--primary-transparent-10)] hover:bg-[var(--primary-transparent-20)] transition-colors text-[var(--primary)]`}
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-[var(--primary-transparent-10)] hover:bg-[var(--primary-transparent-20)] transition-colors text-[var(--primary)]`}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      theme === "dark"
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      theme === "dark"
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Developers
            </h4>
            <ul className="space-y-4">
              {footerLinks.developers.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      theme === "dark"
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6 mt-8`}
            >
              Partners
            </h4>
            <ul className="space-y-4">
              {footerLinks.partners.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      theme === "dark"
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      theme === "dark"
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6 mt-8`}
            >
              Community
            </h4>
            <ul className="space-y-4">
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      theme === "dark"
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase mb-6`}
            >
              Updates
            </h4>
            <p
              className={`${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } mb-6`}
            >
              Sign up for product updates and news.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className={`w-full px-4 py-3 bg-[var(--primary-transparent-10)] focus:ring-[var(--primary-transparent-20)] text-white placeholder-white/40 border-[var(--primary-transparent-10)] rounded-lg focus:outline-none focus:ring-2 border`}
                />
              </div>
              <button className="w-full flex items-center justify-center bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] px-8 py-3 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        <div
          className={`border-t ${
            theme === "dark" ? "border-white/10" : "border-black/10"
          } pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p
              className={`${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } text-sm`}
            >
              <span
                style={{
                  fontSize: "1.5em",
                  verticalAlign: "middle",
                }}
              >
                &copy;
              </span>{" "}
              {currentYear} Tredumo. All rights reserved.
              <span className="ml-2 text-xs opacity-70">(v1.1.0)</span>
            </p>

            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    theme === "dark"
                      ? "text-white/60 hover:text-white"
                      : "text-black/60 hover:text-black"
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
