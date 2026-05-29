// Central source of truth for clinic details and content.

export const clinic = {
  name: "Smiles Dental Cork",
  brand: "Smiles Dental",
  address: {
    line1: "112 Oliver Plunkett Street",
    area: "Centre",
    city: "Cork",
    postcode: "T12 D7TX",
    country: "Ireland",
    full: "112 Oliver Plunkett Street, Centre, Cork, T12 D7TX, Ireland",
  },
  phone: "+353 21 427 4706",
  phoneHref: "tel:+35321427 4706".replace(/\s/g, ""),
  email: "cork@smiles.ie",
  jobsEmail: "jobs@smiles.ie",
  website: "smiles.ie",
  rating: 4.7,
  reviewCount: 396,
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=112+Oliver+Plunkett+Street,+Cork,+T12+D7TX,+Ireland",
  mapsEmbed:
    "https://www.google.com/maps?q=112+Oliver+Plunkett+Street,+Cork,+T12+D7TX,+Ireland&output=embed",
  social: {
    linkedin: "https://www.linkedin.com/company/smilesdentalireland/",
    instagram: "https://www.instagram.com/smiles_dental_ireland/",
    facebook: "https://www.facebook.com/SmilesDentalIrl",
  },
};

export const openingHours = [
  { day: "Monday", hours: "8:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 8:00 PM" },
  { day: "Friday", hours: "8:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const accessibility = [
  "Wheelchair accessible entrance",
  "Wheelchair accessible restroom",
  "Ground floor clinic",
  "Disability access",
];

export const paymentOptions = [
  "Credit cards",
  "Debit cards",
  "NFC mobile payments",
  "Smiles Dental Plan",
  "Humm dental finance",
  "PRSI",
  "Private insurance",
  "Medical card at selected practices",
];

export type IconName =
  | "tooth"
  | "shield"
  | "braces"
  | "implant"
  | "sparkle"
  | "child"
  | "alert"
  | "specialist"
  | "cosmetic";

export const treatmentCategories: {
  slug: string;
  title: string;
  icon: IconName;
  short: string;
}[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: "tooth",
    short:
      "Routine exams, hygiene, fillings, crowns and everyday care to keep your smile healthy.",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    icon: "braces",
    short:
      "Straighten your teeth with fixed braces, Invisalign clear aligners and Six Month Smiles.",
  },
  {
    slug: "specialist-treatments",
    title: "Specialist Treatments",
    icon: "specialist",
    short:
      "Implants, oral surgery, periodontics, endodontics, prosthodontics and CT scans.",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "cosmetic",
    short:
      "Teeth whitening, veneers, crowns and facial aesthetics for a confident smile.",
  },
  {
    slug: "children-dentistry",
    title: "Children's Dentistry",
    icon: "child",
    short:
      "Gentle, child-friendly dental care, education and prevention from an early age.",
  },
  {
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    icon: "alert",
    short:
      "Fast relief for toothache, broken or knocked-out teeth, swelling and dental pain.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "implant",
    short:
      "Natural-looking, permanent tooth replacement including Smile in a Day solutions.",
  },
];

export const highlights = [
  { title: "General dentistry", icon: "tooth" as IconName, slug: "general-dentistry" },
  { title: "Emergency dentistry", icon: "alert" as IconName, slug: "emergency-dentistry" },
  { title: "Orthodontics", icon: "braces" as IconName, slug: "orthodontics" },
  { title: "Dental implants", icon: "implant" as IconName, slug: "dental-implants" },
  { title: "Cosmetic dentistry", icon: "cosmetic" as IconName, slug: "cosmetic-dentistry" },
  { title: "Children's dentistry", icon: "child" as IconName, slug: "children-dentistry" },
];

export const trustBadges = [
  "Irish Dental Council registered",
  "4.7★ from 396 reviews",
  "Extended & Saturday hours",
  "Interest-free finance available",
];

// All Smiles Dental clinics for Meet the Team & Price List
export const dublinClinics = [
  "Dublin Ballsbridge Bath Avenue",
  "Dublin Ballsbridge orthodontics",
  "Dublin Ballsbridge Waterloo Road",
  "Dublin Blanchardstown",
  "Dublin Clonshaugh",
  "Dublin Dun Laoghaire",
  "Dublin Dundrum",
  "Dublin Grand Canal Square",
  "Dublin O'Connell Street",
  "Dublin South Anne orthodontics",
  "Dublin South Anne Street",
  "Dublin Swords",
  "Dublin Tallaght",
];

export const nationwideClinics = [
  "Athlone",
  "Bray",
  "Cork",
  "Dundalk orthodontics",
  "Dundalk Park Street",
  "Enniscorthy",
  "Galway – Gate Dental Clinic",
  "Galway – Quay Dental",
  "Wexford",
];
