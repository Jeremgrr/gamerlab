export default function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  return (
    <div className={`callout ${type}`}>
      {children}
    </div>
  );
}