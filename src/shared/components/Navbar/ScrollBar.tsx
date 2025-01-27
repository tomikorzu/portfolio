import { useEffect, useState } from "react";
import Link from "./Link";

export default function ScrollBar({ sections }: { sections: string[] }) {
  const [bgClass, setBgClass] = useState("bg-[transparent]");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setBgClass("bg-[#303a4f]");
      } else {
        setBgClass("bg-[transparent]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-2 left-0 z-50 w-full hidden sm:flex justify-center items-center fade-in">
      <ul
        className={`flex ${bgClass} rounded-full px-2 py-1 w-fit transition duration-[.4s]`}
      >
        {sections.map((section, index) => {
          return <Link key={index} name={section} />;
        })}
      </ul>
    </nav>
  );
}
