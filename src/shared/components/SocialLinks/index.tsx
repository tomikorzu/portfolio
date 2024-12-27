export default function SocialLinks() {
  return (
    <>
      <ul className={`flex items-center justify-center gap-5 m-2.5`}>
        <li>
          <a
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
            href="https://github.com/tomikorzu"
            target="_BLANK"
            style={{ transition: "all 0.4s" }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
            href="https://www.linkedin.com/in/tomas-korzusehec/"
            target="_BLANK"
            style={{ transition: "all 0.5s" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
            href="https://calendly.com/tomykorzu/30min?month=2024-12"
            target="_BLANK"
            style={{ transition: "all 0.5s" }}
          >
            <i className="fa-solid fa-calendar-days"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
