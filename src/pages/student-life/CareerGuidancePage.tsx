import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Compass,
  Target,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  CheckCircle,
  Calendar,
  Brain,
  Globe,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface CareerGuidancePageProps {
  theme: string;
  toggleTheme: () => void;
}

const CareerGuidancePage: React.FC<CareerGuidancePageProps> = ({ theme, toggleTheme }) => {
  const [selectedPath, setSelectedPath] = useState("stem");
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState<number[]>([]);
  const schoolConfig = getCurrentSchoolConfig();

  const careerPaths = {
    stem: {
      name: "STEM Careers",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      description: "Science, Technology, Engineering, and Mathematics career pathways",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      universities: ["Makerere University", "Kyambogo University", "MUBS"],
      careers: [
        "Software Engineer",
        "Medical Doctor", 
        "Civil Engineer",
        "Data Scientist",
        "Research Scientist",
        "Biomedical Engineer"
      ],
      averageSalary: "UGX 3-8M annually",
      growthRate: "15% annually",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      requirements: [
        "Strong performance in Mathematics and Sciences",
        "Analytical thinking skills",
        "Problem-solving abilities",
        "Attention to detail"
      ]
    },
    business: {
      name: "Business & Finance",
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      description: "Business leadership and financial management career paths",
      subjects: ["Mathematics", "Economics", "Entrepreneurship", "Accounting"],
      universities: ["MUBS", "UCU", "Nkumba University"],
      careers: [
        "Business Manager",
        "Financial Analyst",
        "Entrepreneur",
        "Marketing Manager",
        "Investment Banker",
        "Management Consultant"
      ],
      averageSalary: "UGX 2-6M annually",
      growthRate: "10% annually",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      requirements: [
        "Leadership and communication skills",
        "Mathematical aptitude",
        "Strategic thinking",
        "Interpersonal skills"
      ]
    },
    humanities: {
      name: "Humanities & Social Sciences",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      description: "Liberal arts and social science career opportunities",
      subjects: ["English", "History", "Geography", "Literature", "Philosophy"],
      universities: ["Makerere University", "UCU", "Kyambogo University"],
      careers: [
        "Lawyer",
        "Journalist",
        "Diplomat",
        "Teacher",
        "Social Worker",
        "Policy Analyst"
      ],
      averageSalary: "UGX 1.5-5M annually",
      growthRate: "8% annually",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
      requirements: [
        "Excellent communication skills",
        "Critical thinking abilities",
        "Cultural awareness",
        "Research and writing skills"
      ]
    },
    creative: {
      name: "Creative Arts",
      icon: <Award className="h-8 w-8 text-pink-500" />,
      description: "Creative and artistic career pathways",
      subjects: ["Art", "Music", "Drama", "Media Studies", "Design"],
      universities: ["Makerere University", "UCU", "Kyambogo University"],
      careers: [
        "Graphic Designer",
        "Musician",
        "Film Director",
        "Architect",
        "Fashion Designer",
        "Art Therapist"
      ],
      averageSalary: "UGX 1-4M annually",
      growthRate: "12% annually",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
      requirements: [
        "Creative and artistic abilities",
        "Portfolio development",
        "Innovation and originality",
        "Technical skills in chosen medium"
      ]
    }
  };

  const guidanceServices = [
    {
      title: "Career Assessment",
      description: "Comprehensive assessment to identify strengths, interests, and career aptitudes",
      duration: "90 minutes",
      frequency: "Once per academic year",
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Subject Selection Guidance",
      description: "Expert advice on choosing the right subject combinations for your career goals",
      duration: "45 minutes",
      frequency: "Before subject selection periods",
      icon: <BookOpen className="h-8 w-8 text-green-500" />
    },
    {
      title: "University Application Support",
      description: "Assistance with university applications, personal statements, and scholarship applications",
      duration: "60 minutes",
      frequency: "During application seasons",
      icon: <Award className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Industry Mentorship",
      description: "Connect with professionals in your field of interest for real-world insights",
      duration: "Ongoing relationship",
      frequency: "Monthly meetings",
      icon: <Users className="h-8 w-8 text-orange-500" />
    }
  ];

  const assessmentQuestions = [
    {
      question: "What type of activities energize you most?",
      options: [
        "Solving complex problems and analyzing data",
        "Leading teams and making strategic decisions", 
        "Researching and writing about important topics",
        "Creating and designing new things"
      ]
    },
    {
      question: "Which work environment appeals to you?",
      options: [
        "Laboratories, tech companies, or research facilities",
        "Corporate offices, banks, or business centers",
        "Libraries, government offices, or educational institutions",
        "Studios, galleries, or creative spaces"
      ]
    },
    {
      question: "What motivates you most in your work?",
      options: [
        "Innovation and technological advancement",
        "Financial success and business growth",
        "Social impact and helping others",
        "Artistic expression and creativity"
      ]
    }
  ];

  const currentPath = careerPaths[selectedPath as keyof typeof careerPaths];

  const handleAssessmentAnswer = (answerIndex: number) => {
    const newAnswers = [...assessmentAnswers, answerIndex];
    setAssessmentAnswers(newAnswers);
    
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      // Calculate recommended path based on answers
      const pathScores = [0, 0, 0, 0]; // STEM, Business, Humanities, Creative
      newAnswers.forEach(answer => {
        pathScores[answer]++;
      });
      
      const maxScore = Math.max(...pathScores);
      const recommendedIndex = pathScores.indexOf(maxScore);
      const pathKeys = ["stem", "business", "humanities", "creative"];
      setSelectedPath(pathKeys[recommendedIndex]);
    }
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Career Guidance | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Career guidance services at ${schoolConfig.name}. Professional counseling, career assessments, and university application support.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Career Guidance"
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
              Your Future Starts Here
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Career <span className="text-primary-500">Guidance</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Professional guidance to help you discover your passions, explore career options, and make informed decisions about your academic and professional future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Path Explorer */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Explore Career Paths
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Discover different career pathways and the subjects that will help you get there
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(careerPaths).map(([key, path]) => (
              <button
                key={key}
                onClick={() => setSelectedPath(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedPath === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {path.icon}
                  <span className="font-semibold mt-4 text-sm leading-tight">{path.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Path Details */}
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {currentPath.icon}
                  <h2 className={`text-3xl font-bold ml-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {currentPath.name}
                  </h2>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentPath.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Required Subjects
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentPath.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Career Opportunities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {currentPath.careers.map((career, index) => (
                        <div key={index} className="flex items-center">
                          <Star className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {career}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Recommended Universities
                    </h3>
                    <div className="space-y-2">
                      {currentPath.universities.map((university, index) => (
                        <div key={index} className="flex items-center">
                          <Award className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {university}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentPath.image}
                  alt={currentPath.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Career Outlook</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Average Salary:</span>
                        <span className="font-medium text-green-400">{currentPath.averageSalary}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Growth Rate:</span>
                        <span className="font-medium text-blue-400">{currentPath.growthRate}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      Get Detailed Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guidance Services */}
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
              Career Guidance Services
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Professional services to support your career planning and decision-making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guidanceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {service.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>Duration:</span>
                    <span className="text-primary-500">{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>Frequency:</span>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>{service.frequency}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Assessment */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 ${theme === "dark" ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20" : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"} relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative text-center">
              <Compass className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Take Our Career Assessment
              </h2>
              <p className={`text-xl mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Discover your ideal career path through our comprehensive assessment tool
              </p>

              {assessmentStep < assessmentQuestions.length ? (
                <motion.div
                  key={assessmentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="mb-8">
                    <div className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"} mb-4`}>
                      Question {assessmentStep + 1} of {assessmentQuestions.length}
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}>
                      <div 
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((assessmentStep +  1) / assessmentQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className={`text-xl font-semibold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {assessmentQuestions[assessmentStep].question}
                  </h3>

                  <div className="space-y-4">
                    {assessmentQuestions[assessmentStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAssessmentAnswer(index)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 hover:scale-105 ${
                          theme === "dark" 
                            ? "bg-white/5 hover:bg-white/10 border-white/10" 
                            : "bg-black/5 hover:bg-black/10 border-black/10"
                        } border`}
                      >
                        <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Assessment Complete!
                  </h3>
                  
                  <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-primary-500/10 border-primary-500/20" : "bg-primary-500/10 border-primary-500/20"} border mb-6`}>
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      Recommended Career Path:
                    </h4>
                    <div className="text-xl font-bold text-primary-500 mb-2">
                      {currentPath.name}
                    </div>
                    <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {currentPath.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                      Book Career Counseling
                    </button>
                    <button
                      onClick={() => {
                        setAssessmentStep(0);
                        setAssessmentAnswers([]);
                      }}
                      className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-3 rounded-lg transition-colors font-medium`}
                    >
                      Retake Assessment
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default CareerGuidancePage;