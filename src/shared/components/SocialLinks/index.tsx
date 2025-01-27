import data from "../../data/welcomeData.json";

export default function SocialLinks() {
  const {
    socials: { github, linkedin, calendly, CV },
  } = data;
  return (
    <>
      <ul className={`flex items-center sm:ml-2 justify-center gap-4 m-2`}>
        <li>
          <a
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
            href={github}
            target="_BLANK"
            style={{ transition: "all 0.4s" }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
            href={linkedin}
            target="_BLANK"
            style={{ transition: "all 0.5s" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
            href={calendly}
            target="_BLANK"
            style={{ transition: "all 0.5s" }}
          >
            <i className="fa-solid fa-calendar-days"></i>
          </a>
        </li>
        <li>
          <a
            href={CV}
            target="_BLANK"
            style={{ transition: "all 0.5s" }}
            className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-150`}
          >
            <i className="fa-solid fa-file-pdf"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
