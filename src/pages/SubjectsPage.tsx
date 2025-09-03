import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Beaker,
  Globe,
  Monitor,
  Palette,
  Wrench,
  Activity,
  Users,
  Clock,
  Award,
  Play,
  Download,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  grades: string[];
  prerequisites?: string[];
  career_paths: string[];
  teacher: string;
  image: string;
  video_intro?: string;
}

interface SubjectCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  subjects: Subject[];
}

interface SubjectsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const SubjectsPage: React.FC<SubjectsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState("core");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const subjectCategories: SubjectCategory[] = [
    {
      id: "core",
      name: "Core Subjects",
      icon: <BookOpen className="h-6 w-6" />,
      color: "blue",
      description: "Essential subjects required for all students",
      subjects: [
        {
          id: "math",
          name: "Mathematics",
          code: "MATH",
          description:
            "Comprehensive mathematics covering algebra, geometry, calculus, and statistics",
          grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
          career_paths: [
            "Engineering",
            "Finance",
            "Data Science",
            "Architecture",
          ],
          teacher: "Dr. Sarah Nakato",
          image:
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
          video_intro: "https://example.com/math-intro.mp4",
        },
        {
          id: "english",
          name: "English Language",
          code: "ENG",
          description:
            "Language skills, literature, and communication development",
          grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
          career_paths: ["Journalism", "Law", "Teaching", "Communications"],
          teacher: "Ms. Grace Namuli",
          image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
        },
        {
          id: "social",
          name: "Social Studies",
          code: "SST",
          description: "History, geography, civics, and cultural studies",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: ["Politics", "Diplomacy", "Social Work", "Tourism"],
          teacher: "Mr. John Ssemakula",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: "sciences",
      name: "Sciences",
      icon: <Beaker className="h-6 w-6" />,
      color: "green",
      description: "Scientific disciplines fostering inquiry and discovery",
      subjects: [
        {
          id: "physics",
          name: "Physics",
          code: "PHY",
          description:
            "Fundamental principles of matter, energy, and their interactions",
          grades: ["S3", "S4", "S5", "S6"],
          prerequisites: ["Mathematics"],
          career_paths: ["Engineering", "Research", "Medicine", "Technology"],
          teacher: "Mr. David Mukasa",
          image:
            "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80",
        },
        {
          id: "chemistry",
          name: "Chemistry",
          code: "CHE",
          description:
            "Study of matter, its properties, and chemical reactions",
          grades: ["S3", "S4", "S5", "S6"],
          prerequisites: ["Mathematics"],
          career_paths: [
            "Medicine",
            "Pharmacy",
            "Chemical Engineering",
            "Research",
          ],
          teacher: "Dr. Alice Nakimuli",
          image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
        },
        {
          id: "biology",
          name: "Biology",
          code: "BIO",
          description: "Study of living organisms and life processes",
          grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
          career_paths: [
            "Medicine",
            "Veterinary",
            "Biotechnology",
            "Environmental Science",
          ],
          teacher: "Mrs. Mary Namusoke",
          image:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: "languages",
      name: "Languages",
      icon: <Globe className="h-6 w-6" />,
      color: "purple",
      description: "Communication skills and cultural understanding",
      subjects: [
        {
          id: "french",
          name: "French",
          code: "FRE",
          description: "French language and francophone culture",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: [
            "Translation",
            "Diplomacy",
            "Tourism",
            "International Business",
          ],
          teacher: "Mme. Claire Dubois",
          image:
            "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80",
        },
        {
          id: "luganda",
          name: "Luganda",
          code: "LUG",
          description: "Local language and cultural heritage",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: [
            "Media",
            "Cultural Studies",
            "Local Government",
            "Education",
          ],
          teacher: "Mr. Robert Kiggundu",
          image:
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: "ict",
      name: "ICT & Technology",
      icon: <Monitor className="h-6 w-6" />,
      color: "indigo",
      description: "Digital literacy and technological skills",
      subjects: [
        {
          id: "computer",
          name: "Computer Science",
          code: "CS",
          description: "Programming, algorithms, and computational thinking",
          grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
          career_paths: [
            "Software Development",
            "Cybersecurity",
            "Data Science",
            "AI/ML",
          ],
          teacher: "Mr. James Okello",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
        },
        {
          id: "ict",
          name: "Information Technology",
          code: "ICT",
          description:
            "Digital literacy, applications, and technology integration",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: [
            "IT Support",
            "Digital Marketing",
            "Web Development",
            "Tech Consulting",
          ],
          teacher: "Ms. Patricia Nalwoga",
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: "arts",
      name: "Creative Arts",
      icon: <Palette className="h-6 w-6" />,
      color: "pink",
      description: "Creative expression and artistic development",
      subjects: [
        {
          id: "art",
          name: "Visual Arts",
          code: "ART",
          description: "Drawing, painting, sculpture, and digital art",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: [
            "Graphic Design",
            "Fine Arts",
            "Animation",
            "Art Therapy",
          ],
          teacher: "Ms. Rebecca Namatovu",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
        },
        {
          id: "music",
          name: "Music",
          code: "MUS",
          description: "Music theory, performance, and composition",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: [
            "Music Performance",
            "Music Production",
            "Music Education",
            "Sound Engineering",
          ],
          teacher: "Mr. Samuel Hakim",
          image:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: "vocational",
      name: "Vocational Skills",
      icon: <Wrench className="h-6 w-6" />,
      color: "orange",
      description: "Practical skills for career readiness",
      subjects: [
        {
          id: "entrepreneurship",
          name: "Entrepreneurship",
          code: "ENT",
          description:
            "Business skills and entrepreneurial mindset development",
          grades: ["S4", "S5", "S6"],
          career_paths: [
            "Business Owner",
            "Startup Founder",
            "Business Consultant",
            "Project Manager",
          ],
          teacher: "Mrs. Susan Nakato",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        },
        {
          id: "agriculture",
          name: "Agriculture",
          code: "AGR",
          description: "Modern farming techniques and agricultural science",
          grades: ["S1", "S2", "S3", "S4"],
          career_paths: [
            "Agricultural Engineer",
            "Farm Manager",
            "Agricultural Consultant",
            "Food Scientist",
          ],
          teacher: "Mr. Peter Lubega",
          image:
            "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      id: "pe",
      name: "Physical Education",
      icon: <Activity className="h-6 w-6" />,
      color: "red",
      description: "Physical fitness and sports development",
      subjects: [
        {
          id: "pe",
          name: "Physical Education",
          code: "PE",
          description: "Physical fitness, sports skills, and health education",
          grades: ["S1", "S2", "S3", "S4", "S5", "S6"],
          career_paths: [
            "Sports Coaching",
            "Physical Therapy",
            "Sports Management",
            "Fitness Training",
          ],
          teacher: "Coach Michael Ssebunya",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
        },
      ],
    },
  ];

  const currentCategory =
    subjectCategories.find((cat) => cat.id === selectedCategory) ||
    subjectCategories[0];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      green: "bg-green-500/20 text-green-500 border-green-500/30",
      purple: "bg-purple-500/20 text-purple-500 border-purple-500/30",
      orange: "bg-orange-500/20 text-orange-500 border-orange-500/30",
      pink: "bg-pink-500/20 text-pink-500 border-pink-500/30",
      indigo: "bg-indigo-500/20 text-indigo-500 border-indigo-500/30",
      red: "bg-red-500/20 text-red-500 border-red-500/30",
      teal: "bg-teal-500/20 text-teal-500 border-teal-500/30",
    };
    return colorMap[color] || "bg-gray-500/20 text-gray-500 border-gray-500/30";
  };

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Subjects Offered | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore the comprehensive range of subjects offered at ${schoolConfig.name}. From core subjects to specialized programs, discover our academic offerings across all grade levels.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} subjects, academic programs, curriculum subjects, ${schoolConfig.address.city} education, Cambridge subjects`}
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
            alt="Academic Subjects"
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
              Academic Programs
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Subjects&nbsp;
              <span className="text-primary-500">We Offer</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Comprehensive academic programs designed to develop critical
              thinking, creativity, and practical skills across diverse
              disciplines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subject Categories */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {subjectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white scale-105"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Category Description
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              {currentCategory.name}
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              {currentCategory.description}
            </p>
          </motion.div> */}

          {/* Subjects Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentCategory.subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedSubject(subject)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {subject.video_intro && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-black/70 text-white p-2 rounded-lg">
                        <Play className="h-4 w-4" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(
                        currentCategory.color
                      )}`}
                    >
                      {subject.code}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    {subject.name}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-4 leading-relaxed`}
                  >
                    {subject.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Grade Levels
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {subject.grades.join(", ")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Teacher
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {subject.teacher}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {subject.career_paths.slice(0, 2).map((career, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                        >
                          {career}
                        </span>
                      ))}
                      {subject.career_paths.length > 2 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                          +{subject.career_paths.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subject Detail Modal */}
      {selectedSubject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSubject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {selectedSubject.name}
              </h3>
              <button
                onClick={() => setSelectedSubject(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedSubject.image}
                  alt={selectedSubject.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                {selectedSubject.video_intro && (
                  <div className="mb-6">
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-3`}
                    >
                      Subject Introduction
                    </h4>
                    <div className="relative rounded-xl overflow-hidden">
                      <video
                        src={selectedSubject.video_intro}
                        controls
                        className="w-full h-48 object-cover"
                        poster={selectedSubject.image}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Subject Overview
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } leading-relaxed`}
                  >
                    {selectedSubject.description}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Grade Levels
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSubject.grades.map((grade, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedSubject.prerequisites && (
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-3`}
                    >
                      Prerequisites
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSubject.prerequisites.map((prereq, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm"
                        >
                          {prereq}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Career Pathways
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedSubject.career_paths.map((career, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          theme === "dark" ? "bg-white/5" : "bg-black/5"
                        }`}
                      >
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg ${getColorClasses(
                    currentCategory.color
                  )} border`}
                >
                  <h5
                    className={`font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Subject Teacher
                  </h5>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    {selectedSubject.teacher}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    View Syllabus
                  </button>
                  <button
                    className={`flex-1 ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    } px-4 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Quick Stats */}
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
            className={`rounded-3xl p-8 md:p-12 ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {subjectCategories.reduce(
                    (total, cat) => total + cat.subjects.length,
                    0
                  )}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Total Subjects
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
                  50+
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Qualified Teachers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  98%
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Success Rate
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default SubjectsPage;
