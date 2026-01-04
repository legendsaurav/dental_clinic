
import React from 'react';
import { DOCTORS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Expert Doctors</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Meet the top dentists <br /> working to heal your pain
          </h3>
        </div>
        <p className="text-slate-500 max-w-sm mb-2">
          Our team comprises highly qualified MDS professionals specialized in various dental disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {DOCTORS.map((doctor) => (
          <div key={doctor.id} className="group flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-lg">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white text-sm font-medium tracking-widest uppercase">Expert Consultant</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">{doctor.name}</h4>
              <p className="text-teal-600 font-semibold text-sm mb-2 uppercase tracking-wide">{doctor.specialty}</p>
              <p className="text-slate-500 text-xs italic">{doctor.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
