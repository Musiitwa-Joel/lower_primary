import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Award,
  DollarSign,
  Calendar,
  FileText,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Star,
  Download,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Scholarship {
  id: string;
  name: string;
  description: string;
  amount: number;
  percentage: number;
  eligibility: string[];
  requirements: string[];
  deadline: string;
  category: "academic" | "sports" | "need-based" | "leadership" | "arts";
  available_slots: number;
  current_applications: number;
  renewable: boolean;
  image: string;
}

interface ScholarshipsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedScholarship, setSelectedScholarship] =
    useState<Scholarship | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const scholarships: Scholarship[] = [
    {
      id: "1",
      name: "Academic Excellence Scholarship",
      description:
        "Full tuition scholarship for students with outstanding academic performance and leadership potential.",
      amount: 1200000,
      percentage: 100,
      eligibility: [
        "Minimum aggregate of 8 points in PLE",
        "Excellent conduct record from previous school",
        "Demonstrated leadership potential",
        "Strong performance in English and Mathematics",
      ],
      requirements: [
        "Completed scholarship application form",
        "Academic transcripts from previous school",
        "Two recommendation letters from teachers",
        "Personal statement essay (500 words)",
        "Interview with scholarship committee",
      ],
      deadline: "2024-03-15",
      category: "academic",
      available_slots: 10,
      current_applications: 45,
      renewable: true,
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      name: "Sports Excellence Bursary",
      description:
        "Partial scholarship for students with exceptional sporting abilities and commitment to athletics.",
      amount: 600000,
      percentage: 50,
      eligibility: [
        "Proven sports achievements at district/national level",
        "Good academic standing (minimum 60% average)",
        "Commitment to school sports programs",
        "Physical fitness certification",
      ],
      requirements: [
        "Sports achievement certificates",
        "Coach recommendation letter",
        "Medical fitness certificate",
        "Academic transcripts",
        "Sports skills demonstration",
      ],
      deadline: "2024-02-28",
      category: "sports",
      available_slots: 15,
      current_applications: 28,
      renewable: true,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      name: "Need-Based Financial Aid",
      description:
        "Comprehensive financial assistance for deserving students from low-income families.",
      amount: 900000,
      percentage: 75,
      eligibility: [
        "Family income below UGX 2M annually",
        "Good academic performance (minimum 65%)",
        "Demonstrated financial need",
        "Community involvement record",
      ],
      requirements: [
        "Financial need assessment form",
        "Family income documentation",
        "Academic records and transcripts",
        "Community leader recommendation",
        "Home visit assessment",
      ],
      deadline: "2024-04-01",
      category: "need-based",
      available_slots: 25,
      current_applications: 67,
      renewable: true,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
    },
    {
      id: "4",
      name: "Leadership Development Grant",
      description:
        "Scholarship for students showing exceptional leadership qualities and community service.",
      amount: 480000,
      percentage: 40,
      eligibility: [
        "Demonstrated leadership experience in school/community",
        "Active participation in community service",
        "Good academic standing (minimum 70%)",
        "Strong communication skills",
      ],
      requirements: [
        "Leadership portfolio with examples",
        "Community service records",
        "Interview assessment",
        "Peer and teacher recommendations",
        "Leadership project proposal",
      ],
      deadline: "2024-03-30",
      category: "leadership",
      available_slots: 20,
      current_applications: 32,
      renewable: false,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    },
    {
      id: "5",
      name: "Creative Arts Scholarship",
      description:
        "Supporting talented students in music, visual arts, drama, and creative writing.",
      amount: 360000,
      percentage: 30,
      eligibility: [
        "Exceptional talent in any creative arts field",
        "Portfolio of creative work",
        "Good academic performance",
        "Commitment to school arts programs",
      ],
      requirements: [
        "Creative portfolio submission",
        "Audition or practical demonstration",
        "Arts teacher recommendation",
        "Academic transcripts",
        "Personal artistic statement",
      ],
      deadline: "2024-03-20",
      category: "arts",
      available_slots: 12,
      current_applications: 19,
      renewable: true,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80",
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Scholarships",
      color: "gray",
      icon: <Award className="h-4 w-4" />,
    },
    {
      id: "academic",
      name: "Academic",
      color: "blue",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "sports",
      name: "Sports",
      color: "green",
      icon: <Target className="h-4 w-4" />,
    },
    {
      id: "need-based",
      name: "Need-Based",
      color: "orange",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "leadership",
      name: "Leadership",
      color: "purple",
      icon: <Star className="h-4 w-4" />,
    },
    {
      id: "arts",
      name: "Arts",
      color: "pink",
      icon: <Award className="h-4 w-4" />,
    },
  ];

  const filteredScholarships =
    selectedCategory === "all"
      ? scholarships
      : scholarships.filter(
          (scholarship) => scholarship.category === selectedCategory
        );

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      academic: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      sports: "bg-green-500/20 text-green-500 border-green-500/30",
      "need-based": "bg-orange-500/20 text-orange-500 border-orange-500/30",
      leadership: "bg-purple-500/20 text-purple-500 border-purple-500/30",
      arts: "bg-pink-500/20 text-pink-500 border-pink-500/30",
    };
    return (
      colorMap[category] || "bg-gray-500/20 text-gray-500 border-gray-500/30"
    );
  };

  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { text: "Deadline passed", color: "text-red-500" };
    if (diffDays === 0) return { text: "Due today", color: "text-red-500" };
    if (diffDays === 1)
      return { text: "Due tomorrow", color: "text-orange-500" };
    if (diffDays <= 7)
      return { text: `${diffDays} days left`, color: "text-yellow-500" };
    return { text: `${diffDays} days left`, color: "text-green-500" };
  };

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Scholarships & Financial Aid | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Explore scholarship opportunities at ${schoolConfig.name}. Academic excellence, sports, need-based, and leadership scholarships available.`}
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Scholarships"
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
              Financial Support
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Scholarships &{" "}
              <span className="text-primary-500">Financial Aid</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              We believe every deserving student should have access to quality
              education. Explore our comprehensive scholarship programs.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div
              className={`text-center p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/10 backdrop-blur-xl border border-white/20"
                  : "bg-black/10 backdrop-blur-xl border border-black/20"
              }`}
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                UGX{" "}
                {(
                  scholarships.reduce((sum, s) => sum + s.amount, 0) / 1000000
                ).toFixed(1)}
                M
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                Total Available
              </div>
            </div>
            <div
              className={`text-center p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/10 backdrop-blur-xl border border-white/20"
                  : "bg-black/10 backdrop-blur-xl border border-black/20"
              }`}
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {scholarships.length}
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                Programs
              </div>
            </div>
            <div
              className={`text-center p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/10 backdrop-blur-xl border border-white/20"
                  : "bg-black/10 backdrop-blur-xl border border-black/20"
              }`}
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {scholarships.reduce((sum, s) => sum + s.available_slots, 0)}
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                Available Slots
              </div>
            </div>
            <div
              className={`text-center p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/10 backdrop-blur-xl border border-white/20"
                  : "bg-black/10 backdrop-blur-xl border border-black/20"
              }`}
            >
              <div className="text-3xl font-bold text-primary-500 mb-2">
                85%
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                Success Rate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Scholarships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedScholarship(scholarship)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={scholarship.image}
                    alt={scholarship.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                        scholarship.category
                      )}`}
                    >
                      {scholarship.category.charAt(0).toUpperCase() +
                        scholarship.category.slice(1)}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {scholarship.percentage}% Coverage
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="text-2xl font-bold mb-1">
                        UGX {(scholarship.amount / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-sm opacity-90">Annual Value</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    {scholarship.name}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-4 leading-relaxed line-clamp-3`}
                  >
                    {scholarship.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Available Slots
                      </span>
                      <span className="font-semibold text-primary-500">
                        {scholarship.available_slots}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Applications
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {scholarship.current_applications} received
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Deadline
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          formatDeadline(scholarship.deadline).color
                        }`}
                      >
                        {formatDeadline(scholarship.deadline).text}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className={`w-full bg-gray-200 rounded-full h-2 ${
                        theme === "dark" ? "bg-white/20" : "bg-black/20"
                      }`}
                    >
                      <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(
                            100,
                            (scholarship.current_applications /
                              (scholarship.available_slots * 3)) *
                              100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {scholarship.renewable && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-medium">
                        Renewable
                      </span>
                    )}
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium ml-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Detail Modal */}
      {selectedScholarship && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedScholarship(null)}
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
                {selectedScholarship.name}
              </h3>
              <button
                onClick={() => setSelectedScholarship(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedScholarship.image}
                  alt={selectedScholarship.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                <div
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Scholarship Value
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Coverage
                      </span>
                      <span className="font-semibold text-primary-500">
                        {selectedScholarship.percentage}% of tuition
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Annual Value
                      </span>
                      <span className="font-semibold text-primary-500">
                        UGX {selectedScholarship.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Renewable
                      </span>
                      <span
                        className={`font-semibold ${
                          selectedScholarship.renewable
                            ? "text-green-500"
                            : "text-orange-500"
                        }`}
                      >
                        {selectedScholarship.renewable ? "Yes" : "One-time"}
                      </span>
                    </div>
                  </div>
                </div>
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
                    {selectedScholarship.description}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-2">
                    {selectedScholarship.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {criteria}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Application Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedScholarship.requirements.map(
                      (requirement, index) => (
                        <li key={index} className="flex items-start">
                          <FileText className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {requirement}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Apply Now
                  </button>
                  <button
                    className={`flex-1 ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Guide
                  </button>
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

export default ScholarshipsPage;
