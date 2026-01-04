
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '16+', label: 'Years of Service' },
    { value: '5', label: 'Branches in Kolkata' },
    { value: '1000+', label: 'Happy Patients' },
    { value: '2+', label: 'Major Awards' }
  ];

  const badges = [
    { title: 'ISO Certified Lab', icon: '📜' },
    { title: 'Award Winner 22-23', icon: '🏆' },
    { title: 'Latest Technology', icon: '💻' },
    { title: 'Expert MDS Team', icon: '👨‍⚕️' }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Part */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
        <div className="relative group">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/about1/500/700" className="rounded-[40px] shadow-2xl transition-transform group-hover:-translate-y-2 duration-500" alt="Clinic" />
            <img src="https://picsum.photos/seed/about2/500/700" className="rounded-[40px] shadow-2xl mt-12 transition-transform group-hover:translate-y-2 duration-500" alt="Specialist" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-8 rounded-[40px] shadow-2xl text-center border-4 border-teal-600/20">
            <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-1">Since</p>
            <p className="text-4xl font-black text-slate-900">2006</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">About Our Practice</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Best Dental Hospital in <br /> Kolkata and Eastern India
            </h3>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Teeth Care Multispeciality Dental Clinic has been a pioneer in modern dentistry in Kolkata for <b>over 16+ years</b>. We realize that many patients have fears about dental procedures, so our team focuses on <b>painless treatment</b> and maximum comfort. 
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {['✓ Award-winning clinic', '✓ Latest dental technology', '✓ Experienced MDS specialists', '✓ Patient-centric approach'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="text-teal-600 font-bold">{item.charAt(0)}</span>
                {item.slice(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 text-center hover:shadow-xl hover:border-teal-200 transition-all transform hover:-translate-y-1">
            <h3 className="text-4xl font-black text-teal-600 mb-2">{stat.value}</h3>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="text-center">
        <h4 className="text-lg font-bold text-slate-900 mb-10">Our Certifications & Standards</h4>
        <div className="flex flex-wrap justify-center gap-12">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center text-3xl shadow-inner group transition-all hover:bg-teal-600 hover:text-white cursor-default">
                {badge.icon}
              </div>
              <p className="font-bold text-slate-700 text-sm">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
