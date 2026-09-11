import { ArrowUpRight, Github } from "lucide-react";
import "./ProjectsSection.css";

const projects = [
  {
    title: "SuperOver",
    category: "Mobile platform · Founding engineer",
    description: "Making it easier to find a game and get out there. I built the mobile app, backend, and admin tools for a local sports booking platform.",
    image: "/projects/superover.png",
    capabilities: ["Sports booking", "Real-time chat", "Stripe payments"],
    stack: "Flutter / React / Firebase / Node.js",
    url: "https://superoverapp.com",
    source: null,
  },
  {
    title: "GameOver Studio",
    category: "Music platform · Personal project",
    description: "A home for my beats, built with the same care as the music. Custom audio playback, secure streaming, and Spotify integration bring the collection to life.",
    image: "/projects/gameover.png",
    capabilities: ["Custom audio player", "Secure audio delivery", "Spotify integration"],
    stack: "Next.js / TypeScript / AWS S3 / Spotify API",
    url: "https://gameover.studio",
    source: "https://github.com/elammaryo/gameover",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="selected-projects" aria-labelledby="projects-heading">
    <div className="container">
      <header className="projects-heading">
        <div><p className="section-overline">Ideas, made real</p><h2 id="projects-heading">Selected <span>work.</span></h2></div>
        <p>Things I’ve built around the things I care about: people, play, and music.</p>
      </header>

      <article className="project-feature" aria-labelledby="gameday-title">
        <div className="gameday-art" aria-hidden="true">
          <span className="project-art-index">01 / COMMUNITY & CODE</span>
          <div className="pitch"><div className="pitch-center" /><div className="pitch-box pitch-box-top" /><div className="pitch-box pitch-box-bottom" /><i className="pitch-player player-one" /><i className="pitch-player player-two" /><i className="pitch-player player-three" /></div>
          <div className="gameday-art-title">GameDay<span>See you on the pitch.</span></div>
          <span className="project-art-caption">Pickup soccer. Built together.</span>
        </div>
        <div className="project-feature-copy">
          <p className="project-category">Independent venture · Web platform</p>
          <h3 id="gameday-title">GameDay</h3>
          <p className="project-tagline">Built for the beautiful game.</p>
          <p className="project-description">Bringing people together for pickup soccer — and building the system behind it. I created the website and admin dashboard, from game discovery and booking to payments and finances.</p>
          <ul className="project-capabilities gameday-capabilities">
            <li><strong>Book a spot</strong><span>Discover sessions, book a spot, and pay by card through Stripe or by e-transfer.</span></li>
            <li><strong>Close the loop</strong><span>Automated e-transfer verification from incoming emails and confirmation emails through Resend.</span></li>
            <li><strong>Run the game</strong><span>Admin tools for sessions, venues, revenue, and profits.</span></li>
          </ul>
          <details className="project-stage"><summary>Built and tested · preparing for launch</summary><p>We’ve hosted two pickup sessions. Booking, card payments, and automated e-transfer verification are functional and tested, with the platform preparing for launch.</p></details>
          <div className="project-links"><a href="https://gamedaygta.com" target="_blank" rel="noreferrer">Explore GameDay <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </article>

      <div className="project-pair">
        {projects.map((project, index) => (
          <article className="selected-project" key={project.title}>
            <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>
              <img src={project.image} alt={`${project.title} website preview`} loading="lazy" decoding="async" />
              <span className="project-preview-action"><ArrowUpRight size={20} aria-hidden="true" /></span>
            </a>
            <div className="selected-project-copy">
              <p className="project-category">0{index + 2} / {project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-capabilities project-pills">{project.capabilities.map(item => <li key={item}>{item}</li>)}</ul>
              <p className="project-stack">{project.stack}</p>
              <div className="project-links"><a href={project.url} target="_blank" rel="noreferrer">Visit site <ArrowUpRight size={16} aria-hidden="true" /></a>{project.source && <a href={project.source} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> Source</a>}</div>
            </div>
          </article>
        ))}
      </div>
      <a className="projects-github" href="https://github.com/elammaryo" target="_blank" rel="noreferrer">More experiments on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div>
  </section>
);
