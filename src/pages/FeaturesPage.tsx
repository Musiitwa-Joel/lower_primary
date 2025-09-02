import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
  BookOpen,
  CheckCircle,
  BarChart,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Database,
  GraduationCap,
  CreditCard,
  FileText,
  Camera,
  Clock,
  Award,
  MessageSquare,
  Settings,
  Download,
  Star,
  Play,
  ChevronRight,
  Monitor,
  Tablet,
  Phone,
  Wifi,
  Lock,
  Cloud,
  Headphones,
  Search,
  Bell,
  Mail,
  MapPin,
  DollarSign,
  PieChart,
  Target,
  Layers,
  Briefcase,
  Heart,
  BookMarked,
  Vote,
  UserCheck,
  Building,
  Lightbulb,
  Rocket,
  Eye,
  Filter,
  MoreHorizontal,
  Apple,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

interface FeaturesPageProps {
  theme: string;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Features", icon: <Layers className="h-4 w-4" /> },
    {
      id: "academic",
      name: "Academic",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "student",
      name: "Student Services",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "financial",
      name: "Financial",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: "admin",
      name: "Administration",
      icon: <Settings className="h-4 w-4" />,
    },
    {
      id: "mobile",
      name: "Mobile & Digital",
      icon: <Smartphone className="h-4 w-4" />,
    },
  ];

  const coreFeatures = [
    {
      id: "admissions",
      category: "academic",
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Smart Admissions System",
      subtitle: "AI-Powered Application Processing",
      description:
        "Revolutionize your admissions process with intelligent automation that handles applications from submission to enrollment.",
      features: [
        "Online application portal with document upload",
        "Automated eligibility screening and scoring",
        "Interview scheduling and management",
        "Bulk SMS and email notifications in English & Luganda",
        "Integration with UNEB results verification",
        "Customizable admission criteria and workflows",
        "Real-time application tracking for students",
        "Advanced analytics and reporting dashboard",
      ],
      benefits: [
        "Reduce processing time by 80%",
        "Eliminate paper-based applications",
        "Improve applicant experience",
        "Ensure fair and transparent selection",
      ],
      ugandaSpecific: [
        "UNEB results integration",
        "District quota management",
        "Government scholarship tracking",
        "Local language support",
      ],
      illustration: "🎓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "registration",
      category: "academic",
      icon: <FileText className="h-8 w-8" />,
      title: "Advanced Registration Hub",
      subtitle: "Seamless Course & Student Management",
      description:
        "Comprehensive registration system that handles everything from course enrollment to prerequisite verification.",
      features: [
        "Drag-and-drop course scheduling interface",
        "Automatic conflict detection and resolution",
        "Prerequisite verification system",
        "Class capacity management with waitlists",
        "Multi-semester planning tools",
        "Integration with academic calendar",
        "Real-time seat availability updates",
        "Bulk registration for institutional students",
      ],
      benefits: [
        "Eliminate scheduling conflicts",
        "Optimize resource utilization",
        "Streamline registration process",
        "Reduce administrative workload",
      ],
      ugandaSpecific: [
        "Semester/trimester flexibility",
        "Government program compliance",
        "Local academic calendar integration",
        "District education office reporting",
      ],
      illustration: "📋",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "photobooth",
      category: "student",
      icon: <Camera className="h-8 w-8" />,
      title: "Digital Photo Booth",
      subtitle: "Professional ID Management",
      description:
        "Capture, manage, and integrate student photos seamlessly across all school systems and documents.",
      features: [
        "High-quality photo capture with auto-enhancement",
        "Batch photo processing and cropping",
        "Integration with ID card printing systems",
        "Photo verification and approval workflows",
        "Automatic background removal and standardization",
        "Facial recognition for attendance systems",
        "Photo history and version management",
        "Export to various formats and sizes",
      ],
      benefits: [
        "Professional-quality student photos",
        "Streamlined ID card production",
        "Enhanced security features",
        "Reduced photo management costs",
      ],
      ugandaSpecific: [
        "Passport photo standards compliance",
        "Integration with national ID systems",
        "Local printing service partnerships",
        "Offline photo capture capability",
      ],
      illustration: "📸",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "student-hub",
      category: "student",
      icon: <Users className="h-8 w-8" />,
      title: "Students Information Hub",
      subtitle: "Centralized Student Portal",
      description:
        "A comprehensive digital hub where students access all their academic information, resources, and services.",
      features: [
        "Personalized student dashboard",
        "Real-time grade and progress tracking",
        "Assignment submission and feedback system",
        "Class schedules and timetable management",
        "Fee statements and payment history",
        "Library resources and e-book access",
        "Communication tools with teachers and peers",
        "Event calendar and announcements",
      ],
      benefits: [
        "24/7 access to academic information",
        "Improved student engagement",
        "Reduced administrative queries",
        "Enhanced parent-school communication",
      ],
      ugandaSpecific: [
        "Mobile money payment integration",
        "Offline content synchronization",
        "Multi-language interface support",
        "Low-bandwidth optimization",
      ],
      illustration: "🏫",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "timetable",
      category: "academic",
      icon: <Clock className="h-8 w-8" />,
      title: "Intelligent Timetable Management",
      subtitle: "AI-Powered Scheduling",
      description:
        "Create optimal timetables automatically with AI that considers teacher availability, room capacity, and student preferences.",
      features: [
        "AI-powered automatic timetable generation",
        "Real-time conflict detection and resolution",
        "Teacher availability and preference management",
        "Room and resource allocation optimization",
        "Multi-campus scheduling support",
        "Substitute teacher management",
        "Mobile app for instant schedule updates",
        "Integration with attendance systems",
      ],
      benefits: [
        "Eliminate scheduling conflicts",
        "Optimize resource utilization",
        "Save 90% of scheduling time",
        "Improve teacher satisfaction",
      ],
      ugandaSpecific: [
        "Flexible term structure support",
        "Integration with national holidays",
        "Multi-shift school scheduling",
        "Rural connectivity considerations",
      ],
      illustration: "⏰",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "course-admin",
      category: "academic",
      icon: <BookOpen className="h-8 w-8" />,
      title: "Course Administration Hub",
      subtitle: "Complete Curriculum Management",
      description:
        "Comprehensive platform for managing courses, curricula, and learning materials with advanced tracking capabilities.",
      features: [
        "Curriculum design and mapping tools",
        "Learning outcome tracking and assessment",
        "Digital content library management",
        "Assignment and project management",
        "Plagiarism detection and prevention",
        "Collaborative learning spaces",
        "Progress analytics and reporting",
        "Integration with external learning platforms",
      ],
      benefits: [
        "Standardized curriculum delivery",
        "Improved learning outcomes",
        "Enhanced teacher collaboration",
        "Data-driven curriculum improvements",
      ],
      ugandaSpecific: [
        "NCDC curriculum alignment",
        "Local content integration",
        "Vernacular language support",
        "Rural school connectivity solutions",
      ],
      illustration: "📚",
      color: "from-teal-500 to-green-500",
    },
    {
      id: "education-monitoring",
      category: "academic",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Education Monitoring & Analytics",
      subtitle: "Data-Driven Insights",
      description:
        "Advanced analytics platform that provides deep insights into student performance, institutional effectiveness, and educational outcomes.",
      features: [
        "Real-time performance dashboards",
        "Predictive analytics for student success",
        "Early intervention alert systems",
        "Comprehensive reporting suite",
        "Comparative analysis tools",
        "Custom KPI tracking",
        "Automated report generation",
        "Data visualization and infographics",
      ],
      benefits: [
        "Identify at-risk students early",
        "Improve institutional performance",
        "Make data-driven decisions",
        "Enhance educational outcomes",
      ],
      ugandaSpecific: [
        "EMIS reporting compliance",
        "District performance comparisons",
        "Government KPI tracking",
        "Local education standards monitoring",
      ],
      illustration: "📊",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "examinations",
      category: "academic",
      icon: <Award className="h-8 w-8" />,
      title: "Comprehensive Examinations System",
      subtitle: "Digital Assessment Platform",
      description:
        "Complete examination management system from question bank creation to result publication with advanced security features.",
      features: [
        "Digital question bank with categorization",
        "Automated exam paper generation",
        "Online and offline examination modes",
        "Secure browser for online exams",
        "Automated grading and marking",
        "Plagiarism and cheating detection",
        "Result processing and analytics",
        "Certificate and transcript generation",
      ],
      benefits: [
        "Reduce examination costs by 60%",
        "Eliminate paper-based processes",
        "Ensure examination security",
        "Provide instant results",
      ],
      ugandaSpecific: [
        "UNEB format compatibility",
        "Local examination standards",
        "Offline capability for rural areas",
        "Integration with national databases",
      ],
      illustration: "🏆",
      color: "from-red-500 to-pink-500",
    },
    {
      id: "results",
      category: "academic",
      icon: <BarChart className="h-8 w-8" />,
      title: "Results Management System",
      subtitle: "Secure Grade Processing",
      description:
        "Comprehensive results management with secure access, detailed analytics, and automated report generation.",
      features: [
        "Secure grade entry and verification",
        "Automated GPA and ranking calculations",
        "Transcript and certificate generation",
        "Parent and student result portals",
        "Grade analytics and trends",
        "Bulk result processing",
        "Integration with examination systems",
        "Audit trails and version control",
      ],
      benefits: [
        "Eliminate manual grade calculations",
        "Ensure result accuracy and security",
        "Provide instant access to stakeholders",
        "Generate comprehensive analytics",
      ],
      ugandaSpecific: [
        "UNEB grading system compatibility",
        "Local transcript formats",
        "Government reporting requirements",
        "Multi-language result slips",
      ],
      illustration: "📈",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "fees",
      category: "financial",
      icon: <CreditCard className="h-8 w-8" />,
      title: "Advanced Fees Management",
      subtitle: "Complete Financial Tracking",
      description:
        "Comprehensive fee management system with flexible payment options, automated reminders, and detailed financial reporting.",
      features: [
        "Flexible fee structure configuration",
        "Multiple payment gateway integration",
        "Automated payment reminders and notifications",
        "Installment and scholarship management",
        "Real-time payment tracking",
        "Financial reporting and analytics",
        "Receipt generation and management",
        "Integration with accounting systems",
      ],
      benefits: [
        "Improve fee collection rates",
        "Reduce payment processing time",
        "Enhance financial transparency",
        "Automate financial workflows",
      ],
      ugandaSpecific: [
        "Mobile money integration (MTN, Airtel)",
        "Bank transfer support",
        "Government fee structures",
        "Local currency handling",
      ],
      illustration: "💳",
      color: "from-green-500 to-teal-500",
    },
    {
      id: "voting",
      category: "student",
      icon: <Vote className="h-8 w-8" />,
      title: "Digital Voting System",
      subtitle: "Democratic Student Elections",
      description:
        "Secure and transparent digital voting platform for student elections and institutional decision-making processes.",
      features: [
        "Secure voter authentication",
        "Real-time vote counting",
        "Candidate profile management",
        "Campaign material distribution",
        "Transparent result publication",
        "Audit trails and verification",
        "Mobile voting capabilities",
        "Multi-position election support",
      ],
      benefits: [
        "Ensure election transparency",
        "Increase voter participation",
        "Reduce election costs",
        "Provide instant results",
      ],
      ugandaSpecific: [
        "Student government compliance",
        "Local election standards",
        "Multi-language ballot support",
        "Offline voting capabilities",
      ],
      illustration: "🗳️",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "alumni",
      category: "student",
      icon: <UserCheck className="h-8 w-8" />,
      title: "Alumni Network Platform",
      subtitle: "Lifelong Community Connection",
      description:
        "Comprehensive alumni management system that maintains lifelong connections and facilitates ongoing engagement.",
      features: [
        "Alumni directory and networking",
        "Event management and invitations",
        "Donation and fundraising tools",
        "Career services and job board",
        "Mentorship program management",
        "Alumni achievement tracking",
        "Communication and newsletter tools",
        "Reunion planning and management",
      ],
      benefits: [
        "Strengthen alumni relationships",
        "Increase donation potential",
        "Enhance institutional reputation",
        "Provide career opportunities for students",
      ],
      ugandaSpecific: [
        "Local business network integration",
        "Diaspora alumni management",
        "Cultural event coordination",
        "Local language communication",
      ],
      illustration: "🎓",
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: "finance",
      category: "financial",
      icon: <PieChart className="h-8 w-8" />,
      title: "Financial Management Suite",
      subtitle: "Complete Financial Control",
      description:
        "Comprehensive financial management system covering budgeting, accounting, reporting, and compliance.",
      features: [
        "Budget planning and management",
        "Expense tracking and approval workflows",
        "Financial reporting and analytics",
        "Cash flow management",
        "Vendor and supplier management",
        "Asset management and depreciation",
        "Tax compliance and reporting",
        "Integration with banking systems",
      ],
      benefits: [
        "Improve financial transparency",
        "Reduce financial errors",
        "Enhance budget control",
        "Ensure regulatory compliance",
      ],
      ugandaSpecific: [
        "URA tax compliance",
        "Local banking integration",
        "Government audit requirements",
        "Multi-currency support",
      ],
      illustration: "💰",
      color: "from-emerald-500 to-green-500",
    },
    {
      id: "quality-assurance",
      category: "admin",
      icon: <Target className="h-8 w-8" />,
      title: "Quality Assurance System",
      subtitle: "Excellence Monitoring",
      description:
        "Comprehensive quality assurance platform ensuring educational standards and continuous improvement.",
      features: [
        "Quality metrics tracking",
        "Accreditation management",
        "Compliance monitoring",
        "Performance evaluation systems",
        "Continuous improvement workflows",
        "Stakeholder feedback collection",
        "Quality reporting and analytics",
        "Best practices documentation",
      ],
      benefits: [
        "Maintain educational standards",
        "Ensure accreditation compliance",
        "Drive continuous improvement",
        "Enhance institutional reputation",
      ],
      ugandaSpecific: [
        "NCHE compliance monitoring",
        "Local quality standards",
        "Government inspection readiness",
        "Regional accreditation support",
      ],
      illustration: "🎯",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "graduation",
      category: "academic",
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Graduation Management",
      subtitle: "Ceremony & Credential Management",
      description:
        "Complete graduation management system from eligibility verification to ceremony coordination and credential issuance.",
      features: [
        "Graduation eligibility verification",
        "Ceremony planning and management",
        "Invitation and RSVP management",
        "Certificate and diploma generation",
        "Photography and videography coordination",
        "Guest management and seating",
        "Live streaming capabilities",
        "Post-graduation surveys and feedback",
      ],
      benefits: [
        "Streamline graduation processes",
        "Ensure accurate credential issuance",
        "Enhance ceremony experience",
        "Reduce administrative burden",
      ],
      ugandaSpecific: [
        "Local ceremony traditions",
        "Government official invitations",
        "Cultural celebration integration",
        "Multi-language certificates",
      ],
      illustration: "🎓",
      color: "from-violet-500 to-purple-500",
    },
    {
      id: "media",
      category: "admin",
      icon: <Camera className="h-8 w-8" />,
      title: "Media Management Hub",
      subtitle: "Digital Asset Management",
      description:
        "Comprehensive media management system for organizing, sharing, and distributing institutional content.",
      features: [
        "Digital asset library management",
        "Photo and video organization",
        "Content approval workflows",
        "Social media integration",
        "Brand asset management",
        "Event documentation",
        "Media distribution tools",
        "Copyright and licensing management",
      ],
      benefits: [
        "Centralize media assets",
        "Improve content organization",
        "Enhance brand consistency",
        "Streamline content distribution",
      ],
      ugandaSpecific: [
        "Local event documentation",
        "Cultural content preservation",
        "Multi-language media support",
        "Low-bandwidth optimization",
      ],
      illustration: "📷",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "hr",
      category: "admin",
      icon: <Briefcase className="h-8 w-8" />,
      title: "Human Resource Management",
      subtitle: "Complete Staff Management",
      description:
        "Comprehensive HR system covering recruitment, performance management, payroll, and employee development.",
      features: [
        "Employee records management",
        "Recruitment and onboarding",
        "Performance evaluation systems",
        "Payroll processing and management",
        "Leave and attendance tracking",
        "Training and development programs",
        "Employee self-service portal",
        "HR analytics and reporting",
      ],
      benefits: [
        "Streamline HR processes",
        "Improve employee satisfaction",
        "Ensure compliance",
        "Enhance productivity",
      ],
      ugandaSpecific: [
        "NSSF and tax compliance",
        "Local labor law adherence",
        "Multi-language support",
        "Cultural sensitivity training",
      ],
      illustration: "👥",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: "system-access",
      category: "admin",
      icon: <Lock className="h-8 w-8" />,
      title: "System Access Control",
      subtitle: "Security & Permissions",
      description:
        "Advanced security system with role-based access control, audit trails, and comprehensive user management.",
      features: [
        "Role-based access control (RBAC)",
        "Multi-factor authentication",
        "Single sign-on (SSO) integration",
        "User activity monitoring",
        "Audit trails and logging",
        "Password policy management",
        "Session management",
        "Security compliance reporting",
      ],
      benefits: [
        "Ensure data security",
        "Prevent unauthorized access",
        "Maintain compliance",
        "Reduce security risks",
      ],
      ugandaSpecific: [
        "Data protection compliance",
        "Local privacy regulations",
        "Government security standards",
        "Multi-language security policies",
      ],
      illustration: "🔒",
      color: "from-red-500 to-orange-500",
    },
    {
      id: "setup",
      category: "admin",
      icon: <Settings className="h-8 w-8" />,
      title: "System Setup & Configuration",
      subtitle: "Customizable Platform",
      description:
        "Comprehensive setup and configuration tools to customize the platform according to institutional needs.",
      features: [
        "Institution profile configuration",
        "Academic calendar setup",
        "Fee structure configuration",
        "User role and permission setup",
        "Integration configuration",
        "Branding and customization",
        "Workflow configuration",
        "System preferences management",
      ],
      benefits: [
        "Tailor system to needs",
        "Ensure proper configuration",
        "Maintain brand consistency",
        "Optimize workflows",
      ],
      ugandaSpecific: [
        "Local academic calendar",
        "Government compliance setup",
        "Multi-language configuration",
        "Regional customization",
      ],
      illustration: "⚙️",
      color: "from-gray-500 to-slate-500",
    },
    {
      id: "user-guide",
      category: "admin",
      icon: <BookMarked className="h-8 w-8" />,
      title: "Interactive User Guide",
      subtitle: "Comprehensive Training",
      description:
        "Interactive training platform with tutorials, documentation, and support resources for all users.",
      features: [
        "Interactive tutorials and walkthroughs",
        "Video training library",
        "Searchable documentation",
        "Context-sensitive help",
        "User onboarding programs",
        "Best practices guides",
        "FAQ and knowledge base",
        "Community forums and support",
      ],
      benefits: [
        "Reduce training time",
        "Improve user adoption",
        "Decrease support tickets",
        "Enhance user experience",
      ],
      ugandaSpecific: [
        "Multi-language tutorials",
        "Local context examples",
        "Offline documentation",
        "Cultural adaptation guides",
      ],
      illustration: "📖",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "elearning",
      category: "academic",
      icon: <Monitor className="h-8 w-8" />,
      title: "E-Learning Platform",
      subtitle: "Digital Education Hub",
      description:
        "Comprehensive e-learning platform with course creation, delivery, and assessment capabilities.",
      features: [
        "Course creation and management",
        "Interactive content delivery",
        "Video conferencing integration",
        "Assignment and quiz tools",
        "Discussion forums and collaboration",
        "Progress tracking and analytics",
        "Mobile learning support",
        "Offline content synchronization",
      ],
      benefits: [
        "Enable remote learning",
        "Enhance educational delivery",
        "Improve student engagement",
        "Support blended learning",
      ],
      ugandaSpecific: [
        "Low-bandwidth optimization",
        "Offline content access",
        "Local language support",
        "Rural connectivity solutions",
      ],
      illustration: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "counselling",
      category: "student",
      icon: <Heart className="h-8 w-8" />,
      title: "Student Counselling System",
      subtitle: "Mental Health & Guidance",
      description:
        "Comprehensive counselling platform providing mental health support, academic guidance, and career counselling.",
      features: [
        "Appointment scheduling system",
        "Confidential case management",
        "Crisis intervention protocols",
        "Group counselling coordination",
        "Resource library and materials",
        "Referral management",
        "Progress tracking and reporting",
        "Integration with academic records",
      ],
      benefits: [
        "Support student wellbeing",
        "Improve academic outcomes",
        "Provide timely interventions",
        "Maintain confidentiality",
      ],
      ugandaSpecific: [
        "Cultural sensitivity protocols",
        "Local mental health resources",
        "Community support integration",
        "Multi-language counselling",
      ],
      illustration: "💝",
      color: "from-rose-500 to-pink-500",
    },
    {
      id: "scholarships",
      category: "financial",
      icon: <Award className="h-8 w-8" />,
      title: "Scholarship Management",
      subtitle: "Financial Aid Administration",
      description:
        "Complete scholarship and financial aid management system from application to disbursement.",
      features: [
        "Scholarship application portal",
        "Eligibility verification system",
        "Selection and evaluation tools",
        "Award management and tracking",
        "Disbursement processing",
        "Renewal and continuation tracking",
        "Donor management and reporting",
        "Impact assessment and analytics",
      ],
      benefits: [
        "Streamline scholarship processes",
        "Ensure fair selection",
        "Improve financial aid delivery",
        "Enhance donor relationships",
      ],
      ugandaSpecific: [
        "Government scholarship integration",
        "Local donor management",
        "Need-based assessment tools",
        "Community scholarship programs",
      ],
      illustration: "🏆",
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: "library",
      category: "academic",
      icon: <BookMarked className="h-8 w-8" />,
      title: "Digital Library System",
      subtitle: "Knowledge Management Hub",
      description:
        "Modern library management system with digital resources, cataloging, and circulation management.",
      features: [
        "Digital catalog and search",
        "Book circulation management",
        "Digital resource access",
        "Reservation and renewal system",
        "Fine and penalty management",
        "Inventory management",
        "Reading analytics and recommendations",
        "Integration with academic systems",
      ],
      benefits: [
        "Modernize library operations",
        "Improve resource accessibility",
        "Enhance user experience",
        "Optimize resource utilization",
      ],
      ugandaSpecific: [
        "Local content integration",
        "Multi-language resources",
        "Offline catalog access",
        "Community library partnerships",
      ],
      illustration: "📚",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "tredpay",
      category: "financial",
      icon: <CreditCard className="h-8 w-8" />,
      title: "TredPay Payment Gateway",
      subtitle: "Secure Payment Processing",
      description:
        "Advanced payment gateway specifically designed for educational institutions with multiple payment options.",
      features: [
        "Multiple payment method support",
        "Real-time payment processing",
        "Automated receipt generation",
        "Payment plan management",
        "Fraud detection and prevention",
        "PCI DSS compliance",
        "Payment analytics and reporting",
        "Integration with banking systems",
      ],
      benefits: [
        "Secure payment processing",
        "Reduce payment friction",
        "Improve collection rates",
        "Enhance financial transparency",
      ],
      ugandaSpecific: [
        "Mobile money integration",
        "Local bank partnerships",
        "Multi-currency support",
        "Government payment compliance",
      ],
      illustration: "💳",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const platformFeatures = [
    {
      id: "student-portal",
      icon: <Monitor className="h-12 w-12" />,
      title: "Students Portal",
      subtitle: "Web-Based Student Interface",
      description:
        "Comprehensive web portal designed specifically for students to access all their academic and administrative needs.",
      features: [
        "Personalized dashboard with key metrics",
        "Real-time grade and progress tracking",
        "Assignment submission and feedback",
        "Class schedules and timetable access",
        "Fee statements and payment processing",
        "Library resources and e-book access",
        "Communication tools with faculty",
        "Event calendar and announcements",
        "Course materials and resources",
        "Peer collaboration spaces",
      ],
      benefits: [
        "24/7 access to academic information",
        "Improved student engagement",
        "Reduced administrative queries",
        "Enhanced learning experience",
      ],
      screenshots: [
        "/images/student-portal-dashboard.png",
        "/images/student-portal-grades.png",
        "/images/student-portal-schedule.png",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "mobile-apps",
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Applications",
      subtitle: "iOS & Android Native Apps",
      description:
        "Native mobile applications for iOS and Android providing full platform access on mobile devices.",
      features: [
        "Native iOS and Android applications",
        "Offline functionality and sync",
        "Push notifications for important updates",
        "Biometric authentication support",
        "Mobile-optimized user interface",
        "Camera integration for document upload",
        "GPS integration for attendance",
        "Mobile payment processing",
        "Voice and video calling",
        "Augmented reality features",
      ],
      benefits: [
        "Access anywhere, anytime",
        "Improved user engagement",
        "Real-time notifications",
        "Enhanced mobility",
      ],
      platforms: [
        {
          name: "iOS",
          icon: <Phone className="h-6 w-6" />,
          version: "iOS 12+",
        },
        {
          name: "Android",
          icon: <Smartphone className="h-6 w-6" />,
          version: "Android 8+",
        },
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const integrationFeatures = [
    {
      title: "Seamless Integration",
      description:
        "All modules work together seamlessly, sharing data and providing a unified experience.",
      icon: <Layers className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "API-First Architecture",
      description:
        "Built with APIs at the core, enabling easy integration with existing systems.",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Cloud-Native Platform",
      description:
        "Scalable, secure, and reliable cloud infrastructure with 99.9% uptime.",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support in English and Luganda.",
      icon: <Headphones className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Nakamya",
      role: "Vice Chancellor, Kampala International University",
      content:
        "Tredumo has revolutionized our operations. The integrated approach has reduced our administrative workload by 70% while improving student satisfaction significantly.",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "John Mukasa",
      role: "IT Director, Makerere University",
      content:
        "The technical architecture is impressive. The API-first approach made integration with our existing systems seamless, and the performance has been outstanding.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Grace Namuli",
      role: "Student, Uganda Christian University",
      content:
        "The student portal and mobile app have made my academic life so much easier. I can access everything I need from my phone, even with limited internet.",
      rating: 5,
      image: "/images/testimonial-3.jpg",
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? coreFeatures
      : coreFeatures.filter((feature) => feature.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={`${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
      <Helmet>
        <title>Features | Complete EdTech Platform by Tredumo</title>
        <meta
          name="description"
          content="Discover Tredumo's comprehensive suite of 25+ integrated modules including admissions, student portal, mobile apps, payment gateway, and more. Built specifically for Ugandan educational institutions."
        />
        <meta
          name="keywords"
          content="Tredumo features, school management system Uganda, EdTech platform, student portal, mobile apps, TredPay, admissions system, results management, digital education Uganda"
        />
        <meta
          property="og:title"
          content="Features | Complete EdTech Platform by Tredumo"
        />
        <meta
          property="og:description"
          content="Explore 25+ integrated modules designed to transform education in Uganda. From admissions to graduation, mobile apps to payment processing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/features" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://tredumo.com/features" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8a87d8]/10 via-transparent to-[#c1bfea]/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#8a87d8]/10 border border-[#8a87d8]/20 backdrop-blur-xl"
            >
              <Rocket className="h-4 w-4 text-[#8a87d8] mr-2" />
              <span className="text-[#8a87d8] text-sm font-medium">
                25+ Integrated Modules
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-5xl sm:text-6xl md:text-7xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Complete EdTech
              <br />
              <span className="text-[#8a87d8]">Platform for Uganda</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-xl md:text-2xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto font-light leading-relaxed`}
            >
              From admissions to graduation, mobile apps to payment processing -
              discover how Tredumo's integrated platform transforms educational
              institutions across Uganda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="bg-[#8a87d8] text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg tracking-wide flex items-center justify-center group hover:bg-[#a5a3e0] hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className={`${
                  theme === "dark"
                    ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                    : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg tracking-wide border border-[#8a87d8]/20 hover:border-[#8a87d8]/40`}
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Screenshot Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium tracking-widest text-[#8a87d8] uppercase">
              Platform Overview
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              All modules in one
              <br />
              <span className="text-[#8a87d8]">unified platform</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8a87d8]/20 via-transparent to-[#c1bfea]/20 z-10"></div>

            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-xl rounded-lg px-3 py-2 z-20">
              <span className="text-white text-sm font-medium">
                Live Platform Dashboard
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {integrationFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                    : "bg-black/5 border-black/10"
                } backdrop-blur-xl border text-center`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-2`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4 tracking-tight`}
            >
              Explore by
              <span className="text-[#8a87d8]"> category</span>
            </h2>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto`}
            >
              Browse our comprehensive feature set organized by functional areas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#8a87d8] text-white shadow-lg scale-105"
                    : theme === "dark"
                    ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20 border border-[#8a87d8]/20"
                    : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20 border border-[#8a87d8]/20"
                } backdrop-blur-xl font-medium`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`group relative p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 hover:bg-[#8a87d8]/10 border-[#8a87d8]/10 hover:border-[#8a87d8]/20"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-500 hover:scale-[1.02] overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Feature Icon and Header */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {feature.illustration}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3
                      className={`text-2xl font-bold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2 group-hover:text-[#8a87d8] transition-colors duration-300`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#8a87d8] font-medium text-sm uppercase tracking-wide mb-3">
                      {feature.subtitle}
                    </p>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      } text-lg leading-relaxed`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold ${
                        theme === "dark" ? "text-white/90" : "text-black/90"
                      } uppercase tracking-wide mb-3`}
                    >
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {feature.features.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#8a87d8] mr-3 flex-shrink-0 mt-0.5" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    {feature.features.length > 4 && (
                      <button className="text-[#8a87d8] text-sm font-medium mt-2 hover:underline flex items-center">
                        View all {feature.features.length} features
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    )}
                  </div>

                  {/* Uganda-Specific Features */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold ${
                        theme === "dark" ? "text-white/90" : "text-black/90"
                      } uppercase tracking-wide mb-3 flex items-center`}
                    >
                      <MapPin className="h-4 w-4 mr-2 text-[#8a87d8]" />
                      Uganda-Specific
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.ugandaSpecific.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#8a87d8]/10 text-[#8a87d8] text-xs font-medium border border-[#8a87d8]/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold ${
                        theme === "dark" ? "text-white/90" : "text-black/90"
                      } uppercase tracking-wide mb-3 flex items-center`}
                    >
                      <Target className="h-4 w-4 mr-2 text-[#8a87d8]" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-[#8a87d8] rounded-full mr-2"></div>
                          <span
                            className={`text-xs ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/features/${feature.id}`}
                    className={`inline-flex items-center justify-center w-full ${
                      hoveredFeature === feature.id
                        ? "bg-[#8a87d8] text-white"
                        : theme === "dark"
                        ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                        : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                    } px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group/btn border border-[#8a87d8]/20`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Features - Student Portal & Mobile Apps */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-medium tracking-widest text-[#8a87d8] uppercase">
              Digital Platforms
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Access anywhere,
              <br />
              <span className="text-[#8a87d8]">on any device</span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {platformFeatures.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden"
              >
                <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

                <div
                  className={`relative ${
                    theme === "dark"
                      ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                      : "bg-black/5 border-black/10"
                  } backdrop-blur-xl rounded-[2rem] border p-8 md:p-12 overflow-hidden`}
                >
                  <div
                    className={`grid grid-cols-1 ${
                      index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                    } gap-12 items-center`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${platform.color} mb-6`}
                      >
                        <div className="text-white">{platform.icon}</div>
                      </div>

                      <span className="text-sm font-medium tracking-widest text-[#8a87d8] uppercase">
                        {platform.subtitle}
                      </span>
                      <h3
                        className={`text-3xl md:text-4xl font-bold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mt-4 mb-6 tracking-tight`}
                      >
                        {platform.title}
                      </h3>

                      <p
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        } mb-8 text-lg leading-relaxed`}
                      >
                        {platform.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {platform.features.slice(0, 8).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#8a87d8] mr-3 flex-shrink-0 mt-0.5" />
                            <span
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-white/70"
                                  : "text-black/70"
                              }`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Platform-specific content */}
                      {platform.platforms && (
                        <div className="mb-8">
                          <h4
                            className={`text-lg font-semibold ${
                              theme === "dark" ? "text-white" : "text-black"
                            } mb-4`}
                          >
                            Available Platforms
                          </h4>
                          <div className="flex gap-4">
                            {platform.platforms.map((p, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center p-4 rounded-xl ${
                                  theme === "dark"
                                    ? "bg-[#8a87d8]/10"
                                    : "bg-[#8a87d8]/10"
                                } border border-[#8a87d8]/20`}
                              >
                                {p.icon}
                                <div className="ml-3">
                                  <div
                                    className={`font-medium ${
                                      theme === "dark"
                                        ? "text-white"
                                        : "text-black"
                                    }`}
                                  >
                                    {p.name}
                                  </div>
                                  <div
                                    className={`text-sm ${
                                      theme === "dark"
                                        ? "text-white/60"
                                        : "text-black/60"
                                    }`}
                                  >
                                    {p.version}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Benefits */}
                      <div className="mb-8">
                        <h4
                          className={`text-lg font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-4`}
                        >
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {platform.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                              <Star className="h-4 w-4 text-[#8a87d8] mr-2" />
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-white/70"
                                    : "text-black/70"
                                }`}
                              >
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to="/contact"
                          className="bg-[#8a87d8] text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group hover:bg-[#a5a3e0]"
                        >
                          Try {platform.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {platform.id === "mobile-apps" && (
                          <div className="flex gap-2">
                            <button
                              className={`${
                                theme === "dark"
                                  ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                                  : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                              } px-6 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide border border-[#8a87d8]/20 flex items-center`}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              iOS App
                            </button>
                            <button
                              className={`${
                                theme === "dark"
                                  ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                                  : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                              } px-6 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide border border-[#8a87d8]/20 flex items-center`}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Android
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="relative">
                        {platform.id === "student-portal" ? (
                          <div className="relative">
                            <div className="bg-gradient-to-br from-[#8a87d8]/20 to-[#c1bfea]/20 rounded-2xl p-8 aspect-video flex items-center justify-center">
                              <div className="text-center">
                                <Monitor className="h-16 w-16 text-[#8a87d8] mx-auto mb-4" />
                                <h4
                                  className={`text-xl font-semibold ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-black"
                                  } mb-2`}
                                >
                                  Student Portal Dashboard
                                </h4>
                                <p
                                  className={`${
                                    theme === "dark"
                                      ? "text-white/70"
                                      : "text-black/70"
                                  }`}
                                >
                                  Personalized interface for every student
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="bg-gradient-to-br from-[#8a87d8]/20 to-[#c1bfea]/20 rounded-2xl p-8 aspect-video flex items-center justify-center">
                              <div className="flex items-center justify-center space-x-8">
                                <div className="text-center">
                                  <Apple className="h-12 w-12 text-[#8a87d8] mx-auto mb-2" />
                                  <span
                                    className={`text-sm ${
                                      theme === "dark"
                                        ? "text-white/70"
                                        : "text-black/70"
                                    }`}
                                  >
                                    iOS App
                                  </span>
                                </div>
                                <div className="text-center">
                                  <Smartphone className="h-12 w-12 text-[#8a87d8] mx-auto mb-2" />
                                  <span
                                    className={`text-sm ${
                                      theme === "dark"
                                        ? "text-white/70"
                                        : "text-black/70"
                                    }`}
                                  >
                                    Android App
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-medium tracking-widest text-[#8a87d8] uppercase">
              Success Stories
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Trusted by leading
              <br />
              <span className="text-[#8a87d8]">institutions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                    : "bg-black/5 border-black/10"
                } backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } mb-6 leading-relaxed italic`}
                >
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#8a87d8] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-medium tracking-widest text-[#8a87d8] uppercase">
              Seamless Integration
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Everything works
              <br />
              <span className="text-[#8a87d8]">together perfectly</span>
            </h2>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto mt-6`}
            >
              All modules share data seamlessly, eliminating silos and providing
              a unified experience for administrators, teachers, and students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8a87d8]/20 via-transparent to-[#c1bfea]/20 blur-3xl opacity-50 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border p-12 overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3
                    className={`text-3xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-6`}
                  >
                    Data flows seamlessly between all modules
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Student data automatically syncs across all modules",
                      "Financial transactions update in real-time",
                      "Academic records integrate with results management",
                      "Mobile apps sync with web platform instantly",
                      "Single sign-on across all platforms",
                      "Unified reporting and analytics",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-[#8a87d8] mr-3 flex-shrink-0 mt-0.5" />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        icon: <Users className="h-6 w-6" />,
                        label: "Students",
                      },
                      {
                        icon: <BookOpen className="h-6 w-6" />,
                        label: "Academics",
                      },
                      {
                        icon: <CreditCard className="h-6 w-6" />,
                        label: "Finance",
                      },
                      {
                        icon: <BarChart className="h-6 w-6" />,
                        label: "Analytics",
                      },
                      {
                        icon: <Smartphone className="h-6 w-6" />,
                        label: "Mobile",
                      },
                      {
                        icon: <Settings className="h-6 w-6" />,
                        label: "Admin",
                      },
                    ].map((module, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-4 rounded-xl ${
                          theme === "dark"
                            ? "bg-[#8a87d8]/10"
                            : "bg-[#8a87d8]/10"
                        } border border-[#8a87d8]/20 text-center group hover:scale-105 transition-transform duration-300`}
                      >
                        <div className="text-[#8a87d8] mb-2 flex justify-center">
                          {module.icon}
                        </div>
                        <div
                          className={`text-xs font-medium ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {module.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient
                          id="connectionGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#8a87d8"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#c1bfea"
                            stopOpacity="0.3"
                          />
                        </linearGradient>
                      </defs>
                      {/* Animated connection lines */}
                      <motion.path
                        d="M 20 20 Q 50 10 80 20 Q 90 50 80 80 Q 50 90 20 80 Q 10 50 20 20"
                        fill="none"
                        stroke="url(#connectionGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#8a87d8]/10 border border-[#8a87d8]/20 backdrop-blur-xl mb-6"
              >
                <Lightbulb className="h-4 w-4 text-[#8a87d8] mr-2" />
                <span className="text-[#8a87d8] text-sm font-medium">
                  Ready to Transform Your Institution?
                </span>
              </motion.div>

              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Experience the future of
                <br />
                <span className="text-[#8a87d8]">education management</span>
              </h2>

              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8 text-lg leading-relaxed`}
              >
                Join hundreds of institutions across Uganda that have already
                transformed their operations with Tredumo's comprehensive
                platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#8a87d8] text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg tracking-wide flex items-center justify-center group hover:bg-[#a5a3e0] hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg tracking-wide border border-[#8a87d8]/20 hover:border-[#8a87d8]/40`}
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#8a87d8] mr-2" />
                  <span
                    className={
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }
                  >
                    30-day free trial
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#8a87d8] mr-2" />
                  <span
                    className={
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }
                  >
                    No setup fees
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-[#8a87d8] mr-2" />
                  <span
                    className={
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }
                  >
                    Local support
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
