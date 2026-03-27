import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition duration-300 ${className}`.trim()}
    >
      {children}
    </article>
  );
}
