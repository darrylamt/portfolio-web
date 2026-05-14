export const profile = {
  name: 'Darryl Amoatey',
  title: 'Full Stack Developer',
  tagline: 'Building digital experiences from Accra to the world.',
  bio: "I'm a Full Stack Developer and Acting Head of IT at the Small Arms Commission of Ghana. I'm passionate about building clean, performant web applications and leveling up every day. Currently deep in the Next.js, React, and TypeScript ecosystem — always chasing the best at what I do.",
  location: 'Accra, Ghana',
  email: 'amoateydarryl4@gmail.com',
  github: 'https://github.com/darrylamt',
  twitter: 'https://twitter.com/darrylamt',
  avatar: 'https://avatars.githubusercontent.com/u/123960386?v=4',
}

export const skills = [
  { name: 'Next.js', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Tailwind CSS', category: 'styling' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'PHP', category: 'language' },
  { name: 'Git & GitHub', category: 'tool' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Vercel', category: 'tool' },
  { name: 'Figma', category: 'tool' },
]

export const projects = [
  {
    id: 1,
    name: 'Gavel MVP',
    description:
      'A full-stack web application built as an MVP — likely for auction or governance workflows. Features a modern TypeScript/Next.js stack deployed on Vercel.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/darrylamt/gavel-mvp',
    live: 'https://gavel-mvp-ten.vercel.app',
    featured: true,
  },
  {
    id: 2,
    name: 'NACSA Attendance',
    description:
      'Attendance management system built for NACSA — streamlining staff tracking and records with a clean, efficient interface.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/darrylamt/nacsa-attendance',
    live: null,
    featured: true,
  },
  {
    id: 3,
    name: 'MG Reliance',
    description:
      'A TypeScript-based web platform for MG Reliance, featuring a polished UI and smooth user experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/darrylamt/mgreliance',
    live: 'https://mgreliance.vercel.app',
    featured: true,
  },
  {
    id: 4,
    name: 'RL DB',
    description:
      'A database-driven application with a modern TypeScript frontend. Explores data management and real-time UI patterns.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/darrylamt/rl_db',
    live: 'https://rl-db.vercel.app',
    featured: false,
  },
  {
    id: 5,
    name: 'Geolicrafts',
    description:
      'A JavaScript-powered web project for Geolicrafts — showcasing product listings with a clean, responsive design.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/darrylamt/geolicrafts',
    live: 'https://geolicrafts.vercel.app',
    featured: false,
  },
  {
    id: 6,
    name: 'Small Arms Ghana',
    description:
      'A web platform built to support the Small Arms Commission of Ghana — digitising processes and improving information accessibility.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/darrylamt/small-arms-ghana',
    live: null,
    featured: false,
  },
]

export const experience = [
  {
    id: 1,
    role: 'Acting Head of IT',
    company: 'Small Arms Commission, Ghana',
    period: '2024 — Present',
    description:
      'Leading IT operations and digital infrastructure for a government commission. Overseeing systems administration, network management, and driving digital transformation initiatives across the organisation.',
    tech: ['Systems Admin', 'Network Management', 'IT Strategy'],
    current: true,
  },
  {
    id: 2,
    role: 'IT Assistant',
    company: 'Small Arms Commission, Ghana',
    period: '2023 — 2024',
    description:
      'Provided technical support and maintained IT infrastructure. Assisted in managing internal systems and contributing to web development projects for the commission.',
    tech: ['Technical Support', 'Web Development', 'Infrastructure'],
    current: false,
  },
  {
    id: 3,
    role: 'Software Engineering Student',
    company: 'ALX Africa',
    period: '2023',
    description:
      'Completed an intensive software engineering programme covering full-stack development, C programming, shell scripting, systems engineering, and DevOps fundamentals.',
    tech: ['C', 'Shell', 'Python', 'Systems Engineering', 'DevOps'],
    current: false,
  },
]
