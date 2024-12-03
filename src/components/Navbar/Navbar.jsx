import { navbarSections } from "../../utils/navbar-sections.js";
import { useState } from "react";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

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
              className="text-xl bg-slate-800 rounded-full"
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
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <nav>
          <ul>
            {navbarSections.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href=""
          download
          className="download-cv flex items-center justify-center absolute bottom-4 bg-slate-600 rounded-md w-full gap-2 text-normal"
        >
          <i className="fa-solid fa-download"></i>
          <span>Download CV</span>
        </a>
      </header>
    </>
  );
}
