export function optimizeBuild(parts: {
  gpu: { name: string; score: number; price: number };
  cpu: { name: string; score: number; price: number };
  ram: { name: string; price: number };
}) {
  const suggestions: string[] = [];

  const gpuValue = parts.gpu.score / parts.gpu.price;
  const cpuValue = parts.cpu.score / parts.cpu.price;

  // --- GPU inefficiency check
  if (gpuValue < 0.3) {
    suggestions.push(
      "💡 GPU is overpriced for its performance. Consider stepping down one tier (better FPS/$)."
    );
  }

  // --- CPU inefficiency check
  if (cpuValue < 0.4) {
    suggestions.push(
      "💡 CPU is expensive relative to gaming performance. Consider mid-tier CPU for better value."
    );
  }

  // --- RAM overkill check
  if (parts.ram.name.includes("64GB")) {
    suggestions.push(
      "💡 64GB RAM is unnecessary for gaming. 16–32GB provides identical FPS."
    );
  }

  return suggestions;
}