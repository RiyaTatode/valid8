import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import {
  UploadCloud,
  ScanLine,
  DatabaseZap,
  ShieldPlus,
  CheckCircle2,
  Loader,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Custom hook to animate a number counting up
function useAnimatedCounter(to) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const controls = animate(0, to, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate(latest) {
                setValue(parseFloat(latest.toFixed(1)));
            }
        });
        return () => controls.stop();
    }, [to]);
    return value;
}


 const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const animatedScore = useAnimatedCounter(activeStep === 3 ? 99.8 : 0);

  const steps = [
    {
      icon: <UploadCloud size={24} className="text-blue-600" />,
      title: '1. Secure Upload',
      description: 'Begin by uploading a digital copy of the certificate or taking a clear photo.',
      visual: (
        <div className="text-center p-4">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <UploadCloud className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1} />
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Drag & Drop Your File</h3>
          <p className="text-gray-500 mb-4 text-sm">or click to browse your computer</p>
          <div className="bg-gray-100 rounded-lg p-2 text-xs text-gray-500">Supports PDF, JPG, PNG</div>
        </div>
      ),
    },
    {
      icon: <ScanLine size={24} className="text-blue-600" />,
      title: '2. AI-Powered Analysis',
      description: 'Our AI scans the document, extracting text and identifying key security features.',
      visual: (
        <div className="text-center p-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          >
            <Loader className="w-16 h-16 text-blue-500 mx-auto mb-4" strokeWidth={1.5} />
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Analyzing Document...</h3>
          <p className="text-gray-500 mb-4 text-sm">Extracting text and verifying signatures.</p>
           <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full" 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: <DatabaseZap size={24} className="text-blue-600" />,
      title: '3. Cross-Verification',
      description: 'Data is cross-referenced against our global network of institutional databases.',
      visual: (
         <motion.div 
            className="text-left p-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
         >
           <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Cross-Referencing Data</h3>
           <motion.ul 
            className="space-y-3 text-sm"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
           >
            <motion.li variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>University Database Match</span></motion.li>
            <motion.li variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>Issuer Signature Validated</span></motion.li>
            <motion.li variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /><span>No Previous Fraud Flags</span></motion.li>
            <motion.li variants={{hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}} className="flex items-center gap-3 text-gray-400"><Loader className="w-5 h-5 animate-spin" /><span>Timestamp Check...</span></motion.li>
           </motion.ul>
        </motion.div>
      ),
    },
    {
      icon: <ShieldPlus size={24} className="text-blue-600" />,
      title: '4. Instant Results',
      description: 'Receive a clear, concise verification report in seconds with an authenticity score.',
      visual: (
        <div className="text-center p-4">
          <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Certificate Verified</h3>
          <p className="text-gray-500 mb-4 text-sm">This document is confirmed as authentic.</p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-sm text-green-700 font-medium">Authenticity Score: {animatedScore}%</div>
        </div>
      ),
    },
  ];
  
  const changeStep = (direction) => {
      setActiveStep(prev => {
          const newStep = prev + direction;
          if (newStep < 0) return steps.length - 1;
          if (newStep >= steps.length) return 0;
          return newStep;
      });
  };

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            A powerful, transparent, and user-friendly verification process from start to finish.
          </p>
        </div>

        {/* --- DESKTOP TAB LAYOUT --- */}
        {/* The parent container sets the alignment context */}
        <div className="hidden lg:flex justify-center">
          <div className="grid grid-cols-12 gap-8 w-full max-w-6xl items-center">
              {/* Left Column: Step Selectors (more compact) */}
              <div className="col-span-5 flex flex-col gap-3 justify-center">
                  {steps.map((step, index) => (
                  <motion.div
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`p-4 rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                      activeStep === index
                          ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10'
                          : 'bg-white border-transparent hover:border-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                  >
                      <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 transition-colors duration-300 p-3 rounded-lg ${activeStep === index ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          {step.icon}
                      </div>
                      <div>
                          <h3 className="text-md font-bold text-gray-900 mb-1">{step.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      </div>
                  </motion.div>
                  ))}
              </div>

              {/* Right Column: Visual Display (more compact) */}
              <div className="col-span-7">
                  <div className="relative h-[450px] bg-white rounded-2xl shadow-xl border border-gray-200/80 w-full p-8 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                      <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-full"
                      >
                      {steps[activeStep].visual}
                      </motion.div>
                  </AnimatePresence>
                  </div>
              </div>
          </div>
        </div>
        
        {/* --- MOBILE CAROUSEL LAYOUT --- */}
        <div className="lg:hidden">
            <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80">
                <div className="relative h-[350px] bg-gray-50 rounded-xl border border-gray-200/80 overflow-hidden">
                    <AnimatePresence custom={activeStep}>
                         <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center"
                          >
                            {steps[activeStep].visual}
                        </motion.div>
                    </AnimatePresence>
                     <button onClick={() => changeStep(-1)} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md backdrop-blur-sm"><ChevronLeft /></button>
                     <button onClick={() => changeStep(1)} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md backdrop-blur-sm"><ChevronRight /></button>
                </div>
                <div className="text-center mt-6">
                    <h3 className="text-lg font-bold text-gray-900">{steps[activeStep].title}</h3>
                    <p className="text-gray-600 mt-2 h-12">{steps[activeStep].description}</p>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    {steps.map((_, index) => (
                        <button key={index} onClick={() => setActiveStep(index)} className={`w-2 h-2 rounded-full transition-all ${activeStep === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}></button>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks; 