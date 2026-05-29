import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Button,
  Card,
  Section,
  SectionHeading,
  StarRating,
  CtaBand,
} from "../components/ui";
import { clinic, dublinClinics, nationwideClinics } from "../data/site";
import { breadcrumbJsonLd } from "../data/jsonld";

type ClinicCard = { name: string; phone: string; open: boolean; featured?: boolean };

// Representative listing for all Smiles Dental locations.
const corkCard: ClinicCard = {
  name: clinic.name,
  phone: clinic.phone,
  open: true,
  featured: true,
};

function isOpenNow() {
  return true; // simplified status indicator
}

const otherClinics: ClinicCard[] = [
  ...nationwideClinics
    .filter((c) => c !== "Cork")
    .map((c) => ({ name: `Smiles Dental ${c}`, phone: "+353 1 588 2424", open: isOpenNow() })),
  ...dublinClinics.map((c) => ({ name: `Smiles Dental ${c}`, phone: "+353 1 588 2424", open: isOpenNow() })),
];

function ClinicTile({ c }: { c: ClinicCard }) {
  return (
    <Card className={`flex h-full flex-col ${c.featured ? "ring-2 ring-brand" : ""}`}>
      {c.featured && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          <Icon name="pin" className="h-3.5 w-3.5" /> Featured clinic
        </span>
      )}
      <h3 className="text-lg font-bold text-navy">{c.name}</h3>
      <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-2 flex items-center gap-2 text-slate-600 hover:text-brand">
        <Icon name="phone" className="h-4.5 w-4.5 text-brand" /> {c.phone}
      </a>
      <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
        <span className="h-2 w-2 rounded-full bg-teal" /> Open today
      </span>
      <div className="mt-auto pt-5">
        {c.featured ? (
          <Button to="/cork" variant="ghost" icon="arrow" full>
            Meet the Team
          </Button>
        ) : (
          <Button to="/contact" variant="ghost" icon="arrow" full>
            Meet the Team
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function MeetTheTeam() {
  return (
    <>
      <Seo
        title="Meet the Team | Smiles Dental Clinics in Ireland"
        description="Meet our qualified dentists, registered with the Irish Dental Council, across Smiles Dental clinics in Cork, Dublin and nationwide. Find your local clinic and team."
        path="/meet-the-team"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Meet the Team", path: "/meet-the-team" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Meet the Team" }]} />

      <Section>
        <SectionHeading
          center
          as="h1"
          eyebrow="Our People"
          title="Meet the team"
          subtitle="Our dentists are fully qualified and registered with the Irish Dental Council. With clinics across Ireland, expert, friendly dental care is never far away."
        />
        <div className="mt-6 flex justify-center">
          <StarRating count={clinic.reviewCount} />
        </div>
      </Section>

      <Section muted className="!pt-0">
        <SectionHeading title="Our Cork clinic" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ClinicTile c={corkCard} />
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading
          title="All Smiles Dental clinics"
          subtitle="Find your nearest Smiles Dental practice and meet the local team."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherClinics.map((c) => (
            <ClinicTile key={c.name} c={c} />
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Looking for the Cork team?{" "}
          <Link to="/cork" className="font-semibold text-brand hover:underline">
            Visit our Cork clinic page
          </Link>
          .
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
