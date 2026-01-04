
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-24 pb-12 bg-slate-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-teal-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm mx-auto lg:mx-0">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-tight">
                Madhyamgram's Premier Dental Hub — <span className="text-teal-600">Established 2006</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
              32 Dental Care <br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent italic font-extrabold pr-4">Refining Lives</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
              Experience aesthetic precision led by <span className="text-slate-900 font-bold underline decoration-teal-500/30 underline-offset-4">Dr. Saikat Saha</span>. We merge world-class medical science with high-end clinical comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-teal-600 text-white rounded-[28px] font-black text-lg shadow-2xl shadow-teal-600/30 hover:bg-teal-700 transition-all hover:-translate-y-1.5 active:scale-95"
              >
                Secure Appointment
              </a>
              <a 
                href="tel:+919830110321" 
                className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-[28px] font-bold text-lg hover:border-teal-600/30 hover:shadow-xl transition-all active:scale-95"
              >
                Immediate Call
              </a>
            </div>

            {/* Clickable Trust Badge linked to Review Section */}
            <div className="pt-10 flex justify-center lg:justify-start">
              <a 
                href="#testimonials" 
                className="inline-flex items-center gap-6 group hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="relative">
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 42}`} 
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] border-[5px] border-white shadow-xl bg-teal-50 object-cover" 
                        alt="Patient Avatar" 
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">4.9/5</span>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.15em] group-hover:text-teal-600 transition-colors">
                    Trust from 1k+ patients
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-20 animate-float">
              <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white ring-1 ring-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                  alt="32 Dental Care Clinic Exterior" 
                  className="w-full h-[650px] object-cover"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-12 bg-white/90 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border border-slate-100 max-w-[240px]">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-4">🏆</div>
                <h4 className="text-2xl font-black text-slate-900 leading-tight">16+ Years</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Clinical Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
