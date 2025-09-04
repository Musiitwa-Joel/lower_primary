import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Heart,
  Users,
  Globe,
  Leaf,
  BookOpen,
  Hand,
  Award,
  Calendar,
  MapPin,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface CommunityServicePageProps {
  theme: string;
  toggleTheme: () => void;
}

const CommunityServicePage: React.FC<CommunityServicePageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedProject, setSelectedProject] = useState("education");
  const schoolConfig = getCurrentSchoolConfig();

  const serviceProjects = {
    education: {
      name: "Education Outreach",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      description:
        "Supporting local primary schools with tutoring and educational resources",
      coordinator: "Ms. Grace Namuli",
      participants: 45,
      impact: "500+ students helped",
      activities: [
        "Weekend tutoring sessions",
        "Educational material donations",
        "Reading programs",
        "Teacher training support",
      ],
      locations: [
        "Entebbe Primary School",
        "Katabi Primary School",
        "Local Community Centers",
      ],
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&q=80",
      achievements: [
        "Literacy Rate Improvement",
        "Community Recognition Award",
      ],
    },
    environment: {
      name: "Environmental Conservation",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      description:
        "Protecting our environment through conservation and sustainability initiatives",
      coordinator: "Dr. Alice Nakimuli",
      participants: 60,
      impact: "2000+ trees planted",
      activities: [
        "Tree planting campaigns",
        "Beach cleanup drives",
        "Recycling programs",
        "Environmental education",
      ],
      locations: [
        "Lake Victoria Shores",
        "Entebbe Botanical Gardens",
        "Local Communities",
      ],
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      achievements: ["Eco-School Green Flag", "Environmental Excellence Award"],
    },
    health: {
      name: "Health & Wellness",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description:
        "Promoting health awareness and supporting healthcare initiatives",
      coordinator: "Mrs. Mary Namusoke",
      participants: 35,
      impact: "1000+ people reached",
      activities: [
        "Health education campaigns",
        "First aid training",
        "Nutrition workshops",
        "Medical camp support",
      ],
      locations: ["Local Health Centers", "Community Halls", "Rural Villages"],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      achievements: [
        "Health Awareness Champion",
        "Community Health Impact Award",
      ],
    },
    elderly: {
      name: "Elderly Care",
      icon: <Hand className="h-8 w-8 text-purple-500" />,
      description:
        "Supporting elderly community members with care and companionship",
      coordinator: "Mr. Peter Lubega",
      participants: 25,
      impact: "150+ elderly supported",
      activities: [
        "Regular visits to elderly homes",
        "Companionship programs",
        "Technology training",
        "Health monitoring support",
      ],
      locations: ["Entebbe Elderly Home", "Community Centers", "Home Visits"],
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      achievements: [
        "Compassionate Care Award",
        "Intergenerational Bridge Builder",
      ],
    },
  };

  const volunteerOpportunities = [
    {
      title: "Weekend Tutoring Program",
      description: "Help primary school students with homework and reading",
      commitment: "2 hours/week",
      skills: "Good academic performance, patience",
      impact: "Direct educational support",
    },
    {
      title: "Environmental Action Team",
      description: "Lead environmental conservation projects in the community",
      commitment: "4 hours/month",
      skills: "Environmental awareness, leadership",
      impact: "Environmental protection",
    },
    {
      title: "Health Education Ambassadors",
      description: "Promote health awareness in local communities",
      commitment: "3 hours/month",
      skills: "Communication, health knowledge",
      impact: "Community health improvement",
    },
    {
      title: "Digital Literacy Coaches",
      description: "Teach basic computer skills to community members",
      commitment: "2 hours/week",
      skills: "Computer literacy, teaching ability",
      impact: "Digital inclusion",
    },
  ];

  const currentProject =
    serviceProjects[selectedProject as keyof typeof serviceProjects];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Community Service | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Community service programs at ${schoolConfig.name}. Education outreach, environmental conservation, health initiatives, and elderly care.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80"
            alt="Community Service"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-r from-black/90 to-black/70"
                : "bg-gradient-to-r from-white/90 to-white/70"
            }`}
          />
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
              Making a Difference
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Community <span className="text-primary-500">Service</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Developing compassionate leaders through meaningful community
              service. Make a positive impact while building character and life
              skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Selection */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {Object.entries(serviceProjects).map(([key, project]) => (
              <button
                key={key}
                onClick={() => setSelectedProject(key)}
                className={`p-8 rounded-3xl transition-all duration-300 text-center ${
                  selectedProject === key
                    ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="flex flex-col items-center">
                  {project.icon}
                  <span className="font-semibold mt-4 text-sm leading-tight">
                    {project.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            key={selectedProject}
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
                  {currentProject.icon}
                  <h2
                    className={`text-3xl font-bold ml-4 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {currentProject.name}
                  </h2>
                </div>

                <p
                  className={`text-lg mb-8 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } leading-relaxed`}
                >
                  {currentProject.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">
                      {currentProject.participants}
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Student Volunteers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">
                      {currentProject.impact}
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Community Impact
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentProject.activities.map((activity, index) => (
                        <div key={index} className="flex items-center">
                          <Target className="h-4 w-4 text-primary-500 mr-3" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Service Locations
                    </h3>
                    <div className="space-y-2">
                      {currentProject.locations.map((location, index) => (
                        <div key={index} className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary-500 mr-3" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {location}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentProject.image}
                  alt={currentProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">
                      {currentProject.coordinator}
                    </h4>
                    <p className="text-sm opacity-90 mb-4">
                      Community Service Coordinator
                    </p>
                    <div className="space-y-2">
                      {currentProject.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Award className="h-4 w-4 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
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
              Volunteer Opportunities
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Find meaningful ways to contribute to your community while
              developing valuable life skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border transition-all duration-300 hover:scale-105`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {opportunity.title}
                </h3>

                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } mb-4 leading-relaxed`}
                >
                  {opportunity.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Time Commitment
                    </span>
                    <span className="font-medium text-primary-500">
                      {opportunity.commitment}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Skills Needed
                    </span>
                    <span
                      className={`font-medium ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {opportunity.skills}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      Impact
                    </span>
                    <span className="font-medium text-green-500">
                      {opportunity.impact}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                  Apply to Volunteer
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
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
            className={`rounded-3xl p-12 md:p-16 ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"
            } relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative text-center">
              <h2
                className={`text-4xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-12`}
              >
                Our Community Impact
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    2,500+
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Community Members Served
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    165
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Student Volunteers
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    1,200
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Service Hours Annually
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    15
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    Community Partners
                  </div>
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

export default CommunityServicePage;
