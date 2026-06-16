import React from 'react';
import { 
  User, GraduationCap, Briefcase, Code2, 
  Sparkles, Terminal, Flame, Target, FileDown, 
  Cpu, Database, Coffee
} from 'lucide-react';

const About = () => {
  
  // रेज़्यूमे डाउनलोड फ़ंक्शन
  const handleDownloadResume = () => {
    // यहाँ अपनी असली रेज़्यूमे फ़ाइल का पाथ डालें (जो public फोल्डर में हो)
    const resumeUrl = "/Abhitesh_Kumar_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Abhitesh_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6 md:px-16 overflow-hidden relative">
      
      {/* 3D Ambient Lighting/Glow Effects */}
      <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider border border-purple-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
            <span>MY PROFILE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Crafting Digital Experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              With 3D Dimension & Code
            </span>
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 3D Holographic Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6">
            <div className="relative group w-full max-w-[360px] aspect-[4/5] bg-gradient-to-b from-white to-slate-50/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)] hover:-translate-y-2 flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/0 rounded-tr-[2.5rem] rounded-bl-[2.5rem] pointer-events-none"></div>

              {/* Top Meta Info */}
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center space-x-1 bg-slate-900 text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase">
                  <Terminal className="w-3 h-3 text-cyan-400 mr-1" /> MERN_DEV_v1.0
                </div>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              </div>

              {/* Center 3D Model Stage Area (3D Avatar / Profile Photo) */}
              <div className="my-auto relative flex justify-center items-center h-48">
                <div className="absolute bottom-2 w-44 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-md transform -rotate-6 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 w-40 h-8 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transform -rotate-6"></div>
                
                {/* Profile Avatar Container */}
                <div className="absolute w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl transform -translate-y-4 group-hover:-translate-y-8 transition-all duration-500 ease-out z-10 bg-gradient-to-tr from-blue-100 to-purple-100 flex justify-center items-center">
                  {/* अपनी फोटो या 3D अवतार का पाथ यहाँ डालें */}
                  <img 
                    src="/assets/avatar-3d.png" 
                    alt="Abhitesh Kumar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://illustrations.popsy.co/ambient/boy-with-laptop.svg"; // Fallback
                    }}
                  />
                </div>
                
                {/* Floating Micro tags */}
                <div className="absolute -top-4 left-2 bg-white/90 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-xl shadow-sm border border-slate-100 transform -rotate-12">
                  ⚡ Code
                </div>
                <div className="absolute top-12 right-0 bg-white/90 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-xl shadow-sm border border-slate-100 transform rotate-12">
                  🚀 Build
                </div>
              </div>

              {/* Bottom Card Bio Details (Name & Role) */}
              <div className="space-y-1 relative z-10 pt-4 border-t border-slate-100">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Abhitesh Kumar</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  MERN Stack & Software Developer
                </p>
              </div>
            </div>

            {/* Resume Download Button */}
            <button 
              onClick={handleDownloadResume}
              className="w-full max-w-[360px] flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 active:scale-98 group"
            >
              <FileDown className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Right Column: Information Pods */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Short Introduction Pod */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              <h3 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span>About Me</span>
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                Hello! I am <strong className="text-slate-800">Abhitesh Kumar</strong>, a driven MERN Stack Developer and Software Developer. I thrive on transforming complex problems into elegant, highly efficient web architectures. 
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                With a strong command over modern JavaScript frameworks and core software engineering principles, I build seamless user experiences combined with robust backend structures.
              </p>
            </div>

            {/* Stats Overview Grid (Experience & Projects) */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center md:text-left flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">1+ Year</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Experience</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center md:text-left flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900">5+ Production</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Projects Done</p>
                </div>
              </div>
            </div>

            {/* Core Skills Pod (React, Node, MongoDB, Java) */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-indigo-600" />
                <span>Technical Armory</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: 'React', desc: 'Frontend UI', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
                  { name: 'Node.js', desc: 'Backend Engine', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                  { name: 'MongoDB', desc: 'Database', color: 'bg-green-50 text-green-600 border-green-100' },
                  { name: 'Java', desc: 'Core Logic', color: 'bg-orange-50 text-orange-600 border-orange-100' }
                ].map((skill) => (
                  <div key={skill.name} className={`p-4 rounded-2xl border text-center ${skill.color}`}>
                    <h4 className="font-extrabold text-sm tracking-tight">{skill.name}</h4>
                    <p className="text-[10px] opacity-80 mt-0.5 font-medium">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Pod (MCA @ Sharda University) */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 space-y-4 relative overflow-hidden">
              <h3 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span>Academic Foundation</span>
              </h3>
              <div className="relative border-l-2 border-slate-100 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm"></div>
                  <span className="text-[10px] font-black text-purple-600 tracking-wider uppercase bg-purple-50 px-2 py-0.5 rounded-md">
                    2023-2025
                  </span>
                  <h4 className="text-base font-black text-slate-800 mt-1">Master of Computer Applications (MCA)</h4>
                  <p className="text-sm font-bold text-slate-500">Sharda University</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Advanced studies in computer science, software engineering workflows, enterprise application design, and modern web architectures.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;