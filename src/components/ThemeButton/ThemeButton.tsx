import { useState, useEffect } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  function handleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  }

  return (
    <>
      <button
        onClick={handleTheme}
        className="p-2.5 dark:bg-slate-800 bg-slate-200 dark:text-[#f1f1f1] text-[#333] rounded-full fixed right-2.5 top-2.5 w-10 h-10 flex items-center justify-center hover:brightness-110 transition duration-500 cursor-pointer z-10"
      >
        {theme === "dark" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </>
  );
}
