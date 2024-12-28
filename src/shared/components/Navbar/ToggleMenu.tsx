export default function ToggleMenu({
  sections,
  isOpen,
  setIsOpen,
}: {
  sections: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu");
    const button = document.querySelector(".toggle-btn");
    if (
      !menu?.contains(e.target as Node) &&
      !button?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  });
  return (
    <nav
      className={`menu fixed top-16 right-7 bg-[#642164] z-30 flex justify-center items-center rounded-md p-2 px-3 show-menu ${
        !isOpen && "show-menu-reverse"
      } `}
    >
      <ul>
        {sections.map((section) => {
          return (
            <li key={section} className="py-1 ">
              <a
                className="text-xl capitalize text-center font-bold"
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
