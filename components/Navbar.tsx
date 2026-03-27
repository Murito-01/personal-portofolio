export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-semibold">
          Risto.dev
        </h1>

        {/* Menu */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-black text-gray-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-black text-gray-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-black text-gray-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-black text-gray-600 transition">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}