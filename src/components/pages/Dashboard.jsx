// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import { Menu } from 'lucide-react';

const topLevelCardsData = [
  { title: 'Certificates Issued', value: '1,245', trend: '+12% this month' },
  { title: 'Pending Verifications', value: '78', trend: 'High Priority' },
  { title: 'New Universities', value: '5', trend: '+1 this week' },
  { title: 'Total Users', value: '8,500+', trend: 'Active' },
];

const recentCertificatesData = [
  { id: 'CERT-001', student: 'Alice Johnson', course: 'BSc Computer Science', date: '2023-10-26', status: 'Issued' },
  { id: 'CERT-002', student: 'Bob Williams', course: 'MA History', date: '2023-10-25', status: 'Issued' },
  { id: 'CERT-003', student: 'Charlie Davis', course: 'PhD Physics', date: '2023-10-24', status: 'Issued' },
  { id: 'CERT-004', student: 'Diana Miller', course: 'MBA Business Admin', date: '2023-10-23', status: 'Issued' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleViewAllCertificates = () => {
    navigate('/admin/history');
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="flex items-center justify-between mb-6 md:mb-10 border-b border-gray-200 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Dashboard Overview</h1>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {topLevelCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer"
            >
              <h3 className="text-sm font-semibold text-gray-500 mb-1">{card.title}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-1">{card.value}</p>
              <span className="text-xs font-medium text-gray-400">{card.trend}</span>
            </div>
          ))}
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Recently Issued Certificates</h2>
            <button
              onClick={handleViewAllCertificates}
              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 text-sm font-medium focus:outline-none"
              aria-label="View all issued certificates"
            >
              View All
            </button>
          </div>
          <ul className="divide-y divide-gray-200">
            {recentCertificatesData.map((cert) => (
              <li key={cert.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-1 mb-2 sm:mb-0">
                  <p className="font-semibold text-gray-900">{cert.student}</p>
                  <p className="text-sm text-gray-500">{cert.course} - <span className="font-medium">{cert.id}</span></p>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="mr-2">{cert.date}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {cert.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <button
              onClick={handleViewAllCertificates}
              className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              View All Certificates
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;