import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Download,
  Eye,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface CurriculumOverviewPageProps {
  theme: string;
  toggleTheme: () => void;
}

const CurriculumOverviewPage: React.FC<CurriculumOverviewPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [activeFramework, setActiveFramework] = useState("cambridge");
  const schoolConfig = getCurrentSchoolConfig();

  const curriculumFrameworks = {
    cambridge: {
      name: "Cambridge International Curriculum",
      description:
        "World-class education preparing students for global opportunities",
      features: [
        "Internationally recognized qualifications",
        "Critical thinking and problem-solving focus",
        "Flexible subject combinations",
        "Continuous assessment and final examinations",
      ],
      grades: ["IGCSE (S1-S4)", "AS Level (S5)", "A Level (S6)"],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
    },
    uganda: {
      name: "Uganda National Curriculum",
      description:
        "Comprehensive local curriculum aligned with national standards",
      features: [
        "Ministry of Education approved",
        "Cultural relevance and local context",
        "Practical skills development",
        "Community-based learning approaches",
      ],
      grades: ["Lower Secondary (S1-S4)", "Upper Secondary (S5-S6)"],
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    },
  };

  const learningOutcomes = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Academic Excellence",
      description:
        "Develop deep understanding and mastery of subject content through rigorous academic standards",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Critical Thinking",
      description:
        "Foster analytical skills, creativity, and independent thinking for complex problem-solving",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Global Citizenship",
      description:
        "Prepare students to be responsible global citizens with cultural awareness and empathy",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Future Readiness",
      description:
        "Equip students with 21st-century skills for success in higher education and careers",
    },
  ];

  const assessmentMethods = [
    {
      type: "Continuous Assessment",
      percentage: 40,
      description: "Regular assignments, projects, and class participation",
      color: "bg-blue-500",
    },
    {
      type: "Mid-Term Examinations",
      percentage: 25,
      description: "Formal assessments at mid-point of each term",
      color: "bg-green-500",
    },
    {
      type: "Final Examinations",
      percentage: 35,
      description: "Comprehensive end-of-term examinations",
      color: "bg-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Curriculum Overview | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore ${schoolConfig.name}'s comprehensive curriculum framework, learning outcomes, and assessment methods. Discover our Cambridge International and Uganda National curriculum offerings.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} curriculum, Cambridge IGCSE, Uganda curriculum, academic programs, ${schoolConfig.address.city} education`}
        />
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
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            alt="Curriculum Overview"
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
              Academic Excellence
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Our Curriculum
              <br />
              <span className="text-primary-500">Framework</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Comprehensive educational programs designed to develop
              well-rounded students prepared for global success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Frameworks */}
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
              Curriculum Frameworks
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              We offer multiple curriculum pathways to meet diverse student
              needs and aspirations
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div
              className={`p-1 rounded-full ${
                theme === "dark" ? "bg-white/10" : "bg-black/10"
              }`}
            >
              {Object.entries(curriculumFrameworks).map(([key, framework]) => (
                <button
                  key={key}
                  onClick={() => setActiveFramework(key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFramework === key
                      ? "bg-primary-500 text-white"
                      : theme === "dark"
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/10"
                  }`}
                >
                  {framework.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeFramework}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3
                  className={`text-3xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {
                    curriculumFrameworks[
                      activeFramework as keyof typeof curriculumFrameworks
                    ].name
                  }
                </h3>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } mb-6 leading-relaxed`}
                >
                  {
                    curriculumFrameworks[
                      activeFramework as keyof typeof curriculumFrameworks
                    ].description
                  }
                </p>

                <div className="space-y-4 mb-8">
                  {curriculumFrameworks[
                    activeFramework as keyof typeof curriculumFrameworks
                  ].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span
                        className={`${
                          theme === "dark" ? "text-white/90" : "text-black/90"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Grade Levels
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {curriculumFrameworks[
                      activeFramework as keyof typeof curriculumFrameworks
                    ].grades.map((grade, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/academics/subjects"
                  className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium group"
                >
                  Explore Subjects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src={
                    curriculumFrameworks[
                      activeFramework as keyof typeof curriculumFrameworks
                    ].image
                  }
                  alt={
                    curriculumFrameworks[
                      activeFramework as keyof typeof curriculumFrameworks
                    ].name
                  }
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Outcomes */}
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
              Learning Outcomes
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Our curriculum is designed to achieve specific learning outcomes
              that prepare students for success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl text-center ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`p-4 rounded-xl inline-block mb-4 ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {outcome.icon}
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {outcome.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } leading-relaxed`}
                >
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Assessment Methods */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className={`text-4xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Assessment & Evaluation
              </h2>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } mb-8 leading-relaxed`}
              >
                Our comprehensive assessment system ensures fair evaluation and
                continuous improvement of student learning.
              </p>

              <div className="space-y-6">
                {assessmentMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {method.type}
                      </span>
                      <span className="text-primary-500 font-bold">
                        {method.percentage}%
                      </span>
                    </div>
                    <div
                      className={`w-full bg-gray-200 rounded-full h-3 ${
                        theme === "dark" ? "bg-white/20" : "bg-black/20"
                      }`}
                    >
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${method.color}`}
                        style={{ width: `${method.percentage}%` }}
                      />
                    </div>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/academics/assessment"
                className={`inline-flex items-center mt-8 ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                } px-6 py-3 rounded-full transition-all duration-300 font-medium group`}
              >
                Learn More About Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } border backdrop-blur-xl`}
            >
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    98%
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Pass Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    25
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Max Class Size
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    15+
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Subject Options
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    95%
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    University Acceptance
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
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
              Explore Our Curriculum
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Subjects Offered",
                description:
                  "Comprehensive range of subjects across all disciplines",
                icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                link: "/academics/subjects",
                color: "blue",
              },
              {
                title: "Assessment & Exams",
                description: "Fair and comprehensive evaluation methods",
                icon: <Award className="h-8 w-8 text-green-500" />,
                link: "/academics/assessment",
                color: "green",
              },
              {
                title: "Digital Learning",
                description: "Modern technology-enhanced learning resources",
                icon: <Eye className="h-8 w-8 text-purple-500" />,
                link: "/academics/digital-learning",
                color: "purple",
              },
              {
                title: "Co-Curricular Activities",
                description: "Holistic development through diverse activities",
                icon: <Users className="h-8 w-8 text-orange-500" />,
                link: "/academics/co-curricular",
                color: "orange",
              },
              {
                title: "Academic Calendar",
                description: "Important dates and academic schedule",
                icon: <Clock className="h-8 w-8 text-pink-500" />,
                link: "/academics/calendar",
                color: "pink",
              },
              {
                title: "Curriculum Guide",
                description: "Download comprehensive curriculum documentation",
                icon: <Download className="h-8 w-8 text-teal-500" />,
                link: "/curriculum-guide.pdf",
                color: "teal",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={item.link}
                  className={`group block p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "bg-white/5 hover:bg-white/10 border-white/10"
                      : "bg-black/5 hover:bg-black/10 border-black/10"
                  } border`}
                >
                  <div
                    className={`p-4 rounded-xl inline-block mb-4 ${
                      theme === "dark" ? "bg-white/10" : "bg-black/10"
                    } group-hover:scale-110 transition-transform`}
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
                    } leading-relaxed mb-4`}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center text-primary-500 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default CurriculumOverviewPage;
