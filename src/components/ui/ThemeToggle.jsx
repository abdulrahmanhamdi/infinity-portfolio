import { useTheme } from "../../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    // Change className here
    <button onClick={toggleTheme} className="icon-btn"> 
      {theme === "light" ? (
        <i className="bi bi-moon-stars-fill"></i>
      ) : (
        <i className="bi bi-sun-fill"></i>
      )}
    </button>
  );
}