import { Link } from "react-router-dom";
import Icon from "./Icon";
import { clinic } from "../data/site";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur xl:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={clinic.phoneHref}
          className="flex flex-col items-center gap-0.5 rounded-lg py-1.5 text-xs font-semibold text-navy"
          aria-label="Call the clinic"
        >
          <Icon name="phone" className="h-5 w-5 text-brand" />
          Call
        </a>
        <a
          href={clinic.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 rounded-lg py-1.5 text-xs font-semibold text-navy"
          aria-label="Get directions"
        >
          <Icon name="pin" className="h-5 w-5 text-brand" />
          Directions
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center gap-0.5 rounded-lg bg-brand py-1.5 text-xs font-semibold text-white"
          aria-label="Book an appointment"
        >
          <Icon name="calendar" className="h-5 w-5" />
          Book
        </Link>
      </div>
    </div>
  );
}
