import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Globe,
  MessageCircle,
  Headphones,
  BookOpen,
  Users,
  Award,
  Volume2,
  Mic,
  Video,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface LanguagesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const LanguagesPage: React.FC<LanguagesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [activeSkill, setActiveSkill] = useState("speaking");
  const schoolConfig = getCurrentSchoolConfig();

  const languages = {
    english: {
      name: "English Language",
      flag: "🇬🇧",
      level: "Native/Advanced",
      description: "Master the global language of communication, literature, and business",
      skills: {
        speaking: {
          icon: <Mic className="h-6 w-6 text-blue-500" />,
          activities: ["Debate Club", "Public Speaking", "Drama Performances", "Oral Presentations"],
          tools: ["Speech Recognition", "Pronunciation Practice", "Conversation Partners"]
        },
        listening: {
          icon: <Headphones className="h-6 w-6 text-green-500" />,
          activities: ["Audio Stories", "Podcast Analysis", "Music Interpretation", "News Listening"],
          tools: ["Audio Library", "Listening Exercises", "Comprehension Tests"]
        },
        reading: {
          icon: <BookOpen className="h-6 w-6 text-purple-500" />,
          activities: ["Literature Analysis", "Speed Reading", "Critical Reading", "Research Skills"],
          tools: ["Digital Library", "Reading Tracker", "Comprehension Tools"]
        },
        writing: {
          icon: <FileText className="h-6 w-6 text-orange-500" />,
          activities: ["Creative Writing", "Essay Composition", "Poetry", "Journalism"],
          tools: ["Writing Assistant", "Grammar Checker", "Style Guide"]
        }
      },
      teacher: "Ms. Grace Namuli",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
      culturalEvents: ["Shakespeare Festival", "Poetry Slam", "International Book Day", "English Week"]
    },
    french: {
      name: "French Language",
      flag: "🇫🇷",
      level: "Beginner to Intermediate",
      description: "Discover the language of diplomacy and culture",
      skills: {
        speaking: {
          icon: <Mic className="h-6 w-6 text-blue-500" />,
          activities: ["French Conversation", "Role Playing", "Cultural Dialogues", "Pronunciation Practice"],
          tools: ["Language Exchange", "Speech Practice", "Accent Training"]
        },
        listening: {
          icon: <Headphones className="h-6 w-6 text-green-500" />,
          activities: ["French Music", "Film Watching", "News Listening", "Story Time"],
          tools: ["Audio Resources", "Listening Comprehension", "French Media"]
        },
        reading: {
          icon: <BookOpen className="h-6 w-6 text-purple-500" />,
          activities: ["French Literature", "News Reading", "Cultural Texts", "Poetry"],
          tools: ["French Library", "Reading Exercises", "Vocabulary Builder"]
        },
        writing: {
          icon: <FileText className="h-6 w-6 text-orange-500" />,
          activities: ["Letter Writing", "Essays", "Creative Stories", "Cultural Reports"],
          tools: ["Writing Practice", "Grammar Guide", "Spell Checker"]
        }
      },
      teacher: "Mme. Claire Dubois",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80",
      culturalEvents: ["French Cultural Day", "Francophone Festival", "French Film Week", "Cuisine Workshop"]
    },
    luganda: {
      name: "Luganda",
      flag: "🇺🇬",
      level: "Native/Cultural Heritage",
      description: "Preserving and celebrating our local language and culture",
      skills: {
        speaking: {
          icon: <Mic className="h-6 w-6 text-blue-500" />,
          activities: ["Traditional Storytelling", "Cultural Dialogues", "Proverb Recitation", "Folk Songs"],
          tools: ["Cultural Audio", "Pronunciation Guide", "Elder Interviews"]
        },
        listening: {
          icon: <Headphones className="h-6 w-6 text-green-500" />,
          activities: ["Folk Tales", "Traditional Music", "Cultural Stories", "Radio Programs"],
          tools: ["Audio Archive", "Cultural Media", "Traditional Recordings"]
        },
        reading: {
          icon: <BookOpen className="h-6 w-6 text-purple-500" />,
          activities: ["Cultural Texts", "Historical Documents", "Poetry", "Traditional Literature"],
          tools: ["Cultural Library", "Historical Archives", "Reading Materials"]
        },
        writing: {
          icon: <FileText className="h-6 w-6 text-orange-500" />,
          activities: ["Cultural Essays", "Traditional Stories", "Poetry Writing", "Cultural Research"],
          tools: ["Writing Guide", "Cultural Dictionary", "Style Reference"]
        }
      },
      teacher: "Mr. Robert Kiggundu",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
      culturalEvents: ["Luganda Day", "Cultural Heritage Week", "Traditional Dance", "Storytelling Festival"]
    }
  };

  const currentLanguage = languages[selectedLanguage as keyof typeof languages];
  const currentSkill = currentLanguage.skills[activeSkill as keyof typeof currentLanguage.skills];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Languages | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore language learning at ${schoolConfig.name}. English, French, and Luganda programs with immersive cultural experiences.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80"
            alt="Languages"
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
              Global Communication
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Language <span className="text-primary-500">Programs</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Develop fluency in multiple languages through immersive learning experiences and cultural exploration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Language Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(languages).map(([key, language]) => (
              <button
                key={key}
                onClick={() => setSelectedLanguage(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedLanguage === key
                    ? "bg-primary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="text-4xl mb-4">{language.flag}</div>
                <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                <p className={`text-sm ${selectedLanguage === key ? "text-white/80" : theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                  {language.level}
                </p>
              </button>
            ))}
          </div>

          {/* Language Details */}
          <motion.div
            key={selectedLanguage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{currentLanguage.flag}</span>
                  <div>
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {currentLanguage.name}
                    </h2>
                    <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {currentLanguage.level}
                    </p>
                  </div>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentLanguage.description}
                </p>

                {/* Language Skills */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Language Skills Development
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(currentLanguage.skills).map(([skill, data]) => (
                      <button
                        key={skill}
                        onClick={() => setActiveSkill(skill)}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          activeSkill === skill
                            ? "bg-primary-500 text-white scale-105"
                            : theme === "dark"
                            ? "bg-white/10 hover:bg-white/20 text-white"
                            : "bg-black/10 hover:bg-black/20 text-black"
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          {data.icon}
                          <span className="text-sm font-medium mt-2 capitalize">{skill}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Skill Details */}
                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"} capitalize`}>
                    {activeSkill} Activities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className={`font-medium mb-3 ${theme === "dark" ? "text-white/90" : "text-black/90"}`}>
                        Classroom Activities
                      </h5>
                      <ul className="space-y-2">
                        {currentSkill.activities.map((activity, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className={`font-medium mb-3 ${theme === "dark" ? "text-white/90" : "text-black/90"}`}>
                        Digital Tools
                      </h5>
                      <ul className="space-y-2">
                        {currentSkill.tools.map((tool, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                            <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                              {tool}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentLanguage.image}
                  alt={currentLanguage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Teacher Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{currentLanguage.teacher}</h4>
                    <p className="text-sm opacity-90 mb-4">Language Specialist & Cultural Expert</p>
                    <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Introduction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Events */}
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
              Cultural Immersion Events
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Experience languages through authentic cultural celebrations and activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentLanguage.culturalEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  <Globe className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {event}
                </h3>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Learning Tools */}
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
                Interactive Language Learning
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
                    title: "Conversation Practice",
                    description: "Regular speaking sessions with native speakers and language partners"
                  },
                  {
                    icon: <Headphones className="h-6 w-6 text-green-500" />,
                    title: "Audio Immersion",
                    description: "Extensive listening practice with authentic materials and media"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-purple-500" />,
                    title: "Cultural Exchange",
                    description: "Connect with international students and cultural ambassadors"
                  },
                  {
                    icon: <Award className="h-6 w-6 text-orange-500" />,
                    title: "Certification Prep",
                    description: "Preparation for international language proficiency examinations"
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
                Language Proficiency Levels
              </h3>
              <div className="space-y-4">
                {[
                  { level: "Beginner", students: "45%", color: "bg-red-500" },
                  { level: "Intermediate", students: "35%", color: "bg-yellow-500" },
                  { level: "Advanced", students: "20%", color: "bg-green-500" }
                ].map((level, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {level.level}
                      </span>
                      <span className="text-primary-500 font-semibold">{level.students}</span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}>
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${level.color}`}
                        style={{ width: level.students }}
                      />
                    </div>
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

export default LanguagesPage;