import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Target,
  Eye,
  Heart,
  Star,
  Compass,
  Shield,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface MissionVisionPageProps {
  theme: string;
  toggleTheme: () => void;
}

const MissionVisionPage: React.FC<MissionVisionPageProps> = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState("mission");
  const schoolConfig = getCurrentSchoolConfig();

  const coreValues = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions.",
      color: "red"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for excellence in academics, character development, and all aspects of school life.",
      color: "yellow"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community",
      description: "We foster a supportive, inclusive community where every individual is valued and respected.",
      color: "blue"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
      title: "Innovation",
      description: "We embrace creativity, critical thinking, and innovative approaches to learning and problem-solving.",
      color: "purple"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Global Citizenship",
      description: "We prepare students to be responsible global citizens who contribute positively to society.",
      color: "green"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      title: "Respect",
      description: "We treat all members of our community with dignity, respect, and cultural sensitivity.",
      color: "indigo"
    }
  ];

  const strategicGoals = [
    {
      title: "Academic Excellence",
      description: "Maintain our position as a leading educational institution with outstanding academic results",
      progress: 95,
      icon: <BookOpen className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Infrastructure Development",
      description: "Continuously improve and expand our facilities to support modern learning",
      progress: 80,
      icon: <Target className="h-6 w-6 text-green-500" />
    },
    {
      title: "Technology Integration",
      description: "Enhance digital learning capabilities and prepare students for the digital age",
      progress: 85,
      icon: <Lightbulb className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Community Engagement",
      description: "Strengthen partnerships with local community and stakeholders",
      progress: 90,
      icon: <Users className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Mission & Vision | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Learn about the mission, vision, and core values of ${schoolConfig.name}. Our commitment to educational excellence and character development in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Geometric Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          {/* Geometric Background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-32 h-32 ${
                  i % 3 === 0 ? "bg-primary-500/5" : i % 3 === 1 ? "bg-secondary-500/5" : "bg-accent-500/5"
                } rounded-full blur-xl`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Our Purpose
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Mission & <span className="text-primary-500">Vision</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Guiding principles that drive our commitment to educational excellence and character development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`p-1 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-full transition-all duration-300 capitalize font-medium ${
                    activeTab === tab
                      ? "bg-primary-500 text-white scale-105"
                      : theme === "dark"
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "mission" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <Target className="h-12 w-12 text-primary-500 mr-4" />
                    <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Our Mission
                    </h2>
                  </div>
                  <div className={`text-2xl font-light ${theme === "dark" ? "text-white/90" : "text-black/90"} leading-relaxed mb-8`}>
                    "To provide holistic, quality education that nurtures intellectual curiosity, 
                    develops character, and prepares students to be responsible global citizens 
                    who contribute meaningfully to society."
                  </div>
                  <div className="space-y-4">
                    {[
                      "Deliver exceptional academic programs",
                      "Foster critical thinking and creativity",
                      "Build strong moral character",
                      "Prepare students for global success"
                    ].map((point, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-4" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
                    alt="Our Mission"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl" />
                </motion.div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative lg:order-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                    alt="Our Vision"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:order-1"
                >
                  <div className="flex items-center mb-6">
                    <Eye className="h-12 w-12 text-primary-500 mr-4" />
                    <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Our Vision
                    </h2>
                  </div>
                  <div className={`text-2xl font-light ${theme === "dark" ? "text-white/90" : "text-black/90"} leading-relaxed mb-8`}>
                    "To be the premier educational institution in {schoolConfig.address.country}, 
                    recognized for academic excellence, innovative teaching, and producing 
                    confident, compassionate leaders who shape the future."
                  </div>
                  <div className="space-y-4">
                    {[
                      "Leading educational innovation",
                      "Producing future leaders",
                      "Setting academic standards",
                      "Transforming communities"
                    ].map((point, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-4" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="space-y-16">
                <div className="text-center">
                  <Compass className="h-16 w-16 text-primary-500 mx-auto mb-6" />
                  <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Our Core Values
                  </h2>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
                    The fundamental principles that guide our decisions and shape our school culture
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105 ${
                        theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                      } border group`}
                    >
                      <div className={`p-4 rounded-2xl inline-block mb-6 ${theme === "dark" ? "bg-white/10" : "bg-black/10"} group-hover:scale-110 transition-transform`}>
                        {value.icon}
                      </div>
                      <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                        {value.title}
                      </h3>
                      <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Strategic Goals 2024-2027
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Our roadmap for continued excellence and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-4`}>
                    {goal.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {goal.title}
                  </h3>
                </div>
                <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6 leading-relaxed`}>
                  {goal.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Progress
                    </span>
                    <span className="text-primary-500 font-semibold">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className={`w-full bg-gray-200 rounded-full h-3 ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}>
                    <div
                      className="bg-primary-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
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
              <Award className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Be Part of Our Mission
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Join us in shaping the future of education and making a positive impact in our community
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium`}>
                  Learn More About Us
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

export default MissionVisionPage;