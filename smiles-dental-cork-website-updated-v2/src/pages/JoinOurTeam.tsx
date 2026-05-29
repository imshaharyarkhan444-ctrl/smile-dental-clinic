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
import { clinic, dublinClinics, nationwideClinics } from "../data/site";
import { breadcrumbJsonLd } from "../data/jsonld";

const reasons = [
  { icon: "users", t: "Supportive culture", d: "Work alongside experienced, friendly colleagues in modern clinics." },
  { icon: "sparkle", t: "Professional growth", d: "Ongoing training, mentoring and clear progression pathways." },
  { icon: "shield", t: "Modern facilities", d: "State-of-the-art equipment and digital dentistry across our practices." },
  { icon: "heart", t: "Work-life balance", d: "Flexible scheduling and locations nationwide to suit you." },
];

const roles = [
  "Dentist",
  "Orthodontist",
  "Periodontist",
  "Oral surgeon",
  "Endodontist",
  "Dental nurse",
  "Hygienist",
  "Receptionist",
  "Business manager",
];

const allLocations = ["Cork", ...nationwideClinics.filter((c) => c !== "Cork"), ...dublinClinics];

const fields: FieldDef[] = [
  { name: "name", label: "Name", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "role", label: "Role", type: "select", required: true, options: roles },
  { name: "location", label: "Preferred location", type: "select", options: allLocations },
  { name: "message", label: "Message", type: "textarea", full: true },
  { name: "cv", label: "CV upload", type: "file", accept: ".pdf,.doc,.docx", full: true },
];

export default function JoinOurTeam() {
  return (
    <>
      <Seo
        title="Dental Careers Ireland | Join Our Team | Smiles Dental"
        description="Explore dental careers with Smiles Dental. Opportunities for dentists, orthodontists, hygienists, dental nurses and more across Ireland. Apply today at jobs@smiles.ie."
        path="/for-dentists/join-our-team"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Dentists", path: "/for-dentists" },
          { name: "Join Our Team", path: "/for-dentists/join-our-team" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "For Dentists", to: "/for-dentists" },
          { label: "Join Our Team" },
        ]}
      />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Careers"
          title="Build your career at Smiles Dental"
          subtitle="We are always looking for talented, caring professionals to join our growing team across Ireland. Discover a rewarding career in a supportive, modern environment."
        />
        <div className="mt-6">
          <Button href={`mailto:${clinic.jobsEmail}`} variant="ghost" icon="mail">
            {clinic.jobsEmail}
          </Button>
        </div>
      </Section>

      <Section muted className="!pt-0">
        <SectionHeading title="Why work at Smiles Dental" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <Card key={r.t} className="hover:translate-y-0">
              <IconBadge name={r.icon} />
              <h3 className="mt-4 font-semibold text-navy">{r.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading title="Career opportunities" subtitle="We recruit across a wide range of clinical and support roles, including:" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <li key={role} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist-2 text-brand">
                <Icon name="briefcase" className="h-5 w-5" />
              </span>
              <span className="font-medium text-navy">{role}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section muted className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Apply now"
              title="Send us your application"
              subtitle="Complete the form below and attach your CV. You can also email us directly."
            />
            <a
              href={`mailto:${clinic.jobsEmail}`}
              className="mt-5 inline-flex items-center gap-3 text-slate-600 hover:text-brand"
            >
              <Icon name="mail" className="h-5 w-5 text-brand" /> {clinic.jobsEmail}
            </a>
          </div>
          <Card className="hover:translate-y-0">
            <SmartForm
              fields={fields}
              submitLabel="Submit application"
              successMessage="Thank you for your application. Our recruitment team will review your details and be in touch."
            />
          </Card>
        </div>
      </Section>
    </>
  );
}
