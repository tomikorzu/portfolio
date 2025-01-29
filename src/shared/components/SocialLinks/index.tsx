import data from "../../data/welcomeData.json";

export default function SocialLinks() {
  const {
    socials: { links },
  } = data;
  return (
    <>
      <ul className={`flex items-center sm:ml-2 justify-center gap-4 m-2`}>
        {links.map((link) => {
          return (
            <li>
              <a
                className={`text-lg bg-[#3A506B] rounded-full flex justify-center items-center w-10 h-10  hover:brightness-125`}
                href={link.url}
                target="_BLANK"
                style={{ transition: "all 0.4s" }}
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
