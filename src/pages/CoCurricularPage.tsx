import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Activity,
  Trophy,
  Music,
  Palette,
  Users,
  Heart,
  Mic,
  Camera,
  Globe,
  Lightbulb,
  Target,
  Award,
  Calendar,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface Activity {
  id: string;
  name: string;
  category: string;
  description: string;
  schedule: string;
  location: string;
  coordinator: string;
  participants: number;
  achievements: string[];
  image: string;
  requirements?: string[];
}

interface CoCurricularPageProps {
  theme: string;
  toggleTheme: () => void;
}

const CoCurricularPage: React.FC<CoCurricularPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const schoolConfig = getCurrentSchoolConfig();

  const activityCategories = [
    {
      id: "all",
      name: "All Activities",
      icon: <Activity className="h-5 w-5" />,
      color: "gray",
    },
    {
      id: "sports",
      name: "Sports & Athletics",
      icon: <Trophy className="h-5 w-5" />,
      color: "green",
    },
    {
      id: "arts",
      name: "Creative Arts",
      icon: <Palette className="h-5 w-5" />,
      color: "purple",
    },
    {
      id: "music",
      name: "Music & Drama",
      icon: <Music className="h-5 w-5" />,
      color: "pink",
    },
    {
      id: "academic",
      name: "Academic Clubs",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "blue",
    },
    {
      id: "community",
      name: "Community Service",
      icon: <Heart className="h-5 w-5" />,
      color: "red",
    },
    {
      id: "leadership",
      name: "Leadership",
      icon: <Users className="h-5 w-5" />,
      color: "orange",
    },
  ];

  const activities: Activity[] = [
    {
      id: "1",
      name: "Football Team",
      category: "sports",
      description:
        "Competitive football team representing the school in regional and national tournaments",
      schedule: "Monday, Wednesday, Friday - 4:00 PM",
      location: "Main Football Field",
      coordinator: "Coach Michael Ssebunya",
      participants: 25,
      achievements: [
        "Regional Champions 2023",
        "National Semi-finalists 2023",
        "Fair Play Award 2022",
      ],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      requirements: [
        "Good physical fitness",
        "Team commitment",
        "Regular attendance",
      ],
    },
    {
      id: "2",
      name: "Debate Society",
      category: "academic",
      description:
        "Develop critical thinking and public speaking skills through competitive debating",
      schedule: "Tuesday, Thursday - 3:30 PM",
      location: "Conference Room",
      coordinator: "Ms. Grace Namuli",
      participants: 20,
      achievements: [
        "National Debate Champions 2023",
        "Best Speaker Awards",
        "Inter-school Tournament Winners",
      ],
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      name: "School Choir",
      category: "music",
      description:
        "Musical ensemble performing at school events and community functions",
      schedule: "Monday, Wednesday - 3:00 PM",
      location: "Music Room",
      coordinator: "Mr. Samuel Hakim",
      participants: 35,
      achievements: [
        "Regional Music Festival Winners",
        "Community Performance Recognition",
        "Cultural Day Highlights",
      ],
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
    },
    {
      id: "4",
      name: "Art Club",
      category: "arts",
      description:
        "Creative expression through various art forms including painting, sculpture, and digital art",
      schedule: "Tuesday, Friday - 3:30 PM",
      location: "Art Studio",
      coordinator: "Ms. Rebecca Namatovu",
      participants: 18,
      achievements: [
        "National Art Competition Winners",
        "School Gallery Exhibitions",
        "Community Art Projects",
      ],
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
    },
    {
      id: "5",
      name: "Environmental Club",
      category: "community",
      description: "Environmental conservation and sustainability initiatives",
      schedule: "Saturday - 9:00 AM",
      location: "School Gardens",
      coordinator: "Dr. Alice Nakimuli",
      participants: 30,
      achievements: [
        "Eco-School Green Flag Award",
        "Tree Planting Initiative",
        "Waste Reduction Program",
      ],
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
    },
    {
      id: "6",
      name: "Student Council",
      category: "leadership",
      description:
        "Student government fostering leadership skills and school representation",
      schedule: "Weekly meetings - Friday 2:00 PM",
      location: "Student Council Chamber",
      coordinator: "Mr. Peter Lubega",
      participants: 12,
      achievements: [
        "Student Voice Implementation",
        "School Policy Contributions",
        "Leadership Excellence Awards",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    },
  ];

  const filteredActivities =
    selectedCategory === "all"
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      sports: "bg-green-500/20 text-green-500",
      arts: "bg-purple-500/20 text-purple-500",
      music: "bg-pink-500/20 text-pink-500",
      academic: "bg-blue-500/20 text-blue-500",
      community: "bg-red-500/20 text-red-500",
      leadership: "bg-orange-500/20 text-orange-500",
    };
    return colorMap[category] || "bg-gray-500/20 text-gray-500";
  };

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Co-Curricular Activities | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore the diverse co-curricular activities at ${schoolConfig.name}. From sports and arts to leadership and community service, discover opportunities for holistic development.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} activities, sports, arts, music, clubs, leadership, community service, ${schoolConfig.address.city} school activities`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Co-Curricular Activities"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-r from-black/90 to-black/70"
                : "bg-gradient-to-r from-white/90 to-white/70"
            }`}
          />
        </div>

        <div
          className="max-w-7xl mx-auto relative"
          style={{ marginTop: "6rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Holistic Development
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Co-Curricular&nbsp;
              <span className="text-primary-500">Activities</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Diverse opportunities for students to explore interests, develop
              talents, and build character beyond the classroom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className={`py-8 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {activityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? theme === "dark"
                      ? "bg-primary-500 text-white scale-105 shadow-lg"
                      : "bg-primary-500 text-black scale-105 shadow-md"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <span
                  className={`flex items-center ${
                    selectedCategory === category.id
                      ? theme === "dark"
                        ? "text-white"
                        : "text-black"
                      : theme === "dark"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {category.icon}
                </span>
                <span
                  className={`font-medium ${
                    selectedCategory === category.id
                      ? theme === "dark"
                        ? "text-white"
                        : "text-black"
                      : theme === "dark"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        activity.category
                      )}`}
                    >
                      {activity.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {activity.participants} members
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    {activity.name}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-4 leading-relaxed`}
                  >
                    {activity.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary-500 mr-2" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {activity.schedule}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-primary-500 mr-2" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {activity.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary-500 mr-2" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {activity.coordinator}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {activity.achievements
                        .slice(0, 2)
                        .map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                          >
                            {achievement.split(" ")[0]}
                          </span>
                        ))}
                      {activity.achievements.length > 2 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                          +{activity.achievements.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedActivity(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {selectedActivity.name}
              </h3>
              <button
                onClick={() => setSelectedActivity(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                <div
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-white/5" : "bg-black/5"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Activity Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Schedule
                      </span>
                      <span
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {selectedActivity.schedule}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Location
                      </span>
                      <span
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {selectedActivity.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Coordinator
                      </span>
                      <span
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {selectedActivity.coordinator}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Members
                      </span>
                      <span className="font-medium text-primary-500">
                        {selectedActivity.participants}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    About This Activity
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } leading-relaxed`}
                  >
                    {selectedActivity.description}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Recent Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedActivity.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedActivity.requirements && (
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-3`}
                    >
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {selectedActivity.requirements.map(
                        (requirement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-white/80"
                                  : "text-black/80"
                              }`}
                            >
                              {requirement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Join This Activity
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Benefits Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Why Co-Curricular Activities Matter
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Research shows that students involved in co-curricular activities
              perform better academically and develop essential life skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-blue-500" />,
                title: "Skill Development",
                description:
                  "Build leadership, teamwork, and communication skills",
                stat: "85% improvement",
              },
              {
                icon: <Users className="h-8 w-8 text-green-500" />,
                title: "Social Connections",
                description:
                  "Form lasting friendships and expand social networks",
                stat: "92% satisfaction",
              },
              {
                icon: <Award className="h-8 w-8 text-purple-500" />,
                title: "Academic Performance",
                description:
                  "Students in activities show better academic results",
                stat: "+12% GPA boost",
              },
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "Well-being",
                description: "Improved mental health and stress management",
                stat: "78% stress reduction",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border`}
              >
                <div
                  className={`p-4 rounded-xl inline-block mb-4 ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {benefit.icon}
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-3 leading-relaxed`}
                >
                  {benefit.description}
                </p>
                <div className="text-lg font-bold text-primary-500">
                  {benefit.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 md:p-12 text-center ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-white/20"
                : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-black/20"
            } border backdrop-blur-xl relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <h2
                className={`text-4xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Ready to Get Involved?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Join our vibrant community of students exploring their passions
                and developing new skills
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Register for Activities
                  <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center`}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Activity Calendar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default CoCurricularPage;
