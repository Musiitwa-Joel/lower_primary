import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Home,
  Users,
  Bed,
  Utensils,
  BookOpen,
  Wifi,
  Shield,
  Clock,
  Award,
  Heart,
  Star,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface BoardingHousesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const BoardingHousesPage: React.FC<BoardingHousesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedHouse, setSelectedHouse] = useState("phoenix");
  const [virtualTour, setVirtualTour] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const boardingHouses = {
    phoenix: {
      name: "Phoenix House",
      color: "#ef4444",
      capacity: 100,
      currentOccupancy: 85,
      houseParent: "Mrs. Grace Nakato",
      description: "A vibrant community fostering resilience and academic excellence",
      facilities: [
        "Modern dormitories with 4 beds per room",
        "Study halls with individual desks",
        "Common recreation areas",
        "Laundry facilities",
        "24/7 security and supervision"
      ],
      amenities: [
        "High-speed WiFi throughout",
        "Air conditioning in common areas",
        "Kitchen facilities for snacks",
        "TV and entertainment systems",
        "Outdoor recreational spaces"
      ],
      rules: [
        "Lights out at 10:00 PM on weekdays",
        "Study time: 7:00 PM - 9:00 PM",
        "No visitors in dormitories",
        "Respect for others' property",
        "Participation in house activities"
      ],
      achievements: ["Best House 2023", "Academic Excellence Award"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80"
      ]
    },
    eagle: {
      name: "Eagle House",
      color: "#3b82f6",
      capacity: 100,
      currentOccupancy: 92,
      houseParent: "Mr. David Mukasa",
      description: "Soaring to new heights with leadership and innovation",
      facilities: [
        "Spacious dormitories with modern furnishing",
        "Dedicated study areas",
        "Recreation and games room",
        "Laundry and storage facilities",
        "Round-the-clock supervision"
      ],
      amenities: [
        "Fiber optic internet connection",
        "Climate-controlled environment",
        "Kitchenette for light meals",
        "Entertainment and media center",
        "Sports equipment storage"
      ],
      rules: [
        "Quiet hours: 10:00 PM - 6:00 AM",
        "Mandatory study period",
        "Visitor restrictions apply",
        "Maintain cleanliness standards",
        "Active house participation"
      ],
      achievements: ["Leadership Excellence", "Community Service Champions"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80"
      ]
    },
    lion: {
      name: "Lion House",
      color: "#22c55e",
      capacity: 100,
      currentOccupancy: 78,
      houseParent: "Mrs. Mary Namusoke",
      description: "Building courage, strength, and unity among residents",
      facilities: [
        "Comfortable sleeping quarters",
        "Well-equipped study rooms",
        "Social and relaxation areas",
        "Personal storage solutions",
        "Professional house management"
      ],
      amenities: [
        "Reliable internet connectivity",
        "Modern ventilation systems",
        "Snack preparation areas",
        "Audio-visual entertainment",
        "Outdoor activity spaces"
      ],
      rules: [
        "Bedtime: 10:00 PM (weekdays)",
        "Structured study sessions",
        "Visitor policy enforcement",
        "Personal responsibility emphasis",
        "House spirit participation"
      ],
      achievements: ["Sports House Champions", "Environmental Award"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80"
      ]
    }
  };

  const boardingBenefits = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Structured Study Environment",
      description: "Dedicated study hours and quiet spaces for academic focus"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Community Living",
      description: "Build lifelong friendships and learn valuable social skills"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "24/7 Supervision",
      description: "Professional house parents ensuring safety and support"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Personal Development",
      description: "Independence, responsibility, and character building"
    }
  ];

  const currentHouse = boardingHouses[selectedHouse as keyof typeof boardingHouses];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Boarding Houses | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Boarding facilities at ${schoolConfig.name}. Comfortable, safe, and supportive residential environment for students.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80"
            alt="Boarding Houses"
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
              Home Away From Home
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Boarding <span className="text-primary-500">Houses</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Experience comfortable, safe, and supportive residential living that fosters independence, friendship, and academic success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* House Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Object.entries(boardingHouses).map(([key, house]) => (
              <button
                key={key}
                onClick={() => setSelectedHouse(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedHouse === key
                    ? "text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
                style={{
                  backgroundColor: selectedHouse === key ? house.color : undefined
                }}
              >
                <Home className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{house.name}</h3>
                <div className="space-y-1 text-sm">
                  <div>{house.currentOccupancy}/{house.capacity} students</div>
                  <div>House Parent: {house.houseParent}</div>
                </div>
              </button>
            ))}
          </div>

          {/* House Details */}
          <motion.div
            key={selectedHouse}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <Home className="h-8 w-8 mr-4" style={{ color: currentHouse.color }} />
                  <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {currentHouse.name}
                  </h2>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentHouse.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: currentHouse.color }}>
                      {currentHouse.currentOccupancy}
                    </div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Current Students
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: currentHouse.color }}>
                      {currentHouse.capacity}
                    </div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Total Capacity
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Facilities
                    </h3>
                    <div className="space-y-2">
                      {currentHouse.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center">
                          <Bed className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {facility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Amenities
                    </h3>
                    <div className="space-y-2">
                      {currentHouse.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Wifi className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentHouse.image}
                  alt={currentHouse.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{currentHouse.houseParent}</h4>
                    <p className="text-sm opacity-90 mb-4">House Parent & Residential Supervisor</p>
                    <button 
                      onClick={() => setVirtualTour(true)}
                      className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Take Virtual Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boarding Benefits */}
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
              Benefits of Boarding Life
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Discover the advantages of our supportive boarding community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {benefit.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules & Guidelines */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                House Rules & Guidelines
              </h2>
              <div className="space-y-4">
                {currentHouse.rules.map((rule, index) => (
                  <div key={index} className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {rule}
                    </span>
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
                Daily Schedule
              </h3>
              <div className="space-y-4">
                {[
                  { time: "6:00 AM", activity: "Wake up & Personal hygiene" },
                  { time: "6:30 AM", activity: "Morning exercise (optional)" },
                  { time: "7:00 AM", activity: "Breakfast" },
                  { time: "8:00 AM", activity: "Classes begin" },
                  { time: "1:00 PM", activity: "Lunch break" },
                  { time: "2:00 PM", activity: "Afternoon classes" },
                  { time: "4:00 PM", activity: "Co-curricular activities" },
                  { time: "6:00 PM", activity: "Dinner" },
                  { time: "7:00 PM", activity: "Supervised study time" },
                  { time: "9:00 PM", activity: "Free time & relaxation" },
                  { time: "10:00 PM", activity: "Lights out" }
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {schedule.time}
                    </span>
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {schedule.activity}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      {virtualTour && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVirtualTour(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-6xl w-full ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {currentHouse.name} Virtual Tour
              </h3>
              <button
                onClick={() => setVirtualTour(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentHouse.gallery.map((image, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${currentHouse.name} facility ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium">
                      {index === 0 ? "Dormitory" : index === 1 ? "Study Hall" : "Common Area"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg transition-colors font-medium">
                Schedule Physical Tour
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default BoardingHousesPage;