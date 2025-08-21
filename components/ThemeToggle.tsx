"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="rounded-full p-2 bg-[#222c3c] hover:bg-[#3b82f6] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-white" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-white" aria-hidden="true" />
      )}
    </button>
  );
}
