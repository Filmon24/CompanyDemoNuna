import type { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in tech innovation and business strategy.',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-twitter', url: '#' }
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO',
    bio: 'Technology architect specializing in scalable systems and AI solutions.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-github', url: '#' }
    ]
  },
  {
    id: 3,
    name: 'Priya Patel',
    position: 'Lead Designer',
    bio: 'UX/UI expert focused on creating intuitive and beautiful digital experiences.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    socialLinks: [
      { icon: 'fab fa-dribbble', url: '#' },
      { icon: 'fab fa-behance', url: '#' }
    ]
  },
  {
    id: 4,
    name: 'David Rodriguez',
    position: 'Senior Developer',
    bio: 'Full-stack engineer with expertise in modern web technologies and cloud computing.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    socialLinks: [
      { icon: 'fab fa-github', url: '#' },
      { icon: 'fab fa-stack-overflow', url: '#' }
    ]
  }
];
