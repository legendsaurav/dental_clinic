
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '16+', label: 'Years of Service' },
    { value: 'MDS', label: 'Specialist Team' },
    { value: '1000+', label: 'Happy Patients' },
    { value: '2+', label: 'Major Awards' }
  ];

  const badges = [
    { title: 'ISO Certified', icon: '📜' },
    { title: 'Award Winner', icon: '🏆' },
    { title: 'Latest Tech', icon: '💻' },
    { title: 'Expert Team', icon: '👨‍⚕️' }
  ];

  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Part */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
        <div className="relative group order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
            <img src="https://picsum.photos/seed/about1/500/700" className="rounded-[30px] lg:rounded-[40px] shadow-2xl transition-transform group-hover:-translate-y-2 duration-500" alt="Clinic" />
            <img src="https://picsum.photos/seed/about2/500/700" className="rounded-[30px] lg:rounded-[40px] shadow-2xl mt-8 sm:mt-12 transition-transform group-hover:translate-y-2 duration-500" alt="Specialist" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[30px] lg:rounded-[40px] shadow-2xl text-center border-4 border-teal-600/10">
            <p className="text-teal-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-1">Since</p>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">2006</p>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-teal-600 uppercase tracking-widest mb-3 lg:mb-4">About Our Practice</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Best Dental Hospital in <br className="hidden sm:block" /> Kolkata & Eastern India
            </h3>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            32 Dental Care Multispeciality Dental Clinic has been a pioneer in modern dentistry in Kolkata for <b>over 16+ years</b>. We realize that many patients have fears about dental procedures, so our team focuses on <b>painless treatment</b> and maximum comfort. 
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 text-left max-w-xl mx-auto lg:mx-0">
            {['✓ Award-winning clinic', '✓ Latest dental technology', '✓ Experienced MDS specialists', '✓ Patient-centric approach'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-semibold text-sm sm:text-base">
                <span className="text-teal-600 font-bold bg-teal-50 w-6 h-6 flex items-center justify-center rounded-full text-xs">✓</span>
                {item.slice(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 lg:mb-24">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 sm:p-8 rounded-[25px] lg:rounded-[32px] shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-teal-200 transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-teal-600 mb-1 sm:mb-2">{stat.value}</h3>
            <p className="text-slate-500 font-bold text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="text-center">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-8 lg:mb-12">Our Certifications & Standards</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-50 rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl shadow-inner group transition-all hover:bg-teal-600 hover:text-white cursor-default">
                {badge.icon}
              </div>
              <p className="font-bold text-slate-700 text-xs sm:text-sm">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
