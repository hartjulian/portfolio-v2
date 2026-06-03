"use client";

import { nav, site, social } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
} as const;

export function Sidebar() {
  const sectionIds = nav.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <aside className="relative z-10 border-b border-border bg-background px-6 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 py-8 lg:mx-0 lg:max-w-none lg:h-full lg:px-0 lg:py-0">
        <header>
          <h1 className="text-lg font-medium tracking-tight text-heading">
            {site.name}
          </h1>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {site.focus}
          </p>
        </header>

        <nav aria-label="Page sections">
          <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {nav.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    className={`block rounded px-3 py-2 text-sm transition-colors duration-150 lg:border-l-2 lg:pl-4 ${
                      isActive
                        ? "border-accent text-accent lg:border-accent"
                        : "border-transparent text-muted hover:text-heading lg:border-transparent"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-4 lg:mt-auto lg:flex-col lg:gap-3">
          {social.map((link) => {
            const Icon = socialIcons[link.icon];
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-accent"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline lg:inline">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
