import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Bus,
  MapPin,
  Clock,
  Shield,
  Users,
  Route,
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  Navigation,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface TransportationPageProps {
  theme: string;
  toggleTheme: () => void;
}

const TransportationPage: React.FC<TransportationPageProps> = ({ theme, toggleTheme }) => {
  const [selectedRoute, setSelectedRoute] = useState("kampala");
  const [trackingDemo, setTrackingDemo] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const transportRoutes = {
    kampala: {
      name: "Kampala Route",
      code: "KLA-01",
      description: "Serving Kampala city center and surrounding areas",
      stops: [
        "Kampala City Center",
        "Nakasero",
        "Kololo",
        "Bugolobi",
        "Luzira",
        "Entebbe Road",
        "School Campus"
      ],
      schedule: {
        morning: "6:30 AM - 7:45 AM",
        evening: "4:30 PM - 5:45 PM"
      },
      capacity: 45,
      currentOccupancy: 38,
      driver: "Mr. John Ssemakula",
      assistant: "Ms. Sarah Nakato",
      fare: 300000,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
    },
    entebbe: {
      name: "Entebbe Route",
      code: "EBB-02",
      description: "Covering Entebbe town and nearby residential areas",
      stops: [
        "Entebbe Town",
        "State House Avenue",
        "Kitoro",
        "Kitooro",
        "Abaita Ababiri",
        "School Campus"
      ],
      schedule: {
        morning: "7:00 AM - 7:30 AM",
        evening: "4:30 PM - 5:00 PM"
      },
      capacity: 35,
      currentOccupancy: 28,
      driver: "Mr. David Mukasa",
      assistant: "Mrs. Grace Namuli",
      fare: 200000,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
    },
    wakiso: {
      name: "Wakiso Route",
      code: "WAK-03",
      description: "Serving Wakiso district and surrounding communities",
      stops: [
        "Wakiso Town",
        "Kasangati",
        "Gayaza",
        "Namulonge",
        "Bombo Road",
        "School Campus"
      ],
      schedule: {
        morning: "6:45 AM - 8:00 AM",
        evening: "4:30 PM - 5:45 PM"
      },
      capacity: 40,
      currentOccupancy: 35,
      driver: "Mr. Peter Lubega",
      assistant: "Ms. Mary Namusoke",
      fare: 350000,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
    }
  };

  const transportFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Safety First",
      description: "GPS tracking, qualified drivers, and comprehensive safety protocols"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Reliable Schedule",
      description: "Punctual service with real-time tracking and notifications"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Supervised Travel",
      description: "Trained assistants on every bus ensuring student safety and discipline"
    },
    {
      icon: <Route className="h-8 w-8 text-orange-500" />,
      title: "Convenient Routes",
      description: "Multiple routes covering major residential areas around the school"
    }
  ];

  const safetyFeatures = [
    "GPS tracking system on all vehicles",
    "CCTV cameras for security monitoring",
    "Qualified and licensed drivers",
    "Regular vehicle maintenance and inspection",
    "Emergency communication systems",
    "First aid kits and safety equipment",
    "Student attendance tracking",
    "Parent notification system"
  ];

  const currentRoute = transportRoutes[selectedRoute as keyof typeof transportRoutes];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Transportation | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Transportation services at ${schoolConfig.name}. Safe, reliable school bus services with GPS tracking and qualified drivers.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
            alt="Transportation"
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
              Safe & Reliable
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Transportation <span className="text-primary-500">Services</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Safe, comfortable, and reliable transportation connecting students from across the region to our campus. Travel with confidence and peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Route Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Object.entries(transportRoutes).map(([key, route]) => (
              <button
                key={key}
                onClick={() => setSelectedRoute(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedRoute === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <Bus className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                <div className="space-y-1 text-sm">
                  <div>Code: {route.code}</div>
                  <div>{route.currentOccupancy}/{route.capacity} students</div>
                  <div>UGX {route.fare.toLocaleString()}/term</div>
                </div>
              </button>
            ))}
          </div>

          {/* Route Details */}
          <motion.div
            key={selectedRoute}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <Bus className="h-8 w-8 text-primary-500 mr-4" />
                  <div>
                    <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {currentRoute.name}
                    </h2>
                    <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Route Code: {currentRoute.code}
                    </p>
                  </div>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentRoute.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">{currentRoute.currentOccupancy}</div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Current Students
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">{currentRoute.capacity}</div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Total Capacity
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Bus Stops
                    </h3>
                    <div className="space-y-2">
                      {currentRoute.stops.map((stop, index) => (
                        <div key={index} className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {stop}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Morning Schedule
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentRoute.schedule.morning}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Evening Schedule
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentRoute.schedule.evening}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentRoute.image}
                  alt={currentRoute.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Route Staff</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Driver:</span>
                        <span className="font-medium">{currentRoute.driver}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Assistant:</span>
                        <span className="font-medium">{currentRoute.assistant}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setTrackingDemo(true)}
                      className="w-full mt-4 bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Track Bus Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transportation Features */}
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
              Why Choose Our Transport?
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Safe, reliable, and convenient transportation services for peace of mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
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
                Safety & Security Features
              </h2>
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {feature}
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
                Transportation Statistics
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Student Satisfaction", value: "98%", color: "text-green-500" },
                  { label: "On-Time Performance", value: "99.5%", color: "text-blue-500" },
                  { label: "Safety Record", value: "100%", color: "text-green-500" },
                  { label: "Routes Available", value: "8", color: "text-purple-500" },
                  { label: "Daily Students Served", value: "450+", color: "text-orange-500" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {stat.label}
                    </span>
                    <span className={`text-xl font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Tracking Demo Modal */}
      {trackingDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setTrackingDemo(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                Live Bus Tracking - {currentRoute.name}
              </h3>
              <button
                onClick={() => setTrackingDemo(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"} h-64 flex items-center justify-center`}>
                <div className="text-center">
                  <Navigation className="h-16 w-16 text-primary-500 mx-auto mb-4 animate-pulse" />
                  <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-green-500/10 border-green-500/20" : "bg-green-500/10 border-green-500/20"} border`}>
                  <h4 className={`font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Current Status
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Location:</span>
                      <span className="text-green-500 font-medium">En route to Kampala</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>ETA:</span>
                      <span className={`${theme === "dark" ? "text-white" : "text-black"} font-medium`}>15 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Speed:</span>
                      <span className={`${theme === "dark" ? "text-white" : "text-black"} font-medium`}>45 km/h</span>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Next Stops
                  </h4>
                  <div className="space-y-2">
                    {currentRoute.stops.slice(0, 3).map((stop, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {stop}
                        </span>
                        <span className="text-xs text-primary-500">
                          {index === 0 ? "Next" : `+${(index + 1) * 5} min`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Get Notifications
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

export default TransportationPage;