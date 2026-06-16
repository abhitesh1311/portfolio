import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react'; // Admin के लिए Lock आइकॉन भी ऐड कर दिया है

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // नेविगेशन लिंक्स का ऐरे
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100/50 px-6 md:px-16 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-black text-slate-900 tracking-tight select-none">
        Abhitesh<span className="text-blue-600">.</span>
      </NavLink>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative py-1 transition-colors hover:text-slate-900 ${
                isActive ? 'text-blue-600 font-bold' : ''
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                {/* एक्टिव लिंक के नीचे ब्लू बार इंडिकेटर */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full animate-fade-in" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Desktop Buttons (Hire Me & Admin Signin) */}
      <div className="hidden md:flex items-center gap-4">
        {/* Admin Signin Button */}
        <NavLink to="/admin/signin">
          <button className="flex items-center gap-1.5 border border-slate-200 text-slate-700 px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-95">
            <Lock className="w-3.5 h-3.5" />
            Admin
          </button>
        </NavLink>

        {/* Hire Me Button */}
        <NavLink to="/contact">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md shadow-blue-100 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
            Hire Me ↗
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden p-1 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Menu Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl md:hidden animate-slide-down">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // लिंक क्लिक होते ही मेनू बंद हो जाए
              className={({ isActive }) =>
                `text-base font-bold py-2 transition-colors ${
                  isActive ? 'text-blue-600 pl-2 border-l-4 border-blue-600' : 'text-slate-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <hr className="border-slate-100 my-2" /> {/* एक हल्की लाइन सेपरेट करने के लिए */}

          {/* Mobile Admin Signin Button */}
          <NavLink to="/admin/signin" onClick={() => setIsOpen(false)}>
            <button className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-bold hover:bg-slate-50">
              <Lock className="w-4 h-4" />
              Admin Signin
            </button>
          </NavLink>

          {/* Mobile Hire Me Button */}
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-100">
              Hire Me ↗
            </button>
          </NavLink>
        </div>
      )}

    </nav>
  );
};

export default Navbar;