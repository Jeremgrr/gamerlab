export function calculateBuildScore(parts: {
  gpu: number;
  cpu: number;
  ram: number;
  storage: number;
  motherboard: number;
}) {
  const score =
    parts.gpu * 0.4 +
    parts.cpu * 0.3 +
    parts.ram * 0.1 +
    parts.storage * 0.1 +
    parts.motherboard * 0.1;

  return Math.round(score * 2);
}

export function detectBottleneck(gpu: number, cpu: number) {
  const diff = cpu - gpu;

  if (diff > 40) return "GPU bottleneck likely";
  if (diff < -40) return "CPU bottleneck likely";
  return "Balanced system";
}