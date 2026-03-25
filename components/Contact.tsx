import type { NavLink } from "@/types";

export type ContactProps = {
  email?: string;
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Contact({
  email = "you@example.com",
  links = defaultLinks,
}: ContactProps) {
  return (
    <section id="contact" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              Contact
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Tinggalkan email atau terhubung lewat sosial media. Saya akan
              balas secepatnya.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-[240px]">
            <a
              href={`mailto:${email}`}
              className="flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Email Me
            </a>
            <div className="flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

