import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  BookOpen,
  Video,
  Headphones,
  Image,
  Archive,
  Star,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface StudyMaterialsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const StudyMaterialsPage: React.FC<StudyMaterialsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedGrade, setSelectedGrade] = useState("S4");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [materialType, setMaterialType] = useState("all");
  const schoolConfig = getCurrentSchoolConfig();

  const materialTypes = [
    { id: "all", name: "All Materials", icon: <Archive className="h-5 w-5" />, count: 2500 },
    { id: "notes", name: "Study Notes", icon: <FileText className="h-5 w-5" />, count: 800 },
    { id: "videos", name: "Video Lessons", icon: <Video className="h-5 w-5" />, count: 450 },
    { id: "audio", name: "Audio Lectures", icon: <Headphones className="h-5 w-5" />, count: 200 },
    { id: "worksheets", name: "Worksheets", icon: <BookOpen className="h-5 w-5" />, count: 600 },
    { id: "past_papers", name: "Past Papers", icon: <FileText className="h-5 w-5" />, count: 450 }
  ];

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "English", "French", 
    "Luganda", "History", "Geography", "Economics", "Computer Science"
  ];

  const studyMaterials = [
    {
      id: "1",
      title: "Quadratic Equations - Complete Guide",
      subject: "Mathematics",
      grade: "S4",
      type: "notes",
      author: "Dr. Sarah Nakato",
      rating: 4.9,
      downloads: 1250,
      size: "2.5 MB",
      pages: 45,
      description: "Comprehensive guide to solving quadratic equations with examples and practice problems",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
      lastUpdated: "2024-01-15",
      difficulty: "Intermediate"
    },
    {
      id: "2",
      title: "Organic Chemistry Video Series",
      subject: "Chemistry", 
      grade: "S5",
      type: "videos",
      author: "Dr. Alice Nakimuli",
      rating: 4.8,
      downloads: 890,
      duration: "3.5 hours",
      episodes: 12,
      description: "Step-by-step video tutorials covering organic chemistry reactions and mechanisms",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
      lastUpdated: "2024-01-10",
      difficulty: "Advanced"
    },
    {
      id: "3",
      title: "English Literature Analysis Worksheets",
      subject: "English",
      grade: "S6",
      type: "worksheets",
      author: "Ms. Grace Namuli",
      rating: 4.7,
      downloads: 1100,
      size: "1.8 MB",
      pages: 25,
      description: "Interactive worksheets for analyzing poetry, prose, and drama",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
      lastUpdated: "2024-01-12",
      difficulty: "Advanced"
    },
    {
      id: "4",
      title: "Physics Past Papers Collection",
      subject: "Physics",
      grade: "S4",
      type: "past_papers",
      author: "Mr. David Mukasa",
      rating: 4.9,
      downloads: 1500,
      size: "8.2 MB",
      papers: 15,
      description: "Complete collection of physics past papers with marking schemes",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80",
      lastUpdated: "2024-01-08",
      difficulty: "Intermediate"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-500";
      case "Intermediate": return "text-yellow-500";
      case "Advanced": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "notes": return <FileText className="h-4 w-4" />;
      case "videos": return <Video className="h-4 w-4" />;
      case "audio": return <Headphones className="h-4 w-4" />;
      case "worksheets": return <BookOpen className="h-4 w-4" />;
      case "past_papers": return <Archive className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Study Materials | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Access comprehensive study materials at ${schoolConfig.name}. Notes, videos, worksheets, and past papers for all subjects and grade levels.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
            alt="Study Materials"
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
              Learning Resources
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Study <span className="text-primary-500">Materials</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Comprehensive collection of study materials, notes, videos, and practice resources for all subjects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Grade Selection */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Select Grade Level
            </h3>
            <div className="flex flex-wrap gap-3">
              {schoolConfig.grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedGrade === grade
                      ? "bg-primary-500 text-white"
                      : theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          {/* Material Type Filter */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Material Type
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {materialTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setMaterialType(type.id)}
                  className={`p-4 rounded-xl transition-all duration-300 text-center ${
                    materialType === type.id
                      ? "bg-primary-500 text-white scale-105"
                      : theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {type.icon}
                    <span className="font-medium mt-2 text-sm">{type.name}</span>
                    <span className={`text-xs mt-1 ${materialType === type.id ? "text-white/80" : theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {type.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Subject Filter */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
              Subject
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubject("all")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedSubject === "all"
                    ? "bg-primary-500 text-white"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                All Subjects
              </button>
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedSubject === subject
                      ? "bg-primary-500 text-white"
                      : theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <div className="relative h-48">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full font-medium">
                      {material.grade}
                    </span>
                    <span className={`px-2 py-1 text-white text-xs rounded-full font-medium ${
                      material.difficulty === "Beginner" ? "bg-green-500" :
                      material.difficulty === "Intermediate" ? "bg-yellow-500" : "bg-red-500"
                    }`}>
                      {material.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                      {material.rating}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {getTypeIcon(material.type)}
                      <span className="ml-1 capitalize">{material.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    {material.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-3`}>
                    by {material.author}
                  </p>
                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                    {material.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-xs">
                    <span className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {material.subject}
                    </span>
                    <span className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {material.downloads} downloads
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </button>
                    <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-3 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center`}>
                      <Download className="h-4 w-4 mr-1" />
                      Save
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tools */}
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
              Study Tools & Features
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Advanced tools to enhance your study experience and track your progress
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Search className="h-8 w-8 text-blue-500" />,
                title: "Smart Search",
                description: "AI-powered search across all materials with instant results"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-green-500" />,
                title: "Reading Lists",
                description: "Create and manage personalized reading lists and study plans"
              },
              {
                icon: <Users className="h-8 w-8 text-purple-500" />,
                title: "Study Groups",
                description: "Collaborate with classmates on shared materials and notes"
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-500" />,
                title: "Progress Tracking",
                description: "Monitor your reading progress and study time analytics"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {tool.icon}
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {tool.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default StudyMaterialsPage;