import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, 
  Send, Sparkles, MessageSquare, User, AtSign 
} from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  // Centralized submission handler managing both local animations and backend APIs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Submitting Form Data to API...", { name, email, message });
    
    try {
      // Direct API invocation inside the form lifecycle
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error('Network response returned an error status');
      }

      const result = await response.json();
      console.log('Message sent successfully:', result);
      
      // Notify user and empty input fields on clean success response
      alert("Message sent successfully to Abhitesh! 🚀");
      setName('');
      setEmail('');
      setMessage('');

    } catch (error) {
      console.error('Error sending message to server:', error);
      alert("Failed to send message. Please check if your backend server is online.");
    } finally {
      // Disables loading animations safely regardless of success or network failure
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16 px-6 md:px-16 overflow-hidden relative">
      
      {/* 3D Light Gradients */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[130px] opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-[450px] h-[450px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider border border-blue-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Let’s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Incredible Together
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Have a project in mind, a query, or just want to say hi? Drop a message below!
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-4 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <span>Send A Message</span>
              </h3>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Address</label>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Message</label>
                <textarea 
                  name="message"
                  value={message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="Hey Abhitesh, let's collaborate on a MERN project..." 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Cleaned submit button without duplicate handlers */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-600 hover:shadow-blue-100 transition-all duration-300 active:scale-98 group disabled:opacity-50"
              >
                <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isSubmitting ? 'animate-ping' : ''}`} />
                <span>{isSubmitting ? 'Sending...' : 'Shoot Message'}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              <a href="mailto:abhiteshkumar711@gmail.com" className="block group">
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Me</span>
                    <span className="text-sm md:text-base font-bold text-slate-800 break-all">abhiteshkumar711@gmail.com</span>
                  </div>
                </div>
              </a>

              <a href="tel:+919504939711" className="block group">
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Call Me</span>
                    <span className="text-sm md:text-base font-bold text-slate-800">+91 9504939711</span>
                  </div>
                </div>
              </a>

              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4 group transition-all duration-300 hover:shadow-md">
                <div className="p-3.5 bg-orange-50 text-orange-600 rounded-2xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm md:text-base font-bold text-slate-800">Noida, India</span>
                </div>
              </div>

            </div>

            {/* Social Grid */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 md:p-8 rounded-[2rem] shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-blue-500/20 rounded-full filter blur-3xl pointer-events-none"></div>
              
              <div className="text-left">
                <h4 className="text-lg font-black tracking-tight">Connect on Socials</h4>
                <p className="text-xs text-indigo-200/70 mt-1">Explore my repositories and professional network.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                
                <a 
                  href="https://github.com/abhitesh1311" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2.5 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-sm transform active:scale-95"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://linkedin.com/in/abhitesh-kumar-501052247" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2.5 bg-blue-600 border border-blue-500/30 p-4 rounded-2xl hover:bg-blue-500 transition-all duration-300 font-bold text-sm transform active:scale-95 text-white"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;