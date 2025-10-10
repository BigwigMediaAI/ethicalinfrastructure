"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSliderToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-700 ease-in-out ${
        isDark
          ? "bg-gray-800 shadow-[0_0_10px_rgba(21,93,252,0.6)]"
          : "bg-gray-300 shadow-inner"
      }`}
    >
      {/* Toggle Knob */}
      <div
        className={`absolute left-1 flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-md transition-all duration-700 ease-in-out transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-gray-800 transition-transform duration-700 ease-in-out" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500 transition-transform duration-700 ease-in-out" />
        )}
      </div>
    </div>
  );
}
