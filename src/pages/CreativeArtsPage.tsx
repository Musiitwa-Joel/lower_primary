import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Palette,
  Music,
  Camera,
  Mic,
  Brush,
  Piano,
  Video,
  Scissors,
  Sparkles,
  Play,
  Award,
  Users,
  Eye,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface CreativeArtsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const CreativeArtsPage: React.FC<CreativeArtsPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedArt, setSelectedArt] = useState("visual");
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const artPrograms = {
    visual: {
      name: "Visual Arts",
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      description:
        "Express creativity through drawing, painting, sculpture, and digital art",
      mediums: [
        "Watercolor",
        "Acrylic Painting",
        "Charcoal Drawing",
        "Digital Art",
        "Sculpture",
        "Printmaking",
      ],
      techniques: [
        "Color Theory",
        "Perspective Drawing",
        "Portrait Art",
        "Abstract Expression",
        "Mixed Media",
        "3D Modeling",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
      ],
      teacher: "Ms. Rebecca Namatovu",
      achievements: [
        "National Art Competition Winners",
        "Gallery Exhibitions",
        "Community Murals",
      ],
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
    },
    music: {
      name: "Music & Performance",
      icon: <Music className="h-8 w-8 text-blue-500" />,
      description:
        "Develop musical talents through theory, performance, and composition",
      instruments: [
        "Piano",
        "Guitar",
        "Violin",
        "Drums",
        "Traditional Instruments",
        "Voice Training",
      ],
      ensembles: [
        "School Choir",
        "Orchestra",
        "Jazz Band",
        "Traditional Music Group",
        "Contemporary Band",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80",
      ],
      teacher: "Mr. Samuel Hakim",
      achievements: [
        "Regional Music Festival Winners",
        "Concert Performances",
        "Recording Studio Projects",
      ],
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
    },
    drama: {
      name: "Drama & Theatre",
      icon: <Video className="h-8 w-8 text-purple-500" />,
      description:
        "Build confidence and storytelling skills through theatrical performance",
      activities: [
        "Stage Acting",
        "Script Writing",
        "Directing",
        "Set Design",
        "Costume Design",
        "Lighting",
      ],
      productions: [
        "Annual School Play",
        "Shakespeare Festival",
        "Contemporary Drama",
        "Musical Theatre",
        "Student Films",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80",
      ],
      teacher: "Ms. Patricia Nalwoga",
      achievements: [
        "Inter-School Drama Champions",
        "Community Theatre",
        "Film Festival Entries",
      ],
      image:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80",
    },
    media: {
      name: "Media Arts & Photography",
      icon: <Camera className="h-8 w-8 text-orange-500" />,
      description:
        "Capture and create visual stories through photography and video production",
      equipment: [
        "DSLR Cameras",
        "Video Equipment",
        "Editing Software",
        "Lighting Kits",
        "Drones",
        "Studio Setup",
      ],
      projects: [
        "Documentary Films",
        "Photography Exhibitions",
        "Social Media Content",
        "Event Coverage",
        "Art Photography",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
      ],
      teacher: "Mr. David Kiprotich",
      achievements: [
        "Photography Awards",
        "Student Film Festival",
        "Media Partnerships",
      ],
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    },
  };

  const currentArt = artPrograms[selectedArt as keyof typeof artPrograms];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Creative Arts | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore creative arts programs at ${schoolConfig.name}. Visual arts, music, drama, and media arts with professional facilities and expert instruction.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Creative Elements */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10" />
          <div className="absolute inset-0">
            {/* Floating Creative Elements */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 ${
                  i % 4 === 0
                    ? "bg-pink-500"
                    : i % 4 === 1
                    ? "bg-purple-500"
                    : i % 4 === 2
                    ? "bg-blue-500"
                    : "bg-orange-500"
                } rounded-full opacity-20 animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
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
              Creative Expression
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Creative <span className="text-primary-500">Arts</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Unleash your creativity through diverse artistic disciplines and
              discover your unique voice in the world of arts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Art Program Selection */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(artPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedArt(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedArt === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {program.icon}
                  <span className="font-semibold mt-4">{program.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Program Details */}
          <motion.div
            key={selectedArt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {currentArt.icon}
                  <h2
                    className={`text-3xl font-bold ml-4 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {currentArt.name}
                  </h2>
                </div>

                <p
                  className={`text-lg mb-8 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } leading-relaxed`}
                >
                  {currentArt.description}
                </p>

                {/* Dynamic Content */}
                {selectedArt === "visual" && (
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-4 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Art Mediums
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {(currentArt as any).mediums.map(
                          (medium: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-pink-500/20 text-pink-500 rounded-full text-sm text-center"
                            >
                              {medium}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-4 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Techniques Taught
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(currentArt as any).techniques.map(
                          (technique: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <Brush className="h-4 w-4 text-primary-500 mr-3" />
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-white/80"
                                    : "text-black/80"
                                }`}
                              >
                                {technique}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedArt === "music" && (
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-4 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Instruments Available
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {(currentArt as any).instruments.map(
                          (instrument: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm text-center"
                            >
                              {instrument}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-4 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        Musical Ensembles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(currentArt as any).ensembles.map(
                          (ensemble: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <Piano className="h-4 w-4 text-primary-500 mr-3" />
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-white/80"
                                    : "text-black/80"
                                }`}
                              >
                                {ensemble}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Recent Achievements
                  </h3>
                  <div className="space-y-2">
                    {currentArt.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="h-4 w-4 text-primary-500 mr-3" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentArt.image}
                  alt={currentArt.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Teacher Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">
                      {currentArt.teacher}
                    </h4>
                    <p className="text-sm opacity-90 mb-4">
                      Arts Specialist & Creative Director
                    </p>
                    <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Meet the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Gallery */}
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
              Student Art Gallery
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Showcasing the incredible creativity and talent of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentArt.gallery.map((image, index) => (
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

      {/* Creative Facilities */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Art Studios",
                icon: <Palette className="h-8 w-8 text-pink-500" />,
                count: "3",
              },
              {
                name: "Music Rooms",
                icon: <Music className="h-8 w-8 text-blue-500" />,
                count: "5",
              },
              {
                name: "Recording Studio",
                icon: <Mic className="h-8 w-8 text-purple-500" />,
                count: "1",
              },
              {
                name: "Photography Lab",
                icon: <Camera className="h-8 w-8 text-orange-500" />,
                count: "1",
              },
              {
                name: "Drama Theatre",
                icon: <Video className="h-8 w-8 text-green-500" />,
                count: "1",
              },
              {
                name: "Digital Workstations",
                icon: <Monitor className="h-8 w-8 text-teal-500" />,
                count: "20+",
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${
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
                  {facility.icon}
                </div>
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  {facility.count}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {facility.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default CreativeArtsPage;
