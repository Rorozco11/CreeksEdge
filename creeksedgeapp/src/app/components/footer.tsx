'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto lg:mx-0 bg-white rounded-full flex items-center justify-center backdrop-blur-sm">
                <Image
                  src="images/logo.png"
                  alt="Creek&apos;s Edge Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-serif mb-3">Creek&apos;s Edge</h3>
            <p className="text-gray-300 leading-relaxed">
              Bringing the historic New England landscape back to your property, 
              one sustainable ecosystem at a time.
            </p>
          </div>

          {/* Principals Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4 font-serif">Our Team</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Max Shafer</p>
              <p className="text-gray-300">Tim Krutz</p>
              <div className="w-16 h-px bg-gradient-to-r from-green-400 to-transparent mx-auto lg:mx-0 mt-4"></div>
              <p className="text-sm text-gray-400 mt-2">New England Based</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4 font-serif">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="tel:203-848-0296" 
                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span>203-848-0296</span>
              </a>
              
              <a 
                href="mailto:creeksedge.EL@gmail.com" 
                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span>creeksedge.EL@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Creek&apos;s Edge. All rights reserved.
          </p>
          
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/creeksedgeeco/?igsh=MW81cWYwd2Y3YXU4bA%3D%3D#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-400/20 transition-colors group"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition-colors">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
