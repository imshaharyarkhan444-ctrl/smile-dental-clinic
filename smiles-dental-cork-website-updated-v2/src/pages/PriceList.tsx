import { useState } from "react";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import {
  Breadcrumbs,
  Button,
  Card,
  Section,
  SectionHeading,
  CtaBand,
} from "../components/ui";
import { dublinClinics, nationwideClinics } from "../data/site";
import { breadcrumbJsonLd } from "../data/jsonld";

const samplePrices = [
  { name: "New patient exam", price: "from €60" },
  { name: "Routine exam", price: "from €50" },
  { name: "Scale & polish (hygiene)", price: "from €75" },
  { name: "White filling", price: "from €120" },
  { name: "Root canal treatment", price: "from €350" },
  { name: "Tooth extraction", price: "from €120" },
  { name: "Crown", price: "from €650" },
  { name: "Teeth whitening", price: "from €295" },
  { name: "Dental implant", price: "from €1,950" },
  { name: "Invisalign", price: "from €3,500" },
];

export default function PriceList() {
  const [location, setLocation] = useState("Cork");
  const allLocations = [...nationwideClinics, ...dublinClinics].sort();

  return (
    <>
      <Seo
        title="Dental Price List Ireland | Treatment Costs | Smiles Dental"
        description="View transparent dental treatment prices at Smiles Dental clinics across Ireland, including Cork, Dublin and nationwide. Select your location to see indicative pricing."
        path="/price-list"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Price List", path: "/price-list" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Price List" }]} />

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="Dental price list"
          subtitle="Select your clinic location to view indicative treatment prices. Final costs are confirmed at your consultation."
        />

        <div className="mt-8 max-w-md">
          <label htmlFor="loc" className="mb-1.5 block text-sm font-medium text-navy">
            Choose your location
          </label>
          <select
            id="loc"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none"
          >
            <optgroup label="Nationwide">
              {nationwideClinics.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </optgroup>
            <optgroup label="Dublin">
              {dublinClinics.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 bg-navy px-5 py-4 text-white">
            <Icon name="pin" className="h-5 w-5 text-teal-light" />
            <h2 className="font-semibold">Indicative prices — {location}</h2>
          </div>
          <table className="w-full text-left">
            <thead className="bg-mist-2 text-navy">
              <tr>
                <th className="px-5 py-3 text-sm font-semibold">Treatment</th>
                <th className="px-5 py-3 text-right text-sm font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {samplePrices.map((p) => (
                <tr key={p.name} className="hover:bg-mist/50">
                  <td className="px-5 py-3.5 font-medium text-navy">{p.name}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-teal">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Prices are indicative and may vary by location and individual treatment
          needs. {allLocations.length} clinics nationwide. Please contact your chosen
          clinic for a personalised quote.
        </p>

        <Card className="mt-8 hover:translate-y-0">
          <h2 className="text-xl font-bold text-navy">Spread the cost</h2>
          <p className="mt-2 text-slate-600">
            Interest-free finance and the Smiles Dental Plan make treatment more
            affordable. Explore your options below.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/dental-finance" icon="euro">
              Dental finance
            </Button>
            <Button to="/smiles-dental-plan" variant="ghost" icon="heart">
              Smiles Dental Plan
            </Button>
          </div>
        </Card>
      </Section>

      <CtaBand />
    </>
  );
}
