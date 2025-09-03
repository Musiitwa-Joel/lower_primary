import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Award,
  Calendar,
  Clock,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface AssessmentExamsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AssessmentExamsPage: React.FC<AssessmentExamsPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const schoolConfig = getCurrentSchoolConfig();

  const assessmentTypes = [
    {
      type: "Continuous Assessment",
      weight: 40,
      description:
        "Regular assignments, projects, quizzes, and class participation",
      frequency: "Weekly/Bi-weekly",
      components: [
        "Homework assignments (10%)",
        "Class projects (15%)",
        "Quizzes and tests (10%)",
        "Participation (5%)",
      ],
      color: "bg-blue-500",
    },
    {
      type: "Mid-Term Examinations",
      weight: 25,
      description: "Formal examinations conducted at the middle of each term",
      frequency: "Once per term",
      components: ["Written examinations (20%)", "Practical assessments (5%)"],
      color: "bg-green-500",
    },
    {
      type: "Final Examinations",
      weight: 35,
      description: "Comprehensive end-of-term examinations",
      frequency: "End of term",
      components: ["Theory papers (25%)", "Practical examinations (10%)"],
      color: "bg-purple-500",
    },
  ];

  const examSchedule = [
    {
      exam: "Mid-Term Examinations",
      term: "Term 1",
      startDate: "2024-02-15",
      endDate: "2024-02-22",
      grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      status: "upcoming",
    },
    {
      exam: "Final Examinations",
      term: "Term 1",
      startDate: "2024-04-08",
      endDate: "2024-04-19",
      grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
      status: "scheduled",
    },
    {
      exam: "Cambridge IGCSE",
      term: "May/June Session",
      startDate: "2024-05-06",
      endDate: "2024-06-14",
      grades: ["S4"],
      status: "external",
    },
  ];

  const gradingScale = [
    {
      grade: "A",
      range: "80-100",
      description: "Excellent",
      color: "text-green-500",
    },
    {
      grade: "B+",
      range: "75-79",
      description: "Very Good",
      color: "text-blue-500",
    },
    { grade: "B", range: "70-74", description: "Good", color: "text-blue-400" },
    {
      grade: "C+",
      range: "65-69",
      description: "Credit",
      color: "text-yellow-500",
    },
    {
      grade: "C",
      range: "60-64",
      description: "Credit",
      color: "text-yellow-400",
    },
    {
      grade: "D+",
      range: "55-59",
      description: "Pass",
      color: "text-orange-500",
    },
    {
      grade: "D",
      range: "50-54",
      description: "Pass",
      color: "text-orange-400",
    },
    { grade: "F", range: "0-49", description: "Fail", color: "text-red-500" },
  ];

  const tabs = [
    { id: "overview", name: "Overview", icon: <Award className="h-4 w-4" /> },
    {
      id: "schedule",
      name: "Exam Schedule",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      id: "grading",
      name: "Grading System",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      id: "preparation",
      name: "Exam Preparation",
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Assessment & Examinations | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Learn about ${schoolConfig.name}'s comprehensive assessment and examination system. Understand our grading methods, exam schedules, and preparation resources.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} exams, assessment methods, grading system, exam schedule, ${schoolConfig.address.city} school exams`}
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
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
            alt="Assessment and Exams"
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
              Academic Evaluation
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Assessment &&nbsp;
              <span className="text-primary-500">Examinations</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Fair, comprehensive, and transparent assessment methods designed
              to measure and enhance student learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section
        className={`py-8 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
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
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
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
                  <h2
                    className={`text-3xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Assessment Framework
                  </h2>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } max-w-2xl mx-auto`}
                  >
                    Our assessment system combines multiple evaluation methods
                    to provide a comprehensive view of student progress
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {assessmentTypes.map((assessment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-2xl ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10"
                          : "bg-black/5 border-black/10"
                      } border`}
                    >
                      <div className="text-center mb-6">
                        <div
                          className={`text-4xl font-bold text-primary-500 mb-2`}
                        >
                          {assessment.weight}%
                        </div>
                        <h3
                          className={`text-xl font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {assessment.type}
                        </h3>
                      </div>

                      <p
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        } mb-4 leading-relaxed`}
                      >
                        {assessment.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Frequency
                          </span>
                          <span
                            className={`text-sm font-medium ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {assessment.frequency}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4
                          className={`text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-2`}
                        >
                          Components:
                        </h4>
                        <ul className="space-y-1">
                          {assessment.components.map((component, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-white/70"
                                    : "text-black/70"
                                }`}
                              >
                                {component}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Examination Schedule
                  </h2>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } max-w-2xl mx-auto`}
                  >
                    Stay updated with important examination dates and schedules
                  </p>
                </div>

                <div className="space-y-6">
                  {examSchedule.map((exam, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-2xl ${
                        theme === "dark"
                          ? "bg-white/5 hover:bg-white/10 border-white/10"
                          : "bg-black/5 hover:bg-black/10 border-black/10"
                      } border transition-all duration-300`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3
                              className={`text-xl font-semibold ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`}
                            >
                              {exam.exam}
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                exam.status === "upcoming"
                                  ? "bg-green-500/20 text-green-500"
                                  : exam.status === "scheduled"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-purple-500/20 text-purple-500"
                              }`}
                            >
                              {exam.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-primary-500 mr-2" />
                              <div>
                                <div
                                  className={`text-sm font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-black"
                                  }`}
                                >
                                  {exam.term}
                                </div>
                                <div
                                  className={`text-xs ${
                                    theme === "dark"
                                      ? "text-white/60"
                                      : "text-black/60"
                                  }`}
                                >
                                  {new Date(
                                    exam.startDate
                                  ).toLocaleDateString()}{" "}
                                  -{" "}
                                  {new Date(exam.endDate).toLocaleDateString()}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-primary-500 mr-2" />
                              <div>
                                <div
                                  className={`text-sm font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-black"
                                  }`}
                                >
                                  Duration
                                </div>
                                <div
                                  className={`text-xs ${
                                    theme === "dark"
                                      ? "text-white/60"
                                      : "text-black/60"
                                  }`}
                                >
                                  {Math.ceil(
                                    (new Date(exam.endDate).getTime() -
                                      new Date(exam.startDate).getTime()) /
                                      (1000 * 60 * 60 * 24)
                                  )}{" "}
                                  days
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-primary-500 mr-2" />
                              <div>
                                <div
                                  className={`text-sm font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-black"
                                  }`}
                                >
                                  Grades
                                </div>
                                <div
                                  className={`text-xs ${
                                    theme === "dark"
                                      ? "text-white/60"
                                      : "text-black/60"
                                  }`}
                                >
                                  {exam.grades.join(", ")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-3 mt-4 lg:mt-0">
                          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center">
                            <Eye className="h-4 w-4 mr-2" />
                            View Timetable
                          </button>
                          <button
                            className={`${
                              theme === "dark"
                                ? "bg-white/10 hover:bg-white/20 text-white"
                                : "bg-black/10 hover:bg-black/20 text-black"
                            } px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center`}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "grading" && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Grading System
                  </h2>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } max-w-2xl mx-auto`}
                  >
                    Our transparent grading system ensures fair evaluation and
                    clear understanding of academic performance
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div
                    className={`p-8 rounded-2xl ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10"
                        : "bg-black/5 border-black/10"
                    } border`}
                  >
                    <h3
                      className={`text-2xl font-bold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-6`}
                    >
                      Grade Scale
                    </h3>
                    <div className="space-y-3">
                      {gradingScale.map((grade, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`text-2xl font-bold ${grade.color}`}
                            >
                              {grade.grade}
                            </div>
                            <div>
                              <div
                                className={`font-medium ${
                                  theme === "dark" ? "text-white" : "text-black"
                                }`}
                              >
                                {grade.description}
                              </div>
                              <div
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-white/60"
                                    : "text-black/60"
                                }`}
                              >
                                {grade.range}%
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div
                      className={`p-6 rounded-2xl ${
                        theme === "dark"
                          ? "bg-green-500/10 border-green-500/20"
                          : "bg-green-500/10 border-green-500/20"
                      } border`}
                    >
                      <h4
                        className={`text-lg font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-4`}
                      >
                        Grade Point Average (GPA)
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            A Grade
                          </span>
                          <span className="font-semibold text-green-500">
                            4.0 points
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            B+ Grade
                          </span>
                          <span className="font-semibold text-blue-500">
                            3.5 points
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            B Grade
                          </span>
                          <span className="font-semibold text-blue-400">
                            3.0 points
                          </span>
                        </div>
                        <div className="text-center pt-3 border-t border-white/10">
                          <div className="text-2xl font-bold text-primary-500">
                            3.8
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            School Average GPA
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-6 rounded-2xl ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10"
                          : "bg-black/5 border-black/10"
                      } border`}
                    >
                      <h4
                        className={`text-lg font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-4`}
                      >
                        Performance Indicators
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Class Average
                          </span>
                          <span className="text-primary-500 font-semibold">
                            85%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Pass Rate
                          </span>
                          <span className="text-green-500 font-semibold">
                            98%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Excellence Rate (A & B+)
                          </span>
                          <span className="text-blue-500 font-semibold">
                            75%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preparation" && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Exam Preparation Resources
                  </h2>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } max-w-2xl mx-auto`}
                  >
                    Comprehensive resources and support to help students excel
                    in their examinations
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Study Guides",
                      description:
                        "Comprehensive study materials for all subjects",
                      icon: <FileText className="h-8 w-8 text-blue-500" />,
                      features: [
                        "Subject summaries",
                        "Key concepts",
                        "Practice questions",
                        "Revision tips",
                      ],
                    },
                    {
                      title: "Past Papers",
                      description:
                        "Previous examination papers with marking schemes",
                      icon: <Award className="h-8 w-8 text-green-500" />,
                      features: [
                        "5 years of past papers",
                        "Marking schemes",
                        "Examiner reports",
                        "Grade boundaries",
                      ],
                    },
                    {
                      title: "Revision Classes",
                      description:
                        "Extra classes and tutorials before examinations",
                      icon: <Users className="h-8 w-8 text-purple-500" />,
                      features: [
                        "Small group sessions",
                        "Subject specialists",
                        "Flexible timing",
                        "Individual attention",
                      ],
                    },
                    {
                      title: "Online Resources",
                      description:
                        "Digital learning materials and practice tests",
                      icon: <Eye className="h-8 w-8 text-orange-500" />,
                      features: [
                        "Interactive quizzes",
                        "Video tutorials",
                        "Progress tracking",
                        "24/7 access",
                      ],
                    },
                    {
                      title: "Study Skills",
                      description: "Workshops on effective study techniques",
                      icon: <TrendingUp className="h-8 w-8 text-pink-500" />,
                      features: [
                        "Time management",
                        "Note-taking skills",
                        "Memory techniques",
                        "Stress management",
                      ],
                    },
                    {
                      title: "Mock Examinations",
                      description:
                        "Practice exams under real examination conditions",
                      icon: <Clock className="h-8 w-8 text-teal-500" />,
                      features: [
                        "Exam conditions",
                        "Detailed feedback",
                        "Performance analysis",
                        "Improvement plans",
                      ],
                    },
                  ].map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        {resource.icon}
                      </div>
                      <h3
                        className={`text-xl font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-3`}
                      >
                        {resource.title}
                      </h3>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        } mb-4 leading-relaxed`}
                      >
                        {resource.description}
                      </p>
                      <ul className="space-y-2">
                        {resource.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
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
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default AssessmentExamsPage;
