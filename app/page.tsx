import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>

    {/* Hero */}  
    <h1 className="h1">NexusLab</h1>

    <p className="p-muted">
      Optimize your gaming performance, build better setups, and access tools
      designed for competitive players.
    </p>

    <div style={{ marginTop: 20 }}>
      <a className="btn" href="/blog">Read Guides</a>
      <a className="btn btn-secondary" href="/tools" style={{ marginLeft: 10 }}>
        Explore Tools
      </a>
      
    </div>
      
      
    

       {/* Categories */}
     
      <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
      <div className="card">
        <h3>🎮 Performance</h3>
        <p className="p-muted">Optimize FPS and system performance.</p>
      </div>

      <div className="card">
        <h3>🖥️ Setups</h3>
        <p className="p-muted">Build gaming setups on any budget.</p>
      </div>

      <div className="card">
        <h3>🎥 Content Creation</h3>
        <p className="p-muted">Streaming, OBS, YouTube, and gear.</p>
      </div>

      <div className="card">
        <h3>🛠 Tools</h3>
        <p className="p-muted">Calculators and optimization tools.</p>
      </div>
    </div>

      {/* Featured Posts Placeholder */}
      <section style={{ marginTop: "60px" }}>
        <h2>Featured Guides</h2>
        <ul>
          <li>Best Windows 11 Settings for Gaming</li>
          <li>Best Gaming Setup Under $500</li>
          <li>Best OBS Settings for Beginners</li>
        </ul>
      </section>

    </main>
  );
}