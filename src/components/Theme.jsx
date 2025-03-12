import React, { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Theme = () => {
  const [theme, setTheme] = useState("light-mode");
  const [scrollProgress, setScrollProgress] = useState(0);

  // APPLY SAVED THEME
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.documentElement.className = savedTheme;
    setTheme(savedTheme);
  }, []);

  // HANDLE SCROLL PROGRESS
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TOGGLE LIGHT-DARK MODE
  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className="theme"
      style={{
        background: `conic-gradient(var(--accent-color) ${scrollProgress}%, transparent ${scrollProgress}%)`,
      }}
    >
      <button className="themebtn" onClick={toggleTheme}>
        {theme === "light-mode" ? <CiLight /> : <CiDark />}
      </button>
    </div>
  );
};

export default Theme;
