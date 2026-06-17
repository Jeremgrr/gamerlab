import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "@/components/BlogCard";

function getPosts() {
  const dir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(content);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
    };
  });
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Blog</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
          />
        ))}
      </div>
    </main>
  );
}