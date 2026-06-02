import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        title="Projects"
        subtitle="Some of my recent projects with live demos and source code."
      />

      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.title} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3 className="text-lg font-medium text-heading">
                {project.title}
              </h3>

              <div className="flex items-center gap-4 text-sm">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors duration-150 hover:text-accent"
                  >
                    Live
                    <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors duration-150 hover:text-accent"
                  >
                    GitHub
                    <FiGithub className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="mt-3 max-w-2xl space-y-3 text-base leading-relaxed text-foreground">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-3 text-sm text-muted">
              {project.tech.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
