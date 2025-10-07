import reactLogo from "../assets/icons/react.svg";
import flutterLogo from "../assets/icons/flutter.svg";
import nodeJsLogo from "../assets/icons/nodejs.svg";
import htmlLogo from "../assets/icons/html.svg";
import cssLogo from "../assets/icons/css.svg";
import tailwindCssLogo from "../assets/icons/tailwind-css.svg";
import goLogo from "../assets/icons/golang.svg";
import supabase from "../assets/icons/supabase.svg";
import ibmCLoudLogo from "../assets/icons/ibm_cloud.svg";
import githubLogo from "../assets/icons/github.svg";
import githubWhiteLogo from "../assets/icons/github-white.svg";
import firebaseLogo from "../assets/icons/firebase.svg";
import dockerLogo from "../assets/icons/docker.svg";
import jsLogo from "../assets/icons/javascript.svg";
import tsLogo from "../assets/icons/typescript.svg";
import sqlLogo from "../assets/icons/sql.svg";
import actionsLogo from "../assets/icons/github-actions.svg";
import javaLogo from "../assets/icons/java.svg";
import vsCodeLogo from "../assets/icons/vscode.svg";
import figmaLogo from "../assets/icons/figma.svg";
import postmanLogo from "../assets/icons/postman.svg";
import cursorLogo from "../assets/icons/cursor.svg";
import cursorWhiteLogo from "../assets/icons/cursor-white.png";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Code } from "lucide-react";
import { useTheme } from "../ThemeContext";

const skills = [
  // frontend
  { name: "Flutter", category: ["frontend", "featured"], img: flutterLogo },
  { name: "React", category: ["frontend", "featured"], img: reactLogo },
  { name: "JavaScript", category: ["frontend"], img: jsLogo },
  { name: "TypeScript", category: ["frontend"], img: tsLogo },
  { name: "HTML", category: ["frontend"], img: htmlLogo },
  { name: "CSS", category: ["frontend"], img: cssLogo },
  { name: "Tailwind CSS", category: ["frontend"], img: tailwindCssLogo },

  // backend
  { name: "NodeJS", category: ["backend", "featured"], img: nodeJsLogo },
  { name: "Go", category: ["backend"], img: goLogo },
  { name: "Supabase", category: ["backend", "Cloud / DevOps"], img: supabase },
  { name: "SQL", category: ["backend"], img: sqlLogo },
  { name: "Java", category: ["backend"], img: javaLogo },

  // Cloud / DevOps
  {
    name: "Firebase",
    category: ["featured", "Cloud / DevOps"],
    img: firebaseLogo,
  },
  {
    name: "IBM Cloud",
    category: ["Cloud / DevOps"],
    img: ibmCLoudLogo,
  },

  {
    name: "CI/CD (GitHub Actions)",
    category: ["Cloud / DevOps"],
    img: actionsLogo,
  },
  {
    name: "Docker",
    category: ["tools", "Cloud / DevOps"],
    img: dockerLogo,
  },

  // tools
  {
    name: "GitHub",
    category: ["tools"],
    img: githubLogo,
    altImg: githubWhiteLogo,
  },
  { name: "VS Code", category: ["tools"], img: vsCodeLogo },
  {
    name: "Cursor",
    category: ["tools"],
    img: cursorLogo,
    altImg: cursorWhiteLogo,
  },
  { name: "Figma", category: ["tools"], img: figmaLogo },
  { name: "Postman", category: ["tools"], img: postmanLogo },
];

const categories = [
  "all",
  "featured",
  "frontend",
  "backend",
  "Cloud / DevOps",
  "tools",
];

export const SkillsSection = () => {
  const { isDark } = useTheme();
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
            const useAltImg: boolean = isDark && skill.altImg != undefined;

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
                    src={useAltImg ? skill.altImg : skill.img}
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
