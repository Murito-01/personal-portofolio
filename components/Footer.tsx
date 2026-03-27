export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Muhammad Risto Abrar</p>
      </div>
    </footer>
  );
}