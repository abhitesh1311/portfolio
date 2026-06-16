import React, { useState, useEffect } from 'react';
import { Sparkles, Code2, Cpu, Database, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  // State to hold dynamic skill categories
  const [skillCategories, setSkillCategories] = useState([]);

  useEffect(() => {
    // 1. Admin Dashboard se saved data local storage se nikalna
    const savedSkills = localStorage.getItem('portfolio_skills');
    
    // Agar local storage khali hai toh ye base default data load hoga
    const rawSkills = savedSkills ? JSON.parse(savedSkills) : [
      { name: "React.js", category: "Frontend", proficiency: "Advanced" },
      { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced" },
      { name: "Node.js", category: "Backend", proficiency: "Intermediate" },
      { name: "MongoDB", category: "Database", proficiency: "Intermediate" }
    ];

    // 2. Map proficiency string to percentage level for UI progress bars
    const getLevel = (proficiency) => {
      if (proficiency === 'Advanced') return '95%';
      if (proficiency === 'Intermediate') return '80%';
      return '60%'; // For Beginners
    };

    // 3. Devicons link map system taaki icons broke na hon
    const getIconUrl = (name) => {
      const cleanName = name.toLowerCase().replace('.js', '').replace(' ', '');
      if (cleanName === 'html5&css3' || cleanName === 'html' || cleanName === 'css') {
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
      }
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${cleanName}/${cleanName}-original.svg`;
    };

    // 4. Group dynamic nodes into your exact custom 4 UI groups layout structure
    const categoriesTemplate = [
      {
        title: "Frontend Development",
        key: "Frontend",
        icon: <Layers className="w-5 h-5 text-cyan-500" />,
        accentColor: "from-cyan-500/20 to-blue-500/10",
        skills: []
      },
      {
        title: "Backend Architecture",
        key: "Backend",
        icon: <Cpu className="w-5 h-5 text-emerald-500" />,
        accentColor: "from-emerald-500/20 to-teal-500/10",
        skills: []
      },
      {
        title: "Databases & Storage",
        key: "Database",
        icon: <Database className="w-5 h-5 text-green-500" />,
        accentColor: "from-green-500/20 to-emerald-500/10",
        skills: []
      },
      {
        title: "Programming & Core Tools",
        key: "DevOps", // Connects to DevOps dropdown select option in Admin
        icon: <Terminal className="w-5 h-5 text-orange-500" />,
        accentColor: "from-orange-500/20 to-amber-500/10",
        skills: []
      }
    ];

    // Distribute skills into their respective UI display buckets
    rawSkills.forEach(item => {
      const targetGroup = categoriesTemplate.find(cat => cat.key === item.category);
      const skillNode = {
        name: item.name,
        level: getLevel(item.proficiency),
        icon: getIconUrl(item.name)
      };

      if (targetGroup) {
        targetGroup.skills.push(skillNode);
      } else {
        // Fallback catch (Default to core programming section if category mismatch)
        categoriesTemplate[3].skills.push(skillNode);
      }
    });

    // Only set categories that actually have skills inside them to keep UI clean
    setSkillCategories(categoriesTemplate.filter(c => c.skills.length > 0));

  }, []);

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6 md:px-16 overflow-hidden relative">
      
      {/* Immersive Background 3D Ambient Lights */}
      <div className="absolute top-1/3 left-[-5%] w-[450px] h-[450px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-[130px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-600 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider border border-cyan-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>MY SKILLS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            My Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Armory & Ecosystem
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            A comprehensive overview of technologies, libraries, and languages I use to construct high-performance digital products.
          </p>
        </div>

        {/* 3D Categorized Skills Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-100/80 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Soft decorative background glow pod on card hover */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${category.accentColor} rounded-full filter blur-2xl opacity-40 group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>

              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-800 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Stack Pod Grid */}
                <div className="space-y-5 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      
                      {/* Title & Level Wrapper */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2.5">
                          {/* Dynamic Tech Icon */}
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-5 h-5 object-contain filter drop-shadow-sm group-hover:rotate-12 transition-transform duration-300"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none'; // Fallback safely hides broken images
                            }}
                          />
                          <span className="text-sm font-bold text-slate-700 tracking-tight">{skill.name}</span>
                        </div>
                        <span className="text-xs font-black text-slate-400 font-mono bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                          {skill.level}
                        </span>
                      </div>

                      {/* Futuristic Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative p-[1px]">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: skill.level }}
                        />
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Footer Micro Message inside Section */}
        <div className="mt-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 font-bold tracking-wider uppercase bg-white border border-slate-100 py-2.5 px-6 rounded-full shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Always learning and adapting to newer industry frameworks</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;