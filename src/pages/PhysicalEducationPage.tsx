import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Activity,
  Trophy,
  Heart,
  Target,
  Users,
  Timer,
  Medal,
  Zap,
  Shield,
  TrendingUp,
  Calendar,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface PhysicalEducationPageProps {
  theme: string;
  toggleTheme: () => void;
}

const PhysicalEducationPage: React.FC<PhysicalEducationPageProps> = ({ theme, toggleTheme }) => {
  const [selectedSport, setSelectedSport] = useState("football");
  const [activeTab, setActiveTab] = useState("sports");
  const schoolConfig = getCurrentSchoolConfig();

  const sportsPrograms = {
    football: {
      name: "Football",
      icon: "⚽",
      description: "Develop teamwork, strategy, and athletic skills through Uganda's most popular sport",
      facilities: ["Full-size Football Pitch", "Training Equipment", "Changing Rooms", "Medical Support"],
      achievements: ["Regional Champions 2023", "National Semi-finalists", "Fair Play Award"],
      coach: "Coach Michael Ssebunya",
      training: "Monday, Wednesday, Friday - 4:00 PM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      teams: ["Junior Team (S1-S3)", "Senior Team (S4-S6)", "Girls Team", "Mixed Team"]
    },
    basketball: {
      name: "Basketball",
      icon: "🏀",
      description: "Fast-paced sport developing agility, coordination, and strategic thinking",
      facilities: ["Indoor Court", "Outdoor Court", "Professional Hoops", "Training Equipment"],
      achievements: ["District Champions", "Inter-School Tournament Winners", "Best Team Spirit"],
      coach: "Coach Sarah Namukasa",
      training: "Tuesday, Thursday, Saturday - 3:30 PM",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80",
      teams: ["Boys Team", "Girls Team", "Mixed Development Team"]
    },
    athletics: {
      name: "Track & Field",
      icon: "🏃",
      description: "Individual excellence in running, jumping, and throwing events",
      facilities: ["400m Track", "Field Event Areas", "Starting Blocks", "Timing Equipment"],
      achievements: ["Individual National Records", "Regional Track Champions", "Olympic Development"],
      coach: "Coach Peter Kiprotich",
      training: "Daily - 6:00 AM & 4:00 PM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      teams: ["Sprinters", "Distance Runners", "Field Events", "Relay Teams"]
    },
    swimming: {
      name: "Swimming",
      icon: "🏊",
      description: "Full-body fitness and competitive swimming in our modern pool facility",
      facilities: ["Olympic-size Pool", "Diving Boards", "Lane Ropes", "Timing Systems"],
      achievements: ["Swimming Gala Champions", "Individual Medals", "Water Safety Certified"],
      coach: "Coach Mary Nakimuli",
      training: "Monday to Friday - 6:30 AM & 5:00 PM",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80",
      teams: ["Competitive Team", "Recreational Team", "Water Polo", "Synchronized Swimming"]
    }
  };

  const fitnessPrograms = {
    general: {
      name: "General Fitness",
      activities: ["Cardio Training", "Strength Building", "Flexibility", "Endurance", "Coordination"],
      benefits: ["Improved Health", "Better Focus", "Stress Relief", "Team Building", "Discipline"]
    },
    specialized: {
      name: "Specialized Training",
      activities: ["Sports-specific Training", "Injury Prevention", "Nutrition Education", "Mental Preparation"],
      benefits: ["Peak Performance", "Injury Reduction", "Healthy Lifestyle", "Goal Achievement"]
    }
  };

  const currentSport = sportsPrograms[selectedSport as keyof typeof sportsPrograms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Physical Education | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore physical education and sports programs at ${schoolConfig.name}. Football, basketball, athletics, swimming, and fitness training.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Sports Animation */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
            alt="Physical Education"
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
              Health & Fitness
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Physical <span className="text-primary-500">Education</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Building healthy bodies, strong minds, and team spirit through comprehensive sports and fitness programs
            </p>
          </motion.div>

          {/* Floating Sports Icons */}
          <div className="relative h-32 mt-16">
            {["⚽", "🏀", "🏃", "🏊", "🏐", "🎾"].map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`absolute text-4xl animate-float`}
                style={{
                  left: `${15 + index * 14}%`,
                  top: `${Math.sin(index) * 20 + 50}%`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            {["sports", "fitness", "health"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {tab} Programs
              </button>
            ))}
          </div>

          {activeTab === "sports" && (
            <div className="space-y-12">
              {/* Sports Selection */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(sportsPrograms).map(([key, sport]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSport(key)}
                    className={`p-6 rounded-2xl transition-all duration-300 text-center ${
                      selectedSport === key
                        ? "bg-primary-500 text-white scale-105 shadow-lg"
                        : theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    }`}
                  >
                    <div className="text-3xl mb-3">{sport.icon}</div>
                    <span className="font-semibold">{sport.name}</span>
                  </button>
                ))}
              </div>

              {/* Sport Details */}
              <motion.div
                key={selectedSport}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{currentSport.icon}</span>
                      <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {currentSport.name}
                      </h2>
                    </div>

                    <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                      {currentSport.description}
                    </p>

                    {/* Training Schedule */}
                    <div className="mb-6">
                      <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Training Schedule
                      </h3>
                      <div className="flex items-center">
                        <Timer className="h-5 w-5 text-primary-500 mr-3" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {currentSport.training}
                        </span>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="mb-6">
                      <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Team Categories
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {currentSport.teams.map((team, index) => (
                          <div key={index} className="flex items-center">
                            <Users className="h-4 w-4 text-primary-500 mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {team}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Recent Achievements
                      </h3>
                      <div className="space-y-2">
                        {currentSport.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center">
                            <Trophy className="h-4 w-4 text-primary-500 mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={currentSport.image}
                      alt={currentSport.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Coach Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                        <h4 className="text-xl font-bold mb-2">{currentSport.coach}</h4>
                        <p className="text-sm opacity-90 mb-4">Professional Sports Coach & Trainer</p>
                        <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Meet Coach
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === "fitness" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(fitnessPrograms).map(([key, program]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-3xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
                >
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                    {program.name}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Activities
                      </h4>
                      <div className="space-y-2">
                        {program.activities.map((activity, index) => (
                          <div key={index} className="flex items-center">
                            <Zap className="h-4 w-4 text-primary-500 mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Benefits
                      </h4>
                      <div className="space-y-2">
                        {program.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <Heart className="h-4 w-4 text-red-500 mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "health" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8 text-red-500" />,
                  title: "Health Education",
                  description: "Understanding nutrition, wellness, and healthy lifestyle choices",
                  topics: ["Nutrition Basics", "Mental Health", "Injury Prevention", "Hygiene"]
                },
                {
                  icon: <Shield className="h-8 w-8 text-blue-500" />,
                  title: "Safety Training",
                  description: "First aid, emergency response, and sports safety protocols",
                  topics: ["First Aid", "CPR Training", "Emergency Response", "Sports Safety"]
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-green-500" />,
                  title: "Fitness Assessment",
                  description: "Regular fitness testing and personalized improvement plans",
                  topics: ["Fitness Testing", "Goal Setting", "Progress Tracking", "Personal Plans"]
                }
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
                >
                  <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    {program.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    {program.title}
                  </h3>
                  <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sports Facilities */}
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
              World-Class Sports Facilities
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              State-of-the-art facilities supporting all aspects of physical education and sports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Football Pitch", icon: "⚽", specs: "FIFA Standard" },
              { name: "Basketball Courts", icon: "🏀", specs: "Indoor & Outdoor" },
              { name: "Swimming Pool", icon: "🏊", specs: "Olympic Size" },
              { name: "Athletics Track", icon: "🏃", specs: "400m Synthetic" },
              { name: "Gymnasium", icon: "🏋️", specs: "Multi-Purpose" },
              { name: "Tennis Courts", icon: "🎾", specs: "2 Courts" },
              { name: "Volleyball Court", icon: "🏐", specs: "Indoor Court" },
              { name: "Fitness Center", icon: "💪", specs: "Modern Equipment" }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
              >
                <div className="text-3xl mb-4">{facility.icon}</div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {facility.name}
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                  {facility.specs}
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

export default PhysicalEducationPage;