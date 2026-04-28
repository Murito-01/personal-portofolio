"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";

const INITIAL_COUNT = 4;

export default function Certificates() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? certificates : certificates.slice(0, INITIAL_COUNT);
  const hiddenCount = certificates.length - INITIAL_COUNT;

  return (
    <Section id="certificates">
      <SectionTitle eyebrow="Credentials">Certificates</SectionTitle>

      <div id="certificates-list" className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {visible.map((cert, i) => {
          const external = cert.link.startsWith("http");
          // New cards (index >= INITIAL_COUNT) get a fade-in animation
          const isNew = i >= INITIAL_COUNT;
          return (
            <article
              key={`${cert.title}-${cert.year}`}
              className={`group relative rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300/80 hover:shadow-lg hover:shadow-zinc-950/[0.08] dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none dark:hover:border-zinc-700/80 dark:hover:shadow-xl dark:hover:shadow-black/30 ${isNew ? "animate-fade-in-up" : ""}`}
            >
              {/* Left border accent */}
              <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full bg-gradient-to-b from-cyan-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="mb-2 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
              <p className="mb-5 mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                {cert.year}
              </p>
              <Button
                href={cert.link}
                variant="ghost"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="gap-1.5"
              >
                View certificate
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </article>
          );
        })}
      </div>

      {/* Expand / collapse toggle */}
      {certificates.length > INITIAL_COUNT && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {expanded ? (
              <>
                <ChevronUpIcon className="h-4 w-4 transition-transform duration-200" />
                Show less
              </>
            ) : (
              <>
                <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                Show {hiddenCount} more certificates
              </>
            )}
          </button>
          {!expanded && (
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {certificates.length} certificates total
            </p>
          )}
        </div>
      )}
    </Section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
    </svg>
  );
}
