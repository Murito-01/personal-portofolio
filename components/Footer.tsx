export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 px-5 py-10 dark:border-zinc-800/80">
      <div className="mx-auto flex justify-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Muhammad Risto Abrar</p>
      </div>
    </footer>
  );
}
