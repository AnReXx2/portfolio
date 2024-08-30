import Image from "next/image";
import styles from "./Purpose.module.css";
import asm from "../../../public/assets/icons/asm-icon.webp";
import C from "../../../public/assets/icons/C-icon.png";
import Cpp from "../../../public/assets/icons/c++-icon.png";
import { Lines } from "@/components";

const Purpose = () => {
  return (
    <section className={styles.purpose}>
      <Lines className={styles.lineBg} />
      <div className={styles.text}>
        <h2>My development journey and goals</h2>
        <p>
          My journey has been marked by a relentless pursuit of excellence in
          creating engaging and dynamic web experiences. With a solid foundation
          in front-end technologies, I&apos;m ready to push the boundaries of
          what&apos;s possible and constantly improve my skills. However, my
          ambitions go beyond the realm of web development. I aspire to grow as
          a well-skilled technologist and make a significant impact in the tech
          world.
        </p>
      </div>
      <div className={styles.langs}>
        <Image className={styles.asm} src={asm} alt="asm" />
        <div>
          <Image className={styles.img} src={C} alt="C" />
          <Image className={styles.img} src={Cpp} alt="c++" />
        </div>
      </div>
    </section>
  );
};

export default Purpose;
