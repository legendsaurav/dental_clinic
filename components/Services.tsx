
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'restorative', name: 'Restorative' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'orthodontic', name: 'Orthodontic' },
    { id: 'endodontic', name: 'Endodontic' },
    { id: 'surgical', name: 'Surgical' }
  ];

  const filteredServices = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="text-xs md:text-sm font-bold text-teal-600 uppercase tracking-widest mb-2 md:mb-4">Our Services</h2>
        <h3 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Comprehensive Dental Care</h3>
        <p className="text-base md:text-lg text-slate-600">Equipped with Intra Oral Scanners, smile design software, and the latest dental tech to heal your pain.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all border-2 ${
              filter === cat.id
              ? 'bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-200'
              : 'bg-white border-slate-200 text-slate-600 hover:border-teal-600 hover:text-teal-600'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            className="group flex flex-col bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((f, i) => (
                <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                  <span className="text-teal-500 font-bold">✓</span> {f}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Starts From</p>
                <p className="text-xl font-black text-teal-600">{service.startingPrice}</p>
              </div>
              <a 
                href="#contact" 
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-teal-600 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
