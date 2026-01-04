
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const totalTestimonials = TESTIMONIALS.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, totalTestimonials));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="testimonials" className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="text-center mb-16 lg:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.24-2.12 4.44-1.28 1.28-3.16 2.24-6.4 2.24-5.2 0-9.4-4.2-9.4-9.4s4.2-9.4 9.4-9.4c2.8 0 4.92 1.1 6.64 2.76l2.32-2.32C18.44 1.24 15.68 0 12.48 0 5.56 0 0 5.56 0 12.48s5.56 12.48 12.48 12.48c3.76 0 6.64-1.24 8.88-3.56 2.32-2.32 3.04-5.56 3.04-8.24 0-.8-.08-1.56-.24-2.24h-11.68z"/>
          </svg>
          Google Reviews Hub
        </div>
        <h2 className="text-xs sm:text-sm font-black text-teal-600 uppercase tracking-[0.3em] mb-4">Real Patient Feedback</h2>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
          The Hub of <br /> Smiling Transformations
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <img 
                key={i} 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=review-${i}`} 
                className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-teal-50" 
                alt="Patient" 
              />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">+1k</div>
          </div>
          <div className="text-left">
            <div className="flex text-yellow-400 mb-1">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-black text-slate-700 uppercase tracking-widest text-[10px]">4.9 Overall Patient Rating</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.slice(0, visibleCount).map((t) => (
          <div key={t.id} className="group flex flex-col h-full bg-white p-8 lg:p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} 
                    className="w-14 h-14 rounded-2xl bg-teal-50 border-2 border-white shadow-md object-cover" 
                    alt={t.name} 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.24-2.12 4.44-1.28 1.28-3.16 2.24-6.4 2.24-5.2 0-9.4-4.2-9.4-9.4s4.2-9.4 9.4-9.4c2.8 0 4.92 1.1 6.64 2.76l2.32-2.32C18.44 1.24 15.68 0 12.48 0 5.56 0 0 5.56 0 12.48s5.56 12.48 12.48 12.48c3.76 0 6.64-1.24 8.88-3.56 2.32-2.32 3.04-5.56 3.04-8.24 0-.8-.08-1.56-.24-2.24h-11.68z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base tracking-tight">{t.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.date || 'Patient Review'}</p>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Content */}
            <div className="flex-grow">
              <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">
                "{t.text}"
              </p>
              {t.service && (
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-8">
                  {t.service}
                </div>
              )}
            </div>

            {/* Owner Response */}
            {t.reply && (
              <div className="mt-6 pt-6 border-t border-slate-50">
                <div className="bg-slate-50 p-6 rounded-[24px] relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-slate-50 rotate-45"></div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-[10px] text-white font-black">32</div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">32 Dental Care (Owner)</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    {t.reply}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        {visibleCount < totalTestimonials ? (
          <button 
            onClick={handleLoadMore}
            className="px-12 py-5 bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] rounded-[24px] shadow-2xl shadow-slate-900/20 hover:bg-teal-600 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Load More Reviews ({totalTestimonials - visibleCount})
          </button>
        ) : visibleCount > 6 ? (
          <button 
            onClick={handleShowLess}
            className="px-12 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black text-sm uppercase tracking-[0.2em] rounded-[24px] hover:border-teal-600 hover:text-teal-600 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Show Less
          </button>
        ) : null}
      </div>
      
      {/* Trust Banner */}
      <div className="mt-20 p-10 lg:p-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-[50px] sm:rounded-[60px] flex flex-col md:flex-row items-center justify-between gap-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 text-center md:text-left">
          <h4 className="text-3xl lg:text-4xl font-black mb-3">Globally Trusted Care</h4>
          <p className="text-teal-50 text-base lg:text-lg max-w-md opacity-90 font-medium leading-relaxed">Join hundreds of international and local patients who trust Dr. Saikat Saha for painless transformations.</p>
        </div>
        <div className="flex gap-8 lg:gap-16 relative z-10 shrink-0">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-black text-white mb-1">1k+</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-200">Reviews</p>
          </div>
          <div className="w-px h-16 bg-white/20"></div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-black text-white mb-1">4.9</p>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-200">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
