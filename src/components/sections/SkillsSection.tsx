import type { IconType } from "react-icons";
import {
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const skillIcons: Record<string, IconType> = {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiGithub,
};

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills-heading"
        title="Skills"
        subtitle="Technologies and tools I work with."
      />

      <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skillIcons[skill.icon];

          return (
            <li key={skill.name}>
              <div className="group flex flex-col items-start gap-2">
                {Icon ? (
                  <Icon
                    className="h-6 w-6 text-muted transition-colors duration-150 group-hover:text-accent"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="text-sm text-muted transition-colors duration-150 group-hover:text-accent">
                  {skill.name}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
