'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <nav className="bg-white border-2 border-blue-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            {/* Circular Logo */}
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                {/* Segmented blue ring effect */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  {/* Oak leaf icon - using a simple SVG representation */}
                  <svg 
                    className="w-10 h-10 text-green-800" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Company Name */}
            <div className="text-center">
              <h1 className="text-lg font-semibold text-gray-800 leading-tight">
                LANDSCAPE<br />ARCHITECTURE
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-gray-800 font-medium text-lg transition-colors duration-200 hover:text-blue-600 ${
                  activeLink === link.name 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
