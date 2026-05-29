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

const features = [
  { icon: "euro", t: "Interest-free finance", d: "0% finance available over terms up to 24 months." },
  { icon: "card", t: "Payment plans up to €30,000", d: "Finance larger treatments such as implants and orthodontics." },
  { icon: "doc", t: "Pay in 3 or Pay in 5", d: "Split treatments up to €499.99 into 3 or 5 payments." },
  { icon: "shield", t: "Quick online application", d: "Apply in minutes with a fast decision from Humm." },
];

const examples = [
  { treatment: "Teeth whitening", total: "€300", months: "6 months", monthly: "€50.00" },
  { treatment: "Invisalign", total: "€3,500", months: "12 months", monthly: "€291.67" },
  { treatment: "Single dental implant", total: "€1,950", months: "24 months", monthly: "€81.25" },
  { treatment: "Full smile makeover", total: "€6,000", months: "24 months", monthly: "€250.00" },
];

export default function DentalFinance() {
  return (
    <>
      <Seo
        title="Dental Finance Ireland | Interest-Free Humm Finance | Smiles Dental"
        description="Spread the cost of dental treatment with Humm finance at Smiles Dental. Interest-free finance up to 24 months, plans up to €30,000, and Pay in 3 or 5 options."
        path="/dental-finance"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Dental Finance", path: "/dental-finance" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Dental Finance" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Finance"
          title="Dental finance by Humm"
          subtitle="Don't let cost hold you back from a healthy, confident smile. Spread the cost of your treatment with flexible, interest-free finance options."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.t} className="hover:translate-y-0">
              <IconBadge name={f.icon} />
              <h2 className="mt-4 font-semibold text-navy">{f.t}</h2>
              <p className="mt-2 text-sm text-slate-600">{f.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted className="!pt-0">
        <SectionHeading title="Finance examples" subtitle="Illustrative examples of interest-free monthly payments. Actual terms are confirmed on application." />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[560px] text-left">
            <thead className="bg-mist-2 text-navy">
              <tr>
                <th className="px-5 py-3.5 text-sm font-semibold">Treatment</th>
                <th className="px-5 py-3.5 text-sm font-semibold">Total cost</th>
                <th className="px-5 py-3.5 text-sm font-semibold">Term</th>
                <th className="px-5 py-3.5 text-right text-sm font-semibold">Monthly (0% APR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {examples.map((e) => (
                <tr key={e.treatment} className="hover:bg-mist/50">
                  <td className="px-5 py-3.5 font-medium text-navy">{e.treatment}</td>
                  <td className="px-5 py-3.5 text-slate-600">{e.total}</td>
                  <td className="px-5 py-3.5 text-slate-600">{e.months}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-teal">{e.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="https://www.humm.ie" icon="arrow">
            Apply Now
          </Button>
          <Button to="/contact" variant="ghost" icon="euro">
            Get a Quote
          </Button>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Finance is subject to status and approval. Terms and conditions apply.
          Humm is a trading name of the finance provider. Smiles Dental is not a
          lender and acts as an introducer.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
