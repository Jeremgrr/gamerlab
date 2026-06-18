import Link from "next/link";
import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function CategoryCard({
  title,
  description,
  href,
  icon,
}: CategoryCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </Link>
  );
}