import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Set up state for the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage (optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Save theme to localStorage and apply the dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {isDarkMode ? (
        <span role="img" aria-label="Sun">🌞</span>
      ) : (
        <span role="img" aria-label="Moon">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;


