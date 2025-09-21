// src/components/Settings.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import { Menu } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const settingsTabs = [
    { id: 'general', title: 'General' },
    { id: 'security', title: 'Security' },
    { id: 'notifications', title: 'Notifications' },
    { id: 'billing', title: 'Billing' },
    { id: 'integrations', title: 'Integrations' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">General Settings</h2>
            <div className="bg-white bg-white-800 p-6 rounded-xl border-white-100 border-white-700">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">University Profile</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="universityName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">University Name</label>
                  <input type="text" id="universityName" defaultValue="Vali University"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Official Domain</label>
                  <input type="text" id="domain" defaultValue="valiuniversity.edu"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-gray-100" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Save Changes</button>
              </form>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Security</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Change Password</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Current Password</label>
                  <input type="password" id="currentPassword" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">New Password</label>
                  <input type="password" id="newPassword" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Confirm New Password</label>
                  <input type="password" id="confirmPassword" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-gray-100" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Update Password</button>
              </form>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Two-Factor Authentication</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">Add an extra layer of security to your account.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Enable 2FA</button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Notifications</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Email Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="email-certificate" name="email-certificate" type="checkbox" defaultChecked className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-certificate" className="font-medium text-gray-700 dark:text-gray-200">New Certificate Issued</label>
                    <p className="text-gray-500 dark:text-gray-300">Get an email whenever a new certificate is issued from your account.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="email-verification" name="email-verification" type="checkbox" defaultChecked className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-verification" className="font-medium text-gray-700 dark:text-gray-200">Verification Requests</label>
                    <p className="text-gray-500 dark:text-gray-300">Receive an email for every new certificate verification request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Billing & Subscription</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Subscription Plan</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-4">You are currently on the **Pro Plan**. It includes unlimited certificate issuance and 24/7 support.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Manage Plan</button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Payment Information</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-4">Payment method on file: Visa ending in 1234. Next billing date: November 15, 2025.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Update Payment Info</button>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Integrations</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <span className="font-medium text-gray-700 dark:text-gray-200">Learning Management System (LMS)</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">Connect</button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <span className="font-medium text-gray-700 dark:text-gray-200">Student Information System (SIS)</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">Connect</button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <span className="font-medium text-gray-700 dark:text-gray-200">HR Software</span>
                <button className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">Configure</button>
              </div>
            </div>
          </div>
        );

      
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-10 border-b border-gray-200 dark:border-gray-700 pb-4">
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">Settings</h1>
    <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your account and platform preferences.</p>
  </div>

  <button
    onClick={() => setIsSidebarOpen(true)}
    className="absolute top-4 right-4 md:hidden p-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors"
    aria-label="Open navigation menu"
  >
    <Menu size={24} />
  </button>
</header>


        <div className="max-w-6xl mx-auto">
          <div className="flex flex-nowrap overflow-x-auto gap-2 p-1 bg-white-300 dark:bg-gray-800 rounded-lg mb-8">
            {settingsTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div>{renderTabContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
