
import React from 'react';
import { 
  Target, ShoppingBag, Sparkles, TrendingUp, FileText, 
  ArrowUpCircle, MessageCircle, Mail, Users, Search, 
  BarChart, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlyButton from '../components/CalendlyButton';

const ServicesView: React.FC = () => {
  const services = [
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "E-commerce Brand Strategy", 
      desc: "We position your brand to win in a competitive market — focusing on customer psychology, niche clarity, and buying triggers."
    },
    { 
      icon: <ShoppingBag className="w-6 h-6" />, 
      title: "Store Design & Conversion Optimization", 
      desc: "High-performing Shopify & e-commerce stores built to convert visitors into customers through optimized UX and seamless buying journeys."
    },
    { 
      icon: <Sparkles className="w-6 h-6" />, 
      title: "AI-Powered Ad Creatives", 
      desc: "We create data-backed ad creatives using AI to test hooks, visuals, and messaging faster — so you scale what actually works."
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Performance Marketing", 
      desc: "ROI-focused ad campaigns across Meta & Google designed to drive revenue, not just traffic."
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: "AI Product Content", 
      desc: "Launch faster with AI-generated: Product descriptions, Landing page copy, Ad messaging, Email content."
    },
    { 
      icon: <ArrowUpCircle className="w-6 h-6" />, 
      title: "Conversion Rate Optimization (CRO)", 
      desc: "We improve your store's performance through funnel analysis, A/B testing, and customer behavior insights."
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "AI Sales Chatbots", 
      desc: "24/7 automated assistants that: Answer customer queries, Recommend products, Capture leads, Increase conversions."
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Email & Retention Marketing", 
      desc: "Turn one-time buyers into loyal customers with AI-powered flows, abandoned cart recovery, and win-back campaigns."
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Influencer & UGC Systems", 
      desc: "We help you leverage creators to produce trust-driven content that converts into sales."
    },
    { 
      icon: <Search className="w-6 h-6" />, 
      title: "AI Product & Trend Research", 
      desc: "Identify winning products early using AI-backed demand analysis and market insights."
    },
    { 
      icon: <BarChart className="w-6 h-6" />, 
      title: "Growth Dashboard", 
      desc: "Track everything that matters — from ad performance to customer behavior — in one clear view."
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
      {/* Page Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            Our <span className="text-primary italic">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-bold">
            Built for E-commerce Growth. Powered by AI.
          </p>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            At SPRK Creative, we don't just make brands look good — we build systems that drive sales.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-primary transition-all hover:shadow-xl flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center font-bold text-sm text-primary group/link">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 mt-16">
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
              <CalendlyButton className="bg-primary-dark/30 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Book a Strategy Call
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;

