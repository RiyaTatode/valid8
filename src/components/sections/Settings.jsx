// src/components/Settings.jsx
import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const settingsTabs = [
    { id: 'general', title: 'General', icon: (
      <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37.525.322 1.393.181 2.115-.466.722-.647 1.155-1.554 1.155-2.548z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
    { id: 'security', title: 'Security', icon: (
      <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 7h2v2h-2V7z" />
      </svg>
    )},
    { id: 'notifications', title: 'Notifications', icon: (
      <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    )},
    { id: 'billing', title: 'Billing', icon: (
      <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9m10 0a2 2 0 00-2-2H9a2 2 0 00-2 2m10 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-8-2h4m-4 0h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2m-8 2h4m-4 0h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
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
          {/* Top-level Horizontal Cards for Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {settingsTabs.map(tab => (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer transition-all duration-300
                  ${activeTab === tab.id ? 'ring-2 ring-indigo-500 shadow-lg' : 'hover:shadow-lg'}
                `}
              >
                {tab.icon}
                <span className={`text-lg font-medium ${activeTab === tab.id ? 'text-indigo-700' : 'text-gray-700'}`}>{tab.title}</span>
              </div>
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