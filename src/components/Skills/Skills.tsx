import Image from "next/image";
import styles from "./Skills.module.css";
import html from "../../../public/assets/icons/html.svg";
import css from "../../../public/assets/icons/css.svg";
import js from "../../../public/assets/icons/js.svg";
import sass from "../../../public/assets/icons/sass.svg";
import react from "../../../public/assets/icons/react.svg";
import next from "../../../public/assets/icons/next.svg";
import tailwind from "../../../public/assets/icons/tailwindcss.svg";
import typescript from "../../../public/assets/icons/typescript.svg";
import git from "../../../public/assets/icons/git.svg";
import linux from "../../../public/assets/icons/linux.svg";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skillCont}>
        <div className={styles.skill}>
          <Image className={styles.img} src={html} alt="html" />
        </div>
        <div className={styles.skill}>
          <Image className={styles.img} src={css} alt="css" />
        </div>
        <div className={styles.skill}>
          <Image src={sass} alt="sass" />
        </div>
        <div className={styles.skill}>
          <Image src={js} alt="js" />
        </div>
        <div className={styles.skill}>
          <Image className={styles.img} src={linux} alt="linux" />
        </div>
      </div>
      <div className={styles.skillCont}>
        <div className={styles.skill}>
          <Image src={typescript} alt="typescript" />
        </div>
        <div className={styles.skillTail}>
          <div className={styles.tailSkill}>
            <Image className={styles.tailwind} src={tailwind} alt="tailwind" />
          </div>
        </div>
        <div className={styles.skill}>
          <Image src={react} alt="react" />
        </div>
        <div className={styles.skill}>
          <Image src={next} alt="next" />
        </div>
        <div className={styles.skill}>
          <Image src={git} alt="git" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
