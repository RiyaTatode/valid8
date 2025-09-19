import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileUp, ScanLine, DatabaseZap, CircleCheck, Bot } from 'lucide-react';

const AnimatedWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const workflowSteps = [
    { icon: <FileUp size={24} />, title: 'Uploading Document', description: 'Securely upload your certificate.' },
    { icon: <ScanLine size={24} />, title: 'AI Analysis', description: 'Our AI scans for key features & text.' },
    { icon: <DatabaseZap size={24} />, title: 'Database Verification', description: 'Cross-referencing with trusted sources.' },
    { icon: <CircleCheck size={24} />, title: 'Verification Complete', description: 'Authenticity confirmed and recorded.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveStep((prev) => (prev + 1) % workflowSteps.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-3xl p-6 h-[270px]">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold text-gray-900">Verification Flow</p>
        <Bot size={24} className="text-blue-500" />
      </div>
      <div className="relative h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">{workflowSteps[activeStep].icon}</div>
            <h3 className="font-semibold text-gray-800">{workflowSteps[activeStep].title}</h3>
            <p className="text-sm text-gray-500">{workflowSteps[activeStep].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedWorkflow;
