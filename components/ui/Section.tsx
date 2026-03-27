import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-24 border-b ${className}`.trim()}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
