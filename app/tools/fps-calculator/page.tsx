"use client";

import { useState } from "react";
import Section from "@/components/Section";

import { gpus, cpus } from "@/lib/hardware";
import { games } from "@/lib/games";
import { resolutions } from "@/lib/resolutions";
import { gameBaselines } from "@/lib/gameBaselines";
import { estimateFPS } from "@/lib/estimateFPS";

export default function FPSCalculatorPage() {
  const [game, setGame] = useState(games[0].name);
  const [gpu, setGpu] = useState(gpus[0].name);
  const [cpu, setCpu] = useState(cpus[0].name);
  const [resolution, setResolution] = useState(resolutions[0].name);

  const [result, setResult] = useState<null | {
    low: number;
    avg: number;
    high: number;
  }>(null);

  function handleCalculate() {
    // ----------------------------
    // BASE FPS (game anchored)
    // ----------------------------
    const baseFPS =
      gameBaselines[
        game as keyof typeof gameBaselines
      ]?.["1080p"] || 120;

    // ----------------------------
    // GPU FACTOR (bounded realism)
    // ----------------------------
    const gpuFactor =
      gpu.includes("4070") || gpu.includes("3080") || gpu.includes("3070")
        ? 1.4
        : gpu.includes("3060") || gpu.includes("4060") || gpu.includes("2060")
        ? 1.0
        : 0.6;

    // ----------------------------
    // CPU FACTOR (bounded realism)
    // ----------------------------
    const cpuFactor =
      cpu.includes("13600") || cpu.includes("5800X") || cpu.includes("12700")
        ? 1.2
        : cpu.includes("12400") || cpu.includes("5600") || cpu.includes("10400")
        ? 1.0
        : 0.7;

    // ----------------------------
    // RESOLUTION FACTOR
    // ----------------------------
    const resolutionMultiplier = (() => {
      if (resolution.includes("1440")) return 0.75;
      if (resolution.includes("4K")) return 0.45;
      return 1;
    })();

    // ----------------------------
    // FINAL ESTIMATE
    // ----------------------------
    const output = estimateFPS(
      baseFPS,
      gpuFactor,
      cpuFactor,
      resolutionMultiplier
    );

    setResult(output);
  }

  return (
    <main className="blogContainer">
      {/* HERO */}
      <section className="heroBlock">
        <h1>⚡ FPS Estimator</h1>
        <p>
          Estimate realistic FPS based on real-world benchmarks,
          hardware performance, and resolution scaling.
        </p>
      </section>

      {/* GAME */}
      <Section title="🎮 Select Game">
        <select value={game} onChange={(e) => setGame(e.target.value)}>
          {games.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </Section>

      {/* GPU */}
      <Section title="🎮 Select GPU">
        <select value={gpu} onChange={(e) => setGpu(e.target.value)}>
          {gpus.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </Section>

      {/* CPU */}
      <Section title="🧠 Select CPU">
        <select value={cpu} onChange={(e) => setCpu(e.target.value)}>
          {cpus.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </Section>

      {/* RESOLUTION */}
      <Section title="🖥️ Select Resolution">
        <select
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          {resolutions.map((r) => (
            <option key={r.name} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
      </Section>

      {/* CALCULATE */}
      <Section title="⚡ Estimate Performance">
        <button className="btnPrimary" onClick={handleCalculate}>
            Calculate FPS
        </button>
      </Section>

      {/* RESULT */}
      {result && (
        <Section title="📊 Estimated FPS">
            <div className="fpsBarWrapper">
            <div className="fpsBar">
                <div
                className="fpsFill"
                style={{
                    width: `${Math.min((result.avg / 300) * 100, 100)}%`,
                }}
                />
            </div>

            {/* SCALE LABELS */}
            <div className="fpsScale">
                <span>0</span>
                <span>100</span>
                <span>200</span>
                <span>300+</span>
            </div>

            {/* FPS VALUES */}
            <div className="fpsLabels">
                <span>Low: {result.low}</span>
                <span>Avg: {result.avg}</span>
                <span>High: {result.high}</span>
            </div>
            </div>
          <div className="card">
            <h2>{result.avg} FPS</h2>
            <p>
              Low: {result.low} / Avg: {result.avg} / High: {result.high}
            </p>
          </div>
        </Section>

        
      )}
    </main>
  );
}