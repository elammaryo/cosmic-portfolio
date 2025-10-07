import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../ThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={cn(
        "fixed top-6 md:top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300"
      )}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
