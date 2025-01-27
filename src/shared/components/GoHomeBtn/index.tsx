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
        showBtn ? "opacity-[100%] hover:brightness-125" : "opacity-0 pointer-events-none"
      } fixed bottom-5 right-5 p-4 transition duration-[.4s] bg-[#303a4f] rounded-full flex items-center justify-center z-20 text-xl size-12`}
      onClick={goHome}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
