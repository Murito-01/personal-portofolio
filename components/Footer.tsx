export default function Footer() {
    return (
      <footer className="py-6 px-6 border-t mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          
          <p>© {new Date().getFullYear()} Muhammad Risto Abrar</p>
  
          <p className="mt-2 md:mt-0">
            Built with Next.js & Tailwind CSS
          </p>
  
        </div>
      </footer>
    );
  }