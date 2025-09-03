import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Search,
  Filter,
  Download,
  Eye,
  Bookmark,
  Clock,
  Star,
  Users,
  Globe,
  Headphones,
  Video,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../config/schoolConfig";

interface DigitalLibraryPageProps {
  theme: string;
  toggleTheme: () => void;
}

const DigitalLibraryPage: React.FC<DigitalLibraryPageProps> = ({ theme, toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const resourceCategories = [
    { id: "all", name: "All Resources", icon: <BookOpen className="h-5 w-5" />, count: 15000 },
    { id: "textbooks", name: "Textbooks", icon: <BookOpen className="h-5 w-5" />, count: 5000 },
    { id: "ebooks", name: "E-Books", icon: <FileText className="h-5 w-5" />, count: 3000 },
    { id: "audiobooks", name: "Audiobooks", icon: <Headphones className="h-5 w-5" />, count: 1200 },
    { id: "videos", name: "Educational Videos", icon: <Video className="h-5 w-5" />, count: 2500 },
    { id: "research", name: "Research Papers", icon: <Globe className="h-5 w-5" />, count: 3300 }
  ];

  const featuredResources = [
    {
      id: "1",
      title: "Advanced Mathematics Textbook",
      author: "Dr. Sarah Nakato",
      category: "textbooks",
      subject: "Mathematics",
      grade: "S5-S6",
      rating: 4.8,
      downloads: 1250,
      description: "Comprehensive guide to advanced mathematical concepts with practical applications",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
      type: "PDF",
      size: "15.2 MB",
      pages: 450
    },
    {
      id: "2", 
      title: "Physics Laboratory Manual",
      author: "Mr. David Mukasa",
      category: "textbooks",
      subject: "Physics",
      grade: "S4-S6",
      rating: 4.9,
      downloads: 980,
      description: "Hands-on physics experiments with detailed procedures and analysis",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80",
      type: "PDF",
      size: "22.1 MB",
      pages: 320
    },
    {
      id: "3",
      title: "English Literature Collection",
      author: "Ms. Grace Namuli",
      category: "ebooks",
      subject: "English",
      grade: "S1-S6",
      rating: 4.7,
      downloads: 2100,
      description: "Curated collection of classic and contemporary literature",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
      type: "EPUB",
      size: "8.5 MB",
      pages: 1200
    },
    {
      id: "4",
      title: "Chemistry Experiments Video Series",
      author: "Dr. Alice Nakimuli",
      category: "videos",
      subject: "Chemistry",
      grade: "S3-S6",
      rating: 4.9,
      downloads: 1800,
      description: "Step-by-step chemistry experiments with safety protocols",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
      type: "MP4",
      size: "2.1 GB",
      duration: "12 hours"
    }
  ];

  const digitalServices = [
    {
      name: "24/7 Access",
      description: "Access library resources anytime, anywhere",
      icon: <Clock className="h-8 w-8 text-blue-500" />
    },
    {
      name: "Multi-Device Support",
      description: "Read on tablets, phones, computers, and e-readers",
      icon: <Globe className="h-8 w-8 text-green-500" />
    },
    {
      name: "Offline Reading",
      description: "Download resources for offline access",
      icon: <Download className="h-8 w-8 text-purple-500" />
    },
    {
      name: "Research Tools",
      description: "Citation generators, note-taking, and collaboration tools",
      icon: <Search className="h-8 w-8 text-orange-500" />
    }
  ];

  const filteredResources = selectedCategory === "all" 
    ? featuredResources 
    : featuredResources.filter(resource => resource.category === selectedCategory);

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Digital Library | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Access our comprehensive digital library at ${schoolConfig.name}. Thousands of books, videos, and educational resources available 24/7.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
            alt="Digital Library"
            className="w-full h-full object-cover opacity-10"
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-r from-black/90 to-black/70" : "bg-gradient-to-r from-white/90 to-white/70"}`} />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Knowledge at Your Fingertips
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Digital <span className="text-primary-500">Library</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Access thousands of books, research papers, videos, and educational resources from anywhere, anytime
            </p>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`max-w-2xl mx-auto p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}
          >
            <div className="relative">
              <Search className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500" />
              <input
                type="text"
                placeholder="Search books, articles, videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
                  theme === "dark" 
                    ? "bg-white/5 border-white/20 text-white placeholder-white/50" 
                    : "bg-black/5 border-black/20 text-black placeholder-black/50"
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-2xl transition-all duration-300 text-center ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {category.icon}
                  <span className="font-semibold mt-3 text-sm">{category.name}</span>
                  <span className={`text-xs mt-1 ${selectedCategory === category.id ? "text-white/80" : theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                    {category.count.toLocaleString()}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105 cursor-pointer`}
                onClick={() => setSelectedResource(resource)}
              >
                <div className="relative h-48">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                      {resource.rating}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    {resource.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-3`}>
                    by {resource.author}
                  </p>
                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {resource.subject} • {resource.grade}
                    </span>
                    <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {resource.downloads} downloads
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </button>
                    <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-3 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center`}>
                      <Download className="h-4 w-4 mr-1" />
                      Save
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
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
              Digital Library Services
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Advanced features and services to enhance your learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {service.icon}
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {service.name}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedResource(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedResource.title}
              </h3>
              <button
                onClick={() => setSelectedResource(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedResource.image}
                  alt={selectedResource.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Resource Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Author</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedResource.author}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Subject</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedResource.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Grade Level</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedResource.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>File Size</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedResource.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedResource.rating}</span>
                      </div>
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
                    {selectedResource.description}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Read Online
                  </button>
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>

                <button className={`w-full ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                  <Bookmark className="h-5 w-5 mr-2" />
                  Add to Reading List
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

export default DigitalLibraryPage;