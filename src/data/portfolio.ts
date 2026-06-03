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
    "Currently building projects with React and ASP.NET Core while seeking a software engineer role in Auckland.",
  description: [
    "A software developer and former Business Analyst at Visa with a strong interest in building technology that solves complex problems and delivers real-world value.",
    "I'm currently strengthening my full-stack engineering skills while I seek opportunities to return to a hands-on software development role where I can continue to grow as an engineer.",
    "I bring together previous commercial software development experience with a recent background in product management, analysis and systems-focused roles.",
    "Outside of work, I'm a keen runner and enjoy discovering interesting coffees and unusual craft beers.",
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
      "A full-stack e-commerce platform with a focus on performance, scalability and user experience.",
      "Built with React, React Router and Material UI, the frontend utilises loading skeletons for a smooth user experience and, React Context to manage the persistent cart state.",
      "The backend uses Node.js and Express for the server and APIs, with product data stored in a PostgreSQL database hosted on Supabase.",
    ],
    tech: ["React", "React Router", "PostgreSQL", "Material UI", "Express", "Node.js", "JavaScript", "Supabase", "Netlify"],
    liveUrl: "https://hartjulian-shopez.netlify.app",
    githubUrl: "https://github.com/hartjulian/shopez-frontend",
  },
  {
    title: "Task Manager",
    description: [
      "A simple and intuitive task manager built with React and TypeScript. Users can create, edit, and delete tasks, with support for filtering and sorting by due date and priority.",
      "Features include dark mode and persistence of task data and user theme preference using the browser's localStorage.",
      "This project was developed as a learning exercise to strengthen my React and TypeScript skills while exploring AI-assisted development workflows using Cursor.",
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Cursor", "Netlify"],
    liveUrl: "https://hartjulian-taskmanager.netlify.app",
    githubUrl: "https://github.com/hartjulian/task-manager",
  },
  {
    title: "Revox",
    description: [
      "Revox, meaning to Re-voice, is a lightweight Reddit client completed as part of the Codecademy Full Stack Engineer career path.",
      "Revox uses Reddit's APIs to fetch and display popular \"Reddits\". It is built using React and React Router, and utilises OAuth to authenticate users with their Reddit credentials.",
      "Revox is hosted on the Netlify platform."
    ],
    tech: ["React", "JavaScript", "React Router", "OAuth", "Netlify"],
    liveUrl: "https://hartjulian-revox.netlify.app",
    githubUrl: "https://github.com/hartjulian/revox",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "React", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Express", icon: "SiExpress" },
  { name: "C#", icon: "TbBrandCSharp" },
  { name: "ASP.NET Core", icon: "SiDotnet" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "SQL Server", icon: "DiMsqlServer" },
  { name: "CSS", icon: "SiCss" },
  { name: "Git", icon: "SiGit" },
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
