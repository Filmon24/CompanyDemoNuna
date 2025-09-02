import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Financial Analytics Platform',
    description: 'A comprehensive financial data analysis tool that helps investment firms make data-driven decisions with real-time market insights.',
    gradient: 'from-purple-500 to-pink-500',
    icon: 'fas fa-chart-line',
    tags: ['AI', 'Big Data', 'Cloud'],
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'An integrated platform for hospitals to manage patient records, appointments, and billing with HIPAA-compliant security.',
    gradient: 'from-blue-500 to-teal-400',
    icon: 'fas fa-hospital',
    tags: ['Security', 'Mobile', 'IoT'],
  },
  {
    id: 3,
    title: 'E-commerce Personalization Engine',
    description: 'AI-powered recommendation system that increases conversion rates by delivering personalized shopping experiences.',
    gradient: 'from-orange-500 to-yellow-400',
    icon: 'fas fa-shopping-cart',
    tags: ['Machine Learning', 'UX', 'Scalability'],
  },
  {
    id: 4,
    title: 'Sustainability Monitoring',
    description: 'IoT solution that helps manufacturing companies track and reduce their environmental impact in real-time.',
    gradient: 'from-green-500 to-emerald-400',
    icon: 'fas fa-leaf',
    tags: ['IoT', 'Data Visualization', 'Edge Computing'],
  },
];
