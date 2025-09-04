import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Heart,
  Stethoscope,
  Shield,
  Clock,
  Phone,
  Calendar,
  Users,
  AlertTriangle,
  CheckCircle,
  Pill,
  Activity,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface HealthCenterPageProps {
  theme: string;
  toggleTheme: () => void;
}

const HealthCenterPage: React.FC<HealthCenterPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState("general");
  const [appointmentForm, setAppointmentForm] = useState({
    studentName: "",
    grade: "",
    service: "",
    date: "",
    time: "",
    symptoms: ""
  });
  const schoolConfig = getCurrentSchoolConfig();

  const healthServices = {
    general: {
      name: "General Health Services",
      icon: <Stethoscope className="h-8 w-8 text-blue-500" />,
      description: "Comprehensive primary healthcare services for all students",
      services: [
        "Regular health check-ups",
        "Treatment of minor illnesses",
        "Injury assessment and first aid",
        "Health monitoring and records",
        "Medication administration",
        "Health education and counseling"
      ],
      staff: "Qualified Nurse & Medical Officer",
      hours: "24/7 Emergency, 8AM-5PM Regular",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80"
    },
    mental: {
      name: "Mental Health & Counseling",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      description: "Professional mental health support and counseling services",
      services: [
        "Individual counseling sessions",
        "Group therapy programs",
        "Stress management workshops",
        "Academic pressure counseling",
        "Peer support programs",
        "Crisis intervention services"
      ],
      staff: "Licensed Counselor & Psychologist",
      hours: "Mon-Fri: 8AM-5PM, Emergency: 24/7",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    preventive: {
      name: "Preventive Care",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      description: "Proactive health measures and wellness programs",
      services: [
        "Annual health screenings",
        "Vaccination programs",
        "Health education workshops",
        "Nutrition counseling",
        "Fitness assessments",
        "Disease prevention programs"
      ],
      staff: "Health Education Specialist",
      hours: "Mon-Fri: 9AM-4PM",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80"
    },
    emergency: {
      name: "Emergency Services",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      description: "24/7 emergency medical response and critical care",
      services: [
        "Emergency medical response",
        "Ambulance coordination",
        "Critical care stabilization",
        "Hospital referral services",
        "Parent/guardian notification",
        "Medical emergency protocols"
      ],
      staff: "Emergency Response Team",
      hours: "24/7 Availability",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80"
    }
  };

  const healthPrograms = [
    {
      title: "Wellness Wednesday",
      description: "Weekly health education sessions covering various wellness topics",
      schedule: "Every Wednesday, 3:30 PM",
      participants: "All students welcome"
    },
    {
      title: "Mental Health Awareness",
      description: "Monthly programs promoting mental health awareness and support",
      schedule: "First Friday of each month",
      participants: "Students, staff, and parents"
    },
    {
      title: "Nutrition Education",
      description: "Workshops on healthy eating habits and nutrition planning",
      schedule: "Bi-weekly sessions",
      participants: "Students and boarding residents"
    },
    {
      title: "First Aid Training",
      description: "Basic first aid and emergency response training for students",
      schedule: "Quarterly workshops",
      participants: "Student volunteers and leaders"
    }
  ];

  const emergencyContacts = [
    {
      service: "School Health Center",
      number: "+256 414 123 456",
      availability: "24/7"
    },
    {
      service: "Entebbe Hospital",
      number: "+256 414 320 662",
      availability: "24/7"
    },
    {
      service: "Emergency Ambulance",
      number: "999",
      availability: "24/7"
    },
    {
      service: "Mental Health Crisis Line",
      number: "+256 800 100 200",
      availability: "24/7"
    }
  ];

  const currentService = healthServices[selectedService as keyof typeof healthServices];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Health Center | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Health center services at ${schoolConfig.name}. Comprehensive healthcare, mental health support, and wellness programs for students.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80"
            alt="Health Center"
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
              Student Wellness
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Health <span className="text-primary-500">Center</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Comprehensive healthcare services ensuring the physical and mental wellbeing of our students. Professional care when you need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(healthServices).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setSelectedService(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedService === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {service.icon}
                  <span className="font-semibold mt-4 text-sm leading-tight">{service.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {currentService.icon}
                  <h2 className={`text-3xl font-bold ml-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {currentService.name}
                  </h2>
                </div>

                <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                  {currentService.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Services Offered
                    </h3>
                    <div className="space-y-2">
                      {currentService.services.map((service, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Medical Staff
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentService.staff}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Operating Hours
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentService.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Book Appointment</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="studentName"
                        placeholder="Student Name"
                        value={appointmentForm.studentName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <select
                        name="service"
                        value={appointmentForm.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select Service</option>
                        <option value="checkup">General Check-up</option>
                        <option value="counseling">Counseling Session</option>
                        <option value="emergency">Emergency Care</option>
                      </select>
                      <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Programs */}
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
              Health & Wellness Programs
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Proactive programs promoting student health and wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {program.title}
                </h3>
                
                <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                  {program.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Schedule
                    </span>
                    <span className="font-medium text-primary-500">
                      {program.schedule}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Participants
                    </span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {program.participants}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                  Join Program
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 ${theme === "dark" ? "bg-red-500/10 border-red-500/20" : "bg-red-500/10 border-red-500/20"} border relative overflow-hidden`}
          >
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                Emergency Contacts
              </h2>
              <p className={`text-lg ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Important numbers for medical emergencies and health concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}
                >
                  <Phone className="h-8 w-8 text-red-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    {contact.service}
                  </h3>
                  <a
                    href={`tel:${contact.number.replace(/\D/g, "")}`}
                    className="text-red-500 hover:text-red-600 font-bold text-lg block mb-2"
                  >
                    {contact.number}
                  </a>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    {contact.availability}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default HealthCenterPage;