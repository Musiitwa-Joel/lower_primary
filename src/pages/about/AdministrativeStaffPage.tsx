import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Briefcase,
  Users,
  Settings,
  FileText,
  Phone,
  Mail,
  Clock,
  MapPin,
  Shield,
  Heart,
  Zap,
  Award,
  Search,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface AdminStaff {
  id: string;
  name: string;
  position: string;
  department: string;
  responsibilities: string[];
  qualifications: string[];
  experience: number;
  bio: string;
  email: string;
  phone?: string;
  image: string;
  joinedYear: number;
  officeLocation: string;
  officeHours: string;
}

interface AdministrativeStaffPageProps {
  theme: string;
  toggleTheme: () => void;
}

const AdministrativeStaffPage: React.FC<AdministrativeStaffPageProps> = ({ theme, toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStaff, setSelectedStaff] = useState<AdminStaff | null>(null);
  const schoolConfig = getCurrentSchoolConfig();

  const administrativeStaff: AdminStaff[] = [
    {
      id: "1",
      name: "Mrs. Grace Nakato",
      position: "Registrar",
      department: "Academic Administration",
      responsibilities: [
        "Student records management",
        "Academic transcript processing",
        "Examination coordination",
        "Graduation ceremonies"
      ],
      qualifications: [
        "MBA Education Management - Makerere Business School",
        "BSc Business Administration - Uganda Martyrs University"
      ],
      experience: 12,
      bio: "Mrs. Grace Nakato ensures the smooth operation of all academic administrative processes. Her attention to detail and commitment to accuracy has streamlined our record-keeping and improved service delivery to students and parents.",
      email: "registrar@tredumoschool.ug",
      phone: "+256 414 123 470",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80",
      joinedYear: 2018,
      officeLocation: "Administration Block, Room 101",
      officeHours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      id: "2",
      name: "Mr. Peter Lubega",
      position: "Accounts Manager",
      department: "Finance",
      responsibilities: [
        "Financial planning and budgeting",
        "Fee collection and management",
        "Payroll administration",
        "Financial reporting"
      ],
      qualifications: [
        "MBA Finance - Makerere Business School",
        "BSc Accounting - Uganda Martyrs University",
        "CPA Uganda"
      ],
      experience: 15,
      bio: "Mr. Peter Lubega manages all financial operations with transparency and efficiency. His expertise in educational finance has helped the school maintain financial stability while investing in quality improvements.",
      email: "accounts@tredumoschool.ug",
      phone: "+256 414 123 471",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      joinedYear: 2016,
      officeLocation: "Administration Block, Room 102",
      officeHours: "Monday - Friday: 8:00 AM - 4:30 PM"
    },
    {
      id: "3",
      name: "Ms. Sarah Namuli",
      position: "Human Resources Manager",
      department: "Human Resources",
      responsibilities: [
        "Staff recruitment and selection",
        "Employee relations and welfare",
        "Training and development programs",
        "Policy implementation"
      ],
      qualifications: [
        "MSc Human Resource Management - Makerere University",
        "BSc Psychology - Uganda Christian University",
        "CHRP Certification"
      ],
      experience: 10,
      bio: "Ms. Sarah Namuli is dedicated to creating a positive work environment for all staff members. Her expertise in human resources has improved staff satisfaction and retention while maintaining high professional standards.",
      email: "hr@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      joinedYear: 2019,
      officeLocation: "Administration Block, Room 103",
      officeHours: "Monday - Friday: 8:30 AM - 5:00 PM"
    },
    {
      id: "4",
      name: "Mr. John Ssemakula",
      position: "IT Administrator",
      department: "Information Technology",
      responsibilities: [
        "Network infrastructure management",
        "Software systems administration",
        "Technical support services",
        "Digital security protocols"
      ],
      qualifications: [
        "BSc Information Technology - Makerere University",
        "Cisco Certified Network Associate",
        "Microsoft Certified Systems Administrator"
      ],
      experience: 8,
      bio: "Mr. John Ssemakula maintains our technology infrastructure and supports digital learning initiatives. His technical expertise ensures reliable systems and seamless integration of technology in education.",
      email: "it@tredumoschool.ug",
      phone: "+256 414 123 472",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      joinedYear: 2020,
      officeLocation: "IT Center, Ground Floor",
      officeHours: "Monday - Friday: 7:30 AM - 5:30 PM"
    },
    {
      id: "5",
      name: "Mrs. Mary Namusoke",
      position: "Student Services Coordinator",
      department: "Student Affairs",
      responsibilities: [
        "Student welfare and support",
        "Disciplinary procedures",
        "Parent communication",
        "Student activities coordination"
      ],
      qualifications: [
        "MSc Counseling Psychology - Makerere University",
        "BSc Social Work - Uganda Christian University"
      ],
      experience: 9,
      bio: "Mrs. Mary Namusoke is committed to student welfare and creating a supportive environment for all learners. Her background in counseling psychology helps address student needs holistically.",
      email: "studentservices@tredumoschool.ug",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80",
      joinedYear: 2019,
      officeLocation: "Student Services Block, Room 201",
      officeHours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      id: "6",
      name: "Mr. Robert Kiggundu",
      position: "Facilities Manager",
      department: "Operations",
      responsibilities: [
        "Campus maintenance and upkeep",
        "Security coordination",
        "Transportation services",
        "Infrastructure development"
      ],
      qualifications: [
        "Diploma in Civil Engineering - Uganda Technical College",
        "Certificate in Facilities Management"
      ],
      experience: 11,
      bio: "Mr. Robert Kiggundu ensures our campus remains safe, clean, and conducive to learning. His proactive approach to facilities management has maintained our infrastructure in excellent condition.",
      email: "facilities@tredumoschool.ug",
      phone: "+256 414 123 473",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      joinedYear: 2017,
      officeLocation: "Facilities Office, Ground Floor",
      officeHours: "Monday - Saturday: 7:00 AM - 6:00 PM"
    }
  ];

  const departments = [
    "all",
    "Academic Administration",
    "Finance",
    "Human Resources",
    "Information Technology",
    "Student Affairs",
    "Operations"
  ];

  const filteredStaff = administrativeStaff.filter(staff => {
    const matchesSearch = searchTerm === "" || 
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "all" || staff.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const getDepartmentIcon = (department: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Academic Administration": <FileText className="h-6 w-6 text-blue-500" />,
      "Finance": <Briefcase className="h-6 w-6 text-green-500" />,
      "Human Resources": <Users className="h-6 w-6 text-purple-500" />,
      "Information Technology": <Settings className="h-6 w-6 text-orange-500" />,
      "Student Affairs": <Heart className="h-6 w-6 text-red-500" />,
      "Operations": <Zap className="h-6 w-6 text-indigo-500" />
    };
    return iconMap[department] || <Briefcase className="h-6 w-6 text-gray-500" />;
  };

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Administrative Staff | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Meet the dedicated administrative staff at ${schoolConfig.name}. Professional support services ensuring smooth school operations in ${schoolConfig.address.city}.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Organizational Chart Design */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10" />
          {/* Organizational Chart Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="org-chart" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <rect x="40" y="40" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <line x1="60" y1="60" x2="60" y2="80" stroke="currentColor" strokeWidth="1"/>
                  <line x1="30" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="1"/>
                  <rect x="20" y="80" width="20" height="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <rect x="80" y="80" width="20" height="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#org-chart)" className={theme === "dark" ? "text-white" : "text-black"} />
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
              Support Team
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Administrative <span className="text-primary-500">Staff</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              The dedicated professionals who ensure smooth operations and provide essential support services 
              that enable our educational mission to thrive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Search */}
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500" />
              <input
                type="text"
                placeholder="Search staff members..."
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

            {/* Results Count */}
            <div className={`flex items-center justify-center px-4 py-3 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
              <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                {filteredStaff.length} staff members
              </span>
            </div>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStaff.map((staff, index) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"
                } border group`}
                onClick={() => setSelectedStaff(staff)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {staff.department}
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {staff.experience}+ years
                    </div>
                  </div>

                  {/* Name & Position */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-1">{staff.name}</h3>
                    <p className="text-white/90 text-sm">{staff.position}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {getDepartmentIcon(staff.department)}
                      <span className={`ml-2 font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {staff.department}
                      </span>
                    </div>
                    <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed line-clamp-3`}>
                      {staff.bio}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Office
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {staff.officeLocation}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                        Joined
                      </span>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                        {staff.joinedYear}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${staff.email}`}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </a>
                    <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-3 py-2 rounded-lg transition-colors text-xs font-medium`}>
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
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
              Administrative Departments
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Specialized departments working together to support our educational mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(1).map((department, index) => {
              const deptStaff = administrativeStaff.filter(staff => staff.department === department);
              return (
                <motion.div
                  key={department}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl text-center ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
                >
                  <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    {getDepartmentIcon(department)}
                  </div>
                  <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    {department}
                  </h3>
                  <div className="text-2xl font-bold text-primary-500 mb-2">
                    {deptStaff.length}
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                    Staff Members
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStaff(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                {selectedStaff.name}
              </h3>
              <button
                onClick={() => setSelectedStaff(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                    Contact & Office Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary-500 mr-3" />
                      <a
                        href={`mailto:${selectedStaff.email}`}
                        className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                      >
                        {selectedStaff.email}
                      </a>
                    </div>
                    {selectedStaff.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-primary-500 mr-3" />
                        <a
                          href={`tel:${selectedStaff.phone.replace(/\D/g, "")}`}
                          className={`hover:text-primary-500 transition-colors ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                        >
                          {selectedStaff.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {selectedStaff.officeLocation}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                        {selectedStaff.officeHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    About {selectedStaff.name.split(' ')[1]}
                  </h4>
                  <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                    {selectedStaff.bio}
                  </p>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedStaff.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                    Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {selectedStaff.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {qualification}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`mailto:${selectedStaff.email}`}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact
                  </a>
                  <button className={`flex-1 ${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-6 py-3 rounded-lg transition-colors font-medium`}>
                    Schedule Meeting
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

export default AdministrativeStaffPage;