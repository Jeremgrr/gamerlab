export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,.08)",
        marginTop: 80,
      }}
    >
      <div
        className="container"
        style={{
          padding: "30px 0",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} NexusLab
      </div>
    </footer>
  );
}