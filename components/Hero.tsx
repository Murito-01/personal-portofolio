export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl">
        <p className="text-gray-500 mb-2">Hi, I'm</p>

        <h1 className="text-5xl font-bold mb-4">
          Muhammad Risto Abrar
        </h1>

        <h2 className="text-2xl text-gray-600 mb-6">
          Web Developer
        </h2>

        <p className="text-gray-500 mb-6">
          Building scalable and user-focused web applications.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}