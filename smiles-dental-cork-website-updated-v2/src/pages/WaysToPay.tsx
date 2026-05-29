import Seo from "../components/Seo";
import {
  Breadcrumbs,
  Button,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  CtaBand,
} from "../components/ui";
import { breadcrumbJsonLd } from "../data/jsonld";

const options = [
  { icon: "card", t: "Pay per appointment", d: "Pay as you go for each visit with card, debit or NFC mobile payment." },
  { icon: "shield", t: "Medical cards", d: "Medical card treatments available at selected practices." },
  { icon: "heart", t: "Smiles Dental Plan", d: "A simple monthly subscription covering routine care with savings." },
  { icon: "euro", t: "Dental finance by Humm", d: "Spread the cost with interest-free finance options." },
  { icon: "doc", t: "Private insurance", d: "We work with major private dental insurers." },
  { icon: "users", t: "PRSI", d: "Claim your PRSI dental entitlements where eligible." },
  { icon: "shield", t: "DeCare dental insurance", d: "Accepted for eligible treatments." },
];

export default function WaysToPay() {
  return (
    <>
      <Seo
        title="Ways to Pay | Dental Finance & Insurance | Smiles Dental Cork"
        description="Flexible ways to pay for dental treatment at Smiles Dental Cork — pay per appointment, medical cards, Smiles Dental Plan, Humm finance, private insurance, PRSI and DeCare."
        path="/ways-to-pay"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Ways to Pay", path: "/ways-to-pay" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Ways to Pay" }]} />

      <Section>
        <SectionHeading
          center
          as="h1"
          eyebrow="Payments"
          title="Ways to pay"
          subtitle="We believe excellent dental care should be accessible. Choose the payment option that suits you best, with transparent pricing throughout."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o) => (
            <Card key={o.t} className="hover:translate-y-0">
              <IconBadge name={o.icon} />
              <h2 className="mt-4 text-lg font-semibold text-navy">{o.t}</h2>
              <p className="mt-2 text-slate-600">{o.d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-mist p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-navy">Transparent pricing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We provide clear, upfront pricing so you always know what to expect.
            View our full price list to plan your treatment with confidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/price-list" icon="doc">
              View price list
            </Button>
            <Button to="/dental-finance" variant="ghost" icon="euro">
              Explore finance
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
