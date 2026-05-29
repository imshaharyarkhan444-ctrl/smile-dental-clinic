import { clinic } from "./site";

const SITE_URL = "https://smiles.ie";

export const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  "@id": `${SITE_URL}/cork`,
  name: clinic.name,
  url: `${SITE_URL}/cork`,
  telephone: clinic.phone,
  email: clinic.email,
  image: `${SITE_URL}/images/hero.jpg`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.line1,
    addressLocality: clinic.address.city,
    postalCode: clinic.address.postcode,
    addressCountry: "IE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.8979, longitude: -8.4706 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating,
    reviewCount: clinic.reviewCount,
    bestRating: 5,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  areaServed: "Cork, Ireland",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: clinic.brand,
  url: SITE_URL,
  logo: `${SITE_URL}/images/hero.jpg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: clinic.phone,
    contactType: "customer service",
    areaServed: "IE",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: clinic.name,
  url: SITE_URL,
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "Dentist", name: clinic.name },
    areaServed: "Cork, Ireland",
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "Dentist", name: clinic.name },
  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  author: { "@type": "Person", name: "Verified Patient" },
  reviewBody:
    "Excellent, friendly and professional dental care in the heart of Cork city. Highly recommended.",
};
