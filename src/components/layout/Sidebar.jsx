// src/components/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // ✅ useNavigate import
import {
  LayoutDashboard,
  History,
  FilePlus,
  Bell,
  Settings,
  LogOut,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { to: '/admin/history', label: 'History', icon: <History size={20} /> },
  { to: '/admin/issue', label: 'Issue Certificates', icon: <FilePlus size={20} /> },
  { to: '/admin/alerts', label: 'Alerts', icon: <Bell size={20} />, badge: 3 },
  { to: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate(); // ✅ navigate hook

  const handleLogout = () => {
    // 🔹 Yaha pe agar auth data store hai to clear kar do
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // 🔹 Landing page "/" pe redirect
    navigate("/");
  };

  return (
    <>
      {/* Mobile Sidebar - Full-screen overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-lg md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-full max-w-xs bg-white p-6 shadow-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-blue-600">Valid8</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center py-3 px-4 rounded-lg font-medium transition-colors ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700'
                            : 'text-gray-600 hover:bg-gray-100'
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

              {/* Mobile Sign Out Button */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex-shrink-0">
                <button
                  onClick={handleLogout}
                  className="w-full py-2 flex items-center justify-start text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut size={20} className="mr-2" />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col flex-shrink-0 w-64 h-screen sticky top-0 bg-white shadow-xl">
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200 flex-shrink-0">
          <span className="text-2xl font-bold text-blue-600">Valid8</span>
        </div>
        <div className="flex-1 py-4 overflow-y-auto overflow-x-hidden">
          <ul className="space-y-2 px-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
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

        {/* Desktop Sign Out */}
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={handleLogout}
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
