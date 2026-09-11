import { ArrowDownToLine } from "lucide-react";
import "./ExperienceSection.css";

const experience = [
  {
    company: "CMiC",
    role: "Software Engineer",
    start: "2026-04",
    startLabel: "Apr 2026",
    end: null,
    endLabel: "Present",
    context: "Construction ERP",
    contributions: [
      "Building Flutter front-end experiences for construction project management software within an enterprise ERP platform.",
      "Working with a Flutter codebase that uses Drift for its local database layer.",
    ],
    stack: ["Flutter", "Dart", "Drift"],
    previousRole: null,
  },
  {
    company: "SuperOver",
    role: "Founding Software Engineer",
    start: "2025-04",
    startLabel: "Apr 2025",
    end: "2026-04",
    endLabel: "Apr 2026",
    context: "Local sports, connected",
    contributions: [
      "Architected and built a sports booking platform across a Flutter mobile app, Node.js / TypeScript backend, and React admin dashboard.",
      "Integrated verified Stripe payments and real-time chat, and automated mobile build and release workflows with GitHub Actions.",
    ],
    stack: ["Flutter", "React", "Node.js", "Firebase", "CI/CD"],
    previousRole: null,
  },
  {
    company: "Skinopathy",
    role: "Software Engineer",
    start: "2024-01",
    startLabel: "Jan 2024",
    end: "2025-05",
    endLabel: "May 2025",
    context: "Healthtech",
    contributions: [
      "Developed Golang APIs for appointment changes and a health card verification system with expiry tracking and renewal reminders.",
      "Built medical questionnaire and AI skin assessment flows in Flutter, and improved app reliability through UI and state management refactoring.",
    ],
    stack: ["Flutter", "Golang", "Docker"],
    previousRole: {
      title: "Software Engineer Intern",
      description: "Built booking, food journal, and clinical questionnaire features, and contributed responsive UI, bug fixes, and code reviews.",
    },
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="experience-section" aria-labelledby="experience-heading">
    <div className="container">
      <header className="experience-heading">
        <p className="section-overline">The journey so far</p>
        <h2 id="experience-heading">Where I’ve <span>built.</span></h2>
        <p>Construction, healthtech, and community sports. Different problems, the same drive to build.</p>
      </header>

      <ol className="experience-timeline">
        {experience.map((job) => (
          <li className={`experience-entry${!job.end ? " experience-entry-current" : ""}`} key={`${job.company}-${job.start}`}>
            <div className="experience-period">
              <span><time dateTime={job.start}>{job.startLabel}</time> — {job.end ? <time dateTime={job.end}>{job.endLabel}</time> : job.endLabel}</span>
              {!job.end && <span className="experience-current">Current role</span>}
            </div>
            <article className="experience-details">
              <div className="experience-company">{job.company}<span>{job.context}</span></div>
              <h3>{job.role}</h3>
              <ul className="experience-contributions">
                {job.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
              <ul className="experience-stack" aria-label="Technologies">
                {job.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {job.previousRole && <div className="experience-previous">
                <p className="experience-previous-label">Earlier at Skinopathy</p>
                <h4>{job.previousRole.title}</h4>
                <p className="experience-previous-dates"><time dateTime="2023-01">Jan 2023</time> — <time dateTime="2023-12">Dec 2023</time></p>
                <p>{job.previousRole.description}</p>
              </div>}
            </article>
          </li>
        ))}
      </ol>

      <a className="experience-resume" href="/documents/Omer_Elammary_Resume.pdf" download="Omer_Elammary_Resume.pdf">
        Download Resume <ArrowDownToLine size={16} aria-hidden="true" />
      </a>
    </div>
  </section>
);
