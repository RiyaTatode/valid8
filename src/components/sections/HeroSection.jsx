import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import AnimatedWorkflow from '../ui/AnimatedWorkflow';

const HeroSection = () => {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1.2 } },
  };
  const SCALE_IN_VARIANTS = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    show: { opacity: 1, scale: 1, x: 0, transition: { type: 'spring', duration: 1.2, delay: 0.2 } },
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 min-h-[calc(100vh-80px)] py-20">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.2 } } }}
            className="text-center lg:text-left"
          >
            <motion.h1 variants={FADE_IN_VARIANTS} className="text-5xl lg:text-7xl font-bold tracking-tighter text-gray-900">
              Trust Through
              <br />
              <span className="text-blue-600">Technology.</span>
            </motion.h1>
            <motion.p variants={FADE_IN_VARIANTS} className="max-w-md mx-auto lg:mx-0 mt-6 text-lg text-gray-600">
              Our AI-powered platform ensures the authenticity of every certificate, fighting fraud and building a global foundation of trust.
            </motion.p>
            <motion.div variants={FADE_IN_VARIANTS} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button as={Link} to="/verify" variant="premium" size="lg">
                Start Verifying Now
              </Button>
              <Button
                as={Link}
                to="/#how-it-works"
                variant="secondary"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </Button>
            </motion.div>
          </motion.div>
          <motion.div variants={SCALE_IN_VARIANTS} initial="hidden" animate="show" viewport={{ once: true }} className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm h-auto bg-gray-900 rounded-[40px] border-8 border-gray-800 p-4 shadow-2xl">
              <div className="w-24 h-5 bg-gray-800 rounded-full mx-auto" />
              <div className="mt-4">
                <AnimatedWorkflow />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ x: ['-20%', '0%', '-20%'], y: ['-50%', '-30%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full opacity-50"
      />
      <motion.div
        animate={{ x: ['80%', '100%', '80%'], y: ['40%', '60%', '40%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 blur-3xl rounded-full opacity-50"
      />
    </section>
  );
};

export default HeroSection;
