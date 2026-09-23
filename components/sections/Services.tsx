"use client";

import { useState } from "react";
import Icon from "../Icon";
import { Kicker, SectionTitle, gutters, sectionY } from "../ui";
import { services } from "@/lib/data";

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* Mobile: dark accordion (from the mobile design) */}
      <section className="bg-primary px-5 py-12 text-surface-bright md:hidden">
        <div className="mb-8">
          <span className="text-label-sm tracking-[0.2em] text-secondary-fixed uppercase">Discipline &amp; Practice</span>
          <h2 data-split className="mt-1 font-serif text-headline-lg-mobile text-surface-bright">What We Do</h2>
          <p className="mt-1 text-body-md text-surface-container-high">
            Holistic spatial services calibrated for uncompromising residential and atelier projects.
          </p>
        </div>
        <div data-reveal-stagger className="flex flex-col divide-y divide-surface-container-highest/20">
          {services.map((s, i) => {
            const open = openIdx === i;
            return (
              <div key={s.title} className="py-5">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-label-sm font-bold text-secondary-fixed">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-headline-sm text-surface-bright">{s.title}</span>
                  </span>
                  <Icon
                    name="expand_more"
                    className={`text-[20px] text-secondary-fixed transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="min-h-0 overflow-hidden pl-8 text-body-sm text-surface-container-high">
                    <span className="block pt-3">{s.body}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tablet & desktop: practice matrix */}
      <section className={`hidden w-full bg-surface-container-low md:block ${gutters} ${sectionY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-row items-end justify-between gap-8 border-b border-outline-variant/40 pb-6">
            <div>
              <Kicker>Disciplines &amp; Scope</Kicker>
              <SectionTitle>What We Do</SectionTitle>
            </div>
            <p data-lines className="max-w-md text-body-md text-on-surface-variant">
              An integrated spatial practice navigating from foundational structural interventions down to the final
              artisanal ceramic vessel.
            </p>
          </div>
          <div data-reveal-stagger className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {services.map((s, i) => {
              const dark = i === services.length - 1;
              return (
                <div
                  key={s.title}
                  className={`flex flex-col justify-between p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${
                    dark ? "bg-primary text-on-primary" : "bg-surface-bright"
                  }`}
                >
                  <div>
                    <div className="mb-6 flex items-baseline justify-between">
                      <span className={`font-serif text-headline-md ${dark ? "text-secondary-fixed" : "text-secondary/40"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-label-sm tracking-widest uppercase ${dark ? "text-surface-container-high/60" : "text-outline"}`}
                      >
                        Discipline
                      </span>
                    </div>
                    <h3 className={`mb-3 font-serif text-headline-sm ${dark ? "text-surface-bright" : "text-primary"}`}>
                      {s.title}
                    </h3>
                    <p className={`text-body-sm leading-relaxed ${dark ? "text-surface-variant" : "text-on-surface-variant"}`}>
                      {s.body}
                    </p>
                  </div>
                  <div
                    className={`mt-8 flex items-center justify-between border-t pt-6 text-label-sm tracking-wider uppercase ${
                      dark ? "border-outline-variant/20 text-secondary-fixed" : "border-outline-variant/30 text-outline"
                    }`}
                  >
                    <span>{s.meta}</span>
                    <Icon name={s.icon} className="text-sm" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
