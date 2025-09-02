import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MegaNavbar from "./components/navigation/MegaNavbar";
import MegaFooter from "./components/navigation/MegaFooter";
import HomePage from "./pages/HomePage";
import SchoolHomePage from "./pages/SchoolHomePage";
import FeaturesPage from "./pages/FeaturesPage";
import AdmissionsPage from "./pages/features/AdmissionsPage";
import FeatureRequestsPage from "./pages/developers/FeatureRequest";
import ModulesPage from "./pages/ModulesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import Cookies from "./pages/Cookies";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Company Pages
import CorporateResponsibilityPage from "./pages/company/CorporateResponsibilityPage";
import ESGPage from "./pages/company/ESGPage";
import MediaKitPage from "./pages/company/MediaKitPage";
import WhitepapersPage from "./pages/company/WhitepapersPage";
import DiversityPage from "./pages/company/DiversityPage";
import EventsPage from "./pages/company/EventsPage";

// Developer Pages
import DevelopersPage from "./pages/developers/DevelopersPage";
import BugBountyPage from "./pages/developers/BugBountyPage";
import HackathonsPage from "./pages/developers/HackathonsPage";
import ProductUpdatesPage from "./pages/developers/ProductUpdatesPage";

// Partner Pages
import PartnerPortalPage from "./pages/partners/PartnerPortalPage";
import BecomeAPartnerPage from "./pages/partners/BecomeAPartner";
import StartupProgramPage from "./pages/partners/StartupProgramPage";
import AffiliateProgram from "./pages/partners/AffiliateProgram";

// Resources Pages
import TrustCenterPage from "./pages/resources/Resources";
import ComplianceHubPage from "./pages/resources/ComplianceHubPage";
import MobileAppPage from "./pages/resources/MobileAppPage";

// Community Pages
import MerchStorePage from "./pages/community/MerchStorePage/MerchStore";
import VIPAccessPage from "./pages/community/MerchStorePage/VIPAccessPage";
import LeaderboardPage from "./pages/community/LeaderboardPage";

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
    const existingStyle = document.getElementById('theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    const style = document.createElement('style');
    style.id = 'theme-styles';
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
        <Routes>
          <Route path="/" element={<SchoolHomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/tredumo" element={<HomePage theme={theme} />} />
          <Route path="/features" element={<FeaturesPage theme={theme} />} />
          <Route
            path="/features/admissions"
            element={<AdmissionsPage theme={theme} />}
          />
          <Route
            path="/features/requests"
            element={<FeatureRequestsPage theme={theme} />}
          />

          <Route path="/modules" element={<ModulesPage theme={theme} />} />
          <Route
            path="/case-studies"
            element={<CaseStudiesPage theme={theme} />}
          />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/blog" element={<BlogPage theme={theme} />} />
          <Route path="/pricing" element={<PricingPage theme={theme} />} />
          <Route path="/careers" element={<CareersPage theme={theme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} />} />
          <Route path="/privacy" element={<PrivacyPage theme={theme} />} />
          <Route path="/cookies" element={<Cookies theme={theme} />} />
          <Route path="/terms" element={<TermsPage theme={theme} />} />

          {/* Company Routes */}
          <Route
            path="/corporate-responsibility"
            element={<CorporateResponsibilityPage theme={theme} />}
          />
          <Route path="/esg" element={<ESGPage theme={theme} />} />
          <Route path="/media-kit" element={<MediaKitPage theme={theme} />} />
          <Route
            path="/whitepapers"
            element={<WhitepapersPage theme={theme} />}
          />
          <Route path="/diversity" element={<DiversityPage theme={theme} />} />
          <Route path="/events" element={<EventsPage theme={theme} />} />

          {/* Developer Routes */}
          <Route
            path="/developers"
            element={<DevelopersPage theme={theme} />}
          />
          <Route
            path="/security/bug-bounty"
            element={<BugBountyPage theme={theme} />}
          />
          <Route
            path="/hackathons"
            element={<HackathonsPage theme={theme} />}
          />
          <Route
            path="/updates"
            element={<ProductUpdatesPage theme={theme} />}
          />

          {/* Partner Routes */}
          <Route
            path="/partners/portal"
            element={<PartnerPortalPage theme={theme} />}
          />
          <Route
            path="/partners/become-a-partner"
            element={<BecomeAPartnerPage theme={theme} />}
          />
          <Route
            path="/startup-program"
            element={<StartupProgramPage theme={theme} />}
          />
          <Route
            path="/affiliate"
            element={<AffiliateProgram theme={theme} />}
          />

          {/* Resources Routes */}
          <Route path="/trust" element={<TrustCenterPage theme={theme} />} />
          <Route
            path="/compliance"
            element={<ComplianceHubPage theme={theme} />}
          />
          <Route path="/mobile" element={<MobileAppPage theme={theme} />} />

          {/* Community Routes */}
          <Route path="/store" element={<MerchStorePage theme={theme} />} />
          <Route path="/vip" element={<VIPAccessPage theme={theme} />} />
          <Route
            path="/leaderboard"
            element={<LeaderboardPage theme={theme} />}
          />

          <Route path="*" element={<NotFoundPage theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
