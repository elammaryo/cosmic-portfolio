import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SuperOver App",
    description:
      "A cross platform pickup sports app. Check out our page and join the waitlist to stay updated on events and our upcoming release!",
    img: "/projects/superover.png",
    tags: [
      "Flutter",
      "Firebase",
      "NodeJS",
      "API Dev",
      "CI/CD",
      "and more...  ",
    ],
    demoUrl: "https://superoverapp.com",
    githubUrl: "github.com/elammaryo",
  },
  {
    id: 2,
    title: "Self Order Kiosk",
    description:
      "A customer facing food ordering application for fastfood restaurant kiosks",
    img: "/projects/kiosk-app.png",
    tags: ["Flutter", "Figma"],
    demoUrl: "",
    githubUrl: "https://github.com/elammaryo",
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "An AI chatbot site created using React and NodeJS",
    img: "/projects",
    tags: ["React", "NodeJS", "API Dev", "AI", "Hosting"],
    demoUrl: "https://ai-brobot.netlify.app",
    githubUrl: "https://github.com/elammaryo",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
            return (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => {
                      return (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            href="https://github.com/elammaryo"
            target="_blank"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
