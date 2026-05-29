import { Navigate, useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Button,
  Card,
  IconBadge,
  Section,
  SectionHeading,
  Accordion,
  CtaBand,
  Reveal,
} from "../components/ui";
import { SmartForm } from "../components/Form";
import type { FieldDef } from "../components/Form";
import { treatmentDetails } from "../data/treatments";
import { treatmentCategories, clinic } from "../data/site";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "../data/jsonld";

const estimateFields: FieldDef[] = [
  { name: "name", label: "Full name", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "treatment",
    label: "Treatment of interest",
    type: "select",
    required: true,
    options: ["Fixed braces", "Invisalign", "Invisalign Go", "Six Month Smiles", "Not sure yet"],
  },
  { name: "message", label: "Tell us about your goals", type: "textarea", full: true },
];

const quoteFields: FieldDef[] = [
  { name: "name", label: "Full name", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "teeth",
    label: "Teeth to replace",
    type: "select",
    options: ["1 tooth", "2–3 teeth", "4+ teeth", "Full arch", "Not sure"],
  },
  { name: "message", label: "Additional information", type: "textarea", full: true },
];

const bookingFields: FieldDef[] = [
  { name: "name", label: "Full name", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "message", label: "How can we help?", type: "textarea", full: true },
];

export default function TreatmentDetail() {
  const { slug = "" } = useParams();
  const data = treatmentDetails[slug];

  if (!data) return <Navigate to="/treatments" replace />;

  const fields =
    data.formType === "estimate"
      ? estimateFields
      : data.formType === "quote"
        ? quoteFields
        : bookingFields;

  const others = treatmentCategories.filter((t) => t.slug !== slug).slice(0, 3);

  const jsonLd: object[] = [
    serviceJsonLd(data.title, data.metaDescription, `/treatments/${slug}`),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Treatments", path: "/treatments" },
      { name: data.title, path: `/treatments/${slug}` },
    ]),
  ];
  if (data.faqs) jsonLd.push(faqJsonLd(data.faqs));

  return (
    <>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/treatments/${slug}`}
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Treatments", to: "/treatments" },
          { label: data.title },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-mist to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <IconBadge name={data.icon} />
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {data.title} in Cork
            </h1>
            <p className="mt-3 text-lg font-medium text-teal">{data.tagline}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{data.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
        </div>
      </section>

      {/* Emergency notice */}
      {data.emergencyNotice && (
        <div className="bg-rose-50">
          <div className="mx-auto flex max-w-7xl items-start gap-4 px-4 py-6 sm:px-6 lg:px-8">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <Icon name="alert" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-bold text-rose-800">Please call before attending</h2>
              <p className="mt-1 text-rose-700">
                If you are experiencing a dental emergency, please call us on{" "}
                <a href={clinic.phoneHref} className="font-semibold underline">
                  {clinic.phone}
                </a>{" "}
                before attending so our team can prepare for your visit and see you as
                quickly as possible.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Offer */}
      {data.offer && (
        <Section className="!pb-0">
          <div className="rounded-3xl bg-gradient-to-br from-navy to-brand-dark p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">{data.offer.title}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.offer.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                >
                  <Icon name="sparkle" className="h-6 w-6 shrink-0 text-teal-light" />
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Services */}
      <Section>
        <SectionHeading title={data.servicesHeading} />
        {data.pricingTable ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-mist-2 text-navy">
                <tr>
                  <th className="px-5 py-3.5 text-sm font-semibold">Treatment</th>
                  <th className="px-5 py-3.5 text-right text-sm font-semibold">From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.services.map((s) => (
                  <tr key={s.name} className="hover:bg-mist/50">
                    <td className="px-5 py-3.5 font-medium text-navy">{s.name}</td>
                    <td className="px-5 py-3.5 text-right font-semibold text-teal">
                      {s.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((s) => (
              <Reveal key={s.name}>
                <Card className="flex h-full items-start gap-3 hover:translate-y-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Icon name="check" className="h-4.5 w-4.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">
                      {s.name}
                      {s.price && (
                        <span className="ml-2 text-sm font-semibold text-teal">{s.price}</span>
                      )}
                    </h3>
                    {s.desc && <p className="mt-1 text-sm text-slate-600">{s.desc}</p>}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      {/* FAQ */}
      {data.faqs && (
        <Section muted className="!pt-0">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
            <div className="mt-8">
              <Accordion items={data.faqs.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          </div>
        </Section>
      )}

      {/* Form */}
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title={
                data.formTitle ||
                `Book your ${data.title.toLowerCase()} appointment`
              }
              subtitle="Complete the form and our friendly Cork team will be in touch to arrange your visit."
            />
            <div className="mt-6 space-y-3 text-slate-600">
              <a href={clinic.phoneHref} className="flex items-center gap-3 hover:text-brand">
                <Icon name="phone" className="h-5 w-5 text-brand" /> {clinic.phone}
              </a>
              <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 hover:text-brand">
                <Icon name="mail" className="h-5 w-5 text-brand" /> {clinic.email}
              </a>
            </div>
          </div>
          <Card className="hover:translate-y-0">
            <SmartForm
              fields={fields}
              submitLabel={
                data.formType === "quote"
                  ? "Request quote"
                  : data.formType === "estimate"
                    ? "Get estimate"
                    : "Request appointment"
              }
            />
          </Card>
        </div>
      </Section>

      {/* Related */}
      <Section muted className="!pt-0">
        <SectionHeading title="Explore related treatments" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((t) => (
            <Link key={t.slug} to={`/treatments/${t.slug}`}>
              <Card className="h-full">
                <IconBadge name={t.icon} />
                <h3 className="mt-4 font-semibold text-navy">{t.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{t.short}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
