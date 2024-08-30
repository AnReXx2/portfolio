import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import github from "../../../public/assets/icons/github.svg";
import x from "../../../public/assets/icons/X.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
      <div className={styles.final}>
        <p>You may also find me on these platforms!</p>
        <div>
          <Link href={"https://github.com/AnReXx2"}>
            <Image className={styles.socLink} src={github} alt="github" />
          </Link>
          <Link href={"https://x.com/AnriD24"}>
            <Image className={styles.socLink} src={x} alt="x" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
