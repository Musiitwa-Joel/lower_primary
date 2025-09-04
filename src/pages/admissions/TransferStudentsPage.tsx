import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRightLeft,
  FileText,
  CheckCircle,
  AlertCircle,
  Users,
  BookOpen,
  Calendar,
  Award,
  Clock,
  Target,
  Download,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface TransferRequirement {
  grade: string;
  academicRequirements: string[];
  documents: string[];
  assessments: string[];
  timeline: string;
  bridgingCourses?: string[];
}

interface TransferStudentsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const TransferStudentsPage: React.FC<TransferStudentsPageProps> = ({ theme, toggleTheme }) => {
  const [selectedGrade, setSelectedGrade] = useState("S2");
  const [applicationStep, setApplicationStep] = useState(1);
  const schoolConfig = getCurrentSchoolConfig();

  const transferRequirements: { [key: string]: TransferRequirement } = {
    S2: {
      grade: "S2",
      academicRequirements: [
        "Completed S1 with minimum 70% average",
        "Good conduct record from previous school",
        "Strong performance in core subjects",
        "No disciplinary issues"
      ],
      documents: [
        "Completed transfer application form",
        "S1 academic transcripts (certified)",
        "Transfer certificate from previous school",
        "Birth certificate (copy)",
        "Passport photographs (4 copies)",
        "Medical certificate",
        "Parent/Guardian identification"
      ],
      assessments: [
        "Placement test in Mathematics and English",
        "Subject-specific assessments",
        "Interview with academic coordinator",
        "Orientation session"
      ],
      timeline: "2-3 weeks processing time",
      bridgingCourses: ["Study Skills Workshop", "School Culture Orientation"]
    },
    S3: {
      grade: "S3",
      academicRequirements: [
        "Completed S1-S2 with minimum 75% average",
        "Strong foundation in core subjects",
        "Good conduct certificate",
        "Recommendation from previous school"
      ],
      documents: [
        "Transfer application form",
        "S1-S2 academic transcripts",
        "Transfer certificate",
        "Character reference letter",
        "Birth certificate",
        "Medical certificate",
        "Passport photographs"
      ],
      assessments: [
        "Comprehensive placement tests",
        "Subject selection guidance",
        "Academic interview",
        "Learning style assessment"
      ],
      timeline: "3-4 weeks processing time",
      bridgingCourses: ["Advanced Study Methods", "Subject-specific catch-up"]
    },
    S4: {
      grade: "S4",
      academicRequirements: [
        "Completed S1-S3 with minimum 80% average",
        "Excellent performance in chosen subjects",
        "Clear academic progression record",
        "Strong recommendation letters"
      ],
      documents: [
        "Detailed transfer application",
        "Complete academic transcripts (S1-S3)",
        "Transfer certificate",
        "Subject teacher recommendations",
        "Academic portfolio",
        "Medical certificate",
        "Character reference"
      ],
      assessments: [
        "Advanced placement examinations",
        "Subject mastery tests",
        "Academic interview panel",
        "Learning objectives alignment"
      ],
      timeline: "4-5 weeks processing time",
      bridgingCourses: ["Exam Preparation Intensive", "Academic Excellence Program"]
    },
    S5: {
      grade: "S5",
      academicRequirements: [
        "Uganda Certificate of Education (UCE)",
        "Minimum 5 passes including English and Mathematics",
        "Relevant O-level subjects for A-level combination",
        "Strong academic track record"
      ],
      documents: [
        "A-level application form",
        "UCE certificate (original and copy)",
        "Complete O-level transcripts",
        "Subject combination form",
        "Career guidance assessment",
        "Medical certificate",
        "Character reference"
      ],
      assessments: [
        "A-level readiness assessment",
        "Subject-specific entrance tests",
        "Career counseling session",
        "Academic planning meeting"
      ],
      timeline: "3-4 weeks processing time",
      bridgingCourses: ["A-level Preparation Course", "Study Skills for Advanced Learning"]
    }
  };

  const transferBenefits = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Seamless Integration",
      description: "Comprehensive orientation and support to help you settle into our academic community"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: "Academic Support",
      description: "Bridging courses and tutoring to ensure you're up to speed with our curriculum"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Peer Mentorship",
      description: "Buddy system pairing you with current students for social and academic support"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Credit Recognition",
      description: "Fair assessment and recognition of your previous academic achievements"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Initial Inquiry",
      description: "Contact our admissions office to discuss your transfer intentions",
      duration: "1 day"
    },
    {
      step: "2", 
      title: "Document Submission",
      description: "Submit all required documents and completed application form",
      duration: "1 week"
    },
    {
      step: "3",
      title: "Academic Assessment",
      description: "Complete placement tests and academic interviews",
      duration: "1-2 weeks"
    },
    {
      step: "4",
      title: "Decision & Enrollment",
      description: "Receive admission decision and complete enrollment process",
      duration: "1 week"
    }
  ];

  const currentRequirement = transferRequirements[selectedGrade];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Transfer Students | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Transfer to ${schoolConfig.name} with our comprehensive support system. Learn about requirements, assessments, and integration support for transfer students.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} transfer students, school transfer, change schools, transfer requirements, ${schoolConfig.address.city} school transfer`}
        />
        <meta property="og:title" content={`Transfer Students | ${schoolConfig.name}`} />
        <meta property="og:description" content={`Comprehensive support for students transferring to ${schoolConfig.name}. Learn about our transfer process and integration programs.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/admissions/transfer" />
        <link rel="canonical" href="https://tredumo.com/admissions/transfer" />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Transfer Students"
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
              Seamless Transition
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Transfer <span className="text-primary-500">Students</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Join our academic community with comprehensive support designed to ensure your smooth transition and continued success at {schoolConfig.name}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transfer Benefits */}
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
              Why Transfer to {schoolConfig.shortName}?
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              We provide comprehensive support to ensure your successful integration into our academic community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transferBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {benefit.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-Specific Requirements */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Transfer Requirements by Grade
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Requirements vary by grade level. Select your target grade to see specific requirements.
            </p>
          </motion.div>

          {/* Grade Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(transferRequirements).map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-8 py-4 rounded-xl transition-all duration-300 ${
                  selectedGrade === grade
                    ? "bg-primary-500 text-white scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-black/10 hover:bg-black/20 text-black"
                }`}
              >
                <div className="font-semibold">{grade}</div>
                <div className={`text-sm ${selectedGrade === grade ? "text-white/80" : theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                  {grade === "S2" ? "Early Secondary" : grade === "S3" ? "Mid Secondary" : grade === "S4" ? "Pre-Exam" : "A-Level Entry"}
                </div>
              </button>
            ))}
          </div>

          {/* Requirements Details */}
          <motion.div
            key={selectedGrade}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Academic Requirements */}
            <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}>
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Academic Requirements
                </h3>
              </div>
              <ul className="space-y-4">
                {currentRequirement.academicRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}>
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-green-500 mr-3" />
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-4">
                {currentRequirement.documents.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <FileText className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {document}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assessment Process */}
            <div className={`p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-500 mr-3" />
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Assessment Process
                </h3>
              </div>
              <ul className="space-y-4">
                {currentRequirement.assessments.map((assessment, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                      {assessment}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`mt-6 p-4 rounded-lg ${theme === "dark" ? "bg-primary-500/10 border-primary-500/20" : "bg-primary-500/10 border-primary-500/20"} border`}>
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary-500 mr-2" />
                  <span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Processing Timeline
                  </span>
                </div>
                <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                  {currentRequirement.timeline}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bridging Courses */}
          {currentRequirement.bridgingCourses && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mt-12 p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
            >
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6 text-center`}>
                Bridging Courses for {selectedGrade} Transfers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentRequirement.bridgingCourses.map((course, index) => (
                  <div key={index} className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/5" : "bg-black/5"} text-center`}>
                    <Award className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                    <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                      {course}
                    </h4>
                    <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Specialized support to help you integrate smoothly
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
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
              Transfer Application Process
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Our streamlined process ensures a smooth transition to {schoolConfig.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
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
                    <ArrowRightLeft className="h-8 w-8 text-primary-500" />
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
                  Duration: {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 ${theme === "dark" ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20" : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"} relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                  Transfer Success Stories
                </h2>
                <div className="space-y-6">
                  <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    <div className="flex items-center mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?auto=format&fit=crop&q=80"
                        alt="Sarah Nakato"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                          Sarah Nakato
                        </h4>
                        <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          Transferred to S3 • Now S6 Head Girl
                        </p>
                      </div>
                    </div>
                    <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                      "The transfer process was smooth and supportive. The bridging courses helped me catch up quickly, and I've thrived academically ever since."
                    </p>
                  </div>

                  <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                    <div className="flex items-center mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                        alt="David Mukasa"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                          David Mukasa
                        </h4>
                        <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          Transferred to S5 • University Scholarship Winner
                        </p>
                      </div>
                    </div>
                    <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                      "Transferring here was the best decision. The academic support and quality of teaching helped me secure a university scholarship."
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-2">95%</div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Transfer Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-2">2-4</div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Weeks Integration
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Student Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-2">150+</div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Successful Transfers
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-green-500/10 border-green-500/20" : "bg-green-500/10 border-green-500/20"} border`}>
                  <h4 className={`font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Transfer Support Package
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Dedicated transfer coordinator",
                      "Academic catch-up support",
                      "Peer mentorship program",
                      "Social integration activities",
                      "Regular progress monitoring"
                    ].map((support, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {support}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Transfer?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                Start your transfer application today and join our community of academic excellence at {schoolConfig.name}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Start Transfer Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Transfer Guide
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

export default TransferStudentsPage;