import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { SEO } from "./seo";

export const HeroSection = () => (
  <>
    <SEO
      title="Omer Elammary — Software Engineer (Full Stack & Cloud) | Cosmic Portfolio"
      description="Portfolio of Omer Elammary, a software engineer building full stack web/mobile apps with Flutter, React, Node.js, Firebase, and growing cloud/DevOps skills. Based in Toronto."
      keywords={["Omer Elammary", "software engineer Toronto", "full stack developer", "Flutter", "React", "Node.js", "TypeScript", "Firebase", "Docker", "cloud", "DevOps", "AI"]}
      jsonLd={[
        { "@context": "https://schema.org", "@type": "Person", name: "Omer Elammary", jobTitle: "Software Engineer", description: "Software engineer building full stack web and mobile apps with a growing focus on cloud/DevOps.", address: { "@type": "PostalAddress", addressLocality: "Toronto", addressCountry: "CA" }, url: "https://omerelammary.com", sameAs: ["https://www.linkedin.com/in/omerelammary", "https://github.com/elammaryo"] },
        { "@context": "https://schema.org", "@type": "WebSite", name: "Cosmic Portfolio", url: "https://omerelammary.com" },
        { "@context": "https://schema.org", "@type": "ItemList", name: "Featured Projects", itemListElement: [{ "@type": "ListItem", position: 1, item: { "@type": "SoftwareApplication", name: "SuperOver", applicationCategory: "MobileApplication", operatingSystem: "iOS, Android", url: "https://omerelammary.com#projects" } }] },
      ]}
    />
    <section id="hero" className="hero-shell">
      <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" /><div className="hero-grid" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> Available for interesting work</div>
          <p className="hero-kicker">Software engineer · Toronto, Canada</p>
          <h1>Building digital<br /><em>experiences</em> with<br />real gravity.</h1>
          <p className="hero-description">I’m Omer — a full-stack engineer turning ambitious ideas into thoughtful products, from first pixel to cloud deployment.</p>
          <div className="hero-actions"><a href="#projects" className="cosmic-button">Explore selected work <ArrowUpRight size={17} /></a><a href="https://github.com/elammaryo" target="_blank" rel="noreferrer" className="quiet-button"><Github size={18} /> GitHub</a></div>
          <div className="hero-stats"><div><strong>Full stack</strong><span>web & mobile</span></div><div><strong>Cloud-ready</strong><span>systems thinking</span></div><div><strong>0 → 1</strong><span>product building</span></div></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" /><div className="hero-planet"><span>OE</span></div><div className="satellite satellite-one" /><div className="satellite satellite-two" /><div className="orbit-label label-top">BUILD / SHIP / LEARN</div><div className="orbit-label label-bottom">EST. 2024</div></div>
      </div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></a>
    </section>
  </>
);
