import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.NavbarWide}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favourites">Favorites</Link>
        </li>
      </ul>
      <ul className={styles.NavbarNarrow}>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link href="/favourites">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
