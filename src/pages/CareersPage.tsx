import type React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Zap,
  Coffee,
  GraduationCap,
  Globe,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

interface CareersPageProps {
  theme: string;
}

const CareersPage: React.FC<CareersPageProps> = ({ theme = "light" }) => {
  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Entebbe, Uganda (Hybrid/Remote)",
      type: "Full-time",
      description:
        "We're looking for a Senior Frontend Engineer to help build and improve our user interfaces for educational institutions across Uganda and East Africa. You'll work closely with our product and design teams to create intuitive, responsive, and accessible experiences.",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Nkumba University, Uganda (Hybrid)",
      type: "Full-time",
      description:
        "Join our backend team to build scalable, reliable services that power our education management platform. You'll work with modern technologies to solve complex problems and improve performance for Ugandan universities.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Entebbe, Uganda (Hybrid/Remote)",
      type: "Full-time",
      description:
        "We're seeking an experienced Product Manager to lead the development of new features tailored for East African educational institutions. You'll work with cross-functional teams to define requirements, prioritize work, and deliver value to our users.",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Kampala, Uganda (Remote Available)",
      type: "Full-time",
      description:
        "Help us create beautiful, intuitive interfaces that delight our users across Uganda's educational landscape. You'll collaborate with product and engineering teams to design user-centered experiences for diverse educational environments.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Entebbe, Uganda (Field Work Required)",
      type: "Full-time",
      description:
        "Join our customer success team to help Ugandan educational institutions implement and get the most out of Tredumo. You'll be the primary point of contact for universities and schools, ensuring their success and satisfaction.",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Kampala, Uganda (Field Work Required)",
      type: "Full-time",
      description:
        "We're looking for a motivated Sales Development Representative to help grow our customer base across Uganda and East Africa. You'll identify and qualify leads, conduct outreach, and set up meetings for our account executives.",
    },
  ];

  const benefits = [
    {
      icon: <Heart className={`h-8 w-8 text-[#8a87d8]`} />,
      title: "Comprehensive Healthcare",
      description:
        "We offer top-tier medical coverage through Uganda's leading healthcare providers, with 100% of premiums covered by Tredumo for you and your dependents.",
    },
    {
      icon: <Zap className={`h-8 w-8 text-[#8a87d8]`} />,
      title: "Flexible Work",
      description:
        "Work from anywhere in Uganda with our hybrid approach, or choose full remote with quarterly team meetups at our Entebbe and Nkumba offices.",
    },
    {
      icon: <Coffee className={`h-8 w-8 text-[#8a87d8]`} />,
      title: "Generous Leave Policy",
      description:
        "Take the time you need to rest and recharge with our generous paid time off policy, plus public holidays and cultural celebration days.",
    },
    {
      icon: <GraduationCap className={`h-8 w-8 text-[#8a87d8]`} />,
      title: "Professional Development",
      description:
        "We invest in your growth with annual budgets for courses, conferences, and learning resources, including support for further education at Ugandan universities.",
    },
    {
      icon: <Globe className={`h-8 w-8 text-[#8a87d8]`} />,
      title: "Impact on Education",
      description:
        "Make a real difference in Uganda's education sector by working directly with universities and institutions to improve their management systems.",
    },
    {
      icon: <Shield className={`h-8 w-8 text-[#8a87d8]`} />,
      title: "Competitive Compensation",
      description:
        "Receive competitive salaries in UGX with performance bonuses, equity options, and benefits that reflect the cost of living in Uganda.",
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
    <>
      <Helmet>
        <title>Careers at Tredumo - Join Uganda's Leading EdTech Company</title>
        <meta
          name="description"
          content="Join Tredumo's mission to transform education management in Uganda and East Africa. Explore exciting career opportunities in engineering, product, design, and more at our Entebbe and Nkumba offices."
        />
        <meta
          name="keywords"
          content="Tredumo careers, Uganda tech jobs, EdTech careers, education technology jobs, software engineer Uganda, product manager Uganda, UX designer Uganda"
        />
        <meta
          property="og:title"
          content="Careers at Tredumo - Join Uganda's Leading EdTech Company"
        />
        <meta
          property="og:description"
          content="Join Tredumo's mission to transform education management in Uganda and East Africa. Explore exciting career opportunities in engineering, product, design, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/careers" />
        <meta
          property="og:image"
          content="https://tredumo.com/images/careers-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers at Tredumo - Join Uganda's Leading EdTech Company"
        />
        <meta
          name="twitter:description"
          content="Join Tredumo's mission to transform education management in Uganda and East Africa. Explore exciting career opportunities."
        />
        <meta
          name="twitter:image"
          content="https://tredumo.com/images/careers-twitter.jpg"
        />
        <link rel="canonical" href="https://tredumo.com/careers" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tredumo",
            url: "https://tredumo.com",
            logo: "https://tredumo.com/logo.png",
            description:
              "Leading education management platform in Uganda and East Africa",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nkumba University Campus",
              addressLocality: "Entebbe",
              addressCountry: "Uganda",
            },
            jobPosting: openPositions.map((position, index) => ({
              "@type": "JobPosting",
              title: position.title,
              description: position.description,
              hiringOrganization: {
                "@type": "Organization",
                name: "Tredumo",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: position.location.split(",")[0],
                  addressCountry: "Uganda",
                },
              },
              employmentType: position.type.toUpperCase().replace("-", "_"),
              datePosted: new Date().toISOString(),
            })),
          })}
        </script>
      </Helmet>

      <div className={`${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
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
                Join our mission to transform
                <br />
                <span className="text-[#8a87d8]">education in Uganda</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-xl ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto font-light leading-relaxed`}
              >
                We're building the future of education management in Uganda and
                East Africa, and we're looking for passionate, talented people
                to join our team.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Culture Section */}
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
                } backdrop-blur-xl rounded-[2rem] border p-8 md:p-12 overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span
                      className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
                    >
                      Our Culture
                    </span>
                    <h3
                      className={`text-3xl md:text-4xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mt-4 mb-6 tracking-tight`}
                    >
                      Work that matters, with people who care
                    </h3>

                    <div
                      className={`space-y-6 ${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } text-lg leading-relaxed`}
                    >
                      <p>
                        At Tredumo, we're passionate about improving education
                        through technology in Uganda and across East Africa. We
                        believe that by building better tools for educational
                        institutions, we can help create better learning
                        experiences for students throughout the region.
                      </p>
                      <p>
                        Our team is collaborative, innovative, and focused on
                        making a real impact in Uganda's education sector. We
                        value diverse perspectives, open communication, and a
                        healthy work-life balance that respects Ugandan culture
                        and values.
                      </p>
                      <p>
                        Whether you're working from our Entebbe office, Nkumba
                        University campus, or remotely from anywhere in Uganda,
                        you'll be part of a supportive community that celebrates
                        wins together and helps each other grow.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                      alt="Tredumo Team in Uganda"
                      className="rounded-2xl w-full shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Benefits & Perks
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 tracking-tight`}
              >
                Taking care of our team
                <br />
                <span className="text-[#8a87d8]">in Uganda</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-3xl ${
                    theme === "dark"
                      ? "bg-[#8a87d8]/5 hover:bg-[#8a87d8]/10 border-[#8a87d8]/10 hover:border-[#8a87d8]/20"
                      : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                  } backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div
                    className={`mb-6 p-3 rounded-xl inline-block ${
                      theme === "dark" ? "bg-[#8a87d8]/10" : "bg-[#8a87d8]/10"
                    }`}
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } leading-relaxed`}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } mb-6 text-lg`}
              >
                And more: Transport allowance, mobile money stipends, team
                retreats to Uganda's beautiful destinations, wellness programs,
                and cultural celebration bonuses!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
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
                Open Positions
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 tracking-tight`}
              >
                Join our growing team
                <br />
                <span className="text-[#8a87d8]">in Uganda</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-3xl ${
                    theme === "dark"
                      ? "bg-[#8a87d8]/5 hover:bg-[#8a87d8]/10 border-[#8a87d8]/10 hover:border-[#8a87d8]/20"
                      : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                  } backdrop-blur-xl border transition-all duration-300 hover:scale-[1.01]`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-4`}
                      >
                        {position.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center">
                          <Briefcase
                            className={`h-5 w-5 text-[#8a87d8] mr-3`}
                          />
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {position.department}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className={`h-5 w-5 text-[#8a87d8] mr-3`} />
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {position.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className={`h-5 w-5 text-[#8a87d8] mr-3`} />
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {position.type}
                          </span>
                        </div>
                      </div>

                      <p
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        } text-lg leading-relaxed mb-6 lg:mb-0`}
                      >
                        {position.description}
                      </p>
                    </div>

                    <div className="lg:ml-8 mt-6 lg:mt-0">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-[#8a87d8] text-white hover:bg-[#a5a3e0] px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } mb-6 text-lg`}
              >
                Don't see a position that matches your skills? We're always
                looking for talented Ugandans to join our team.
              </p>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                    : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Send us your resume
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Hiring Process */}
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
              } backdrop-blur-xl border p-8 md:p-12 relative overflow-hidden`}
            >
              <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

              <div className="relative">
                <span
                  className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
                >
                  Our Hiring Process
                </span>
                <h3
                  className={`text-3xl md:text-4xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mt-4 mb-8 tracking-tight`}
                >
                  What to expect when you apply
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Application Review",
                      description:
                        "Our recruiting team reviews your application and resume to determine if your skills and experience align with the role and our mission in Uganda.",
                    },
                    {
                      step: "2",
                      title: "Initial Interview",
                      description:
                        "A 30-45 minute video call or in-person meeting to discuss your background, experience, and interest in transforming education in Uganda.",
                    },
                    {
                      step: "3",
                      title: "Technical/Role Assessment",
                      description:
                        "Depending on the role, you may complete a practical assignment or technical interview to showcase your skills relevant to our educational platform.",
                    },
                    {
                      step: "4",
                      title: "Team Interviews",
                      description:
                        "Meet with potential teammates and cross-functional partners to discuss your experience and approach to solving education challenges.",
                    },
                    {
                      step: "5",
                      title: "Final Interview",
                      description:
                        "A conversation with senior leadership to discuss your career goals and how you can contribute to Tredumo's mission in Uganda.",
                    },
                    {
                      step: "6",
                      title: "Offer & Welcome",
                      description:
                        "If there's a mutual fit, we'll extend an offer and welcome you to the team with a proper Ugandan celebration!",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8a87d8] text-white flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-2`}
                        >
                          {step.title}
                        </h4>
                        <p
                          className={`${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          } leading-relaxed`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
                  Ready to make an impact?
                </span>
                <h2
                  className={`text-4xl md:text-5xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mt-4 mb-8 tracking-tight`}
                >
                  Transform education in Uganda
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } max-w-2xl mx-auto mb-8 text-lg leading-relaxed`}
                >
                  Join our team and help us revolutionize education management
                  for institutions across Uganda and East Africa.
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
                    View open positions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className={`${
                      theme === "dark"
                        ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                        : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                    } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
