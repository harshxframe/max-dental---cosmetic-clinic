import { Treatment, Review, GalleryItem } from './types';

export const CLINIC_NAME = "Max Dental & Cosmetic Clinic";
export const CLINIC_PHONE = "7607226003";
export const CLINIC_ADDRESS = {
  line1: "Ground Floor",
  line2: "Hotel Vishal Palace, Baipass, Gadan Khera",
  city: "Unnao",
  state: "Uttar Pradesh",
  pincode: "209801",
  full: "Ground Floor, Hotel Vishal Palace, Baipass, Gadan Khera, Unnao, Uttar Pradesh 209801"
};

export const CLINIC_HOURS = "10 AM – 8 PM (Daily)";

export const DOCTOR_INFO = {
  name: "Dr. Priyanka Verma",
  role: "Dental Surgeon & Cosmetic Dentist",
  bio: "Dr. Priyanka Verma is an experienced dental surgeon and cosmetic dentist known for delivering gentle, patient-first care at Max Dental & Cosmetic Clinic. Dedicated to elevating oral health standards in Unnao, she blends advanced clinical skill with a compassionate touch to help every patient achieve their healthiest, most radiant smile. At our clinic, she designs personalized treatment plans using modern technology in a sterile, comfortable, and welcoming environment."
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Jaya Upadhyay",
    rating: 5,
    text: "Best dental surgeon in our city Unnao. Very professional, understanding, caring and a delight to visit.",
    date: "1 month ago",
    initials: "JU"
  },
  {
    id: "r2",
    author: "Mohit Kumar",
    rating: 5,
    text: "Very polite doctor and staff. Best treatment. Highly recommended.",
    date: "3 months ago",
    initials: "MK"
  },
  {
    id: "r3",
    author: "Priya Chauhan",
    rating: 5,
    text: "Very good experience and excellent service.",
    date: "4 months ago",
    initials: "PC"
  },
  {
    id: "r4",
    author: "Vinod Kumar Goswami",
    rating: 5,
    text: "Excellent treatment and facilities.",
    date: "6 months ago",
    initials: "VG"
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "rct",
    title: "Root Canal Treatment",
    description: "Save decayed or infected teeth with high-precision, painless root canal procedures.",
    longDescription: "Our root canal treatments focus on removing infected pulp, thoroughly sterilizing the canal, and sealing it to preserve your natural tooth. Utilizing state-of-the-art rotary endodontics, we ensure the procedure is comfortable, efficient, and virtually pain-free.",
    icon: "Activity",
    category: "General"
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent and natural-looking replacement for missing teeth to restore chewing and aesthetics.",
    longDescription: "Restore your complete smile with titanium dental implants that act as sturdy anchors for custom-made crowns. Our advanced implant solutions offer premium aesthetic appeal, secure bone support, and lifetime durability.",
    icon: "Sparkles",
    category: "Specialist"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional whitening treatments to safely erase stains and brighten your smile.",
    longDescription: "Remove years of stubborn staining caused by food, coffee, or aging. We offer clinical-grade whitening systems that deliver instantly visible results—up to 8 shades brighter—safely and comfortably in a single session.",
    icon: "Sun",
    category: "Cosmetic"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Smile makeovers, custom aligners, and aesthetic enhancements tailored to you.",
    longDescription: "Elevate your self-confidence with a personalized smile makeover. We combine science and art to align, brighten, and refine your teeth, matching your facial features for a natural, elegant, and harmonious smile.",
    icon: "Sparkles",
    category: "Cosmetic"
  },
  {
    id: "fillings",
    title: "Dental Fillings",
    description: "Composite tooth-colored restorations to treat cavities beautifully and securely.",
    longDescription: "Repair decayed or fractured teeth using high-grade, biocompatible composite resins. Styled to match your natural tooth enamel perfectly, our fillings restore structural integrity while remaining completely invisible.",
    icon: "Shield",
    category: "General"
  },
  {
    id: "crowns",
    title: "Crowns & Veneers",
    description: "Durable porcelain crowns and ultra-thin dental veneers for flawless aesthetics.",
    longDescription: "Protect damaged teeth with full-coverage ceramic crowns, or mask surface imperfections with premium, ultra-thin porcelain veneers. Custom-milled for a perfect fit, they offer a natural appearance and outstanding strength.",
    icon: "Award",
    category: "Cosmetic"
  },
  {
    id: "dentures",
    title: "Dentures & Bridges",
    description: "Partial or complete tooth replacement solutions for restored confidence and speech.",
    longDescription: "Rediscover the joy of eating and speaking normally with premium custom-fit partial or complete dentures, or fixed dental bridges. Our prosthetics are designed to mimic real teeth and offer optimal chewing stability.",
    icon: "Layers",
    category: "Specialist"
  },
  {
    id: "laser",
    title: "Laser Dentistry",
    description: "Advanced, minimally invasive dental procedures with accelerated healing.",
    longDescription: "Experience modern dentistry at its finest. Our clinical laser technology allows for silent, blade-free, and suture-free soft tissue therapies, resulting in virtually no bleeding, minimal swelling, and incredibly fast healing.",
    icon: "Flame",
    category: "Specialist"
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning & Scaling",
    description: "Professional scaling and polishing to keep plaque, tartar, and gum disease away.",
    longDescription: "Ensure pristine oral health with professional scaling and root planing. Using ultrasonic scalers, we thoroughly clear away calcified tartar and stain deposits that regular brushing cannot reach, protecting you against gum disease.",
    icon: "Droplet",
    category: "Preventive"
  },
  {
    id: "checkups",
    title: "Dental Check-ups",
    description: "Comprehensive oral examinations to detect and prevent issues early.",
    longDescription: "Our preventive care programs include meticulous check-ups where we inspect teeth, gums, and oral soft tissues. Early detection of decay and structural issues saves time, prevents discomfort, and protects your smile.",
    icon: "HeartPulse",
    category: "Preventive"
  },
  {
    id: "extractions",
    title: "Extractions",
    description: "Gentle and pain-free removal of severely damaged or crowded teeth.",
    longDescription: "When a tooth cannot be saved due to extensive decay or severe fracturing, we perform gentle, atraumatic extractions. Our prioritizations are complete local anesthesia, absolute patient comfort, and precise post-extraction care.",
    icon: "Scissors",
    category: "General"
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    description: "Immediate, responsive care for sudden toothaches, trauma, or broken teeth.",
    longDescription: "Dental emergencies can be stressful. We provide prompt diagnostic and pain-relief treatments for acute dental pain, knocked-out teeth, broken crowns, or dental abscesses, ensuring you receive urgent relief.",
    icon: "AlertCircle",
    category: "General"
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description: "Warm, gentle, and child-friendly dental care for kids and teens.",
    longDescription: "We make dental visits fun and anxiety-free for children. From fluoride applications and protective dental sealants to gentle fillings, our clinic is committed to nurturing great dental habits for Unnao's younger generation.",
    icon: "Smile",
    category: "Preventive"
  },
  {
    id: "surgery",
    title: "Oral Surgery",
    description: "Advanced surgical procedures including wisdom teeth extraction and biopsy.",
    longDescription: "Our surgical treatments include surgical extractions, wisdom tooth impactions, and corrective jaw therapies. We follow stringent international sterilization protocols to guarantee maximum safety and seamless recovery.",
    icon: "Stethoscope",
    category: "Specialist"
  },
  {
    id: "xray",
    title: "Dental X-Ray (Radiography)",
    description: "Ultra-low dose digital diagnostics to inspect underlying bone and roots.",
    longDescription: "Accurate diagnosis is the foundation of excellent treatment. Our modern digital X-ray systems capture sharp, instant images of your teeth and jaw structure with up to 90% less radiation exposure than traditional film radiography.",
    icon: "Camera",
    category: "Preventive"
  },
  {
    id: "bonding",
    title: "Dental Bonding",
    description: "Quick, non-invasive cosmetic composite bonding to repair chips and cracks.",
    longDescription: "A fast, cost-effective way to repair minor tooth flaws. By sculpting premium tooth-colored resin directly onto chips, cracks, or small gaps, we can beautifully rebuild your tooth's contours in just one short visit.",
    icon: "Wrench",
    category: "Cosmetic"
  },
  {
    id: "reshaping",
    title: "Teeth Reshaping",
    description: "Subtle enamel sculpting to straighten margins and improve smile symmetry.",
    longDescription: "Also known as odontoplasty, teeth reshaping involves gently contouring outer tooth enamel to smooth out minor overlaps, uneven lengths, or rough edges, creating a beautifully balanced and symmetrical smile profile.",
    icon: "Scissors",
    category: "Cosmetic"
  },
  {
    id: "mouthguards",
    title: "Mouth Guards",
    description: "Custom-molded night guards and sports guards for premium tooth protection.",
    longDescription: "Protect your teeth from grinding (bruxism) during sleep or physical impact during athletic sports. We design custom-molded, highly comfortable mouth guards that absorb shock and cushion teeth, preventing fractures and wear.",
    icon: "ShieldAlert",
    category: "Preventive"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Modern Consultation Room",
    category: "Consultation",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g2",
    title: "Advanced Dental Treatment Unit",
    category: "Treatment",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g3",
    title: "Premium Patient Care & Diagnostics",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g4",
    title: "Sterilized Precision Medical Tools",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=800"
  },
    {
    id: "g5",
    title: "Sterilized Precision",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
  },

];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Care",
    description: "Led by Dr. Priyanka Verma, our treatments combine deep surgical skills with sophisticated aesthetic approaches.",
    icon: "UserCheck"
  },
  {
    title: "Modern Equipment",
    description: "Equipped with state-of-the-art digital diagnostics, low-radiation x-rays, and computer-guided treatment chairs.",
    icon: "Laptop"
  },
  {
    title: "Comfortable Clinic",
    description: "An elegant, completely air-conditioned space designed to ensure absolute peace of mind and stress-free visits.",
    icon: "Sparkles"
  },
  {
    title: "Affordable Treatment",
    description: "World-class cosmetic and general dental solutions priced transparently and affordably for families in Unnao.",
    icon: "IndianRupee"
  },
  {
    title: "Hygienic Environment",
    description: "We enforce multi-stage chemical and heat autoclaving protocols, maintaining international sterilization standards.",
    icon: "ShieldCheck"
  },
  {
    title: "Personalized Care",
    description: "No template dental plans. We listen patiently to your comfort needs and craft tailor-made treatment pathways.",
    icon: "Heart"
  }
];
