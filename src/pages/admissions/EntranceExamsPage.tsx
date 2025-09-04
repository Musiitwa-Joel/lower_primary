import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Clock,
  Calendar,
  Users,
  Award,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  Target,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface ExamInfo {
  id: string;
  name: string;
  description: string;
  duration: string;
  subjects: string[];
  format: string;
  passingScore: number;
  sampleQuestions: number;
  preparationTime: string;
  cost: number;
  grades: string[];
}

interface EntranceExamsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const EntranceExamsPage: React.FC<EntranceExamsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedExam, setSelectedExam] = useState<ExamInfo | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const schoolConfig = getCurrentSchoolConfig();

  const entranceExams: ExamInfo[] = [
    {
      id: "s1-entrance",
      name: "S1 Entrance Examination",
      description: "Comprehensive assessment for students transitioning from primary to secondary education",
      duration: "3 hours",
      subjects: ["Mathematics", "English", "General Knowledge", "Reasoning"],
      format: "Multiple choice and written responses",
      passingScore: 65,
      sampleQuestions: 50,
      preparationTime: "4-6 weeks recommended",
      cost: 25000,
      grades: ["S1"]
    },
    {
      id: "transfer-assessment",
      name: "Transfer Student Assessment",
      description: "Placement test for students transferring from other schools",
      duration: "2.5 hours",
      subjects: ["Mathematics", "English", "Science", "Subject-specific tests"],
      format: "Written examination with practical components",
      passingScore: 70,
      sampleQuestions: 40,
      preparationTime: "2-3 weeks recommended",
      cost: 30000,
      grades: ["S2", "S3", "S4"]
    },
    {
      id: "a-level-entry",
      name: "A-Level Entry Examination",
      description: "Advanced assessment for students entering A-Level programs",
      duration: "4 hours",
      subjects: ["Core subjects", "Chosen A-Level subjects", "Critical thinking"],
      format: "Essay-based and analytical questions",
      passingScore: 75,
      sampleQuestions: 30,
      preparationTime: "6-8 weeks recommended",
      cost: 35000,
      grades: ["S5"]
    }
  ];

  const examSchedule = [
    {
      exam: "S1 Entrance Examination",
      sessions: [
        { date: "2024-06-15", time: "8:00 AM - 11:00 AM", venue: "Main Hall", capacity: 200 },
        { date: "2024-06-22", time: "8:00 AM - 11:00 AM", venue: "Main Hall", capacity: 200 },
        { date: "2024-07-06", time: "8:00 AM - 11:00 AM", venue: "Main Hall", capacity: 200 }
      ]
    },
    {
      exam: "Transfer Student Assessment",
      sessions: [
        { date: "2024-06-20", time: "9:00 AM - 11:30 AM", venue: "Academic Block", capacity: 50 },
        { date: "2024-07-10", time: "9:00 AM - 11:30 AM", venue: "Academic Block", capacity: 50 }
      ]
    },
    {
      exam: "A-Level Entry Examination",
      sessions: [
        { date: "2024-06-25", time: "8:00 AM - 12:00 PM", venue: "Examination Hall", capacity: 100 },
        { date: "2024-07-15", time: "8:00 AM - 12:00 PM", venue: "Examination Hall", capacity: 100 }
      ]
    }
  ];

  const preparationResources = [
    {
      title: "Study Guides",
      description: "Comprehensive study materials covering all exam topics",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      resources: [
        "Subject-specific study guides",
        "Key concept summaries",
        "Formula sheets and references",
        "Important topic highlights"
      ]
    },
    {
      title: "Practice Tests",
      description: "Mock examinations to familiarize with exam format",
      icon: <Target className="h-8 w-8 text-green-500" />,
      resources: [
        "Full-length practice exams",
        "Timed practice sessions",
        "Subject-wise mini tests",
        "Instant scoring and feedback"
      ]
    },
    {
      title: "Past Papers",
      description: "Previous years' examination papers with solutions",
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      resources: [
        "3 years of past papers",
        "Detailed answer keys",
        "Examiner comments",
        "Grade boundaries"
      ]
    },
    {
      title: "Preparation Classes",
      description: "Optional coaching sessions for exam preparation",
      icon: <Users className="h-8 w-8 text-orange-500" />,
      resources: [
        "Weekend preparation classes",
        "Subject-specific coaching",
        "Small group sessions",
        "Expert teacher guidance"
      ]
    }
  ];

  const tabs = [
    { id: "overview", name: "Overview", icon: <FileText className="h-4 w-4" /> },
    { id: "schedule", name: "Exam Schedule", icon: <Calendar className="h-4 w-4" /> },
    { id: "preparation", name: "Preparation", icon: <BookOpen className="h-4 w-4" /> },
    { id: "registration", name: "Registration", icon: <Users className="h-4 w-4" /> }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Entrance Examinations | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Entrance examination information for ${schoolConfig.name}. Learn about exam formats, schedules, preparation resources, and registration process.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} entrance exams, admission tests, S1 entrance, transfer assessment, A-level entry, ${schoolConfig.address.city} school exams`}
        />
        <meta property="og:title" content={`Entrance Examinations | ${schoolConfig.name}`} />
        <meta property="og:description" content={`Comprehensive information about entrance examinations at ${schoolConfig.name}. Exam schedules, preparation resources, and registration details.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/admissions/exams" />
        <link rel="canonical" href="https://tredumo.com/admissions/exams" />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
            alt="Entrance Examinations"
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
              Assessment & Evaluation
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Entrance <span className="text-primary-500">Examinations</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Fair and comprehensive entrance examinations designed to assess student readiness and ensure proper placement in our academic programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary-500 text-white scale-105"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Examination Types
                  </h2>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
                    We offer different entrance examinations based on the grade level and student background
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {entranceExams.map((exam, index) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105 cursor-pointer`}
                      onClick={() => setSelectedExam(exam)}
                    >
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 rounded-full ${theme === "dark" ? "bg-primary-500/20" : "bg-primary-500/20"} flex items-center justify-center mx-auto mb-4`}>
                          <FileText className="h-8 w-8 text-primary-500" />
                        </div>
                        <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                          {exam.name}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                          {exam.grades.map((grade, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full">
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed text-center`}>
                        {exam.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                            Duration
                          </span>
                          <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                            {exam.duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                            Passing Score
                          </span>
                          <span className="font-medium text-green-500">
                            {exam.passingScore}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                            Exam Fee
                          </span>
                          <span className="font-medium text-primary-500">
                            UGX {exam.cost.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Examination Schedule 2024
                  </h2>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
                    Plan ahead with our comprehensive examination schedule
                  </p>
                </div>

                <div className="space-y-8">
                  {examSchedule.map((examGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
                    >
                      <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                        {examGroup.exam}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {examGroup.sessions.map((session, sessionIndex) => (
                          <div key={sessionIndex} className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary-500 mb-2">
                                {new Date(session.date).toLocaleDateString('en-UG', { 
                                  weekday: 'long',
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </div>
                              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4`}>
                                {session.time}
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-center">
                                  <Clock className="h-4 w-4 text-primary-500 mr-2" />
                                  <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                    {session.venue}
                                  </span>
                                </div>
                                <div className="flex items-center justify-center">
                                  <Users className="h-4 w-4 text-primary-500 mr-2" />
                                  <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                    {session.capacity} seats
                                  </span>
                                </div>
                              </div>

                              <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                                Register for This Session
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "preparation" && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Exam Preparation Resources
                  </h2>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
                    Comprehensive resources to help you succeed in your entrance examinations
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {preparationResources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
                    >
                      <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                        {resource.icon}
                      </div>
                      <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                        {resource.title}
                      </h3>
                      <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                        {resource.description}
                      </p>
                      <ul className="space-y-2">
                        {resource.resources.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Preparation Timeline */}
                <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-8 text-center`}>
                    Recommended Preparation Timeline
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      {
                        week: "Week 1-2",
                        focus: "Foundation Review",
                        activities: ["Review basic concepts", "Identify weak areas", "Create study schedule"],
                        color: "bg-blue-500"
                      },
                      {
                        week: "Week 3-4", 
                        focus: "Intensive Study",
                        activities: ["Deep dive into topics", "Practice problems", "Take mock tests"],
                        color: "bg-green-500"
                      },
                      {
                        week: "Week 5-6",
                        focus: "Practice & Review",
                        activities: ["Past papers", "Timed practice", "Review mistakes"],
                        color: "bg-purple-500"
                      },
                      {
                        week: "Week 7-8",
                        focus: "Final Preparation",
                        activities: ["Light review", "Exam strategy", "Rest and prepare"],
                        color: "bg-orange-500"
                      }
                    ].map((phase, index) => (
                      <div key={index} className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                        <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center text-white font-bold mb-4`}>
                          {index + 1}
                        </div>
                        <h4 className={`font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                          {phase.week}
                        </h4>
                        <p className={`text-sm font-medium text-primary-500 mb-3`}>
                          {phase.focus}
                        </p>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className={`text-xs ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "registration" && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Examination Registration
                  </h2>
                  <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
                    Register for your entrance examination and secure your preferred date and time
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                    <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Registration Process
                    </h3>
                    
                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Choose Examination",
                          description: "Select the appropriate entrance exam based on your target grade level",
                          icon: <Target className="h-6 w-6 text-blue-500" />
                        },
                        {
                          step: "2",
                          title: "Select Date & Time",
                          description: "Pick your preferred examination session from available slots",
                          icon: <Calendar className="h-6 w-6 text-green-500" />
                        },
                        {
                          step: "3",
                          title: "Complete Registration",
                          description: "Fill in your details and pay the examination fee",
                          icon: <Users className="h-6 w-6 text-purple-500" />
                        },
                        {
                          step: "4",
                          title: "Receive Confirmation",
                          description: "Get your exam admission ticket and preparation materials",
                          icon: <CheckCircle className="h-6 w-6 text-orange-500" />
                        }
                      ].map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              {step.icon}
                              <h4 className={`text-lg font-semibold ml-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                                {step.title}
                              </h4>
                            </div>
                            <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}>
                    <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      Registration Requirements
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                          Required Documents
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Completed registration form",
                            "Copy of birth certificate",
                            "Recent passport-size photographs (2)",
                            "Academic transcripts from previous school",
                            "Payment receipt for examination fee"
                          ].map((requirement, index) => (
                            <li key={index} className="flex items-start">
                              <FileText className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                                {requirement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-green-500/10 border-green-500/20" : "bg-green-500/10 border-green-500/20"} border`}>
                        <h4 className={`font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                          Important Deadlines
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                              Early Registration
                            </span>
                            <span className="text-sm font-semibold text-green-500">
                              May 15, 2024
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                              Regular Registration
                            </span>
                            <span className="text-sm font-semibold text-yellow-500">
                              May 30, 2024
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                              Late Registration
                            </span>
                            <span className="text-sm font-semibold text-red-500">
                              June 10, 2024
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-lg transition-colors font-medium flex items-center justify-center">
                        Start Registration
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Exam Detail Modal */}
      {selectedExam && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExam(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedExam.name}
              </h3>
              <button
                onClick={() => setSelectedExam(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Exam Overview
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedExam.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Subjects Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExam.subjects.map((subject, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Exam Format
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                    {selectedExam.format}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Exam Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Duration</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedExam.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Passing Score</span>
                      <span className="font-medium text-green-500">{selectedExam.passingScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Sample Questions</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedExam.sampleQuestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Exam Fee</span>
                      <span className="font-medium text-primary-500">UGX {selectedExam.cost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Preparation Time</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedExam.preparationTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Register Now
                  </button>
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                    <Download className="h-5 w-5 mr-2" />
                    Sample Paper
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default EntranceExamsPage;