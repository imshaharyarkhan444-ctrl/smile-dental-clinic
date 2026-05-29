import type { IconName } from "./site";

export type ServiceItem = { name: string; desc?: string; price?: string };

export type TreatmentDetail = {
  slug: string;
  title: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  servicesHeading: string;
  services: ServiceItem[];
  offer?: { title: string; points: string[] };
  emergencyNotice?: boolean;
  pricingTable?: boolean;
  faqs?: { q: string; a: string }[];
  formType?: "estimate" | "quote" | "booking";
  formTitle?: string;
};

export const treatmentDetails: Record<string, TreatmentDetail> = {
  "general-dentistry": {
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: "tooth",
    metaTitle: "General Dentistry Cork | Check-ups, Fillings & More | Smiles Dental",
    metaDescription:
      "Comprehensive general dentistry in Cork — routine exams, hygiene, fillings, crowns, root canals, extractions and more at Smiles Dental Cork. Book your check-up today.",
    tagline: "Everyday care to keep your smile healthy for life",
    intro:
      "Our general dentistry services form the foundation of good oral health. From routine check-ups and professional cleaning to restorative treatments, our Cork team helps you prevent problems before they start and treats issues gently when they arise.",
    servicesHeading: "General dentistry services",
    services: [
      { name: "Routine exam", desc: "Thorough check-up to keep your teeth and gums healthy." },
      { name: "Dental hygiene", desc: "Professional scale and polish to remove plaque and tartar." },
      { name: "Fillings", desc: "Tooth-coloured fillings that restore strength and appearance." },
      { name: "Gum disease and health", desc: "Assessment and treatment of gum disease (periodontal care)." },
      { name: "Root canal treatment", desc: "Save an infected tooth and relieve pain." },
      { name: "Tooth extraction", desc: "Gentle removal when a tooth cannot be saved." },
      { name: "Dentures", desc: "Comfortable, natural-looking replacement for missing teeth." },
      { name: "Veneers", desc: "Thin porcelain shells to transform your smile." },
      { name: "Crowns", desc: "Durable caps that protect and restore damaged teeth." },
      { name: "Bridges", desc: "Fixed solution to replace one or more missing teeth." },
      { name: "CEREC dental restorations", desc: "Same-day, precision-milled ceramic restorations." },
      { name: "Children", desc: "Gentle dental care for younger patients." },
      { name: "Emergency dentistry", desc: "Prompt relief for dental pain and trauma." },
      { name: "Teeth whitening", desc: "Safe, professional brightening of your smile." },
      { name: "Nervous patients", desc: "Calm, reassuring care for anxious patients." },
      { name: "Wisdom teeth", desc: "Assessment and removal of problematic wisdom teeth." },
      { name: "Mouth cancer checks", desc: "Routine screening for early detection and peace of mind." },
    ],
    formType: "booking",
  },
  orthodontics: {
    slug: "orthodontics",
    title: "Orthodontics",
    icon: "braces",
    metaTitle: "Orthodontist Cork | Braces & Invisalign | Smiles Dental Cork",
    metaDescription:
      "Straighten your teeth in Cork with fixed braces, Invisalign clear aligners, Invisalign Go and Six Month Smiles. Free 3D scan and special offers at Smiles Dental Cork.",
    tagline: "Straighter teeth, a confident smile",
    intro:
      "Whether you want discreet clear aligners or traditional fixed braces, our orthodontic team in Cork creates a tailored teeth-straightening journey for adults, teens and children. Book a consultation to find the right option for you.",
    servicesHeading: "Orthodontic treatments",
    services: [
      { name: "Fixed braces", desc: "Reliable, precise correction for a wide range of cases." },
      { name: "Clear aligners", desc: "Removable, near-invisible trays to straighten teeth." },
      { name: "Invisalign", desc: "Market-leading clear aligner system, custom-made for you." },
      { name: "Invisalign Go", desc: "Streamlined treatment for mild to moderate cases." },
      { name: "Invisalign Go+", desc: "Extended Invisalign Go for slightly more complex cases." },
      { name: "Six Month Smiles", desc: "Fast cosmetic alignment of the front teeth." },
      { name: "Retainers", desc: "Keep your new smile in place after treatment." },
      { name: "Braces for children and teens", desc: "Age-appropriate orthodontics with regular monitoring." },
    ],
    offer: {
      title: "Orthodontic offers at Smiles Dental Cork",
      points: [
        "Free 3D scan",
        "Orthodontic consultation €50",
        "€300 off fixed braces",
        "€500 off Invisalign clear aligners",
      ],
    },
    faqs: [
      {
        q: "How long does orthodontic treatment take?",
        a: "It varies by case. Six Month Smiles can take around 6 months, while comprehensive treatment with braces or Invisalign typically takes 12–24 months.",
      },
      {
        q: "Are clear aligners suitable for me?",
        a: "Most mild to moderate cases are suitable for Invisalign or clear aligners. A consultation and free 3D scan will confirm the best option for your smile.",
      },
      {
        q: "Do braces hurt?",
        a: "You may feel mild pressure for a few days after fitting or adjustments. This is normal and settles quickly.",
      },
      {
        q: "Can adults get braces?",
        a: "Absolutely. We treat patients of all ages, and discreet options like Invisalign are especially popular with adults.",
      },
    ],
    formType: "estimate",
    formTitle: "Get your free orthodontic estimate",
  },
  "specialist-treatments": {
    slug: "specialist-treatments",
    title: "Specialist Treatments",
    icon: "specialist",
    metaTitle: "Specialist Dental Treatments Cork | Implants & Surgery | Smiles Dental",
    metaDescription:
      "Specialist dental care in Cork including dental implants, oral surgery, periodontics, endodontics, orthodontics, prosthodontics and CT scans at Smiles Dental Cork.",
    tagline: "Advanced care from experienced specialists",
    intro:
      "For complex needs, our Cork clinic offers specialist treatments delivered by experienced clinicians using advanced technology, including on-site diagnostic imaging.",
    servicesHeading: "Specialist services",
    services: [
      { name: "Dental implants", desc: "Permanent, natural-looking tooth replacement." },
      { name: "Oral surgery", desc: "Surgical extractions and minor oral procedures." },
      { name: "Periodontics", desc: "Specialist treatment of gum and supporting tissues." },
      { name: "Endodontics", desc: "Advanced root canal therapy to save teeth." },
      { name: "Orthodontics", desc: "Specialist teeth-straightening solutions." },
      { name: "Prosthodontics", desc: "Restoration and replacement of damaged or missing teeth." },
      { name: "CT scans", desc: "3D imaging for precise diagnosis and treatment planning." },
    ],
    formType: "booking",
  },
  "cosmetic-dentistry": {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "cosmetic",
    metaTitle: "Cosmetic Dentist Cork | Teeth Whitening & Veneers | Smiles Dental",
    metaDescription:
      "Transform your smile with cosmetic dentistry in Cork — teeth whitening, veneers, crowns, bridges, orthodontics and facial aesthetics at Smiles Dental Cork.",
    tagline: "Design the smile you have always wanted",
    intro:
      "Our cosmetic dentistry treatments enhance the look of your smile while keeping it healthy. From subtle improvements to complete smile makeovers, our Cork team will help you feel confident.",
    servicesHeading: "Cosmetic treatments",
    services: [
      { name: "Teeth whitening", desc: "Professional whitening for a brighter smile." },
      { name: "Veneers", desc: "Porcelain shells that perfect shape, colour and alignment." },
      { name: "Crowns", desc: "Natural-looking caps that restore damaged teeth." },
      { name: "Bridges", desc: "Seamlessly replace missing teeth." },
      { name: "Orthodontics", desc: "Straighten teeth with braces or clear aligners." },
      { name: "Facial aesthetics", desc: "Complementary treatments to refresh your appearance." },
      { name: "Smile improvement treatments", desc: "Tailored makeover plans for your goals." },
    ],
    formType: "booking",
  },
  "children-dentistry": {
    slug: "children-dentistry",
    title: "Children's Dentistry",
    icon: "child",
    metaTitle: "Children's Dentist Cork | Kids Dental Care | Smiles Dental Cork",
    metaDescription:
      "Gentle children's dentistry in Cork. Routine exams from €39, scale and polish from €39, fissure sealants from €45 and more at Smiles Dental Cork. Child-friendly visits.",
    tagline: "Gentle, friendly dental care for children",
    intro:
      "We help children build healthy habits and positive associations with the dentist from an early age. Our friendly Cork team makes every visit relaxed, fun and educational.",
    servicesHeading: "Children's services & pricing",
    services: [
      { name: "Children routine exam", price: "from €39" },
      { name: "Scale and polish", price: "from €39" },
      { name: "Fissure sealants", price: "from €45" },
      { name: "Tooth extraction", price: "from €51 / €122" },
      { name: "Fillings", price: "from €77" },
      { name: "Space maintainers", price: "from €128" },
    ],
    pricingTable: true,
    faqs: [
      {
        q: "When should my child first see a dentist?",
        a: "We recommend a first visit by their first birthday or when their first teeth appear, so they get comfortable with the dental environment early.",
      },
      {
        q: "How can I prepare my child for a visit?",
        a: "Keep it positive and relaxed, avoid words like 'pain' or 'needle', and let our friendly team take the lead — we are experienced with young patients.",
      },
      {
        q: "How often should children have a check-up?",
        a: "Usually every six months, but we will advise the right interval based on your child's needs.",
      },
    ],
    formType: "booking",
  },
  "emergency-dentistry": {
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    icon: "alert",
    metaTitle: "Emergency Dentist Cork | Same-Day Dental Care | Smiles Dental",
    metaDescription:
      "Emergency dentist in Cork for toothache, broken or knocked-out teeth, dental pain and swelling. Call before attending for prompt advice at Smiles Dental Cork.",
    tagline: "Fast relief when you need it most",
    intro:
      "Dental emergencies can be painful and stressful. Our Cork team prioritises urgent cases to relieve your pain quickly. If you are experiencing a dental emergency, please call us before attending so we can prepare for your visit.",
    servicesHeading: "We treat dental emergencies including",
    services: [
      { name: "Toothache", desc: "Identify the cause and relieve pain quickly." },
      { name: "Broken tooth", desc: "Repair or restore a chipped or cracked tooth." },
      { name: "Knocked-out tooth", desc: "Time-critical care — call us immediately." },
      { name: "Dental pain", desc: "Prompt assessment and effective relief." },
      { name: "Swelling", desc: "Urgent treatment of infection and abscesses." },
    ],
    emergencyNotice: true,
    faqs: [
      {
        q: "What should I do if my tooth is knocked out?",
        a: "Handle the tooth by the crown (not the root), gently rinse it, and if possible reinsert it or keep it in milk. Call us immediately — time is critical.",
      },
      {
        q: "How do I manage pain before my appointment?",
        a: "Over-the-counter pain relief and a cold compress can help. Avoid very hot, cold or hard foods, and contact us for guidance.",
      },
    ],
    formType: "booking",
  },
  "dental-implants": {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "implant",
    metaTitle: "Dental Implants Cork | Tooth Replacement | Smiles Dental Cork",
    metaDescription:
      "Replace missing teeth with dental implants in Cork. Natural-looking, permanent results including Smile in a Day. Implant consultation and finance options at Smiles Dental Cork.",
    tagline: "A permanent, natural-looking tooth replacement",
    intro:
      "Dental implants are small titanium posts that act as artificial tooth roots, providing a strong, stable foundation for natural-looking replacement teeth. They are the gold-standard solution for missing teeth.",
    servicesHeading: "Our implant solutions",
    services: [
      { name: "Single implants", desc: "Replace one missing tooth without affecting neighbours." },
      { name: "Multiple implants", desc: "Restore several missing teeth securely." },
      { name: "Smile in a Day", desc: "Fixed teeth on implants, often in a single visit." },
      { name: "Implant-supported dentures", desc: "Stable, comfortable alternative to loose dentures." },
      { name: "Implant clinics", desc: "Dedicated assessment and planning appointments." },
      { name: "Finance options", desc: "Spread the cost with interest-free finance." },
    ],
    faqs: [
      {
        q: "Are dental implants painful?",
        a: "Implant placement is carried out under local anaesthetic and most patients report little discomfort, similar to a routine extraction.",
      },
      {
        q: "How long do dental implants last?",
        a: "With good oral hygiene and regular check-ups, implants can last many years and often a lifetime.",
      },
      {
        q: "Can I finance my implant treatment?",
        a: "Yes. We offer interest-free finance and payment plans through Humm to make treatment more affordable.",
      },
    ],
    formType: "quote",
    formTitle: "Request a dental implants quote",
  },
};

export const treatmentSlugs = Object.keys(treatmentDetails);
