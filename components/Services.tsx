
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'restorative', name: 'Restorative' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'orthodontic', name: 'Orthodontic' },
    { id: 'endodontic', name: 'Endodontic' }
  ];

  const filteredServices = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  return (
    <div className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-xs sm:text-sm font-black text-teal-600 uppercase tracking-[0.3em] mb-4">Specialized Care</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            High-End Dental <br className="hidden md:block" /> Solutions
          </h3>
        </div>
        
        {/* Modern Pills Filter */}
        <div className="flex overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`whitespace-nowrap px-8 py-3.5 rounded-[22px] font-extrabold text-xs uppercase tracking-widest transition-all ${
                filter === cat.id 
                ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20' 
                : 'bg-white border-2 border-slate-100 text-slate-500 hover:border-teal-500 hover:text-teal-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            className="group relative flex flex-col bg-white p-10 lg:p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3"
          >
            <div className="w-20 h-20 bg-teal-50 rounded-[28px] flex items-center justify-center text-4xl mb-10 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              {service.icon}
            </div>
            
            <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6">{service.title}</h4>
            
            <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium">
              {service.description}
            </p>
            
            <div className="space-y-4 mb-12">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 text-[10px]">✓</div>
                  {f}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Treatment Est.</span>
                <p className="text-2xl font-black text-teal-600">{service.startingPrice}</p>
              </div>
              <a 
                href="#contact" 
                className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-teal-600 transition-colors shadow-lg active:scale-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
