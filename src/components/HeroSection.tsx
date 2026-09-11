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
          <h1>Turning caffeine <span className="hero-plus">+</span> code into <em>beautiful</em> applications.</h1>
          <p className="hero-description">I’m Omer, a software engineer building web and mobile experiences—from first pixel to cloud deployment.</p>
          <div className="hero-actions"><a href="#projects" className="cosmic-button">Explore selected work <ArrowUpRight size={17} /></a><a href="https://github.com/elammaryo" target="_blank" rel="noreferrer" className="quiet-button"><Github size={18} /> GitHub</a></div>
        </div>
        <figure className="hero-art engineering-orbit">
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          <div className="orbit orbit-c" aria-hidden="true" />
          <div className="hero-planet" aria-hidden="true"><div className="planet-latitude" /><div className="planet-longitude" /></div>
          <svg className="orbital-type" viewBox="0 0 500 500" aria-hidden="true">
            <defs>
              <path id="fullstack-arc" d="M 75,250 A 175,175 0 0,1 425,250" />
              <path id="cloud-arc" d="M 75,250 A 175,175 0 0,0 425,250" />
              <linearGradient id="orbital-trail"><stop stopColor="#a99bff" stopOpacity="0" /><stop offset="1" stopColor="#a99bff" /></linearGradient>
            </defs>
            <circle className="type-orbit-track" cx="250" cy="250" r="175" />
            <g className="orbit-type-top"><text textAnchor="middle"><textPath href="#fullstack-arc" startOffset="50%">FULL-STACK</textPath></text></g>
            <g className="orbit-type-bottom"><text textAnchor="middle" dy="22"><textPath href="#cloud-arc" startOffset="50%">CLOUD ENGINEERING</textPath></text></g>
            <g className="orbit-comet"><path d="M 75,250 A 175,175 0 0,1 126,126" fill="none" stroke="url(#orbital-trail)" strokeWidth="2" /><circle cx="126" cy="126" r="3" fill="#c7bcff" /></g>
            <g className="orbit-comet orbit-comet-secondary"><circle cx="425" cy="250" r="2.5" fill="#70d5dc" /></g>
          </svg>
          <figcaption className="orbit-caption"><span aria-hidden="true">Currently orbiting between…</span><span className="sr-only">Currently orbiting between full-stack and cloud engineering.</span></figcaption>
        </figure>
      </div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></a>
    </section>
  </>
);
