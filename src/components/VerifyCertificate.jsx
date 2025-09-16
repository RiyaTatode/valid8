import React, { useState } from 'react';

const VerifyCertificate = ({ onVerification, onBack }) => {
  const [verificationMethod, setVerificationMethod] = useState('upload');
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    graduationDate: '',
    certificateId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate verification process
    const mockResult = {
      status: "Verified",
      name: formData.name || "Ethan Harper",
      institution: formData.institution || "University of Springfield",
      degree: "Bachelor of Science in Computer Science",
      dateIssued: formData.graduationDate || "May 20, 2023",
      certificateId: formData.certificateId || "C-123-456-789"
    };
    onVerification(mockResult);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Certificate</h1>
          <p className="text-gray-600 mb-8">Upload a certificate or enter the details manually to verify its authenticity.</p>

          <div className="flex space-x-4 mb-8">
            <button 
              onClick={() => setVerificationMethod('upload')}
              className={`px-6 py-3 rounded-lg font-medium ${verificationMethod === 'upload' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Upload Certificate
            </button>
            <button 
              onClick={() => setVerificationMethod('manual')}
              className={`px-6 py-3 rounded-lg font-medium ${verificationMethod === 'manual' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Manual Entry
            </button>
          </div>

          {verificationMethod === 'upload' ? (
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center mb-8">
              <div className="mx-auto w-16 h-16 mb-4">
                <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-gray-700 mb-2">Drag and drop or browse to upload</p>
              <p className="text-gray-500 text-sm mb-4">Supported formats: PDF, JPG, PNG</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Browse Files
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                <input 
                  type="text" 
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  placeholder="Enter institution name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Date</label>
                <input 
                  type="text" 
                  name="graduationDate"
                  value={formData.graduationDate}
                  onChange={handleInputChange}
                  placeholder="MM/DD/YYYY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Certificate ID</label>
                <input 
                  type="text" 
                  name="certificateId"
                  value={formData.certificateId}
                  onChange={handleInputChange}
                  placeholder="Enter certificate ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
          )}

          <div className="flex justify-end">
            <button 
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Verify Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;