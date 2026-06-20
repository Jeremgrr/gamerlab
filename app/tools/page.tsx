import Link from "next/link";
import Section from "@/components/Section";

export default function ToolsPage() {
  const availableTools = [
    {
      title: "FPS Calculator",
      icon: "⚡",
      href: "/tools/fps-calculator",
      description:
        "Estimate FPS across popular games using your hardware and resolution.",
    },
    {
      title: "PC Build Analyzer",
      icon: "🖥️",
      href: "/tools/build-analyzer",
      description:
        "Analyze your PC, detect bottlenecks, estimate pricing, and receive upgrade recommendations.",
    },
  ];

  const upcomingTools = [
    "Build Comparison",
    "Bottleneck Checker",
    "Upgrade Planner",
    "Streaming PC Calculator",
    "PSU Calculator",
    "Monitor Match Tool",
  ];

  return (
    <main className="blogContainer">
      <section className="heroBlock">
        <h1>🛠 NexusLab Tools</h1>

        <p>
          Interactive tools built to help gamers optimize performance,
          compare hardware, and build better PCs.
        </p>
      </section>

      <Section title="Available Tools">
        <div className="grid">
          {availableTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="card"
            >
              <h2>
                {tool.icon} {tool.title}
              </h2>

              <p>{tool.description}</p>

              <div className="launchTool">
                Launch Tool →
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Coming Soon">
        <div className="gridSmall">
          {upcomingTools.map((tool) => (
            <div
              key={tool}
              className="comingSoonCard"
            >
              🚧 {tool}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}