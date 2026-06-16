import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, ArrowUp, Mail, Phone, MapPin, ArrowRight, Layers } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smoothly scroll back to the top of the viewport
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-auto relative z-20 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Multi-Column Mega Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Column 1: Brand & Bio (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div 
              onClick={scrollToTop} 
              className="text-2xl font-black text-slate-900 tracking-tight cursor-pointer select-none group inline-block"
            >
              Abhitesh<span className="text-blue-600 transition-transform group-hover:scale-125 inline-block">.</span>
            </div>
            <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
              A forward-thinking MERN Stack and Software Developer specializing in building scalable web architectures, clean logic platforms, and immersive interactive user experiences.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-l-2 border-blue-600 pl-2.5">
              Explore Portfolio
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-bold text-slate-500">
              <li>
                <NavLink to="/" onClick={scrollToTop} className="hover:text-blue-600 flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-blue-600" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={scrollToTop} className="hover:text-blue-600 flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-blue-600" />
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" onClick={scrollToTop} className="hover:text-blue-600 flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-blue-600" />
                  <span>Skills</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={scrollToTop} className="hover:text-blue-600 flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-blue-600" />
                  <span>Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={scrollToTop} className="hover:text-blue-600 flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-blue-600" />
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={scrollToTop} className="hover:text-blue-600 flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-blue-600" />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Shortcuts (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-l-2 border-blue-600 pl-2.5">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm font-semibold text-slate-500">
              <li className="flex items-center space-x-2.5 group">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="mailto:abhiteshkumar711@gmail.com" className="hover:text-blue-600 transition-colors break-all">
                  abhiteshkumar711@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a href="tel:+919504939711" className="hover:text-emerald-600 transition-colors">
                  +91 9504939711
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Noida, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Infrastructure Connections (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-l-2 border-blue-600 pl-2.5">
              Social Hub
            </h4>
            <div className="flex gap-3">
              {/* GitHub Inline SVG */}
              <a 
                href="https://github.com/abhitesh1311" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 border border-slate-100 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn Inline SVG */}
              <a 
                href="https://linkedin.com/in/abhitesh-kumar-501052247" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-100 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright Metadata & Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright text */}
          <p className="text-xs font-semibold text-slate-400 text-center sm:text-left order-2 sm:order-1">
            © {currentYear} Abhitesh Kumar. All rights reserved. Built with modular scalability.
          </p>

          {/* Core attribution badge wrapper */}
          <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full shadow-sm order-1 sm:order-2">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
            <span>by</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-extrabold">
              Abhitesh Kumar
            </span>
          </div>

          {/* Floating Action Scroll Trigger */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-blue-600 text-white rounded-2xl shadow-md shadow-blue-100 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 group order-3 hidden sm:block"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;