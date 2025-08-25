'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <nav className="bg-white border-2 border-blue-600 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            {/* Circular Logo */}
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                {/* Segmented blue ring effect */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                </div>
              </div>
            </div>
            
            {/* Company Name */}
           <Image 
             src="/Images/logo.png" 
             alt="Creek's Edge Logo" 
             width={80} 
             height={80}
             className="mix-blend-multiply"
           />
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
