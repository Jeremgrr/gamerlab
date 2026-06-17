export default function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(114,75,57,0.4)",
        background: "#162127",
        padding: "16px",
        borderRadius: "12px",
        margin: "20px 0",
      }}
    >
      <strong>{title}</strong>
      <div style={{ marginTop: "8px", color: "rgba(255,255,255,0.85)" }}>
        {children}
      </div>
    </div>
  );
}