import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  Reveal,
  CtaBand,
} from "../components/ui";
import { treatmentCategories } from "../data/site";
import { breadcrumbJsonLd } from "../data/jsonld";

export default function Treatments() {
  return (
    <>
      <Seo
        title="Dental Treatments in Cork | Smiles Dental Cork"
        description="Explore our full range of dental treatments in Cork: general, cosmetic and emergency dentistry, orthodontics, Invisalign, dental implants, children's dentistry and specialist care."
        path="/treatments"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Treatments" }]} />

      <Section>
        <SectionHeading
          center
          as="h1"
          eyebrow="Our Treatments"
          title="Dental treatments in Cork"
          subtitle="Choose a category below to discover how our experienced Cork team can help you achieve a healthy, confident smile."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentCategories.map((t) => (
            <Reveal key={t.slug}>
              <Card className="flex h-full flex-col">
                <IconBadge name={t.icon} />
                <h2 className="mt-4 text-xl font-semibold text-navy">{t.title}</h2>
                <p className="mt-2 flex-1 text-slate-600">{t.short}</p>
                <Link
                  to={`/treatments/${t.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  View Treatments <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
