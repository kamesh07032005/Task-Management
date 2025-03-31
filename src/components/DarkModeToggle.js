import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <div className="toggle-container">
      <span className="toggle-label">Light</span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">Dark</span>
    </div>
  );
};

export default DarkModeToggle;
