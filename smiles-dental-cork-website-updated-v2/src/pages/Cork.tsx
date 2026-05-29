import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Button,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  StarRating,
  CtaBand,
} from "../components/ui";
import {
  clinic,
  openingHours,
  accessibility,
  paymentOptions,
} from "../data/site";
import { dentistJsonLd, breadcrumbJsonLd } from "../data/jsonld";

export default function Cork() {
  return (
    <>
      <Seo
        title="Cork Dental Clinic | Smiles Dental, Oliver Plunkett Street"
        description="Visit Smiles Dental Cork at 112 Oliver Plunkett Street, T12 D7TX. Opening hours, parking, accessibility, directions and contact details for our Cork city centre dental clinic."
        path="/cork"
        jsonLd={[
          dentistJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Cork Clinic", path: "/cork" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cork Clinic" }]} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Cork City Centre"
              title="Smiles Dental Cork"
              subtitle="Our modern, ground-floor dental clinic is located in the heart of Cork city on Oliver Plunkett Street, across from the GPO."
            />
            <div className="mt-6">
              <StarRating count={clinic.reviewCount} />
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/contact" icon="calendar">
                Book Appointment
              </Button>
              <Button href={clinic.phoneHref} variant="secondary" icon="phone">
                Call Now
              </Button>
              <Button href={clinic.mapsDirections} variant="ghost" icon="pin">
                Get Directions
              </Button>
            </div>
          </div>

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
                      o.hours === "Closed" ? "text-slate-400" : "font-semibold text-teal"
                    }
                  >
                    {o.hours}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Map */}
      <Section muted className="!pt-0">
        <Card className="overflow-hidden !p-0 hover:translate-y-0">
          <iframe
            title="Map of Smiles Dental Cork at 112 Oliver Plunkett Street"
            src={clinic.mapsEmbed}
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </Section>

      {/* Getting here + Accessibility + Payments */}
      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="hover:translate-y-0">
            <IconBadge name="pin" />
            <h2 className="mt-4 text-xl font-bold text-navy">Getting here</h2>
            <p className="mt-3 text-slate-600">
              Located on Oliver Plunkett Street, across from the GPO, in the centre
              of Cork city — within easy walking distance of Patrick Street and the
              bus and train stations.
            </p>
            <h3 className="mt-5 font-semibold text-navy">Parking</h3>
            <p className="mt-1 text-slate-600">
              On-street parking is available on South Mall, with several public car
              parks nearby in the city centre.
            </p>
            <div className="mt-5">
              <Button href={clinic.mapsDirections} variant="ghost" icon="arrow">
                Open in Google Maps
              </Button>
            </div>
          </Card>

          <Card className="hover:translate-y-0">
            <IconBadge name="wheelchair" />
            <h2 className="mt-4 text-xl font-bold text-navy">Accessibility</h2>
            <ul className="mt-4 space-y-2.5">
              {accessibility.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-slate-600">
                  <Icon name="check" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal" strokeWidth={2.5} />
                  {a}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="hover:translate-y-0">
            <IconBadge name="card" />
            <h2 className="mt-4 text-xl font-bold text-navy">Ways to pay</h2>
            <ul className="mt-4 grid gap-2.5">
              {paymentOptions.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-slate-600">
                  <Icon name="check" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Button to="/ways-to-pay" variant="ghost" icon="arrow">
                Payment options
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <CtaBand title="Visit Smiles Dental Cork today" />
    </>
  );
}
