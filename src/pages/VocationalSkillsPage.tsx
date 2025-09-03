import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Wrench,
  Briefcase,
  Utensils,
  Scissors,
  Hammer,
  Car,
  Laptop,
  DollarSign,
  TrendingUp,
  Users,
  Award,
  Target,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface VocationalSkillsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const VocationalSkillsPage: React.FC<VocationalSkillsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedSkill, setSelectedSkill] = useState("entrepreneurship");
  const [activeProject, setActiveProject] = useState(0);
  const schoolConfig = getCurrentSchoolConfig();

  const vocationalPrograms = {
    entrepreneurship: {
      name: "Entrepreneurship & Business Skills",
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      description: "Develop business acumen and entrepreneurial mindset for future success",
      modules: [
        "Business Plan Development",
        "Financial Literacy",
        "Marketing Strategies", 
        "Leadership Skills",
        "Innovation & Creativity",
        "Digital Business"
      ],
      projects: [
        {
          title: "Student Marketplace",
          description: "Students create and run their own mini-businesses within school",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
        },
        {
          title: "Community Solutions",
          description: "Identify local problems and develop business solutions",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
        }
      ],
      skills: ["Business Planning", "Financial Management", "Marketing", "Leadership", "Communication"],
      teacher: "Mrs. Susan Nakato",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      careers: ["Business Owner", "Startup Founder", "Business Consultant", "Project Manager", "Sales Manager"]
    },
    agriculture: {
      name: "Modern Agriculture & Farming",
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      description: "Learn sustainable farming techniques and agricultural innovation",
      modules: [
        "Crop Production",
        "Animal Husbandry",
        "Soil Management",
        "Agricultural Technology",
        "Sustainable Farming",
        "Agribusiness"
      ],
      projects: [
        {
          title: "School Farm Project",
          description: "Hands-on farming experience with crops and livestock",
          image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80"
        },
        {
          title: "Greenhouse Management",
          description: "Modern greenhouse techniques and technology",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80"
        }
      ],
      skills: ["Crop Management", "Animal Care", "Soil Testing", "Farm Planning", "Market Analysis"],
      teacher: "Mr. Peter Lubega",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      careers: ["Agricultural Engineer", "Farm Manager", "Agricultural Consultant", "Food Scientist", "Veterinarian"]
    },
    hospitality: {
      name: "Hospitality & Culinary Arts",
      icon: <Utensils className="h-8 w-8 text-orange-500" />,
      description: "Master culinary skills and hospitality management",
      modules: [
        "Culinary Techniques",
        "Food Safety & Hygiene",
        "Menu Planning",
        "Customer Service",
        "Hotel Management",
        "Event Planning"
      ],
      projects: [
        {
          title: "School Restaurant",
          description: "Students operate a training restaurant serving the school community",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
        },
        {
          title: "Catering Services",
          description: "Provide catering for school events and functions",
          image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80"
        }
      ],
      skills: ["Cooking Techniques", "Food Presentation", "Customer Service", "Event Management", "Cost Control"],
      teacher: "Chef Maria Ssebunya",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      careers: ["Chef", "Restaurant Manager", "Hotel Manager", "Event Coordinator", "Food Critic"]
    },
    fashion: {
      name: "Fashion Design & Tailoring",
      icon: <Scissors className="h-8 w-8 text-purple-500" />,
      description: "Create beautiful garments and develop fashion design skills",
      modules: [
        "Pattern Making",
        "Sewing Techniques",
        "Fashion Illustration",
        "Textile Knowledge",
        "Fashion Business",
        "Sustainable Fashion"
      ],
      projects: [
        {
          title: "Fashion Show",
          description: "Annual student fashion show showcasing original designs",
          image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"
        },
        {
          title: "School Uniform Design",
          description: "Students design and create school uniforms and accessories",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
        }
      ],
      skills: ["Pattern Design", "Sewing", "Fashion Illustration", "Fabric Selection", "Business Planning"],
      teacher: "Ms. Grace Nakirya",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
      careers: ["Fashion Designer", "Tailor", "Fashion Stylist", "Textile Designer", "Fashion Entrepreneur"]
    }
  };

  const currentProgram = vocationalPrograms[selectedSkill as keyof typeof vocationalPrograms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Vocational Skills | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Develop practical vocational skills at ${schoolConfig.name}. Entrepreneurship, agriculture, hospitality, and fashion design programs.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Vocational Skills"
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
              Practical Skills
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Vocational <span className="text-primary-500">Skills</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Hands-on training in practical skills that prepare students for immediate employment or entrepreneurship opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(vocationalPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedSkill(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedSkill === key
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
            key={selectedSkill}
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

                {/* Course Modules */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Course Modules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentProgram.modules.map((module, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Developed */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Skills You'll Develop
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProgram.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
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
                
                {/* Teacher Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{currentProgram.teacher}</h4>
                    <p className="text-sm opacity-90 mb-4">Vocational Skills Specialist</p>
                    <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Meet Instructor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Projects Showcase */}
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
              Student Projects & Achievements
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Real-world projects that demonstrate practical skills and entrepreneurial thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProgram.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105 cursor-pointer`}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                    View Project Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Industry Partnerships
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="h-6 w-6 text-blue-500" />,
                    title: "Real-World Experience",
                    description: "Internships and apprenticeships with local businesses and organizations"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-green-500" />,
                    title: "Mentorship Programs",
                    description: "Connect with industry professionals for guidance and career development"
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
                    title: "Job Placement Support",
                    description: "Career counseling and job placement assistance for graduates"
                  },
                  {
                    icon: <Award className="h-6 w-6 text-orange-500" />,
                    title: "Industry Certifications",
                    description: "Recognized certifications that enhance employability"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                        {feature.title}
                      </h3>
                      <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
            >
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Success Statistics
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Job Placement Rate", value: "92%", color: "text-green-500" },
                  { label: "Students Starting Businesses", value: "35%", color: "text-blue-500" },
                  { label: "Industry Partnerships", value: "25+", color: "text-purple-500" },
                  { label: "Average Starting Salary", value: "UGX 800K", color: "text-orange-500" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {stat.label}
                    </span>
                    <span className={`text-xl font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default VocationalSkillsPage;