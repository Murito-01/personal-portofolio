import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] border-b border-zinc-200/80 px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 dark:border-zinc-800/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(8,145,178,0.14),transparent)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            Portfolio
          </p>
          <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">Hi, I&apos;m</p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">{profile.role}</p>
          <p className="mb-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.intro}
          </p>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="#projects">View projects</Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 text-left shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none dark:hover:border-zinc-700 sm:p-8">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            Focus
          </p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{profile.focusArea}</p>
        </div>
      </div>
    </section>
  );
}
