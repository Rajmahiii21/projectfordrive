import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Left: Brand + tagline */}
          <div className="flex flex-col leading-tight">
            <Link
              to="/"
              className="text-xl font-bold tracking-wide text-black"
            >
              MyCompany
            </Link>
            <span className="text-xs text-gray-500">
              Digital Solutions
            </span>
          </div>

          {/* Center: Navigation (text-only, minimal) */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-black transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-black transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-gray-700 hover:text-black transition"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-black transition"
            >
              Contact
            </button>
          </div>

          {/* Right: Admin CTA */}
          <div>
            <Link
              to="/admin"
              className="border border-black px-4 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Admin Panel
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
