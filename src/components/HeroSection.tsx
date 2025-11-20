import { ArrowDown } from "lucide-react";
import { SEO } from "./seo";

export const HeroSection = () => {
  return (
    <>
      <SEO
        title="Omer Elammary — Software Engineer (Full Stack & Cloud) | Cosmic Portfolio"
        description="Portfolio of Omer Elammary, a software engineer building full stack web/mobile apps with Flutter, React, Node.js, Firebase, and growing cloud/DevOps skills. Based in Toronto."
        keywords={[
          "Omer Elammary",
          "software engineer Toronto",
          "software developer Toronto",
          "full stack developer",
          "full stack engineer",
          "flutter developer",
          "react developer",
          "Flutter",
          "React",
          "Node.js",
          "TypeScript",
          "Firebase",
          "Docker",
          "GitHub Actions",
          "cloud",
          "DevOps",
          "AI",
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Omer Elammary",
            jobTitle: "Software Engineer",
            description:
              "Software engineer building full stack web and mobile apps with a growing focus on cloud/DevOps.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Toronto",
              addressCountry: "CA",
            },
            url: "https://omerelammary.com",
            sameAs: [
              "https://www.linkedin.com/in/omerelammary",
              "https://github.com/elammaryo",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Cosmic Portfolio",
            url: "https://omerelammary.com",
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Portfolio Sections",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Hero",
                url: "https://omerelammary.com#hero",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                url: "https://omerelammary.com#about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Skills",
                url: "https://omerelammary.com#skills",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Projects",
                url: "https://omerelammary.com#projects",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact",
                url: "https://omerelammary.com#contact",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Featured Projects",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "SoftwareApplication",
                  name: "SuperOver",
                  applicationCategory: "MobileApplication",
                  operatingSystem: "iOS, Android",
                  description:
                    "Cross-platform Flutter app for discovering and joining local pickup sports games. Pre-launch.",
                  url: "https://omerelammary.com#projects",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "WebApplication",
                  name: "Self-Order Kiosk MVP",
                  description:
                    "iPad-based kiosk for menu browsing, cart, and checkout.",
                  url: "https://omerelammary.com#projects",
                },
              },
            ],
          },
        ]}
      />

      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm </span>
              <span className="text-primary opacity-0 animate-fade-in">
                {" "}
                Omer
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Elammary
              </span>
            </h1>
            <p>
              I turn caffeine and code into beautiful applications. Currently
              orbiting between fullstack and cloud engineering, where I build
              stellar experiences and systems.
            </p>
            <div>
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
    </>
  );
};
