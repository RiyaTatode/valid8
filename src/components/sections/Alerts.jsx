// src/components/Alerts.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import { Menu } from 'lucide-react';



const alertsData = [
  {
    id: 1,
    type: 'warning',
    message: 'Certificate verification request for Student ID #2345 has been pending for over 72 hours.',
    date: '2023-10-26T10:30:00Z',
    status: 'pending',
  },
  {
    id: 2,
    type: 'info',
    message: 'A new feature, "AI-Powered Certificate Validator," is now live in your settings.',
    date: '2023-10-25T15:00:00Z',
    status: 'unread',
  },
  {
    id: 3,
    type: 'error',
    message: 'Failed to issue a certificate for John Doe due to an invalid student ID format.',
    date: '2023-10-24T09:00:00Z',
    status: 'resolved',
  },
  {
    id: 4,
    type: 'success',
    message: 'A batch of 50 certificates has been successfully issued. View details in the history tab.',
    date: '2023-10-23T18:45:00Z',
    status: 'read',
  },
  {
    id: 5,
    type: 'warning',
    message: 'An AI verification anomaly was detected on certificate #7890. Manual review is required.',
    date: '2023-10-22T11:00:00Z',
    status: 'pending',
  },
  {
    id: 6,
    type: 'info',
    message: 'System maintenance is scheduled for October 29th, 2023, from 1:00 AM to 3:00 AM UTC.',
    date: '2023-10-21T10:00:00Z',
    status: 'read',
  },
];

const Alerts = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // added
  const getIcon = (type) => {
    switch (type) {
      case 'warning':
        return (
          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.5-1.744 1.732-3.098l-6.928-12c-.772-1.344-2.692-1.344-3.464 0l-6.928 12c-.772 1.354.188 3.098 1.732 3.098z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'success':
        return (
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'unread':
        return 'bg-indigo-100 text-indigo-800';
      case 'read':
        return 'bg-gray-100 text-gray-600';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="flex items-center justify-between mb-6 md:mb-10 border-b border-gray-200 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Alert</h1>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </header>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {alertsData.map((alert) => (
              <li
                key={alert.id}
                className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 mr-4">
                  {getIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">{alert.message}</p>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
                    <span>{new Date(alert.date).toLocaleString()}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(alert.status)}`}>
                      {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {alert.status === 'unread' && (
                    <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full animate-pulse" title="New Alert"></span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Alerts;