
import React from 'react';
import { BRANCHES } from '../constants';

const Branches: React.FC = () => {
  const branch = BRANCHES[0];

  return (
    <div className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-xs sm:text-sm font-black text-teal-600 uppercase tracking-[0.3em] mb-4">Location Hub</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Find Us in <br className="hidden md:block" /> Madhyamgram
          </h3>
        </div>
        <p className="text-slate-500 font-medium max-w-md text-center lg:text-left lg:pb-2">
          Experience world-class dental care at our state-of-the-art facility located conveniently at the heart of Madhyamgram.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-10 rounded-[50px] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
            <div className="w-16 h-16 bg-slate-900 rounded-[22px] flex items-center justify-center text-3xl mb-10 shadow-xl shadow-slate-900/10">
              <span className="text-white">📍</span>
            </div>
            
            <h4 className="text-3xl font-black text-slate-900 mb-2 leading-tight">32 Dental Care</h4>
            <p className="text-sm text-teal-600 font-black uppercase tracking-widest mb-10">Chief Consultant: Dr. Saikat Saha</p>
            
            <div className="space-y-8 flex-grow">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl group-hover:bg-teal-500 group-hover:text-white transition-all">🏠</div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Clinic Address</p>
                  <p className="text-slate-800 text-base font-bold leading-relaxed">{branch.address}</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl group-hover:bg-teal-500 group-hover:text-white transition-all">📞</div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Phone Line</p>
                  <a href={`tel:${branch.phone}`} className="text-slate-900 text-xl font-black hover:text-teal-600 transition-colors tracking-tight">{branch.phone}</a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl group-hover:bg-teal-500 group-hover:text-white transition-all">⏰</div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Working Hours</p>
                  <div className="text-slate-800 text-sm font-bold space-y-1 mt-1">
                    <p className="flex justify-between w-48"><span>Mon - Fri:</span> <span className="text-teal-600">{branch.hours.mon_fri}</span></p>
                    <p className="flex justify-between w-48"><span>Sat:</span> <span className="text-teal-600">{branch.hours.sat}</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={branch.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-5 bg-teal-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all hover:-translate-y-1"
              >
                Open in Google Maps
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="lg:col-span-8">
          <div className="relative h-full min-h-[500px] lg:min-h-0 bg-white p-3 lg:p-4 rounded-[60px] shadow-2xl shadow-slate-200 border border-slate-100 group">
            <div className="absolute top-8 left-8 z-10 hidden md:block">
              <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-2xl border border-white flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Clinic Status</p>
                  <p className="text-sm font-black text-slate-900">Open & Ready for Patients</p>
                </div>
              </div>
            </div>

            <div className="w-full h-full rounded-[50px] overflow-hidden relative shadow-inner">
              <iframe 
                src={branch.embedMapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="32 Dental Care Madhyamgram Map"
                className="absolute inset-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute bottom-8 right-8 z-10 flex gap-3">
              <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl border border-white/10">
                Interactive Live Map
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
