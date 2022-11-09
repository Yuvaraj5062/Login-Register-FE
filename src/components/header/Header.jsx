import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header class={styles.headerFixed}>
        <div class={styles.headerLimiter}>
          <h1>
            <a href="#">
              Company<span>logo</span>
            </a>
          </h1>

          <nav>
          <Link to="/">Log In</Link>
            <Link to="/signup">Sign Up</Link>
             <Link to="/logout">Log Out</Link>
             
            
            
        
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
