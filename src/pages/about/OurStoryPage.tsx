import React from "react";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Calendar,
  Users,
  Award,
  Heart,
  Target,
  Lightbulb,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface OurStoryPageProps {
  theme: string;
  toggleTheme: () => void;
}

const OurStoryPage: React.FC<OurStoryPageProps> = ({ theme, toggleTheme }) => {
  const schoolConfig = getCurrentSchoolConfig();

  const milestones = [
    {
      year: schoolConfig.established,
      title: "Foundation",
      description: `${schoolConfig.name} was established with a vision to provide quality education in ${schoolConfig.address.city}`,
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
    },
    {
      year: schoolConfig.established + 3,
      title: "First Graduation",
      description: "Our first cohort of students graduated with outstanding results, setting the standard for excellence",
      icon: <Award className="h-6 w-6 text-green-500" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
    },
    {
      year: schoolConfig.established + 5,
      title: "Campus Expansion",
      description: "Major infrastructure development including new science laboratories and sports facilities",
      icon: <Target className="h-6 w-6 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
    },
    {
      year: schoolConfig.established + 8,
      title: "Digital Innovation",
      description: "Introduction of digital learning platforms and smart classroom technology",
      icon: <Lightbulb className="h-6 w-6 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
    }
  ];

  const storyChapters = [
    {
      title: "The Beginning",
      content: `In ${schoolConfig.established}, a group of visionary educators came together with a simple yet powerful dream: to create an educational institution that would transform lives and shape the future of ${schoolConfig.address.city}. What started as a modest initiative has grown into one of the region's most respected educational institutions.`,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&q=80"
    },
    {
      title: "Growing Together",
      content: `Over the years, we've grown alongside our community. From our first class of 50 students to today's vibrant community of over 1,200 learners, every step of our journey has been guided by our commitment to excellence, integrity, and innovation. We've weathered challenges and celebrated triumphs, always keeping our students at the heart of everything we do.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    {
      title: "Innovation & Excellence",
      content: `Today, ${schoolConfig.name} stands as a beacon of educational excellence in ${schoolConfig.address.city}. We've embraced technology, modernized our facilities, and continuously evolved our teaching methods. Yet, our core values remain unchanged: nurturing young minds, building character, and preparing students for success in an ever-changing world.`,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Our Story | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Discover the inspiring story of ${schoolConfig.name}. From humble beginnings in ${schoolConfig.established} to becoming a leading educational institution in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Parallax Effect */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10" />
          <div className="absolute inset-0 bg-grid-white opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Our Journey
            </span>
            <h1 className={`text-5xl md:text-7xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Our <span className="text-primary-500">Story</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              A journey of {new Date().getFullYear() - schoolConfig.established} years dedicated to educational excellence, 
              innovation, and nurturing the leaders of tomorrow in {schoolConfig.address.city}.
            </p>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Years of Excellence", value: `${new Date().getFullYear() - schoolConfig.established}+` },
              { label: "Students Graduated", value: "5,000+" },
              { label: "Awards Won", value: "50+" },
              { label: "Community Impact", value: "Immeasurable" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Chapters */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {storyChapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                      {chapter.title}
                    </h2>
                    <p className={`text-lg ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                      {chapter.content}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Key Milestones
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Important moments that shaped our journey to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${theme === "dark" ? "bg-white/20" : "bg-black/20"} rounded-full`} />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white z-10" />

                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <div className={`p-8 rounded-3xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl hover:scale-105 transition-all duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-4`}>
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-500">{milestone.year}</div>
                          <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"
            }`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <Heart className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Our Legacy Continues
              </h2>
              <p className={`text-xl mb-8 max-w-3xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Every day, we write new chapters in our story. With each student who walks through our doors, 
                each teacher who shares their passion, and each family who trusts us with their most precious gift, 
                our legacy grows stronger.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Join Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium`}>
                  Explore Our Campus
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

export default OurStoryPage;