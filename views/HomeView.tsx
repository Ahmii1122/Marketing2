
import React from 'react';
import { Search, MousePointer2, Share2, Ruler, ArrowRight, Play, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeView: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block py-1 px-4 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Now Accepting Q4 Partners
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            We Scale Brands Through <br />
            <span className="text-primary italic">Bold</span> Creativity
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Helping ambitious companies grow through strategic performance marketing, high-converting creative content, and actionable data-backed insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1">
              Get a Free Proposal
            </Link>
            <Link to="/portfolio" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1 shadow-sm">
              View Our Work
            </Link>
          </div>
        </div>
        
        {/* Logo Ticker Placeholder */}
        <div className="mt-24 max-w-7xl mx-auto opacity-40 grayscale flex justify-center flex-wrap gap-12 md:gap-20">
          <div className="text-xl font-bold">ALPHA</div>
          <div className="text-xl font-bold">OMEGA</div>
          <div className="text-xl font-bold">STARK</div>
          <div className="text-xl font-bold">GOTHAM</div>
          <div className="text-xl font-bold">METRO</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white/50 dark:bg-slate-900/30" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Capabilities</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We provide end-to-end creative solutions designed to ignite your market vertical.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Search className="w-6 h-6" />, 
                title: "Search Optimization", 
                desc: "Dominate search rankings and drive organic traffic with our data-driven SEO strategies."
              },
              { 
                icon: <MousePointer2 className="w-6 h-6" />, 
                title: "Paid Advertising", 
                desc: "Maximize ROI with high-converting PPC campaigns across Google, Meta, and LinkedIn."
              },
              { 
                icon: <Share2 className="w-6 h-6" />, 
                title: "Social Growth", 
                desc: "Build a thriving community and increase brand loyalty through strategic content creation."
              },
              { 
                icon: <Ruler className="w-6 h-6" />, 
                title: "Brand Strategy", 
                desc: "Define your identity and positioning with a comprehensive brand framework."
              },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-primary transition-all hover:shadow-xl flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
                  {service.desc}
                </p>
                <Link to="/portfolio" className="inline-flex items-center font-bold text-sm text-primary group/link">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Case Study" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold uppercase tracking-widest text-primary-light">DTC Strategy</span>
                      <div className="flex -space-x-2">
                         {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden"><img src={`https://i.pravatar.cc/100?u=${i}`} alt="avatar" /></div>)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Revolutionizing Growth for Velos Footwear</h3>
                  </div>
                </div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white">+142%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg. Client Growth</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 leading-tight">Where Impact Meets Design for Scalable Growth</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
                We don't just create pretty ads. We build growth engines. Our approach combines high-end creative storytelling with rigorous data analytics to ensure every dollar you spend is an investment.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  { title: "Performance-First Approach", text: "Everything we do is measured against your bottom-line KPIs." },
                  { title: "Omni-Channel Strategy", text: "Scaling your brand across Meta, Google, TikTok, and beyond." },
                  { title: "In-House Creative Studio", text: "Rapid prototyping and testing of high-impact visual assets." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Link to="/portfolio" className="inline-flex items-center bg-slate-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all">
                Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to ignite your industry?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Stop guessing and start growing. Let's build a custom growth strategy for your brand today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all transform hover:scale-105">
                Get Your Free Proposal
              </Link>
              <button className="bg-primary-dark/30 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
