import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Trophy,
  Users,
  Calendar,
  Clock,
  MapPin,
  Award,
  Target,
  Activity,
  Star,
  Play,
  Medal,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface SportsAthleticsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const SportsAthleticsPage: React.FC<SportsAthleticsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedSport, setSelectedSport] = useState("football");
  const [activeTab, setActiveTab] = useState("teams");
  const schoolConfig = getCurrentSchoolConfig();

  const sportsPrograms = {
    football: {
      name: "Football",
      icon: "⚽",
      description: "Competitive football teams representing the school in regional and national tournaments",
      teams: ["Junior Boys (S1-S3)", "Senior Boys (S4-S6)", "Girls Team", "Mixed Development"],
      coach: "Coach Michael Ssebunya",
      schedule: "Monday, Wednesday, Friday - 4:00 PM",
      achievements: ["Regional Champions 2023", "National Semi-finalists", "Fair Play Award"],
      facilities: ["Full-size Football Pitch", "Training Equipment", "Changing Rooms"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
    },
    basketball: {
      name: "Basketball",
      icon: "🏀",
      description: "Fast-paced basketball program developing agility and strategic thinking",
      teams: ["Boys Team", "Girls Team", "Mixed Development Team"],
      coach: "Coach Sarah Namukasa",
      schedule: "Tuesday, Thursday, Saturday - 3:30 PM",
      achievements: ["District Champions", "Inter-School Winners", "Best Team Spirit"],
      facilities: ["Indoor Court", "Outdoor Court", "Professional Equipment"],
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
    },
    athletics: {
      name: "Track & Field",
      icon: "🏃",
      description: "Individual excellence in running, jumping, and throwing events",
      teams: ["Sprinters", "Distance Runners", "Field Events", "Relay Teams"],
      coach: "Coach Peter Kiprotich",
      schedule: "Daily - 6:00 AM & 4:00 PM",
      achievements: ["Individual National Records", "Regional Champions", "Olympic Development"],
      facilities: ["400m Track", "Field Event Areas", "Starting Blocks"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
    },
    swimming: {
      name: "Swimming",
      icon: "🏊",
      description: "Comprehensive swimming program for fitness and competition",
      teams: ["Competitive Team", "Recreational Team", "Water Polo"],
      coach: "Coach Mary Nakimuli",
      schedule: "Monday to Friday - 6:30 AM & 5:00 PM",
      achievements: ["Swimming Gala Champions", "Individual Medals", "Water Safety Certified"],
      facilities: ["Olympic-size Pool", "Diving Boards", "Timing Systems"],
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80"
    }
  };

  const upcomingEvents = [
    {
      title: "Inter-House Sports Day",
      date: "2024-02-15",
      time: "8:00 AM",
      location: "Sports Complex",
      type: "Competition"
    },
    {
      title: "Regional Football Championship",
      date: "2024-02-22",
      time: "2:00 PM",
      location: "Away - Kampala Stadium",
      type: "Tournament"
    },
    {
      title: "Swimming Gala",
      date: "2024-03-01",
      time: "10:00 AM",
      location: "School Pool",
      type: "Competition"
    }
  ];

  const currentSport = sportsPrograms[selectedSport as keyof typeof sportsPrograms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Sports & Athletics | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore sports and athletics programs at ${schoolConfig.name}. Football, basketball, athletics, swimming, and more with professional coaching.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
            alt="Sports & Athletics"
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
              Athletic Excellence
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Sports & <span className="text-primary-500">Athletics</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Building champions through competitive sports, teamwork, and athletic excellence. Join our award-winning sports programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sports Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Teams Available
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
              </div>

              <div className="relative">
                <img
                  src={currentSport.image}
                  alt={currentSport.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{currentSport.coach}</h4>
                    <p className="text-sm opacity-90 mb-4">Professional Sports Coach</p>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {currentSport.schedule}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Sports Events
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Don't miss these exciting sporting events and competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full font-medium">
                    {event.type}
                  </span>
                  <Trophy className="h-6 w-6 text-primary-500" />
                </div>
                
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-primary-500 mr-2" />
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {event.location}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                  Register Interest
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

export default SportsAthleticsPage;