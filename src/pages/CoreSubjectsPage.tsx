import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Calculator,
  Globe,
  Beaker,
  Users,
  Award,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  Play,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface CoreSubjectsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const CoreSubjectsPage: React.FC<CoreSubjectsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedSubject, setSelectedSubject] = useState("mathematics");
  const schoolConfig = getCurrentSchoolConfig();

  const coreSubjects = {
    mathematics: {
      name: "Mathematics",
      icon: <Calculator className="h-8 w-8 text-blue-500" />,
      description: "Building logical thinking and problem-solving skills through comprehensive mathematical concepts",
      grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      topics: [
        "Algebra & Equations",
        "Geometry & Trigonometry", 
        "Calculus & Analysis",
        "Statistics & Probability",
        "Number Theory",
        "Mathematical Modeling"
      ],
      careers: ["Engineering", "Finance", "Data Science", "Architecture", "Research", "Technology"],
      teacher: "Dr. Sarah Nakato",
      experience: "15 years",
      qualifications: "PhD Mathematics, Cambridge University",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
      videoIntro: "https://example.com/math-intro.mp4",
      achievements: ["National Math Olympiad Coach", "Published 20+ research papers", "Best Teacher Award 2023"],
      resources: ["Interactive Calculators", "Problem Banks", "Video Tutorials", "Practice Tests"]
    },
    english: {
      name: "English Language & Literature",
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      description: "Developing communication skills, critical thinking, and literary appreciation",
      grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      topics: [
        "Reading Comprehension",
        "Creative Writing",
        "Grammar & Syntax",
        "Literature Analysis",
        "Public Speaking",
        "Media Literacy"
      ],
      careers: ["Journalism", "Law", "Teaching", "Publishing", "Communications", "Diplomacy"],
      teacher: "Ms. Grace Namuli",
      experience: "12 years",
      qualifications: "MA English Literature, Oxford University",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
      achievements: ["Published Author", "Literary Excellence Award", "Debate Coach Champion"],
      resources: ["Digital Library", "Writing Workshops", "Literature Guides", "Speaking Club"]
    },
    science: {
      name: "Integrated Science",
      icon: <Beaker className="h-8 w-8 text-purple-500" />,
      description: "Exploring the natural world through hands-on experiments and scientific inquiry",
      grades: ["S1", "S2", "S3"],
      topics: [
        "Scientific Method",
        "Matter & Energy",
        "Living Organisms",
        "Earth & Space",
        "Forces & Motion",
        "Environmental Science"
      ],
      careers: ["Medicine", "Research", "Environmental Science", "Laboratory Technology", "Biotechnology"],
      teacher: "Dr. Alice Nakimuli",
      experience: "10 years",
      qualifications: "PhD Chemistry, Makerere University",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      achievements: ["Science Fair Coordinator", "Research Publications", "Innovation Award"],
      resources: ["Virtual Labs", "Experiment Guides", "Safety Protocols", "Research Projects"]
    },
    social: {
      name: "Social Studies",
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      description: "Understanding society, culture, and global citizenship through historical and geographical perspectives",
      grades: ["S1", "S2", "S3", "S4"],
      topics: [
        "Uganda History",
        "World Geography",
        "Civics & Government",
        "Cultural Studies",
        "Economics Basics",
        "Global Issues"
      ],
      careers: ["Politics", "Diplomacy", "Social Work", "Tourism", "International Relations", "Journalism"],
      teacher: "Mr. John Ssemakula",
      experience: "14 years",
      qualifications: "MA History, Makerere University",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      achievements: ["Cultural Heritage Advocate", "Community Leader", "Historical Research"],
      resources: ["Interactive Maps", "Historical Archives", "Cultural Videos", "Field Trip Guides"]
    }
  };

  const currentSubject = coreSubjects[selectedSubject as keyof typeof coreSubjects];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Core Subjects | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore the core subjects at ${schoolConfig.name}. Mathematics, English, Science, and Social Studies form the foundation of our comprehensive education program.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            alt="Core Subjects"
            className="w-full h-full object-cover opacity-10"
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-r from-black/90 to-black/70" : "bg-gradient-to-r from-white/90 to-white/70"}`} />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Foundation of Excellence
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Core <span className="text-primary-500">Subjects</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Essential subjects that form the backbone of quality education, developing critical thinking and foundational knowledge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subject Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(coreSubjects).map(([key, subject]) => (
              <button
                key={key}
                onClick={() => setSelectedSubject(key)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedSubject === key
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  {subject.icon}
                  <span className="font-semibold mt-3">{subject.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Subject Details */}
          <motion.div
            key={selectedSubject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {currentSubject.icon}
                  <h2 className={`text-3xl font-bold ml-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {currentSubject.name}
                  </h2>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentSubject.description}
                </p>

                {/* Grade Levels */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Grade Levels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentSubject.grades.map((grade, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Topics */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Key Topics Covered
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentSubject.topics.map((topic, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`${theme === "dark" ? "text-white/90" : "text-black/90"}`}>
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Pathways */}
                <div>
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Career Pathways
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentSubject.careers.map((career, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary-500/20 text-secondary-500 rounded-full text-sm">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentSubject.image}
                  alt={currentSubject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Teacher Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{currentSubject.teacher}</h4>
                    <p className="text-sm opacity-90 mb-3">{currentSubject.qualifications}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{currentSubject.experience} experience</span>
                      <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                        Meet Teacher
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources & Tools */}
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
              Learning Resources & Tools
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Comprehensive resources to support learning in all core subjects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSubject.resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  <BookOpen className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {resource}
                </h3>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                  Access Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default CoreSubjectsPage;