import React from "react";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Check if dark mode is set in localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 bg-indigo-900 text-sm text-white dark:bg-gray-800 dark:text-gray-200 rounded-md"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;
