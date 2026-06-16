import React from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  // 4 Premium Master Service Cards Data
  const premiumServices = [
    {
      title: "Web Development",
      description: "Modern and responsive websites built with the latest industry technologies to capture your user attention instantly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      glow: "from-blue-500/20 to-cyan-500/10",
      textColor: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "MERN Stack Development",
      description: "Robust full-stack web applications engineered seamlessly using MongoDB, Express, React, and Node.js for scalability.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m0 0l-2-1m2 1v2.5M14 4l-2 1m0 0L8 4m2 1v2.5M4 7l2 1m0 0l2-1M6 8v2.5M16 18l-2 1m0 0l-2-1m2 1v2.5M10 18l-2 1m0 0l-2-1m2 1v2.5" />
        </svg>
      ),
      glow: "from-cyan-500/20 to-emerald-500/10",
      textColor: "text-cyan-600 bg-cyan-50 border-cyan-100"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-friendly, and interactive digital interfaces tailored to establish premium branding visuals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      glow: "from-purple-500/20 to-pink-500/10",
      textColor: "text-purple-600 bg-purple-50 border-purple-100"
    },
    {
      title: "Website Optimization",
      description: "Blazing fast loading configurations built on highly secure, performant, and search engine SEO-friendly logic structures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      glow: "from-amber-500/20 to-orange-500/10",
      textColor: "text-amber-600 bg-amber-50 border-amber-100"
    }
  ];

  // Deep Tech Expertise Pillars
  const secondaryExpertise = [
    {
      title: "Full Stack Execution",
      features: ["React Frontend Architecture", "Node.js Server Engines", "REST API Development", "MongoDB Integration"]
    },
    {
      title: "Interface Architecture",
      features: ["Modern UI Systems", "Mobile Responsive Flow", "Glassmorphism Themes", "3D Interactive Portfolios"]
    },
    {
      title: "Performance Logistics",
      features: ["Fast Loading Speeds", "SEO Friendly Frameworks", "Production Optimization", "Rigorous Bug Fixing"]
    },
    {
      title: "Integrations & Modules",
      features: ["Razorpay / Stripe Gateways", "JWT & OAuth Systems", "Third-party APIs Hub", "Automatic Email Services"]
    }
  ];

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6 md:px-16 overflow-hidden relative">
      
      {/* 3D Soft Light Background Gradients */}
      <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[130px] opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-10%] w-[450px] h-[450px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider border border-blue-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 a" />
            <span>SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Digital Solutions
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Providing custom architectural engineering, frontend mastery, and fast deployment models for modern web ecosystems.
          </p>
        </div>

        {/* 1. The 4 Premium Service Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {premiumServices.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.01)] p-6 md:p-8 relative overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_rgba(99,102,241,0.08)] hover:-translate-y-1.5"
            >
              {/* Radial gradient background hover mesh */}
              <div className={`absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br ${service.glow} rounded-full filter blur-2xl opacity-60 group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>

              <div className="relative z-10 space-y-4">
                
                {/* Icon Wrapper Bar */}
                <div className="flex justify-between items-center">
                  <div className={`p-3.5 rounded-2xl border ${service.textColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="text-slate-300 group-hover:text-blue-600 transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Descriptive Pitch */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* 2. Detailed Tech Pillars / Capabilities Grid */}
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-8 md:p-12 space-y-8">
          <div className="text-left max-w-xl">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Full Capabilities Spectrum</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Granular features engineered systematically into every deploy</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryExpertise.map((pillar, pIdx) => (
              <div key={pIdx} className="space-y-4">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
                  {pillar.title}
                </h4>
                <ul className="space-y-2.5">
                  {pillar.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2 text-slate-500 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;