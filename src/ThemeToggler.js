import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <button
        className="flex justify-center items-center w-max"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? (
          <FiMoon className="text-black" title="Switch to dark theme" />
        ) : (
          <FiSun className="text-white" title="Switch to light theme" />
        )}
      </button>
    </>
  );
};

export default ThemeToggler;
