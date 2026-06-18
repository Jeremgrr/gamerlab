import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
};

export function getPosts(): Post[] {
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
      category: data.category,
    };
  });
}