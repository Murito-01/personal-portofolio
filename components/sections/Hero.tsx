import Image from "next/image";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const PROFILE_PHOTO = "/Foto1.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] border-b border-zinc-200/80 px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 dark:border-zinc-800/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(8,145,178,0.14),transparent)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          {/* Profile photo — scales in */}
          <div className="mb-6 flex justify-center animate-scale-in">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-zinc-950/15 ring-2 ring-cyan-500/40 ring-offset-2 ring-offset-zinc-50 dark:border-zinc-800 dark:shadow-black/40 dark:ring-cyan-400/35 dark:ring-offset-zinc-950 sm:h-32 sm:w-32 md:h-36 md:w-36">
              <Image
                src={PROFILE_PHOTO}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 112px, 144px"
                priority
              />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-cyan-700 dark:text-cyan-400 animate-fade-in-up animation-delay-100">
            Portfolio
          </p>

          {/* Hi greeting */}
          <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400 animate-fade-in-up animation-delay-200">
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50 animate-fade-in-up animation-delay-200">
            {profile.name}
          </h1>

          {/* Role + tagline */}
          <div className="mb-6 animate-fade-in-up animation-delay-300">
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              {profile.role}
            </p>
            <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              {profile.tagline}
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 animate-fade-in-up animation-delay-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900/80 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              {profile.availability}
            </span>
            <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
              {profile.location}
            </span>
          </div>

          {/* Bio */}
          <p className="mb-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 animate-fade-in-up animation-delay-500">
            {profile.intro}
          </p>

          {/* CTA Buttons */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-600">
            <Button href="#projects">View projects</Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        {/* Focus card */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 text-left shadow-sm shadow-zinc-950/[0.04] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200/60 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none dark:hover:border-cyan-800/40 dark:hover:shadow-cyan-500/5 sm:p-8 animate-fade-in-up animation-delay-700">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            Focus
          </p>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            {profile.focusArea}
          </p>
        </div>
      </div>
    </section>
  );
}
