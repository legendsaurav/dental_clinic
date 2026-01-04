
import React from 'react';
import { BRANCHES } from '../constants';

const Branches: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Visit Us</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">5 Locations Across Kolkata</h3>
        <p className="text-slate-500 font-medium">Find the nearest Teeth Care multispeciality branch in your area.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Branch List */}
        <div className="space-y-6">
          {BRANCHES.map((branch) => (
            <div key={branch.id} className="group bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:border-teal-200 hover:shadow-2xl transition-all cursor-pointer flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-[32px] flex items-center justify-center text-4xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">📍</div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-bold text-slate-900">{branch.name}</h4>
                  <span className="bg-teal-50 text-teal-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{branch.area}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                  {branch.address} <br />
                  <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">Landmark: {branch.landmark}</span>
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                  <div className="flex items-center gap-2">📞 <span className="text-slate-900">{branch.phone}</span></div>
                  <div className="flex items-center gap-2">📧 <span className="text-slate-900">{branch.email}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mock Map / Info Panel */}
        <div className="bg-slate-900 rounded-[50px] p-12 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h4 className="text-3xl font-black mb-8 leading-tight">Can't find a branch near you?</h4>
            <p className="text-slate-400 text-lg mb-10">We are expanding rapidly across the city to provide top-notch dental care closer to your home.</p>
            <div className="space-y-6">
              {['24/7 Emergency Support', 'Online Consultations Available', 'Home Visit for Seniors'].map(f => (
                <div key={f} className="flex items-center gap-4 text-teal-400 font-bold">
                  <span className="w-8 h-8 rounded-full bg-teal-400/10 flex items-center justify-center">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button className="mt-12 px-10 py-5 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/20">
              Get Location on Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
