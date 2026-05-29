import Seo from "../components/Seo";
import { Button, Section } from "../components/ui";
import { treatmentCategories } from "../data/site";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Smiles Dental Cork"
        description="The page you are looking for could not be found. Explore our treatments or contact Smiles Dental Cork."
        path="/404"
      />
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">
            Error 404
          </p>
          <h1 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Sorry, we couldn't find the page you were looking for. Let's get you
            back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" icon="arrow">
              Back to home
            </Button>
            <Button to="/contact" variant="ghost" icon="calendar">
              Contact us
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {treatmentCategories.map((t) => (
              <Link
                key={t.slug}
                to={`/treatments/${t.slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy hover:border-brand hover:text-brand"
              >
                {t.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
