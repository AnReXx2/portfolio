import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import gitHub from "../../../public/assets/icons/github.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        Anri
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link className={styles.link} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={"/"}>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={"/"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        className={styles.github}
        href={"https://github.com/AnReXx2"}
        target="blank"
      >
        <Image src={gitHub} alt="github" />
      </Link>
    </header>
  );
};

export default Header;
