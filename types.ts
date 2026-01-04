
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  icon: string;
  category: 'restorative' | 'cosmetic' | 'orthodontic' | 'endodontic' | 'prosthetic' | 'surgical' | 'general';
  features: string[];
  startingPrice: string;
  duration: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  image: string;
}

export interface Award {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  organization: string;
}

export interface Branch {
  id: string;
  name: string;
  area: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  hours: {
    mon_fri: string;
    sat: string;
    sun: string;
  };
  mapUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  type: 'interior' | 'before-after' | 'team' | 'camp';
  src?: string;
  before?: string;
  after?: string;
  caption: string;
  categoryName: string;
}

export interface JobListing {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  posted: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}
