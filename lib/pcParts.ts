export const gpus = [
  { name: "GTX 1660 Super", score: 60, price: 180 },
  { name: "RTX 2060", score: 75, price: 220 },
  { name: "RTX 3060", score: 100, price: 300 },
  { name: "RTX 3060 Ti", score: 120, price: 350 },
  { name: "RTX 3070", score: 140, price: 450 },
  { name: "RTX 4060", score: 130, price: 300},
  { name: "RTX 4070", score: 170, price: 600 },
];

export const cpus = [
  { name: "i5-10400F", score: 60, price: 90 },
  { name: "i5-12400F", score: 100, price: 150 },
  { name: "i5-13600K", score: 140, price: 280 },
  { name: "Ryzen 5 3600", score: 70, price: 100 },
  { name: "Ryzen 5 5600X", score: 110, price: 160 },
  { name: "Ryzen 7 5800X", score: 130, price: 220 },
];

export const ramOptions = [
  { name: "8GB DDR4", score: 50, price: 20 },
  { name: "16GB DDR4", score: 80, price: 40 },
  { name: "32GB DDR4", score: 100, price: 80 },
  { name: "64GB DDR4", score: 120, price: 150 },
];

export const storageOptions = [
  { name: "256GB SATA SSD", score: 40, price: 25 },
  { name: "512GB SATA SSD", score: 60, price: 40 },
  { name: "1TB NVMe SSD", score: 100, price: 80 },
  { name: "2TB NVMe SSD", score: 140, price: 140 },
];

export const motherboardOptions = [
  {
    name: "Budget B450 / B660",
    score: 60,
    price: 80,
    notes: "Entry-level support, limited upgrades",
  },
  {
    name: "Mid-Range B550 / B760",
    score: 100,
    price: 140,
    notes: "Best balance of features and upgrade path",
  },
  {
    name: "High-End X570 / Z790",
    score: 130,
    price: 220,
    notes: "Overclocking, PCIe 5.0, premium VRMs",
  },
];