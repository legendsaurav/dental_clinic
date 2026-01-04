
import React, { useState } from 'react';
import { BRANCHES } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultation',
    branch: '',
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
      setFormData({ name: '', email: '', phone: '', service: 'Consultation', branch: '', date: '', time: '', message: '' });
    }, 5000);
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">Contact Information</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-10 text-white">Reach Our Experts</h3>
          
          <div className="space-y-6 mb-12">
            {[
              { label: 'Call Us', val: '+91 98765 43210', icon: '📞' },
              { label: 'WhatsApp', val: '+91 98765 43210', icon: '💬' },
              { label: 'Email', val: 'info@teethcarekolkata.com', icon: '📧' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-teal-500/50 transition-colors group cursor-pointer">
                <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-400 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <p className="text-teal-400 font-bold uppercase text-[10px] tracking-widest mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-white">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10">
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-teal-400">⏰</span> Business Hours
            </h4>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span className="text-white font-bold">9AM - 8PM</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-white font-bold">9AM - 6PM</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Sunday</span> <span className="text-white font-bold">10AM - 5PM</span></div>
              <div className="flex justify-between pt-2"><span>Emergency</span> <span className="text-teal-400 font-bold">24/7 Available</span></div>
            </div>
          </div>
        </div>

        <div className="bg-white text-slate-900 p-8 md:p-14 rounded-[50px] shadow-2xl relative">
          {submitted && (
            <div className="absolute inset-0 bg-teal-600 rounded-[50px] z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-teal-600 text-5xl mb-8 shadow-xl">✓</div>
              <h4 className="text-white text-4xl font-black mb-4">Success!</h4>
              <p className="text-teal-100 text-lg">Your appointment request is sent. We will call you within 24 hours.</p>
            </div>
          )}

          <h4 className="text-2xl font-black mb-10 text-slate-900">Schedule Your Appointment</h4>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Full Name *</label>
                <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Phone *</label>
                <input required type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Branch Preference *</label>
                <select required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none appearance-none" value={formData.branch} onChange={e => setFormData({...formData, branch: e.target.value})}>
                  <option value="">Select Branch</option>
                  {BRANCHES.map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Service *</label>
                <select required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none appearance-none" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option>Consultation</option>
                  <option>Dental Implants</option>
                  <option>RCT</option>
                  <option>Braces</option>
                  <option>Teeth Whitening</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Date</label>
                <input type="date" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Preferred Slot</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none appearance-none" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}>
                  <option value="">Any Time</option>
                  <option>Morning (9AM - 12PM)</option>
                  <option>Afternoon (12PM - 3PM)</option>
                  <option>Evening (3PM - 8PM)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full py-6 bg-teal-600 text-white font-black text-lg rounded-3xl shadow-2xl shadow-teal-100 hover:bg-teal-700 transition-all transform hover:-translate-y-1">
              Submit Appointment Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
