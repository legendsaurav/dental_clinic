
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Dental Insights</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Latest Health Updates</h3>
        </div>
        <button className="text-teal-600 font-bold hover:gap-3 flex items-center gap-2 transition-all">
          View All Articles
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden">
              <img src={`https://picsum.photos/seed/${post.id}/800/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-teal-600 uppercase tracking-widest">
                {post.category}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{post.readTime}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <button className="text-teal-600 font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Read Full Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
