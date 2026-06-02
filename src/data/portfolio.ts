export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export const site = {
  name: "Julian Hart",
  tagline: "Software Engineer",
  focus:
    "Currently refreshing my portfolio and seeking full-stack or frontend engineering roles.",
  description:
    "I build clean, accessible web applications with a focus on performance and thoughtful user experience.",
};

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export const about = site.description;

export const projects: Project[] = [
  {
    title: "Taskflow",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop boards, and team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Canvas",
    description:
      "Minimal weather dashboard with location search, hourly forecasts, and responsive data visualizations.",
    tech: ["React", "TypeScript", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "DevNotes",
    description:
      "Markdown note-taking app with full-text search, tagging, and offline support via service workers.",
    tech: ["Next.js", "Node.js", "SQLite", "PWA"],
    githubUrl: "https://github.com",
  },
  {
    title: "API Gateway Toolkit",
    description:
      "Internal tooling for monitoring, rate limiting, and logging across microservices.",
    tech: ["Node.js", "Redis", "Docker", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "React", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Git", icon: "SiGit" },
  { name: "Docker", icon: "SiDocker" },
  { name: "GraphQL", icon: "SiGraphql" },
  { name: "Python", icon: "SiPython" },
  { name: "Figma", icon: "SiFigma" },
];

export const social: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: "email",
  },
];
