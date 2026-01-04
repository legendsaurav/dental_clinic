
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Awards from './components/Awards';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Branches from './components/Branches';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="awards" className="bg-white">
          <Awards />
        </section>

        <section id="about" className="bg-slate-50">
          <About />
        </section>

        <section id="services" className="bg-white">
          <Services />
        </section>

        <section id="gallery" className="bg-slate-50">
          <Gallery />
        </section>

        <section id="team" className="bg-white">
          <Team />
        </section>

        <section id="branches" className="bg-slate-50">
          <Branches />
        </section>

        <section id="blog" className="bg-white">
          <Blog />
        </section>

        <section id="testimonials" className="bg-slate-50">
          <Testimonials />
        </section>

        <section id="contact" className="bg-slate-900 text-white">
          <ContactForm />
        </section>
      </main>

      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:+919830110321" 
          className="bg-teal-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-teal-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
