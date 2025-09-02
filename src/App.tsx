import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import SchoolHomePage from "./pages/SchoolHomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
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
          {/* <Route path="/tredumo" element={<HomePage theme={theme} />} /> */}
          <Route
            path="/case-studies"
            element={<CaseStudiesPage theme={theme} />}
          />
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
