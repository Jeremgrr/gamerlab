import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import Callout from "@/components/Callout/Callout";

function getPost(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return { data, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) return {};

  const file = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(file);

  return {
    title: data.title,
    description: data.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) return notFound();

  const { data, content } = post;

  return (
    <main
      className="container"
      style={{ padding: "40px 0", maxWidth: "800px" }}
    >
      {/* Title Section */}
      <header style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          {data.title}
        </h1>

        <p style={{ opacity: 0.7 }}>{data.excerpt}</p>

        {data.date && (
          <small style={{ opacity: 0.5 }}>{data.date}</small>
        )}
      </header>

      {/* Blog Content */}
      <article className="card">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
          components={{
            Callout,
          }}
        />
      </article>
    </main>
  );
}