
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-teal-50 to-white rounded-l-[100px] -z-10 translate-x-20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-gradient-to-r from-teal-100 to-amber-100 text-teal-700 font-semibold text-base shadow-sm">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-400"></span>
            </span>
            <span>Serving patients for <b>16+ years</b></span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight drop-shadow-sm">
            Teeth Care Multispeciality <br />
            <span className="text-teal-600 italic">top dental clinic in Kolkata</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            The team uses the latest technologies to examine and heal teeth with painless treatment under the supervision of <b>experienced dentists</b>. Get your teeth repaired, where our experts heal your pain instead of increasing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn px-10 py-4 text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform text-center"
            >
              Book Appointment
            </a>
            <a
              href="tel:+919876543210"
              className="px-10 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-teal-600 hover:text-teal-600 transition-all text-center shadow-sm"
            >
              Call Now: +91 98765 43210
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-14 h-14 rounded-full border-2 border-white shadow-md" alt="Patient" />
              ))}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-amber-400 border-2 border-white flex items-center justify-center text-white text-base font-bold shadow-md">+1k</div>
            </div>
            <p className="text-base text-slate-500 font-medium">Trusted by over 1,000+ happy patients</p>
          </div>
        </div>

        <div className="relative animate-in slide-in-from-right duration-700">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1629909608135-ca90289b4e18?auto=format&fit=crop&q=80&w=1000"
              alt="Dental Clinic"
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 z-20 bg-white p-7 rounded-3xl shadow-2xl max-w-xs animate-bounce-slow border border-amber-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-to-br from-amber-100 to-teal-100 rounded-2xl text-teal-600 text-2xl shadow">
                🏆
              </div>
              <div>
                <p className="font-bold text-slate-900">Award Winning</p>
                <p className="text-xs text-slate-500">Global Icon Awards 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
