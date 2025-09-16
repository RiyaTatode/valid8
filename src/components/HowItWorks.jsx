import React, { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Document Capture",
      description: "The user provides a certificate document, either by uploading a digital copy or taking a photo",
      image: "/api/placeholder/300/600",
      imageAlt: "Document capture interface"
    },
    {
      id: 2,
      title: "Quality Check",
      description: "Our system automatically checks the document quality and ensures it's readable",
      image: "/api/placeholder/300/600",
      imageAlt: "Quality check interface"
    },
    {
      id: 3,
      title: "OCR Extraction",
      description: "Advanced OCR technology extracts all relevant information from the certificate",
      image: "/api/placeholder/300/600",
      imageAlt: "OCR extraction interface"
    },
    {
      id: 4,
      title: "Authenticity Check",
      description: "We verify security features, signatures, and document authenticity markers",
      image: "/api/placeholder/300/600",
      imageAlt: "Authenticity check interface"
    },
    {
      id: 5,
      title: "Cross-Verification",
      description: "The system cross-references with institutional databases and previous records",
      image: "/api/placeholder/300/600",
      imageAlt: "Cross-verification interface"
    },
    {
      id: 6,
      title: "Verification Decision",
      description: "Instant results with detailed verification report and confidence scoring",
      image: "/api/placeholder/300/600",
      imageAlt: "Verification results interface"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Rounded Rectangle */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-xl text-gray-600">Verification in just 6 easy steps</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Steps List - Left Column */}
          <div className="space-y-6 lg:col-span-1">
            {steps.slice(0, 3).map((step, index) => (
              <div 
                key={step.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activeStep === index ? 'bg-blue-700' : 'bg-blue-100'
                  }`}>
                    <span className={`text-lg font-bold ${
                      activeStep === index ? 'text-white' : 'text-blue-600'
                    }`}>
                      {step.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeStep === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={activeStep === index ? 'text-blue-100' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </div>
                  {activeStep === index && (
                    <div className="ml-auto">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Visual - Centered with dots below */}
          <div className="flex flex-col items-center justify-center lg:col-span-1 order-first lg:order-none mb-8 lg:mb-0">
            <div className="w-80 mb-8">
              {/* Mobile Frame */}
              <div className="relative bg-gray-900 rounded-4xl p-4 shadow-2xl">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-lg"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                
                {/* Mobile Screen */}
                <div className="bg-white rounded-3xl overflow-hidden h-[600px] flex flex-col">
                  {/* Mobile Status Bar */}
                  <div className="bg-blue-600 text-white p-4 text-center relative">
                    <span className="text-sm font-medium">Valid8</span>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 极 01-1 1H3a1 1 0 01-1-1v-5z" />
                        <path d="M8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7z" />
                        <path d="M14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 极 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Dynamic Content Based on Step */}
                  <div className="flex-1 p-6 overflow-y-auto">
                    {activeStep === 0 && (
                      <div className="text-center h-full flex flex-col justify-between">
                        <div>
                          <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Capture Document</h3>
                          <p className="text-gray-600 mb-6">Take a photo or upload your certificate</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-5 mb-6">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
                            <svg className="w-14 h-14 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13极-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-sm text-gray-500">Tap to upload or take photo</p>
                          </div>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium text-lg">
                          Capture Document
                        </button>
                      </div>
                    )}
                    
                    {activeStep === 1 && (
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Check</h3>
                        <p className="text-gray-600 text-base mb-6">Checking document quality and readability</p>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                          <div className="bg-yellow-500 h-3 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <div className="text-sm text-gray-500">Ensuring optimal quality for verification</div>
                      </div>
                    )}
                    
                    {activeStep === 2 && (
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" view极="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">OCR Extraction</h3>
                        <p className="text-gray-600 text-base mb-6">Extracting text and data from your document</p>
                        <div className="bg-gray-100 rounded-xl p-4 text-left mb-6">
                          <div className="text-sm text-gray-700 space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">Name:</span>
                              <span>John Doe</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Institution:</span>
                              <span>Stanford University</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Degree:</span>
                              <span>Computer Science</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Issue Date:</span>
                              <span>May 15, 2023</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-purple-500 h-3 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 3 && (
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Authenticity Check</h3>
                        <p className="text-gray-600 text-base mb-6">Verifying security features and signatures</p>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {['Security Patterns', 'Holograms', 'Signatures', 'Watermarks'].map((item, idx) => (
                            <div key={idx} className="bg-gray-100 rounded-xl p-3 text-center">
                              <div className="w-8 h-8 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-2">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-base text-green-600 font-medium">All security features verified</div>
                      </div>
                    )}
                    
                    {activeStep === 4 && (
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Verification</h3>
                        <p className="text-gray-600 text-base mb-6">Checking against institutional databases</p>
                        <div className="space-y-4 mb-6">
                          {['University Database', 'Previous Records', 'Issuer Validation', 'Timestamp Check'].map((item, idx) => (
                            <div key={idx} className="flex items-center bg-gray-100 rounded-xl p-3">
                              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">Connecting to secure databases...</div>
                      </div>
                    )}
                    
                    {activeStep === 5 && (
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c极 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016极" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification Complete</h3>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
                          <div className="flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-green-800 font-medium text-lg">Certificate Verified</span>
                          </div>
                          <p className="text-base text-green-700 mt-2">This certificate is authentic and valid</p>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-base font-medium">
                          View Detailed Report
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl text-base font-medium mt-3">
                          Verify Another
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step Indicator - Below the mobile device */}
            <div className="flex justify-center space-x-3 mb-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeStep === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Steps List - Right Column */}
          <div className="space-y-6 lg:col-span-1">
            {steps.slice(3).map((step, index) => (
              <div 
                key={step.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === index + 3
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                onClick={() => setActiveStep(index + 3)}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activeStep === index + 3 ? 'bg-blue-700' : 'bg-blue-100'
                  }`}>
                    <span className={`text-lg font-bold ${
                      activeStep === index + 3 ? 'text-white' : 'text-blue-600'
                    }`}>
                      {step.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeStep === index + 3 ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={activeStep === index + 3 ? 'text-blue-100' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </div>
                  {activeStep === index + 3 && (
                    <div className="ml-auto">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;