import Seo from "../components/Seo";
import {
  Breadcrumbs,
  Button,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  Accordion,
  CtaBand,
} from "../components/ui";
import { clinic } from "../data/site";
import { breadcrumbJsonLd, faqJsonLd } from "../data/jsonld";

const benefits = [
  { icon: "calendar", t: "Routine check-ups", d: "Regular dental examinations included in your plan." },
  { icon: "sparkle", t: "Hygiene appointments", d: "Professional cleaning to keep your smile healthy." },
  { icon: "euro", t: "Affordable monthly payments", d: "Spread the cost of routine care across the year." },
  { icon: "heart", t: "Up to 10% savings", d: "Save on the cost of your routine dental care." },
  { icon: "shield", t: "Extra 10% discount", d: "An additional 10% off selected treatments." },
];

const faqs = [
  { q: "What is the Smiles Dental Plan?", a: "It is a simple monthly dental subscription that covers your routine check-ups and hygiene appointments, with savings on selected treatments." },
  { q: "How much can I save?", a: "Members enjoy up to 10% savings on routine care and an additional 10% discount on selected treatments." },
  { q: "How do I pay?", a: "You pay a convenient fixed monthly amount, making it easy to budget for your dental care." },
  { q: "Can I join at my local clinic?", a: "Yes. Contact your local practice to sign up and our team will explain everything." },
];

export default function SmilesDentalPlan() {
  return (
    <>
      <Seo
        title="Smiles Dental Plan | Dental Membership Ireland | Smiles Dental"
        description="Join the Smiles Dental Plan — a simple monthly dental membership covering routine check-ups and hygiene with up to 10% savings plus 10% off selected treatments."
        path="/smiles-dental-plan"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Smiles Dental Plan", path: "/smiles-dental-plan" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Smiles Dental Plan" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Membership"
          title="Smiles Dental Plan"
          subtitle="Look after your smile with a simple monthly subscription. Spread the cost of routine care and enjoy member savings on treatments."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.t} className="hover:translate-y-0">
              <IconBadge name={b.icon} />
              <h2 className="mt-4 text-lg font-semibold text-navy">{b.t}</h2>
              <p className="mt-2 text-slate-600">{b.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted className="!pt-0">
        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <SectionHeading eyebrow="FAQs" title="Smiles Dental Plan FAQs" />
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <Card className="hover:translate-y-0">
          <h2 className="text-lg font-bold text-navy">Terms and conditions</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            The Smiles Dental Plan is subject to terms and conditions. Savings apply
            to selected treatments and routine care as outlined at sign-up. Monthly
            payments are required to maintain membership and associated benefits.
            Please contact your practice for full details and current pricing.
          </p>
          <div className="mt-5">
            <Button href={clinic.phoneHref} icon="phone">
              Contact your practice
            </Button>
          </div>
        </Card>
      </Section>

      <CtaBand title="Ready to join the Smiles Dental Plan?" />
    </>
  );
}
