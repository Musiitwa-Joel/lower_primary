import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Monitor,
  Wifi,
  Play,
  BookOpen,
  Users,
  Zap,
  Globe,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  Gamepad2,
  Brain,
  Target,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface DigitalLearningPageProps {
  theme: string;
  toggleTheme: () => void;
}

const DigitalLearningPage: React.FC<DigitalLearningPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [activeDemo, setActiveDemo] = useState("virtual-classroom");
  const schoolConfig = getCurrentSchoolConfig();

  const digitalTools = [
    {
      category: "Learning Platforms",
      tools: [
        {
          name: "Virtual Classrooms",
          description: "Interactive online learning environments",
          icon: <Monitor className="h-8 w-8 text-blue-500" />,
          features: [
            "Live video sessions",
            "Screen sharing",
            "Interactive whiteboards",
            "Breakout rooms",
          ],
        },
        {
          name: "Learning Management System",
          description:
            "Centralized platform for course materials and assignments",
          icon: <BookOpen className="h-8 w-8 text-green-500" />,
          features: [
            "Course content",
            "Assignment submission",
            "Grade tracking",
            "Progress analytics",
          ],
        },
        {
          name: "Digital Library",
          description: "Vast collection of digital books and resources",
          icon: <Globe className="h-8 w-8 text-purple-500" />,
          features: [
            "E-books",
            "Research databases",
            "Multimedia content",
            "Citation tools",
          ],
        },
      ],
    },
    {
      category: "Interactive Tools",
      tools: [
        {
          name: "AR/VR Learning",
          description:
            "Immersive learning experiences through augmented and virtual reality",
          icon: <Camera className="h-8 w-8 text-orange-500" />,
          features: [
            "3D visualizations",
            "Virtual field trips",
            "Interactive simulations",
            "Hands-on experiments",
          ],
        },
        {
          name: "Gamified Learning",
          description: "Educational games and interactive challenges",
          icon: <Gamepad2 className="h-8 w-8 text-pink-500" />,
          features: [
            "Educational games",
            "Progress badges",
            "Leaderboards",
            "Achievement tracking",
          ],
        },
        {
          name: "AI-Powered Tutoring",
          description:
            "Personalized learning assistance through artificial intelligence",
          icon: <Brain className="h-8 w-8 text-indigo-500" />,
          features: [
            "Adaptive learning",
            "Personalized feedback",
            "Learning analytics",
            "Smart recommendations",
          ],
        },
      ],
    },
    {
      category: "Accessibility",
      tools: [
        {
          name: "Multi-Device Access",
          description: "Learn from any device, anywhere, anytime",
          icon: <Smartphone className="h-8 w-8 text-teal-500" />,
          features: [
            "Mobile apps",
            "Tablet optimization",
            "Offline access",
            "Cloud synchronization",
          ],
        },
        {
          name: "Assistive Technology",
          description: "Tools to support students with diverse learning needs",
          icon: <Headphones className="h-8 w-8 text-red-500" />,
          features: [
            "Text-to-speech",
            "Closed captions",
            "Screen readers",
            "Adjustable interfaces",
          ],
        },
      ],
    },
  ];

  const demos = {
    "virtual-classroom": {
      title: "Virtual Classroom Experience",
      description: "Experience our interactive online learning environment",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
      features: [
        "HD video and audio quality",
        "Interactive whiteboard with drawing tools",
        "Real-time chat and Q&A",
        "Screen sharing and presentation tools",
        "Breakout rooms for group work",
        "Recording and playback capabilities",
      ],
    },
    "ar-science": {
      title: "AR Science Laboratory",
      description:
        "Explore 3D molecular structures and conduct virtual experiments",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      features: [
        "3D molecular visualization",
        "Virtual chemistry experiments",
        "Interactive periodic table",
        "Safety-free experimentation",
        "Detailed result analysis",
        "Collaborative lab sessions",
      ],
    },
    "ai-tutor": {
      title: "AI Personal Tutor",
      description: "Get personalized learning assistance 24/7",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      features: [
        "Instant homework help",
        "Personalized study plans",
        "Adaptive difficulty levels",
        "Progress tracking",
        "Concept explanations",
        "Practice problem generation",
      ],
    },
  };

  const currentDemo = demos[activeDemo as keyof typeof demos];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Digital Learning Resources | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Discover ${schoolConfig.name}'s cutting-edge digital learning resources. Explore virtual classrooms, AR/VR tools, AI tutoring, and modern educational technology.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} digital learning, online education, virtual classroom, educational technology, e-learning ${schoolConfig.address.city}`}
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
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
            alt="Digital Learning"
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
              21st Century Education
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Digital Learning&nbsp;
              <span className="text-primary-500">Resources</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Cutting-edge technology and innovative digital tools that enhance
              learning experiences and prepare students for the digital future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
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
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Experience Digital Learning
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Try our interactive demos to see how technology enhances education
            </p>
          </motion.div>

          {/* Demo Selection */}
          <div className="flex justify-center mb-8">
            <div
              className={`p-1 rounded-full ${
                theme === "dark" ? "bg-white/10" : "bg-black/10"
              }`}
            >
              {Object.entries(demos).map(([key, demo]) => (
                <button
                  key={key}
                  onClick={() => setActiveDemo(key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeDemo === key
                      ? "bg-primary-500 text-white"
                      : theme === "dark"
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/10"
                  }`}
                >
                  {demo.title.split(" ")[0]} {demo.title.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Demo Display */}
          <motion.div
            key={activeDemo}
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
              <div className="relative h-64 lg:h-auto">
                <img
                  src={currentDemo.image}
                  alt={currentDemo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group">
                    <Play className="h-10 w-10 text-black ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3
                  className={`text-3xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {currentDemo.title}
                </h3>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } mb-6 leading-relaxed`}
                >
                  {currentDemo.description}
                </p>

                <div className="space-y-3 mb-8">
                  {currentDemo.features.map((feature, index) => (
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

                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center group">
                  Try Interactive Demo
                  <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Tools Categories */}
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
              Our Digital Toolkit
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Comprehensive suite of digital tools and resources designed to
              enhance every aspect of learning
            </p>
          </motion.div>

          <div className="space-y-16">
            {digitalTools.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-8 text-center`}
                >
                  {category.category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-2xl ${
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
                        {tool.icon}
                      </div>
                      <h4
                        className={`text-xl font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-3`}
                      >
                        {tool.name}
                      </h4>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        } mb-4 leading-relaxed`}
                      >
                        {tool.description}
                      </p>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                            <span
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-white/80"
                                  : "text-black/80"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Support */}
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
              Digital Infrastructure
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Robust technology infrastructure supporting seamless digital
              learning experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wifi className="h-8 w-8 text-blue-500" />,
                title: "High-Speed Internet",
                description: "Fiber optic connectivity throughout campus",
                stat: "1 Gbps",
              },
              {
                icon: <Monitor className="h-8 w-8 text-green-500" />,
                title: "Smart Classrooms",
                description: "Interactive displays and modern AV systems",
                stat: "45 Rooms",
              },
              {
                icon: <Tablet className="h-8 w-8 text-purple-500" />,
                title: "Student Devices",
                description: "Tablets and laptops for every student",
                stat: "1:1 Ratio",
              },
              {
                icon: <Users className="h-8 w-8 text-orange-500" />,
                title: "Tech Support",
                description: "24/7 technical assistance and training",
                stat: "5 Specialists",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border`}
              >
                <div
                  className={`p-4 rounded-xl inline-block mb-4 ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-2`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-3 leading-relaxed`}
                >
                  {item.description}
                </p>
                <div className="text-2xl font-bold text-primary-500">
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Benefits of Digital Learning
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="h-6 w-6 text-blue-500" />,
                    title: "Personalized Learning",
                    description:
                      "Adaptive content that adjusts to individual learning pace and style",
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-yellow-500" />,
                    title: "Instant Feedback",
                    description:
                      "Real-time assessment and immediate feedback for continuous improvement",
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-green-500" />,
                    title: "Global Connectivity",
                    description:
                      "Connect with students and educators worldwide for collaborative learning",
                  },
                  {
                    icon: <Brain className="h-6 w-6 text-purple-500" />,
                    title: "Enhanced Engagement",
                    description:
                      "Interactive multimedia content that makes learning more engaging and memorable",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        theme === "dark" ? "bg-white/10" : "bg-black/10"
                      }`}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-2`}
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
                    </div>
                  </div>
                ))}
              </div>
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
                Digital Learning Statistics
              </h3>
              <div className="space-y-6">
                {[
                  {
                    label: "Student Engagement",
                    value: "95%",
                    increase: "+15%",
                  },
                  {
                    label: "Learning Retention",
                    value: "88%",
                    increase: "+22%",
                  },
                  {
                    label: "Assignment Completion",
                    value: "92%",
                    increase: "+18%",
                  },
                  {
                    label: "Parent Satisfaction",
                    value: "96%",
                    increase: "+12%",
                  },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {stat.label}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-primary-500 font-bold text-lg">
                          {stat.value}
                        </span>
                        <span className="text-green-500 text-sm font-medium">
                          {stat.increase}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-full bg-gray-200 rounded-full h-2 ${
                        theme === "dark" ? "bg-white/20" : "bg-black/20"
                      }`}
                    >
                      <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: stat.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default DigitalLearningPage;
