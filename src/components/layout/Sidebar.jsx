// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  History,
  FilePlus,
  Bell,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

const navLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { to: '/admin/history', label: 'History', icon: <History size={20} /> },
  { to: '/admin/issue', label: 'Issue Certificates', icon: <FilePlus size={20} /> },
  { to: '/admin/alerts', label: 'Alerts', icon: <Bell size={20} />, badge: 3 },
  { to: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {/* Mobile Sidebar - Full-screen overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="w-64 bg-white h-full shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="p-6 flex items-center justify-between border-b border-gray-200">
                <span className="text-2xl font-bold text-indigo-600">Valid8</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <ul className="flex-1 py-4 space-y-2 px-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center py-3 px-4 rounded-lg text-gray-600 font-medium transition-colors hover:bg-gray-100 ${
                          isActive ? 'bg-indigo-50 text-indigo-700' : ''
                        }`
                      }
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="flex-shrink-0">{link.icon}</span>
                      <span className="ml-4 flex-1 whitespace-nowrap">{link.label}</span>
                      {link.badge && (
                        <span className="ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Sign Out Button */}
              <div className="p-4 border-t border-gray-200 flex-shrink-0">
                <button
                  onClick={() => console.log('Signing out...')}
                  className="w-full py-2 flex items-center justify-start text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut size={20} className="mr-2" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Sticky and part of the main layout flow */}
      <nav className="hidden md:flex flex-col flex-shrink-0 w-64 h-screen sticky top-0 bg-white shadow-xl">
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200 flex-shrink-0">
          <span className="text-2xl font-bold text-indigo-600">Valid8</span>
        </div>
        <div className="flex-1 py-4 overflow-y-auto overflow-x-hidden">
          <ul className="space-y-2 px-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center py-3 px-4 rounded-lg text-gray-600 font-medium transition-colors hover:bg-gray-100 ${
                      isActive ? 'bg-indigo-50 text-indigo-700' : ''
                    }`
                  }
                >
                  <span className="flex-shrink-0">{link.icon}</span>
                  <span className="ml-4 flex-1 whitespace-nowrap">{link.label}</span>
                  {link.badge && (
                    <span className="ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={() => console.log('Signing out...')}
            className="w-full py-2 flex items-center justify-start text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut size={20} className="mr-2" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;