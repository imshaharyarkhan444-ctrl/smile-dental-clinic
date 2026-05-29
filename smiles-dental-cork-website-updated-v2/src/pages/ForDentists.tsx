import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  CtaBand,
} from "../components/ui";
import { breadcrumbJsonLd } from "../data/jsonld";

const cards = [
  {
    to: "/for-dentists/join-our-team",
    icon: "briefcase",
    title: "Join Our Team",
    desc: "Build your career with one of Ireland's leading dental groups. Explore clinical and support roles nationwide.",
  },
  {
    to: "/for-dentists/referrals",
    icon: "users",
    title: "Referrals",
    desc: "Refer your patients for specialist treatment with confidence. Implants, orthodontics, oral surgery, CT scans and more.",
  },
];

export default function ForDentists() {
  return (
    <>
      <Seo
        title="For Dentists | Careers & Referrals | Smiles Dental Cork"
        description="Information for dental professionals at Smiles Dental Cork. Join our team or refer patients for specialist treatments including implants, orthodontics and oral surgery."
        path="/for-dentists"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Dentists", path: "/for-dentists" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "For Dentists" }]} />
      <Section>
        <SectionHeading
          center
          as="h1"
          eyebrow="For Dentists"
          title="Working with Smiles Dental"
          subtitle="Whether you are looking to advance your career or refer a patient for specialist care, we would love to hear from you."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <Link key={c.to} to={c.to}>
              <Card className="flex h-full flex-col">
                <IconBadge name={c.icon} />
                <h2 className="mt-4 text-xl font-semibold text-navy">{c.title}</h2>
                <p className="mt-2 flex-1 text-slate-600">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand title="Have a question for our team?" />
    </>
  );
}
