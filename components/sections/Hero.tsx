import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen border-b px-6 pt-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 mb-3">Hi, I&apos;m</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
            {profile.name}
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">{profile.role}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{profile.intro}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
          <div className="rounded-2xl border bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition duration-300 text-left">
            <p className="text-sm text-gray-500 mb-3">Focus Area</p>
            <p className="text-gray-700 leading-relaxed">
              Building secure, scalable, and user-centric web products with modern
              frontend and blockchain-enabled architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
