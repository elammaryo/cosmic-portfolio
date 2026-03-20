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
            <h3>Software Engineer & Tech Creator</h3>

            <p className="text-muted-foreground">
              I'm Omer, a software engineer based in Mississauga who genuinely
              loves building things. Whether it's a mobile app, backend systems,
              or a side project that probably started as "just a quick idea",
              I'm most alive when I'm turning an idea into something real and
              tangible.
            </p>

            <p className="text-muted-foreground">
              I've spent the last couple of years working across healthtech and
              early stage startups, which taught me how to move fast, wear many
              hats, and care deeply about the details. Right now I'm the
              founding engineer at SuperOver while pushing further into cloud
              and DevOps, owning the full journey from idea to deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/documents/Omer_Elammary_Resume.pdf"
                download="Omer_Elammary_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
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
