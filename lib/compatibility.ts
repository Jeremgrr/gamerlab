export function checkCompatibility(parts: {
  cpu: string;
  motherboard: string;
  ram: string;
}) {
  const issues: string[] = [];

  // --- CPU + motherboard socket mismatch (simplified rules)
  const intelCPUs = ["i5-10400F", "i5-12400F", "i5-13600K"];
  const amdCPUs = ["Ryzen 5 3600", "Ryzen 5 5600X", "Ryzen 7 5800X"];

  const intelBoards = ["B660", "Z790", "B760"];
  const amdBoards = ["B450", "B550", "X570"];

  const isIntel = intelCPUs.includes(parts.cpu);
  const isAmd = amdCPUs.includes(parts.cpu);

  const board = parts.motherboard;

  if (isIntel && amdBoards.some((b) => board.includes(b))) {
    issues.push("⚠️ Intel CPU is not compatible with AMD motherboard.");
  }

  if (isAmd && intelBoards.some((b) => board.includes(b))) {
    issues.push("⚠️ AMD CPU is not compatible with Intel motherboard.");
  }

  // --- RAM warning (simple heuristic)
  if (parts.ram.includes("64GB")) {
    issues.push("💡 High RAM detected — ensure workload justifies it.");
  }

  if (parts.ram.includes("8GB")) {
    issues.push("⚠️ 8GB RAM is below modern gaming standards.");
  }

  return issues;
}