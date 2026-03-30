import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-zinc-200/80 px-5 py-20 sm:px-6 sm:py-24 dark:border-zinc-800/80 ${className}`.trim()}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
