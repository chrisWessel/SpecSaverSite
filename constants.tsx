
import { Frame, Service, BlogPost } from './types';

export const BRAND_NAME = "Specsavers Opticians";

export const SERVICES: Service[] = [
  {
    id: 'eye-exam',
    title: 'Comprehensive Eye Exams',
    description: 'Advanced clinical testing to ensure your vision and eye health are at their peak.',
    icon: '👁️',
    longDescription: 'Our eye exams go beyond just checking your vision. We screen for glaucoma, cataracts, and other health markers using state-of-the-art diagnostic equipment.'
  },
  {
    id: 'contact-lenses',
    title: 'Contact Lens Fitting',
    description: 'Precision measurement and fitting for daily, weekly, or monthly disposables.',
    icon: '🔘',
    longDescription: 'Whether you are a new wearer or looking for an upgrade, our experts provide personalized fitting sessions and follow-up care for all lens types.'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Optometry',
    description: 'Specialized care for children to support healthy visual development.',
    icon: '👶',
    longDescription: 'We specialize in friendly, stress-free eye checks for children. Early detection of sight issues is crucial for learning and development.'
  },
  {
    id: 'corporate',
    title: 'Corporate Eye Care',
    description: 'Tailored vision programs for businesses and their employees.',
    icon: '💼',
    longDescription: 'Protect your team with our VDU (Video Display Unit) screening and safety eyewear solutions tailored for your workplace needs.'
  },
  {
    id: 'repairs',
    title: 'Frame Repairs',
    description: 'Expert adjustment and repair services for your favorite eyewear.',
    icon: '🛠️',
    longDescription: 'Lost a screw or snapped a hinge? Our on-site technicians can restore most frames to their original comfort and fit.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Choosing the Right Frame for Your Face Shape',
    excerpt: 'Find out which styles complement your unique features perfectly.',
    author: 'Dr. T. Moyo',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1511499767350-a1590fdb7318?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b2',
    title: '5 Signs Your Child Needs an Eye Exam',
    excerpt: 'Detecting vision problems early can change your child’s academic future.',
    author: 'Optom. Sarah Jenkins',
    date: 'Nov 05, 2024',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b9ee9623?q=80&w=1000&auto=format&fit=crop'
  }
];

export const FEATURED_FRAMES: Frame[] = [
  {
    id: 'f1',
    name: 'Aviator Gold',
    brand: 'Ray-Ban',
    price: 189,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
    category: 'Unisex',
    style: 'Classic',
    colors: ['Gold', 'Black']
  },
  {
    id: 'f2',
    name: 'Cat Eye Noir',
    brand: 'Vogue',
    price: 145,
    image: 'https://images.unsplash.com/photo-1511499767350-a1590fdb7318?q=80&w=800&auto=format&fit=crop',
    category: 'Women',
    style: 'Vintage',
    colors: ['Black', 'Tortoise']
  },
  {
    id: 'f3',
    name: 'Executive Slim',
    brand: 'Oakley',
    price: 210,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop',
    category: 'Men',
    style: 'Modern',
    colors: ['Titanium', 'Matte Blue']
  },
  {
    id: 'f4',
    name: 'Urban Rectangular',
    brand: 'Prada',
    price: 299,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop',
    category: 'Unisex',
    style: 'Modern',
    colors: ['Crystal', 'Smoke']
  }
];

export const LOCATIONS_DATA = [
  { name: "Selous (Main)", address: "60 Selous Avenue, Harare", phone: "0242 700851/2", cell: "+263 774 165 271" },
  { name: "Borrowdale", address: "Borrowdale Village, Harare", cell: "+263 778 819 460" },
  { name: "Kamfinsa", address: "Kamfinsa Shopping Centre", cell: "+263 775 343 892" },
  { name: "Marondera", address: "Marondera Central", cell: "+263 785 684 868" }
];

export const LOCATIONS = LOCATIONS_DATA.map(l => l.name);

export const PATIENT_TESTIMONIALS = [
  {
    name: "BELINDA ZINYUKE",
    text: "I love the service at the Kamfinsa branch. Everyone there is friendly, helpful and patient.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "COMFORT CUMMINGS",
    text: "All thanks to Specsavers... I have changed the way I see the world. You guys are simply amazing. Love the customer care service. For me, it's Specsavers or nothing.",
    image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "ROSELYN NYATHI-DUBE",
    text: "I got my spectacles same day in less than an hour. I am very impressed with the service and customer care provided by Jackie and Ruvarashe at the Selous branch.",
    image: "https://images.unsplash.com/photo-1489424159676-7fbd714c5ad9?q=80&w=400&auto=format&fit=crop"
  }
];
