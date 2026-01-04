
import { Service, Doctor, Award, Branch, Testimonial, BlogPost, GalleryItem, JobListing } from './types';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1FvkpZaRML/',
  instagram: 'https://www.instagram.com/32.dental.care.belghoria?utm_source=qr&igsh=MWY3bm51Y3JzcmE5aA==',
  whatsapp: 'https://wa.me/919830110321'
};

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
    name: '32 Dental Care - Dr. Saikat Saha',
    area: 'Madhyamgram',
    address: '31, Police Phari Rd, Madhyamgram, Kolkata, West Bengal 700130',
    landmark: 'Police Phari Crossing',
    phone: '+91 98301 10321',
    email: 'info@smilecenter.com',
    hours: { mon_fri: '10:00 AM - 8:30 PM', sat: '10:00 AM - 7:00 PM', sun: '10:00 AM - 1:00 PM' },
    mapUrl: 'https://maps.app.goo.gl/xuwrfmZ772XEs51B6',
    embedMapUrl: 'https://maps.google.com/maps?q=32%20Dental%20Care%20-%20Dr.%20Saikat%20Saha%20Madhyamgram&t=&z=16&ie=UTF8&iwloc=B&output=embed'
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

export const CAREER_LISTINGS: JobListing[] = [];

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
  { id: '1', name: 'Dr. Saikat Saha', qualification: 'BDS, MDS - Oral Surgery', specialty: 'Chief Consultant', image: 'https://picsum.photos/seed/doc1/400/500' },
  { id: '2', name: 'Dr. Arimeeta', qualification: 'BDS, MDS - Periodontics', specialty: 'Gum Specialist', image: 'https://picsum.photos/seed/doc2/400/500' },
  { id: '3', name: 'Dr. Sanket', qualification: 'BDS, MDS - Orthodontics', specialty: 'Braces Expert', image: 'https://picsum.photos/seed/doc3/400/500' }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 't1', 
    name: 'Soumily Das', 
    date: '6 months ago',
    text: "I had Root Canal Treatment recently. I was fearful the but process was completely completely painless. Their behaviour was quite good and the Dr. showed patience and cooperation through the treatment. Overall the treatment was successful and it went really well and smooth.", 
    rating: 5,
    service: 'Root Canal Treatment',
    reply: "Thank you so much for your kind words. We are glad to hear that we are able to meet your expectations."
  },
  { 
    id: 't2', 
    name: 'Adhiraj', 
    date: '5 months ago',
    text: "Dr. Saikat Saha is awesome Dr. I have many times checked up for my RCT. But nobody has cleared my root cause. But Dr. Saha is totally different. Now I am completely cure. His behaviour also very nice. He is very supportive Dr.", 
    rating: 5,
    service: 'RCT',
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't3', 
    name: 'Prof. Shantanu Das', 
    date: '5 months ago',
    text: "Dr. Saikat Saha is a very good Dentist with good experience in this field. His behaviour with the patient is also very charming. I wish Him all the best for all His future endeavours.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't4', 
    name: 'Arup Chakraborty', 
    date: '5 months ago',
    text: "He is a very energetic & skilled doctor & also good behavior. I am satisfied with his treatment. __ Sukla chakraborty.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't5', 
    name: 'Rakesh Sarkar', 
    date: '7 months ago',
    text: "My brother had been having a toothache for some time. Then I showed it to Dr. Saikat Saha then he started treatment. my brother told me There was no pain, no fear.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback"
  },
  { 
    id: 't6', 
    name: 'Sandipta Bose', 
    date: '4 months ago',
    text: "I am very satisfy for treatment of my dental problem and also dr.behaviour is so polite and very helpfull", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't7', 
    name: 'Priyanka Das Kundu', 
    date: '7 months ago',
    text: "My daughter was suffering from tooth ache since childhood. Dr. Saikat Saha is gentle and knowledgeable professional, patiently answered all our questions and provided excellent care and valuable advice.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't8', 
    name: 'Alivia Bakshi', 
    date: '4 weeks ago',
    text: "Best experience. Good behaviour. Satisfied!", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't9', 
    name: 'Bishal Goswami', 
    date: '3 weeks ago',
    text: "Satisfied and humble treatment also nice behavior..", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't10', 
    name: 'Kalpana Bera', 
    date: '7 months ago',
    text: "I have done my extraction from him... It was totally painless and doctor is so well behaved", 
    rating: 5,
    service: 'Extraction',
    reply: "We highly appreciate your valuable feedback. Being one of the best dental clinics in Madhyamgram we always aim to provide the best to our patients."
  },
  { 
    id: 't11', 
    name: 'Chandrima Ghosh Majumder', 
    date: '2 weeks ago',
    text: "Very good and excellent doctor..", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't12', 
    name: 'Sudipta Bag', 
    date: '5 months ago',
    text: "Very good behaviour.. had a good experience.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't13', 
    name: 'Subhashis Das', 
    date: '7 months ago',
    text: "The doctor was amazing he took care of my mother really well", 
    rating: 5,
    reply: "Your valuable feedback help us to do better every time. Thank you so much for your kind words."
  },
  { 
    id: 't14', 
    name: 'MADHUSREE TALUKDAR', 
    date: '3 weeks ago',
    text: "Bery good environment with good behavior", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't15', 
    name: 'amit singh', 
    date: 'a week ago',
    text: "Satify and friendly behaviour", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't16', 
    name: 'Chanchal Debnath', 
    date: '3 weeks ago',
    text: "Very good", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't17', 
    name: 'Mrinal', 
    date: '7 months ago',
    text: "I am totally satisfied with my treatment", 
    rating: 5,
    reply: "Thank you so much for your kind words! We are delighted to hear that your experience at 32 dental care was excellent."
  },
  { 
    id: 't18', 
    name: 'Ronitas makeover and academy Rm', 
    date: '7 months ago',
    text: "Very humble and good doctor", 
    rating: 5,
    reply: "Thanks a lot for your valuable feedback. We hope to serve you even better in future."
  },
  { 
    id: 't19', 
    name: 'Sanjoy Biswas', 
    date: '3 weeks ago',
    text: "Very good", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't20', 
    name: 'Rupali Das', 
    date: '7 months ago',
    text: "Doctor is very skillful and experienced", 
    rating: 5,
    reply: "Thank you for your kind feedback"
  },
  { 
    id: 't21', 
    name: 'Indrani Chanda', 
    date: 'a month ago',
    text: "Vlo experience, excellent", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't22', 
    name: 'Surojit Mondal', 
    date: '6 months ago',
    text: "One of the best dentist...", 
    rating: 5,
    reply: "Thank you for the 5 star rating. We are so happy to hear about your positive experience at 32 Dental Care."
  },
  { 
    id: 't23', 
    name: 'Souvick Roy', 
    date: '7 months ago',
    text: "Very Good Behavior And Very Good Work", 
    rating: 5,
    reply: "Thank you for your feedback. We are delighted to know that you had a great expereince with us. Being the best dental clinic, we always aim to provide the best."
  },
  { 
    id: 't24', 
    name: 'Suchhanda Bhattacharjee', 
    date: '3 weeks ago',
    text: "Good experience.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic. We look forward to serving you again."
  },
  { 
    id: 't25', 
    name: 'Bimal Sarkar', 
    date: 'a week ago',
    text: "Good experience.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We look forward to seeing you again."
  },
  { 
    id: 't26', 
    name: 'Manoj Das', 
    date: '3 weeks ago',
    text: "Excellent service and results.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic."
  },
  { 
    id: 't27', 
    name: 'RUPSEKHAR ROY', 
    date: '5 days ago',
    text: "Good clinical environment and doctor behaviour.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We strive to provide the best environment for our patients."
  },
  { 
    id: 't28', 
    name: 'Amit Sarkar', 
    date: '3 weeks ago',
    text: "Khub vlo experience, highly recommended.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience in our clinic."
  },
  { 
    id: 't29', 
    name: 'Sankari Barik', 
    date: '2 months ago',
    text: "Satisfied with the treatment process.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. Your satisfaction is our priority."
  },
  { 
    id: 't30', 
    name: 'Anubhab Maitra #59', 
    date: '5 months ago',
    text: "Professional and expert care provided here.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We look forward to serving you again."
  },
  { 
    id: 't31', 
    name: 'Monika Kabiraj', 
    date: '5 months ago',
    text: "Very satisfied with my smile transformation.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to know you had a great experience."
  },
  { 
    id: 't32', 
    name: 'Srinjoy Banerjee', 
    date: '6 months ago',
    text: "Highly skilled doctors and very well maintained clinic.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We take pride in our medical standards."
  },
  { 
    id: 't33', 
    name: 'PRABIR SAHA', 
    date: '6 months ago',
    text: "Best dental care in the area.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are delighted to be your trusted clinic."
  },
  { 
    id: 't34', 
    name: 'Anjana Pal', 
    date: '6 months ago',
    text: "Very gentle treatment, no pain at all.", 
    rating: 5,
    reply: "Thank you for your wonderful feedback. We are glad to provide painless treatment."
  },
  { 
    id: 't35', 
    name: 'Ruksana Khatoon', 
    date: '7 months ago',
    text: "Experienced and knowledgeable professionals.", 
    rating: 5,
    reply: "Your valuable feedback is essential for our growth. Thank you for sharing your experience."
  },
  { 
    id: 't36', 
    name: 'Mamoni Mondal', 
    date: '7 months ago',
    text: "Satisfied and happy with the result.", 
    rating: 5,
    reply: "Thank you for the 5 star rating. We are so happy to hear about your positive experience."
  }
];
