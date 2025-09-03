import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Atom,
  Microscope,
  Zap,
  Dna,
  FlaskConical,
  Telescope,
  Cpu,
  Leaf,
  Play,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface SciencesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const SciencesPage: React.FC<SciencesPageProps> = ({ theme, toggleTheme }) => {
  const [activeExperiment, setActiveExperiment] = useState("chemistry");
  const schoolConfig = getCurrentSchoolConfig();

  const scienceSubjects = {
    physics: {
      name: "Physics",
      icon: <Zap className="h-12 w-12 text-blue-500" />,
      description: "Understanding the fundamental laws that govern our universe",
      color: "blue",
      experiments: ["Pendulum Motion", "Electromagnetic Induction", "Wave Properties", "Optics Lab"],
      equipment: ["Digital Oscilloscopes", "Force Sensors", "Laser Equipment", "Spectrometers"],
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80"
    },
    chemistry: {
      name: "Chemistry", 
      icon: <FlaskConical className="h-12 w-12 text-green-500" />,
      description: "Exploring matter, reactions, and molecular interactions",
      color: "green",
      experiments: ["Acid-Base Titrations", "Organic Synthesis", "Crystallization", "Electrochemistry"],
      equipment: ["Fume Hoods", "Analytical Balances", "pH Meters", "Distillation Sets"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80"
    },
    biology: {
      name: "Biology",
      icon: <Dna className="h-12 w-12 text-purple-500" />,
      description: "Discovering the complexity and beauty of living organisms",
      color: "purple", 
      experiments: ["Microscopy Studies", "Genetics Lab", "Ecosystem Analysis", "Photosynthesis"],
      equipment: ["Digital Microscopes", "Incubators", "Centrifuges", "DNA Extraction Kits"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80"
    }
  };

  const virtualLabs = [
    {
      name: "3D Molecular Modeling",
      description: "Explore molecular structures in 3D space",
      icon: <Atom className="h-8 w-8 text-blue-500" />,
      demo: "https://example.com/molecular-demo"
    },
    {
      name: "Virtual Microscopy",
      description: "High-resolution digital microscope access",
      icon: <Microscope className="h-8 w-8 text-green-500" />,
      demo: "https://example.com/microscopy-demo"
    },
    {
      name: "Physics Simulations",
      description: "Interactive physics experiments and simulations",
      icon: <Telescope className="h-8 w-8 text-purple-500" />,
      demo: "https://example.com/physics-sim"
    },
    {
      name: "Ecosystem Modeling",
      description: "Study ecological relationships and environmental systems",
      icon: <Leaf className="h-8 w-8 text-orange-500" />,
      demo: "https://example.com/ecosystem-demo"
    }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Sciences | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Discover our comprehensive science programs at ${schoolConfig.name}. Physics, Chemistry, and Biology with state-of-the-art laboratories and equipment.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Interactive Elements */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-purple-500/10" />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Scientific Excellence
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Science <span className="text-primary-500">Subjects</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Cutting-edge science education with modern laboratories, expert teachers, and hands-on learning experiences
            </p>
          </motion.div>

          {/* Interactive Science Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(scienceSubjects).map(([key, subject], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-500 hover:scale-105 group cursor-pointer`}
                onClick={() => setActiveExperiment(key)}
              >
                <div className="relative h-64">
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-${subject.color}-500/20 backdrop-blur-sm`}>
                      {subject.icon}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">{subject.name}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{subject.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className={`font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Laboratory Experiments
                  </h4>
                  <div className="space-y-2">
                    {subject.experiments.slice(0, 3).map((experiment, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-2 h-2 bg-${subject.color}-500 rounded-full mr-3`} />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {experiment}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Laboratory Section */}
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
              Virtual Science Laboratory
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Experience cutting-edge virtual experiments and simulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtualLabs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105 cursor-pointer group`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"} group-hover:scale-110 transition-transform`}>
                  {lab.icon}
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {lab.name}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                  {lab.description}
                </p>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center mx-auto group">
                  <Play className="h-4 w-4 mr-2" />
                  Try Demo
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

export default SciencesPage;