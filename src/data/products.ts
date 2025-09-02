import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'NunaFlow',
    description: 'Workflow automation platform that streamlines business processes across departments.',
    icon: 'fas fa-project-diagram',
    price: 99,
  },
  {
    id: 2,
    name: 'NunaSecure',
    description: 'Comprehensive cybersecurity solution with real-time threat detection and response.',
    icon: 'fas fa-shield-alt',
    price: 149,
  },
  {
    id: 3,
    name: 'NunaAI',
    description: 'No-code AI platform that enables businesses to build and deploy machine learning models.',
    icon: 'fas fa-robot',
    price: 199,
  },
];
