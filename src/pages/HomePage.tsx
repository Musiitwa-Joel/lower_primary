import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import LocalSEOHead from "../components/SEO/LocalSEOHead";
import StructuredData from "../components/SEO/StructuredData";
import TuitionCalculator from "../components/features/TuitionCalculator";
import VirtualCampusTour from "../components/features/VirtualCampusTour";
import TeacherShowcase from "../components/features/TeacherShowcase";
import GoogleBusinessIntegration from "../components/features/GoogleBusinessIntegration";
import LocalContentOptimizer from "../components/features/LocalContentOptimizer";
import NAP from "../components/common/NAP";
import { getCurrentSchoolConfig } from "../config/schoolConfig";
import { useLocalSEO } from "../hooks/useLocalSEO";

interface HomePageProps {
  theme: string;
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const schoolConfig = getCurrentSchoolConfig();
  
  // Use local SEO hook
  useLocalSEO({
    schoolConfig,
    pageTitle: "Home",
    pageDescription: `${schoolConfig.description} Located in ${schoolConfig.address.city}, ${schoolConfig.address.country}.`,
    pageKeywords: [
      'education management platform',
      'school management system',
      'student information system',
      'Uganda education technology',
      'East Africa EdTech'
    ]
  });

  return (
    <div className={`${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
      {/* SEO Components */}
      <LocalSEOHead
        schoolConfig={schoolConfig}
        pageTitle="Transform Education Management"
        pageDescription={`${schoolConfig.description} Serving ${schoolConfig.address.city} and surrounding areas.`}
        pageKeywords={[
          'education management platform',
          'school management system Uganda',
          'student information system',
          `education technology ${schoolConfig.address.city}`,
          'EdTech solutions East Africa'
        ]}
      />
      
      <StructuredData
        schoolConfig={schoolConfig}
        pageType="home"
        pageTitle="Education Management Platform"
        pageDescription={schoolConfig.description}
      />

      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Features Section */}
      <Features />

      {/* Local Content Section */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

      {/* Interactive Features Section */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-[#8a87d8] uppercase">
              Interactive Features
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 tracking-tight`}>
              Experience our platform
              <br />
              <span className="text-[#8a87d8]">before you commit</span>
            </h2>
          </div>

          {/* Tuition Calculator */}
          <TuitionCalculator schoolConfig={schoolConfig} theme={theme} />

          {/* Virtual Campus Tour */}
          <VirtualCampusTour schoolConfig={schoolConfig} theme={theme} />

          {/* Teacher Showcase */}
          <TeacherShowcase schoolConfig={schoolConfig} theme={theme} />
        </div>
      </section>

      {/* Dashboard Section */}
      <Dashboard />

      {/* NAP Footer Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Visit {schoolConfig.name}
              </h3>
              <NAP 
                schoolConfig={schoolConfig} 
                variant="compact" 
                theme={theme}
                className="mb-8"
              />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-6`}>
                Quick Contact
              </h3>
              <NAP 
                schoolConfig={schoolConfig} 
                variant="minimal" 
                theme={theme}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;