import Seo from "../components/Seo";
import {
  Breadcrumbs,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  Accordion,
  CtaBand,
} from "../components/ui";
import { breadcrumbJsonLd, faqJsonLd } from "../data/jsonld";

const benefits = [
  {
    icon: "users",
    t: "PRSI dental benefit",
    d: "If you pay PRSI, you may be entitled to a free dental examination each year and subsidised cleaning. Eligibility depends on your PRSI contributions.",
  },
  {
    icon: "shield",
    t: "DeCare dental insurance",
    d: "We accept DeCare dental insurance for eligible treatments. Bring your policy details to your appointment.",
  },
  {
    icon: "heart",
    t: "Medical card",
    d: "Medical card holders may be eligible for treatment under the Dental Treatment Services Scheme at selected practices.",
  },
];

const faqs = [
  {
    q: "How do I check my PRSI eligibility?",
    a: "Eligibility is based on your PRSI contributions. Our reception team can help check your entitlement, or you can confirm with the Department of Social Protection.",
  },
  {
    q: "What is the medical card deposit policy?",
    a: "For certain medical card treatments a deposit may be required, which is refunded once the scheme approval and treatment are confirmed in line with scheme rules.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly ask for at least 24 hours' notice to cancel or reschedule an appointment, so we can offer the slot to another patient. Late cancellations or missed appointments may incur a fee.",
  },
];

export default function DentalBenefits() {
  return (
    <>
      <Seo
        title="Dental Benefits | PRSI, DeCare & Medical Card | Smiles Dental"
        description="Find out about dental benefits at Smiles Dental — PRSI dental benefit, DeCare insurance and medical card eligibility, plus deposit and cancellation policies."
        path="/dental-benefits"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Dental Benefits", path: "/dental-benefits" },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Dental Benefits" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Benefits"
          title="Dental benefits & eligibility"
          subtitle="You may be entitled to support towards the cost of your dental care. Here is an overview of the benefits and schemes we accept."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
          <SectionHeading eyebrow="Good to know" title="Policies & frequently asked questions" />
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <Card className="hover:translate-y-0">
          <h2 className="text-lg font-bold text-navy">Terms and conditions</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Benefit eligibility is subject to the rules of the relevant scheme or
            insurer and may change. Coverage, deposits and cancellation fees are
            applied in line with current policy and scheme guidelines. Please speak
            to our team for the latest information relevant to your circumstances.
          </p>
        </Card>
      </Section>

      <CtaBand />
    </>
  );
}
