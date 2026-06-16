import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const AdminSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setError('');
    setIsLoading(true);

    try {
      // 1. Initiate backend API call
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const resData = await response.json();

      // 2. If the response status is not 200/201 (e.g., incorrect password)
      if (!response.ok) {
        throw new Error(resData.message || 'Incorrect email or password.');
      }

      // 3. On success, save the JWT token to localStorage
      if (resData.token) {
        localStorage.setItem('adminToken', resData.token);
      }

      console.log('Login Successful:', resData);
      
      // 4. ✅ Redirect to Dashboard only after successful validation
      navigate('/admin/dashboard'); 

    } catch (err) {
      // Handle and display error messages on the UI
      setError(err.message || 'Unable to connect to the server.');
    } finally {
      setIsLoading(false); // Turn off the loading spinner
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-6 relative font-sans">
      
      {/* Back to Home Button */}
      <NavLink 
        to="/" 
        className="absolute top-8 left-6 md:left-16 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </NavLink>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-100/50">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Admin Portal<span className="text-blue-600">.</span>
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">
            Please sign in to continue
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold animate-fade-in">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                Password
              </label>
              <a href="#forgot" className="text-xs font-bold text-blue-600 hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl pl-11 pr-12 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Sign In'
            )}
          </button>

        </form>
      </div>

      {/* Footer copyright */}
      <p className="text-xs text-slate-400 mt-8">
        &copy; {new Date().getFullYear()} Abhitesh. All rights reserved.
      </p>
    </div>
  );
};

export default AdminSignin;