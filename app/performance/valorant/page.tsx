import Section from "@/components/Section";
import Link from "next/link";

export default function ValorantPerformancePage() {
  return (
    <main className="blogContainer">
      {/* HERO */}
      <section className="heroBlock">
        <h1>🎯 Valorant Performance Guide (2026)</h1>
        <p>
          Optimize Valorant for maximum FPS, lower input delay, and
          consistent competitive performance.
        </p>
      </section>

      {/* GAME SETTINGS */}
      <Section title="⚡ Best In-Game Settings for FPS">
        <ul>
          <li>Multithreaded Rendering → ON</li>
          <li>Material Quality → Low</li>
          <li>Texture Quality → Low</li>
          <li>Detail Quality → Low</li>
          <li>V-Sync → OFF</li>
          <li>Anti-Aliasing → None</li>
        </ul>
      </Section>

      {/* NVIDIA */}
      <Section title="🎮 NVIDIA Control Panel Settings">
        <ul>
          <li>Power Management Mode → Prefer Maximum Performance</li>
          <li>Low Latency Mode → On</li>
          <li>Texture Filtering → High Performance</li>
        </ul>
      </Section>

      {/* WINDOWS */}
      <Section title="🪟 Windows Optimization">
        <ul>
          <li>Enable Game Mode</li>
          <li>Disable Startup Apps</li>
          <li>Set Power Plan → High Performance</li>
          <li>Disable background apps</li>
        </ul>
      </Section>

      {/* TOPICS GRID */}
      <Section title="🧩 Related Topics">
        <div className="gridSmall">
          <div className="card">🎯 Sensitivity Setup</div>
          <div className="card">🖥️ Best PC Settings</div>
          <div className="card">🌐 Network Optimization</div>
          <div className="card">⚡ FPS Boost Guide</div>
        </div>
      </Section>

      {/* BACK LINK */}
      <section className="backBlock">
        <Link href="/performance" className="card">
          ← Back to Performance Hub
        </Link>
      </section>
    </main>
  );
}