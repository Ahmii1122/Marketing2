
import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Globe, Instagram } from 'lucide-react';
import logo from '../assets/sprk.png';
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SPRK Creative" width={200} height={100} />      
          </div>
          <p className="text-sm leading-relaxed">
            A high-performance creative agency focused on delivering measurable results through data and bold design.
          </p>
          <div className="flex gap-4">
           
            <a target="_blank" href="https://www.linkedin.com/company/sprkcreative" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a target="_blank" href="https://www.instagram.com/sprk_creative/" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Paid Advertising</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Content Strategy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              hello@sprkcreative.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              +1 (555) 987-6543
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-1" />
              456 Creative Way, Suite 200<br />New York, NY 10012
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-xs text-center">
        © 2024 SPRK Creative. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
