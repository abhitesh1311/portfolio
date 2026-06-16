import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminSignin from './components/adminLogin';
import AdminPage from './components/adminPage';

// Helper component to scroll the window to the top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Smooth scrolling animation transitions
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col justify-between">
      
      {/* Scroll trigger reset hook */}
      <ScrollToTop />

      {/* Global Glassmorphic Navbar */}
      <Navbar />

      {/* React Router Routes */}
      <main className="flex-grow">
        <Routes>
          {/* Main Root Path - Now ONLY loads the Home / Hero component */}
          <Route path="/" element={<Home />} />
          
          {/* Separate Individual Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
          {/* 404 Fallback - Redirects broken URLs back to the Home component */}
          <Route path="*" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}

export default App;