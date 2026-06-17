import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

function getPost(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, "utf-8");
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const content = getPost(slug);

  if (!content) return notFound();

  return (
    <main style={{ padding: 40 }}>
      <pre style={{ whiteSpace: "pre-wrap" }}>{content}</pre>
    </main>
  );
}