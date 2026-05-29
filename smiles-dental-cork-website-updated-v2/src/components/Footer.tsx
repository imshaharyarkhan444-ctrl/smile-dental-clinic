import { Link } from "react-router-dom";
import Icon from "./Icon";
import {
  clinic,
  openingHours,
  treatmentCategories,
} from "../data/site";

const quickLinks = [
  { to: "/cork", label: "Cork Clinic" },
  { to: "/treatments", label: "Treatments" },
  { to: "/meet-the-team", label: "Meet the Team" },
  { to: "/ways-to-pay", label: "Ways to Pay" },
  { to: "/price-list", label: "Price List" },
  { to: "/contact", label: "Contact" },
];

const careLinks = [
  { to: "/smiles-dental-plan", label: "Smiles Dental Plan" },
  { to: "/dental-finance", label: "Dental Finance" },
  { to: "/dental-benefits", label: "Dental Benefits" },
  { to: "/community", label: "Community" },
  { to: "/for-dentists/join-our-team", label: "Careers" },
  { to: "/for-dentists/referrals", label: "Refer a Patient" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-teal text-white">
                <Icon name="tooth" className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold text-white">Smiles Dental</span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-teal-light">
                  Cork
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200">
              State-of-the-art dental clinic in Cork city centre offering general,
              emergency, cosmetic, orthodontic and implant dentistry with extended
              and Saturday opening hours.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <span>{clinic.address.full}</span>
              </li>
              <li>
                <a href={clinic.phoneHref} className="flex items-center gap-2.5 hover:text-white">
                  <Icon name="phone" className="h-4 w-4 text-teal-light" /> {clinic.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="flex items-center gap-2.5 hover:text-white">
                  <Icon name="mail" className="h-4 w-4 text-teal-light" /> {clinic.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blue-100 transition hover:border-teal-light hover:bg-white/10 hover:text-white">Facebook</a>
              <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blue-100 transition hover:border-teal-light hover:bg-white/10 hover:text-white">Instagram</a>
              <a href={clinic.social.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blue-100 transition hover:border-teal-light hover:bg-white/10 hover:text-white">LinkedIn</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Treatments
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {treatmentCategories.slice(0, 7).map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`} className="hover:text-white">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Patient Care
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {careLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              {openingHours.map((o) => (
                <li
                  key={o.day}
                  className="flex justify-between border-b border-white/10 py-1.5"
                >
                  <span>{o.day}</span>
                  <span
                    className={
                      o.hours === "Closed" ? "text-blue-300" : "font-medium text-white"
                    }
                  >
                    {o.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>
            Registered with the Irish Dental Council · {clinic.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
