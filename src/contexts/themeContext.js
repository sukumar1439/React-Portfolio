import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const value = localStorage.getItem("mode");
    document.querySelector("body").setAttribute("data-theme", value ?? "dark");

    document.getElementById("toggle-theme").checked = value === "dark" && true;
  }, []);

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("mode", "light");
    }
    setTheme(theme);
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};