export interface Service {
  id: string;
  name: string;
  category: 'Landscaping' | 'Property Maintenance' | 'Tree & Garden Care' | 'Paving & Fencing';
  description: string;
  detailedDescription?: string;
  image: string; // High quality garden/trade related images
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Garden Turnarounds' | 'Paving & Driveways' | 'Fencing' | 'Tree Surgery & Care';
  description: string;
  image: string;
}

export interface QuoteFormState {
  name: string;
  phone: string;
  postcode: string;
  services: string[];
  description: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceCompleted: string;
}
