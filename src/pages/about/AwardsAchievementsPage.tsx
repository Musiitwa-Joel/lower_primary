import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Crown,
  Target,
  TrendingUp,
  Calendar,
  Users,
  BookOpen,
  Globe,
  Zap,
  Filter,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: "academic" | "sports" | "innovation" | "community" | "leadership" | "international";
  year: number;
  level: "school" | "district" | "regional" | "national" | "international";
  awardedBy: string;
  image: string;
  impact: string;
  participants?: string[];
  recognitionType: "certificate" | "trophy" | "medal" | "plaque" | "scholarship";
}

interface AwardsAchievementsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AwardsAchievementsPage: React.FC<AwardsAchievementsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "National Academic Excellence Award",
      description: "Recognized as the top-performing secondary school in Uganda for outstanding academic results and innovative teaching methods.",
      category: "academic",
      year: 2023,
      level: "national",
      awardedBy: "Ministry of Education and Sports, Uganda",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      impact: "Established our reputation as a leading educational institution and attracted top students from across the country",
      participants: ["All teaching staff", "Academic leadership team", "Student body"],
      recognitionType: "trophy"
    },
    {
      id: "2",
      title: "East Africa Mathematics Olympiad Champions",
      description: "Our students won first place in the prestigious East Africa Mathematics Olympiad, competing against schools from 6 countries.",
      category: "academic",
      year: 2023,
      level: "international",
      awardedBy: "East Africa Mathematics Society",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
      impact: "Showcased our mathematics program excellence on the international stage",
      participants: ["Sarah Nakato (S6)", "David Mukasa (S5)", "Grace Namuli (S4)"],
      recognitionType: "medal"
    },
    {
      id: "3",
      title: "Innovation in Education Technology Award",
      description: "Recognized for pioneering the integration of AI and digital learning platforms in secondary education across Uganda.",
      category: "innovation",
      year: 2023,
      level: "national",
      awardedBy: "Uganda National Commission for UNESCO",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      impact: "Led to partnerships with international EdTech companies and government adoption of our digital learning model",
      participants: ["IT Department", "Academic staff", "Student tech club"],
      recognitionType: "plaque"
    },
    {
      id: "4",
      title: "Regional Football Championship",
      description: "Our football team won the Central Region Secondary Schools Football Championship, remaining undefeated throughout the tournament.",
      category: "sports",
      year: 2023,
      level: "regional",
      awardedBy: "Uganda Secondary Schools Sports Association",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      impact: "Boosted school spirit and attracted talented athletes to our sports programs",
      participants: ["School football team", "Coach Michael Ssebunya", "Sports department"],
      recognitionType: "trophy"
    },
    {
      id: "5",
      title: "Community Service Excellence Award",
      description: "Honored for outstanding community service initiatives that have positively impacted over 5,000 people in surrounding communities.",
      category: "community",
      year: 2022,
      level: "national",
      awardedBy: "Uganda Community Development Association",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      impact: "Strengthened community relationships and established sustainable outreach programs",
      participants: ["Student council", "Community service club", "All students"],
      recognitionType: "certificate"
    },
    {
      id: "6",
      title: "Environmental Conservation Leadership",
      description: "Recognized as the leading school in environmental conservation efforts, including tree planting, waste management, and renewable energy adoption.",
      category: "community",
      year: 2022,
      level: "national",
      awardedBy: "National Environment Management Authority",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      impact: "Inspired other schools to adopt sustainable practices and reduced our carbon footprint by 40%",
      participants: ["Environmental club", "All students", "Facilities team"],
      recognitionType: "plaque"
    },
    {
      id: "7",
      title: "Outstanding Leadership Development Program",
      description: "Awarded for our comprehensive student leadership development program that has produced leaders in various fields across Uganda.",
      category: "leadership",
      year: 2022,
      level: "national",
      awardedBy: "Uganda Youth Leadership Foundation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      impact: "Our alumni now hold leadership positions in government, business, and civil society",
      participants: ["Student council", "Leadership mentors", "Alumni network"],
      recognitionType: "trophy"
    },
    {
      id: "8",
      title: "International School Partnership Excellence",
      description: "Recognized for establishing successful partnerships with schools in 5 countries, facilitating student and teacher exchanges.",
      category: "international",
      year: 2021,
      level: "international",
      awardedBy: "International Schools Association",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      impact: "Provided global exposure to our students and enhanced cultural understanding",
      participants: ["International programs office", "Exchange students", "Partner schools"],
      recognitionType: "certificate"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: <Award className="h-4 w-4" /> },
    { id: "academic", name: "Academic", icon: <BookOpen className="h-4 w-4" /> },
    { id: "sports", name: "Sports", icon: <Trophy className="h-4 w-4" /> },
    { id: "innovation", name: "Innovation", icon: <Zap className="h-4 w-4" /> },
    { id: "community", name: "Community", icon: <Users className="h-4 w-4" /> },
    { id: "leadership", name: "Leadership", icon: <Crown className="h-4 w-4" /> },
    { id: "international", name: "International", icon: <Globe className="h-4 w-4" /> }
  ];

  const levels = [
    "all", "international", "national", "regional", "district", "school"
  ];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = selectedCategory === "all" || achievement.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || achievement.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  const sortedAchievements = [...filteredAchievements].sort((a, b) => b.year - a.year);

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      academic: "bg-blue-500/20 text-blue-500",
      sports: "bg-green-500/20 text-green-500",
      innovation: "bg-purple-500/20 text-purple-500",
      community: "bg-orange-500/20 text-orange-500",
      leadership: "bg-red-500/20 text-red-500",
      international: "bg-indigo-500/20 text-indigo-500"
    };
    return colorMap[category] || "bg-gray-500/20 text-gray-500";
  };

  const getLevelIcon = (level: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      international: <Globe className="h-5 w-5 text-purple-500" />,
      national: <Crown className="h-5 w-5 text-gold-500" />,
      regional: <Trophy className="h-5 w-5 text-blue-500" />,
      district: <Medal className="h-5 w-5 text-green-500" />,
      school: <Star className="h-5 w-5 text-orange-500" />
    };
    return iconMap[level] || <Award className="h-5 w-5 text-gray-500" />;
  };

  const getRecognitionIcon = (type: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      trophy: <Trophy className="h-6 w-6 text-gold-500" />,
      medal: <Medal className="h-6 w-6 text-silver-500" />,
      certificate: <Award className="h-6 w-6 text-bronze-500" />,
      plaque: <Star className="h-6 w-6 text-blue-500" />,
      scholarship: <BookOpen className="h-6 w-6 text-green-500" />
    };
    return iconMap[type] || <Award className="h-6 w-6 text-gray-500" />;
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Awards & Achievements | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Celebrate the awards and achievements of ${schoolConfig.name}. Academic excellence, sports victories, and community recognition in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Trophy Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-yellow-500/10 to-orange-500/10" />
          {/* Trophy Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                }}
              >
                {i % 4 === 0 ? "🏆" : i % 4 === 1 ? "🥇" : i % 4 === 2 ? "⭐" : "🎖️"}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Excellence Recognized
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Awards & <span className="text-primary-500">Achievements</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Celebrating our journey of excellence through recognition, awards, and achievements 
              that reflect our commitment to quality education and community impact
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-gold-500 mb-2">50+</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Total Awards
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-gold-500 mb-2">15</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                National Awards
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-gold-500 mb-2">5</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                International Recognition
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-gold-500 mb-2">2023</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Latest Award
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Category Filter */}
            <div>
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary-500 text-white scale-105"
                        : theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                Filter by Level
              </h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 capitalize ${
                      selectedLevel === level
                        ? "bg-secondary-500 text-white scale-105"
                        : theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    }`}
                  >
                    {level === "all" ? "All Levels" : level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <span className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
              Showing {sortedAchievements.length} of {achievements.length} achievements
            </span>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </span>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      {getLevelIcon(achievement.level)}
                      <span className="ml-1 capitalize">{achievement.level}</span>
                    </div>
                  </div>

                  {/* Recognition Type */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-primary-500/80 text-white p-2 rounded-lg">
                      {getRecognitionIcon(achievement.recognitionType)}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {achievement.year}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed line-clamp-3`}>
                    {achievement.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Awarded By
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {achievement.awardedBy.length > 20 ? `${achievement.awardedBy.substring(0, 20)}...` : achievement.awardedBy}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Participants
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {achievement.participants ? achievement.participants.length : "Multiple"}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
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
              Achievement Timeline
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Our journey of recognition and excellence over the years
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${theme === "dark" ? "bg-white/20" : "bg-black/20"} rounded-full`} />

            <div className="space-y-12">
              {[2023, 2022, 2021, 2020].map((year, yearIndex) => {
                const yearAchievements = achievements.filter(a => a.year === year);
                if (yearAchievements.length === 0) return null;

                return (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: yearIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Year Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                      {year.toString().slice(-2)}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-8 lg:pl-0">
                      <div className={`${yearIndex % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:pl-8 lg:col-start-2"}`}>
                        <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                          {year} Achievements
                        </h3>
                        <div className="space-y-4">
                          {yearAchievements.map((achievement, index) => (
                            <div
                              key={achievement.id}
                              className={`p-4 rounded-xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-colors cursor-pointer`}
                              onClick={() => setSelectedAchievement(achievement)}
                            >
                              <div className="flex items-center mb-2">
                                {getRecognitionIcon(achievement.recognitionType)}
                                <h4 className={`ml-3 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                  {achievement.title}
                                </h4>
                              </div>
                              <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                                {achievement.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedAchievement.title}
              </h3>
              <button
                onClick={() => setSelectedAchievement(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Award Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Year</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedAchievement.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Level</span>
                      <span className={`font-medium capitalize ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedAchievement.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Category</span>
                      <span className={`font-medium capitalize ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedAchievement.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Type</span>
                      <span className={`font-medium capitalize ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedAchievement.recognitionType}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Description
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedAchievement.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Impact
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedAchievement.impact}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Awarded By
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                    {selectedAchievement.awardedBy}
                  </p>
                </div>

                {selectedAchievement.participants && (
                  <div>
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      Key Participants
                    </h4>
                    <ul className="space-y-2">
                      {selectedAchievement.participants.map((participant, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {participant}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    Certificate
                  </button>
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium`}>
                    Share Achievement
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default AwardsAchievementsPage;