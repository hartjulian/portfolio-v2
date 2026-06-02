import type { SkillIconKey } from "@/lib/skillIcons";

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: SkillIconKey;
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
    "Currently building projects with React and ASP.NET Core while seeking a Junior Software Engineer role in Auckland.",
  description: [
    "A software developer and former Visa BA with a strong interest in building technology that solves complex problems and delivers real-world value.",
    "I'm currently strengthening my full-stack engineering skills while I seek opportunities to return to a hands-on role as a junior developer. I bring together previous development experience with a background in product management, analysis and systems-focused roles.",
    "Outside of work, I'm an avid runner and enjoy discovering interesting coffees and craft beers.",
  ],
};

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export const projects: Project[] = [
  {
    title: "ShopEZ",
    description: [
      "The final project for the Codecademy Full Stack Engineer career path. A full-stack e-commerce platform with a focus on performance and scalability.",
      "The frontend is built with React, React Router and Material UI.It utilises loading skeletons for a smooth user experience and uses React Context to manage the persistent cart state.",
      "The backend is built with Node.js and Express for the server and API. It uses a PostgreSQL database hosted on Supabase.",
    ],
    tech: ["React", "React Router", "PostgreSQL", "Material UI", "Express", "Node.js", "JavaScript", "Supabase", "Netlify"],
    liveUrl: "https://hartjulian-shopez.netlify.app",
    githubUrl: "https://github.com/hartjulian/shopez-frontend",
  },
  {
    title: "Task Manager",
    description: [
      "A task manager built with React and TypeScript. It allows you to add, edit, and delete tasks.",
      "Features include dark mode, task filtering, and task sorting, and uses local storage to persist the task data and user theme preference.",
      "This project was built as a learning exercise to improve my skills with React and TypeScript, and mostly to explore AI-assisted development with Cursor.",
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Cursor", "Netlify"],
    liveUrl: "https://hartjulian-taskmanager.netlify.app",
    githubUrl: "https://github.com/hartjulian/task-manager",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "React", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "C#", icon: "TbBrandCSharp" },
  { name: "ASP.NET Core", icon: "SiDotnet" },
  { name: "Cursor", icon: "CursorIcon" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "SQL Server", icon: "DiMsqlServer" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "GitHub", icon: "SiGithub" },


];

export const social: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/hartjulian",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julianhart81/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:julian.w.hart@gmail.com",
    icon: "email",
  },
];
