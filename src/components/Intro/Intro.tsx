import styles from "./Intro.module.css";
import Image from "next/image";
import Link from "next/link";
import gitHub from "../../../public/assets/icons/github.svg";
import x from "../../../public/assets/icons/X.svg";

const Intro = () => {
  return (
    <>
      <div className={styles.starsBg}>
        <div className={styles.stars}></div>
        <div className={styles.star2}></div>
        <div className={styles.star3}></div>
      </div>
      <section className={styles.intro}>
        <div className={styles.text}>
          <h1 className={`${styles.line} ${styles.animTypewriter}`}>
            Hi, I&apos;m <span>Anri Diasamidze</span>
          </h1>
          <p>
            I&apos;m a front-end developer passionate about creating visually
            appealing and user-friendly websites. I strive to build
            well-designed sites with clean, efficient code that not only look
            great but also provide a seamless experience for users. My goal is
            to combine creativity with technical skills to bring ideas to life
            and make the web a more beautiful and functional place.
          </p>
        </div>
        <div className={styles.socCont}>
          <Link href={"https://github.com/AnReXx2"} target="blank">
            <Image className={styles.socLink} src={gitHub} alt="github" />
          </Link>
          <Link href={"https://x.com/AnriD24"} target="blank">
            <Image className={styles.socLink} src={x} alt="x" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Intro;
