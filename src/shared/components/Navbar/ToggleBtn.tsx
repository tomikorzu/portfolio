import { useState } from "react";

export default function ToggleBtn() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleToggleBtn() {
    setIsMenuActive(!isMenuActive);
  }
  return (
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
  );
}
