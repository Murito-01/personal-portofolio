import type { ProjectGradient } from "@/data/projects";

/**
 * Fallback preview when a project has no `gallery` images: gradient + initials.
 * Projects with screenshots use `ProjectGallery` instead (see Projects section).
 */

const gradientClasses: Record<ProjectGradient, string> = {
  chain:
    "from-cyan-600/35 via-teal-600/25 to-zinc-900/10 dark:from-cyan-500/30 dark:via-teal-500/20 dark:to-zinc-950/40",
  mesh:
    "from-indigo-600/30 via-cyan-500/20 to-zinc-900/10 dark:from-indigo-500/25 dark:via-cyan-500/15 dark:to-zinc-950/40",
  slate:
    "from-zinc-600/35 via-zinc-500/20 to-zinc-900/10 dark:from-zinc-500/25 dark:via-zinc-600/15 dark:to-zinc-950/50",
};

type ProjectPreviewProps = {
  title: string;
  gradient?: ProjectGradient;
};

/**
 * Placeholder preview when no screenshot is available: gradient + initials + subtle grid.
 */
export default function ProjectPreview({ title, gradient = "chain" }: ProjectPreviewProps) {
  const initials = title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-gradient-to-br ${gradientClasses[gradient]} shadow-inner shadow-zinc-950/10 dark:border-zinc-700/80 dark:shadow-none`}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.07)_1px,transparent_1px)] bg-[length:24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white/90 drop-shadow-sm dark:text-white/80 md:text-4xl">
          {initials}
        </span>
      </div>
    </div>
  );
}
