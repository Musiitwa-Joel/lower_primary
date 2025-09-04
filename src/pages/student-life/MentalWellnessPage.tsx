import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Brain,
  Heart,
  Smile,
  Shield,
  Users,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  Activity,
  Zap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface MentalWellnessPageProps {
  theme: string;
  toggleTheme: () => void;
}

const MentalWellnessPage: React.FC<MentalWellnessPageProps> = ({ theme, toggleTheme }) => {
  const [selectedProgram, setSelectedProgram] = useState("mindfulness");
  const [wellnessCheck, setWellnessCheck] = useState({
    mood: "",
    stress: "",
    sleep: "",
    energy: ""
  });
  const schoolConfig = getCurrentSchoolConfig();

  const wellnessPrograms = {
    mindfulness: {
      name: "Mindfulness & Meditation",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      description: "Learn mindfulness techniques to reduce stress and improve focus",
      facilitator: "Dr. Sarah Nakimuli",
      schedule: "Monday, Wednesday, Friday - 7:00 AM",
      duration: "30 minutes",
      location: "Wellness Center",
      benefits: [
        "Stress reduction and anxiety management",
        "Improved concentration and focus",
        "Better emotional regulation",
        "Enhanced self-awareness",
        "Better sleep quality"
      ],
      techniques: [
        "Breathing exercises",
        "Body scan meditation",
        "Mindful walking",
        "Loving-kindness meditation",
        "Progressive muscle relaxation"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
    },
    fitness: {
      name: "Mental Health Through Fitness",
      icon: <Activity className="h-8 w-8 text-green-500" />,
      description: "Physical activities designed to boost mental health and wellbeing",
      facilitator: "Coach Michael Ssebunya",
      schedule: "Tuesday, Thursday - 6:30 AM",
      duration: "45 minutes",
      location: "Sports Complex",
      benefits: [
        "Endorphin release for mood improvement",
        "Stress relief through physical activity",
        "Improved self-esteem and confidence",
        "Better sleep patterns",
        "Social connection through group activities"
      ],
      techniques: [
        "Yoga and stretching",
        "Cardio workouts",
        "Team sports",
        "Dance therapy",
        "Outdoor activities"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
    },
    peer: {
      name: "Peer Support Network",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      description: "Student-led support groups fostering connection and mutual support",
      facilitator: "Student Peer Counselors",
      schedule: "Daily availability",
      duration: "Flexible",
      location: "Student Lounge",
      benefits: [
        "Peer understanding and empathy",
        "Shared experiences and solutions",
        "Reduced isolation and loneliness",
        "Building supportive friendships",
        "Developing helping skills"
      ],
      techniques: [
        "Active listening skills",
        "Empathy and support",
        "Problem-solving together",
        "Emotional validation",
        "Resource sharing"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    creative: {
      name: "Creative Therapy",
      icon: <Smile className="h-8 w-8 text-pink-500" />,
      description: "Express emotions and process experiences through creative arts",
      facilitator: "Ms. Rebecca Namatovu",
      schedule: "Saturdays - 10:00 AM",
      duration: "90 minutes",
      location: "Art Studio",
      benefits: [
        "Emotional expression and processing",
        "Stress relief through creativity",
        "Self-discovery and insight",
        "Improved mood and wellbeing",
        "Building coping skills"
      ],
      techniques: [
        "Art therapy sessions",
        "Music and movement",
        "Creative writing",
        "Drama therapy",
        "Craft and design projects"
      ],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80"
    }
  };

  const mentalHealthResources = [
    {
      title: "Mental Health First Aid",
      description: "Learn to recognize and respond to mental health challenges",
      type: "Training Program",
      duration: "4 hours",
      certification: "Mental Health First Aid Certificate"
    },
    {
      title: "Stress Management Workshop",
      description: "Practical techniques for managing academic and personal stress",
      type: "Workshop Series",
      duration: "6 sessions",
      certification: "Completion Certificate"
    },
    {
      title: "Emotional Intelligence Development",
      description: "Build emotional awareness and interpersonal skills",
      type: "Skill Building",
      duration: "8 weeks",
      certification: "EQ Assessment Report"
    },
    {
      title: "Resilience Building Program",
      description: "Develop mental toughness and bounce-back abilities",
      type: "Personal Development",
      duration: "10 weeks",
      certification: "Resilience Portfolio"
    }
  ];

  const currentProgram = wellnessPrograms[selectedProgram as keyof typeof wellnessPrograms];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Mental Wellness | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Mental wellness programs at ${schoolConfig.name}. Mindfulness, fitness, peer support, and creative therapy for student wellbeing.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
            alt="Mental Wellness"
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
              Holistic Wellbeing
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Mental <span className="text-primary-500">Wellness</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Prioritizing mental health and emotional wellbeing through comprehensive programs, resources, and support systems for all students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Selection */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(wellnessPrograms).map(([key, program]) => (
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Schedule
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentProgram.schedule}
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Duration
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {currentProgram.duration}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Program Benefits
                    </h3>
                    <div className="space-y-2">
                      {currentProgram.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <Heart className="h-4 w-4 text-primary-500 mr-3" />
                          <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      Techniques Taught
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProgram.techniques.map((technique, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary-500/20 text-secondary-500 rounded-full text-sm"
                        >
                          {technique}
                        </span>
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
                    <h4 className="text-xl font-bold mb-2">{currentProgram.facilitator}</h4>
                    <p className="text-sm opacity-90 mb-4">Mental Wellness Specialist</p>
                    <div className="flex items-center text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {currentProgram.schedule}
                    </div>
                    <button className="w-full bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      Join Program
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mental Health Resources */}
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
              Mental Health Resources
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Comprehensive resources and training programs for mental wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentalHealthResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  <Award className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {resource.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                  {resource.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>Type:</span>
                    <span className="text-primary-500">{resource.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>Duration:</span>
                    <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>{resource.duration}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm">
                  Enroll Now
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
                Need Immediate Support?
              </h2>
              <p className={`text-lg ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Crisis support and emergency mental health resources available 24/7
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  service: "Crisis Counseling",
                  contact: "+256 414 123 456",
                  description: "Immediate professional support",
                  icon: <Phone className="h-6 w-6 text-red-500" />
                },
                {
                  service: "Peer Crisis Support",
                  contact: "Text HELP to 12345",
                  description: "Student peer crisis support",
                  icon: <MessageCircle className="h-6 w-6 text-red-500" />
                },
                {
                  service: "National Helpline",
                  contact: "+256 800 100 200",
                  description: "Uganda mental health helpline",
                  icon: <Heart className="h-6 w-6 text-red-500" />
                }
              ].map((support, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}
                >
                  <div className="mb-4">{support.icon}</div>
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    {support.service}
                  </h3>
                  <a
                    href={`tel:${support.contact.replace(/\D/g, "")}`}
                    className="text-red-500 hover:text-red-600 font-bold block mb-2"
                  >
                    {support.contact}
                  </a>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    {support.description}
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

export default MentalWellnessPage;