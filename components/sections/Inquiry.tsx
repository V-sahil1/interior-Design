"use client";

import { useState } from "react";
import Icon from "../Icon";
import { gutters, sectionY } from "../ui";

const typologies = ["Private Residence", "Penthouse / Loft", "Boutique Office", "Retreat / Hospitality"];
const scales = ["< 2,500 sq.ft", "2,500 – 6,000 sq.ft", "6,000+ sq.ft"];
const budgets = ["₹50L – 1Cr", "₹1Cr – 2.5Cr", "₹2.5Cr+"];

const label = "mb-2 block text-label-sm font-semibold tracking-wider text-outline uppercase";
const field =
  "w-full bg-surface-container-low px-4 py-3 text-body-md text-primary outline-none placeholder:text-outline/50 focus:bg-surface-bright focus:ring-1 focus:ring-secondary";

function Chips({
  options,
  value,
  onChange,
  cols,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols: string;
}) {
  return (
    <div className={`grid gap-2 md:gap-3 ${cols}`} role="radiogroup">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          onClick={() => onChange(o)}
          className={`border px-2 py-3 text-center text-label-sm tracking-wider uppercase transition-colors md:px-4 ${
            value === o
              ? "border-primary bg-primary text-on-primary"
              : "border-outline-variant text-on-surface hover:border-primary"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Inquiry() {
  const [typology, setTypology] = useState(typologies[0]);
  const [scale, setScale] = useState(scales[1]);
  const [budget, setBudget] = useState(budgets[1]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <section id="commission-inquiry" className={`w-full scroll-mt-24 bg-primary text-on-primary ${gutters} ${sectionY}`}>
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl md:mb-16 md:text-center">
          <span data-type className="mb-3 block text-label-sm font-semibold tracking-[0.25em] text-secondary-fixed uppercase">
            Private Commission Intake
          </span>
          <h2 data-split className="mb-4 font-serif text-headline-lg-mobile text-surface-bright md:text-headline-lg">
            Let’s Create Your Space.
          </h2>
          <p className="text-body-md leading-relaxed text-surface-container-high">
            Have a private residence, luxury workspace, or boutique hospitality venture in mind? We welcome a limited
            number of select commissions each season.
          </p>
        </div>

        <div data-reveal className="bg-surface-container-lowest p-6 text-on-surface shadow-2xl md:p-8 lg:p-12">
          {status === "sent" ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <Icon name="check_circle" className="text-4xl text-secondary" />
              <h3 className="font-serif text-headline-sm text-primary">Brief received.</h3>
              <p className="max-w-md bg-secondary-fixed p-4 text-label-md tracking-wider text-on-secondary-fixed uppercase">
                Thank you. Your architectural commission brief has been logged. Our studio principal will contact you
                within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 border-b border-secondary pb-1 text-label-lg tracking-wider text-primary uppercase hover:text-secondary"
              >
                Submit another brief
              </button>
            </div>
          ) : (
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sending");
                setTimeout(() => setStatus("sent"), 900);
              }}
            >
              <div>
                <span className={label}>01. Project Typology</span>
                <Chips options={typologies} value={typology} onChange={setTypology} cols="grid-cols-2 md:grid-cols-4" />
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
                <div>
                  <span className={label}>02. Approximate Spatial Scale</span>
                  <Chips options={scales} value={scale} onChange={setScale} cols="grid-cols-3" />
                </div>
                <div>
                  <span className={label}>03. Estimated Budget (INR)</span>
                  <Chips options={budgets} value={budget} onChange={setBudget} cols="grid-cols-3" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="block">
                  <span className={label}>04. Site Location (City, State / Country)</span>
                  <input className={field} type="text" required placeholder="e.g. Ahmedabad, Mumbai, London" />
                </label>
                <label className="block">
                  <span className={label}>05. Target Handover Timeline</span>
                  <select className={field} defaultValue="9-14 Months">
                    <option value="6-9 Months">Within 6–9 Months</option>
                    <option value="9-14 Months">9–14 Months</option>
                    <option value="14+ Months">14+ Months (Comprehensive Estate)</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <label className="block">
                  <span className={label}>Your Full Name</span>
                  <input className={field} type="text" required placeholder="Name" autoComplete="name" />
                </label>
                <label className="block">
                  <span className={label}>Direct Email</span>
                  <input className={field} type="email" required placeholder="email@address.com" autoComplete="email" />
                </label>
                <label className="block">
                  <span className={label}>Phone / WhatsApp</span>
                  <input className={field} type="tel" required placeholder="+91 98..." autoComplete="tel" />
                </label>
              </div>
              <label className="block">
                <span className={label}>Brief Overview of Your Vision or Property</span>
                <textarea
                  className={field}
                  rows={3}
                  placeholder="Tell us about the property, your architectural aspirations, or special material interests..."
                />
              </label>
              <div className="flex flex-col items-center justify-between gap-6 pt-4 md:flex-row">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-3 bg-primary px-10 py-4 text-label-lg tracking-widest text-on-primary uppercase transition-colors hover:bg-secondary disabled:opacity-70 md:w-auto"
                >
                  <span>{status === "sending" ? "Transmitting Brief..." : "Submit Architectural Commission Brief"}</span>
                  <Icon name="arrow_forward" className="text-sm" />
                </button>
                <div className="text-center md:text-right">
                  <span className="block text-label-sm tracking-wider text-outline uppercase">Direct Studio Concierge</span>
                  <a href="tel:+917948920100" className="text-body-sm font-medium text-primary transition-colors hover:text-secondary">
                    +91 (079) 4892 0100
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://wa.me/917948920100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-label-md tracking-wider text-secondary-fixed uppercase transition-colors hover:text-surface-bright"
          >
            <Icon name="chat" className="text-[18px]" />
            <span>Chat directly with Studio Principal on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
