// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { text: 'Features', to: '/#features' },
  { text: 'How It Works', to: '/#how-it-works' },
  { text: 'Contact', to: '/#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // A single function to handle all link clicks
  const handleLinkClick = (e, to) => {
    // If it's a hash link, handle the smooth scroll
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.substring(2);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    // Always close the menu after a link is clicked
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 top-0 z-50 sticky">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Valid8</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button as={Link} to="/signin" variant="secondary">
              Sign In
            </Button>
            <Button as={Link} to="/signin" variant="primary">
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 text-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onLinkClick={handleLinkClick} />
    </>
  );
};

const MobileMenu = ({ isOpen, onClose, onLinkClick }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 md:hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute top-0 right-0 h-full w-full max-w-xs bg-white p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-500">
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col gap-8 mt-16">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                onClick={(e) => onLinkClick(e, link.to)}
                className="text-2xl font-medium text-gray-800"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col gap-4">
            <Button as={Link} to="/signin" variant="secondary" size="lg" className="w-full" onClick={onClose}>
              Sign In
            </Button>
            <Button as={Link} to="/signin" variant="primary" size="lg" className="w-full" onClick={onClose}>
              Get Started
            </Button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Header;