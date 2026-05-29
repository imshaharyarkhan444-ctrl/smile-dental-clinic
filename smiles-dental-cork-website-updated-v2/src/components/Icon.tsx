import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const paths: Record<string, ReactElement> = {
  tooth: (
    <path d="M12 5.5c-1.5-1.3-3.2-2-5-2C4.5 3.5 3 5.4 3 8c0 1.6.4 2.8.8 4.4.3 1.2.5 2.5.7 3.8.3 1.8.5 3.8 1.6 4.6.9.7 1.7-.2 2-1.4.3-1.2.5-2.6.9-3.6.2-.6.6-1 1-1s.8.4 1 1c.4 1 .6 2.4.9 3.6.3 1.2 1.1 2.1 2 1.4 1.1-.8 1.3-2.8 1.6-4.6.2-1.3.4-2.6.7-3.8C20.6 10.8 21 9.6 21 8c0-2.6-1.5-4.5-4-4.5-1.8 0-3.5.7-5 2z" />
  ),
  braces: (
    <>
      <rect x="3" y="9" width="18" height="6" rx="2" />
      <path d="M7 9v6M12 9v6M17 9v6M3 12h18" />
    </>
  ),
  implant: (
    <>
      <path d="M12 2c-2 0-3.5 1.4-3.5 3.2 0 1 .4 1.8.9 2.8H14.6c.5-1 .9-1.8.9-2.8C15.5 3.4 14 2 12 2z" />
      <path d="M9 9h6M9.5 13h5M10 17h4M11 21h2" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
  ),
  child: (
    <>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.5 21c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 2.5 20.5h19L12 3.5z" />
      <path d="M12 10v4M12 17.2v.1" />
    </>
  ),
  specialist: (
    <>
      <path d="M9 3v2.5a3.5 3.5 0 1 0 6 0V3" />
      <path d="M7 5.5C5 6 4 8 4 10c0 3 2 5 5 5.5" />
      <path d="M17 5.5c2 .5 3 2.5 3 4.5 0 3-2 5-5 5.5" />
      <path d="M9 15.5V18a3 3 0 1 0 6 0v-2.5" />
      <circle cx="12" cy="20.5" r="1" />
    </>
  ),
  cosmetic: (
    <>
      <path d="M4 9c2.5-2 5.2-3 8-3s5.5 1 8 3c-1 4.5-4.2 9-8 9S5 13.5 4 9z" />
      <path d="M4 9c2.7 1.5 5.3 2.2 8 2.2S17.3 10.5 20 9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  star: <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />,
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 5 8-5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  wheelchair: (
    <>
      <circle cx="9.5" cy="4" r="1.8" />
      <path d="M9.5 6v6h5l3 5" />
      <path d="M14 16.5a5 5 0 1 1-4.8-6.5" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  euro: (
    <>
      <path d="M16 6.5A6 6 0 0 0 7 12a6 6 0 0 0 9 5.5" />
      <path d="M5 10.5h7M5 13.5h6" />
    </>
  ),
  heart: (
    <path d="M12 20S4 14.5 4 8.8A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 8 2.8C20 14.5 12 20 12 20z" />
  ),
  users: (
    <>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M3 20c0-3 2.5-5.5 5.5-5.5S14 17 14 20" />
      <path d="M16 5.5a3 3 0 0 1 0 6M21 20c0-2.5-1.5-4.7-3.8-5.4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12h18" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h7l5 5v13a0 0 0 0 1 0 0H6a0 0 0 0 1 0 0V3z" />
      <path d="M13 3v5h5M9 13h6M9 16.5h6" />
    </>
  ),
};

export default function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.tooth}
    </svg>
  );
}
