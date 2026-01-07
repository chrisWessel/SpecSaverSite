
export interface Frame {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'Men' | 'Women' | 'Unisex' | 'Kids';
  style: 'Classic' | 'Modern' | 'Sport' | 'Vintage';
  colors: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  longDescription?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  location: string;
}

export enum Page {
  Home = 'home',
  Catalog = 'catalog',
  Services = 'services',
  About = 'about',
  Blog = 'blog',
  AIStylist = 'aistylist',
  Booking = 'booking',
  Branches = 'branches'
}
