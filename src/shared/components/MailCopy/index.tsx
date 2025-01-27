import { useState } from "react";
import data from "../../data/welcomeData.json"

export default function MailCopy() {
  const [isCopied, setIsCopied] = useState(false);
  const {socials} = data
  function copyEmail() {
    navigator.clipboard.writeText(socials.email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }
  return (
    <div className="flex items-center mt-3 mb-1">
      <input
        type="text"
        readOnly
        value={socials.email}
        className="bg-transparent rounded-lg border-[1px] border-solid border-[#ffffff60] rounded-r-none  placeholder:text-slate-50 font-semibold text-sm p-2 outline-none w-[220px]"
      />
      <button
        type="button"
        onClick={copyEmail}
        className="py-2 px-3 text-sm border-[1px] border-solid text-white border-[#ffffff60] rounded-lg border-l-0 rounded-l-none"
      >
        <i
          className={`fa-${isCopied ? "solid fa-check" : "regular fa-copy"}`}
        ></i>
      </button>
    </div>
  );
}
