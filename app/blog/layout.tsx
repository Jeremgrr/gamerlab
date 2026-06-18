import "@/app/globals.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="blogContainer">
      {children}
    </main>
  );
}