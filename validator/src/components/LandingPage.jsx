import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HowItWorks from './HowItWorks';

const LandingPage = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Set up the animation interval
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    onNavigate('login');
  };

  const handleVerifyNow = () => {
    onNavigate('verify');
  };

  const handleAdminLogin = () => {
    onNavigate('login');
  };

  const whyChooseFeatures = [
    {
      title: "Instant Verification",
      description: "Verify certificates in seconds with our advanced AI technology",
      icon: "⏱️",
      color: "bg-blue-50"
    },
    {
      title: "Fraud Detection",
      description: "Advanced algorithms detect even the most sophisticated forgeries",
      icon: "🔍",
      color: "bg-green-50"
    },
    {
      title: "Global Database",
      description: "Access to thousands of educational institutions worldwide",
      icon: "🌎",
      color: "bg-purple-50"
    },
    {
      title: "Secure Storage",
      description: "Bank-level encryption for all your verified documents",
      icon: "🔒",
      color: "bg-amber-50"
    }
  ];

  const powerfulFeatures = [
    {
      title: "Instant Verification",
      description: "Verify any certificate in seconds with our advanced AI-powered system.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      color: "from-blue-100 to-blue-50"
    },
    {
      title: "Fraud Prevention",
      description: "Advanced algorithms detect forged certificates and prevent fraud with 99.9% accuracy.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      color: "from-green-100 to-green-50"
    },
    {
      title: "Easy Management",
      description: "Comprehensive dashboard to manage all your certificates in one place with intuitive controls.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      color: "from-purple-100 to-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Valid8</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleAdminLogin}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Secure Certificate Verification & Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Verify academic credentials instantly with our AI-powered verification system. Prevent fraud and ensure authenticity with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={handleGetStarted}
                  className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Verifying Now
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Request a Demo
                </button>
              </div>
              
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Instant Verification</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">99.9% Accuracy</span>
                </div>
              </div>
            </div>
            
            {/* Animated mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 relative"
            >
              <div className="relative w-full max-w-md h-80 bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-300 p-6 overflow-hidden shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-700">certificate-verification.valid8</div>
                  <div className="w-6"></div>
                </div>
                
                <div className="flex">
                  <div className="w-1/3 pr-4">
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 mb-4 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-gray-700 text-sm">Upload Certificate</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 mb-4 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-gray-700 text-sm">Verification Process</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-gray-700 text-sm">Results</div>
                    </motion.div>
                  </div>
                  
                  <div className="w-2/3 bg-white/20 rounded-lg p-4 border border-gray-200">
                    <AnimatePresence mode="wait">
                      {activeStep === 0 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="h-48 flex flex-col items-center justify-center"
                        >
                          <motion.div 
                            className="w-16 h-16 mb-4 rounded-full bg-blue-500 flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          >
                            <span className="text-2xl">📄</span>
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Uploading Certificate</h3>
                          <p className="text-gray-600">Analyzing document structure...</p>
                        </motion.div>
                      )}
                      
                      {activeStep === 1 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="h-48 flex flex-col items-center justify-center"
                        >
                          <motion.div 
                            className="w-16 h-16 mb-4 rounded-full bg-green-500 flex items-center justify-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span className="text-2xl">🔍</span>
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Scanning Document</h3>
                          <p className="text-gray-600">Extracting text and security features...</p>
                        </motion.div>
                      )}
                      
                      {activeStep === 2 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="h-48 flex flex-col items-center justify-center"
                        >
                          <motion.div 
                            className="w-16 h-16 mb-4 rounded-full bg-purple-500 flex items-center justify-center"
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span className="text-2xl">🌐</span>
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Database Verification</h3>
                          <p className="text-gray-600">Cross-referencing with trusted sources...</p>
                        </motion.div>
                      )}
                      
                      {activeStep === 3 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="h-48 flex flex-col items-center justify-center"
                        >
                          <motion.div 
                            className="w-16 h-16 mb-4 rounded-full bg-yellow-500 flex items-center justify-center"
                            animate={{ 
                              y: [0, -10, 0],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span className="text-2xl">🔎</span>
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Security Check</h3>
                          <p className="text-gray-600">Validating holograms and watermarks...</p>
                        </motion.div>
                      )}
                      
                      {activeStep === 4 && (
                        <motion.div
                          key="step5"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="h-48 flex flex-col items-center justify-center"
                        >
                          <motion.div 
                            className="w-16 h-16 mb-4 rounded-full bg-green-500 flex items-center justify-center"
                            animate={{ 
                              scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <span className="text-2xl">✅</span>
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Verification Complete!</h3>
                          <p className="text-gray-600">Certificate authenticity confirmed</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around mockup */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Valid8 Section - First Container */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Valid8?</h2>
            <p className="text-xl text-gray-600">Our comprehensive solution helps you verify, issue, and manage certificates securely</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`${feature.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100`}
              >
                <motion.div 
                  className="text-4xl mb-6 flex justify-center"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Section - Second Container */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Certificate Verification</h2>
            <p className="text-xl text-gray-600">Our comprehensive solution helps you verify, issue, and manage certificates securely</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {powerfulFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`bg-gradient-to-b ${feature.color} rounded-2xl p-8 shadow-xl border border-gray-200`}
              >
                <motion.div 
                  className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center text-lg">{feature.description}</p>
                
                <motion.div 
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <button 
                    onClick={handleGetStarted}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Third Container */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <HowItWorks onNavigate={onNavigate} />
      </section>
      
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Valid8</span>
              </div>
              <p className="text-gray-400">Secure certificate verification and management platform.</p>
            </div>
            
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 Valid8. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const footerSections = [
  {
    title: "Product",
    links: [
      { text: "Features", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "API", href: "#" },
      { text: "Integrations", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { text: "Documentation", href: "#" },
      { text: "Guides", href: "#" },
      { text: "Support", href: "#" },
      { text: "Blog", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Contact", href: "#" },
      { text: "Partners", href: "#" }
    ]
  }
];

export default LandingPage;