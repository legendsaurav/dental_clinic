
import React from 'react';
import { AWARDS } from '../constants';

const Awards: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Recognitions</h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900">Trusted Award Winning Clinic</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {AWARDS.map((award) => (
          <div 
            key={award.id} 
            className="group p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">🏅</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{award.title}</h3>
            <p className="text-teal-600 font-semibold mb-4">{award.subtitle}</p>
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 text-sm text-slate-500 font-medium">
              <span>{award.location}</span>
              <span className="px-3 py-1 bg-slate-200 rounded-full text-slate-700">{award.year}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
        {['National News', 'Healthcare Weekly', 'Medical Times', 'Global Awards'].map(name => (
          <span key={name} className="text-2xl font-bold text-slate-400 select-none cursor-default">{name}</span>
        ))}
      </div>
    </div>
  );
};

export default Awards;
