import { useEffect, useState } from "react";
import Link from "./Link";

const sections = ["projects", "journey", "skillset", "about", "contact"];

export default function Navbar() {
  const [bgClass, setBgClass] = useState("bg-[transparent]");
  const [isMenuActive, setIsMenuActive] = useState(false);

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

  function handleToggleBtn() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <>
      <nav className="fixed top-2 z-50 w-full hidden sm:flex justify-center items-center">
        <ul
          className={`flex ${bgClass} rounded-full px-2 py-1 w-fit transition duration-[.4s]`}
        >
          {sections.map((section) => {
            return <Link key={section} name={section} />;
          })}
        </ul>
      </nav>
      <button
        type="button"
        onClick={handleToggleBtn}
        className={`sm:hidden fixed flex flex-col top-4 right-5 z-20  w-11 h-11 justify-around p-2.5 rounded-full ${
          isMenuActive ? "bg-transparent" : "bg-[#642164]"
        } transition duration-[.4s]`}
      >
        <span
          className={`w-full h-1 rounded-3xl transition-all duration-[0.4s] ${
            isMenuActive ? "rotate-45 origin-top-left bg-white" : "bg-[#e2e2e2]"
          }`}
        ></span>
        <span
          className={`w-full h-1 rounded-3xl transition-all duration-[0.4s] ${
            isMenuActive
              ? "origin-bottom-left -rotate-45 translate-x-[0px] translate-y-[4px] bg-white"
              : "w-[70%] bg-[#e2e2e2]"
          }`}
        ></span>
      </button>
    </>
  );
}
