import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-gray-200 whitespace-nowrap">
      {children}
    </span>
  );
}
