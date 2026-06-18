import Hero from "@/components/Hero/Hero";
import BlogCard from "@/components/BlogCard";
import Section from "@/components/Section";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { getPosts, type Post } from "@/lib/posts";

// function getPosts() {
//   const dir = path.join(process.cwd(), "content/posts");
//   const files = fs.readdirSync(dir);

//   return files.map((file) => {
//     const filePath = path.join(dir, file);
//     const content = fs.readFileSync(filePath, "utf-8");
//     const { data } = matter(content);

//     return {
//       slug: file.replace(".mdx", ""),
//       title: data.title,
//       excerpt: data.excerpt,
//       date: data.date,
//     };
//   });
// }

export default function Home() {
  const posts: Post[] = getPosts();
  const featured = posts.slice(0, 2);
  const latest = posts.slice(2, 6);


  return (
    <>
      <Hero />

      {/* FEATURED */}
      <Section title="🔥 Featured Guides">
        <div className="grid">
          {featured.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>

      {/* CATEGORIES */}
      <Section title="🎮 Categories">
        <div className="gridSmall">
          <Link className="card" href="/performance">
            ⚡ Performance
          </Link>

          <Link className="card" href="/setups">
            🖥️ Setups
          </Link>

          <Link className="card" href="/tools">
            🧠 Tools
          </Link>

          <Link className="card" href="/blog">
            📚 All Guides
          </Link>
        </div>
      </Section>
    

      {/* LATEST */}
      <Section title="🆕 Latest Posts">
        <div className="grid">
          {latest.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>
    </>
  );
}