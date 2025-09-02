import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import MegaNavbar from "../components/navigation/MegaNavbar";
import MegaFooter from "../components/navigation/MegaFooter";
import LocalSEOHead from "../components/SEO/LocalSEOHead";
import StructuredData from "../components/SEO/StructuredData";
import TuitionCalculator from "../components/features/TuitionCalculator";
import VirtualCampusTour from "../components/features/VirtualCampusTour";
import TeacherShowcase from "../components/features/TeacherShowcase";
import DigitalProspectus from "../components/features/DigitalProspectus";
import StudentPortal from "../components/features/StudentPortal";
import EventsCalendar from "../components/features/EventsCalendar";
import WelfareHub from "../components/features/WelfareHub";
import AIChatbot from "../components/features/AIChatbot";
import ParentTestimonials from "../components/features/ParentTestimonials";
import CurriculumExplorer from "../components/features/CurriculumExplorer";
import NewsMarquee from "../components/features/NewsMarquee";
import QuickLinksPanel from "../components/features/QuickLinksPanel";
import UpcomingEventsWidget from "../components/features/UpcomingEventsWidget";
import PrincipalMessage from "../components/features/PrincipalMessage";
import OnlineAdmissionSystem from "../components/features/OnlineAdmissionSystem";
import ResultsPortal from "../components/features/ResultsPortal";
import FacilitiesGallery from "../components/features/FacilitiesGallery";
import StudentHousesSystem from "../components/features/StudentHousesSystem";
import VirtualClassDemo from "../components/features/VirtualClassDemo";
import InteractiveCampusMap from "../components/features/InteractiveCampusMap";
import CareerCounselingHub from "../components/features/CareerCounselingHub";
import FeePaymentGateway from "../components/features/FeePaymentGateway";
import GoogleBusinessIntegration from "../components/features/GoogleBusinessIntegration";
import LocalContentOptimizer from "../components/features/LocalContentOptimizer";
import NAP from "../components/common/NAP";
import { getCurrentSchoolConfig } from "../config/schoolConfig";
import { useLocalSEO } from "../hooks/useLocalSEO";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

interface SchoolHomePageProps {
  theme: string;
  toggleTheme: () => void;
}

const SchoolHomePage: React.FC<SchoolHomePageProps> = ({
  theme,
  toggleTheme,
}) => {
  const schoolConfig = getCurrentSchoolConfig();

  // Use local SEO hook
  useLocalSEO({
    schoolConfig,
    pageTitle: "Home",
    pageDescription: `${schoolConfig.description} Located in ${schoolConfig.address.city}, ${schoolConfig.address.country}.`,
    pageKeywords: [
      "international school",
      "best school",
      "quality education",
      "Cambridge curriculum",
      "boarding school",
    ],
  });

  const heroStats = [
    { label: "Students", value: "1,200+", icon: <Users className="h-5 w-5" /> },
    { label: "Teachers", value: "85+", icon: <Award className="h-5 w-5" /> },
    { label: "Success Rate", value: "98%", icon: <Star className="h-5 w-5" /> },
    {
      label: "Years of Excellence",
      value: `${new Date().getFullYear() - schoolConfig.established}+`,
      icon: <BookOpen className="h-5 w-5" />,
    },
  ];

  const achievements = [
    "Top performing school in the region",
    "Cambridge International accreditation",
    "Award-winning STEM programs",
    "100% university placement rate",
    "State-of-the-art facilities",
    "Experienced international faculty",
  ];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      {/* SEO Components */}
      <LocalSEOHead
        schoolConfig={schoolConfig}
        pageTitle={`Welcome to ${schoolConfig.name}`}
        pageDescription={`${schoolConfig.description} Premier education in ${schoolConfig.address.city}, ${schoolConfig.address.country}.`}
        pageKeywords={[
          "international school",
          "best school",
          "quality education",
          "Cambridge curriculum",
          "boarding school",
          `school in ${schoolConfig.address.city}`,
          `education ${schoolConfig.address.city}`,
        ]}
      />
      {/* News Marquee */}
      {/* <div className="fixed top-20 left-0 right-0 z-40">
      </div> */}
      <StructuredData
        schoolConfig={schoolConfig}
        pageType="home"
        pageTitle={schoolConfig.name}
        pageDescription={schoolConfig.description}
      />
      <NewsMarquee theme={theme} />
      {/* Navigation */}
      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />
      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center pt-16 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } overflow-hidden`}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
            alt={`${schoolConfig.name} Campus`}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-r from-black/90 via-black/70 to-black/50"
                : "bg-gradient-to-r from-white/90 via-white/70 to-white/50"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-primary-500/20 text-primary-500 mb-6"
                >
                  Established {schoolConfig.established} •{" "}
                  {schoolConfig.address.city}, {schoolConfig.address.country}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`text-5xl sm:text-6xl md:text-7xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } leading-tight`}
                >
                  {schoolConfig.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`text-xl md:text-2xl ${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } font-light leading-relaxed`}
                >
                  {schoolConfig.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`text-lg ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } max-w-xl leading-relaxed`}
                >
                  {schoolConfig.description}
                </motion.p>
              </div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span
                      className={`${
                        theme === "dark" ? "text-white/90" : "text-black/90"
                      }`}
                    >
                      {achievement}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium`}
                >
                  Schedule Campus Tour
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`p-6 rounded-2xl text-center ${
                    theme === "dark"
                      ? "bg-white/10 backdrop-blur-xl border border-white/20"
                      : "bg-black/10 backdrop-blur-xl border border-black/20"
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Quick Links Panel */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <QuickLinksPanel theme={theme} />
        </div>
      </section>
      {/* Principal's Message */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <PrincipalMessage theme={theme} />
        </div>
      </section>
      {/* Interactive Features Grid */}
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
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Explore Our School
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4`}
            >
              Interactive School Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <TuitionCalculator schoolConfig={schoolConfig} theme={theme} />
            {/* Upcoming Events Widget */}
            <UpcomingEventsWidget theme={theme} />

            <VirtualCampusTour schoolConfig={schoolConfig} theme={theme} />
          </div>

          {/* Online Admission System */}
          <OnlineAdmissionSystem theme={theme} />

          {/* Results Portal */}
          <ResultsPortal theme={theme} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <DigitalProspectus schoolConfig={schoolConfig} theme={theme} />
            <StudentPortal theme={theme} />
          </div>

          {/* Virtual Class Demo */}
          <VirtualClassDemo theme={theme} />

          <div className="mb-16">
            <TeacherShowcase schoolConfig={schoolConfig} theme={theme} />
          </div>

          {/* Facilities Gallery */}
          <FacilitiesGallery theme={theme} />

          {/* Interactive Campus Map */}
          <InteractiveCampusMap theme={theme} />

          {/* Student Houses System */}
          <StudentHousesSystem theme={theme} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <EventsCalendar schoolConfig={schoolConfig} theme={theme} />
            <WelfareHub schoolConfig={schoolConfig} theme={theme} />
          </div>

          {/* Career Counseling Hub */}
          <CareerCounselingHub theme={theme} />

          {/* Fee Payment Gateway */}
          <FeePaymentGateway theme={theme} />

          <div className="mb-16">
            <CurriculumExplorer schoolConfig={schoolConfig} theme={theme} />
          </div>

          <div className="mb-16">
            <ParentTestimonials schoolConfig={schoolConfig} theme={theme} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LocalContentOptimizer
              schoolConfig={schoolConfig}
              theme={theme}
              pageType="home"
            />
            <GoogleBusinessIntegration
              schoolConfig={schoolConfig}
              theme={theme}
            />
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
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
                Ready to Join Our Community?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Take the first step towards your child's bright future at{" "}
                {schoolConfig.name}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Start Application Process
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium`}
                >
                  Download Prospectus
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <MegaFooter theme={theme} />
      {/* AI Chatbot */}
      <AIChatbot schoolConfig={schoolConfig} theme={theme} />
    </div>
  );
};

export default SchoolHomePage;
