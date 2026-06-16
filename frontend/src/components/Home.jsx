import React from 'react';
import { Code2, Rocket, Lightbulb, Users, Briefcase, Calendar, Smile, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <section className="min-h-screen bg-slate-50 pt-24 pb-12 px-6 md:px-16 flex flex-col justify-between overflow-hidden relative">
      
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
        
        {/* Left Side Content - Intro & Cards */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="inline-block bg-blue-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wide shadow-sm border border-blue-100">
            About Me
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Abhitesh Kumar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            MERN Stack <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Developer</span>
          </h2>
          
          <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed font-medium">
            I am a passionate MERN Stack Developer who loves building modern, responsive and scalable web applications. I enjoy turning ideas into real-world products that make an impact.
          </p>

          {/* 4 Feature Core Value Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Code2 className="w-5 h-5 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-3">Clean Code</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">Writing clean and maintainable code</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Rocket className="w-5 h-5 text-emerald-600 group-hover:text-white" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-3">Performance</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">Optimized solutions for better speed</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-amber-50 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <Lightbulb className="w-5 h-5 text-amber-600 group-hover:text-white" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-3">Problem Solving</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">Strong problem solving & logical thinking</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Users className="w-5 h-5 text-indigo-600 group-hover:text-white" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-3">Team Player</h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">Great collaboration & communication</p>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Character & Floating Tech Icons */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
          
          {/* Main 3D Stage / Podium Background */}
          <div className="absolute bottom-[-20px] w-[260px] sm:w-[340px] h-[40px] bg-indigo-200/50 rounded-full filter blur-xl shadow-2xl"></div>
          <div className="absolute bottom-0 w-[240px] sm:w-[300px] h-[180px] bg-gradient-to-b from-indigo-100 to-indigo-50/10 rounded-full transform -rotate-12 border border-indigo-100/50 -z-10"></div>
          
          {/* Main Character Avatar Image */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 select-none drop-shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/assets/avatar-3d.png" // अपनी 3D कैरेक्टर इमेज का सही पाथ यहाँ डालें (public/assets/ में रखें)
              alt="Abhitesh 3D Character" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://tse3.mm.bing.net/th/id/OIP.d9cJmbezRqUDzJ92RfNTPwHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"; // Fallback Image
              }}
            />
          </div>

          {/* Floating Tech Icons (Floating Animation Elements) */}
          {/* React */}
          <div className="absolute top-4 left-6 bg-white p-2.5 rounded-2xl shadow-md border border-slate-100 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
          </div>
          
          {/* Node.js */}
          <div className="absolute bottom-16 left-2 bg-white p-2.5 rounded-2xl shadow-md border border-slate-100 animate-bounce" style={{ animationDuration: '4s' }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-7 h-7" />
          </div>

          {/* MongoDB */}
          <div className="absolute top-10 right-6 bg-white p-2.5 rounded-2xl shadow-md border border-slate-100 animate-bounce" style={{ animationDuration: '3.5s' }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-7 h-7" />
          </div>

          {/* Express / Other Tech */}
          <div className="absolute bottom-20 right-2 bg-white p-2.5 rounded-2xl shadow-md border border-slate-100 animate-bounce" style={{ animationDuration: '4.5s' }}>
            <span className="text-lg font-black text-slate-700 font-mono tracking-tighter">ex</span>
          </div>

          {/* Decorative Plant/Element */}
          <div className="absolute bottom-2 right-12 w-10 h-10 opacity-80">
            🌱
          </div>
        </div>

      </div>

      {/* Bottom Counter Stats Bar */}
      <div className="max-w-7xl mx-auto w-full mt-16 bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
        
        {/* Stat 1 */}
        <div className="flex items-center justify-center space-x-3 border-r border-slate-100 last:border-0 md:border-r">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl hidden sm:block">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">5+</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projects Completed</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center justify-center space-x-3 border-none md:border-r border-slate-100">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hidden sm:block">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">1+</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Experience</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center justify-center space-x-3 border-r border-slate-100">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl hidden sm:block">
            <Smile className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">100%</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Satisfaction</p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl hidden sm:block">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">10+</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Technologies</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Home;