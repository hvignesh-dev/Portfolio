import { Project, Skill, Experience } from '@/types'

// Mock data for portfolio content
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with modern payment integration and real-time inventory management.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: '3D Portfolio Website',
    description: 'Interactive 3D portfolio showcasing projects with immersive animations and modern UI.',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
]

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'Next.js', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'Three.js', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'PostgreSQL', category: 'backend', level: 4 },
  { name: 'AWS', category: 'tools', level: 3 },
]

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Senior Frontend Developer',
    startDate: '2022-01',
    description: [
      'Led development of modern web applications using React and Next.js',
      'Implemented 3D visualizations and interactive animations',
      'Collaborated with design teams to create responsive user interfaces',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Three.js'],
  },
]