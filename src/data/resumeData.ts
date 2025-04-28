import {
  Experience,
  Education,
  SkillCategory,
  Project,
  Achievement,
  SocialLink,
} from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Chakr Innovation",
    location: "Gurugram, India",
    period: "Feb 2024 - Present",
    description: [
      "Built and scaled a real-time data portal (React.js, Django), improving data accuracy and efficiency by 40%, with optimized API performance using RESTful standards and TanStack Query.",
      "Built an intelligent chatbot interface for querying experiment summary reports using Llama3 and Retrieval-Augmented Generation (RAG). Processed and vectorized reports into persistent ChromaDB, and implemented agentic prompting to generate context-rich, accurate answers and chat headlines dynamically.",
      "Engineered a high-performance batch processing system (Polars), cutting processing time by 70%, enabling multi-file ingestion at scale, and accelerating data extraction by 60%.",
      "Developed a meta-driven form builder, replacing hardcoded forms with dynamic, user-configurable templates, reducing UI dev effort by 50% and improving data integrity at scale.",
      "Designed an RCA dashboard with recursive traceability and real-time analytics, reducing defect identification time by 60%, and replacing static reports with real-time, large-scale data pipelines for seamless performance",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Filo Edtech",
    location: "Remote",
    period: "Aug 2023 - Jan 2024",
    description: [
      "Reduced JavaScript bundle size by 40% through the implementation of dynamic imports and lazy loading techniques.",
      "Enhanced SEO performance and Page Speed by 70% through strategic improvements in Core Web Vitals.",
      "Integrated G-Analytics and video ads with complex conditional rendering which increased monetization by 30%.",
    ],
  },
  {
    id: 3,
    role: "Co-Founder",
    company: "Liveasy Logistics",
    location: "Remote",
    period: "Feb 2021 - Feb 2023",
    description: [
      "Led development of a comprehensive logistics platform using Flutter, Firebase, and Spring Boot, successfully onboarding 500+ users.",
      "Managed a team of 20+ interns in developing fleet booking and monitoring systems.",
      "Implemented 100% robust backend architecture using Spring Boot, PostgreSQL, and AWS for real-time fleet tracking.",
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Indian Institute of Technology Delhi",
    degree: "Bachelor of Technology (B.Tech)",
    location: "Delhi, India",
    period: "2019 – 2023",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "C++", proficiency: 80 },
      { name: "Java", proficiency: 75 },
      { name: "Golang", proficiency: 70 },
      { name: "Dart", proficiency: 65 },
      { name: "SML", proficiency: 60 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React.js", proficiency: 95 },
      { name: "Next.js", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 80 },
      { name: "Django", proficiency: 85 },
      { name: "Spring Boot", proficiency: 75 },
      { name: "Flutter", proficiency: 70 },
    ],
  },
  {
    name: "Databases & Tools",
    skills: [
      { name: "MongoDB", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "MySQL", proficiency: 85 },
      { name: "AWS", proficiency: 80 },
      { name: "Docker", proficiency: 75 },
      { name: "Git", proficiency: 90 },
      { name: "Firebase", proficiency: 85 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Finance Manager",
    description:
      "Engineered a personal finance tracking platform using Next.js 15+ (App Router) and TypeScript, enabling streamlined expense management with categorized breakdowns and real-time filtering. Enhanced financial insights by integrating interactive Pie and Bar charts, enabling users to track spending patterns effectively with a simplistic User Interface.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "React Query"],
    links: {
      github: "https://github.com/chirag4601/finance-manager",
      live: "https://finance-manager-roan.vercel.app/",
    },
  },
  {
    id: 2,
    title: "AI Agency Website",
    description:
      "Revamped a visually stunning, high-performance AI agency website, ensuring a seamless user experience with advanced animations and a modern UI. Increased user engagement by 60% by integrating Framer Motion animations, enhancing visual appeal and interactivity. Delivered the project 30% ahead of schedule, maintaining scalability and clean, maintainable code.",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    links: {
      live: "https://createai.solutions/",
    },
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "1200+ DSA Problems Solved",
    description:
      "Solved Data Structures and Algorithms problems across LeetCode, GeeksForGeeks, Hackerrank.",
    icon: "Code2",
  },
  {
    id: 2,
    title: "JEE Advanced Rank 1886",
    description:
      "Achieved rank 1886 in IIT JEE 2019 out of 1.2 million students.",
    icon: "Trophy",
  },
  {
    id: 3,
    title: "Startup Co-founder",
    description:
      "Co-founded and built Liveasy Logistics from scratch, transforming an idea into a fully functional product with a scalable business model.",
    icon: "Rocket",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/chirag4601/",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chirag-gupta-iitd/",
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/chirag895537/",
    icon: "Code",
  },
];

export const contactInfo = {
  email: "chirag4601@gmail.com",
  phone: "+91-9216725866",
  location: "India",
};
