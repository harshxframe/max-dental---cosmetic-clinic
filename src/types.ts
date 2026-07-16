export interface Treatment {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'General' | 'Cosmetic' | 'Specialist' | 'Preventive';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Equipment' | 'Treatment' | 'Consultation';
  imageUrl: string;
}

export interface AppointmentDetails {
  patientName: string;
  phone: string;
  email: string;
  treatmentId: string;
  date: string;
  time: string;
  notes?: string;
}
