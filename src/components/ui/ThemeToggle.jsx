// src/components/ui/ThemeToggle.jsx
import { useTheme } from "../../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    // Changed className here
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? (
        <i className="bi bi-moon-stars-fill"></i>
      ) : (
        <i className="bi bi-sun-fill"></i>
      )}
    </button>
  );
}