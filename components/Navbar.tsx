
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Branches', href: '#branches' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-6'} backdrop-blur-xl`}
      style={{ boxShadow: isScrolled ? '0 4px 24px 0 rgba(16,24,40,0.08)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16" cy="16" rx="14" ry="14" fill="#fff"/>
                <path d="M10 22c2-2 10-2 12 0" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
                <ellipse cx="16" cy="14" rx="6" ry="7" fill="#0d9488"/>
                <ellipse cx="16" cy="14" rx="3" ry="4" fill="#fff"/>
              </svg>
            </div>
            <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-teal-700' : 'text-teal-600'}`}>Teeth Care</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors px-2 py-1 rounded-lg hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-200 ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn shadow-md px-7 py-2 text-base font-semibold ml-2"
              style={{ boxShadow: '0 4px 24px 0 rgba(16,24,40,0.08)' }}
            >
              Book Appointment
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 rounded-b-3xl">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-slate-700 font-semibold hover:text-teal-600 border-b border-slate-50 pb-2 px-2 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn text-center py-4 font-bold shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
