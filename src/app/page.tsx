import styles from "./page.module.css";
import { Intro, Purpose, Skills, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <main className={styles.content}>
        <section className={styles.intro}>
          <Intro />
        </section>
        <section className={styles.purpose}>
          <Purpose />
        </section>
        <section className={styles.skills}>
          <Skills />
        </section>
      </main>
    </>
  );
}
