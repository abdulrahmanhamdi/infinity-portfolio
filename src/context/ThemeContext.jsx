import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 1. الحالة تبدأ بقراءة القيمة من localStorage أو الوضع الافتراضي 'light'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  // 2. دالة تبديل الثيم
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 3. useEffect لمراقبة أي تغيير في الثيم
  useEffect(() => {
    // تحديث الـ attribute في الـ body tag
    document.body.setAttribute("data-theme", theme);
    // حفظ اختيار المستخدم في localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}