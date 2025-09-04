import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Heart,
  Star,
  Shield,
  Lightbulb,
  Users,
  Globe,
  Target,
  Award,
  BookOpen,
  Compass,
  Zap,
  ArrowRight,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  examples: string[];
  impact: string;
  quote: string;
  image: string;
}

interface SchoolValuesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const SchoolValuesPage: React.FC<SchoolValuesPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedValue, setSelectedValue] = useState<Value | null>(null);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const schoolConfig = getCurrentSchoolConfig();

  const coreValues: Value[] = [
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions. Integrity forms the foundation of trust between students, teachers, parents, and the community.",
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      color: "blue",
      examples: [
        "Honest academic assessment and reporting",
        "Transparent communication with parents",
        "Ethical decision-making processes",
        "Accountability in all actions",
      ],
      impact:
        "Creates a culture of trust and mutual respect throughout our school community",
      quote: "Integrity is doing the right thing when no one is watching",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    },
    {
      id: "excellence",
      title: "Excellence",
      description:
        "We pursue excellence in academics, character development, and all aspects of school life. We believe every student has the potential to achieve greatness and we provide the support to help them reach it.",
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      color: "yellow",
      examples: [
        "High academic standards and achievements",
        "Continuous improvement in teaching methods",
        "Recognition of student accomplishments",
        "Investment in quality facilities and resources",
      ],
      impact:
        "Drives continuous improvement and helps students reach their full potential",
      quote: "Excellence is not a destination, it's a continuous journey",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    },
    {
      id: "compassion",
      title: "Compassion",
      description:
        "We show empathy, kindness, and understanding towards all members of our community. Compassion guides our approach to discipline, support, and creating an inclusive environment where everyone feels valued.",
      icon: <Heart className="h-12 w-12 text-red-500" />,
      color: "red",
      examples: [
        "Supportive counseling and guidance services",
        "Inclusive policies for all students",
        "Community service and outreach programs",
        "Peer support and mentorship initiatives",
      ],
      impact:
        "Fosters a caring, supportive environment where all students can thrive",
      quote: "Compassion is the foundation of all meaningful education",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
    },
    {
      id: "innovation",
      title: "Innovation",
      description:
        "We embrace creativity, critical thinking, and innovative approaches to learning and problem-solving. Innovation drives our teaching methods, technology integration, and preparation of students for the future.",
      icon: <Lightbulb className="h-12 w-12 text-purple-500" />,
      color: "purple",
      examples: [
        "Integration of modern technology in learning",
        "Creative teaching methodologies",
        "Student-led innovation projects",
        "Continuous curriculum development",
      ],
      impact:
        "Prepares students to be creative problem-solvers and future innovators",
      quote: "Innovation distinguishes between a leader and a follower",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    },
    {
      id: "community",
      title: "Community",
      description:
        "We foster a strong sense of belonging and mutual support among students, staff, parents, and the wider community. Our school is more than an institution - it's a family working together towards common goals.",
      icon: <Users className="h-12 w-12 text-green-500" />,
      color: "green",
      examples: [
        "Strong parent-school partnerships",
        "Student house system and team building",
        "Community service projects",
        "Alumni engagement and mentorship",
      ],
      impact:
        "Creates lasting bonds and a supportive network for lifelong learning",
      quote: "Together we achieve more than we ever could alone",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    },
    {
      id: "responsibility",
      title: "Responsibility",
      description:
        "We prepare students to be responsible global citizens who understand their role in society and are committed to making positive contributions to their communities and the world.",
      icon: <Globe className="h-12 w-12 text-indigo-500" />,
      color: "indigo",
      examples: [
        "Environmental conservation initiatives",
        "Social responsibility projects",
        "Leadership development programs",
        "Global awareness and cultural sensitivity",
      ],
      impact:
        "Develops responsible citizens who contribute positively to society",
      quote: "With great education comes great responsibility",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    },
  ];

  const currentValue = coreValues[activeValueIndex];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>School Values | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Discover the core values that guide ${schoolConfig.name}. Integrity, excellence, compassion, innovation, community, and responsibility shape our educational approach.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Radial Design */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10" />
          {/* Radial Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 ${
                theme === "dark" ? "border-white/20" : "border-black/20"
              } rounded-full`}
            />
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 ${
                theme === "dark" ? "border-white/10" : "border-black/10"
              } rounded-full`}
            />
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 ${
                theme === "dark" ? "border-white/5" : "border-black/5"
              } rounded-full`}
            />
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
              Our Foundation
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              School <span className="text-primary-500">Values</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              The fundamental principles that guide our educational philosophy
              and shape the character of our school community
            </p>
          </motion.div>

          {/* Values Compass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="flex justify-center">
              <Compass className="h-24 w-24 text-primary-500 animate-pulse" />
            </div>
            <p
              className={`text-center mt-4 ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              }`}
            >
              Our values serve as our moral compass, guiding every decision and
              action
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Values Explorer */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Values Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {coreValues.map((value, index) => (
              <button
                key={value.id}
                onClick={() => setActiveValueIndex(index)}
                className={`p-6 rounded-2xl transition-all duration-300 text-center ${
                  activeValueIndex === index
                    ? "bg-primary-500 text-white scale-105 shadow-xl"
                    : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 text-white"
                    : "bg-black/5 hover:bg-black/10 text-black"
                }`}
              >
                <div className="mb-3">{value.icon}</div>
                <span className="font-semibold text-sm">{value.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Value Display */}
          <motion.div
            key={activeValueIndex}
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
                  {currentValue.icon}
                  <h2
                    className={`text-4xl font-bold ml-4 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {currentValue.title}
                  </h2>
                </div>

                <p
                  className={`text-lg mb-8 ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } leading-relaxed`}
                >
                  {currentValue.description}
                </p>

                <div className="mb-8">
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    How We Practice This Value
                  </h3>
                  <div className="space-y-3">
                    {currentValue.examples.map((example, index) => (
                      <div key={index} className="flex items-start">
                        <div
                          className={`w-2 h-2 bg-${currentValue.color}-500 rounded-full mt-2 mr-4 flex-shrink-0`}
                        />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {example}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark" ? "bg-white/5" : "bg-black/5"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-3 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Impact on Our Community
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } leading-relaxed`}
                  >
                    {currentValue.impact}
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentValue.image}
                  alt={currentValue.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Quote Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white">
                    <div className="text-4xl text-primary-400 mb-3">"</div>
                    <p className="text-lg font-medium italic leading-relaxed">
                      {currentValue.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values in Action */}
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
              Values in Action
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              See how our values translate into real-world impact and student
              success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Achievement",
                description:
                  "98% pass rate reflecting our commitment to excellence",
                icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                stat: "98%",
                color: "blue",
              },
              {
                title: "Community Service",
                description: "500+ hours of community service annually",
                icon: <Heart className="h-8 w-8 text-red-500" />,
                stat: "500+",
                color: "red",
              },
              {
                title: "Student Leadership",
                description: "85% of graduates take leadership roles",
                icon: <Crown className="h-8 w-8 text-purple-500" />,
                stat: "85%",
                color: "purple",
              },
              {
                title: "Innovation Projects",
                description: "50+ student innovation projects yearly",
                icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
                stat: "50+",
                color: "yellow",
              },
              {
                title: "Global Connections",
                description: "Partnerships with 15+ international schools",
                icon: <Globe className="h-8 w-8 text-green-500" />,
                stat: "15+",
                color: "green",
              },
              {
                title: "Character Development",
                description:
                  "100% participation in character building programs",
                icon: <Shield className="h-8 w-8 text-indigo-500" />,
                stat: "100%",
                color: "indigo",
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-8 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`p-4 rounded-xl inline-block mb-4 ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {metric.icon}
                </div>
                <div
                  className={`text-3xl font-bold text-${metric.color}-500 mb-2`}
                >
                  {metric.stat}
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {metric.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } leading-relaxed`}
                >
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Commitment */}
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
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"
            }`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <Target className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Living Our Values Daily
              </h2>
              <p
                className={`text-xl mb-8 max-w-3xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Our values are not just words on a wall - they are lived
                experiences that shape every interaction, decision, and
                opportunity at {schoolConfig.name}. Join a community where
                values matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Experience Our Values
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium`}
                >
                  Schedule a Visit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Detail Modal */}
      {selectedValue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedValue(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {selectedValue.title}
              </h3>
              <button
                onClick={() => setSelectedValue(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedValue.image}
                  alt={selectedValue.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Description
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } leading-relaxed`}
                  >
                    {selectedValue.description}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Examples in Practice
                  </h4>
                  <ul className="space-y-2">
                    {selectedValue.examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MegaFooter theme={theme} />
    </div>
  );
};

export default SchoolValuesPage;
