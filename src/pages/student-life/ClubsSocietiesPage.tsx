import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Users,
  BookOpen,
  Lightbulb,
  Music,
  Camera,
  Globe,
  Code,
  Heart,
  Award,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface ClubsSocietiesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ClubsSocietiesPage: React.FC<ClubsSocietiesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedClub, setSelectedClub] = useState<any>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const clubCategories = [
    { id: "all", name: "All Clubs", icon: <Users className="h-5 w-5" /> },
    { id: "academic", name: "Academic", icon: <BookOpen className="h-5 w-5" /> },
    { id: "creative", name: "Creative Arts", icon: <Music className="h-5 w-5" /> },
    { id: "technology", name: "Technology", icon: <Code className="h-5 w-5" /> },
    { id: "service", name: "Community Service", icon: <Heart className="h-5 w-5" /> },
    { id: "cultural", name: "Cultural", icon: <Globe className="h-5 w-5" /> },
  ];

  const clubs = [
    {
      id: "1",
      name: "Debate Society",
      category: "academic",
      description: "Develop critical thinking and public speaking skills through competitive debating",
      coordinator: "Ms. Grace Namuli",
      schedule: "Tuesday, Thursday - 3:30 PM",
      location: "Conference Room",
      members: 25,
      achievements: ["National Debate Champions 2023", "Best Speaker Awards"],
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
      activities: ["Weekly debates", "Public speaking workshops", "Inter-school competitions"]
    },
    {
      id: "2",
      name: "Drama Club",
      category: "creative",
      description: "Express creativity through theatrical performances and storytelling",
      coordinator: "Ms. Patricia Nalwoga",
      schedule: "Monday, Wednesday - 4:00 PM",
      location: "Auditorium",
      members: 30,
      achievements: ["Regional Drama Festival Winners", "Best Production Award"],
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80",
      activities: ["Script writing", "Acting workshops", "Stage productions"]
    },
    {
      id: "3",
      name: "Coding Club",
      category: "technology",
      description: "Learn programming and develop innovative technology solutions",
      coordinator: "Mr. James Okello",
      schedule: "Friday - 3:00 PM",
      location: "Computer Lab",
      members: 20,
      achievements: ["National Coding Competition Winners", "App Development Awards"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      activities: ["Programming workshops", "Hackathons", "Tech projects"]
    },
    {
      id: "4",
      name: "Environmental Club",
      category: "service",
      description: "Promote environmental conservation and sustainability initiatives",
      coordinator: "Dr. Alice Nakimuli",
      schedule: "Saturday - 9:00 AM",
      location: "School Gardens",
      members: 35,
      achievements: ["Eco-School Green Flag", "Tree Planting Initiative"],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      activities: ["Tree planting", "Recycling programs", "Environmental education"]
    },
    {
      id: "5",
      name: "Photography Club",
      category: "creative",
      description: "Capture memories and develop visual storytelling skills",
      coordinator: "Mr. David Kiprotich",
      schedule: "Thursday - 4:00 PM",
      location: "Media Room",
      members: 18,
      achievements: ["Photography Exhibition", "School Magazine Features"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
      activities: ["Photo walks", "Editing workshops", "Exhibition planning"]
    },
    {
      id: "6",
      name: "Cultural Heritage Society",
      category: "cultural",
      description: "Celebrate and preserve Ugandan culture and traditions",
      coordinator: "Mr. Robert Kiggundu",
      schedule: "Wednesday - 3:30 PM",
      location: "Cultural Center",
      members: 28,
      achievements: ["Cultural Day Organizers", "Traditional Dance Champions"],
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
      activities: ["Traditional dances", "Cultural research", "Heritage preservation"]
    }
  ];

  const filteredClubs = selectedCategory === "all" 
    ? clubs 
    : clubs.filter(club => club.category === selectedCategory);

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Clubs & Societies | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Join clubs and societies at ${schoolConfig.name}. Academic, creative, technology, and community service clubs for holistic development.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Clubs & Societies"
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
              Explore Your Interests
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Clubs & <span className="text-primary-500">Societies</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Discover your passions and develop new skills through our diverse range of clubs and societies. Find your community and make lasting friendships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {clubCategories.map((category) => (
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
        </div>
      </section>

      {/* Clubs Grid */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClubs.map((club, index) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedClub(club)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{club.name}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {club.members} members
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                    {club.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary-500 mr-2" />
                      <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {club.schedule}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-primary-500 mr-2" />
                      <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {club.location}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {club.achievements.slice(0, 2).map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                        >
                          {achievement.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Detail Modal */}
      {selectedClub && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedClub(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedClub.name}
              </h3>
              <button
                onClick={() => setSelectedClub(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedClub.image}
                  alt={selectedClub.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Club Activities
                  </h4>
                  <ul className="space-y-2">
                    {selectedClub.activities.map((activity: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <Award className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    About This Club
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedClub.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Coordinator
                    </span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {selectedClub.coordinator}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Schedule
                    </span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {selectedClub.schedule}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Location
                    </span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {selectedClub.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Members
                    </span>
                    <span className="font-medium text-primary-500">
                      {selectedClub.members}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedClub.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Join This Club
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default ClubsSocietiesPage;