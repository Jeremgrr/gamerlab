import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          NexusLab
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/setups">Setups</Link>
          <Link href="/tools">Tools</Link>
        </nav>
      </div>
    </header>
  );
}