
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="16" cy="16" rx="14" ry="14" fill="#fff"/>
                  <path d="M10 22c2-2 10-2 12 0" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
                  <ellipse cx="16" cy="14" rx="6" ry="7" fill="#0d9488"/>
                  <ellipse cx="16" cy="14" rx="3" ry="4" fill="#fff"/>
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Teeth Care</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-base">
              Top multispeciality dental clinic in Kolkata, providing world-class dental care for over 16+ years with experienced MDS specialists.
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { icon: 'FB', color: 'hover:bg-blue-600', label: 'Facebook' },
                { icon: 'IG', color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-yellow-400', label: 'Instagram' },
                { icon: 'YT', color: 'hover:bg-red-600', label: 'YouTube' },
                { icon: 'LI', color: 'hover:bg-blue-800', label: 'LinkedIn' },
              ].map(social => (
                <a
                  key={social.icon}
                  href="#"
                  className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {['Home', 'About Us', 'Services', 'Our Team', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-teal-400 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {['Dental Implants', 'RCT Treatment', 'Braces', 'Cosmetic Dentistry', 'Teeth Whitening', 'Oral Surgery'].map(service => (
                <li key={service}>
                  <a href="#services" className="hover:text-teal-400 transition-colors font-medium">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3 items-center">
                <span className="text-teal-400 text-lg">📍</span>
                <span>North & South Kolkata Branches</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-teal-400 text-lg">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-teal-400 text-lg">📧</span>
                <span>info@teethcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-base font-medium">
          <p>© {currentYear} Teeth Care Multispeciality Dental Clinic. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
