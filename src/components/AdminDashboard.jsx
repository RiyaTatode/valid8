import React from 'react';

const AdminDashboard = ({ onLogout, onChangeView }) => {
  const alerts = [
    {
      id: 1,
      priority: 'high',
      name: 'John Doe',
      certificateId: '#12345',
      institution: 'University of Example',
      detected: '2 hours ago',
      reason: 'Signature Mismatch'
    },
    {
      id: 2,
      priority: 'medium',
      name: 'Jane Smith',
      certificateId: '#67890',
      institution: 'Tech Institute',
      detected: '1 day ago',
      reason: 'Unverified Institution'
    },
    {
      id: 3,
      priority: 'medium',
      name: 'Peter Jones',
      certificateId: '#54321',
      institution: 'Online University',
      detected: '3 days ago',
      reason: 'Template Anomaly'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin. Here's what's happening.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onChangeView('verify')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Verify Certificate
            </button>
            <button 
              onClick={() => onChangeView('issue')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Issue Certificates
            </button>
            <button 
              onClick={onLogout}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg font-medium"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Alert Management Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Alert Management for Forged Certificates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alerts.map(alert => (
              <div key={alert.id} className={`rounded-xl shadow-md p-6 ${alert.priority === 'high' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'}`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${alert.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {alert.priority === 'high' ? 'High Priority' : 'Medium Priority'} Alert
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{alert.name} - {alert.certificateId}</h3>
                <p className="text-gray-700 mb-2">{alert.institution}</p>
                <p className="text-sm text-gray-500 mb-3">Detected: {alert.detected}</p>
                <p className="text-sm font-medium">Reason: {alert.reason}</p>
                
                <div className="flex mt-4 space-x-3">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Review Details
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View All Reports
            </button>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">System Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-700">542</p>
              <p className="text-gray-600">Certificates Verified</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-700">128</p>
              <p className="text-gray-600">Certificates Issued</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-yellow-700">23</p>
              <p className="text-gray-600">Pending Reviews</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-red-700">8</p>
              <p className="text-gray-600">Forged Detected</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;