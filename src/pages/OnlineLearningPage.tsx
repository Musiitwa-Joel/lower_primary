import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Monitor,
  Play,
  Users,
  Clock,
  Award,
  Wifi,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  MessageCircle,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface OnlineLearningPageProps {
  theme: string;
  toggleTheme: () => void;
}

const OnlineLearningPage: React.FC<OnlineLearningPageProps> = ({ theme, toggleTheme }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("classroom");
  const [demoActive, setDemoActive] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const learningPlatforms = {
    classroom: {
      name: "Virtual Classroom",
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      description: "Interactive live classes with real-time collaboration",
      features: [
        "HD Video & Audio",
        "Interactive Whiteboard",
        "Screen Sharing",
        "Breakout Rooms",
        "Recording & Playback",
        "Real-time Chat"
      ],
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
      demo: "https://example.com/classroom-demo"
    },
    lms: {
      name: "Learning Management System",
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      description: "Comprehensive platform for course content and progress tracking",
      features: [
        "Course Materials",
        "Assignment Submission",
        "Grade Tracking",
        "Progress Analytics",
        "Discussion Forums",
        "Calendar Integration"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      demo: "https://example.com/lms-demo"
    },
    mobile: {
      name: "Mobile Learning App",
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      description: "Learn on-the-go with our comprehensive mobile application",
      features: [
        "Offline Content",
        "Push Notifications",
        "Mobile Quizzes",
        "Video Streaming",
        "Note Taking",
        "Sync Across Devices"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      demo: "https://example.com/mobile-demo"
    }
  };

  const onlineFeatures = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Collaborative Learning",
      description: "Work together with classmates on projects and assignments",
      benefits: ["Group Projects", "Peer Review", "Study Groups", "Team Challenges"]
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with recorded lessons and materials",
      benefits: ["Self-Paced Learning", "Recorded Lectures", "Flexible Deadlines", "24/7 Access"]
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Personalized Learning",
      description: "AI-powered recommendations and adaptive learning paths",
      benefits: ["Custom Learning Paths", "Skill Assessment", "Progress Tracking", "Smart Recommendations"]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-orange-500" />,
      title: "Instant Support",
      description: "Get help from teachers and peers through integrated communication",
      benefits: ["Live Chat", "Q&A Forums", "Teacher Office Hours", "Peer Tutoring"]
    }
  ];

  const currentPlatform = learningPlatforms[selectedPlatform as keyof typeof learningPlatforms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Online Learning | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Experience online learning at ${schoolConfig.name}. Virtual classrooms, mobile apps, and comprehensive digital learning platforms.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10" />
          <div className="absolute inset-0 bg-grid-white opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Digital Education
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Online <span className="text-primary-500">Learning</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Seamless digital learning experiences that bring the classroom to you, anywhere and anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Object.entries(learningPlatforms).map(([key, platform]) => (
              <button
                key={key}
                onClick={() => setSelectedPlatform(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedPlatform === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {platform.icon}
                  <span className="font-semibold mt-4">{platform.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Platform Details */}
          <motion.div
            key={selectedPlatform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {currentPlatform.icon}
                  <h2 className={`text-3xl font-bold ml-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {currentPlatform.name}
                  </h2>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentPlatform.description}
                </p>

                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentPlatform.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setDemoActive(true)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center group"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Try Interactive Demo
                </button>
              </div>

              <div className="relative">
                <img
                  src={currentPlatform.image}
                  alt={currentPlatform.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Demo Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setDemoActive(true)}
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group"
                  >
                    <Play className="h-10 w-10 text-black ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online Learning Features */}
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
              Why Choose Online Learning?
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Discover the advantages of our comprehensive online learning ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onlineFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {demoActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setDemoActive(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-6xl w-full ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {currentPlatform.name} Demo
              </h3>
              <button
                onClick={() => setDemoActive(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img
                    src={currentPlatform.image}
                    alt={currentPlatform.name}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Interactive Demo Available</p>
                      <p className="text-sm opacity-90">Experience our platform features</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Demo Features
                  </h4>
                  <div className="space-y-3">
                    {currentPlatform.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default OnlineLearningPage;