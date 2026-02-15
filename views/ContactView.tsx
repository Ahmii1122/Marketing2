
import React, { useState, useEffect } from 'react';
import { Send, MapPin, Mail, Phone, Twitter, Instagram, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// EmailJS Configuration
// TODO: Replace with your EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// Extend Window interface for EmailJS
declare global {
  interface Window {
    emailjs?: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, templateParams: Record<string, string>, publicKey?: string) => Promise<{ status: number; text: string }>;
    };
  }
}

const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }
    };

    return () => {
      const existingScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setStatus('error');
      setErrorMessage('Please configure your EmailJS credentials in views/ContactView.tsx');
      return;
    }

    if (!window.emailjs) {
      setStatus('error');
      setErrorMessage('EmailJS is still loading. Please try again in a moment.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        company: formData.company,
        website: formData.website,
        message: formData.message,
        to_email: 'hello@sprkcreative.co', // Your receiving email
      };

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        website: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            Let's build something <span className="text-primary">great together.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Ready to scale your digital presence? Fill out the form below or reach out directly to our team. We usually respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="company" className="text-xs font-black uppercase tracking-widest text-slate-400">Company Name</label>
                  <input 
                    id="company"
                    name="company"
                    type="text" 
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="website" className="text-xs font-black uppercase tracking-widest text-slate-400">Website URL</label>
                <input 
                  id="website"
                  name="website"
                  type="url" 
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400">Project Details</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your project goals..." 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none"
                />
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3 text-green-700 dark:text-green-400">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
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
