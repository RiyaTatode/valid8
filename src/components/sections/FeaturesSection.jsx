import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Globe, Lock } from 'lucide-react';

const features = [
  { icon: <Zap size={24} className="text-blue-500" />, title: 'Instant Verification', description: 'Our AI system verifies certificates in seconds, not hours.' },
  { icon: <Search size={24} className="text-blue-500" />, title: 'Advanced Fraud Detection', description: 'Sophisticated algorithms detect forgeries with 99.9% accuracy.' },
  { icon: <Globe size={24} className="text-blue-500" />, title: 'Global Database Access', description: 'Connect with thousands of educational institutions worldwide.' },
  { icon: <Lock size={24} className="text-blue-500" />, title: 'Secure & Encrypted', description: 'Your documents are protected with bank-level, end-to-end encryption.' },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">Everything You Need for Total Trust</h2>
        <p className="mt-4 text-lg text-gray-600">A powerful, intuitive, and completely secure platform.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full w-max mb-4">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
