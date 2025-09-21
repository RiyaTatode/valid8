// src/components/IssueCertificates.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import { Menu } from 'lucide-react';


const IssueCertificates = () => {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setMode(null);
    setSelectedFile(null); // Reset file selection on back
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleManualSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Manual entry submitted:', data);
    console.log('Certificate issuance request submitted!');
    setStep(1);
  };

  const handleBulkUploadSubmit = () => {
    if (selectedFile) {
      console.log('Bulk upload initiated. File:', selectedFile);
      // TODO: Add logic to process the uploaded file (e.g., send to backend)
      console.log('File uploaded successfully!');
      setSelectedFile(null); // Clear file state after submission
      setStep(1); // Return to the start
    } else {
      alert('Please select a file to upload.');
    }
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div 
            onClick={() => handleModeSelect('manual')}
            className="flex flex-1 flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <svg className="w-16 h-16 text-blue-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">Manual / Single Entry</h3>
            <p className="text-sm text-gray-500 text-center">Fill out a form for a single certificate.</p>
          </div>
          <div 
            onClick={() => handleModeSelect('bulk')}
            className="flex flex-1 flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <svg className="w-16 h-16 text-blue-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">Bulk Upload</h3>
            <p className="text-sm text-gray-500 text-center">Upload a CSV or JSON file with multiple entries.</p>
          </div>
        </div>
      );
    }
    
    if (step === 2 && mode === 'manual') {
      return (
        <form onSubmit={handleManualSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
              <input 
                type="text" 
                id="studentName"
                name="studentName"
                placeholder="Enter full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
              <input 
                type="text" 
                id="studentId"
                name="studentId"
                placeholder="Enter student ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="degreeProgram" className="block text-sm font-medium text-gray-700 mb-2">Degree Program</label>
            <select 
              id="degreeProgram"
              name="degreeProgram"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
              <label htmlFor="graduationDate" className="block text-sm font-medium text-gray-700 mb-2">Graduation Date</label>
              <input 
                type="date" 
                id="graduationDate"
                name="graduationDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="honors" className="block text-sm font-medium text-gray-700 mb-2">Honors/Distinction</label>
              <select 
                id="honors"
                name="honors"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
            <label htmlFor="issuingAuthority" className="block text-sm font-medium text-gray-700 mb-2">Issuing Authority</label>
            <input 
              type="text" 
              id="issuingAuthority"
              name="issuingAuthority"
              placeholder="Enter name of issuing authority"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              required
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button 
              type="button"
              onClick={handleBack}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Issue Certificate
            </button>
          </div>
        </form>
      );
    }
    
    if (step === 2 && mode === 'bulk') {
      return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Bulk Upload</h3>
          <p className="text-gray-500 mb-6">
            Select a file to upload. Supported formats: <span className="font-semibold text-gray-700">.csv, .json, .xlsx</span>.
          </p>
          <div 
            onClick={() => fileInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center flex flex-col items-center cursor-pointer hover:border-indigo-400 transition-colors"
          >
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            {selectedFile ? (
              <p className="text-indigo-600 font-medium mb-2">{selectedFile.name}</p>
            ) : (
              <p className="text-gray-700 mb-2">
                <span className="font-medium text-indigo-600 hover:underline">Click to upload</span> or drag and drop
              </p>
            )}
            <p className="text-gray-500 text-sm">Max file size: 10MB</p>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
              accept=".csv, .json, .xlsx"
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200 mt-6">
            <button 
              type="button"
              onClick={handleBack}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              Back
            </button>
            <button 
              type="button"
              onClick={handleBulkUploadSubmit}
              disabled={!selectedFile}
              className={`px-8 py-3 rounded-lg font-medium transition-colors shadow-lg ${
                selectedFile ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Upload & Process
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="flex items-center justify-between mb-6 md:mb-10 border-b border-gray-200 pb-4">
          {step > 1 && (
            <button 
              onClick={handleBack}
              className="flex items-center text-gray-500 hover:text-gray-700 transition-colors mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Issue New Certificate</h1>
          
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
          {renderStepContent()}
        </div>
      </main>
    </div>
  );
};

export default IssueCertificates;