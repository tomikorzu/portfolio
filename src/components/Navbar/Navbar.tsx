import { navbarSections } from "./navbar-sections.ts";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    setCurrentSection(window.location.pathname);
  }, []);

  function handleToggleBtn() {
    setIsMenuActive(!isMenuActive);
  }
  return (
    <>
      <button
        type="button"
        className={`${styles["toggle-btn"]} ${
          isMenuActive ? styles.active : ""
        }`}
        onClick={handleToggleBtn}
      >
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
      </button>
      <header
        className={`${styles.navbar} ${
          isMenuActive ? styles["menu-active"] : styles["menu-desactive"]
        }`}
      >
        <img
          src={"/me.jpeg"}
          alt="My Profile Image"
          className={styles["logo-link"]}
        />
        <h2 className="font-extrabold text-xl text-center">Tomás Korzusehec</h2>
        <ul
          className={`flex items-center justify-center gap-5 m-2.5 ${styles.socialLinks}`}
        >
          <li>
            <a
              className="text-lg bg-slate-800 rounded-full"
              href="https://github.com/tomikorzu"
              target="_BLANK"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="text-xl bg-slate-800 rounded-full"
              href="https://www.linkedin.com/in/TomasKorzusehec"
              target="_BLANK"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="text-lg bg-slate-800 rounded-full"
              href="https://calendly.com/tomykorzu/30min?month=2024-12"
              target="_BLANK"
            >
              <i className="fa-solid fa-calendar-days"></i>
            </a>
          </li>
        </ul>
        <nav>
          <ul>
            {navbarSections.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url !== "/contact" ? item.url : "mailto:tomykorzu@icloud.com"}
                    className={
                      item.url === currentSection.toLowerCase()
                        ? styles["path-active"]
                        : ""
                    }
                  >
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
