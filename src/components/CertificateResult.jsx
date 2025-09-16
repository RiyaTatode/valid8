import React from 'react';

const CertificateResult = ({ data, onBack }) => {
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
          Back to Verification
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Verification Result</h1>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${data.status === "Verified" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {data.status}
            </span>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Name</h3>
                <p className="text-lg font-semibold">{data.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Institution</h3>
                <p className="text-lg font-semibold">{data.institution}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Degree</h3>
                <p className="text-lg font-semibold">{data.degree}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Date Issued</h3>
                <p className="text-lg font-semibold">{data.dateIssued}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Certificate ID</h3>
                <p className="text-lg font-semibold">{data.certificateId}</p>
              </div>
            </div>
          </div>

          {data.status === "Verified" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-green-800 font-medium">Certificate Verified Successfully</h3>
                  <p className="text-green-700 mt-1">This certificate has been verified and is authentic.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-red-800 font-medium">Certificate Verification Failed</h3>
                  <p className="text-red-700 mt-1">This certificate could not be verified. Please check the details and try again.</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Download Report
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Verify Another Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateResult;