
import { Service, Doctor, Award, Branch, Testimonial, BlogPost, GalleryItem, JobListing } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Dental Implants',
    slug: 'dental-implants',
    category: 'restorative',
    startingPrice: '₹15,000',
    duration: '3-6 months',
    description: 'Permanent artificial tooth that looks the exact same as a natural tooth.',
    fullDescription: 'Worried about your lost tooth? Get dental implants in Kolkata from the top dentist and restore your smile with a permanent artificial tooth.',
    features: ['Permanent solution', 'Natural appearance', 'No maintenance', 'Branded materials'],
    icon: '🦷'
  },
  {
    id: '2',
    title: 'Cosmetic Dentistry',
    slug: 'cosmetic-dentistry',
    category: 'cosmetic',
    startingPrice: '₹8,000',
    duration: '1-2 visits',
    description: 'Get a smile of your choice. Your smile boosts your confidence.',
    features: ['Personalized design', 'Digital smile preview', 'Custom color matching', 'Minimal preparation'],
    icon: '✨'
  },
  {
    id: '3',
    title: 'Dental Braces',
    slug: 'dental-braces',
    category: 'orthodontic',
    startingPrice: '₹25,000',
    duration: '12-24 months',
    description: 'Cure misalignment with metal, ceramic, or invisible braces.',
    features: ['Corrects misalignment', 'Improves bite', 'Invisible options', 'Clear aligners'],
    icon: '🗜️'
  },
  {
    id: '4',
    title: 'Root Canal (RCT)',
    slug: 'root-canal-treatment',
    category: 'endodontic',
    startingPrice: '₹8,000',
    duration: '2-3 visits',
    description: 'Extract infected pulp and restore with a high-quality crown.',
    features: ['Painless procedure', 'Saves natural tooth', 'Zirconia crowns', 'Laser RCT option'],
    icon: '🏥'
  },
  {
    id: '5',
    title: 'Teeth Whitening',
    slug: 'teeth-whitening',
    category: 'cosmetic',
    startingPrice: '₹5,000',
    duration: '45-60 mins',
    description: 'Achieve whiter, brighter teeth in just one clinical visit.',
    features: ['Fast results', 'Professional grade', 'Long-lasting', 'No sensitivity'],
    icon: '💎'
  },
  {
    id: '6',
    title: 'Oral Surgery',
    slug: 'oral-surgery',
    category: 'surgical',
    startingPrice: '₹2,000',
    duration: '30-60 mins',
    description: 'Expert surgical solutions for tooth extraction and wisdom teeth.',
    features: ['Expert surgeons', 'Painless extraction', 'Quick recovery', 'Minimal pain'],
    icon: '🔪'
  },
  {
    id: '7',
    title: 'Dentures',
    slug: 'dentures',
    category: 'prosthetic',
    startingPrice: '₹20,000',
    duration: '5-7 days',
    description: 'High-quality custom dentures for a comfortable and natural fit.',
    features: ['Custom-made', 'Comfortable fit', 'Natural appearance', 'Full/Partial options'],
    icon: '😁'
  },
  {
    id: '8',
    title: 'Full-Mouth Implants',
    slug: 'full-mouth-implants',
    category: 'restorative',
    startingPrice: '₹3,00,000',
    duration: '4-6 months',
    description: 'Restore all missing teeth using high-quality branded implants.',
    features: ['Complete restoration', 'Advanced technique', 'Permanent', 'Branded implants'],
    icon: '👄'
  },
  {
    id: '9',
    title: 'General Dentistry',
    slug: 'general-dentistry',
    category: 'general',
    startingPrice: '₹500',
    duration: '30-45 mins',
    description: 'Regular checkups and preventive dental care for your family.',
    features: ['Regular checkups', 'Cleaning & Scaling', 'Cavity detection', 'Oral guidance'],
    icon: '👨‍⚕️'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: '1',
    name: 'North Kolkata Branch',
    area: 'Shyambazar',
    address: '123 Main Street, North Kolkata, WB 700004',
    landmark: 'Near Shyambazar Crossing',
    phone: '+91 98765 43210',
    email: 'north@teethcare.com',
    hours: { mon_fri: '9:00 AM - 8:00 PM', sat: '9:00 AM - 6:00 PM', sun: '10:00 AM - 5:00 PM' },
    mapUrl: '#'
  },
  {
    id: '2',
    name: 'South Kolkata Branch',
    area: 'Gariahat',
    address: '456 Elm Avenue, South Kolkata, WB 700019',
    landmark: 'Near Gariahat Mall',
    phone: '+91 98765 43211',
    email: 'south@teethcare.com',
    hours: { mon_fri: '10:00 AM - 8:00 PM', sat: '9:00 AM - 6:00 PM', sun: 'Closed' },
    mapUrl: '#'
  },
  {
    id: '3',
    name: 'Salt Lake Branch',
    area: 'Sector V',
    address: 'Salt Lake City, Kolkata, WB 700091',
    landmark: 'Behind DLF IT Park',
    phone: '+91 98765 43212',
    email: 'saltlake@teethcare.com',
    hours: { mon_fri: '9:00 AM - 8:00 PM', sat: '9:00 AM - 6:00 PM', sun: '10:00 AM - 5:00 PM' },
    mapUrl: '#'
  },
  {
    id: '4',
    name: 'New Town Branch',
    area: 'Action Area 1',
    address: 'New Town, Kolkata, WB 700156',
    landmark: 'Near Axis Mall',
    phone: '+91 98765 43213',
    email: 'newtown@teethcare.com',
    hours: { mon_fri: '9:00 AM - 8:00 PM', sat: '10:00 AM - 4:00 PM', sun: 'Closed' },
    mapUrl: '#'
  },
  {
    id: '5',
    name: 'Behala Branch',
    area: 'South West',
    address: 'Diamond Harbour Road, Behala, Kolkata 700034',
    landmark: 'Near Behala Tram Depot',
    phone: '+91 98765 43214',
    email: 'behala@teethcare.com',
    hours: { mon_fri: '9:00 AM - 8:00 PM', sat: '9:00 AM - 6:00 PM', sun: '10:00 AM - 2:00 PM' },
    mapUrl: '#'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', type: 'interior', src: 'https://picsum.photos/seed/int1/800/800', caption: 'Modern Reception Lounge', categoryName: 'Clinic Interiors' },
  { id: 'g2', type: 'before-after', before: 'https://picsum.photos/seed/b1/800/800', after: 'https://picsum.photos/seed/a1/800/800', caption: 'Full Smile Restoration', categoryName: 'Before & After' },
  { id: 'g3', type: 'team', src: 'https://picsum.photos/seed/t1/800/800', caption: 'Our Expert MDS Specialists', categoryName: 'Team' },
  { id: 'g4', type: 'camp', src: 'https://picsum.photos/seed/c1/800/800', caption: 'Dental Camp at Coromandel Group', categoryName: 'Dental Camps' },
  { id: 'g5', type: 'interior', src: 'https://picsum.photos/seed/int2/800/800', caption: 'Advanced Treatment Room', categoryName: 'Clinic Interiors' },
  { id: 'g6', type: 'before-after', before: 'https://picsum.photos/seed/b2/800/800', after: 'https://picsum.photos/seed/a2/800/800', caption: 'Invisible Braces Results', categoryName: 'Before & After' },
];

export const CAREER_LISTINGS: JobListing[] = [
  {
    id: 'j1',
    title: 'General Dentist',
    type: 'Full-time',
    location: 'North Kolkata',
    experience: '2-5 years',
    salary: '₹5L - ₹8L LPA',
    posted: 'Jan 02, 2024',
    description: "We're looking for a skilled General Dentist to join our award-winning team.",
    responsibilities: ['Dental examinations', 'Cleanings and fillings', 'Patient education', 'Emergency care'],
    qualifications: ['BDS degree', 'Valid dental license', 'Clinical experience']
  },
  {
    id: 'j2',
    title: 'Orthodontist',
    type: 'Full-time',
    location: 'South Kolkata',
    experience: '3-7 years',
    salary: '₹6L - ₹10L LPA',
    posted: 'Jan 01, 2024',
    description: 'Seeking an experienced Orthodontist for alignment treatments.',
    responsibilities: ['Treatment plans', 'Orthodontic procedures', 'Progress monitoring'],
    qualifications: ['BDS + MDS in Orthodontics', '3+ years experience', 'Modern techniques']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Top 10 Signs You Need Root Canal Treatment in Kolkata",
    slug: 'signs-root-canal-treatment-kolkata',
    author: 'Dr. Arimeeta',
    excerpt: 'Persistent tooth pain, swelling, or sensitivity? Learn the signs that indicate expert care is needed.',
    category: 'RCT',
    date: 'Oct 12, 2024',
    readTime: '5 min',
    tags: ['RCT', 'Dental Pain', 'Infection']
  },
  {
    id: '2',
    title: "2026 Root Canal (RCT) Cost Guide in Kolkata",
    slug: 'rct-cost-2026-kolkata-guide',
    author: 'Dr. Sanket',
    excerpt: 'Explore exact prices for metal, ceramic, and zirconia crowns at our multispeciality clinic.',
    category: 'Pricing',
    date: 'Nov 05, 2024',
    readTime: '8 min',
    tags: ['RCT Cost', 'Pricing', 'Crowns']
  },
  {
    id: '3',
    title: "Zirconia vs Titanium Dental Implants: A Comparison",
    slug: 'zirconia-vs-titanium-implants-kolkata',
    author: 'Dr. Arimeeta',
    excerpt: 'Durable and aesthetic dental implants. Learn the pros and cons of both materials.',
    category: 'Implants',
    date: 'Dec 01, 2024',
    readTime: '6 min',
    tags: ['Implants', 'Zirconia', 'Titanium']
  },
  {
    id: '4',
    title: "Transform Your Smile with Clear Aligners",
    slug: 'clear-aligners-invisible-braces-kolkata',
    author: 'Dr. Sanket',
    excerpt: 'Expert orthodontists, digital smile design, and transparent pricing in one trusted clinic.',
    category: 'Braces',
    date: 'Dec 25, 2024',
    readTime: '7 min',
    tags: ['Aligners', 'Invisible Braces', 'Smile Design']
  }
];

export const AWARDS: Award[] = [
  { id: '1', title: 'National Pride Healthcare Awards', subtitle: 'Best Dental Clinic in Kolkata', year: '2022', location: 'India', organization: 'Global Health' },
  { id: '2', title: 'Prime Time Global Icon Awards', subtitle: 'Leading Dental Chain in Kolkata', year: '2023', location: 'India', organization: 'Prime Time' },
  { id: '3', title: 'International Excellence Award', subtitle: 'Patient Care & Innovation', year: '2023', location: 'London', organization: 'Health Global' }
];

export const DOCTORS: Doctor[] = [
  { id: '1', name: 'Dr. Arimeeta', qualification: 'BDS, MDS - Oral Surgery', specialty: 'Oral & Maxillofacial Surgeon', image: 'https://picsum.photos/seed/doc1/400/500' },
  { id: '2', name: 'Dr. Sanket', qualification: 'BDS, MDS - Orthodontics', specialty: 'Consultant Orthodontist', image: 'https://picsum.photos/seed/doc2/400/500' },
  { id: '3', name: 'Dr. Mukherjee', qualification: 'BDS, MDS - Endodontics', specialty: 'Endodontics Specialist', image: 'https://picsum.photos/seed/doc3/400/500' },
  { id: '4', name: 'Dr. Sen', qualification: 'BDS, MDS - Periodontics', specialty: 'Gum Care Expert', image: 'https://picsum.photos/seed/doc4/400/500' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rohit Thakur', text: "Dr. Arimeeta's professionalism in oral surgery is unmatched. Unbeatable patient care.", rating: 5 },
  { id: '2', name: 'Akash Ghosh', text: "Friendly staff and best facilities in Kolkata. Stands out among all clinics.", rating: 5 },
  { id: '3', name: 'Sahil Ghosh', text: "Invisible dental braces results are amazing. Dr. Sanket is truly an expert.", rating: 5, service: 'Invisible Braces' }
];
