'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aboutImages = [
      { src: 'images/sc6.jpg', alt: 'Creek\'s Edge Team at Work' },
  { src: 'images/sc5.jpg', alt: 'Landscape Transformation' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 pt-28">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">
              About Us
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
            
            {/* Image Section */}
            <div className="relative group cursor-pointer" onClick={nextImage}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-xl sm:rounded-2xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-shadow duration-300">
                <Image 
                  src={aboutImages[currentImageIndex].src}
                  alt={aboutImages[currentImageIndex].alt}
                  width={800} 
                  height={800}
                  className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                    aboutImages[currentImageIndex].src.includes('sc6.jpg') 
                      ? 'h-96 sm:h-[28rem] md:h-[32rem] object-cover' 
                      : 'h-64 sm:h-80 md:h-96 object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-base sm:text-lg font-semibold px-4 text-center">
                    Click to view next image
                  </div>
                </div>
              </div>
              {/* Image indicator dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {aboutImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                  Our Story
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  With over two years of dedicated experience in ecological restoration and landscape transformation, 
                  we&apos;ve made it our mission to breathe new life into properties across New England. Our journey began 
                  with a simple yet powerful vision: to restore the natural balance that once thrived in this region.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-serif">
                  Expertise in Action
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We specialize in the careful removal of invasive plant species that threaten our native ecosystems, 
                  replacing them with carefully selected native plants that not only thrive in our climate but also 
                  support local wildlife and pollinators. Every project we undertake is a step toward restoring the 
                  ecological harmony that makes New England truly special.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 sm:p-6 rounded-r-lg">
                <p className="text-base sm:text-lg text-gray-800 font-medium">
                  Our commitment extends beyond just landscaping—we&apos;re passionate about creating sustainable, 
                  thriving ecosystems that bring joy to our customers while contributing to the health of our planet.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🌱</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-serif mb-2 sm:mb-3">Ecological Expertise</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Deep understanding of native plant species and invasive removal techniques honed through years of hands-on experience.
              </p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">💚</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-serif mb-2 sm:mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Every project is approached with dedication to exceeding expectations and creating landscapes that bring lasting joy.
              </p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🌿</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-serif mb-2 sm:mb-3">Sustainable Solutions</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Creating landscapes that not only look beautiful but also contribute positively to the environment and local ecosystems.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 sm:mb-4">
              Ready to Transform Your Landscape?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Let&apos;s work together to create a beautiful, sustainable ecosystem that you&apos;ll love for years to come.
            </p>
            <a 
              href="/services" 
              className="inline-block bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Explore Our Services
            </a>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
}
