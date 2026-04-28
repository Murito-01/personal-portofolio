type SectionTitleProps = {
  children: string;
  eyebrow?: string;
};

export default function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-12">
      {eyebrow ? (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" aria-hidden />
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
        {children}
      </h2>
    </div>
  );
}
