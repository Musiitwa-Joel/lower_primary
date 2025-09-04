import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Calendar,
  Users,
  Award,
  BookOpen,
  Camera,
  Heart,
  Shield,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface RequirementsPageProps {
  theme: string;
  toggleTheme: () => void;
}

const RequirementsPage: React.FC<RequirementsPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedGrade, setSelectedGrade] = useState("S1");
  const schoolConfig = getCurrentSchoolConfig();

  const gradeRequirements = {
    S1: {
      academicRequirements: [
        "Primary Leaving Examination (PLE) certificate",
        "Minimum aggregate of 12 points or better",
        "Good performance in English and Mathematics",
        "School recommendation letter",
      ],
      documents: [
        "Completed application form",
        "Birth certificate (original and copy)",
        "PLE certificate (original and copy)",
        "Primary school report cards",
        "Passport-size photographs (4 copies)",
        "Medical certificate from registered doctor",
        "Immunization records",
        "Parent/Guardian identification",
      ],
      additionalRequirements: [
        "Entrance interview with student and parents",
        "Assessment test in English and Mathematics",
        "Character reference from previous school",
        "Proof of residence",
      ],
    },
    S2: {
      academicRequirements: [
        "S1 report card with good performance",
        "Minimum average of 70% in core subjects",
        "Good conduct record",
        "Transfer certificate from previous school",
      ],
      documents: [
        "Completed application form",
        "Birth certificate",
        "S1 academic transcripts",
        "Transfer certificate",
        "Passport photographs",
        "Medical certificate",
        "Parent/Guardian identification",
      ],
      additionalRequirements: [
        "Placement test in core subjects",
        "Interview assessment",
        "Previous school recommendation",
      ],
    },
    S5: {
      academicRequirements: [
        "Uganda Certificate of Education (UCE)",
        "Minimum of 5 passes including English and Mathematics",
        "Relevant O-level subjects for chosen A-level combination",
        "Good conduct certificate",
      ],
      documents: [
        "Completed application form",
        "UCE certificate (original and copy)",
        "O-level transcripts",
        "Birth certificate",
        "Passport photographs",
        "Medical certificate",
        "Character reference letter",
      ],
      additionalRequirements: [
        "Subject combination selection",
        "Academic interview",
        "Career guidance session",
      ],
    },
  };

  const currentRequirements =
    gradeRequirements[selectedGrade as keyof typeof gradeRequirements];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description:
        "Complete and submit your online application with all required documents",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      timeframe: "1 day",
    },
    {
      step: "2",
      title: "Document Verification",
      description: "Our admissions team verifies all submitted documents",
      icon: <Shield className="h-6 w-6 text-green-500" />,
      timeframe: "2-3 days",
    },
    {
      step: "3",
      title: "Assessment & Interview",
      description: "Attend entrance assessment and interview session",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      timeframe: "1 week",
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Receive admission decision and enrollment instructions",
      icon: <Award className="h-6 w-6 text-orange-500" />,
      timeframe: "1-2 weeks",
    },
  ];

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2024", status: "open" },
    {
      event: "Early Decision Deadline",
      date: "March 15, 2024",
      status: "upcoming",
    },
    {
      event: "Regular Decision Deadline",
      date: "May 15, 2024",
      status: "upcoming",
    },
    { event: "Entrance Exams", date: "June 1-15, 2024", status: "scheduled" },
    { event: "Admission Results", date: "June 30, 2024", status: "scheduled" },
    {
      event: "Enrollment Deadline",
      date: "July 15, 2024",
      status: "scheduled",
    },
  ];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Admission Requirements | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Learn about admission requirements for ${schoolConfig.name}. Academic qualifications, required documents, and application process for all grade levels.`}
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
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
            alt="Admission Requirements"
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
              Admission Guidelines
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Admission <span className="text-primary-500">Requirements</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Everything you need to know about joining {schoolConfig.name}.
              Clear requirements, simple process, and dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grade Selection */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Select Grade Level
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              }`}
            >
              Requirements vary by grade level. Choose your target grade to see
              specific requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(gradeRequirements).map((grade) => (
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
                <div
                  className={`text-sm ${
                    selectedGrade === grade
                      ? "text-white/80"
                      : theme === "dark"
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
                  {grade === "S1"
                    ? "Primary to Secondary"
                    : grade === "S2"
                    ? "Transfer Entry"
                    : "O-Level to A-Level"}
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
            <div
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } border backdrop-blur-xl`}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Academic Requirements
                </h3>
              </div>
              <ul className="space-y-4">
                {currentRequirements.academicRequirements.map(
                  (requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {requirement}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Required Documents */}
            <div
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } border backdrop-blur-xl`}
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-green-500 mr-3" />
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-4">
                {currentRequirements.documents.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <FileText className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span
                      className={`${
                        theme === "dark" ? "text-white/80" : "text-black/80"
                      }`}
                    >
                      {document}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Requirements */}
            <div
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } border backdrop-blur-xl`}
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-500 mr-3" />
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Additional Steps
                </h3>
              </div>
              <ul className="space-y-4">
                {currentRequirements.additionalRequirements.map(
                  (requirement, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {requirement}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
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
              Application Process
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Our streamlined process ensures a smooth admission experience
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
                className={`text-center p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border transition-all duration-300 hover:scale-105`}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-full ${
                      theme === "dark" ? "bg-white/10" : "bg-black/10"
                    } flex items-center justify-center mx-auto`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-3`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-4 leading-relaxed`}
                >
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

      {/* Important Dates */}
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
              Important Dates
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Mark your calendar with these crucial admission deadlines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border backdrop-blur-xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="h-6 w-6 text-primary-500" />
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "open"
                        ? "bg-green-500/20 text-green-500"
                        : item.status === "upcoming"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-blue-500/20 text-blue-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-2`}
                >
                  {item.event}
                </h3>
                <p className={`text-primary-500 font-medium`}>{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Ready to Apply?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Start your application today and join our community of
                excellence at {schoolConfig.name}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Checklist
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

export default RequirementsPage;
