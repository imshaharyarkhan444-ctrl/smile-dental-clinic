import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { Button } from "./ui";
import { clinic, treatmentCategories } from "../data/site";

const treatmentLinks = treatmentCategories.map((t) => ({
  to: `/treatments/${t.slug}`,
  label: t.title,
}));

const payLinks = [
  { to: "/ways-to-pay", label: "Ways to Pay" },
  { to: "/price-list", label: "Price List" },
  { to: "/smiles-dental-plan", label: "Smiles Dental Plan" },
  { to: "/dental-finance", label: "Dental Finance" },
  { to: "/dental-benefits", label: "Dental Benefits" },
  { to: "/community", label: "Community" },
];

const dentistLinks = [
  { to: "/for-dentists/join-our-team", label: "Join Our Team" },
  { to: "/for-dentists/referrals", label: "Referrals" },
];

function Dropdown({
  label,
  links,
  base,
}: {
  label: string;
  links: { to: string; label: string }[];
  base?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-brand"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <Icon name="arrow" className="h-3.5 w-3.5 rotate-90 text-slate-400" />
      </button>
      <div
        className={`absolute left-0 top-full z-50 w-64 pt-2 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="overflow-hidden rounded-2xl border border-slate-100 bg-white py-2 shadow-xl">
          {base && (
            <li>
              <Link
                to={base}
                className="block px-4 py-2 text-sm font-semibold text-brand hover:bg-mist"
              >
                Overview
              </Link>
            </li>
          )}
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-mist hover:text-brand"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium ${
      isActive ? "text-brand" : "text-navy hover:text-brand"
    }`;

  const mobileGroups = [
    { key: "treatments", label: "Treatments", base: "/treatments", links: treatmentLinks },
    { key: "dentists", label: "For Dentists", base: "/for-dentists", links: dentistLinks },
    { key: "pay", label: "Payments", links: payLinks },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Top bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a href={clinic.phoneHref} className="flex items-center gap-1.5 hover:text-blue-200">
              <Icon name="phone" className="h-3.5 w-3.5" /> {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className="flex items-center gap-1.5 hover:text-blue-200">
              <Icon name="mail" className="h-3.5 w-3.5" /> {clinic.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Facebook</a>
            <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Instagram</a>
            <a href={clinic.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">LinkedIn</a>
            <span className="flex items-center gap-1.5">
              <Icon name="pin" className="h-3.5 w-3.5" /> {clinic.address.line1}, Cork
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="border-b border-emerald-100/70 bg-white/95 backdrop-blur" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Smiles Dental Cork home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-teal text-white">
              <Icon name="tooth" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-navy">
                Smiles Dental
              </span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-teal">
                Cork
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            <li>
              <NavLink to="/" end className={linkCls}>
                Home
              </NavLink>
            </li>
            <Dropdown label="Treatments" links={treatmentLinks} base="/treatments" />
            <li>
              <NavLink to="/cork" className={linkCls}>
                Cork Clinic
              </NavLink>
            </li>
            <li>
              <NavLink to="/meet-the-team" className={linkCls}>
                Meet the Team
              </NavLink>
            </li>
            <Dropdown label="Payments" links={payLinks} />
            <Dropdown label="For Dentists" links={dentistLinks} base="/for-dentists" />
            <li>
              <NavLink to="/contact" className={linkCls}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="hidden items-center gap-2 xl:flex">
            <Button href={clinic.phoneHref} variant="ghost" icon="phone" className="!py-2.5">
              Call
            </Button>
            <Button to="/contact" icon="calendar" className="!py-2.5">
              Book Now
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-navy xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-emerald-100 bg-white/95 xl:hidden">
            <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
              <li>
                <Link to="/" className="block rounded-lg px-3 py-2.5 font-medium text-navy hover:bg-mist">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cork" className="block rounded-lg px-3 py-2.5 font-medium text-navy hover:bg-mist">
                  Cork Clinic
                </Link>
              </li>
              {mobileGroups.map((g) => (
                <li key={g.key}>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-medium text-navy hover:bg-mist"
                    onClick={() => setOpenGroup(openGroup === g.key ? null : g.key)}
                    aria-expanded={openGroup === g.key}
                  >
                    {g.label}
                    <Icon
                      name="arrow"
                      className={`h-4 w-4 text-slate-400 transition-transform ${
                        openGroup === g.key ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openGroup === g.key && (
                    <ul className="ml-3 border-l border-slate-200 pl-3">
                      {g.base && (
                        <li>
                          <Link to={g.base} className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand hover:bg-mist">
                            Overview
                          </Link>
                        </li>
                      )}
                      {g.links.map((l) => (
                        <li key={l.to}>
                          <Link to={l.to} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-mist">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link to="/meet-the-team" className="block rounded-lg px-3 py-2.5 font-medium text-navy hover:bg-mist">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block rounded-lg px-3 py-2.5 font-medium text-navy hover:bg-mist">
                  Contact
                </Link>
              </li>
              <li className="grid grid-cols-2 gap-2 pt-2">
                <Button href={clinic.phoneHref} variant="ghost" icon="phone" full>
                  Call
                </Button>
                <Button to="/contact" icon="calendar" full>
                  Book
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
