import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 transition-all duration-200 hover:bg-cyan-50 hover:text-cyan-700 hover:ring-1 hover:ring-cyan-300/60 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-cyan-950/60 dark:hover:text-cyan-300 dark:hover:ring-1 dark:hover:ring-cyan-700/50">
      {children}
    </span>
  );
}
