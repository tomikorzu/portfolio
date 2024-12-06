import { navbarSections } from "./navbar-sections.ts";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

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
        <SocialLinks />
        <nav>
          <ul>
            {navbarSections.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={
                      item.url !== "/contact"
                        ? item.url
                        : "mailto:tomykorzu@icloud.com"
                    }
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
