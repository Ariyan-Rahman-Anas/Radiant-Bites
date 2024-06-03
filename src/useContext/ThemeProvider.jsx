import { useState, useEffect } from "react";
import { ThemeContext } from "./allContext";

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Initialize state from local storage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};