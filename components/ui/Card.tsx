import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300/80 hover:shadow-lg hover:shadow-zinc-950/[0.08] dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none dark:hover:border-zinc-700/80 dark:hover:shadow-xl dark:hover:shadow-black/30 ${className}`.trim()}
    >
      {children}
    </article>
  );
}
