
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const categories = ['all', 'Clinic Interiors', 'Before & After', 'Team', 'Dental Camps'];

  const filteredItems = activeTab === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.categoryName === activeTab);

  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-widest mb-3 lg:mb-4">Gallery</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Experience the Transformation</h3>
        
        <div className="flex overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center gap-2 mt-6 sm:mt-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all ${
                activeTab === cat 
                ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20' 
                : 'bg-slate-100 text-slate-500 hover:bg-teal-50 hover:text-teal-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-[30px] lg:rounded-[40px] aspect-square bg-slate-100 shadow-sm">
            {item.type === 'before-after' ? (
              <div className="relative w-full h-full flex flex-col">
                <div className="h-1/2 overflow-hidden border-b-2 border-white">
                  <img src={item.before} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="Before" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[8px] sm:text-[9px] px-2 py-1 rounded-lg font-bold">BEFORE</span>
                </div>
                <div className="h-1/2 overflow-hidden">
                  <img src={item.after} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="After" loading="lazy" />
                  <span className="absolute bottom-3 left-3 bg-teal-600/90 backdrop-blur-sm text-white text-[8px] sm:text-[9px] px-2 py-1 rounded-lg font-bold">AFTER</span>
                </div>
              </div>
            ) : (
              <img 
                src={item.src} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                alt={item.caption} 
                loading="lazy"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[2px] sm:tracking-[3px] font-black mb-1 sm:mb-2 text-teal-300">{item.categoryName}</span>
              <p className="text-base sm:text-xl font-bold leading-tight">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
