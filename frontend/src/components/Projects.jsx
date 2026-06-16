import React, { useState, useEffect } from 'react';
import { Sparkles, ExternalLink, FolderGit2, Layers } from 'lucide-react';

const Projects = () => {
  // Dynamic list state for projects
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // 1. Admin Dashboard se saved data read karna
    const savedProjects = localStorage.getItem('portfolio_projects');
    const dynamicProjects = savedProjects ? JSON.parse(savedProjects) : [];

    // 2. Base Default Projects (Fallback system)
    const defaultProjects = [
      {
        title: "Food Delivery Application",
        category: "Full Stack / MERN",
        description: "A comprehensive food ordering and delivery ecosystem featuring real-time cart management, secure checkout, dynamic restaurant listings, and an interactive tracking interface for users.",
        tech: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        liveLink: "https://example.com", 
        githubLink: "https://github.com/abhitesh1311",
        accent: "from-orange-500/20 to-amber-500/10",
        tagColor: "text-orange-600 bg-orange-50 border-orange-100"
      },
      {
        title: "Teacher Management System",
        category: "Web Application",
        description: "An institutional portal designed to streamline faculty workflows. Includes modules for automated attendance, academic scheduling, performance grading metrics, and direct communication channels.",
        tech: ["React.js", "Node.js", "MongoDB", "Mongoose", "Context API"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/abhitesh1311",
        accent: "from-blue-500/20 to-indigo-500/10",
        tagColor: "text-blue-600 bg-blue-50 border-blue-100"
      },
      {
        title: "Real-Estate ERP Management",
        category: "Enterprise Software",
        description: "An advanced ERP platform built for property developers to manage real-estate portfolios, capture prospective leads, track customer site visits, and handle digital payment invoices effortlessly.",
        tech: ["React.js", "Java", "MongoDB", "Tailwind CSS", "Cloudinary"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/abhitesh1311",
        accent: "from-purple-500/20 to-pink-500/10",
        tagColor: "text-purple-600 bg-purple-50 border-purple-100"
      },
      {
        title: "MBBS Adda (Course Selling Platform)",
        category: "E-Learning / EdTech",
        description: "A specialized commercial learning ecosystem for medical students. Engineered with secure video streaming for lectures, integrated payment gateways for premium test series, and a dedicated peer discussion forum.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay SDK"],
        liveLink: "https://example.com",
        githubLink: "https://github.com/abhitesh1311",
        accent: "from-emerald-500/20 to-teal-500/10",
        tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100"
      }
    ];

    // UI Glow & Badge Design presets for newly created projects
    const designPresets = [
      { accent: "from-blue-500/20 to-indigo-500/10", tag: "text-blue-600 bg-blue-50 border-blue-100" },
      { accent: "from-emerald-500/20 to-teal-500/10", tag: "text-emerald-600 bg-emerald-50 border-emerald-100" },
      { accent: "from-purple-500/20 to-pink-500/10", tag: "text-purple-600 bg-purple-50 border-purple-100" },
      { accent: "from-orange-500/20 to-amber-500/10", tag: "text-orange-600 bg-orange-50 border-orange-100" }
    ];

    // 3. Admin Panel projects ko elegant format mein map karna
    const formattedDynamicProjects = dynamicProjects.map((proj, idx) => {
      const style = designPresets[idx % designPresets.length];
      return {
        title: proj.title,
        category: "Production Code",
        description: proj.description,
        // Comma separated tags ko dynamically array pills mein badalna
        tech: proj.tags ? proj.tags.split(',').map(t => t.trim()).filter(Boolean) : ["React.js"],
        liveLink: proj.liveLink || "#",
        githubLink: proj.githubLink || "#",
        accent: style.accent,
        tagColor: style.tag
      };
    });

    // 4. Dono custom lists ko merge karna (Admin panel projects hamesha pehle top par aayenge)
    // Filter lagaya hai taaki agar same title ka local storage mein ho toh default duplicate na ho
    const filteredDefaults = defaultProjects.filter(
      defProj => !formattedDynamicProjects.some(dynProj => dynProj.title.toLowerCase() === defProj.title.toLowerCase())
    );

    setProjectData([...formattedDynamicProjects, ...filteredDefaults]);

  }, []);

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6 md:px-16 overflow-hidden relative">
      
      {/* 3D Ambient Lighting Glow Background Elements */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[130px] opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-[450px] h-[450px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider border border-blue-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>MY WORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Innovative Projects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Built From Scratch
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Explore a curated selection of web applications, enterprise solutions, and full-stack architectures engineered using modern development workflows.
          </p>
        </div>

        {/* 3D Glassmorphic Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectData.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-6 md:p-8 relative overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_rgba(99,102,241,0.08)] hover:-translate-y-1.5"
            >
              {/* Soft Ambient Radial Backdrop Glow on Hover */}
              <div className={`absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br ${project.accent} rounded-full filter blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>

              {/* Upper Section Meta Details */}
              <div className="relative z-10 space-y-4">
                
                {/* Meta Category Tag & Icon Badge */}
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full border ${project.tagColor}`}>
                    {project.category}
                  </span>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100/80 text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Main Title */}
                <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description Paragraph */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Tech Stack Array Pills Layout */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((techItem, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-xl transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Interactive Action Buttons Wrapper */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-slate-100 relative z-10">
                
                {/* GitHub Code Repository Button */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 transform active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Source Code</span>
                </a>

                {/* Live Demo Deploy Application Link */}
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs shadow-md shadow-blue-100 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform active:scale-95 group"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

              </div>

            </div>
          ))}
        </div>

        {/* Global Footer Architectural Progress Tag */}
        <div className="mt-16 text-center relative z-10">
          <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 font-bold tracking-wider uppercase bg-white border border-slate-100 py-3 px-6 rounded-full shadow-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>More production setups are actively being updated on GitHub</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;