import reactLogo from "../assets/react.svg";
import flutterLogo from "../assets/flutter.svg";
import nodeJsLogo from "../assets/nodejs.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import tailwindCssLogo from "../assets/tailwind-css.svg";
import goLogo from "../assets/golang.svg";
import supabase from "../assets/supabase.svg";
import ibmCLoudLogo from "../assets/ibm_cloud.svg";
import githubLogo from "../assets/github.svg";
import firebaseLogo from "../assets/firebase.svg";
import dockerLogo from "../assets/docker.svg";
import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript.svg";
import sqlLogo from "../assets/sql.svg";
import actionsLogo from "../assets/github-actions.svg";
import javaLogo from "../assets/java.svg";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Code } from "lucide-react";

const skills = [
  // frontend
  { name: "Flutter", category: ["frontend", "featured"], img: flutterLogo },
  { name: "React", category: ["frontend", "featured"], img: reactLogo },
  { name: "JavaScript", category: ["frontend"], img: jsLogo },
  { name: "TypeScript", category: ["frontend"], img: tsLogo },
  { name: "HTML", category: ["frontend"], img: htmlLogo },
  { name: "CSS", category: ["frontend"], img: cssLogo },
  { name: "Tailwind CSS", category: ["backend"], img: tailwindCssLogo },

  // backend
  { name: "NodeJS", category: ["backend", "featured"], img: nodeJsLogo },
  { name: "Go", category: ["backend"], img: goLogo },
  { name: "SQL", category: ["backend"], img: sqlLogo },
  { name: "Supabase", category: ["backend", "tools"], img: supabase },
  { name: "Java", category: ["backend"], img: javaLogo },
  // tools

  { name: "Firebase", category: ["featured", "tools"], img: firebaseLogo },
  { name: "IBM Cloud", category: ["tools"], img: ibmCLoudLogo },
  { name: "GitHub", category: ["tools"], img: githubLogo },

  // DevOps
  { name: "CI/CD (GitHub Actions)", category: ["devops"], img: actionsLogo },
  { name: "Docker", category: ["devops", "tools"], img: dockerLogo },
];

const categories = ["all", "featured", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category.includes(activeCategory)
  );

  const skillsLength = filteredSkills.length;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => {
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols1 md:grid-cols2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const isLast: boolean = index === skillsLength - 1;

            return (
              <div
                key={index}
                className={cn(
                  "bg-card p-6 rounded-lg shadow-xs card-hover flex items-center",
                  isLast && skillsLength % 3 === 1 && "lg:col-start-2"
                )}
              >
                {skill.img !== undefined ? (
                  <img
                    src={skill.img}
                    className={cn(
                      "logo mr-5",
                      skill.name == "React" && "logo-spinner"
                    )}
                  />
                ) : (
                  <div className="h-20 w-20 mr-8 ml-2 rounded-full bg-primary/10 flex justify-center items-center">
                    <Code className="text-primary" size={35} />
                  </div>
                )}

                <div className="text-left mt-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
