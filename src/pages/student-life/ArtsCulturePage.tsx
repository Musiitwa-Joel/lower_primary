import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Palette,
  Music,
  Camera,
  Mic,
  Video,
  Brush,
  Award,
  Users,
  Calendar,
  Play,
  Eye,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface ArtsCulturePageProps {
  theme: string;
  toggleTheme: () => void;
}

const ArtsCulturePage: React.FC<ArtsCulturePageProps> = ({ theme, toggleTheme }) => {
  const [selectedProgram, setSelectedProgram] = useState("visual-arts");
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const artsPrograms = {
    "visual-arts": {
      name: "Visual Arts",
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      description: "Express creativity through drawing, painting, sculpture, and digital art",
      instructor: "Ms. Rebecca Namatovu",
      schedule: "Tuesday, Friday - 3:30 PM",
      location: "Art Studio",
      activities: ["Painting", "Drawing", "Sculpture", "Digital Art", "Printmaking"],
      gallery: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
      ],
      achievements: ["National Art Competition Winners", "Gallery Exhibitions"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80"
    },
    "music": {
      name: "Music & Performance",
      icon: <Music className="h-8 w-8 text-blue-500" />,
      description: "Develop musical talents through theory, performance, and composition",
      instructor: "Mr. Samuel Hakim",
      schedule: "Monday, Wednesday - 3:00 PM",
      location: "Music Room",
      activities: ["Choir", "Orchestra", "Solo Performance", "Music Theory", "Composition"],
      gallery: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80",
      ],
      achievements: ["Regional Music Festival Winners", "Concert Performances"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80"
    },
    "drama": {
      name: "Drama & Theatre",
      icon: <Video className="h-8 w-8 text-purple-500" />,
      description: "Build confidence through theatrical performance and storytelling",
      instructor: "Ms. Patricia Nalwoga",
      schedule: "Monday, Wednesday - 4:00 PM",
      location: "Auditorium",
      activities: ["Stage Acting", "Script Writing", "Directing", "Set Design"],
      gallery: [
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80",
      ],
      achievements: ["Inter-School Drama Champions", "Community Theatre"],
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80"
    },
    "media": {
      name: "Media Arts",
      icon: <Camera className="h-8 w-8 text-orange-500" />,
      description: "Create visual stories through photography and video production",
      instructor: "Mr. David Kiprotich",
      schedule: "Thursday - 4:00 PM",
      location: "Media Room",
      activities: ["Photography", "Video Production", "Editing", "Journalism"],
      gallery: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80",
      ],
      achievements: ["Photography Awards", "Student Film Festival"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
    }
  };

  const culturalEvents = [
    {
      name: "Cultural Heritage Week",
      date: "March 15-22, 2024",
      description: "Celebrating Uganda's diverse cultural traditions",
      activities: ["Traditional dances", "Cultural exhibitions", "Food festival", "Storytelling"]
    },
    {
      name: "Arts Festival",
      date: "April 10-12, 2024",
      description: "Showcasing student creativity across all art forms",
      activities: ["Art exhibitions", "Music concerts", "Drama performances", "Poetry readings"]
    },
    {
      name: "International Day",
      date: "May 20, 2024",
      description: "Celebrating global cultures and diversity",
      activities: ["Cultural presentations", "International cuisine", "Flag parade", "Unity concert"]
    }
  ];

  const currentProgram = artsPrograms[selectedProgram as keyof typeof artsPrograms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Arts & Culture | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore arts and culture programs at ${schoolConfig.name}. Visual arts, music, drama, and media arts with cultural celebrations.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80"
            alt="Arts & Culture"
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
              Creative Expression
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Arts & <span className="text-primary-500">Culture</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Unleash your creativity and celebrate cultural diversity through our comprehensive arts programs and cultural activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(artsPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedProgram(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedProgram === key
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
            key={selectedProgram}
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

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentProgram.activities.map((activity, index) => (
                        <div key={index} className="flex items-center">
                          <Brush className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Achievements
                    </h3>
                    <div className="space-y-2">
                      {currentProgram.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center">
                          <Award className="h-4 w-4 text-primary-500 mr-3" />
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
                  src={currentProgram.image}
                  alt={currentProgram.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{currentProgram.instructor}</h4>
                    <p className="text-sm opacity-90 mb-4">Arts Specialist & Creative Director</p>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {currentProgram.schedule}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Gallery */}
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
              Student Art Gallery
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Showcasing the incredible creativity and talent of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentProgram.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setGalleryImage(image)}
              >
                <img
                  src={image}
                  alt={`Student artwork ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
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
              Cultural Events & Celebrations
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Annual events celebrating creativity, culture, and artistic expression
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  <Calendar className="h-6 w-6 text-primary-500" />
                </div>
                
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {event.name}
                </h3>
                
                <p className="text-primary-500 font-medium mb-3">{event.date}</p>
                
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                  {event.description}
                </p>

                <div className="space-y-2">
                  {event.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {galleryImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={galleryImage}
            alt="Student artwork"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setGalleryImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default ArtsCulturePage;