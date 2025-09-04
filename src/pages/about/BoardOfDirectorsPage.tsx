import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Crown,
  Users,
  Briefcase,
  Award,
  Mail,
  Linkedin,
  Calendar,
  Target,
  TrendingUp,
  Shield,
  Globe,
  BookOpen,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface BoardMember {
  id: string;
  name: string;
  position: string;
  role: string;
  bio: string;
  expertise: string[];
  qualifications: string[];
  experience: number;
  currentPositions: string[];
  achievements: string[];
  email?: string;
  linkedin?: string;
  image: string;
  joinedBoard: number;
  termEnd: number;
  committees: string[];
}

interface BoardOfDirectorsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const BoardOfDirectorsPage: React.FC<BoardOfDirectorsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [activeCommittee, setActiveCommittee] = useState("all");
  const schoolConfig = getCurrentSchoolConfig();

  const boardMembers: BoardMember[] = [
    {
      id: "1",
      name: "Prof. Dr. Elizabeth Nakato",
      position: "Chairperson",
      role: "Board Chair",
      bio: "Prof. Dr. Elizabeth Nakato is a distinguished educator and researcher with over 25 years of experience in higher education. She has served as Vice-Chancellor of two major universities and brings invaluable strategic leadership to our board.",
      expertise: ["Educational Leadership", "Strategic Planning", "Academic Excellence", "Research Management"],
      qualifications: [
        "PhD Education Policy - Harvard University",
        "MEd Educational Leadership - Oxford University",
        "BSc Mathematics - Makerere University"
      ],
      experience: 25,
      currentPositions: [
        "Professor Emeritus - Makerere University",
        "Education Consultant - World Bank",
        "Board Member - Uganda National Examinations Board"
      ],
      achievements: [
        "Transformed 3 universities as Vice-Chancellor",
        "Published 50+ research papers",
        "UNESCO Education Excellence Award",
        "Order of the Source of the Nile (Uganda)"
      ],
      email: "chairperson@tredumoschool.ug",
      linkedin: "https://linkedin.com/in/elizabeth-nakato",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80",
      joinedBoard: 2015,
      termEnd: 2025,
      committees: ["Executive Committee", "Academic Affairs", "Strategic Planning"]
    },
    {
      id: "2",
      name: "Mr. David Mukasa",
      position: "Vice-Chairperson",
      role: "Business Leader",
      bio: "Mr. David Mukasa is a successful entrepreneur and business leader with extensive experience in corporate governance and strategic management. His business acumen has been instrumental in the school's financial sustainability and growth.",
      expertise: ["Corporate Governance", "Financial Management", "Strategic Development", "Risk Management"],
      qualifications: [
        "MBA Finance - London Business School",
        "BSc Business Administration - Makerere Business School",
        "CPA Uganda"
      ],
      experience: 20,
      currentPositions: [
        "CEO - Mukasa Holdings Ltd",
        "Board Member - Uganda Securities Exchange",
        "Chairman - East Africa Business Council"
      ],
      achievements: [
        "Built multi-million dollar business empire",
        "Led successful IPO on Uganda Securities Exchange",
        "Business Leader of the Year 2022",
        "Philanthropist supporting 10+ schools"
      ],
      email: "vice.chair@tredumoschool.ug",
      linkedin: "https://linkedin.com/in/david-mukasa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      joinedBoard: 2016,
      termEnd: 2026,
      committees: ["Finance Committee", "Infrastructure Development", "Strategic Planning"]
    },
    {
      id: "3",
      name: "Dr. Grace Namuli",
      position: "Secretary",
      role: "Legal Expert",
      bio: "Dr. Grace Namuli is a renowned legal practitioner and academic with expertise in education law and governance. Her legal expertise ensures our compliance with regulations and protects the interests of all stakeholders.",
      expertise: ["Education Law", "Corporate Governance", "Policy Development", "Legal Compliance"],
      qualifications: [
        "PhD Law - University of Cambridge",
        "LLM Education Law - Harvard Law School",
        "LLB - Makerere University"
      ],
      experience: 18,
      currentPositions: [
        "Senior Partner - Namuli & Associates",
        "Legal Advisor - Ministry of Education",
        "Board Member - Uganda Law Society"
      ],
      achievements: [
        "Drafted education policies for 5+ countries",
        "Leading education law expert in East Africa",
        "Published 30+ legal articles",
        "Human Rights Advocate Award"
      ],
      email: "secretary@tredumoschool.ug",
      linkedin: "https://linkedin.com/in/grace-namuli",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      joinedBoard: 2017,
      termEnd: 2027,
      committees: ["Governance Committee", "Policy Review", "Legal Affairs"]
    },
    {
      id: "4",
      name: "Mr. James Okello",
      position: "Treasurer",
      role: "Financial Expert",
      bio: "Mr. James Okello is a chartered accountant and financial expert with extensive experience in educational finance and institutional management. His financial oversight ensures responsible stewardship of school resources.",
      expertise: ["Financial Management", "Audit & Compliance", "Budget Planning", "Investment Strategy"],
      qualifications: [
        "MBA Finance - INSEAD",
        "BSc Accounting - Uganda Martyrs University",
        "CPA Uganda", "ACCA"
      ],
      experience: 16,
      currentPositions: [
        "CFO - East Africa Development Bank",
        "Board Member - Uganda Institute of Banking",
        "Financial Consultant - Various NGOs"
      ],
      achievements: [
        "Managed budgets exceeding $100M",
        "Implemented financial systems in 20+ institutions",
        "Financial Excellence Award 2021",
        "Authored financial management guidelines"
      ],
      email: "treasurer@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      joinedBoard: 2018,
      termEnd: 2028,
      committees: ["Finance Committee", "Audit Committee", "Investment Committee"]
    },
    {
      id: "5",
      name: "Mrs. Mary Namusoke",
      position: "Member",
      role: "Community Representative",
      bio: "Mrs. Mary Namusoke represents the voice of parents and the local community on our board. Her background in social work and community development ensures our school remains connected to community needs and values.",
      expertise: ["Community Development", "Social Work", "Parent Relations", "Cultural Sensitivity"],
      qualifications: [
        "MSc Social Work - Uganda Christian University",
        "BSc Community Development - Makerere University",
        "Certificate in Conflict Resolution"
      ],
      experience: 14,
      currentPositions: [
        "Director - Community Development Foundation",
        "Board Member - Uganda Association of Social Workers",
        "Community Leader - Kampala District"
      ],
      achievements: [
        "Led 50+ community development projects",
        "Established 10+ community schools",
        "Community Service Award 2020",
        "Women's Leadership Recognition"
      ],
      email: "community.rep@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      joinedBoard: 2019,
      termEnd: 2029,
      committees: ["Community Relations", "Student Welfare", "Cultural Affairs"]
    },
    {
      id: "6",
      name: "Dr. Robert Kiggundu",
      position: "Member",
      role: "Technology Expert",
      bio: "Dr. Robert Kiggundu is a technology leader and innovation expert who guides our digital transformation initiatives. His expertise in educational technology ensures our school remains at the forefront of digital learning.",
      expertise: ["Educational Technology", "Digital Innovation", "Systems Integration", "Cybersecurity"],
      qualifications: [
        "PhD Computer Science - MIT",
        "MSc Information Systems - Stanford University",
        "BSc Computer Science - Makerere University"
      ],
      experience: 22,
      currentPositions: [
        "CTO - Uganda Technology Solutions",
        "Board Member - Uganda Computer Society",
        "Technology Advisor - Ministry of ICT"
      ],
      achievements: [
        "Led digital transformation in 15+ institutions",
        "Holds 5 technology patents",
        "Technology Innovation Award 2023",
        "Established Uganda's first EdTech incubator"
      ],
      email: "tech.advisor@tredumoschool.ug",
      linkedin: "https://linkedin.com/in/robert-kiggundu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      joinedBoard: 2020,
      termEnd: 2030,
      committees: ["Technology Committee", "Innovation Task Force", "Digital Strategy"]
    }
  ];

  const committees = [
    "all",
    "Executive Committee",
    "Academic Affairs",
    "Finance Committee",
    "Governance Committee",
    "Technology Committee",
    "Community Relations"
  ];

  const filteredMembers = activeCommittee === "all" 
    ? boardMembers 
    : boardMembers.filter(member => member.committees.includes(activeCommittee));

  const getRoleIcon = (role: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Board Chair": <Crown className="h-6 w-6 text-gold-500" />,
      "Business Leader": <Briefcase className="h-6 w-6 text-blue-500" />,
      "Legal Expert": <Shield className="h-6 w-6 text-purple-500" />,
      "Financial Expert": <TrendingUp className="h-6 w-6 text-green-500" />,
      "Community Representative": <Users className="h-6 w-6 text-orange-500" />,
      "Technology Expert": <Globe className="h-6 w-6 text-indigo-500" />
    };
    return iconMap[role] || <Users className="h-6 w-6 text-gray-500" />;
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Board of Directors | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Meet the distinguished Board of Directors at ${schoolConfig.name}. Experienced leaders providing strategic guidance and governance oversight.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Corporate Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-zinc-500/10" />
          {/* Corporate Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className={`w-full h-full bg-grid-white ${theme === "dark" ? "opacity-20" : "opacity-10"}`} />
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
              Governance & Leadership
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Board of <span className="text-primary-500">Directors</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Distinguished leaders from diverse fields providing strategic guidance, governance oversight, 
              and ensuring our school's continued excellence and growth
            </p>
          </motion.div>

          {/* Board Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">6</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Board Members
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {Math.round(boardMembers.reduce((sum, member) => sum + member.experience, 0) / boardMembers.length)}
              </div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Avg. Experience
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">5</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Active Committees
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Attendance Rate
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committee Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {committees.map((committee) => (
              <button
                key={committee}
                onClick={() => setActiveCommittee(committee)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCommittee === committee
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                {committee === "all" ? "All Members" : committee}
              </button>
            ))}
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group relative`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Premium Badge for Chair */}
                {member.position === "Chairperson" && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-gold-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      CHAIRPERSON
                    </div>
                  </div>
                )}

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      {getRoleIcon(member.role)}
                      <span className="ml-2">{member.role}</span>
                    </div>
                  </div>

                  {/* Term Info */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Term: {member.joinedBoard}-{member.termEnd}
                    </div>
                  </div>

                  {/* Name & Position */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.position}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed line-clamp-3`}>
                      {member.bio}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Experience
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {member.experience} years
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Committees
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {member.committees.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                        +{member.expertise.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </a>
                    )}
                    <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-3 py-2 rounded-lg transition-colors text-xs font-medium`}>
                      Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
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
              Governance Structure
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Our board committees ensure effective oversight and strategic guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.slice(1).map((committee, index) => {
              const committeeMembers = boardMembers.filter(member => member.committees.includes(committee));
              return (
                <motion.div
                  key={committee}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
                >
                  <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    <Building className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    {committee}
                  </h3>
                  <div className="text-2xl font-bold text-primary-500 mb-2">
                    {committeeMembers.length}
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4`}>
                    Members
                  </div>
                  <button
                    onClick={() => setActiveCommittee(committee)}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    View Members
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board Member Detail Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-5xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedMember.name}
              </h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Board Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Position</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedMember.position}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Joined Board</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedMember.joinedBoard}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Term Ends</span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedMember.termEnd}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>Experience</span>
                      <span className="font-medium text-primary-500">{selectedMember.experience} years</span>
                    </div>
                  </div>

                  {(selectedMember.email || selectedMember.linkedin) && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <h5 className={`font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        Contact
                      </h5>
                      <div className="space-y-2">
                        {selectedMember.email && (
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-primary-500 mr-3" />
                            <a
                              href={`mailto:${selectedMember.email}`}
                              className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                            >
                              {selectedMember.email}
                            </a>
                          </div>
                        )}
                        {selectedMember.linkedin && (
                          <div className="flex items-center">
                            <Linkedin className="h-4 w-4 text-primary-500 mr-3" />
                            <a
                              href={selectedMember.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                            >
                              LinkedIn Profile
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Biography
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Board Committees
                  </h4>
                  <div className="space-y-2">
                    {selectedMember.committees.map((committee, index) => (
                      <div key={index} className="flex items-center">
                        <Target className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {committee}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedMember.achievements.slice(0, 3).map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {achievement}
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

export default BoardOfDirectorsPage;