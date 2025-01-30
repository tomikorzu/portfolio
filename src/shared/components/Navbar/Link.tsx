import { useState, useEffect } from "react";

export default function Link({ name }: { name: string }) {
  const [isInView, setIsInView] = useState(false);

  function scrollToSection() {
    const section = document.getElementById(name);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const section = document.getElementById(name);

    if (section) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, [name]);

  return (
    <li>
      <button
        onClick={scrollToSection}
        className={`px-2 py-1 capitalize ${
          isInView
            ? "text-[--navbar-hover-text-color]"
            : "text-[--main-text-color]"
        } transition duration-500 lg:hover:text-[--navbar-hover-text-color]`}
      >
        {name}
      </button>
    </li>
  );
}
