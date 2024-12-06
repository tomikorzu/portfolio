export default function SocialLinks() {
  return (
    <>
      <ul className={`flex items-center justify-center gap-5 m-2.5`}>
        <li>
          <a
            className="text-lg bg-slate-800 rounded-full flex justify-center items-center w-10 h-10 transition duration-500 hover:brightness-125"
            href="https://github.com/tomikorzu"
            target="_BLANK"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="text-xl bg-slate-800 rounded-full flex justify-center items-center w-10 h-10 transition duration-500 hover:brightness-125"
            href="https://www.linkedin.com/in/TomasKorzusehec"
            target="_BLANK"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className="text-lg bg-slate-800 rounded-full flex justify-center items-center w-10 h-10 transition duration-500 hover:brightness-125"
            href="https://calendly.com/tomykorzu/30min?month=2024-12"
            target="_BLANK"
          >
            <i className="fa-solid fa-calendar-days"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
