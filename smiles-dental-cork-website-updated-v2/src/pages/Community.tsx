import Seo from "../components/Seo";
import {
  Breadcrumbs,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  CtaBand,
} from "../components/ui";
import { breadcrumbJsonLd } from "../data/jsonld";

export default function Community() {
  return (
    <>
      <Seo
        title="Community & Student Discount | Smiles Dental"
        description="Smiles Dental in the community — proud supporters of Barnardos Children's Charity, plus a 10% student discount at clinics nationwide with valid student ID."
        path="/community"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Community" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Community"
          title="Giving back to our community"
          subtitle="We are proud to support good causes and make dental care more accessible across Ireland."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="hover:translate-y-0">
            <IconBadge name="heart" />
            <h2 className="mt-4 text-xl font-semibold text-navy">
              Barnardos Children's Charity
            </h2>
            <p className="mt-3 text-slate-600">
              We are proud supporters of Barnardos, Ireland's leading children's
              charity, helping vulnerable children and families across the country.
              Together we are working towards brighter futures for children in need.
            </p>
          </Card>

          <Card className="hover:translate-y-0">
            <IconBadge name="users" />
            <h2 className="mt-4 text-xl font-semibold text-navy">Student discount</h2>
            <p className="mt-3 text-slate-600">
              Students enjoy a <strong>10% discount</strong> on dental treatments at
              our clinics nationwide. A valid student ID is required to avail of the
              discount.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> 10% off treatments
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Available at clinics nationwide
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Valid student ID required
              </li>
            </ul>
          </Card>
        </div>

        <Card className="mt-8 hover:translate-y-0">
          <h2 className="text-lg font-bold text-navy">Terms and conditions</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            The student discount applies to selected treatments at participating
            Smiles Dental clinics and cannot be combined with other offers. A valid
            student ID must be presented. Terms and conditions apply and offers may
            change without notice.
          </p>
        </Card>
      </Section>

      <CtaBand />
    </>
  );
}
