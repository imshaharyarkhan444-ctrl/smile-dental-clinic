import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Card,
  IconBadge,
  Section,
  SectionHeading,
} from "../components/ui";
import { SmartForm } from "../components/Form";
import type { FieldDef } from "../components/Form";
import { breadcrumbJsonLd } from "../data/jsonld";

const treatments = [
  "Dental implants",
  "Orthodontics",
  "Periodontics",
  "Endodontics",
  "Oral surgery",
  "CT scans",
];

const reasons = [
  { icon: "specialist", t: "Experienced specialists", d: "Your patients are cared for by skilled, registered clinicians." },
  { icon: "shield", t: "Advanced technology", d: "On-site CT imaging and modern digital dentistry." },
  { icon: "users", t: "Seamless communication", d: "We keep you updated and return patients to your care." },
];

const steps = [
  { n: "1", t: "Complete the referral form", d: "Provide patient and treatment details below." },
  { n: "2", t: "We contact the patient", d: "Our team arranges a convenient consultation." },
  { n: "3", t: "Treatment & report", d: "We treat the patient and send you a full report." },
];

const fields: FieldDef[] = [
  { name: "dentistName", label: "Referring dentist name", required: true },
  { name: "practice", label: "Practice name", required: true },
  { name: "dentistEmail", label: "Dentist email", type: "email", required: true },
  { name: "dentistPhone", label: "Dentist contact number", type: "tel", required: true },
  { name: "patientName", label: "Patient name", required: true },
  { name: "patientPhone", label: "Patient contact number", type: "tel", required: true },
  { name: "treatment", label: "Treatment required", type: "select", required: true, options: treatments },
  { name: "info", label: "Additional information", type: "textarea", full: true },
];

export default function Referrals() {
  return (
    <>
      <Seo
        title="Dental Referrals Cork | Refer a Patient | Smiles Dental"
        description="Refer your patients to Smiles Dental Cork for specialist treatment including dental implants, orthodontics, periodontics, endodontics, oral surgery and CT scans."
        path="/for-dentists/referrals"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Dentists", path: "/for-dentists" },
          { name: "Referrals", path: "/for-dentists/referrals" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "For Dentists", to: "/for-dentists" },
          { label: "Referrals" },
        ]}
      />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Referrals"
          title="Refer a patient with confidence"
          subtitle="We welcome referrals from dental colleagues across Ireland. Your patients receive expert specialist care, and we keep you informed every step of the way."
        />
      </Section>

      <Section muted className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Treatments we accept" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {treatments.map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-teal" strokeWidth={2.5} />
                  <span className="font-medium text-navy">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Why refer to Smiles Dental" />
            <ul className="mt-6 space-y-4">
              {reasons.map((r) => (
                <li key={r.t} className="flex gap-4">
                  <IconBadge name={r.icon} />
                  <div>
                    <h3 className="font-semibold text-navy">{r.t}</h3>
                    <p className="text-slate-600">{r.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading title="The referral process" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n} className="hover:translate-y-0">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted className="!pt-0">
        <div className="mx-auto max-w-3xl">
          <SectionHeading center title="Referral form" subtitle="Please provide the dentist and patient details below." />
          <Card className="mt-8 hover:translate-y-0">
            <SmartForm
              fields={fields}
              submitLabel="Submit referral"
              successMessage="Thank you for your referral. Our team will contact the patient and keep you updated."
            />
          </Card>
        </div>
      </Section>
    </>
  );
}
