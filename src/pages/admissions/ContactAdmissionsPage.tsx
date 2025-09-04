import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  Send,
  CheckCircle,
  ArrowRight,
  FileText,
  Video,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface ContactAdmissionsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ContactAdmissionsPage: React.FC<ContactAdmissionsPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    studentGrade: "",
    message: "",
    preferredContact: "email",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const admissionsTeam = [
    {
      name: "Mrs. Grace Nakato",
      title: "Director of Admissions",
      email: "g.nakato@tredumoschool.ug",
      phone: "+256 414 123 456",
      specialization: "Overall admissions strategy and policy",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80",
      availability: "Mon-Fri: 8:00 AM - 5:00 PM",
    },
    {
      name: "Mr. David Mukasa",
      title: "Admissions Counselor",
      email: "d.mukasa@tredumoschool.ug",
      phone: "+256 414 123 457",
      specialization: "S1-S4 admissions and transfer students",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      availability: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
    },
    {
      name: "Ms. Sarah Namuli",
      title: "A-Level Admissions Specialist",
      email: "s.namuli@tredumoschool.ug",
      phone: "+256 414 123 458",
      specialization: "S5-S6 admissions and subject combinations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      availability: "Mon-Fri: 9:00 AM - 4:00 PM",
    },
    {
      name: "Mr. James Okello",
      title: "Financial Aid Coordinator",
      email: "j.okello@tredumoschool.ug",
      phone: "+256 414 123 459",
      specialization: "Scholarships, bursaries, and payment plans",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      availability: "Mon-Fri: 8:30 AM - 4:30 PM",
    },
  ];

  const contactServices = [
    {
      id: "general-inquiry",
      title: "General Admissions Inquiry",
      description: "Get answers to basic questions about our admission process",
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      responseTime: "Within 24 hours",
      bestFor: [
        "First-time inquiries",
        "General information",
        "School overview",
      ],
    },
    {
      id: "application-support",
      title: "Application Support",
      description: "Get help with your application process and requirements",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      responseTime: "Within 12 hours",
      bestFor: [
        "Application assistance",
        "Document requirements",
        "Process guidance",
      ],
    },
    {
      id: "campus-visit",
      title: "Schedule Campus Visit",
      description:
        "Book a personalized tour of our facilities and meet our team",
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      responseTime: "Same day confirmation",
      bestFor: ["Campus tours", "Meeting teachers", "Facility visits"],
    },
    {
      id: "virtual-meeting",
      title: "Virtual Consultation",
      description:
        "One-on-one video consultation with our admissions counselors",
      icon: <Video className="h-8 w-8 text-orange-500" />,
      responseTime: "Within 2 hours",
      bestFor: [
        "Detailed discussions",
        "Remote consultations",
        "Personalized guidance",
      ],
    },
  ];

  const inquiryTypes = [
    "General Information",
    "Application Process",
    "Entrance Examinations",
    "Fee Structure & Payment",
    "Scholarships & Bursaries",
    "Transfer Students",
    "Campus Tours",
    "Academic Programs",
    "Boarding Facilities",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
      >
        <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

        <section
          className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <div
            className="max-w-4xl mx-auto text-center"
            style={{ marginTop: "6rem" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>

              <div>
                <h1
                  className={`text-4xl md:text-5xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Message Sent Successfully!
                </h1>
                <p
                  className={`text-xl ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } mb-6`}
                >
                  Thank you for contacting our admissions team. We'll get back
                  to you within 24 hours.
                </p>
              </div>

              <div
                className={`max-w-2xl mx-auto p-8 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border text-left`}
              >
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-6`}
                >
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Acknowledgment",
                      description:
                        "You'll receive an automatic confirmation email within minutes",
                    },
                    {
                      step: "2",
                      title: "Review & Assignment",
                      description:
                        "Your inquiry will be reviewed and assigned to the appropriate counselor",
                    },
                    {
                      step: "3",
                      title: "Personal Response",
                      description:
                        "A member of our admissions team will contact you with detailed information",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div
                          className={`font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {item.title}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium`}
                >
                  Send Another Message
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors font-medium">
                  Track My Inquiry
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <MegaFooter theme={theme} />
      </div>
    );
  }

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Contact Admissions | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Contact the admissions team at ${schoolConfig.name}. Get personalized assistance with applications, requirements, and enrollment process.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} admissions contact, admissions office, enrollment help, application support, ${schoolConfig.address.city} school admissions`}
        />
        <meta
          property="og:title"
          content={`Contact Admissions | ${schoolConfig.name}`}
        />
        <meta
          property="og:description"
          content={`Get personalized assistance from the admissions team at ${schoolConfig.name}. Contact us for application support and enrollment guidance.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tredumo.com/admissions/contact"
        />
        <link rel="canonical" href="https://tredumo.com/admissions/contact" />
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Contact Admissions"
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
              Get Personal Assistance
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Contact <span className="text-primary-500">Admissions</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Our dedicated admissions team is here to guide you through every
              step of the enrollment process. Get personalized assistance and
              answers to all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Services */}
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
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              How Can We Help You?
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Choose the type of assistance you need and we'll connect you with
              the right team member
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedService === service.id
                    ? "bg-primary-500 text-white"
                    : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10 text-white"
                    : "bg-black/5 hover:bg-black/10 border-black/10 text-black"
                } border`}
                onClick={() => setSelectedService(service.id)}
              >
                <div
                  className={`p-4 rounded-xl inline-block mb-4 ${
                    selectedService === service.id
                      ? "bg-white/20"
                      : theme === "dark"
                      ? "bg-white/10"
                      : "bg-black/10"
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3`}>
                  {service.title}
                </h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    selectedService === service.id
                      ? "text-white/90"
                      : theme === "dark"
                      ? "text-white/70"
                      : "text-black/70"
                  }`}
                >
                  {service.description}
                </p>
                <div
                  className={`text-xs font-medium ${
                    selectedService === service.id
                      ? "text-white/80"
                      : "text-primary-500"
                  }`}
                >
                  Response: {service.responseTime}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Team */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-3xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Send Us a Message
                </h2>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  }`}
                >
                  Fill out the form below and we'll get back to you with
                  personalized assistance.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                          : "bg-black/5 border-black/20 text-black placeholder-black/50"
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                          : "bg-black/5 border-black/20 text-black placeholder-black/50"
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                          : "bg-black/5 border-black/20 text-black placeholder-black/50"
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="+256 700 123 456"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Student Grade Level
                    </label>
                    <select
                      name="studentGrade"
                      value={contactForm.studentGrade}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-white/5 border-white/20 text-white"
                          : "bg-black/5 border-black/20 text-black"
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    >
                      <option
                        value=""
                        className={
                          theme === "dark" ? "bg-gray-900" : "bg-white"
                        }
                      >
                        Select grade level
                      </option>
                      {schoolConfig.grades.map((grade) => (
                        <option
                          key={grade}
                          value={grade}
                          className={
                            theme === "dark" ? "bg-gray-900" : "bg-white"
                          }
                        >
                          {grade}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={contactForm.inquiryType}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === "dark"
                        ? "bg-white/5 border-white/20 text-white"
                        : "bg-black/5 border-black/20 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  >
                    <option
                      value=""
                      className={theme === "dark" ? "bg-gray-900" : "bg-white"}
                    >
                      Select inquiry type
                    </option>
                    {inquiryTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className={
                          theme === "dark" ? "bg-gray-900" : "bg-white"
                        }
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === "dark"
                        ? "bg-white/5 border-white/20 text-white placeholder-white/50"
                        : "bg-black/5 border-black/20 text-black placeholder-black/50"
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        id: "email",
                        name: "Email",
                        icon: <Mail className="h-4 w-4" />,
                      },
                      {
                        id: "phone",
                        name: "Phone",
                        icon: <Phone className="h-4 w-4" />,
                      },
                      {
                        id: "whatsapp",
                        name: "WhatsApp",
                        icon: <MessageCircle className="h-4 w-4" />,
                      },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() =>
                          setContactForm((prev) => ({
                            ...prev,
                            preferredContact: method.id,
                          }))
                        }
                        className={`p-3 rounded-lg border transition-colors flex flex-col items-center ${
                          contactForm.preferredContact === method.id
                            ? "bg-primary-500 text-white border-primary-500"
                            : theme === "dark"
                            ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                            : "bg-black/5 text-black border-black/20 hover:bg-black/10"
                        }`}
                      >
                        {method.icon}
                        <span className="text-sm mt-1">{method.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg transition-colors font-medium flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Admissions Team */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2
                  className={`text-3xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Meet Our Admissions Team
                </h2>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  }`}
                >
                  Experienced professionals dedicated to helping you join our
                  school community.
                </p>
              </div>

              <div className="space-y-6">
                {admissionsTeam.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl ${
                      theme === "dark"
                        ? "bg-white/5 hover:bg-white/10 border-white/10"
                        : "bg-black/5 hover:bg-black/10 border-black/10"
                    } border transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-1`}
                        >
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          } mb-2`}
                        >
                          {member.title}
                        </p>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          } mb-3 leading-relaxed`}
                        >
                          {member.specialization}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-primary-500 mr-2" />
                            <a
                              href={`mailto:${member.email}`}
                              className={`text-sm hover:text-primary-500 transition-colors ${
                                theme === "dark"
                                  ? "text-white/80"
                                  : "text-black/80"
                              }`}
                            >
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-primary-500 mr-2" />
                            <a
                              href={`tel:${member.phone.replace(/\D/g, "")}`}
                              className={`text-sm hover:text-primary-500 transition-colors ${
                                theme === "dark"
                                  ? "text-white/80"
                                  : "text-black/80"
                              }`}
                            >
                              {member.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-primary-500 mr-2" />
                            <span
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-white/70"
                                  : "text-black/70"
                              }`}
                            >
                              {member.availability}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Information */}
              <div
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-primary-500/10 border-primary-500/20"
                    : "bg-primary-500/10 border-primary-500/20"
                } border`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  Admissions Office
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Location
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        Administration Block, Ground Floor
                        <br />
                        {schoolConfig.address.street}
                        <br />
                        {schoolConfig.address.city},{" "}
                        {schoolConfig.address.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary-500 mr-3" />
                    <div>
                      <div
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Office Hours
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-500 mr-3" />
                    <div>
                      <div
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Direct Line
                      </div>
                      <a
                        href={`tel:${schoolConfig.phone.primary.replace(
                          /\D/g,
                          ""
                        )}`}
                        className={`text-sm hover:text-primary-500 transition-colors ${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {schoolConfig.phone.primary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
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
                Need Quick Answers?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Check our frequently asked questions or download our
                comprehensive admissions guide for immediate answers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  View Admissions FAQ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Admissions Guide
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

export default ContactAdmissionsPage;
