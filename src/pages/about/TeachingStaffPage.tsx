import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Users,
  Search,
  Filter,
  Award,
  BookOpen,
  Mail,
  Phone,
  Star,
  GraduationCap,
  Calendar,
  MessageCircle,
  Play,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface Teacher {
  id: string;
  name: string;
  position: string;
  subjects: string[];
  qualifications: string[];
  experience: number;
  bio: string;
  achievements: string[];
  email: string;
  phone?: string;
  image: string;
  rating: number;
  reviews: number;
  joinedYear: number;
  department: string;
  specializations: string[];
  videoIntro?: string;
}

interface TeachingStaffPageProps {
  theme: string;
  toggleTheme: () => void;
}

const TeachingStaffPage: React.FC<TeachingStaffPageProps> = ({ theme, toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [sortBy, setSortBy] = useState("name");
  const schoolConfig = getCurrentSchoolConfig();

  const teachingStaff: Teacher[] = [
    {
      id: "1",
      name: "Dr. Sarah Nakato",
      position: "Head of Mathematics Department",
      subjects: ["Mathematics", "Further Mathematics", "Statistics"],
      qualifications: [
        "PhD Mathematics - Cambridge University",
        "MSc Applied Mathematics - Oxford University",
        "BSc Mathematics - Makerere University"
      ],
      experience: 15,
      bio: "Dr. Sarah Nakato is a passionate mathematics educator with over 15 years of experience. She believes in making mathematics accessible and enjoyable for all students through innovative teaching methods and real-world applications.",
      achievements: [
        "Best Teacher Award 2023",
        "Published 20+ research papers",
        "National Mathematics Olympiad Coach",
        "Curriculum Development Consultant"
      ],
      email: "s.nakato@tredumoschool.ug",
      phone: "+256 414 123 460",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 127,
      joinedYear: 2015,
      department: "Mathematics",
      specializations: ["Advanced Mathematics", "Statistics", "Research Methods"],
      videoIntro: "https://example.com/teacher-intro-1.mp4"
    },
    {
      id: "2",
      name: "Mr. David Mukasa",
      position: "Senior Physics Teacher",
      subjects: ["Physics", "Applied Physics", "Engineering Science"],
      qualifications: [
        "MSc Physics - University of Edinburgh",
        "BSc Physics - Makerere University",
        "Diploma in Education - Kyambogo University"
      ],
      experience: 12,
      bio: "Mr. David Mukasa brings physics to life through hands-on experiments and practical applications. His innovative approach to teaching complex concepts has helped countless students develop a love for physics and pursue STEM careers.",
      achievements: [
        "Innovation in Teaching Award 2022",
        "Developed 10+ laboratory experiments",
        "Mentored 50+ students into engineering",
        "Science Fair Coordinator"
      ],
      email: "d.mukasa@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 4.8,
      reviews: 98,
      joinedYear: 2017,
      department: "Sciences",
      specializations: ["Experimental Physics", "Engineering Applications", "Laboratory Design"]
    },
    {
      id: "3",
      name: "Ms. Grace Namuli",
      position: "English Literature Coordinator",
      subjects: ["English Literature", "Creative Writing", "Communication Skills"],
      qualifications: [
        "MA English Literature - Oxford University",
        "BA Literature - Makerere University",
        "Certificate in Creative Writing"
      ],
      experience: 10,
      bio: "Ms. Grace Namuli is a published author and passionate literature teacher. She helps students discover the power of storytelling and develop their own unique voices through creative writing and literary analysis.",
      achievements: [
        "Published novelist - 3 books",
        "Literary Excellence Award 2023",
        "Debate Team Coach - National Champions",
        "Creative Writing Workshop Leader"
      ],
      email: "g.namuli@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 156,
      joinedYear: 2018,
      department: "Languages",
      specializations: ["Creative Writing", "Literary Analysis", "Public Speaking"],
      videoIntro: "https://example.com/teacher-intro-3.mp4"
    },
    {
      id: "4",
      name: "Dr. Alice Nakimuli",
      position: "Head of Science Department",
      subjects: ["Chemistry", "Biology", "Environmental Science"],
      qualifications: [
        "PhD Chemistry - Makerere University",
        "MSc Biochemistry - University of Cape Town",
        "BSc Chemistry - Kyambogo University"
      ],
      experience: 18,
      bio: "Dr. Alice Nakimuli leads our science department with expertise in chemistry and environmental science. Her research background and practical approach to teaching science has inspired many students to pursue careers in medicine and research.",
      achievements: [
        "Research Excellence Award",
        "Published 30+ scientific papers",
        "Environmental Science Program Developer",
        "Science Olympiad National Coach"
      ],
      email: "a.nakimuli@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      rating: 4.8,
      reviews: 143,
      joinedYear: 2014,
      department: "Sciences",
      specializations: ["Organic Chemistry", "Environmental Science", "Research Methodology"]
    },
    {
      id: "5",
      name: "Mr. James Okello",
      position: "Computer Science Department Head",
      subjects: ["Computer Science", "Programming", "Digital Literacy"],
      qualifications: [
        "MSc Computer Science - MIT",
        "BSc Computer Science - Makerere University",
        "Certified Ethical Hacker"
      ],
      experience: 8,
      bio: "Mr. James Okello is at the forefront of technology education, preparing students for the digital future. His industry experience and passion for coding have established our school as a leader in computer science education.",
      achievements: [
        "Led school to National Coding Competition victory",
        "Developed comprehensive programming curriculum",
        "Trained 200+ students in programming",
        "Technology Innovation Award 2023"
      ],
      email: "j.okello@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 89,
      joinedYear: 2020,
      department: "Technology",
      specializations: ["Software Development", "Cybersecurity", "AI/ML Basics"]
    },
    {
      id: "6",
      name: "Mrs. Mary Namusoke",
      position: "Head of Languages Department",
      subjects: ["French", "Luganda", "Linguistics"],
      qualifications: [
        "MA Applied Linguistics - Sorbonne University",
        "BA French Language - Makerere University",
        "Certificate in Cultural Studies"
      ],
      experience: 14,
      bio: "Mrs. Mary Namusoke brings cultural richness to language learning. Her expertise in multiple languages and cultural studies helps students appreciate diversity and develop global communication skills.",
      achievements: [
        "Cultural Exchange Program Coordinator",
        "Multilingual Education Specialist",
        "International Language Competition Judge",
        "Cultural Diversity Award 2022"
      ],
      email: "m.namusoke@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      rating: 4.7,
      reviews: 112,
      joinedYear: 2016,
      department: "Languages",
      specializations: ["Multilingual Education", "Cultural Studies", "Language Assessment"]
    }
  ];

  const departments = [
    "all",
    "Mathematics",
    "Sciences", 
    "Languages",
    "Technology",
    "Arts",
    "Sports"
  ];

  const filteredStaff = teachingStaff.filter(teacher => {
    const matchesSearch = searchTerm === "" || 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === "all" || teacher.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const sortedStaff = [...filteredStaff].sort((a, b) => {
    switch (sortBy) {
      case "experience":
        return b.experience - a.experience;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Teaching Staff | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Meet our exceptional teaching staff at ${schoolConfig.name}. Qualified, experienced educators dedicated to student success in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Card Layout */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10" />
          {/* Floating Cards Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-16 h-20 ${theme === "dark" ? "bg-white/10" : "bg-black/10"} rounded-lg transform rotate-12`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                }}
              />
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
              Our Educators
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Teaching <span className="text-primary-500">Staff</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Meet our exceptional team of educators who bring passion, expertise, and dedication to every classroom
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Qualified Teachers
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">95%</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Have Advanced Degrees
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">15:1</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Student-Teacher Ratio
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-black/10 backdrop-blur-xl border border-black/20"}`}>
              <div className="text-3xl font-bold text-primary-500 mb-2">4.8</div>
              <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                Average Rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Search */}
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500" />
              <input
                type="text"
                placeholder="Search teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  theme === "dark" 
                    ? "bg-white/5 border-white/20 text-white placeholder-white/50" 
                    : "bg-black/5 border-black/20 text-black placeholder-black/50"
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className={`px-4 py-3 rounded-xl border ${
                theme === "dark" 
                  ? "bg-white/5 border-white/20 text-white" 
                  : "bg-black/5 border-black/20 text-black"
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept} className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                  {dept === "all" ? "All Departments" : dept}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-3 rounded-xl border ${
                theme === "dark" 
                  ? "bg-white/5 border-white/20 text-white" 
                  : "bg-black/5 border-black/20 text-black"
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              <option value="name" className={theme === "dark" ? "bg-gray-900" : "bg-white"}>Sort by Name</option>
              <option value="experience" className={theme === "dark" ? "bg-gray-900" : "bg-white"}>Sort by Experience</option>
              <option value="rating" className={theme === "dark" ? "bg-gray-900" : "bg-white"}>Sort by Rating</option>
            </select>

            {/* Results Count */}
            <div className={`flex items-center justify-center px-4 py-3 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                {sortedStaff.length} teachers found
              </span>
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedStaff.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedTeacher(teacher)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {teacher.videoIntro && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-black/70 text-white p-2 rounded-lg">
                        <Play className="h-4 w-4" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(teacher.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-white/30'
                          }`}
                        />
                      ))}
                      <span className="text-white/90 text-xs ml-2">
                        ({teacher.reviews})
                      </span>
                    </div>
                    <h3 className="text-white font-semibold">{teacher.name}</h3>
                    <p className="text-white/90 text-sm">{teacher.position}</p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {teacher.subjects.slice(0, 2).map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                    {teacher.subjects.length > 2 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-500 text-xs rounded-full">
                        +{teacher.subjects.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Experience
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {teacher.experience} years
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Joined
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {teacher.joinedYear}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${teacher.email}`}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </a>
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

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTeacher(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedTeacher.name}
              </h3>
              <button
                onClick={() => setSelectedTeacher(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                {selectedTeacher.videoIntro && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                      Video Introduction
                    </h4>
                    <div className="relative rounded-xl overflow-hidden">
                      <video
                        src={selectedTeacher.videoIntro}
                        controls
                        className="w-full h-48 object-cover"
                        poster={selectedTeacher.image}
                      />
                    </div>
                  </div>
                )}

                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary-500 mr-3" />
                      <a
                        href={`mailto:${selectedTeacher.email}`}
                        className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                      >
                        {selectedTeacher.email}
                      </a>
                    </div>
                    {selectedTeacher.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-primary-500 mr-3" />
                        <a
                          href={`tel:${selectedTeacher.phone.replace(/\D/g, "")}`}
                          className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                        >
                          {selectedTeacher.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    About {selectedTeacher.name.split(' ')[1]}
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedTeacher.bio}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Subjects Taught
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeacher.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {selectedTeacher.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <GraduationCap className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {qualification}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedTeacher.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(selectedTeacher.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`ml-2 text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      {selectedTeacher.rating} ({selectedTeacher.reviews} reviews)
                    </span>
                  </div>
                  
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
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

export default TeachingStaffPage;