import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "./ui";
import Icon from "./Icon";

type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "file";

export type FieldDef = {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  options?: string[];
  full?: boolean;
  placeholder?: string;
  accept?: string;
};

const baseInput =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy placeholder-slate-400 transition focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none";

export function FormField({
  field,
  value,
  error,
  onChange,
}: {
  field: FieldDef;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}) {
  const id = `field-${field.name}`;
  const required = field.required;
  return (
    <div className={field.full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {field.label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          rows={4}
          required={required}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={baseInput}
          aria-invalid={!!error}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          required={required}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={baseInput}
          aria-invalid={!!error}
        >
          <option value="">Please select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : field.type === "file" ? (
        <input
          id={id}
          name={field.name}
          type="file"
          accept={field.accept}
          required={required}
          onChange={(e) => onChange(field.name, e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-mist-2 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand hover:file:bg-brand/10"
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type || "text"}
          required={required}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={baseInput}
          aria-invalid={!!error}
        />
      )}
      {error && <p className="mt-1 text-sm text-rose-600">{error}</p>}
    </div>
  );
}

export function SmartForm({
  fields,
  submitLabel = "Submit",
  intro,
  successMessage = "Thank you. Your enquiry has been received — our team will be in touch shortly.",
}: {
  fields: FieldDef[];
  submitLabel?: string;
  intro?: ReactNode;
  successMessage?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    fields.forEach((f) => {
      const val = (values[f.name] || "").trim();
      if (f.required && !val) next[f.name] = `${f.label} is required.`;
      else if (f.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
        next[f.name] = "Please enter a valid email address.";
      else if (f.type === "tel" && val && !/^[+\d][\d\s()-]{6,}$/.test(val))
        next[f.name] = "Please enter a valid phone number.";
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
        <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="text-xl font-bold text-navy">Enquiry sent</h3>
        <p className="mt-2 text-slate-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {intro}
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <FormField
            key={f.name}
            field={f}
            value={values[f.name] || ""}
            error={errors[f.name]}
            onChange={handleChange}
          />
        ))}
      </div>
      <Button type="submit" icon="arrow">
        {submitLabel}
      </Button>
      <p className="text-xs text-slate-500">
        By submitting this form you agree to our privacy policy. We use your
        details only to respond to your enquiry.
      </p>
    </form>
  );
}
