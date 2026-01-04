
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const categories = ['all', 'Clinic Interiors', 'Before & After', 'Team', 'Dental Camps'];

  const filteredItems = activeTab === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.categoryName === activeTab);

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Gallery</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Experience the Transformation</h3>
        
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === cat 
                ? 'bg-teal-600 text-white shadow-md' 
                : 'bg-slate-100 text-slate-500 hover:bg-teal-50 hover:text-teal-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-[40px] aspect-square bg-slate-100">
            {item.type === 'before-after' ? (
              <div className="relative w-full h-full flex flex-col">
                <div className="h-1/2 overflow-hidden border-b-2 border-white">
                  <img src={item.before} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="Before" />
                  <span className="absolute top-4 left-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="h-1/2 overflow-hidden">
                  <img src={item.after} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="After" />
                  <span className="absolute bottom-4 left-4 bg-teal-600/80 text-white text-[10px] px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
            ) : (
              <img 
                src={item.src} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                alt={item.caption} 
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] uppercase tracking-[3px] font-bold mb-2 text-teal-300">{item.categoryName}</span>
              <p className="text-xl font-bold leading-tight">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
