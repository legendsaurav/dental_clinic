
import React from 'react';
import { AWARDS } from '../constants';

const Awards: React.FC = () => {
  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-widest mb-3 lg:mb-4">Recognitions</h2>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">Trusted Award Winning Clinic</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {AWARDS.map((award) => (
          <div 
            key={award.id} 
            className="group p-8 bg-slate-50 rounded-[30px] lg:rounded-[32px] border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <div className="text-3xl sm:text-4xl mb-5 sm:mb-6 grayscale group-hover:grayscale-0 transition-all flex items-center justify-center sm:justify-start">🏅</div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight text-center sm:text-left">{award.title}</h3>
            <p className="text-teal-600 font-bold text-xs sm:text-sm mb-4 text-center sm:text-left">{award.subtitle}</p>
            <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-slate-200 text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
              <span>{award.location}</span>
              <span className="px-3 py-1 bg-slate-200 rounded-full text-slate-700">{award.year}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 lg:mt-20 flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
        {['News Channel', 'Healthcare', 'Medical Times', 'Global Awards'].map(name => (
          <span key={name} className="text-lg sm:text-xl lg:text-2xl font-black text-slate-400 select-none cursor-default whitespace-nowrap">{name}</span>
        ))}
      </div>
    </div>
  );
};

export default Awards;
