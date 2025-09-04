import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Crown,
  Users,
  Mail,
  Phone,
  Linkedin,
  Award,
  BookOpen,
  Calendar,
  MessageCircle,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Leader {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  qualifications: string[];
  experience: number;
  achievements: string[];
  email: string;
  phone?: string;
  linkedin?: string;
  image: string;
  joinedYear: number;
  specializations: string[];
}

interface LeadershipTeamPageProps {
  theme: string;
  toggleTheme: () => void;
}

const LeadershipTeamPage: React.FC<LeadershipTeamPageProps> = ({ theme, toggleTheme }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const leadershipTeam: Leader[] = [
    {
      id: "1",
      name: "Dr. Margaret Ssebunya",
      position: "Principal",
      department: "Executive Leadership",
      bio: "Dr. Margaret Ssebunya brings over 20 years of educational leadership experience to her role as Principal. She holds a PhD in Educational Leadership from Makerere University and has been instrumental in transforming educational institutions across Uganda. Under her leadership, the school has achieved remarkable academic excellence and expanded its community impact programs.",
      qualifications: [
        "PhD Educational Leadership - Makerere University",
        "MEd Curriculum Development - University of Edinburgh",
        "BSc Mathematics Education - Kyambogo University"
      ],
      experience: 20,
      achievements: [
        "Led school to top 5 ranking in national assessments",
        "Implemented innovative STEM programs",
        "Established community outreach initiatives",
        "Received National Education Leadership Award 2023"
      ],
      email: "principal@tredumoschool.ug",
      phone: "+256 414 123 456",
      linkedin: "https://linkedin.com/in/margaret-ssebunya",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80",
      joinedYear: 2018,
      specializations: ["Educational Leadership", "Curriculum Development", "Strategic Planning"]
    },
    {
      id: "2",
      name: "Mr. David Mukasa",
      position: "Deputy Principal (Academic)",
      department: "Academic Affairs",
      bio: "Mr. David Mukasa oversees all academic programs and curriculum implementation. With a Master's in Educational Administration and 15 years of teaching experience, he ensures our academic standards remain at the highest level. He has been pivotal in introducing digital learning initiatives and maintaining our excellent examination results.",
      qualifications: [
        "MEd Educational Administration - Uganda Christian University",
        "BSc Physics - Makerere University",
        "Diploma in Education - Kyambogo University"
      ],
      experience: 15,
      achievements: [
        "Improved school pass rates to 98%",
        "Introduced digital learning platforms",
        "Mentored 50+ teachers to excellence",
        "Developed innovative assessment methods"
      ],
      email: "deputy.academic@tredumoschool.ug",
      phone: "+256 414 123 457",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      joinedYear: 2019,
      specializations: ["Academic Leadership", "Curriculum Design", "Teacher Development"]
    },
    {
      id: "3",
      name: "Mrs. Grace Nakato",
      position: "Deputy Principal (Administration)",
      department: "Administration",
      bio: "Mrs. Grace Nakato manages all administrative operations, ensuring smooth day-to-day functioning of the school. Her background in business administration and educational management has been crucial in streamlining processes and improving operational efficiency. She oversees student services, facilities management, and community relations.",
      qualifications: [
        "MBA Business Administration - Makerere Business School",
        "BSc Business Administration - Uganda Martyrs University",
        "Certificate in Educational Management"
      ],
      experience: 12,
      achievements: [
        "Streamlined administrative processes",
        "Improved parent satisfaction by 40%",
        "Established efficient communication systems",
        "Led successful accreditation processes"
      ],
      email: "deputy.admin@tredumoschool.ug",
      phone: "+256 414 123 458",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      joinedYear: 2020,
      specializations: ["Operations Management", "Strategic Planning", "Community Relations"]
    },
    {
      id: "4",
      name: "Dr. James Okello",
      position: "Director of Studies",
      department: "Academic Affairs",
      bio: "Dr. James Okello leads our academic planning and ensures curriculum alignment with national and international standards. His expertise in educational psychology and curriculum development has been instrumental in creating personalized learning experiences for our students.",
      qualifications: [
        "PhD Educational Psychology - University of Cambridge",
        "MEd Curriculum Studies - Makerere University",
        "BSc Education - Kyambogo University"
      ],
      experience: 18,
      achievements: [
        "Developed personalized learning frameworks",
        "Published 25+ research papers",
        "Led curriculum modernization initiatives",
        "Established international partnerships"
      ],
      email: "director.studies@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      joinedYear: 2017,
      specializations: ["Curriculum Development", "Educational Psychology", "Research"]
    },
    {
      id: "5",
      name: "Ms. Sarah Namuli",
      position: "Head of Student Affairs",
      department: "Student Services",
      bio: "Ms. Sarah Namuli is responsible for student welfare, counseling services, and co-curricular activities. Her background in counseling psychology and youth development ensures that our students receive comprehensive support for their personal and social development.",
      qualifications: [
        "MSc Counseling Psychology - Makerere University",
        "BSc Psychology - Uganda Christian University",
        "Certificate in Youth Development"
      ],
      experience: 10,
      achievements: [
        "Established comprehensive counseling programs",
        "Reduced student dropout rates by 60%",
        "Developed peer mentorship programs",
        "Created inclusive support systems"
      ],
      email: "student.affairs@tredumoschool.ug",
      phone: "+256 414 123 459",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      joinedYear: 2021,
      specializations: ["Student Counseling", "Youth Development", "Mental Health"]
    },
    {
      id: "6",
      name: "Mr. Peter Lubega",
      position: "Finance Director",
      department: "Finance & Administration",
      bio: "Mr. Peter Lubega manages the school's financial operations and strategic financial planning. His expertise in financial management and educational finance ensures sustainable growth and efficient resource allocation for maximum educational impact.",
      qualifications: [
        "MBA Finance - Makerere Business School",
        "BSc Accounting - Uganda Martyrs University",
        "CPA Uganda"
      ],
      experience: 14,
      achievements: [
        "Improved financial efficiency by 35%",
        "Secured major infrastructure funding",
        "Implemented transparent financial systems",
        "Established scholarship endowment fund"
      ],
      email: "finance@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      joinedYear: 2019,
      specializations: ["Financial Management", "Strategic Planning", "Resource Allocation"]
    }
  ];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Leadership Team | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Meet the experienced leadership team at ${schoolConfig.name}. Dedicated professionals committed to educational excellence in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Hexagonal Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
          {/* Hexagonal Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" className={theme === "dark" ? "text-white" : "text-black"} />
            </svg>
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
              Meet Our Leaders
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Leadership <span className="text-primary-500">Team</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Experienced educators and administrators dedicated to fostering excellence, 
              innovation, and character development in every student
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border backdrop-blur-xl`}
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Position Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full font-medium">
                      {leader.department}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {leader.experience}+ years
                    </div>
                  </div>

                  {/* Name & Position Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-white/90 text-sm">{leader.position}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed line-clamp-3`}>
                      {leader.bio}
                    </p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Joined
                      </span>
                      <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {leader.joinedYear}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Achievements
                      </span>
                      <span className="font-medium text-primary-500">
                        {leader.achievements.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {leader.specializations.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                    {leader.specializations.length > 2 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                        +{leader.specializations.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                    <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-4 py-2 rounded-lg transition-colors text-sm font-medium`}>
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
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
              Our Leadership Philosophy
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              The principles that guide our leadership approach and decision-making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Crown className="h-8 w-8 text-gold-500" />,
                title: "Servant Leadership",
                description: "Leading by serving our students, teachers, and community with humility and dedication"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                title: "Collaborative Approach",
                description: "Making decisions through consultation, teamwork, and shared responsibility"
              },
              {
                icon: <Star className="h-8 w-8 text-purple-500" />,
                title: "Visionary Thinking",
                description: "Looking ahead to anticipate needs and prepare for future challenges and opportunities"
              },
              {
                icon: <Award className="h-8 w-8 text-green-500" />,
                title: "Continuous Improvement",
                description: "Constantly seeking ways to enhance our educational programs and student experience"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {principle.icon}
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {principle.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Detail Modal */}
      {selectedLeader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLeader(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedLeader.name}
              </h3>
              <button
                onClick={() => setSelectedLeader(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary-500 mr-3" />
                      <a
                        href={`mailto:${selectedLeader.email}`}
                        className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                      >
                        {selectedLeader.email}
                      </a>
                    </div>
                    {selectedLeader.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-primary-500 mr-3" />
                        <a
                          href={`tel:${selectedLeader.phone.replace(/\D/g, "")}`}
                          className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                        >
                          {selectedLeader.phone}
                        </a>
                      </div>
                    )}
                    {selectedLeader.linkedin && (
                      <div className="flex items-center">
                        <Linkedin className="h-4 w-4 text-primary-500 mr-3" />
                        <a
                          href={selectedLeader.linkedin}
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
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    About {selectedLeader.name.split(' ')[1]}
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedLeader.bio}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {selectedLeader.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <BookOpen className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {qualification}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedLeader.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
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

export default LeadershipTeamPage;