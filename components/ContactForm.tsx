
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultation',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Consultation', date: '', time: '', message: '' });
    }, 5000);
  };

  return (
    <div className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-800 rounded-[60px] p-8 lg:p-20 shadow-[0_60px_100px_-30px_rgba(15,23,42,0.5)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-teal-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Concierge Booking</h2>
            <h3 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-10">
              Your Smile <br /> Journey Starts Here
            </h3>
            
            <div className="space-y-8">
              {[
                { label: 'Direct Line', val: '+91 98301 10321', icon: '📞' },
                { label: 'Chat Online', val: '+91 98301 10321', icon: '💬' },
                { label: 'Official Mail', val: 'info@smilecenter.com', icon: '📧' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-[22px] flex items-center justify-center text-3xl border border-white/10 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-teal-400 font-black uppercase text-[10px] tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-white tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-white/5 rounded-[40px] border border-white/5 flex items-center gap-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 animate-pulse">●</div>
              <div>
                <p className="text-white font-bold text-sm">Emergency Ready</p>
                <p className="text-slate-400 text-xs font-medium">Specialists on standby for severe pain</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-14 rounded-[50px] shadow-2xl relative">
              {submitted && (
                <div className="absolute inset-0 bg-teal-600 rounded-[50px] z-20 flex flex-col items-center justify-center text-center p-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-6xl mb-8 shadow-xl">✓</div>
                  <h4 className="text-white text-4xl font-black mb-4">Request Received</h4>
                  <p className="text-teal-50 text-lg font-medium">Our clinical coordinator will contact you shortly.</p>
                </div>
              )}

              <h4 className="text-2xl font-black mb-10 text-slate-900 tracking-tight">Booking Form</h4>
              
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Full Name</label>
                    <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full px-8 py-4 bg-slate-50 border-0 rounded-[20px] focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Phone Number</label>
                    <input required type="tel" placeholder="+91 00000 00000" className="w-full px-8 py-4 bg-slate-50 border-0 rounded-[20px] focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Preferred Treatment</label>
                  <select required className="w-full px-8 py-4 bg-slate-50 border-0 rounded-[20px] focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                    <option>Consultation</option>
                    <option>Dental Implants</option>
                    <option>RCT Treatment</option>
                    <option>Invisible Braces</option>
                    <option>Cosmetic Smile Design</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Message (Optional)</label>
                  <textarea rows={3} placeholder="Tell us what you're experiencing..." className="w-full px-8 py-5 bg-slate-50 border-0 rounded-[24px] focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all resize-none placeholder:text-slate-300" />
                </div>

                <button type="submit" className="w-full py-6 bg-teal-600 text-white font-black text-xl rounded-[28px] shadow-2xl shadow-teal-600/20 hover:bg-teal-700 transition-all transform hover:-translate-y-1 active:scale-95 group flex items-center justify-center gap-3">
                  Confirm Request
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
