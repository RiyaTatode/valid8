import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react'; // Using a simple, effective icon

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <Frown className="w-24 h-24 text-blue-400 mb-6" strokeWidth={1.5} />
      <h1 className="text-6xl font-bold text-slate-800 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-500 max-w-sm mb-8">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;