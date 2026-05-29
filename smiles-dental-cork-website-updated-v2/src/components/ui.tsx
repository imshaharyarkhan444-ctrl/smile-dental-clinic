import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { clinic } from "../data/site";

/* ------------------------------ Buttons ------------------------------ */

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "white";
  icon?: string;
  className?: string;
  full?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<string, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25",
  secondary:
    "bg-teal text-white hover:bg-teal/90 shadow-lg shadow-teal/25",
  ghost:
    "bg-white text-navy border border-slate-200 hover:border-brand hover:text-brand",
  white: "bg-white text-brand hover:bg-mist shadow-lg",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  icon,
  className = "",
  full,
  onClick,
  type = "button",
  ariaLabel,
}: BtnProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-offset-2 ${
    variants[variant]
  } ${full ? "w-full" : ""} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

/* ------------------------------ Section ------------------------------ */

export function Section({
  children,
  className = "",
  id,
  muted,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${muted ? "bg-gradient-to-br from-mist via-white to-mist-2" : "bg-gradient-to-b from-white/80 to-mist/30"} py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  const H = as;
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">
          {eyebrow}
        </p>
      )}
      <H className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </H>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

/* ------------------------------ Card ------------------------------ */

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-emerald-100/70 bg-white/95 p-6 shadow-sm shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-mist-2 to-white text-brand shadow-sm shadow-emerald-900/5">
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

/* ------------------------------ Star rating ------------------------------ */

export function StarRating({
  rating = clinic.rating,
  count,
  light,
}: {
  rating?: number;
  count?: number;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon
            key={i}
            name="star"
            className={`h-5 w-5 ${
              i <= Math.round(rating) ? "text-amber-400" : "text-slate-300"
            }`}
            fill={i <= Math.round(rating) ? "currentColor" : "none"}
            stroke="none"
          />
        ))}
      </div>
      <span
        className={`text-sm font-semibold ${light ? "text-white" : "text-navy"}`}
      >
        {rating.toFixed(1)}
        {count != null && (
          <span className={light ? "text-white/80" : "text-slate-500"}>
            {" "}
            ({count} reviews)
          </span>
        )}
      </span>
    </div>
  );
}

/* ------------------------------ Breadcrumbs ------------------------------ */

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-mist/60">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <Icon name="arrow" className="h-3.5 w-3.5 text-slate-300" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------ Accordion ------------------------------ */

export function Accordion({
  items,
}: {
  items: { q: string; a: ReactNode }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-navy">{item.q}</span>
              <Icon
                name="arrow"
                className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            <div className={`acc-content ${isOpen ? "open" : ""}`}>
              <div className="acc-inner">
                <div className="px-5 pb-5 text-slate-600">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------ Feature list ------------------------------ */

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ CTA band ------------------------------ */

export function CtaBand({
  title = "Ready to book your appointment?",
  text = "Our friendly Cork team is here to help. Book online, call us, or get directions today.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-navy to-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-3 text-base text-blue-100">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="white" icon="calendar">
              Book Appointment
            </Button>
            <Button
              href={clinic.phoneHref}
              variant="secondary"
              icon="phone"
              ariaLabel={`Call ${clinic.name}`}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Reveal on scroll ------------------------------ */

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
