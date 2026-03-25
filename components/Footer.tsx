import type { NavLink } from "@/types";

export type FooterProps = {
  brand?: string;
  year?: string;
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export default function Footer({
  brand = "Your Name",
  year = new Date().getFullYear().toString(),
  links = defaultLinks,
}: FooterProps) {
  return (
    <footer className="w-full border-t border-black/5 bg-white py-10 dark:bg-black dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
          © {year} {brand}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

