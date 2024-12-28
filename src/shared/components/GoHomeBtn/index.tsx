import { useEffect, useState } from "react";

export default function GoHomeBtn() {
  const [showBtn, setShowBtn] = useState(false);
  function appearBtn() {
    if (window.scrollY >= 100) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", appearBtn);
    return () => {
      window.removeEventListener("scroll", appearBtn);
    };
  }, []);

  function goHome() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`${
        showBtn ? "opacity-[100%]" : "opacity-0 pointer-events-none"
      } fixed bottom-5 right-5 p-4 transition duration-500 bg-[#333] rounded-full flex z-20 text-xl`}
      onClick={goHome}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
