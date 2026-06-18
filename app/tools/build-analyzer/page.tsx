"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { checkCompatibility } from "@/lib/compatibility";
import { getUpgradeAdvice } from "@/lib/recommendations";
import { optimizeBuild } from "@/lib/optimizer";
import { compareBuilds } from "@/lib/compareBuilds";

import {
  gpus,
  cpus,
  ramOptions,
  storageOptions,
  motherboardOptions,
} from "@/lib/pcParts";

import { calculateBuildScore, detectBottleneck } from "@/lib/calcBuild";

export default function BuildAnalyzerPage() {
  const [gpu, setGpu] = useState(gpus[0].name);
  const [cpu, setCpu] = useState(cpus[0].name);
  const [ram, setRam] = useState(ramOptions[0].name);
  const [storage, setStorage] = useState(storageOptions[0].name);
  const [motherboard, setMotherboard] = useState(
    motherboardOptions[0].name
  );
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [comparison, setComparison] = useState<any>(null);

  {/** BUILD B  */}

  const [gpuB, setGpuB] = useState(gpus[0].name);
  const [cpuB, setCpuB] = useState(cpus[0].name);
  const [ramB, setRamB] = useState(ramOptions[0].name);
  const [storageB, setStorageB] = useState(storageOptions[0].name);
  const [moboB, setMoboB] = useState(motherboardOptions[0].name);

  function handleCompare() {
  const buildA = calculateFullBuild(gpu, cpu, ram, storage, motherboard);
  const buildB = calculateFullBuild(gpuB, cpuB, ramB, storageB, moboB);

  const result = compareBuilds(buildA, buildB);

  setComparison(result);
}

function calculateFullBuild(
  gpu: string,
  cpu: string,
  ram: string,
  storage: string,
  motherboard: string
) {
  const gpuObj = gpus.find((g) => g.name === gpu)!;
  const cpuObj = cpus.find((c) => c.name === cpu)!;
  const ramObj = ramOptions.find((r) => r.name === ram)!;
  const storageObj = storageOptions.find((s) => s.name === storage)!;
  const moboObj = motherboardOptions.find((m) => m.name === motherboard)!;

  const score =
    gpuObj.score +
    cpuObj.score +
    ramObj.score +
    storageObj.score +
    moboObj.score;

  const price =
    gpuObj.price +
    cpuObj.price +
    ramObj.price +
    storageObj.price +
    moboObj.price;

  const fps = score * 1.2; // simple derived FPS model

  return { score, price, fps };
}

  

 const [result, setResult] = useState<null | {
  score: number;
  bottleneck: string;
  price: number;
  tier: string;
  summary: string;
  compatibilityIssues: string[];
  recommendations: string[];
}>(null);

  function handleCalculate() {
    const gpuObj = gpus.find((g) => g.name === gpu)!;
    const cpuObj = cpus.find((c) => c.name === cpu)!;
    const ramObj = ramOptions.find((r) => r.name === ram)!;
    const storageObj = storageOptions.find((s) => s.name === storage)!;
    const moboObj = motherboardOptions.find(
      (m) => m.name === motherboard
    )!;


    const bottleneck = detectBottleneck(
      gpuObj.score,
      cpuObj.score
    );

    const price =
    gpuObj.price +
    cpuObj.price +
    ramObj.price +
    storageObj.price +
    moboObj.price;

const score = calculateBuildScore({
  gpu: gpuObj.score,
  cpu: cpuObj.score,
  ram: ramObj.score,
  storage: storageObj.score,
  motherboard: moboObj.score,
});


// performance tier
let tier = "Balanced Build";
if (score > 300) tier = "High-End Gaming Build";
else if (score > 220) tier = "Mid-Range Gaming Build";
else tier = "Entry-Level Build";

// summary generator
let summary = "";

if (gpuObj.score > cpuObj.score + 30) {
  summary =
    "This build is GPU-heavy and optimized for gaming performance at higher resolutions.";
} else if (cpuObj.score > gpuObj.score + 30) {
  summary =
    "This build is CPU-heavy and better suited for esports titles, streaming, or productivity.";
} else {
  summary =
    "This is a balanced build suitable for most modern games at 1080p–1440p.";
}

  const compatibilityIssues = checkCompatibility({
    cpu: cpuObj.name,
    motherboard: moboObj.name,
    ram: ramObj.name,
    });

    const recommendations = getUpgradeAdvice({
    gpu: gpuObj.score,
    cpu: cpuObj.score,
    ram: ramObj.name,
    });

    

setResult({
  score,
  bottleneck: detectBottleneck(gpuObj.score, cpuObj.score),
  price,
  tier,
  summary,
  compatibilityIssues,
  recommendations,
});
  }

  return (
    <main className="blogContainer">
      {/* HERO */}
      <section className="heroBlock">
        <h1>🖥️ PC Build Analyzer</h1>
        <p>
          Evaluate your PC build performance, detect bottlenecks, and
          estimate total cost.
        </p>
      </section>

      {/* GPU */}
      <Section title="🎮 GPU">
        <select value={gpu} onChange={(e) => setGpu(e.target.value)}>
          {gpus.map((g) => (
            <option key={g.name} value={g.name}>
            {g.name} — ${g.price}
            </option>          ))}
        </select>
      </Section>

      {/* CPU */}
      <Section title="🧠 CPU">
        <select value={cpu} onChange={(e) => setCpu(e.target.value)}>
          {cpus.map((c) => (
                    <option key={c.name} value={c.name}>
                    {c.name} — ${c.price}
                    </option>          ))}
        </select>
      </Section>

      {/* RAM */}
      <Section title="🧩 RAM">
        <select value={ram} onChange={(e) => setRam(e.target.value)}>
          {ramOptions.map((r) => (
        <option key={r.name} value={r.name}>
        {r.name} — ${r.price}
        </option>          ))}
        </select>
      </Section>

      {/* STORAGE */}
      <Section title="💾 Storage">
        <select
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
        >
          {storageOptions.map((s) => (
        <option key={s.name} value={s.name}>
        {s.name} — ${s.price}
        </option>          ))}
        </select>
      </Section>

      {/* MOTHERBOARD */}
      <Section title="🧱 Motherboard">
        <select
          value={motherboard}
          onChange={(e) => setMotherboard(e.target.value)}
        >
          {motherboardOptions.map((m) => (
        <option key={m.name} value={m.name}>
        {m.name} — ${m.price}
        </option>          ))}
        </select>
      </Section>

      {/* ANALYZE BUILD BUTTON */}
      <Section title="⚡ Analyze Build">
        <button className="btnPrimary" onClick={handleCalculate}>
          Calculate Build
        </button>
      </Section>
      
     

      {/* RESULT */}
      {result && (
        <Section title="📊 Build Analysis">
          <div className="card">
                <h2>🧠 {result.tier}</h2>

                <p><strong>Performance Score:</strong> {result.score}</p>
                <p><strong>Total Price:</strong> ${result.price}</p>
                <p><strong>Status:</strong> {result.bottleneck}</p>

                <hr />

                <p>{result.summary}</p>

                {/* COMPATIBILITY */}
                {result.compatibilityIssues?.length > 0 && (
                    <>
                    <h3>⚠️ Compatibility Warnings</h3>
                    <ul>
                        {result.compatibilityIssues.map((issue, i) => (
                        <li key={i}>{issue}</li>
                        ))}
                    </ul>
                    </>
                )}

                {/* RECOMMENDATIONS */}
                {result.recommendations?.length > 0 && (
                    <>
                    <h3>💡 Upgrade Suggestions</h3>
                    <ul>
                        {result.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                        ))}
                    </ul>
                    </>
                )}
            </div>

    {/* OPTIMIZE BUILD BUTTON */}

      <button
        className="btnPrimary"
        onClick={() => {
            const gpuObj = gpus.find((g) => g.name === gpu)!;
            const cpuObj = cpus.find((c) => c.name === cpu)!;
            const ramObj = ramOptions.find((r) => r.name === ram)!;

            const suggestions = optimizeBuild({
            gpu: gpuObj,
            cpu: cpuObj,
            ram: ramObj,
            });

            setOptimizations(suggestions);
        }}
        >
        Optimize Build
    </button>

            {optimizations.length > 0 && (
                <Section title="⚡ Optimization Suggestions">
                    <div className="card">
                    <ul>
                        {optimizations.map((opt, i) => (
                        <li key={i}>{opt}</li>
                        ))}
                    </ul>
                    </div>
                </Section>
                )}

        {/* COMPARE BUILD BUTTON */}

        <Section title="🆚 Compare Builds">
        <button className="btnPrimary" onClick={handleCompare}>
            Compare Build A vs B
        </button>
        </Section>

    {comparison && (
     <Section title="📊 Visual Comparison">
            <div className="card">
                        {/* FPS COMPARISON */}

                      <h3>🎮 FPS Comparison</h3>

                        <div className="compareRow">
                            <span>Build A</span>
                            <div className="compareBar">
                            <div
                                className="barA"
                                style={{
                                width: `${Math.min((comparison.fpsA / 400) * 100, 100)}%`,
                                }}
                            />
                            </div>
                            <span>{Math.round(comparison.fpsA)}</span>
                        </div>

                        <div className="compareRow">
                            <span>Build B</span>
                            <div className="compareBar">
                            <div
                                className="barB"
                                style={{
                                width: `${Math.min((comparison.fpsB / 400) * 100, 100)}%`,
                                }}
                            />
                            </div>
                            <span>{Math.round(comparison.fpsB)}</span>
                        </div>

                        {/* PRICE BAR */}

                              <h3 style={{ marginTop: 20 }}>💰 Price Comparison</h3>

                            <div className="compareRow">
                                <span>Build A</span>
                                <div className="compareBar">
                                <div
                                    className="barPriceA"
                                    style={{
                                    width: `${Math.min((comparison.priceA / 2000) * 100, 100)}%`,
                                    }}
                                />
                                </div>
                                <span>${comparison.priceA}</span>
                            </div>

                            <div className="compareRow">
                                <span>Build B</span>
                                <div className="compareBar">
                                <div
                                    className="barPriceB"
                                    style={{
                                    width: `${Math.min((comparison.priceB / 2000) * 100, 100)}%`,
                                    }}
                                />
                                </div>
                                <span>${comparison.priceB}</span>
                            </div>

                            {/* VALUE BAR */}

                                  <h3 style={{ marginTop: 20 }}>⚡ Value (FPS / $)</h3>

                        <div className="compareRow">
                            <span>Build A</span>
                            <div className="compareBar">
                            <div
                                className="barValueA"
                                style={{
                                width: `${Math.min(comparison.valueA * 60, 100)}%`,
                                }}
                            />
                            </div>
                            <span>{comparison.valueA.toFixed(2)}</span>
                        </div>

                        <div className="compareRow">
                            <span>Build B</span>
                            <div className="compareBar">
                            <div
                                className="barValueB"
                                style={{
                                width: `${Math.min(comparison.valueB * 60, 100)}%`,
                                }}
                            />
                            </div>
                            <span>{comparison.valueB.toFixed(2)}</span>
                        </div>






            </div>
        </Section>
        )}

    </Section>

        
      )}
    </main>
  );
}