import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getPosts() {
  const dir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(dir);

  const posts = files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(content);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || file,
      excerpt: data.excerpt || "",
      date: data.date || "",
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 className="h1">Blog</h1>
      <p className="p-muted">FPS guides, setups, and optimization tips.</p>

      <div style={{ marginTop: 30 }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="card" style={{ marginBottom: 12 }}>
              <h3>{post.title}</h3>
              <p className="p-muted">{post.excerpt}</p>
              <small className="p-muted">{post.date}</small>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}