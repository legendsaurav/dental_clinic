
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Patient Stories</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Over 1K Excellent Patient Reviews</h3>
        <div className="flex items-center justify-center gap-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-bold text-slate-900 text-lg">4.9/5.0 Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 relative shadow-sm hover:shadow-xl transition-all">
            <div className="absolute top-8 right-10 text-slate-200 text-6xl font-serif">"</div>
            <div className="flex items-center gap-4 mb-6">
              <img src={`https://picsum.photos/seed/${t.name}/100/100`} className="w-14 h-14 rounded-full border-2 border-white shadow-md" alt={t.name} />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <div className="flex text-yellow-400 scale-75 origin-left">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed italic">
              {t.text}
            </p>
            {t.service && (
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-teal-600 uppercase tracking-widest">
                Service: {t.service}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-12 bg-slate-900 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div>
          <h4 className="text-2xl font-bold mb-2">Happy patients who visited us from abroad</h4>
          <p className="text-slate-400">Join our growing community of international visitors for premium dental care.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-3xl font-black text-teal-500">200+</p>
            <p className="text-xs uppercase tracking-widest opacity-60">Global Patients</p>
          </div>
          <div className="w-px h-12 bg-slate-800"></div>
          <div className="text-center">
            <p className="text-3xl font-black text-teal-500">100%</p>
            <p className="text-xs uppercase tracking-widest opacity-60">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
