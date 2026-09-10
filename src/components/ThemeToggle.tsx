import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
