import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <span aria-hidden="true">🚀</span>
          <span>Company</span>
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#top" className="hover:text-red-600 transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-red-600 transition-colors">
            Features
          </a>
          <a href="#contact" className="hover:text-red-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;