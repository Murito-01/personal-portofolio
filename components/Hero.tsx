export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 mb-3">Hi, I'm</p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Muhammad Risto Abrar
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          Web Developer
        </h2>

        <p className="text-gray-500 mb-8 max-w-xl">
          I build scalable and user-focused web applications with modern
          technologies.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
