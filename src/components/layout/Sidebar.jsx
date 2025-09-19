// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { to: '/admin/dashboard', label: 'Dashboard' },
    { to: '/admin/history', label: 'History' },
    { to: '/admin/issue', label: 'Issue Certificates' },
    { to: '/admin/alerts', label: 'Alerts', badge: 3 },
    { to: '/admin/settings', label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-md transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64 w-64 bg-white shadow-xl md:shadow-none z-50 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">Valid8</span>
        </div>
        <ul className="flex-1 py-4 space-y-2 px-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg text-gray-600 font-medium transition-colors hover:bg-gray-100 ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : ''
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="flex-1">{link.label}</span>
                {link.badge && (
                  <span className="ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-4 border-t border-gray-200">
          <button className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
            Sign Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;