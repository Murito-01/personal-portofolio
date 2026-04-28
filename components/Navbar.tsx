"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { navLinks } from "@/data/navigation";

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle"), {
  ssr: false,
  loading: () => (
    <div
      className="h-9 w-9 shrink-0 rounded-lg border border-zinc-200/90 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/80"
      aria-hidden
    />
  ),
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/75 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors duration-200 hover:text-cyan-600 dark:text-zinc-50 dark:hover:text-cyan-400"
        >
          MUHAMMAD RISTO ABRAR
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-cyan-500 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200/90 bg-white/80 text-zinc-800 shadow-sm transition-colors duration-200 hover:bg-zinc-50 md:hidden dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-zinc-200/80 bg-white/95 px-5 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden transition-all duration-200 ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 text-sm" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-zinc-700 transition-colors duration-150 hover:bg-cyan-50 hover:text-cyan-700 dark:text-zinc-300 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
