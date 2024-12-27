import { useEffect, useState } from "react";
import Link from "./Link";

const sections = ["projects", "journey", "skillset", "about", "contact"];

export default function ScrollNavbar() {
  const [bgClass, setBgClass] = useState("bg-[transparent]");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setBgClass("bg-[#333]");
      } else {
        setBgClass("bg-[transparent]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-2 z-50 w-full flex justify-center items-center">
      <ul
        className={`flex ${bgClass} rounded-full px-2 py-1 w-fit transition duration-[.4s]`}
      >
        {sections.map((section) => {
          return <Link key={section} name={section} />;
        })}
      </ul>
    </nav>
  );
}
