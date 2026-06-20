export interface GPU {
  id: string;
  slug: string;

  manufacturer: "NVIDIA" | "AMD" | "Intel";

  name: string;

  architecture: string;

  generation: string;

  releaseYear: number;

  vram: number;

  score: number;

  pricing: {
    msrp: number;
    estimated: number;
  };

  rayTracing: boolean;

  dlss: boolean;

  fsr: boolean;
}