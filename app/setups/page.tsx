import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPosts } from "@/lib/posts";

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

export default function SetupsPage() {
  const posts = getPosts();

  // filter setup-related content
  const setupPosts = posts.filter(
    (post) =>
      post.category?.toLowerCase() === "setups" ||
      post.title.toLowerCase().includes("setup") ||
      post.title.toLowerCase().includes("build") ||
      post.title.toLowerCase().includes("desk")
  );

  const featured = setupPosts.slice(0, 2);
  const latest = setupPosts.slice(2, 8);

  return (
    <main className="container">
      {/* HERO */}
      <section style={{ padding: "60px 0" }}>
        <h1>🖥️ Setup Hub</h1>
        <p>
          Discover gaming setups, PC builds, desk layouts, and gear
          recommendations to upgrade your battlestation.
        </p>
      </section>

      {/* FEATURED */}
      <Section title="🔥 Featured Setup Guides">
        <div className="grid">
          {featured.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>

      {/* SETUP TYPES */}
      <Section title="🧩 Setup Categories">
        <div className="gridSmall">
          <div className="card">💻 PC Builds</div>
          <div className="card">🖱️ Peripherals</div>
          <div className="card">🎥 Streaming Setup</div>
          <div className="card">🪑 Desk Layouts</div>
        </div>
      </Section>

      {/* LATEST */}
      <Section title="🆕 Latest Setup Posts">
        <div className="grid">
          {latest.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>
    </main>
  );
}