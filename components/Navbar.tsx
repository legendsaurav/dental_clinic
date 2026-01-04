
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
    { name: 'Location', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center p-1.5 shadow-lg shadow-teal-600/10 border border-slate-100 group-hover:scale-110 transition-transform overflow-hidden">
              <img 
                src="logo.png" 
                alt="32 Dental Care Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo w-full h-full bg-teal-600 rounded-full flex items-center justify-center text-white text-lg font-black';
                    fallback.innerText = '32';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`text-lg sm:text-xl font-extrabold tracking-tight text-slate-900`}>
                32 Dental Care
              </span>
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest opacity-80">Madhyamgram</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-1 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-teal-600 rounded-xl hover:bg-teal-50/50 transition-all"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-teal-600 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-xl shadow-slate-900/10"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-3 text-slate-800 focus:outline-none rounded-2xl bg-white/50 border border-slate-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer UI */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[110] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm border border-slate-100 overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="32 Dental Care Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-slate-900">32 Dental Care</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-900 rounded-xl bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-2xl text-slate-900 font-extrabold hover:text-teal-600 transition-colors py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-12 left-8 right-8">
            <a 
              href="#contact" 
              className="block w-full bg-teal-600 text-white text-center py-5 rounded-3xl text-lg font-black shadow-2xl shadow-teal-600/30 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
