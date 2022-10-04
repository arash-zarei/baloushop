import React from "react";

// Styles
import styles from "./Footer.module.css";

// Icon
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <a target="_blank" title="Github" href="https://github.com/arashzareiJS">
            <Unicons.UilGithub />
          </a>
          <a target="_blank" title="Telegram" href="https://t.me/arashzarei_js">
            <Unicons.UilTelegram />
          </a>
          <a target="_blank" title="Instagram" href="https://www.instagram.com/arashzarei.js/">
            <Unicons.UilInstagramAlt />
          </a>
          <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/arash-zarei-60867b231/">
            <Unicons.UilLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
