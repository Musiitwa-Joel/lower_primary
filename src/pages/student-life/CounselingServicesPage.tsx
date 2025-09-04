import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Brain,
  Heart,
  Users,
  Calendar,
  Clock,
  Shield,
  Phone,
  MessageCircle,
  BookOpen,
  Target,
  Award,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface CounselingServicesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const CounselingServicesPage: React.FC<CounselingServicesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState("individual");
  const [appointmentForm, setAppointmentForm] = useState({
    studentName: "",
    grade: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    concerns: "",
    urgency: "normal"
  });
  const schoolConfig = getCurrentSchoolConfig();

  const counselingServices = {
    individual: {
      name: "Individual Counseling",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      description: "One-on-one counseling sessions for personal, academic, and emotional support",
      duration: "45-60 minutes",
      frequency: "Weekly or as needed",
      counselor: "Dr. Sarah Nakimuli",
      specializations: [
        "Academic stress and performance anxiety",
        "Personal and family issues",
        "Emotional regulation and coping skills",
        "Self-esteem and confidence building",
        "Transition and adjustment support"
      ],
      approach: "Person-centered therapy with cognitive-behavioral techniques",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    group: {
      name: "Group Counseling",
      icon: <Users className="h-8 w-8 text-green-500" />,
      description: "Supportive group sessions addressing common challenges and building peer connections",
      duration: "60-90 minutes",
      frequency: "Weekly sessions",
      counselor: "Ms. Grace Namuli",
      specializations: [
        "Peer relationship and social skills",
        "Study groups and academic support",
        "Stress management workshops",
        "Leadership development groups",
        "Grief and loss support groups"
      ],
      approach: "Group dynamics and peer support methodology",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    crisis: {
      name: "Crisis Intervention",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      description: "Immediate support for students experiencing mental health crises or emergencies",
      duration: "As needed",
      frequency: "24/7 availability",
      counselor: "Emergency Response Team",
      specializations: [
        "Suicide prevention and intervention",
        "Panic attacks and anxiety crises",
        "Trauma response and support",
        "Family emergency counseling",
        "Immediate safety planning"
      ],
      approach: "Crisis intervention protocols and emergency response",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80"
    },
    career: {
      name: "Career Guidance",
      icon: <Target className="h-8 w-8 text-purple-500" />,
      description: "Professional guidance for academic and career planning and decision-making",
      duration: "45 minutes",
      frequency: "Monthly or as needed",
      counselor: "Mr. James Okello",
      specializations: [
        "Subject combination guidance",
        "University application support",
        "Career exploration and planning",
        "Skills assessment and development",
        "Scholarship and funding guidance"
      ],
      approach: "Career development theory and practical planning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    }
  };

  const mentalHealthPrograms = [
    {
      title: "Mindfulness Mondays",
      description: "Weekly mindfulness and meditation sessions for stress reduction",
      schedule: "Every Monday, 3:30 PM",
      duration: "30 minutes",
      facilitator: "Dr. Sarah Nakimuli"
    },
    {
      title: "Peer Support Network",
      description: "Trained student peer counselors providing initial support",
      schedule: "Daily availability",
      duration: "Ongoing",
      facilitator: "Student Peer Counselors"
    },
    {
      title: "Mental Health Awareness Week",
      description: "Annual week-long campaign promoting mental health awareness",
      schedule: "October 10-16, 2024",
      duration: "1 week",
      facilitator: "Counseling Team & Guest Speakers"
    },
    {
      title: "Parent Mental Health Workshops",
      description: "Educational sessions for parents on supporting student mental health",
      schedule: "Quarterly sessions",
      duration: "2 hours",
      facilitator: "Licensed Family Therapist"
    }
  ];

  const currentService = counselingServices[selectedService as keyof typeof counselingServices];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Counseling Services | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Professional counseling services at ${schoolConfig.name}. Mental health support, crisis intervention, and career guidance for students.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
            alt="Counseling Services"
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
              Mental Health & Wellbeing
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Counseling <span className="text-primary-500">Services</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Professional mental health support and guidance helping students navigate challenges, build resilience, and achieve their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(counselingServices).map(([key, service]) => (
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Session Duration
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentService.duration}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Frequency
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentService.frequency}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Areas of Support
                    </h3>
                    <div className="space-y-2">
                      {currentService.specializations.map((specialization, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {specialization}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Therapeutic Approach
                    </h4>
                    <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {currentService.approach}
                    </p>
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
                    <h4 className="text-xl font-bold mb-2">{currentService.counselor}</h4>
                    <p className="text-sm opacity-90 mb-4">Licensed Professional Counselor</p>
                    <button className="w-full bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mental Health Programs */}
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
              Mental Health Programs
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Proactive programs promoting mental wellness and emotional resilience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentalHealthPrograms.map((program, index) => (
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

                <div className="space-y-2 mb-4">
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
                      Duration
                    </span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Facilitator
                    </span>
                    <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {program.facilitator}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                  Join Program
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Support */}
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
              <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                Crisis Support & Emergency Contacts
              </h2>
              <p className={`text-lg ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Immediate help is available 24/7 for mental health emergencies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  service: "School Counseling Crisis Line",
                  number: "+256 414 123 456",
                  availability: "24/7",
                  description: "Immediate counseling support"
                },
                {
                  service: "Mental Health Uganda",
                  number: "+256 800 100 200",
                  availability: "24/7",
                  description: "National mental health helpline"
                },
                {
                  service: "Suicide Prevention Hotline",
                  number: "+256 779 000 000",
                  availability: "24/7",
                  description: "Crisis intervention and prevention"
                }
              ].map((contact, index) => (
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
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-2`}>
                    {contact.availability}
                  </div>
                  <div className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                    {contact.description}
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

export default CounselingServicesPage;