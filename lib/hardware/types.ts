export interface GPU {
  id: string;
  manufacturer: "NVIDIA" | "AMD" | "Intel";

  name: string;

  generation: string;

  vram: number;

  score: number;

pricing: {
    msrp: number;
    estimated: number;

    amazon?: number;
    bestBuy?: number;
    newegg?: number;

    lastUpdated?: string;
}

  rayTracing: boolean;

  dlss: boolean;

  fsr: boolean;
}

export interface CPU {
  id: string;
  manufacturer: "Intel" | "AMD";

  name: string;

  socket: string;

  cores: number;

  threads: number;

  baseClock: number;

  boostClock: number;

  score: number;

pricing: {
    msrp: number;
    estimated: number;

    amazon?: number;
    bestBuy?: number;
    newegg?: number;

    lastUpdated?: string;
}
}

export interface Motherboard {
  id: string;

  manufacturer: string;

  name: string;

  socket: string;

  chipset: string;

  ramType: "DDR4" | "DDR5";

  wifi: boolean;

  pcie5: boolean;

  pricing: {
    msrp: number;
    estimated: number;

    amazon?: number;
    bestBuy?: number;
    newegg?: number;

    lastUpdated?: string;
}
}

export interface RAM {
  id: string;

  manufacturer: string;

  name: string;

  capacity: number;

  speed: number;

  type: "DDR4" | "DDR5";

  pricing: {
    msrp: number;
    estimated: number;

    amazon?: number;
    bestBuy?: number;
    newegg?: number;

    lastUpdated?: string;
}
}

export interface Storage {
  id: string;

  manufacturer: string;

  name: string;

  capacity: number;

  type: "HDD" | "SATA SSD" | "NVMe Gen3" | "NVMe Gen4" | "NVMe Gen5";

  pricing: {
    msrp: number;
    estimated: number;

    amazon?: number;
    bestBuy?: number;
    newegg?: number;

    lastUpdated?: string;
}
}