export type AboutProps = {
  heading?: string;
  paragraphs?: string[];
  highlights?: string[];
};

export default function About({
  heading = "About Me",
  paragraphs = [
    "Saya suka membangun antarmuka yang rapi dan mudah digunakan.",
    "Saya juga memperhatikan performa dan struktur kode yang maintainable.",
  ],
  highlights = ["Clean UI", "TypeScript", "REST API", "Quick Iteration"],
}: AboutProps) {
  return (
    <section id="about" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              {heading}
            </h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 dark:bg-black dark:border-white/10">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Highlights
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-white/15 dark:bg-white/5 dark:text-zinc-200"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

