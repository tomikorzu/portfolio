import welcomeData from "../../data/welcomeData.json";

export default function ActualWork() {
  return (
    <a
      href={
        welcomeData.workPage
          ? welcomeData.workPage
          : welcomeData.socials.linkedin
      }
      target="_blank"
      className="flex items-center transition md:justify-center"
    >
      <div className="flex items-center transition duration-300">
        <span className="relative inline-flex overflow-hidden rounded-full p-0.5">
          <span
            className={`absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] ${
              welcomeData.actualWork ? "working" : "not-working"
            }`}
          ></span>
          <div className="items-center justify-center w-full px-3 py-2 text-sm rounded-full bg-slate-800 text-white/90 backdrop-blur-md hover:brightness-125 transition duration-500">
            {welcomeData.actualWork
              ? `Working in ${welcomeData.actualWork}`
              : "Avaible to Work"}
          </div>
        </span>
      </div>
    </a>
  );
}
