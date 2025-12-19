function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wide mb-2">
              MyCompany
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              We design and build digital products that help businesses grow
              with clarity and purpose.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-400 hover:text-white transition">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@mycompany.com</li>
              <li>+1 234 567 8900</li>
              <li>Business Street, City</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} MyCompany. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built for placement assessment
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
