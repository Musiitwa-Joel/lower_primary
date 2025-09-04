import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Users,
  Clock,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  CheckCircle,
  Calendar,
  Brain,
  Zap,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface AcademicSupportPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AcademicSupportPage: React.FC<AcademicSupportPageProps> = ({ theme, toggleTheme }) => {
  const [selectedProgram, setSelectedProgram] = useState("tutoring");
  const [selectedSubject, setSelectedSubject] = useState("");
  const schoolConfig = getCurrentSchoolConfig();

  const supportPrograms = {
    tutoring: {
      name: "Peer Tutoring Program",
      icon: <Users className="h-8 w-8 text-blue-500" />,
      description: "Student-to-student tutoring sessions led by high-achieving peers",
      coordinator: "Ms. Grace Namuli",
      schedule: "Monday-Friday, 3:30-5:00 PM",
      location: "Study Halls",
      benefits: [
        "Personalized learning support",
        "Peer-to-peer understanding",
        "Flexible scheduling",
        "Subject-specific help",
        "Exam preparation assistance"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "French"],
      cost: "Free for all students",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    remedial: {
      name: "Remedial Classes",
      icon: <Target className="h-8 w-8 text-green-500" />,
      description: "Additional classes for students needing extra support in specific subjects",
      coordinator: "Dr. Sarah Nakato",
      schedule: "Saturdays, 9:00 AM-12:00 PM",
      location: "Academic Block",
      benefits: [
        "Small group instruction",
        "Focused skill development",
        "Catch-up opportunities",
        "Confidence building",
        "Progress monitoring"
      ],
      subjects: ["Mathematics", "English", "Sciences", "Languages"],
      cost: "Included in school fees",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
    },
    enrichment: {
      name: "Academic Enrichment",
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
      description: "Advanced programs for high-achieving students seeking additional challenges",
      coordinator: "Mr. James Okello",
      schedule: "Thursdays, 4:00-5:30 PM",
      location: "Advanced Learning Center",
      benefits: [
        "Advanced problem solving",
        "Research opportunities",
        "Competition preparation",
        "Critical thinking development",
        "Leadership skills"
      ],
      subjects: ["Advanced Mathematics", "Research Methods", "Critical Thinking", "Innovation"],
      cost: "Optional program fee",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
    },
    study: {
      name: "Study Skills Workshop",
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      description: "Essential study techniques and learning strategies for academic success",
      coordinator: "Mrs. Mary Namusoke",
      schedule: "Bi-weekly sessions",
      location: "Conference Room",
      benefits: [
        "Effective note-taking methods",
        "Time management skills",
        "Memory techniques",
        "Exam strategies",
        "Stress management"
      ],
      subjects: ["Study Techniques", "Time Management", "Memory Skills", "Test Strategies"],
      cost: "Free workshop series",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
    }
  };

  const studyResources = [
    {
      title: "Digital Learning Platform",
      description: "Online resources, practice tests, and interactive learning materials",
      features: ["Video tutorials", "Practice exercises", "Progress tracking", "24/7 access"],
      icon: <BookOpen className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Study Groups",
      description: "Collaborative learning sessions organized by subject and grade level",
      features: ["Peer collaboration", "Group discussions", "Shared resources", "Social learning"],
      icon: <Users className="h-8 w-8 text-green-500" />
    },
    {
      title: "Academic Coaching",
      description: "One-on-one coaching for goal setting and academic planning",
      features: ["Personal goal setting", "Progress monitoring", "Strategy development", "Motivation support"],
      icon: <Target className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Learning Lab",
      description: "Quiet study spaces with academic support staff available",
      features: ["Quiet environment", "Academic assistance", "Resource access", "Extended hours"],
      icon: <Zap className="h-8 w-8 text-orange-500" />
    }
  ];

  const successStories = [
    {
      student: "Sarah Nakato",
      grade: "S6",
      improvement: "Mathematics grade improved from C to A",
      program: "Peer Tutoring",
      testimonial: "The peer tutoring program helped me understand complex math concepts through patient, step-by-step guidance from my tutor."
    },
    {
      student: "David Mukasa",
      grade: "S4",
      improvement: "Overall GPA increased by 15%",
      program: "Study Skills Workshop",
      testimonial: "Learning proper study techniques transformed my academic performance. I now manage my time better and retain information more effectively."
    },
    {
      student: "Grace Namuli",
      grade: "S5",
      improvement: "Physics understanding significantly improved",
      program: "Remedial Classes",
      testimonial: "The small group remedial classes gave me the individual attention I needed to grasp difficult physics concepts."
    }
  ];

  const currentProgram = supportPrograms[selectedProgram as keyof typeof supportPrograms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Academic Support | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Academic support services at ${schoolConfig.name}. Tutoring, remedial classes, enrichment programs, and study skills development.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Academic Support"
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
              Academic Excellence Support
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Academic <span className="text-primary-500">Support</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Comprehensive academic support ensuring every student reaches their full potential. From tutoring to enrichment, we're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(supportPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedProgram(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedProgram === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {program.icon}
                  <span className="font-semibold mt-4 text-sm leading-tight">{program.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Program Details */}
          <motion.div
            key={selectedProgram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {currentProgram.icon}
                  <h2 className={`text-3xl font-bold ml-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {currentProgram.name}
                  </h2>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentProgram.description}
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Schedule
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentProgram.schedule}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Location
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentProgram.location}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Coordinator
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentProgram.coordinator}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Cost
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentProgram.cost}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Program Benefits
                    </h3>
                    <div className="space-y-2">
                      {currentProgram.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Available Subjects
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProgram.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentProgram.image}
                  alt={currentProgram.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Join This Program</h4>
                    <div className="space-y-3">
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select Subject</option>
                        {currentProgram.subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                      <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        Request Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Study Resources */}
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
              Additional Study Resources
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Comprehensive resources to support your academic journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
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
                <div className="space-y-2">
                  {resource.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Student Success Stories
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Real improvements achieved through our academic support programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {story.student}
                    </h3>
                    <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {story.grade} • {story.program}
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-green-500/10 border-green-500/20" : "bg-green-500/10 border-green-500/20"} border mb-4`}>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Improvement Achieved
                  </h4>
                  <p className="text-green-500 font-semibold">
                    {story.improvement}
                  </p>
                </div>

                <blockquote className={`${theme === "dark" ? "text-white/80" : "text-black/80"} italic leading-relaxed`}>
                  "{story.testimonial}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default AcademicSupportPage;