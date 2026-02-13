
import React from 'react';
import { ArrowRight, Filter } from 'lucide-react';

const PortfolioView: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  
  const categories = ['All', 'SEO & Content', 'Paid Media', 'Branding', 'Web Design'];
  
  const projects = [
    { title: "Lumina Tech", category: "SEO & Content", img: "https://picsum.photos/seed/p1/800/600", growth: "+150%" },
    { title: "Veridia Wellness", category: "Branding", img: "https://picsum.photos/seed/p2/800/600", growth: "+210%" },
    { title: "Apex Financial", category: "Paid Media", img: "https://picsum.photos/seed/p3/800/600", growth: "+85%" },
    { title: "Urban Peak", category: "Web Design", img: "https://picsum.photos/seed/p4/800/600", growth: "+300%" },
    { title: "Atlas Logistics", category: "SEO & Content", img: "https://picsum.photos/seed/p5/800/600", growth: "+120%" },
    { title: "Elevate SaaS", category: "Paid Media", img: "https://picsum.photos/seed/p6/800/600", growth: "+175%" },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
      {/* Page Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            Our <span className="text-primary italic">Impact</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            We transform ambitious brands through data-driven strategies and creative excellence. Explore how we've helped our clients reach new heights.
          </p>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-600 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-8 text-center">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-4">{project.category}</span>
                  <h3 className="text-white text-3xl font-bold mb-6">{project.title}</h3>
                  <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-white dark:bg-slate-900">
                <span className="font-bold text-lg">{project.title}</span>
                <span className="text-green-500 font-extrabold">{project.growth} ROI</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-primary/20">
            Load More Projects
          </button>
        </div>
      </section>

      {/* Metrics Counter */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Average ROI Increase", value: "+150%" },
            { label: "Audience Reach", value: "2M+" },
            { label: "Conv. Rate Lift", value: "45%" },
            { label: "Ad Spend Managed", value: "$50M+" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-primary font-black text-5xl md:text-7xl mb-4 transition-transform group-hover:scale-110">{stat.value}</div>
              <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#195de6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioView;
