// src/components/Signin.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, UserCircle } from 'lucide-react';

const Signin = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signin form submitted.');
    
    // Programmatically navigate to the dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Link 
        to="/"
        className="absolute top-6 left-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 m-4">
        <div className="text-center mb-6">
          <UserCircle className="mx-auto w-16 h-16 text-blue-500 mb-2" strokeWidth={1} />
          <h1 className="text-2xl font-bold text-slate-800">Admin Sign In</h1>
          <p className="text-slate-500 text-sm">Enter any credentials to proceed.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Email address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              defaultValue="admin@test.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1">Password</label>
            <input 
              type="password" 
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              defaultValue="password"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-slate-500">
            This is a simulated Signin for testing purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;