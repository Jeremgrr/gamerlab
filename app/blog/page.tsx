import Link from "next/link";
import fs from "fs";
import path from "path";

function getPosts() {
  const dir = path.join(process.cwd(), "content/posts");
  return fs.readdirSync(dir).map((file) => ({
    slug: file.replace(".mdx", ""),
    title: file.replace(".mdx", "").replaceAll("-", " "),
  }));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 className="h1">Blog</h1>
      <p className="p-muted">FPS guides, setups, and gaming optimization tips.</p>

      <div style={{ marginTop: 30 }}>
        {posts.map((post) => (
          <div key={post.slug} className="card" style={{ marginBottom: 12 }}>
            <Link href={`/blog/${post.slug}`}>
              <h3 style={{ textTransform: "capitalize" }}>{post.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}