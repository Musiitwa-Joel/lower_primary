import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Target,
  Clock,
  Award,
  BookOpen,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Calendar,
  FileText,
  Brain,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface ExamPreparationPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ExamPreparationPage: React.FC<ExamPreparationPageProps> = ({ theme, toggleTheme }) => {
  const [selectedExam, setSelectedExam] = useState("midterm");
  const [studyPlanActive, setStudyPlanActive] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const examTypes = {
    midterm: {
      name: "Mid-Term Examinations",
      duration: "2 weeks",
      subjects: 8,
      description: "Comprehensive assessment covering half-term curriculum",
      schedule: "February 15-26, 2024",
      weight: "25% of final grade",
      format: "Written & Practical",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      tips: [
        "Review class notes daily",
        "Practice past papers",
        "Form study groups",
        "Manage time effectively"
      ]
    },
    final: {
      name: "Final Examinations",
      duration: "3 weeks", 
      subjects: 10,
      description: "End-of-year comprehensive examinations",
      schedule: "November 5-23, 2024",
      weight: "60% of final grade",
      format: "Written, Practical & Oral",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80",
      tips: [
        "Start preparation early",
        "Create revision timetable",
        "Practice under exam conditions",
        "Stay healthy and rested"
      ]
    },
    cambridge: {
      name: "Cambridge IGCSE",
      duration: "6 weeks",
      subjects: 6,
      description: "International General Certificate of Secondary Education",
      schedule: "May 6 - June 14, 2024",
      weight: "100% external assessment",
      format: "International Standard",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      tips: [
        "Understand exam format",
        "Practice with past papers",
        "Time management skills",
        "International standards"
      ]
    }
  };

  const preparationResources = [
    {
      category: "Study Guides",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      resources: [
        "Subject-specific study guides",
        "Key concept summaries", 
        "Formula sheets and references",
        "Important dates and events"
      ],
      count: "150+ guides"
    },
    {
      category: "Practice Tests",
      icon: <Target className="h-8 w-8 text-green-500" />,
      resources: [
        "Mock examinations",
        "Timed practice tests",
        "Subject-wise quizzes",
        "Instant feedback and scoring"
      ],
      count: "500+ tests"
    },
    {
      category: "Past Papers",
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      resources: [
        "5 years of past papers",
        "Marking schemes included",
        "Examiner reports",
        "Grade boundaries and statistics"
      ],
      count: "200+ papers"
    },
    {
      category: "Study Techniques",
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      resources: [
        "Memory techniques and mnemonics",
        "Time management strategies",
        "Stress management tips",
        "Effective note-taking methods"
      ],
      count: "50+ techniques"
    }
  ];

  const studyPlan = {
    weeks: [
      {
        week: "Week 1-2",
        focus: "Foundation Review",
        activities: ["Review class notes", "Identify weak areas", "Create study schedule"],
        color: "bg-blue-500"
      },
      {
        week: "Week 3-4", 
        focus: "Intensive Study",
        activities: ["Deep dive into topics", "Practice problems", "Group study sessions"],
        color: "bg-green-500"
      },
      {
        week: "Week 5-6",
        focus: "Practice & Review",
        activities: ["Mock exams", "Past papers", "Final review"],
        color: "bg-purple-500"
      },
      {
        week: "Week 7",
        focus: "Final Preparation",
        activities: ["Light review", "Relaxation", "Exam strategy"],
        color: "bg-orange-500"
      }
    ]
  };

  const currentExam = examTypes[selectedExam as keyof typeof examTypes];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Exam Preparation | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Comprehensive exam preparation resources at ${schoolConfig.name}. Study guides, practice tests, past papers, and expert guidance.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
            alt="Exam Preparation"
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
              Excellence in Assessment
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Exam <span className="text-primary-500">Preparation</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Comprehensive preparation resources and strategies to help you excel in all examinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exam Type Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Object.entries(examTypes).map(([key, exam]) => (
              <button
                key={key}
                onClick={() => setSelectedExam(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-left ${
                  selectedExam === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <h3 className="text-xl font-bold mb-3">{exam.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{exam.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>{exam.subjects} subjects</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span>{exam.weight}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Exam Details */}
          <motion.div
            key={selectedExam}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                  {currentExam.name}
                </h2>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentExam.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Schedule</span>
                    <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{currentExam.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Duration</span>
                    <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{currentExam.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Format</span>
                    <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{currentExam.format}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Preparation Tips
                  </h3>
                  <div className="space-y-3">
                    {currentExam.tips.map((tip, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStudyPlanActive(true)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center group"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Create Study Plan
                </button>
              </div>

              <div className="relative">
                <img
                  src={currentExam.image}
                  alt={currentExam.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Exam Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Exam Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary-400">98%</div>
                        <div className="text-sm opacity-90">Pass Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-400">85%</div>
                        <div className="text-sm opacity-90">Excellence Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preparation Resources */}
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
              Preparation Resources
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Everything you need to succeed in your examinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preparationResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {resource.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {resource.category}
                </h3>
                <div className="space-y-2 mb-4">
                  {resource.resources.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-primary-500 font-semibold text-sm">{resource.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Plan Modal */}
      {studyPlanActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setStudyPlanActive(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Personalized Study Plan
              </h3>
              <button
                onClick={() => setStudyPlanActive(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"}`}>
                <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  8-Week Study Plan for {currentExam.name}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {studyPlan.weeks.map((week, index) => (
                    <div key={index} className={`p-4 rounded-lg ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                      <h5 className={`font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {week.week}
                      </h5>
                      <p className={`text-sm font-medium mb-3 text-primary-500`}>
                        {week.focus}
                      </p>
                      <ul className="space-y-1">
                        {week.activities.map((activity, idx) => (
                          <li key={idx} className={`text-xs ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                            • {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Download Study Plan
                </button>
                <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium`}>
                  Customize Plan
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

export default ExamPreparationPage;