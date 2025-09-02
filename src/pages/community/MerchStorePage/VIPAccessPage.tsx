import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Users, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface VIPAccessPageProps {
  theme: string;
}

const VIPAccessPage: React.FC<VIPAccessPageProps> = ({ theme }) => {
  const benefits = [
    {
      icon: (
        <Star
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Early Access",
      description:
        "Get early access to new features and updates before they're publicly released.",
      features: [
        "Beta feature testing",
        "Preview releases",
        "Feedback sessions",
        "Feature requests priority",
      ],
    },
    {
      icon: (
        <Shield
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Premium Support",
      description:
        "Dedicated support team and priority issue resolution for VIP members.",
      features: [
        "24/7 priority support",
        "Dedicated account manager",
        "Technical consulting",
        "Custom solutions",
      ],
    },
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Exclusive Events",
      description:
        "Access to exclusive events, workshops, and networking opportunities.",
      features: [
        "VIP-only webinars",
        "Private workshops",
        "Networking events",
        "Annual conference passes",
      ],
    },
    {
      icon: (
        <Zap
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Special Perks",
      description: "Enjoy special perks and rewards exclusive to VIP members.",
      features: [
        "Custom integrations",
        "Priority feature requests",
        "Free merchandise",
        "Partner discounts",
      ],
    },
  ];

  const tiers = [
    {
      name: "Silver",
      price: "499",
      period: "per month",
      description: "Essential VIP benefits for growing institutions",
      features: [
        "Early access to new features",
        "Priority support",
        "Quarterly strategy sessions",
        "VIP event access",
        "Basic customization options",
      ],
    },
    {
      name: "Gold",
      price: "999",
      period: "per month",
      description: "Advanced benefits for established organizations",
      features: [
        "All Silver benefits",
        "Dedicated account manager",
        "Monthly strategy sessions",
        "Custom integration support",
        "Advanced analytics",
        "Priority feature requests",
      ],
      highlighted: true,
    },
    {
      name: "Platinum",
      price: "1,999",
      period: "per month",
      description: "Ultimate VIP experience for enterprise clients",
      features: [
        "All Gold benefits",
        "24/7 premium support",
        "Weekly strategy sessions",
        "Custom development",
        "Unlimited customization",
        "Executive briefings",
        "On-site training",
      ],
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
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-black via-black/95 to-black"
                : "bg-gradient-to-b from-white via-white/95 to-white"
            }`}
          ></div>
        </div>

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
              VIP Access
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Exclusive benefits and premium support for our most valued
              partners
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
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
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Benefits
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              VIP member benefits
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-3 flex-shrink-0`}
                      />
                      <span
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
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
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Pricing
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Choose your VIP tier
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${
                  tier.highlighted ? "pricing-card-highlight" : "pricing-card"
                } ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                }`}
              >
                {tier.highlighted && (
                  <div
                    className={`absolute top-0 inset-x-0 h-2 ${
                      theme === "dark" ? "bg-white" : "bg-black"
                    } rounded-t-3xl`}
                  ></div>
                )}

                <div className="mb-8">
                  <h3
                    className={`text-2xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-6`}
                  >
                    {tier.description}
                  </p>
                  <div className="flex items-baseline">
                    <span
                      className={`text-4xl font-bold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      ${tier.price}
                    </span>
                    <span
                      className={`ml-2 ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase mb-4`}
                  >
                    What's included
                  </h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-3 flex-shrink-0`}
                        />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className={`w-full flex items-center justify-center ${
                      tier.highlighted
                        ? theme === "dark"
                          ? "bg-white text-black hover:bg-gray-100"
                          : "bg-black text-white hover:bg-gray-900"
                        : theme === "dark"
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-black/10 text-black hover:bg-black/20"
                    } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
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
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <h2
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Ready to upgrade?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Contact our team to learn more about VIP membership benefits and
                get started.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Compare Plans
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VIPAccessPage;
