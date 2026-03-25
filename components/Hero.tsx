import type { NavLink } from "@/types";

export type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: NavLink;
  secondaryCta?: NavLink;
};

export default function Hero({
  title = "Hello, I'm Your Name.",
  subtitle = "Frontend & Full-Stack developer. I build clean UI and reliable APIs.",
  primaryCta = { label: "View Projects", href: "#projects" },
  secondaryCta = { label: "Contact Me", href: "#contact" },
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative w-full border-b border-black/5 bg-white py-14 dark:bg-black"
    >
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
              PORTFOLIO
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-[240px]">
            <a
              href={primaryCta.href}
              className="flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="flex h-11 items-center justify-center rounded-full border border-black/10 bg-transparent px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/5"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-white p-4 dark:bg-black dark:border-white/10">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Fokus
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              UI yang responsif dan performa yang stabil.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-4 dark:bg-black dark:border-white/10">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Stack
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              TypeScript, React, Next.js, dan REST API.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-4 dark:bg-black dark:border-white/10">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Kolaborasi
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Siap ikut project dari ide sampai rilis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

