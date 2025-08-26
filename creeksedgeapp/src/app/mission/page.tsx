'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

export default function Mission() {
  const [missionImageIndex, setMissionImageIndex] = useState(0);
  const [landImageIndex, setLandImageIndex] = useState(0);

  const missionImages = [
      { src: 'images/image21.jpg', alt: 'Our mission' },
  { src: 'images/image8.jpg', alt: 'Mission image 2' },
  { src: 'images/image11.jpg', alt: 'Mission image 3' },
  { src: 'images/image20.jpg', alt: 'Mission image 4' },
  { src: 'images/image16.jpg', alt: 'Mission image 4' },
  ];

  const landImages = [
      { src: 'images/sc4.jpg', alt: 'Learn the Land' },
  { src: 'images/image14.png', alt: 'Land image 2' },

  
  ];

  const nextMissionImage = () => {
    setMissionImageIndex((prev) => (prev + 1) % missionImages.length);
  };

  const nextLandImage = () => {
    setLandImageIndex((prev) => (prev + 1) % landImages.length);
  };

  // Handle scroll offset for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        const navbarHeight = 112; // Approximate navbar height (pt-28 = 7rem = 112px)
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight - 20, // Additional 20px offset for better spacing
          behavior: 'smooth'
        });
      }
    }
  }, []);

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
              Our Mission
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Our Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">
                  Re-integrating New England's Natural Heritage
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Our goal at Creeks Edge is to re-integrate the historic New England landscape back into our yards and lives. Our ecosystems are in distress! Complex ecological webs have been replaced by single-species deserts that require intense chemical and water use to keep 'pristine'. We want to bring life back into our lawns.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-serif">
                  The Broken System
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Many of the ornamentals used in traditional landscaping have escaped into the wild and wreaked havoc. Today, invasive species cost billions of dollars in economic damage annually, along with destroying the habitats they invade. Without a proper balance of plants and animals, unwanted pest species such as mosquitoes, ticks, and mice all thrive in these broken systems.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 sm:p-6 rounded-r-lg">
                <p className="text-base sm:text-lg text-gray-800 font-medium">
                  We look to build a unified and connected pathway of ecosystem gardens that allow for people and nature to thrive hand in hand, all while making your land a talking point within the neighborhood.
                </p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer" onClick={nextMissionImage}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-xl sm:rounded-2xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-shadow duration-300">
                <Image 
                  src={missionImages[missionImageIndex].src}
                  alt={missionImages[missionImageIndex].alt}
                  width={800} 
                  height={800}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-base sm:text-lg font-semibold px-4 text-center">
                    Click to view next image
                  </div>
                </div>
              </div>
              {/* Image indicator dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {missionImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors duration-300 ${
                      index === missionImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Learn the Land Section */}
          <div id="learn-the-land" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1 group cursor-pointer" onClick={nextLandImage}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-xl sm:rounded-2xl transform -rotate-2 sm:-rotate-3 group-hover:-rotate-4 sm:group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-shadow duration-300">
                <Image 
                  src={landImages[landImageIndex].src}
                  alt={landImages[landImageIndex].alt}
                  width={800} 
                  height={800}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-base sm:text-lg font-semibold px-4 text-center">
                    Click to view next image
                  </div>
                </div>
              </div>
              {/* Image indicator dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {landImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors duration-300 ${
                      index === landImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                  Learn the Land
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  The New England landscape is one of immense diversity and uniquity. Before the mass clearcutting that went on in the 1800s, our land was home to some of the oldest and most diverse forests in the world.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-serif">
                  The Natural Heritage
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Four hundred year old white pines, sprawling meadows, pristine creeks and streams zigzagging the landscape—this is what made New England. Our rocky soils held the keys to life for countless amphibians, turtles, song birds, and pollinating insects.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 rounded-r-lg">
                <p className="text-base sm:text-lg text-gray-800 font-medium">
                  Our 120+ native species of trees is one of the most diverse in the entire continent, along with over 2000 herbaceous species. Fall back in love with our landscape and bring a piece of it back to you.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
}
