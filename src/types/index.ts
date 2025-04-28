export interface NavLink {
  name: string;
  href: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}