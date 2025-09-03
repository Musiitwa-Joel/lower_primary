import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Monitor,
  Code,
  Smartphone,
  Wifi,
  Database,
  Shield,
  Cpu,
  Globe,
  Gamepad2,
  Camera,
  Printer,
  HardDrive,
  Play,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface ICTTechPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ICTTechPage: React.FC<ICTTechPageProps> = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState("programming");
  const [codingDemo, setCodingDemo] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const techPrograms = {
    programming: {
      name: "Programming & Software Development",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      description: "Learn to create software applications and solve problems through code",
      languages: ["Python", "JavaScript", "Java", "C++", "HTML/CSS", "SQL"],
      projects: [
        "Web Development Projects",
        "Mobile App Creation", 
        "Game Development",
        "Database Management",
        "AI/ML Basics",
        "Robotics Programming"
      ],
      tools: ["VS Code", "GitHub", "Replit", "Scratch", "App Inventor", "Unity"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      careers: ["Software Developer", "Web Designer", "App Developer", "Data Scientist", "Cybersecurity Specialist"]
    },
    digital_literacy: {
      name: "Digital Literacy & Computer Skills",
      icon: <Monitor className="h-8 w-8 text-green-500" />,
      description: "Essential computer skills for the digital age",
      skills: ["Microsoft Office Suite", "Google Workspace", "Digital Communication", "Internet Research", "Digital Citizenship", "Online Safety"],
      applications: [
        "Word Processing",
        "Spreadsheet Analysis",
        "Presentation Design",
        "Email Management",
        "Cloud Storage",
        "Video Conferencing"
      ],
      certifications: ["Microsoft Office Specialist", "Google Certified", "Digital Literacy Certificate"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      careers: ["Office Administrator", "Digital Marketing", "Data Entry", "Customer Support", "Virtual Assistant"]
    },
    multimedia: {
      name: "Multimedia & Digital Design",
      icon: <Camera className="h-8 w-8 text-purple-500" />,
      description: "Create stunning visual content and multimedia presentations",
      software: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "Canva", "Figma", "Blender"],
      projects: [
        "Graphic Design",
        "Video Production",
        "Animation Creation",
        "Web Design",
        "3D Modeling",
        "Digital Art"
      ],
      portfolio: ["Logo Design", "Social Media Graphics", "Video Editing", "Website Mockups"],
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80",
      careers: ["Graphic Designer", "Video Editor", "UI/UX Designer", "Animator", "Digital Artist"]
    },
    networking: {
      name: "Networking & Cybersecurity",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      description: "Understanding computer networks and digital security",
      topics: ["Network Fundamentals", "Internet Protocols", "Wireless Technology", "Network Security", "Ethical Hacking", "Digital Forensics"],
      labs: [
        "Network Configuration",
        "Security Testing",
        "Firewall Setup",
        "Penetration Testing",
        "Incident Response",
        "Risk Assessment"
      ],
      certifications: ["CompTIA Network+", "Cybersecurity Fundamentals", "Ethical Hacker"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      careers: ["Network Administrator", "Cybersecurity Analyst", "IT Support", "Systems Administrator"]
    }
  };

  const currentProgram = techPrograms[activeTab as keyof typeof techPrograms];

  const labEquipment = [
    { name: "High-Performance Computers", count: "50+", icon: <Monitor className="h-6 w-6 text-blue-500" /> },
    { name: "Programming Software", count: "15+", icon: <Code className="h-6 w-6 text-green-500" /> },
    { name: "Design Workstations", count: "20+", icon: <Camera className="h-6 w-6 text-purple-500" /> },
    { name: "Network Equipment", count: "10+", icon: <Wifi className="h-6 w-6 text-orange-500" /> },
    { name: "3D Printers", count: "3", icon: <Printer className="h-6 w-6 text-pink-500" /> },
    { name: "Servers & Storage", count: "5+", icon: <HardDrive className="h-6 w-6 text-teal-500" /> }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>ICT & Technology | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore ICT and Technology programs at ${schoolConfig.name}. Programming, digital literacy, multimedia design, and cybersecurity education.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Tech Animation */}
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Future Technology
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              ICT & <span className="text-primary-500">Technology</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Preparing students for the digital future with comprehensive technology education and hands-on experience
            </p>
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="relative h-64">
            {[
              { icon: <Cpu className="h-8 w-8" />, position: "top-4 left-4", delay: 0 },
              { icon: <Database className="h-8 w-8" />, position: "top-12 right-8", delay: 0.5 },
              { icon: <Globe className="h-8 w-8" />, position: "bottom-8 left-12", delay: 1 },
              { icon: <Shield className="h-8 w-8" />, position: "bottom-4 right-4", delay: 1.5 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
                className={`absolute ${item.position} p-4 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl text-primary-500 animate-float`}
                style={{ animationDelay: `${item.delay}s` }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(techPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {program.icon}
                <span className="font-medium">{program.name.split(' & ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Program Content */}
          <motion.div
            key={activeTab}
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

                {/* Dynamic Content Based on Program */}
                {activeTab === "programming" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Programming Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(currentProgram as any).languages.map((lang: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Student Projects
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(currentProgram as any).projects.map((project: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <Code className="h-4 w-4 text-primary-500 mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {project}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "digital_literacy" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Core Skills
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(currentProgram as any).skills.map((skill: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <Monitor className="h-4 w-4 text-primary-500 mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Available Certifications
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(currentProgram as any).certifications.map((cert: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Career Opportunities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProgram.careers.map((career, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary-500/20 text-secondary-500 rounded-full text-sm">
                        {career}
                      </span>
                    ))}
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
                
                {/* Interactive Demo Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setCodingDemo(true)}
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group"
                  >
                    <Play className="h-10 w-10 text-black ml-1" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Interactive Learning</h4>
                    <p className="text-sm opacity-90">Experience hands-on technology education</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Equipment Showcase */}
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
              State-of-the-Art Computer Labs
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Modern equipment and software to support comprehensive technology education
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {labEquipment.map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-3 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {equipment.icon}
                </div>
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  {equipment.count}
                </div>
                <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                  {equipment.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Demo Modal */}
      {codingDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setCodingDemo(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Live Coding Demo
              </h3>
              <button
                onClick={() => setCodingDemo(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="ml-4 text-white text-sm">Python - Hello World Program</span>
              </div>
              <pre className="text-green-400 font-mono text-sm">
{`# Welcome to Programming at ${schoolConfig.shortName}
def welcome_message():
    name = input("Enter your name: ")
    print(f"Hello {name}! Welcome to our ICT program!")
    print("Let's start coding together!")

welcome_message()`}
              </pre>
            </div>

            <div className="flex space-x-4">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Run Code
              </button>
              <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium flex items-center`}>
                <Download className="h-5 w-5 mr-2" />
                Download Example
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default ICTTechPage;