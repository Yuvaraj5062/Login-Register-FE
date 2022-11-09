import React from "react";
import { Facebook, Linkedin, Twitter } from "..";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.icons}>
          <div className={styles.footerIcon}>
            <Facebook />
          </div>
          <div className={styles.footerIcon}>
            <Linkedin />
          </div>
          <div className={styles.footerIcon}>
            {" "}
            <Twitter />
          </div>
        </div>
        <p className={styles.company}>ABC &copy; 2021, ALL Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
