import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Heart,
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  Calendar,
  Award,
  TrendingUp,
  Target,
  Download,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Bursary {
  id: string;
  name: string;
  description: string;
  amount: number;
  percentage: number;
  eligibility: string[];
  requirements: string[];
  deadline: string;
  category: "need-based" | "orphan" | "disability" | "community" | "emergency";
  available_slots: number;
  current_applications: number;
  renewable: boolean;
  sponsor?: string;
}

interface BursariesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const BursariesPage: React.FC<BursariesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBursary, setSelectedBursary] = useState<Bursary | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    familyIncome: '',
    circumstances: '',
    bursaryType: ''
  });
  const schoolConfig = getCurrentSchoolConfig();

  const bursaries: Bursary[] = [
    {
      id: "1",
      name: "Financial Hardship Bursary",
      description: "Comprehensive financial assistance for families experiencing economic difficulties",
      amount: 900000,
      percentage: 75,
      eligibility: [
        "Family income below UGX 1.5M annually",
        "Demonstrated financial need",
        "Good academic performance (minimum 65%)",
        "Strong character references"
      ],
      requirements: [
        "Completed bursary application form",
        "Family income documentation",
        "Bank statements (6 months)",
        "Employer letters or business records",
        "Community leader recommendation",
        "Home visit assessment report"
      ],
      deadline: "2024-04-15",
      category: "need-based",
      available_slots: 30,
      current_applications: 85,
      renewable: true,
      sponsor: "School Foundation"
    },
    {
      id: "2",
      name: "Orphan Support Bursary",
      description: "Full educational support for orphaned students with exceptional potential",
      amount: 1200000,
      percentage: 100,
      eligibility: [
        "Orphaned status (both parents deceased)",
        "Legal guardian documentation",
        "Academic potential demonstrated",
        "Community support verification"
      ],
      requirements: [
        "Death certificates of parents",
        "Legal guardianship documents",
        "Academic records and potential assessment",
        "Social worker recommendation",
        "Community leader endorsement",
        "Medical and psychological assessment"
      ],
      deadline: "2024-03-30",
      category: "orphan",
      available_slots: 15,
      current_applications: 23,
      renewable: true,
      sponsor: "UNICEF Uganda"
    },
    {
      id: "3",
      name: "Disability Support Fund",
      description: "Specialized support for students with disabilities to ensure inclusive education",
      amount: 800000,
      percentage: 65,
      eligibility: [
        "Documented disability requiring support",
        "Medical assessment and recommendations",
        "Commitment to academic excellence",
        "Family financial need assessment"
      ],
      requirements: [
        "Medical disability assessment",
        "Specialist recommendations",
        "Individual education plan",
        "Assistive technology needs assessment",
        "Family financial documentation",
        "Previous school support records"
      ],
      deadline: "2024-04-01",
      category: "disability",
      available_slots: 10,
      current_applications: 12,
      renewable: true,
      sponsor: "Disability Rights Uganda"
    },
    {
      id: "4",
      name: "Community Service Bursary",
      description: "Recognition and support for students actively contributing to community development",
      amount: 600000,
      percentage: 50,
      eligibility: [
        "Demonstrated community service (100+ hours)",
        "Leadership in community projects",
        "Good academic standing (minimum 70%)",
        "Community impact documentation"
      ],
      requirements: [
        "Community service portfolio",
        "Project impact documentation",
        "Community leader testimonials",
        "Academic transcripts",
        "Personal statement on community impact",
        "Future service commitment plan"
      ],
      deadline: "2024-03-25",
      category: "community",
      available_slots: 20,
      current_applications: 34,
      renewable: false,
      sponsor: "Community Development Foundation"
    },
    {
      id: "5",
      name: "Emergency Financial Relief",
      description: "Immediate assistance for students facing sudden financial crises",
      amount: 400000,
      percentage: 35,
      eligibility: [
        "Sudden family financial crisis",
        "Previously self-supporting family",
        "Current student in good standing",
        "Temporary assistance needed"
      ],
      requirements: [
        "Crisis documentation (medical bills, job loss, etc.)",
        "Previous financial stability evidence",
        "Academic standing verification",
        "Temporary assistance plan",
        "Family recovery timeline",
        "School counselor assessment"
      ],
      deadline: "Rolling basis",
      category: "emergency",
      available_slots: 25,
      current_applications: 18,
      renewable: false,
      sponsor: "Emergency Relief Fund"
    }
  ];

  const categories = [
    { id: "all", name: "All Bursaries", color: "gray", icon: <Heart className="h-4 w-4" /> },
    { id: "need-based", name: "Financial Need", color: "blue", icon: <DollarSign className="h-4 w-4" /> },
    { id: "orphan", name: "Orphan Support", color: "purple", icon: <Users className="h-4 w-4" /> },
    { id: "disability", name: "Disability Support", color: "green", icon: <Heart className="h-4 w-4" /> },
    { id: "community", name: "Community Service", color: "orange", icon: <Award className="h-4 w-4" /> },
    { id: "emergency", name: "Emergency Relief", color: "red", icon: <AlertCircle className="h-4 w-4" /> }
  ];

  const filteredBursaries = selectedCategory === "all" 
    ? bursaries 
    : bursaries.filter(bursary => bursary.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      "need-based": "bg-blue-500/20 text-blue-500 border-blue-500/30",
      "orphan": "bg-purple-500/20 text-purple-500 border-purple-500/30",
      "disability": "bg-green-500/20 text-green-500 border-green-500/30",
      "community": "bg-orange-500/20 text-orange-500 border-orange-500/30",
      "emergency": "bg-red-500/20 text-red-500 border-red-500/30"
    };
    return colorMap[category] || "bg-gray-500/20 text-gray-500 border-gray-500/30";
  };

  const formatDeadline = (dateString: string) => {
    if (dateString === "Rolling basis") return { text: "Rolling basis", color: "text-green-500" };
    
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: "Deadline passed", color: "text-red-500" };
    if (diffDays === 0) return { text: "Due today", color: "text-red-500" };
    if (diffDays <= 7) return { text: `${diffDays} days left`, color: "text-orange-500" };
    return { text: `${diffDays} days left`, color: "text-green-500" };
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Bursaries & Financial Aid | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Financial assistance and bursary programs at ${schoolConfig.name}. Support for students facing financial hardship, orphans, and those with special needs.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} bursaries, financial aid, orphan support, disability support, emergency relief, ${schoolConfig.address.city} school assistance`}
        />
        <meta property="og:title" content={`Bursaries & Financial Aid | ${schoolConfig.name}`} />
        <meta property="og:description" content={`Comprehensive financial assistance programs at ${schoolConfig.name}. Supporting students in need with various bursary options.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/admissions/bursaries" />
        <link rel="canonical" href="https://tredumo.com/admissions/bursaries" />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80"
            alt="Bursaries and Financial Aid"
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
              Financial Support
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Bursaries & <span className="text-primary-500">Financial Aid</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              No deserving student should be denied quality education due to financial constraints. Explore our comprehensive bursary programs designed to support students in need.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                UGX {(bursaries.reduce((sum, b) => sum + b.amount, 0) / 1000000).toFixed(1)}M
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Total Support Available
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {bursaries.reduce((sum, b) => sum + b.available_slots, 0)}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Students Supported
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {bursaries.length}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Bursary Programs
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">92%</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Success Rate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
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

          {/* Bursaries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBursaries.map((bursary, index) => (
              <motion.div
                key={bursary.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedBursary(bursary)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(bursary.category)}`}>
                      {bursary.category.charAt(0).toUpperCase() + bursary.category.slice(1).replace('-', ' ')}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-500">
                        {bursary.percentage}%
                      </div>
                      <div className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Coverage
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    {bursary.name}
                  </h3>
                  
                  <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                    {bursary.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Annual Value
                      </span>
                      <span className="font-semibold text-primary-500">
                        UGX {bursary.amount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Available Slots
                      </span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {bursary.available_slots}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Applications
                      </span>
                      <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        {bursary.current_applications} received
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Deadline
                      </span>
                      <span className={`text-sm font-medium ${formatDeadline(bursary.deadline).color}`}>
                        {formatDeadline(bursary.deadline).text}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}>
                      <div 
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${Math.min(100, (bursary.current_applications / (bursary.available_slots * 2)) * 100)}%` 
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    {bursary.renewable && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-medium">
                        Renewable
                      </span>
                    )}
                    {bursary.sponsor && (
                      <span className={`text-xs ${theme === "dark" ? "text-white/50" : "text-black/50"}`}>
                        Sponsored by {bursary.sponsor}
                      </span>
                    )}
                  </div>

                  <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              How to Apply for Bursaries
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Our application process is designed to be thorough yet compassionate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "Complete our financial need assessment form to determine eligibility",
                icon: <FileText className="h-6 w-6 text-blue-500" />,
                timeframe: "1-2 days"
              },
              {
                step: "2",
                title: "Document Collection",
                description: "Gather all required supporting documents and evidence",
                icon: <Users className="h-6 w-6 text-green-500" />,
                timeframe: "1 week"
              },
              {
                step: "3",
                title: "Application Review",
                description: "Our committee reviews your application and may conduct home visits",
                icon: <Target className="h-6 w-6 text-purple-500" />,
                timeframe: "2-3 weeks"
              },
              {
                step: "4",
                title: "Decision & Support",
                description: "Receive decision and begin receiving financial support if approved",
                icon: <Award className="h-6 w-6 text-orange-500" />,
                timeframe: "1 week"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-black/10"} flex items-center justify-center mx-auto`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {step.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4 leading-relaxed`}>
                  {step.description}
                </p>
                <div className="text-sm font-medium text-primary-500">
                  Timeline: {step.timeframe}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bursary Detail Modal */}
      {selectedBursary && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBursary(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedBursary.name}
              </h3>
              <button
                onClick={() => setSelectedBursary(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Bursary Overview
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedBursary.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-2">
                    {selectedBursary.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {criteria}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Required Documents
                  </h4>
                  <ul className="space-y-2">
                    {selectedBursary.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Bursary Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Coverage</span>
                      <span className="font-semibold text-primary-500">{selectedBursary.percentage}% of tuition</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Annual Value</span>
                      <span className="font-semibold text-primary-500">UGX {selectedBursary.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Available Slots</span>
                      <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedBursary.available_slots}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Renewable</span>
                      <span className={`font-semibold ${selectedBursary.renewable ? "text-green-500" : "text-orange-500"}`}>
                        {selectedBursary.renewable ? "Yes" : "One-time"}
                      </span>
                    </div>
                    {selectedBursary.sponsor && (
                      <div className="flex justify-between">
                        <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Sponsor</span>
                        <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedBursary.sponsor}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Apply Now
                  </button>
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}>
                    <Download className="h-5 w-5 mr-2" />
                    Download Guide
                  </button>
                </div>

                {selectedBursary.deadline !== "Rolling basis" && (
                  <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-orange-500/10 border-orange-500/20" : "bg-orange-500/10 border-orange-500/20"} border`}>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Application Deadline
                      </span>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {new Date(selectedBursary.deadline).toLocaleDateString('en-UG', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Support & Guidance */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${theme === "dark" ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20" : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"}`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Need Help with Your Application?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Our financial aid counselors are here to guide you through the application process and help you access the support you need.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Heart className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Personal Guidance
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    One-on-one counseling to understand your needs
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <FileText className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Application Support
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Help with forms, documents, and submission process
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"} backdrop-blur-xl`}>
                  <Users className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                    Ongoing Support
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Continued assistance throughout your education
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Contact Financial Aid Office
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Application Forms
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default BursariesPage;