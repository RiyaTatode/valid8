import React, { useState } from 'react';

const IssueCertificates = ({ onBack }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    degreeProgram: '',
    graduationDate: '',
    honors: '',
    issuingAuthority: ''
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
    // Handle form submission
    alert('Certificate issuance request submitted!');
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Issue New Certificate</h1>
          <p className="text-gray-600 mb-8">Fill out the form below to issue a new digital certificate.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                <input 
                  type="text" 
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                <input 
                  type="text" 
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  placeholder="Enter student ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Degree Program</label>
              <select 
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a degree program</option>
                <option value="bs-cs">Bachelor of Science in Computer Science</option>
                <option value="bs-ee">Bachelor of Science in Electrical Engineering</option>
                <option value="ba-eng">Bachelor of Arts in English</option>
                <option value="mba">Master of Business Administration</option>
                <option value="phd">Doctor of Philosophy</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Date</label>
                <input 
                  type="date" 
                  name="graduationDate"
                  value={formData.graduationDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Honors/Distinction</label>
                <select 
                  name="honors"
                  value={formData.honors}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">None</option>
                  <option value="cum-laude">Cum Laude</option>
                  <option value="magna-cum-laude">Magna Cum Laude</option>
                  <option value="summa-cum-laude">Summa Cum Laude</option>
                  <option value="with-distinction">With Distinction</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issuing Authority</label>
              <input 
                type="text" 
                name="issuingAuthority"
                value={formData.issuingAuthority}
                onChange={handleInputChange}
                placeholder="Enter name of issuing authority"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
              <div className="mx-auto w-16 h-16 mb-4">
                <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-gray-700 mb-2">Upload digital signature (optional)</p>
              <p className="text-gray-500 text-sm mb-4">Supported formats: PNG, JPG, SVG</p>
              <button type="button" className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Browse Files
              </button>
            </div>

            <div className="flex justify-end space-x-4">
              <button 
                type="button"
                onClick={onBack}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Issue Certificate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueCertificates;