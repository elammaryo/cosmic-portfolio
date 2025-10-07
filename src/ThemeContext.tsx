import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = {
  theme: Theme;
  isDark: boolean;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

const context = createContext<ThemeContext | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")
    .matches;
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || (prefersDark ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <context.Provider
      value={{ theme, isDark: theme === "dark", setTheme, toggle }}
    >
      {children}
    </context.Provider>
  );
};

export const useTheme = () => {
  const v = useContext(context);
  if (!v) throw new Error("useTheme must be used inside <ThemeProvider>");
  return v;
};
