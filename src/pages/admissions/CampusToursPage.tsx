import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Camera,
  Calendar,
  Clock,
  Users,
  MapPin,
  Play,
  Eye,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import VirtualCampusTour from "../../components/features/VirtualCampusTour";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface TourOption {
  id: string;
  type: 'virtual' | 'guided' | 'self-guided' | 'group';
  name: string;
  description: string;
  duration: string;
  capacity: string;
  price: string;
  features: string[];
  availability: string;
  image: string;
}

interface CampusToursPageProps {
  theme: string;
  toggleTheme: () => void;
}

const CampusToursPage: React.FC<CampusToursPageProps> = ({ theme, toggleTheme }) => {
  const [selectedTour, setSelectedTour] = useState<TourOption | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    groupSize: '1',
    specialRequests: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const schoolConfig = getCurrentSchoolConfig();

  const tourOptions: TourOption[] = [
    {
      id: '1',
      type: 'virtual',
      name: 'Virtual Campus Tour',
      description: 'Explore our campus from anywhere with our interactive 360° virtual tour experience.',
      duration: 'Self-paced',
      capacity: 'Unlimited',
      price: 'Free',
      features: [
        '360° panoramic views',
        'Interactive hotspots',
        'Audio narration',
        'Facility information',
        'Available 24/7',
        'Mobile friendly'
      ],
      availability: 'Always available',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      type: 'guided',
      name: 'Personal Guided Tour',
      description: 'One-on-one tour with our admissions counselor, tailored to your interests and questions.',
      duration: '90 minutes',
      capacity: '1-4 people',
      price: 'Free',
      features: [
        'Personal admissions counselor',
        'Customized route',
        'Q&A session',
        'Meet teachers and students',
        'Classroom visits',
        'Refreshments included'
      ],
      availability: 'Mon-Fri: 9AM-4PM',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      type: 'group',
      name: 'Group Campus Tour',
      description: 'Perfect for families and groups wanting to explore the campus together with other prospective families.',
      duration: '60 minutes',
      capacity: '5-20 people',
      price: 'Free',
      features: [
        'Group guide',
        'Standard route',
        'Information session',
        'Meet current students',
        'Facility highlights',
        'Group photos'
      ],
      availability: 'Saturdays: 10AM, 2PM',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
    },
    {
      id: '4',
      type: 'self-guided',
      name: 'Self-Guided Tour',
      description: 'Explore at your own pace with our comprehensive self-guided tour map and materials.',
      duration: 'Flexible',
      capacity: 'Any size',
      price: 'Free',
      features: [
        'Detailed campus map',
        'Information brochures',
        'QR code access points',
        'Flexible timing',
        'Family-friendly',
        'Photo opportunities'
      ],
      availability: 'Mon-Sat: 8AM-5PM',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80'
    }
  ];

  const tourHighlights = [
    {
      location: 'Academic Blocks',
      description: 'Modern classrooms with smart technology',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'
    },
    {
      location: 'Science Laboratories',
      description: 'State-of-the-art equipment and safety features',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80'
    },
    {
      location: 'Sports Complex',
      description: 'World-class athletic facilities',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80'
    },
    {
      location: 'Library & Resources',
      description: 'Comprehensive digital and physical resources',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Campus Tours | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Take a campus tour of ${schoolConfig.name}. Virtual tours, guided visits, and self-guided exploration options available.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
            alt="Campus Tours"
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
              Explore Our Campus
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Campus <span className="text-primary-500">Tours</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Experience our world-class facilities and vibrant campus community. Choose from virtual tours, guided visits, or self-exploration options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Options */}
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
              Choose Your Tour Experience
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Multiple ways to explore our campus and discover what makes {schoolConfig.shortName} special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tourOptions.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" 
                    ? "bg-white/5 hover:bg-white/10 border-white/10" 
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedTour(tour)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full font-medium">
                      {tour.type.charAt(0).toUpperCase() + tour.type.slice(1).replace('-', ' ')}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {tour.price}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{tour.name}</h3>
                    <div className="flex items-center text-white/90 text-sm space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {tour.capacity}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                    {tour.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Availability
                      </span>
                      <span className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {tour.availability}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                      Includes:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {tour.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                          +{tour.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    {tour.type === 'virtual' ? (
                      <>
                        <Play className="h-5 w-5 mr-2" />
                        Start Virtual Tour
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 mr-2" />
                        Book This Tour
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <VirtualCampusTour schoolConfig={schoolConfig} theme={theme} />
        </div>
      </section>

      {/* Tour Highlights */}
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
              What You'll See
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Discover the facilities and spaces that make our campus special
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <img
                  src={highlight.image}
                  alt={highlight.location}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    {highlight.location}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTour(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedTour.name}
              </h3>
              <button
                onClick={() => setSelectedTour(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            {!isBooked ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedTour.image}
                    alt={selectedTour.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                      Tour Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedTour.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      Tour Details
                    </h4>
                    <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed mb-4`}>
                      {selectedTour.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Duration</span>
                        <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedTour.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Group Size</span>
                        <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedTour.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Cost</span>
                        <span className="font-medium text-green-500">{selectedTour.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Availability</span>
                        <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedTour.availability}</span>
                      </div>
                    </div>
                  </div>

                  {selectedTour.type !== 'virtual' && (
                    <form onSubmit={handleBooking} className="space-y-4">
                      <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Book Your Tour
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={bookingForm.name}
                          onChange={handleInputChange}
                          required
                          className={`px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={bookingForm.email}
                          onChange={handleInputChange}
                          required
                          className={`px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={bookingForm.phone}
                          onChange={handleInputChange}
                          required
                          className={`px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                        <select
                          name="groupSize"
                          value={bookingForm.groupSize}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white" : "bg-black/5 border-black/20 text-black"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="1">1 person</option>
                          <option value="2">2 people</option>
                          <option value="3-5">3-5 people</option>
                          <option value="6-10">6-10 people</option>
                          <option value="10+">10+ people</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="date"
                          name="preferredDate"
                          value={bookingForm.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white" : "bg-black/5 border-black/20 text-black"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                        <select
                          name="preferredTime"
                          value={bookingForm.preferredTime}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-white/5 border-white/20 text-white" : "bg-black/5 border-black/20 text-black"} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="">Preferred Time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Tour
                      </button>
                    </form>
                  )}

                  {selectedTour.type === 'virtual' && (
                    <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                      <Play className="h-5 w-5 mr-2" />
                      Start Virtual Tour Now
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Tour Booked Successfully!
                  </h3>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6`}>
                    Your campus tour has been scheduled. You'll receive a confirmation email with details shortly.
                  </p>
                </div>

                <div className="flex space-x-4 justify-center">
                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setSelectedTour(null);
                    }}
                    className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium`}
                  >
                    Book Another Tour
                  </button>
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                    View Confirmation
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Contact Section */}
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
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Need Help Planning Your Visit?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Our admissions team is here to help you plan the perfect campus visit experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${schoolConfig.phone.primary.replace(/\D/g, '')}`}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Admissions
                </a>
                <a
                  href={`mailto:${schoolConfig.email.admissions}`}
                  className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default CampusToursPage;