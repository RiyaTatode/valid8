import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserCircle } from 'lucide-react'; // Using icons for a cleaner look

const Login = () => {

  // This function now just logs the submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    console.log('Login form submitted with any credentials.');
    // Navigation has been removed as requested.
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* The "Back" button is now a Link component for declarative navigation */}
      <Link 
        to="/"
        className="absolute top-6 left-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 m-4">
        <div className="text-center mb-8">
          <UserCircle className="mx-auto w-16 h-16 text-blue-500 mb-4" strokeWidth={1} />
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Sign In</h1>
          <p className="text-slate-500">Enter any credentials to proceed.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Email address</label>
            <input 
              type="email" 
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              defaultValue="admin@test.com" // Default value for convenience
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              defaultValue="password" // Default value for convenience
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            This is a simulated login for testing purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

