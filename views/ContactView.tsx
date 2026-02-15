
import React from 'react';
import { Send, MapPin, Mail, Phone, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            Let’s build something <span className="text-primary">great together.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Ready to scale your digital presence? Fill out the form below or reach out directly to our team. We usually respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Inc." 
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Website URL</label>
                <input 
                  type="url" 
                  placeholder="https://example.com" 
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Project Details</label>
                <textarea 
                  placeholder="Tell us about your project goals..." 
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95 group"
              >
                Submit Request
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 relative space-y-12 py-6">
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Visit Us</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Plaza 23, Sunflower Commercial, Bahria Nasheman, Lahore, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    hello@sprkcreative.co<br />
                    
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    +92 (320) 149-5253<br />
                    
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Connect with us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/company/sprkcreative' },
                  { icon: <Instagram />, name: 'Instagram', link: 'https://www.instagram.com/sprk_creative' },
                  
                ].map((social, i) => (
                  <a target="_blank" href={social.link} key={i} className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Abstract World Map Background Mockup */}
            <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none grayscale select-none">
               <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900">
                  <path d="M10,20 Q30,10 50,20 T90,20 Q80,50 90,80 T50,90 T10,80 Q20,50 10,20" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
