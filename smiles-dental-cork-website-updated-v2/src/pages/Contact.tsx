import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Button,
  Card,
  IconBadge,
  Section,
  SectionHeading,
} from "../components/ui";
import { SmartForm } from "../components/Form";
import type { FieldDef } from "../components/Form";
import {
  clinic,
  openingHours,
  dublinClinics,
  nationwideClinics,
} from "../data/site";
import { dentistJsonLd, breadcrumbJsonLd } from "../data/jsonld";

const locations = [...nationwideClinics, ...dublinClinics];

const fields: FieldDef[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "location", label: "Choose location", type: "select", required: true, options: locations },
  {
    name: "interest",
    label: "I'm interested in",
    type: "select",
    options: [
      "General dentistry",
      "Cosmetic dentistry",
      "Orthodontics / Invisalign",
      "Dental implants",
      "Emergency appointment",
      "Children's dentistry",
      "Finance / payment options",
      "Other",
    ],
  },
  { name: "message", label: "Message", type: "textarea", full: true },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Smiles Dental Cork | Book an Appointment"
        description="Contact Smiles Dental Cork at 112 Oliver Plunkett Street, T12 D7TX. Call +353 21 427 4706, email cork@smiles.ie, or use our online form to book an appointment."
        path="/contact"
        jsonLd={[
          dentistJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Get in touch with Smiles Dental Cork"
          subtitle="Book an appointment, ask a question or request a callback. Our friendly Cork team is here to help."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <div className="space-y-6">
            <Card className="hover:translate-y-0">
              <div className="flex items-center gap-3">
                <IconBadge name="pin" />
                <h2 className="text-xl font-bold text-navy">Clinic details</h2>
              </div>
              <address className="mt-5 space-y-3 not-italic text-slate-700">
                <p className="flex items-start gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {clinic.address.full}
                </p>
                <a href={clinic.phoneHref} className="flex items-center gap-3 hover:text-brand">
                  <Icon name="phone" className="h-5 w-5 text-brand" /> {clinic.phone}
                </a>
                <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 hover:text-brand">
                  <Icon name="mail" className="h-5 w-5 text-brand" /> {clinic.email}
                </a>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button to="#contact-form" icon="calendar">
                  Book Appointment
                </Button>
                <Button href={clinic.phoneHref} variant="secondary" icon="phone">
                  Call Now
                </Button>
                <Button href={clinic.mapsDirections} variant="ghost" icon="pin">
                  Get Directions
                </Button>
              </div>
            </Card>

            <Card className="hover:translate-y-0">
              <div className="flex items-center gap-3">
                <IconBadge name="clock" />
                <h2 className="text-xl font-bold text-navy">Opening hours</h2>
              </div>
              <ul className="mt-5 divide-y divide-slate-100">
                {openingHours.map((o) => (
                  <li key={o.day} className="flex items-center justify-between py-2">
                    <span className="font-medium text-navy">{o.day}</span>
                    <span className={o.hours === "Closed" ? "text-slate-400" : "font-semibold text-teal"}>
                      {o.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="overflow-hidden !p-0 hover:translate-y-0">
              <iframe
                title="Map of Smiles Dental Cork"
                src={clinic.mapsEmbed}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>

          {/* Form */}
          <div id="contact-form">
            <Card className="hover:translate-y-0">
              <h2 className="text-xl font-bold text-navy">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-600">
                Fields marked with * are required.
              </p>
              <div className="mt-6">
                <SmartForm fields={fields} submitLabel="Send message" />
              </div>
            </Card>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              <strong>Privacy policy:</strong> We respect your privacy. The personal
              information you provide is used solely to respond to your enquiry and
              manage your appointment. We never sell your data, and we store it
              securely in line with GDPR. You can request access to or deletion of
              your data at any time by contacting {clinic.email}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
