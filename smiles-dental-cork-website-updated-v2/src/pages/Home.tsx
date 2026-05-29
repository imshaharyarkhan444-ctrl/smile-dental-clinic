import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Button,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  StarRating,
  Reveal,
  CtaBand,
} from "../components/ui";
import {
  clinic,
  highlights,
  openingHours,
  trustBadges,
  accessibility,
} from "../data/site";
import {
  dentistJsonLd,
  organizationJsonLd,
  websiteJsonLd,
  reviewJsonLd,
} from "../data/jsonld";

export default function Home() {
  return (
    <>
      <Seo
        title="Smiles Dental Cork | Dentist in Cork City Centre"
        description="State-of-the-art dental clinic in Cork city centre offering general, emergency, cosmetic, orthodontic and implant dentistry. Extended & Saturday appointments. 4.7★ from 396 reviews."
        path="/"
        jsonLd={[dentistJsonLd, organizationJsonLd, websiteJsonLd, reviewJsonLd]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <img
          src="/images/smiles-cork-hero.png"
          alt="Smiles Dental Cork quality dentistry you can afford hero banner"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-brand-dark/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Icon name="pin" className="h-4 w-4 text-teal-light" />
              112 Oliver Plunkett Street, Cork City Centre
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your trusted dentist in{" "}
              <span className="text-teal-light">Cork city centre</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              A state-of-the-art dental clinic in Cork city centre offering
              general, emergency, cosmetic, orthodontic and implant dentistry —
              with extended opening hours and Saturday appointments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/contact" variant="white" icon="calendar">
                Book Appointment
              </Button>
              <Button href={clinic.phoneHref} variant="secondary" icon="phone">
                Call Now
              </Button>
              <Button
                href={clinic.mapsDirections}
                variant="ghost"
                icon="pin"
                className="!bg-transparent !text-white !border-white/40 hover:!bg-white/10"
              >
                Get Directions
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <StarRating count={clinic.reviewCount} light />
              <span className="text-sm text-blue-100">
                Registered with the Irish Dental Council
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <div className="border-b border-slate-100 bg-mist">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustBadges.map((b) => (
            <div key={b} className="flex items-center gap-2.5 text-sm font-medium text-navy">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Icon name="shield" className="h-4.5 w-4.5" />
              </span>
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <Section>
        <SectionHeading
          center
          eyebrow="What we do"
          title="Comprehensive dental care under one roof"
          subtitle="From routine check-ups to advanced treatments, our experienced Cork team delivers gentle, high-quality dentistry for the whole family."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <Reveal key={h.title}>
              <Link to={`/treatments/${h.slug}`}>
                <Card className="h-full">
                  <IconBadge name={h.icon} />
                  <h3 className="mt-4 text-xl font-semibold text-navy">{h.title}</h3>
                  <p className="mt-2 text-slate-600">
                    Expert {h.title.toLowerCase()} care delivered with the latest
                    technology and a gentle, patient-first approach.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn more <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/treatments" variant="ghost" icon="arrow">
            View all treatments
          </Button>
        </div>
      </Section>

      {/* Hours + Location */}
      <Section muted>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="hover:translate-y-0">
            <div className="flex items-center gap-3">
              <IconBadge name="clock" />
              <h2 className="text-2xl font-bold text-navy">Opening Hours</h2>
            </div>
            <ul className="mt-6 divide-y divide-slate-100">
              {openingHours.map((o) => (
                <li key={o.day} className="flex items-center justify-between py-2.5">
                  <span className="font-medium text-navy">{o.day}</span>
                  <span
                    className={
                      o.hours === "Closed"
                        ? "text-slate-400"
                        : "font-semibold text-teal"
                    }
                  >
                    {o.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-mist-2 p-4 text-sm text-navy">
              Extended weekday hours until 8pm and Saturday appointments available.
            </p>
          </Card>

          <Card className="hover:translate-y-0">
            <div className="flex items-center gap-3">
              <IconBadge name="pin" />
              <h2 className="text-2xl font-bold text-navy">Our Cork Clinic</h2>
            </div>
            <address className="mt-6 space-y-3 not-italic text-slate-700">
              <p className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                {clinic.address.full}
              </p>
              <a href={clinic.phoneHref} className="flex items-center gap-3 hover:text-brand">
                <Icon name="phone" className="h-5 w-5 text-brand" /> {clinic.phone}
              </a>
              <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 hover:text-brand">
                <Icon name="mail" className="h-5 w-5 text-brand" /> {clinic.email}
              </a>
            </address>
            <div className="mt-5">
              <p className="mb-2 text-sm font-semibold text-navy">Accessibility</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {accessibility.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-slate-600">
                    <Icon name="check" className="h-4 w-4 text-teal" strokeWidth={2.5} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={clinic.mapsDirections} icon="pin">
                Get Directions
              </Button>
              <Button to="/cork" variant="ghost" icon="arrow">
                Clinic details
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <img
              src="/images/smile.jpg"
              alt="Patient with a healthy, confident smile after dental treatment in Cork"
              className="w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Smiles Dental Cork"
              title="Premium dental care you can trust"
              subtitle="We combine modern technology, experienced clinicians and a warm, welcoming environment to make every visit comfortable."
            />
            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: "users",
                  t: "Experienced, caring team",
                  d: "Qualified dentists and specialists registered with the Irish Dental Council.",
                },
                {
                  icon: "calendar",
                  t: "Flexible appointments",
                  d: "Extended weekday hours and Saturday appointments to suit busy lives.",
                },
                {
                  icon: "euro",
                  t: "Affordable finance",
                  d: "Interest-free finance with Humm, the Smiles Dental Plan and insurance options.",
                },
                {
                  icon: "wheelchair",
                  t: "Accessible city-centre location",
                  d: "Ground-floor, wheelchair-accessible clinic on Oliver Plunkett Street.",
                },
              ].map((f) => (
                <li key={f.t} className="flex gap-4">
                  <IconBadge name={f.icon} />
                  <div>
                    <h3 className="font-semibold text-navy">{f.t}</h3>
                    <p className="text-slate-600">{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
