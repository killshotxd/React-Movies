import React from "react";
import { Chrome, GitHub, Search } from "react-feather";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const handleClick = () => {
    window.location.replace("https://github.com/killshotxd");
  };
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <GitHub onClick={handleClick} />
        Movies App
      </Link>

      <div className={styles.right}>
        {/* <div className={styles.search}>
          <input type="text" placeholder="Search movie" />
          <Search />
        </div> */}

        <p className={styles.link}>
          <Link to="/explore">
            Explore <Chrome />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
