import type { IconType } from "react-icons";
import {
  SiCss,
  SiDotnet,
  SiExpress,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";


export const skillIcons = {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiCss,
  SiExpress,
  SiGit,
  SiDotnet,
  TbBrandCSharp,
  DiMsqlServer,
} as const satisfies Record<string, IconType>;

export type SkillIconKey = keyof typeof skillIcons;
