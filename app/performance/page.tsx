import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

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
//       category: data.category,
//     };
//   });
// }

export default function PerformancePage() {
  const posts = getPosts();

  // filter performance-related posts
  const performancePosts = posts.filter(
    (post) =>
      post.category?.toLowerCase() === "performance" ||
      post.title.toLowerCase().includes("fps") ||
      post.title.toLowerCase().includes("windows") ||
      post.title.toLowerCase().includes("lag")
  );

  const featured = performancePosts.slice(0, 2);
  const latest = performancePosts.slice(2, 8);

  return (
    <main className="container">
      {/* HERO */}
      <section style={{ padding: "60px 0" }}>
        <h1>⚡ Performance Hub</h1>
        <p>
          Optimize FPS, reduce input lag, and maximize system performance
          for competitive gaming.
        </p>
      </section>

      {/* FEATURED */}
      <Section title="🔥 Featured Optimization Guides">
        <div className="grid">
          {featured.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>

      {/* CATEGORIES (internal sub-nav feel) */}
      <Section title="🧠 Topics">
        <div className="gridSmall">
          <div className="card">⚡ FPS Optimization</div>
          <div className="card">🪟 Windows Tweaks</div>
          <div className="card">🌐 Network / Ping</div>
          <div className="card">🎮 GPU Settings</div>
        </div>
      </Section>

      {/* LATEST */}
      <Section title="🆕 Latest Performance Posts">
        <div className="grid">
          {latest.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>

      {/** GAME SPECIFIC GUIDES */}

      <Section title="🎯 Game-Specific Guides">
        <div className="gridSmall">
            <Link className="card" href="/performance/valorant">
            🎯 Valorant Optimization
            <p>Best settings for FPS, input lag, and competitive play.</p>
            </Link>
        </div>
        </Section>
    </main>
  );
}