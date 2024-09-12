// src/App.jsx
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="bg-gray-900 text-white">
        <ErrorBoundary>
          <Navbar toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
