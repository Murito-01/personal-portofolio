import type { Skill } from "@/types";
import { skills as defaultSkills } from "@/data/skills";

export type SkillsProps = {
  skills?: Skill[];
};

export default function Skills({ skills = defaultSkills }: SkillsProps) {
  const grouped = new Map<string, Skill[]>();

  for (const s of skills) {
    const list = grouped.get(s.category) ?? [];
    list.push(s);
    grouped.set(s.category, list);
  }

  return (
    <section id="skills" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          Skills
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {Array.from(grouped.entries()).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-black/5 bg-white p-6 dark:bg-black dark:border-white/10"
            >
              <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                {category}
              </p>
              <ul className="mt-3 space-y-3">
                {items.map((s) => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                      {s.name}
                    </span>
                    {s.level ? (
                      <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        {s.level}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

