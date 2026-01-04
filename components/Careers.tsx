
import React from 'react';
import { CAREER_LISTINGS } from '../constants';

const Careers: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Join Our Team</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">Professional Growth at Teeth Care</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Be part of a team dedicated to excellent patient care. We offer continuous learning, latest technology access, and a supportive expert environment.
          </p>
          <div className="space-y-4">
            {['Competitive Salary', 'Professional Development', 'Flexible Hours', 'Health Insurance'].map(benefit => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">✨</div>
                <span className="font-bold text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-2xl font-bold text-slate-900 mb-8">Open Positions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_LISTINGS.map(job => (
              <div key={job.id} className="bg-white p-8 rounded-[40px] border border-slate-100 hover:border-teal-200 transition-all hover:shadow-xl shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h5 className="text-xl font-bold text-slate-900">{job.title}</h5>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{job.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase">{job.type}</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{job.description}</p>
                <div className="flex flex-col gap-2 mb-8 text-xs text-slate-600 font-medium">
                  <div className="flex justify-between"><span>Experience:</span> <span className="text-slate-900">{job.experience}</span></div>
                  <div className="flex justify-between"><span>Salary:</span> <span className="text-slate-900">{job.salary}</span></div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-teal-600 transition-colors">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
