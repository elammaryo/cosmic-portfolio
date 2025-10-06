import { Cloud, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Full Stack Developer & Tech Creator</h3>

            <p className="text-muted-foreground">
              With experience across Flutter, React, and Cloud based systems, I
              love bringing ideas to life from design to deployment. I've built
              everything from healthtech platforms to AI-powered apps, and I'm
              currently leading the development of SuperOver, a cross-platform
              app designed to help users discover and join local pickup sports
              games (currently pre-launch).
            </p>

            <p className="text-muted-foreground">
              Whether it's crafting responsive UI, building APIs that scale, or
              exploring cloud architecture, I aim to create software that's
              functional and feels effortless to use. I'm expanding into cloud
              engineering to unify fullstack development with modern DevOps
              practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="src/assets/documents/resume.pdf"
                download="Omer_Elammary_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and mobile applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    API & Backend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Designing and integrating APIs with secure, maintainable
                    backend logic
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Building skills to take full ownership of apps from front
                    end to cloud deployment, using CI/CD pipelines and cloud
                    infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
