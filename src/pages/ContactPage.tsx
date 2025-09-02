import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

interface ContactPageProps {
  theme: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      city: "Entebbe",
      address: "Entebbe International Airport Road, Entebbe, Uganda",
      phone: "+256 414 321 789",
      email: "entebbe@tredumo.com",
      hours: "Mon-Fri: 8am-6pm EAT",
    },
    {
      city: "Nkumba University",
      address: "Nkumba University Campus, Entebbe, Uganda",
      phone: "+256 414 320 662",
      email: "nkumba@tredumo.com",
      hours: "Mon-Fri: 8am-5pm EAT",
    },
  ];

  const departments = [
    {
      name: "Sales",
      description: "For pricing inquiries and product demos",
      email: "sales@tredumo.com",
      phone: "+256 706-231319",
    },
    {
      name: "Support",
      description: "For technical assistance and customer service",
      email: "support@tredumo.com",
      phone: "+256 762-219997",
    },
    {
      name: "Partnerships",
      description: "For integration and partnership opportunities",
      email: "partnerships@tredumo.com",
      phone: "+256 703-840326",
    },
    {
      name: "Media",
      description: "For press inquiries and media relations",
      email: "media@tredumo.com",
      phone: "+256770421202",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        privacy: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
        <title>Contact Us | Tredumo Tech Company</title>
        <meta
          name="description"
          content="Get in touch with Tredumo Tech Company for support, partnerships, product inquiries, or general questions. We're here to help you transform education through technology."
        />
        <meta
          name="keywords"
          content="Tredumo contact, EdTech support Uganda, contact Tredumo, education technology Uganda, school system support, Tredumo tech help"
        />
        <meta property="og:title" content="Contact Us | Tredumo Tech Company" />
        <meta
          property="og:description"
          content="Reach out to Tredumo for support, collaborations, or more information about our EdTech solutions for schools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Tredumo Tech Company"
        />
        <meta
          name="twitter:description"
          content="Reach out to Tredumo for support, collaborations, or more information about our EdTech solutions for schools."
        />
        <link rel="canonical" href="https://tredumo.com/contact" />
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
              Get in touch with
              <br />
              <span className="text-[#8a87d8]">our team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Have questions about Tredumo? We're here to help. Reach out to us
              and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-3xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Send us a message
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-lg leading-relaxed`}
                >
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-8 rounded-3xl ${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 border-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 border-[#8a87d8]/20"
                  } border text-center`}
                >
                  <CheckCircle className="h-16 w-16 text-[#8a87d8] mx-auto mb-4" />
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    Message sent successfully!
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-[#8a87d8] hover:text-[#a5a3e0] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className={`block text-sm font-medium ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mb-2`}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 ${
                          theme === "dark"
                            ? "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-white placeholder-white/40 border-[#8a87d8]/10"
                            : "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-black placeholder-black/40 border-[#8a87d8]/10"
                        } rounded-lg focus:outline-none focus:ring-2 border transition-all duration-300`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className={`block text-sm font-medium ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mb-2`}
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 ${
                          theme === "dark"
                            ? "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-white placeholder-white/40 border-[#8a87d8]/10"
                            : "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-black placeholder-black/40 border-[#8a87d8]/10"
                        } rounded-lg focus:outline-none focus:ring-2 border transition-all duration-300`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-white placeholder-white/40 border-[#8a87d8]/10"
                          : "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-black placeholder-black/40 border-[#8a87d8]/10"
                      } rounded-lg focus:outline-none focus:ring-2 border transition-all duration-300`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      Company / Institution
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-white placeholder-white/40 border-[#8a87d8]/10"
                          : "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-black placeholder-black/40 border-[#8a87d8]/10"
                      } rounded-lg focus:outline-none focus:ring-2 border transition-all duration-300`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-white border-[#8a87d8]/10"
                          : "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-black border-[#8a87d8]/10"
                      } rounded-lg focus:outline-none focus:ring-2 border transition-all duration-300`}
                    >
                      <option
                        value=""
                        className={
                          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
                        }
                      >
                        Select a subject
                      </option>
                      <option
                        value="sales"
                        className={
                          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
                        }
                      >
                        Sales Inquiry
                      </option>
                      <option
                        value="support"
                        className={
                          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
                        }
                      >
                        Technical Support
                      </option>
                      <option
                        value="demo"
                        className={
                          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
                        }
                      >
                        Request a Demo
                      </option>
                      <option
                        value="partnership"
                        className={
                          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
                        }
                      >
                        Partnership Opportunity
                      </option>
                      <option
                        value="other"
                        className={
                          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
                        }
                      >
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-white placeholder-white/40 border-[#8a87d8]/10"
                          : "bg-[#8a87d8]/5 focus:ring-[#8a87d8]/50 text-black placeholder-black/40 border-[#8a87d8]/10"
                      } rounded-lg focus:outline-none focus:ring-2 border transition-all duration-300`}
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#8a87d8] focus:ring-[#8a87d8] border-[#8a87d8]/30 rounded"
                    />
                    <label
                      htmlFor="privacy"
                      className={`ml-2 block text-sm ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      I agree to the{" "}
                      <Link
                        to="/privacy"
                        className="text-[#8a87d8] hover:text-[#a5a3e0] underline"
                      >
                        privacy policy
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center ${
                      isSubmitting
                        ? "bg-[#8a87d8]/50 cursor-not-allowed"
                        : "bg-[#8a87d8] hover:bg-[#a5a3e0]"
                    } text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide group`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-3xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Contact departments
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } text-lg leading-relaxed`}
                >
                  Reach out directly to the department that can best assist you.
                </p>
              </div>

              <div className="space-y-6">
                {departments.map((department, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-3xl ${
                      theme === "dark"
                        ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                        : "bg-black/5 border-black/10"
                    } backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {department.name}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } mb-4 leading-relaxed`}
                    >
                      {department.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className={`h-4 w-4 text-[#8a87d8] mr-3`} />
                        <a
                          href={`mailto:${department.email}`}
                          className={`${
                            theme === "dark"
                              ? "text-white/80 hover:text-white"
                              : "text-black/80 hover:text-black"
                          } transition-colors`}
                        >
                          {department.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className={`h-4 w-4 text-[#8a87d8] mr-3`} />
                        <a
                          href={`tel:${department.phone.replace(/\D/g, "")}`}
                          className={`${
                            theme === "dark"
                              ? "text-white/80 hover:text-white"
                              : "text-black/80 hover:text-black"
                          } transition-colors`}
                        >
                          {department.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2
                  className={`text-3xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Visit our offices
                </h2>
                <div className="space-y-6 mt-6">
                  {offices.map((office, index) => (
                    <div key={index} className="flex space-x-4">
                      <MapPin
                        className={`h-6 w-6 text-[#8a87d8] flex-shrink-0`}
                      />
                      <div>
                        <h3
                          className={`text-lg font-medium ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-1`}
                        >
                          {office.city}
                        </h3>
                        <p
                          className={`${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          } mb-2 leading-relaxed`}
                        >
                          {office.address}
                        </p>
                        <div className="flex items-center mb-1">
                          <Clock className={`h-4 w-4 text-[#8a87d8] mr-2`} />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            {office.hours}
                          </span>
                        </div>
                        <div className="flex items-center mb-1">
                          <Phone className={`h-4 w-4 text-[#8a87d8] mr-2`} />
                          <a
                            href={`tel:${office.phone.replace(/\D/g, "")}`}
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60 hover:text-white"
                                : "text-black/60 hover:text-black"
                            } transition-colors`}
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className={`h-4 w-4 text-[#8a87d8] mr-2`} />
                          <a
                            href={`mailto:${office.email}`}
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60 hover:text-white"
                                : "text-black/60 hover:text-black"
                            } transition-colors`}
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Need Help?
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Have more questions?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8 text-lg leading-relaxed`}
              >
                Check out our frequently asked questions or reach out to our
                support team for assistance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                      : "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  View FAQs
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:support@tredumo.com"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center`}
                >
                  Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
