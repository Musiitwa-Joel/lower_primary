import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  UserPlus,
  Upload,
  CheckCircle,
  AlertCircle,
  FileText,
  Camera,
  Users,
  BookOpen,
  ArrowRight,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface OnlineApplicationPageProps {
  theme: string;
  toggleTheme: () => void;
}

const OnlineApplicationPage: React.FC<OnlineApplicationPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const schoolConfig = getCurrentSchoolConfig();

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      icon: <UserPlus className="h-5 w-5" />,
      description: "Basic student details",
    },
    {
      id: 2,
      title: "Academic Background",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Previous education history",
    },
    {
      id: 3,
      title: "Parent/Guardian Info",
      icon: <Users className="h-5 w-5" />,
      description: "Contact and family details",
    },
    {
      id: 4,
      title: "Document Upload",
      icon: <Upload className="h-5 w-5" />,
      description: "Required certificates",
    },
    {
      id: 5,
      title: "Review & Submit",
      icon: <CheckCircle className="h-5 w-5" />,
      description: "Final review",
    },
  ];

  const applicationBenefits = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Quick Process",
      description: "Complete your application in under 30 minutes",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Secure & Safe",
      description: "Your data is protected with bank-level security",
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: "Instant Confirmation",
      description: "Receive immediate application confirmation",
    },
  ];

  const handleSubmit = () => {
    const id = `APP${Date.now().toString().slice(-6)}`;
    setApplicationId(id);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
        <MegaNavbar theme={theme} toggleTheme={toggleTheme} />
        
        <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
          <div className="max-w-4xl mx-auto text-center" style={{ marginTop: "6rem" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>

              <div>
                <h1 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
                  Application Submitted Successfully!
                </h1>
                <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} mb-6`}>
                  Thank you for applying to {schoolConfig.name}. Your application has been received and is being processed.
                </p>
                <div className={`inline-block px-6 py-3 rounded-xl ${theme === "dark" ? "bg-primary-500/20" : "bg-primary-500/20"}`}>
                  <span className="text-primary-500 font-bold text-lg">
                    Application ID: {applicationId}
                  </span>
                </div>
              </div>

              <div className={`max-w-2xl mx-auto p-8 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border text-left`}>
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Application Review",
                      description: "Our admissions team will review your application within 3-5 business days",
                      timeframe: "3-5 days"
                    },
                    {
                      step: "2", 
                      title: "Interview Invitation",
                      description: "If shortlisted, you'll receive an interview invitation via email",
                      timeframe: "1 week"
                    },
                    {
                      step: "3",
                      title: "Admission Decision",
                      description: "Final admission decision will be communicated within 2 weeks",
                      timeframe: "2 weeks"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                          {item.title}
                        </div>
                        <div className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-1`}>
                          {item.description}
                        </div>
                        <div className="text-xs text-primary-500 font-medium">
                          Expected: {item.timeframe}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors font-medium">
                  Track Application Status
                </button>
                <button className={`${theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} px-8 py-4 rounded-full transition-colors font-medium`}>
                  Download Confirmation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <MegaFooter theme={theme} />
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Online Application | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Apply online to ${schoolConfig.name}. Complete your admission application securely and track your progress through our streamlined process.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Online Application"
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
              Join Our Community
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Online <span className="text-primary-500">Application</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Start your journey with {schoolConfig.name}. Our streamlined application process makes it easy to apply and track your progress.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {applicationBenefits.map((benefit, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}>
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {benefit.icon}
                </div>
                <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                  {benefit.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center min-w-0">
                <div className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-primary-500 text-white scale-110"
                      : theme === "dark"
                      ? "bg-white/10 text-white"
                      : "bg-black/10 text-black"
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <div className={`font-semibold text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {step.title}
                    </div>
                    <div className={`text-xs ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id
                      ? "bg-primary-500"
                      : theme === "dark"
                      ? "bg-white/20"
                      : "bg-black/20"
                  } transition-colors`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 md:p-12 rounded-3xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border backdrop-blur-xl`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-8`}>
                {steps[currentStep - 1].title}
              </h2>

              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                      placeholder="Enter last name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white" : "bg-black/5 border-black/20 text-black"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Gender *
                    </label>
                    <select className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white" : "bg-black/5 border-black/20 text-black"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Nationality *
                    </label>
                    <input
                      type="text"
                      defaultValue="Ugandan"
                      className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        Previous School *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                        placeholder="Name of previous school"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                        Grade Applying For *
                      </label>
                      <select className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white" : "bg-black/5 border-black/20 text-black"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}>
                        <option value="">Select Grade</option>
                        {schoolConfig.grades.map((grade) => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                      Previous Academic Performance
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-white/5 border-white/20 text-white placeholder-white/50" : "bg-black/5 border-black/20 text-black placeholder-black/50"} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                      placeholder="Briefly describe your academic achievements and performance..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className={`px-8 py-3 rounded-xl transition-colors ${
                    currentStep === 1
                      ? "opacity-50 cursor-not-allowed"
                      : theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  Previous
                </button>

                {currentStep === steps.length ? (
                  <button
                    onClick={handleSubmit}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-12 py-3 rounded-xl transition-colors font-medium flex items-center"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl transition-colors font-medium flex items-center"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default OnlineApplicationPage;