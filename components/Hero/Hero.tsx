import Link from "next/link";
import styles from "./Hero.module.css";
import Container from "@/components/Container/Container";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.kicker}>NEXUSLAB</p>

          <h1 className={styles.title}>
            Optimize. Upgrade. Win.
          </h1>

          <p className={styles.subtitle}>
            Performance guides, gaming setups, and tools
            for competitive players.
          </p>

          <div className={styles.buttons}>
            <Link href="/blog" className={styles.primary}>
              Read Guides
            </Link>

            <Link href="/tools" className={styles.secondary}>
              Explore Tools
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}