import type { NavLink } from "@/types";

export type NavbarProps = {
  brand?: string;
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  brand = "Your Name",
  links = defaultLinks,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur dark:bg-black/60 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-50"
        >
          {brand}
        </a>

        <nav className="flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

