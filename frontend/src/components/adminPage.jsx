import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FolderPlus, Award, Mail, LogOut, Loader2, Calendar, Link, Code2, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(true); // Loading state for messages
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  
  const navigate = useNavigate();

  // 1. Dynamic Backend Messages State
  const [messages, setMessages] = useState([]);
  
  // 2. Projects State - Initialized from localStorage if available
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    return savedProjects ? JSON.parse(savedProjects) : [
      {
        title: "Personal Portfolio Website",
        description: "A clean, modern minimal portfolio build featuring smooth glassmorphism design layouts.",
        tags: "React, Tailwind CSS, Lucide Icons",
        liveLink: "https://abhitesh.com",
        githubLink: "https://github.com"
      }
    ];
  });
  const [projectForm, setProjectForm] = useState({ title: '', description: '', tags: '', liveLink: '', githubLink: '' });
  
  // 3. Skills State - Initialized from localStorage if available
  const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem('portfolio_skills');
    return savedSkills ? JSON.parse(savedSkills) : [
      { name: 'React.js', category: 'Frontend', proficiency: 'Advanced' },
      { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'Advanced' },
      { name: 'Node.js', category: 'Backend', proficiency: 'Intermediate' },
      { name: 'MongoDB', category: 'Database', proficiency: 'Intermediate' }
    ];
  });
  const [skillForm, setSkillForm] = useState({ name: '', proficiency: 'Advanced', category: 'Frontend' });

  // --- API INTEGRATION: FETCH MESSAGES FROM BACKEND ---
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setIsFetchLoading(true);
        // Agar local token use kar rahe ho secure route ke liye toh use header me bhej sakte ho
       
        
        const response = await axios.get('http://localhost:5000/api/get/contact');
        
        // Agar response me seedha array hai toh direct set karo, nahi to response.data.messages check karo
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else if (response.data && Array.isArray(response.data.messages)) {
          setMessages(response.data.messages);
        }
      } catch (error) {
        console.error("Error fetching contact messages:", error);
        setStatusMessage({ type: 'error', text: 'Failed to sync backend inbox pipeline.' });
      } finally {
        setIsFetchLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Sync projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  // Sync skills to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/signin');
  };

  // Submit/Add Project
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    setTimeout(() => {
      setProjects([projectForm, ...projects]);
      setStatusMessage({ type: 'success', text: 'Project saved and synced successfully!' });
      setProjectForm({ title: '', description: '', tags: '', liveLink: '', githubLink: '' });
      setIsLoading(false);
    }, 600);
  };

  // Delete Project Handler
  const handleDeleteProject = (titleToDelete) => {
    if (window.confirm(`Are you sure you want to delete "${titleToDelete}"?`)) {
      const updatedProjects = projects.filter(proj => proj.title !== titleToDelete);
      setProjects(updatedProjects);
      setStatusMessage({ type: 'success', text: 'Project deleted and synced successfully!' });
    }
  };

  // Submit/Add Skill
  const handleSkillSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    setTimeout(() => {
      const existingSkillIndex = skills.findIndex(s => s.name.toLowerCase() === skillForm.name.toLowerCase());
      let updatedSkills = [...skills];
      
      if (existingSkillIndex > -1) {
        updatedSkills[existingSkillIndex] = skillForm;
        setSkills(updatedSkills);
        setStatusMessage({ type: 'success', text: 'Existing skill metrics updated and synced!' });
      } else {
        updatedSkills = [...skills, skillForm];
        setSkills(updatedSkills);
        setStatusMessage({ type: 'success', text: 'New skill node integrated and synced!' });
      }

      setSkillForm({ name: '', proficiency: 'Advanced', category: 'Frontend' });
      setIsLoading(false);
    }, 600);
  };

  // Delete Skill Handler
  const handleDeleteSkill = (skillNameToDelete) => {
    if (window.confirm(`Are you sure you want to delete the skill "${skillNameToDelete}"?`)) {
      const updatedSkills = skills.filter(skill => skill.name !== skillNameToDelete);
      setSkills(updatedSkills);
      setStatusMessage({ type: 'success', text: 'Skill removed from matrix and synced!' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-6">
        <div className="space-y-8">
          <div className="text-xl font-black text-slate-900 tracking-tight">
            Dashboard<span className="text-blue-600">.</span>
          </div>

          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => { setActiveTab('messages'); setStatusMessage({ type: '', text: '' }); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'messages' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Mail className="w-4 h-4" /> User Messages ({messages.length})
            </button>

            <button
              onClick={() => { setActiveTab('add-project'); setStatusMessage({ type: '', text: '' }); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'add-project' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <FolderPlus className="w-4 h-4" /> Projects Module ({projects.length})
            </button>

            <button
              onClick={() => { setActiveTab('update-skills'); setStatusMessage({ type: '', text: '' }); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'update-skills' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" /> Skills Matrix ({skills.length})
            </button>
          </nav>
        </div>

        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </aside>

      {/* Main Content Dashboard */}
      <main className="flex-1 p-10 max-w-5xl mx-auto overflow-y-auto">
        {statusMessage.text && (
          <div className={`mb-6 p-4 rounded-xl text-xs font-bold border ${
            statusMessage.type === 'success' ? 'bg-green-50 border-green-100 text-green-600' : 'bg-red-50 border-red-100 text-red-600'
          }`}>
            {statusMessage.text}
          </div>
        )}

        {/* TAB 1: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black text-slate-900">Inbox Messages</h2>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Real-time database records linked via dynamic contact pipeline.</p>
            </div>
            
            {isFetchLoading ? (
              // Loading Shimmer Effect
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-400">
                <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                <p className="text-xs font-semibold tracking-wide uppercase">Fetching live records...</p>
              </div>
            ) : messages.length === 0 ? (
              // Empty State
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
                <Mail className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-500">No messages found in database.</p>
              </div>
            ) : (
              // Active list
              <div className="grid gap-4">
                {messages.map((msg, index) => (
                  <div key={index} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{msg.name}</h4>
                        <p className="text-xs font-medium text-blue-600">{msg.email}</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : 'Recent'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'add-project' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 space-y-4">
                <div>
                  <h2 className="text-xl font-black text-slate-900">Add Project</h2>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">Inject dynamic entries directly into your tier.</p>
                </div>
                <form onSubmit={handleProjectSubmit} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Title</label>
                    <input type="text" required placeholder="E-Commerce System" value={projectForm.title} onChange={(e) => setProjectForm({...projectForm, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600 focus:bg-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Description</label>
                    <textarea rows="3" required placeholder="Short summary..." value={projectForm.description} onChange={(e) => setProjectForm({...projectForm, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600 focus:bg-white resize-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Tech Stack</label>
                    <input type="text" placeholder="React, Node, Mongo" value={projectForm.tags} onChange={(e) => setProjectForm({...projectForm, tags: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Live Demo Link</label>
                    <input type="url" placeholder="https://..." value={projectForm.liveLink} onChange={(e) => setProjectForm({...projectForm, liveLink: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">GitHub Link</label>
                    <input type="url" placeholder="https://github.com/..." value={projectForm.githubLink} onChange={(e) => setProjectForm({...projectForm, githubLink: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600" />
                  </div>
                  <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                    {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Render Project'}
                  </button>
                </form>
              </div>

              <div className="md:col-span-2 space-y-4">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Live Preview Track ({projects.length})</h3>
                <div className="grid gap-4">
                  {projects.map((proj, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-2 relative group">
                      <button 
                        onClick={() => handleDeleteProject(proj.title)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors duration-200"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <h4 className="font-bold text-slate-800 text-base pr-8">{proj.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tags.split(',').map((tag, tIdx) => (
                          <span key={tIdx} className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md">{tag.trim()}</span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-2 text-xs font-semibold text-slate-400">
                        {proj.liveLink && <a href={proj.liveLink} target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1"><Link className="w-3 h-3" /> Live Demo</a>}
                        {proj.githubLink && <a href={proj.githubLink} target="_blank" rel="noreferrer" className="hover:text-slate-900 flex items-center gap-1"><Code2 className="w-3 h-3" /> Codebase</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SKILLS */}
        {activeTab === 'update-skills' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 space-y-4">
                <div>
                  <h2 className="text-xl font-black text-slate-900">Manage Skills</h2>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">Inject performance attributes dynamically.</p>
                </div>
                <form onSubmit={handleSkillSubmit} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Skill Name</label>
                    <input type="text" required placeholder="Python, AWS" value={skillForm.name} onChange={(e) => setSkillForm({...skillForm, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Category</label>
                    <select value={skillForm.category} onChange={(e) => setSkillForm({...skillForm, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none">
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Database">Database</option>
                      <option value="DevOps">DevOps</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Proficiency</label>
                    <select value={skillForm.proficiency} onChange={(e) => setSkillForm({...skillForm, proficiency: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none">
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced / Expert</option>
                    </select>
                  </div>
                  <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                    {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Save Skill Node'}
                  </button>
                </form>
              </div>

              <div className="md:col-span-2 space-y-4">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Active Skill Stack Matrix</h3>
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm grid sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="border border-slate-100 bg-slate-50/50 p-3.5 rounded-xl flex justify-between items-center group relative">
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm">{skill.name}</h5>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{skill.category}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${
                          skill.proficiency === 'Advanced' ? 'bg-green-50 text-green-600' : skill.proficiency === 'Intermediate' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                        }`}>
                          {skill.proficiency}
                        </span>

                        <button
                          onClick={() => handleDeleteSkill(skill.name)}
                          className="text-slate-300 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors"
                          title="Delete Skill"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;