export function getUpgradeAdvice(parts: {
  gpu: number;
  cpu: number;
  ram: string;
}) {
  const advice: string[] = [];

  const gap = Math.abs(parts.cpu - parts.gpu);

  // --- Bottleneck-based advice
  if (parts.cpu > parts.gpu + 40) {
    advice.push(
      "🔧 Upgrade GPU first — CPU is stronger and currently underutilized."
    );
  }

  if (parts.gpu > parts.cpu + 40) {
    advice.push(
      "🔧 Upgrade CPU first — GPU is being bottlenecked in CPU-heavy games."
    );
  }

  // --- RAM advice
  if (parts.ram.includes("8GB")) {
    advice.push("📈 Upgrade to 16GB RAM for modern gaming stability.");
  }

  if (parts.ram.includes("64GB")) {
    advice.push(
      "💡 64GB RAM is overkill for gaming — useful for heavy production workloads."
    );
  }

  return advice;
}