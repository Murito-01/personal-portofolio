export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 px-5 py-10 dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Muhammad Risto Abrar</p>
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">Built with Next.js · Tailwind CSS</p>
      </div>
    </footer>
  );
}
