import { useState, useEffect } from "react";

export default function Link({ name }: { name: string }) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById(name);
    if (section) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, [name]);

  return (
    <li>
      <a
        href={`#${name}`}
        className={`px-2 py-1 capitalize ${
          isInView ? "text-[#333]" : "text-[#fff]"
        } transition duration-500`}
      >
        {name}
      </a>
    </li>
  );
}
