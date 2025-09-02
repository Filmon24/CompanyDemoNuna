// Shared types for data modules

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  gradient: string;
  icon: string;
  tags: string[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  icon: string;
  price: number;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface SocialLink {
  icon: string;
  url: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
}


