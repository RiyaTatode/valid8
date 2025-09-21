import React from 'react';
import { ShieldCheck, Github, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-semibold text-gray-900 tracking-tight">
            Valid8
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 order-first md:order-none">
          © {new Date().getFullYear()} Valid8. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          {[
            { icon: <Github size={18} />, href: "https://github.com/RiyaTatode/valid8" },
            { icon: <Youtube size={18} />, href: "https://youtube.com/yourchannel" }, // Replace with actual YouTube link
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
              aria-label={link.icon.type.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
