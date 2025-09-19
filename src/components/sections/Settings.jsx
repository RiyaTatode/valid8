// src/components/Settings.jsx
import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar'; // Assuming Sidebar path

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const settingsTabs = [
    { id: 'general', title: 'General' },
    { id: 'security', title: 'Security' },
    { id: 'notifications', title: 'Notifications' },
    { id: 'billing', title: 'Billing' },
    { id: 'integrations', title: 'Integrations' }, // Added a new tab for example
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">General Settings</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-700 mb-4">University Profile</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">University Name</label>
                  <input type="text" id="universityName" defaultValue="Vali University" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700">Official Domain</label>
                  <input type="text" id="domain" defaultValue="valiuniversity.edu" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">Save Changes</button>
              </form>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Security</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Change Password</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                  <input type="password" id="currentPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                  <input type="password" id="newPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                  <input type="password" id="confirmPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">Update Password</button>
              </form>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Two-Factor Authentication</h3>
              <p className="text-gray-500 text-sm mb-4">Add an extra layer of security to your account.</p>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">Enable 2FA</button>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Email Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="email-certificate" name="email-certificate" type="checkbox" defaultChecked className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-certificate" className="font-medium text-gray-700">New Certificate Issued</label>
                    <p className="text-gray-500">Get an email whenever a new certificate is issued from your account.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="email-verification" name="email-verification" type="checkbox" defaultChecked className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-verification" className="font-medium text-gray-700">Verification Requests</label>
                    <p className="text-gray-500">Receive an email for every new certificate verification request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'billing':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Billing & Subscription</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Subscription Plan</h3>
              <p className="text-gray-500 mb-4">You are currently on the **Pro Plan**. It includes unlimited certificate issuance and 24/7 support.</p>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">Manage Plan</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Payment Information</h3>
              <p className="text-gray-500 mb-4">Payment method on file: Visa ending in 1234. Next billing date: November 15, 2025.</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">Update Payment Info</button>
            </div>
          </div>
        );
        case 'integrations':
          return (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Integrations</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Connect Third-Party Services</h3>
                <p className="text-gray-500 mb-4">Integrate with your favorite tools to streamline workflows.</p>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-700">Learning Management System (LMS)</span>
                  <button className="bg-indigo-500 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-600 transition-colors">Connect</button>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-700">Student Information System (SIS)</span>
                  <button className="bg-indigo-500 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-600 transition-colors">Connect</button>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-700">HR Software</span>
                  <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors">Configure</button>
                </div>
              </div>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="mb-6 md:mb-10 border-b border-gray-200 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and platform preferences.</p>
        </header>
        
        <div className="max-w-6xl mx-auto">
          {/* Top-level Horizontal Tabbed Navigation */}
          <div className="flex flex-nowrap overflow-x-auto gap-2 p-1 bg-gray-200 rounded-lg mb-8 shadow-inner">
            {settingsTabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          {/* Content Area */}
          <div>
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;