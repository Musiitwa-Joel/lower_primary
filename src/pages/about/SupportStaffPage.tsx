import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Heart,
  Shield,
  Wrench,
  Utensils,
  Bus,
  Stethoscope,
  BookOpen,
  Users,
  Clock,
  Phone,
  Mail,
  Award,
  Star,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface SupportStaff {
  id: string;
  name: string;
  position: string;
  department: string;
  responsibilities: string[];
  experience: number;
  bio: string;
  email?: string;
  phone?: string;
  image: string;
  joinedYear: number;
  workingHours: string;
  location: string;
  specialSkills: string[];
}

interface SupportStaffPageProps {
  theme: string;
  toggleTheme: () => void;
}

const SupportStaffPage: React.FC<SupportStaffPageProps> = ({ theme, toggleTheme }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStaff, setSelectedStaff] = useState<SupportStaff | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const supportStaff: SupportStaff[] = [
    {
      id: "1",
      name: "Sister Agnes Nakato",
      position: "School Nurse",
      department: "Health Services",
      responsibilities: [
        "Student health monitoring and care",
        "First aid and emergency response",
        "Health education programs",
        "Medical records maintenance"
      ],
      experience: 8,
      bio: "Sister Agnes Nakato is our dedicated school nurse who ensures the health and wellbeing of all students. Her caring nature and medical expertise provide peace of mind to parents and comfort to students.",
      email: "nurse@tredumoschool.ug",
      phone: "+256 414 123 480",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      joinedYear: 2019,
      workingHours: "Monday - Friday: 7:00 AM - 6:00 PM",
      location: "Health Center",
      specialSkills: ["Emergency Care", "Health Education", "Student Counseling"]
    },
    {
      id: "2",
      name: "Mr. Samuel Hakim",
      position: "Head of Security",
      department: "Security Services",
      responsibilities: [
        "Campus security coordination",
        "Safety protocol implementation",
        "Emergency response planning",
        "Visitor management"
      ],
      experience: 12,
      bio: "Mr. Samuel Hakim leads our security team with professionalism and dedication. His experience in security management ensures our campus remains safe and secure for all students and staff.",
      email: "security@tredumoschool.ug",
      phone: "+256 414 123 481",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      joinedYear: 2016,
      workingHours: "24/7 Security Coverage",
      location: "Security Office",
      specialSkills: ["Security Management", "Emergency Response", "Risk Assessment"]
    },
    {
      id: "3",
      name: "Mrs. Rebecca Namatovu",
      position: "Head Chef",
      department: "Catering Services",
      responsibilities: [
        "Menu planning and nutrition",
        "Kitchen operations management",
        "Food safety and hygiene",
        "Special dietary accommodations"
      ],
      experience: 10,
      bio: "Mrs. Rebecca Namatovu ensures our students receive nutritious and delicious meals every day. Her expertise in nutrition and food service management maintains high standards in our dining facilities.",
      email: "catering@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      joinedYear: 2018,
      workingHours: "Monday - Friday: 5:00 AM - 7:00 PM",
      location: "Main Kitchen",
      specialSkills: ["Nutrition Planning", "Food Safety", "Large-scale Cooking"]
    },
    {
      id: "4",
      name: "Mr. Patrick Ssebunya",
      position: "Transport Coordinator",
      department: "Transportation",
      responsibilities: [
        "School bus operations",
        "Route planning and optimization",
        "Driver supervision and training",
        "Vehicle maintenance coordination"
      ],
      experience: 7,
      bio: "Mr. Patrick Ssebunya manages our transportation services, ensuring safe and reliable transport for students. His attention to detail and safety-first approach gives parents confidence in our transport system.",
      email: "transport@tredumoschool.ug",
      phone: "+256 414 123 482",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      joinedYear: 2020,
      workingHours: "Monday - Friday: 6:00 AM - 7:00 PM",
      location: "Transport Office",
      specialSkills: ["Fleet Management", "Route Optimization", "Safety Protocols"]
    },
    {
      id: "5",
      name: "Ms. Patricia Nalwoga",
      position: "Librarian",
      department: "Library Services",
      responsibilities: [
        "Library resource management",
        "Student research assistance",
        "Digital resource coordination",
        "Reading program development"
      ],
      experience: 9,
      bio: "Ms. Patricia Nalwoga manages our comprehensive library and promotes a love of reading among students. Her expertise in information science helps students develop strong research and study skills.",
      email: "library@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      joinedYear: 2017,
      workingHours: "Monday - Friday: 7:30 AM - 5:30 PM, Saturday: 8:00 AM - 2:00 PM",
      location: "Main Library",
      specialSkills: ["Information Management", "Research Assistance", "Digital Literacy"]
    },
    {
      id: "6",
      name: "Mr. Joseph Kiggundu",
      position: "Maintenance Supervisor",
      department: "Facilities Maintenance",
      responsibilities: [
        "Campus maintenance oversight",
        "Repair and renovation projects",
        "Equipment maintenance",
        "Grounds keeping supervision"
      ],
      experience: 15,
      bio: "Mr. Joseph Kiggundu keeps our campus in excellent condition through proactive maintenance and care. His dedication ensures our facilities remain safe, functional, and attractive for learning.",
      phone: "+256 414 123 483",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      joinedYear: 2014,
      workingHours: "Monday - Saturday: 6:00 AM - 6:00 PM",
      location: "Maintenance Workshop",
      specialSkills: ["Facility Maintenance", "Project Management", "Team Leadership"]
    }
  ];

  const departments = [
    "all",
    "Health Services",
    "Security Services", 
    "Catering Services",
    "Transportation",
    "Library Services",
    "Facilities Maintenance"
  ];

  const filteredStaff = selectedDepartment === "all" 
    ? supportStaff 
    : supportStaff.filter(staff => staff.department === selectedDepartment);

  const getDepartmentIcon = (department: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Health Services": <Stethoscope className="h-8 w-8 text-red-500" />,
      "Security Services": <Shield className="h-8 w-8 text-blue-500" />,
      "Catering Services": <Utensils className="h-8 w-8 text-green-500" />,
      "Transportation": <Bus className="h-8 w-8 text-yellow-500" />,
      "Library Services": <BookOpen className="h-8 w-8 text-purple-500" />,
      "Facilities Maintenance": <Wrench className="h-8 w-8 text-orange-500" />
    };
    return iconMap[department] || <Users className="h-8 w-8 text-gray-500" />;
  };

  const getDepartmentColor = (department: string) => {
    const colorMap: { [key: string]: string } = {
      "Health Services": "bg-red-500/20 text-red-500",
      "Security Services": "bg-blue-500/20 text-blue-500",
      "Catering Services": "bg-green-500/20 text-green-500",
      "Transportation": "bg-yellow-500/20 text-yellow-500",
      "Library Services": "bg-purple-500/20 text-purple-500",
      "Facilities Maintenance": "bg-orange-500/20 text-orange-500"
    };
    return colorMap[department] || "bg-gray-500/20 text-gray-500";
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Support Staff | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Meet the essential support staff at ${schoolConfig.name}. Dedicated professionals providing health, security, catering, and maintenance services in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Service Icons */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
          {/* Service Icons Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[
              { icon: "🏥", x: 10, y: 20 },
              { icon: "🛡️", x: 80, y: 15 },
              { icon: "🍽️", x: 15, y: 70 },
              { icon: "🚌", x: 85, y: 75 },
              { icon: "📚", x: 50, y: 10 },
              { icon: "🔧", x: 45, y: 80 }
            ].map((item, i) => (
              <div
                key={i}
                className="absolute text-6xl animate-float"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              >
                {item.icon}
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
              Essential Services
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Support <span className="text-primary-500">Staff</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              The unsung heroes who work behind the scenes to create a safe, healthy, and nurturing environment 
              where learning can flourish
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedDepartment === department
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {department === "all" ? "All Departments" : department}
              </button>
            ))}
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStaff.map((staff, index) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedStaff(staff)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDepartmentColor(staff.department)}`}>
                      {staff.department}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {staff.experience} years
                    </div>
                  </div>

                  {/* Name & Position */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-1">{staff.name}</h3>
                    <p className="text-white/90 text-sm">{staff.position}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-white/10" : "bg-black/10"} mr-3`}>
                      {getDepartmentIcon(staff.department)}
                    </div>
                    <div>
                      <div className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {staff.department}
                      </div>
                      <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {staff.location}
                      </div>
                    </div>
                  </div>

                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed line-clamp-3`}>
                    {staff.bio}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Experience
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {staff.experience} years
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Joined
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {staff.joinedYear}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {staff.email && (
                      <a
                        href={`mailto:${staff.email}`}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                    )}
                    <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-3 py-2 rounded-lg transition-colors text-xs font-medium`}>
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              Essential Support Services
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Comprehensive support services ensuring a safe, healthy, and conducive learning environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(1).map((department, index) => {
              const deptStaff = supportStaff.filter(staff => staff.department === department);
              const avgExperience = Math.round(deptStaff.reduce((sum, staff) => sum + staff.experience, 0) / deptStaff.length);
              
              return (
                <motion.div
                  key={department}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
                >
                  <div className={`p-4 rounded-xl inline-block mb-6 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    {getDepartmentIcon(department)}
                  </div>
                  <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    {department}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-500">
                        {deptStaff.length}
                      </div>
                      <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        Staff Members
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-500">
                        {avgExperience}
                      </div>
                      <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        Avg. Experience
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDepartment(department)}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    View Team
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStaff(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedStaff.name}
              </h3>
              <button
                onClick={() => setSelectedStaff(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Contact & Location
                  </h4>
                  <div className="space-y-3">
                    {selectedStaff.email && (
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-primary-500 mr-3" />
                        <a
                          href={`mailto:${selectedStaff.email}`}
                          className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                        >
                          {selectedStaff.email}
                        </a>
                      </div>
                    )}
                    {selectedStaff.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-primary-500 mr-3" />
                        <a
                          href={`tel:${selectedStaff.phone.replace(/\D/g, "")}`}
                          className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                        >
                          {selectedStaff.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {selectedStaff.location}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {selectedStaff.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    About {selectedStaff.name.split(' ')[1]}
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedStaff.bio}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedStaff.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Special Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStaff.specialSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {selectedStaff.email && (
                    <a
                      href={`mailto:${selectedStaff.email}`}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Contact
                    </a>
                  )}
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium`}>
                    Service Request
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Appreciation Section */}
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
                Appreciation & Recognition
              </h2>
              <p className={`text-xl mb-8 max-w-3xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                We deeply appreciate our support staff who work tirelessly to create an environment 
                where learning can flourish. Their dedication and service make our school a special place.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Award className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Service Excellence
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Committed to providing exceptional service every day
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Users className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Team Collaboration
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Working together to support our educational mission
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Heart className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Student Care
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Putting student welfare and safety at the center of everything
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default SupportStaffPage;