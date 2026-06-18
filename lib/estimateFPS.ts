export function estimateFPS(
  baseFPS: number,
  gpuFactor: number,
  cpuFactor: number,
  resolutionFactor: number
) {
  const fps = baseFPS * gpuFactor * cpuFactor * resolutionFactor;

  return {
    low: Math.round(fps * 0.85),
    avg: Math.round(fps),
    high: Math.round(fps * 1.12),
  };
}