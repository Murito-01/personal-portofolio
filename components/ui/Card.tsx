import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-md hover:shadow-zinc-950/[0.06] dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none dark:hover:border-zinc-700 dark:hover:shadow-lg dark:hover:shadow-black/25 ${className}`.trim()}
    >
      {children}
    </article>
  );
}
