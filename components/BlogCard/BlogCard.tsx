import Link from "next/link";
import styles from "./BlogCard.module.css";

type Props = {
  title: string;
  excerpt: string;
  date?: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
}: Props) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div>
        <p className={styles.tag}>Guide</p>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.excerpt}>{excerpt}</p>

        {date && <p className={styles.date}>{date}</p>}
      </div>
    </Link>
  );
}