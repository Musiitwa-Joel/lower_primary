import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import SchoolHomePage from "./pages/SchoolHomePage";
import CurriculumOverviewPage from "./pages/CurriculumOverviewPage";
import SubjectsPage from "./pages/SubjectsPage";
import AssessmentExamsPage from "./pages/AssessmentExamsPage";
import DigitalLearningPage from "./pages/DigitalLearningPage";
import CoCurricularPage from "./pages/CoCurricularPage";
import CoreSubjectsPage from "./pages/CoreSubjectsPage";
import SciencesPage from "./pages/SciencesPage";
import LanguagesPage from "./pages/LanguagesPage";
import ICTTechPage from "./pages/ICTTechPage";
import CreativeArtsPage from "./pages/CreativeArtsPage";
import VocationalSkillsPage from "./pages/VocationalSkillsPage";
import PhysicalEducationPage from "./pages/PhysicalEducationPage";
import DigitalLibraryPage from "./pages/DigitalLibraryPage";
import OnlineLearningPage from "./pages/OnlineLearningPage";
import StudyMaterialsPage from "./pages/StudyMaterialsPage";
import ExamPreparationPage from "./pages/ExamPreparationPage";
import OnlineApplicationPage from "./pages/admissions/OnlineApplicationPage";
import RequirementsPage from "./pages/admissions/RequirementsPage";
import ScholarshipsPage from "./pages/admissions/ScholarshipsPage";
import FeesPage from "./pages/admissions/FeesPage";
import CampusToursPage from "./pages/admissions/CampusToursPage";
import AdmissionsFAQPage from "./pages/admissions/AdmissionsFAQPage";
import EntranceExamsPage from "./pages/admissions/EntranceExamsPage";
import TransferStudentsPage from "./pages/admissions/TransferStudentsPage";
import BursariesPage from "./pages/admissions/BursariesPage";
import PaymentPlansPage from "./pages/admissions/PaymentPlansPage";
import ContactAdmissionsPage from "./pages/admissions/ContactAdmissionsPage";
import ImportantDatesPage from "./pages/admissions/ImportantDatesPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import Cookies from "./pages/Cookies";
import TermsPage from "./pages/TermsPage";

import "../public/fonts/fonts.css";
import ScrollToTop from "../src/components/ScrollToTop";
import { generateThemeCSS, getCurrentTheme } from "./config/themeConfig";

function App() {
  const [theme, setTheme] = useState("light");
  const themeConfig = getCurrentTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    document.documentElement.classList.toggle("light", savedTheme === "light");

    // Inject theme CSS
    const existingStyle = document.getElementById("theme-styles");
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement("style");
    style.id = "theme-styles";
    style.textContent = generateThemeCSS(themeConfig);
    document.head.appendChild(style);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-[var(--dark-bg)] text-white"
            : "bg-white text-black"
        }`}
      >
        <ScrollToTop />
        {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}
        <Routes>
          <Route
            path="/"
            element={<SchoolHomePage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/academics/curriculum/overview"
            element={
              <CurriculumOverviewPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/curriculum/subjects-offered"
            element={<SubjectsPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/academics/curriculum/assessment_exams"
            element={
              <AssessmentExamsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/curriculum/digital_learning_exams"
            element={
              <DigitalLearningPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/curriculum/co-curricular_integration"
            element={
              <CoCurricularPage theme={theme} toggleTheme={toggleTheme} />
            }
          />

          {/* Subject Category Pages */}
          <Route
            path="/academics/subjects/core_subjects"
            element={
              <CoreSubjectsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/subjects/sciences"
            element={<SciencesPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/academics/subjects/languages"
            element={<LanguagesPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/academics/subjects/ict_tech"
            element={<ICTTechPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/academics/subjects/creative_arts"
            element={
              <CreativeArtsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/subjects/vocational_skills"
            element={
              <VocationalSkillsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/subjects/pe"
            element={
              <PhysicalEducationPage theme={theme} toggleTheme={toggleTheme} />
            }
          />

          {/* Academic Resource Pages */}
          <Route
            path="/academics/library"
            element={
              <DigitalLibraryPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/online"
            element={
              <OnlineLearningPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/materials"
            element={
              <StudyMaterialsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/academics/exams"
            element={
              <ExamPreparationPage theme={theme} toggleTheme={toggleTheme} />
            }
          />

          {/* Admissions Routes */}
          <Route
            path="/admissions/apply"
            element={
              <OnlineApplicationPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/requirements"
            element={
              <RequirementsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/scholarships"
            element={
              <ScholarshipsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/fees"
            element={<FeesPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/admissions/tours"
            element={
              <CampusToursPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/faq"
            element={
              <AdmissionsFAQPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/exams"
            element={
              <EntranceExamsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/transfer"
            element={
              <TransferStudentsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/bursaries"
            element={<BursariesPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/admissions/payment-plans"
            element={
              <PaymentPlansPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/contact"
            element={
              <ContactAdmissionsPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/admissions/dates"
            element={
              <ImportantDatesPage theme={theme} toggleTheme={toggleTheme} />
            }
          />
          {/* <Route path="/tredumo" element={<HomePage theme={theme} />} /> */}

          <Route path="/careers" element={<CareersPage theme={theme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} />} />
          <Route path="/privacy" element={<PrivacyPage theme={theme} />} />
          <Route path="/cookies" element={<Cookies theme={theme} />} />
          <Route path="/terms" element={<TermsPage theme={theme} />} />
        </Routes>
        {/* <Footer theme={theme} /> */}
      </div>
    </Router>
  );
}

export default App;
